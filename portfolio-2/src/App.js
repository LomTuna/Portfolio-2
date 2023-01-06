
import './App.css';
import Navi from './components/nav';
import Hero from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, useEffect } from 'react';
import Webfont from 'webfontloader'

function App() {
  useEffect(() =>{
    Webfont.load({
      google: {
        families: ['Be Vietnam Pro','Kanit','Droid Sans', 'Chilanka']
      }
    });
  }, []);
  return (
    <div className="App">
      <Navi></Navi>

      <Hero></Hero>
    </div>
  );
}

export default App;
