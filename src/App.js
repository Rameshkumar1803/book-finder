import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';

function App(){ 
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className='p-4 max-w-7xl mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book/:id' element={<BookDetail />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
