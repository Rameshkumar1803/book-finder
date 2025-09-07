import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { getBookDetails, coverURL } from '../utils/openLibrary';

export default function BookDetail(){
  const { id } = useParams();
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState('');

  useEffect(()=>{
    let cancelled=false;
    async function load(){ setLoading(true); setError(''); try{ const json = await getBookDetails(id); if(cancelled) return; setData(json);}catch(e){ setError('Failed to load book details.'); } finally{ if(!cancelled) setLoading(false); } }
    load();
    return ()=>{ cancelled=true; };
  },[id]);

  if(loading) return <LoadingSpinner />;
  if(error) return <div className='text-red-500'>{error}</div>;
  if(!data) return <div>No data</div>;

  const desc = data.description ? (typeof data.description==='string'? data.description : data.description.value) : 'No description available.';

  return (
    <div className='bg-white dark:bg-gray-800 p-6 rounded shadow'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/3'><img src={data.covers?.length? coverURL(data.covers[0],'L') : 'https://via.placeholder.com/300x440?text=No+Cover'} alt={data.title} className='w-full rounded' /></div>
        <div className='flex-1'>
          <h2 className='text-2xl font-bold mb-2'>{data.title}</h2>
          <div className='prose max-w-none mb-4'>{desc}</div>
          <div className='mb-4'><h4 className='font-semibold'>Subjects</h4><div className='flex gap-2 flex-wrap mt-2'>{(data.subjects||[]).slice(0,20).map(s=> <span key={s} className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded'>{s}</span>)}</div></div>
          <div className='mt-4'><Link to='/' className='text-sm underline'>← Back to search</Link></div>
        </div>
      </div>
    </div>
  );
}
