import logo from '../Header/logo.png'

// import { Link } from 'react-scroll';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import { animateScroll as scroll, scroller } from 'react-scroll';
import './Header.scss'
// import OurStudio from '../OurStudio/OurStudio';



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
                                <a href='#ourStudio' smooth={true} duration={500} onClick={closeMenu}>наша студия</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#masters" smooth={true} duration={500} onClick={closeMenu}>мастера</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#reviews" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>отзывы</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#coffeHouse" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>наша кофейня</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#tathrefSchool" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>обучение</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#products" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>товары</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#questions" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FAQ</a>
                            </li>
                            <li className='nav-item'>
                                <a href="#contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );  
}
 
export default Header;