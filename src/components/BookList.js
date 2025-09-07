import React from 'react';
import BookCard from './BookCard';
export default function BookList({ books, onToggleFav, favorites }){
  if(!books?.length) return <div className='text-center py-8 text-gray-500'>⚠️ No books found. Try a different search.</div>;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {books.map(b=> <BookCard key={b.key} book={b} onToggleFav={onToggleFav} isFav={favorites?.some(f=>f.key===b.key)} />)}
    </div>
  );
}
