import React from 'react';
import logo from '../../assets/Logo-TechBiz-Forense-Preta.png'

import './style.css'
// import { Container } from './styles';

export default function Header() {
  return(
    <header className='container'>
        <img className='logo' src={logo} />
        <div className='cell'>
            <span>Início</span>
        </div>
    </header>
  );
}