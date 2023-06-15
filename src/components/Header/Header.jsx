import logo from '../../assets/logo_3_white 1.png'
import logo_slider from '../../assets/logo_slider.png'
import './Header.scss'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.scss"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Header = () => {
    

    return ( 
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="Logo" />
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
                <div className="header__slider">
                    <>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={logo_slider} alt="logo_slider"/>
                            <a target="_blank" href="https://vk.com/kolnyaschool?from=groups">
                                <button className='slider__btn'>Хочу тату</button>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                    </>
                </div>
            </div>
        </div>
     );
}
 
export default Header;