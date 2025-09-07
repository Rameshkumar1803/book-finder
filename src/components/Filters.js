import React from 'react';
export default function Filters({ filters, setFilters }){
  const handle = (e)=> setFilters({ ...filters, [e.target.name]: e.target.value });
  return (
    <div className='flex gap-2 flex-wrap'>
      <input name='year' value={filters.year||''} onChange={handle} placeholder='Year' className={`p-2 border rounded ${filters.year? 'border-blue-500 ring-1 ring-blue-500':''}`} />
      <select name='language' value={filters.language||''} onChange={handle} className={`p-2 border rounded ${filters.language? 'bg-blue-100':''}`}>
        <option value=''>All Languages</option>
        <option value='eng'>English</option>
        <option value='hin'>Hindi</option>
        <option value='spa'>Spanish</option>
      </select>
      <select name='ebook' value={filters.ebook||''} onChange={handle} className={`p-2 border rounded ${filters.ebook? 'bg-blue-100':''}`}>
        <option value=''>All</option>
        <option value='true'>eBooks only</option>
      </select>
    </div>
  );
}
