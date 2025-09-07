import React from 'react';
export default function ErrorBox({ message, onRetry }){
  return (
    <div className='bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-700 text-red-800 dark:text-red-200 p-4 rounded'>
      <div className='flex items-center justify-between'>
        <div>{message}</div>
        {onRetry && <button onClick={onRetry} className='ml-4 px-3 py-1 bg-red-200 dark:bg-red-700 rounded'>Retry</button>}
      </div>
    </div>
  );
}
