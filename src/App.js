import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import { NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Navbar/>
    <NavDropdown/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
