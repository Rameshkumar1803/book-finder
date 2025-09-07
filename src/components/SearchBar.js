import React, { useState } from 'react';
export default function SearchBar({ onSearch }){
  const [q,setQ]=useState('');
  const [type,setType]=useState('title');
  return (
    <form onSubmit={e=>{e.preventDefault(); onSearch({ type, query: q });}} className='flex gap-2'>
      <input className='flex-1 p-2 border rounded' value={q} onChange={e=>setQ(e.target.value)} placeholder='Search books...' />
      <select value={type} onChange={e=>setType(e.target.value)} className='p-2 border rounded'>
        <option value='title'>Title</option>
        <option value='author'>Author</option>
        <option value='subject'>Subject</option>
        <option value='isbn'>ISBN</option>
      </select>
      <button className='bg-indigo-600 text-white px-4 py-2 rounded'>Search</button>
    </form>
  );
}
