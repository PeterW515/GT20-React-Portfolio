import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const pages = ['About', 'Portfolio', 'Contact', 'Resume']

  return (
    <div>
      <Header pages={pages} currentPage={currentPage} handlePageChange={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
