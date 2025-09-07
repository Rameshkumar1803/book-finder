import React from 'react';
export default function DarkToggle({ darkMode, setDarkMode }){
  return (
    <button onClick={()=>setDarkMode(!darkMode)} className='p-2 rounded bg-gray-200 dark:bg-gray-700'>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
