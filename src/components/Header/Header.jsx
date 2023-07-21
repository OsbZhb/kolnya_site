import logo from '../Header/logo.png'

// import { Link } from 'react-scroll'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Header.scss'
import { Link } from 'react-router-dom';




const Header = () => {
    
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <header className="header" id='header'>
            <div className="container">
                <div className='header__block'>
                    <nav className='navbar'>
                        <a href='/' className='logo'>
                            <img src={logo} alt='logo' /> 
                        </a>
                        <div className='hamburger' onClick={handleClick}>
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className='nav-item'>
                                <a href='#ourStudio' onClick={closeMenu}>наша студия</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#masters' onClick={closeMenu}>мастера</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#reviews' onClick={closeMenu}>отзывы</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#coffeHouse' onClick={closeMenu}>наша кофейня</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#tattoSchool' onClick={closeMenu}>обучение</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#products' onClick={closeMenu}>товары</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#questions' onClick={closeMenu}>FAQ</a>
                            </li>
                            <li className='nav-item'>
                                <a to="/" href='#contact' onClick={closeMenu}>контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );  
}
 
export default Header;