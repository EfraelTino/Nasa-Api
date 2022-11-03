import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import './App.css';
import NotFound from './components/NotFound';


function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Home/>} path='/' exact/>
        <Route element= {<NasaPhoto/>}  path='/nasafoto' />
        <Route element= {<NotFound />}  path='*' />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
