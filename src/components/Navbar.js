import React from 'react';
import { Link } from 'react-router-dom';
import DarkToggle from './DarkToggle';

export default function Navbar({ darkMode, setDarkMode }){
  return (
    <nav className='bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center'>
      <Link to='/' className='text-xl font-bold text-blue-600 dark:text-blue-400'>📚 Book Finder</Link>
      <div className='flex items-center gap-3'>
        <Link to='/' className='hidden sm:inline text-sm'>Home</Link>
        <DarkToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
}
