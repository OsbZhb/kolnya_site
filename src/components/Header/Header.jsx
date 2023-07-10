import logo from '../Header/logo.png'

import './Header.scss'
import { Link } from 'react-router-dom';




const Header = () => {
    

    return ( 
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />   
                    </Link>
                </div>
                <nav className="header__navbar">
                    <ul className="nav-links">
                        <li>наша студия</li>
                        <li>отзывы</li>
                        <li>мастера</li>
                        <li>наша кофейня</li>
                        <li>обучение</li>
                        <li>товары</li>
                        <li>FAQ</li>
                        <li>контакты</li>
                    </ul>
                </nav>

            </div>
        </div>
     );
}
 
export default Header;