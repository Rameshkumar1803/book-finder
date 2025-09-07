import React from 'react';
export default function Pagination({ page, setPage, hasMore }){
  const pages = [page-1, page, page+1].filter(p=>p>0);
  return (
    <div className='flex items-center justify-center gap-2 mt-4'>
      <button onClick={()=>setPage(page-1)} disabled={page===1} className='px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50'>Prev</button>
      {pages.map(p=> <button key={p} onClick={()=>setPage(p)} className={`px-3 py-1 rounded ${p===page? 'bg-blue-600 text-white':'bg-gray-200 dark:bg-gray-700'}`}>{p}</button>)}
      <button onClick={()=>setPage(page+1)} disabled={!hasMore} className='px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50'>Next</button>
    </div>
  );
}
