import React from 'react';
import './App.css';

import Navbar from './pages/navbar';
import { Routes, Route } from 'react-router-dom';

// page //
import Home from './pages/home';
import About from './pages/about';
import Cats from './pages/cats';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cats' element={<Cats />} />
      </Routes>
    </>
  );
}

export default App;
