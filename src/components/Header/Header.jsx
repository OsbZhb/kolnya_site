import logo from '../Header/logo.png'

// import { Link } from 'react-scroll';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import './Header.scss'
import OurStudio from '../OurStudio/OurStudio';

const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


const Header = () => {
    
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const scrollTo = (ourStudio) => {
        scroller.scrollTo(ourStudio, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      };

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
                                <Link to='/#ourStudio' onClick={() => scrollTo('ourStudio')} smooth={true} duration={500} onClick={closeMenu}>наша студия</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#masters" smooth={true} duration={500} onClick={closeMenu}>мастера</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#reviews" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>отзывы</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#coffeHouse" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>наша кофейня</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#tattoSchool" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>обучение</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#products" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>товары</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#questions" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>FAQ</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/#contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );  
}
 
export default Header;