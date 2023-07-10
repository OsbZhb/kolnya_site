import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link, link} from 'react-router-dom'
import logo from '../Header/logo.png'
// import "../Styles/main.css";
import './Header_new.scss'


const Header = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return ( 
        <header className="container">
            <div className="header_block">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />   
                    </Link>
                </div>
                <nav className="nav-links" ref={navRef}>
                        <Link>наша студия</Link>
                        <Link>отзывы</Link>
                        <Link>мастера</Link>
                        <Link>наша кофейня</Link>
                        <Link>обучение</Link>
                        <Link>товары</Link>
                        <Link>FAQ</Link>
                        <Link>контакты</Link>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
		</header>
     );
}
 
export default Header;