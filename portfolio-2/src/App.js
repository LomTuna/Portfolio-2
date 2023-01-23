
import './App.css';
import Navi from './components/Nav';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, useEffect } from 'react';
import Webfont from 'webfontloader'
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Projects from './components/Contact';

function App() {
  useEffect(() =>{
    Webfont.load({
      google: {
        families: ['Anton','Contrail One','Lobster','League Spartan','Cutive Mono', 'Be Vietnam Pro', 'Racing Sans One', 'Bowlby One SC', 'Noto Sans Hebrew', 'Farro', 'Shrikhand', 'PT Mono', 'Lexend Deca']
      }
    });
  }, []);
  return (
    <div className='wholeApp'>
      <Navi/>
      <div className='container'>
        <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
