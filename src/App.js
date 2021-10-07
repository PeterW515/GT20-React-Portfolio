import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import pages from './components/Main/pages';


function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
      <Header pages={Object.keys(pages)} currentPage={currentPage} handlePageChange={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
