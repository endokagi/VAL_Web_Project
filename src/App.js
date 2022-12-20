import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Scottish from './pages/Scottish';
import British from './pages/British';
import Ragdoll from './pages/Ragdoll';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/scottish' element={<Scottish />} />
        <Route path='/british' element={<British />} />
        <Route path='/ragdoll' element={<Ragdoll />} />
      </Routes>
    </div>
  );
}

export default App;
