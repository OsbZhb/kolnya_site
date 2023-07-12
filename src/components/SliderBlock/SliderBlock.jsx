import './SliderBlock.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import logo_slider from './logo_slider.png'

import "swiper/css";
import "./swiper.scss"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const SliderBlock = () => {
    return ( 
        <div className="sliderBlock">
            <div className="container">
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
                                <a target="_blank" href="https://vk.com/kolnya">
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
 
export default SliderBlock;