import React from 'react';
import { Link } from 'react-router-dom';
import { coverURL } from '../utils/openLibrary';

export default function BookCard({ book, onToggleFav, isFav }){
  const workId = book.key?.split('/').pop();
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 overflow-hidden'>
      <Link to={`/book/${workId}`} className='block'>
        <img src={coverURL(book.cover_i)} alt={book.title} className='w-full h-48 object-cover' />
        <div className='p-3'>
          <h3 className='font-semibold text-sm line-clamp-2'>{book.title}</h3>
          <p className='text-xs text-gray-500'>{book.author_name?.join(', ')||'Unknown'}</p>
          <p className='text-xs text-gray-400'>First: {book.first_publish_year||'N/A'}</p>
        </div>
      </Link>
      <div className='p-3 flex justify-between items-center'>
        <Link to={`/book/${workId}`} className='text-indigo-600 text-sm'>Details</Link>
        <button onClick={()=>onToggleFav?.(book)} className={`px-3 py-1 rounded text-sm ${isFav? 'bg-yellow-400':'bg-gray-100 dark:bg-gray-700'}`}>{isFav? 'Saved':'Save'}</button>
      </div>
    </div>
  );
}
