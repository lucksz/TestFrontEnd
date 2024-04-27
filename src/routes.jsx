import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Investigado from './Investigado';

export default function Rotas() {
  return(
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/investigado' element={<Investigado/>} />
    </Routes>
  );
}
