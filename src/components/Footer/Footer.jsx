import './Footer.scss';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="footer__wrapper-background">
                <div className="container">
                    
                        <div className="footer__block">
                            <h1>© 2022. Тату-студия “Кольня”. Все права защищены.</h1>
                            <span className='footer__line'></span>
                            <nav className="footer__navbar">
                                <ul className="footer__nav">
                                    <li className='nav-link'>
                                        <a href="#ourStudio">наша студия</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#masters">мастера</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#reviews">отзывы</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#coffeHouse">наша кофейня</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#tattoSchool">обучение</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#products">товары</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#questions">FAQ</a>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="#contact">контакты</a>
                                    </li>
                                </ul>
                            </nav>
                            
                        </div>
                </div>
            </div>
        </footer>
    );
}
 


export default Footer;