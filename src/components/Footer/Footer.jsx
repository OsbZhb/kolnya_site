import './Footer.scss';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="footer__wrapper-background">
                <div className="container">
                    {/* <span className='footer__line'></span> */}
                        <div className="footer__block">
                            <h1>© 2022. Тату-студия “Кольня”. Все права защищены.</h1>
                            <nav className="footer__navbar">
                                <ul className="footer__nav">
                                    <li className='nav-link'>наша студия</li>
                                    <li className='nav-link'>отзывы</li>
                                    <li className='nav-link'>мастера</li>
                                    <li className='nav-link'>наша кофейня</li>
                                    <li className='nav-link'>обучение</li>
                                    <li className='nav-link'>товары</li>
                                    <li className='nav-link'>FAQ</li>
                                    <li className='nav-link'>контакты</li>
                                </ul>
                            </nav>
                        </div>
                </div>
            </div>
        </footer>
    );
}
 


export default Footer;