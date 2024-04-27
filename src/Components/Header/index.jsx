import React from 'react';
import logo from '../../assets/Logo-TechBiz-Forense-Preta.png'
import { Link } from 'react-router-dom';

import './style.css'
// import { Container } from './styles';

export default function Header() {
    return (
        <header className='container'>
            <Link to={'/'}>
                <img className='logo' src={logo} />
            </Link>
            <Link to={'/'} className='cell-link'>
                <div className='cell'>
                    <span>Início</span>
                </div>
            </Link>
        </header>
    );
}