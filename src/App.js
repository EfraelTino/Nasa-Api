import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import NotFoung from './components/NotFoung';


function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Home/>} path='/' exact/>
        <Route element= {<NasaPhoto/>}  path='/nasafoto' />
        <Route element= {<NotFoung />}  path='*' />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
