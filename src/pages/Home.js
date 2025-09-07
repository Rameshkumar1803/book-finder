import React, { useEffect, useMemo, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBox from '../components/ErrorBox';
import { searchBooks } from '../utils/openLibrary';
import { loadFavorites } from '../utils/localStorage';

export default function Home(){
  const [books, setBooks]=useState([]);
  const [numFound, setNumFound]=useState(0);
  const [page,setPage]=useState(1);
  const [queryState,setQueryState]=useState({ type:'title', query:'' });
  const [filters,setFilters]=useState({});
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');
  const [favorites,setFavorites]=useState(loadFavorites());

  useEffect(()=>{ localStorage.setItem('bf_recent', JSON.stringify([])); }, []);

  useEffect(()=>{
    if(!queryState.query){ setBooks([]); setNumFound(0); return; }
    let cancelled=false;
    async function load(){
      setLoading(true); setError('');
      try{
        const data = await searchBooks({ type: queryState.type, query: queryState.query, page });
        if(cancelled) return;
        setNumFound(data.numFound||0);
        let docs = data.docs||[];
        if(filters.year) docs = docs.filter(d=> d.first_publish_year && d.first_publish_year === Number(filters.year));
        if(filters.language) docs = docs.filter(d=> d.language && d.language.includes(filters.language));
        if(filters.ebook) docs = docs.filter(d=> d.ebook_access && d.has_fulltext);
        if(filters.sort === 'newest') docs.sort((a,b)=>(b.first_publish_year||0)-(a.first_publish_year||0));
        if(filters.sort === 'author') docs.sort((a,b)=> (a.author_name?.[0]||'').localeCompare(b.author_name?.[0]||''));
        setBooks(prev => page===1 ? docs : [...prev,...docs]);
      }catch(e){
        if(e.name==='AbortError') setError('Request timed out — check your connection.');
        else setError('🚨 Server error, please try again later.');
      }finally{ if(!cancelled) setLoading(false); }
    }
    load();
    return ()=>{ cancelled=true; };
  }, [queryState, page, filters]);

  const languages = useMemo(()=>{ const s=new Set(); books.forEach(b=> (b.language||[]).forEach(l=>s.add(l))); return Array.from(s); }, [books]);

  const doSearch = ({ type, query })=>{ setQueryState({ type, query }); setPage(1); };
  const handleFilterChange = f=>{ setFilters(f); setPage(1); };
  const toggleFavorite = (book)=>{
    setFavorites(prev=>{
      const exists = prev.some(p=>p.key===book.key);
      if(exists) return prev.filter(p=>p.key!==book.key);
      const mini={ key: book.key, title: book.title, author_name: book.author_name, cover_i: book.cover_i };
      return [mini, ...prev];
    });
  };
  const removeFav = (book)=> setFavorites(prev=> prev.filter(p=>p.key!==book.key));

  return (
    <div className='space-y-4'>
      <SearchBar onSearch={(payload)=>doSearch(payload)} />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='md:col-span-3 space-y-4'>
          <div className='flex items-center justify-between'>
            <div className='text-sm text-gray-600'>Results: <span className='font-medium'>{numFound}</span></div>
            <div className='text-xs text-gray-500'>Page {page}</div>
          </div>
          <div className='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm min-h-[200px]'>
            {loading && page===1 ? <LoadingSpinner /> : error ? <ErrorBox message={error} onRetry={()=>doSearch(queryState)} /> : (
              <>
                <BookList books={books} onToggleFav={toggleFavorite} favorites={favorites} />
                {books.length>0 && <Pagination page={page} setPage={setPage} hasMore={books.length>0} />}
              </>
            )}
          </div>
        </div>
        <aside>
          <Filters filters={filters} setFilters={setFilters} />
          <div className='mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm'>
            <h3 className='font-semibold mb-2'>Favorites</h3>
            {favorites.length===0 ? <div className='text-sm text-gray-500'>No favorites yet</div> : favorites.map(f=> <div key={f.key} className='flex items-center justify-between mb-2'><div className='text-sm'>{f.title}<div className='text-xs text-gray-400'>{f.author_name?.[0]}</div></div></div>)}
          </div>
        </aside>
      </div>
    </div>
  );
}
