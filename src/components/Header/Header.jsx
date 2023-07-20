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

    const ourStudioScroll = () => {
        
    }

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
                                <Link to="/ourStudio" href='#ourStudio' onClicked={ourStudioScroll} onClick={closeMenu}>наша студия</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#masters' onClick={closeMenu}>мастера</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#reviews' onClick={closeMenu}>отзывы</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#coffeHouse' onClick={closeMenu}>наша кофейня</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#tattoSchool' onClick={closeMenu}>обучение</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#products' onClick={closeMenu}>товары</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#questions' onClick={closeMenu}>FAQ</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/" href='#contact' onClick={closeMenu}>контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );  
}
 
export default Header;