
import './Questions.scss';
import questions_img from './photo/questions_img.png';
import AccordionComp from './AccordionComp/AccordionComp';

import inst from './photo/logo/inst.png';
import vk from './photo/logo/vk.png';
import youtube from './photo/logo/youtube.png';
import tg from './photo/logo/tg.png';
import gis from './photo/logo/2gis.png';
import yaMaps from './photo/logo/yaMaps.png'



const Questions = () => {
    return ( 
        <div className="questions">
            <div className="questions__wrapper-background">
                {/* <img className='questions_image' src={questions_img} alt="#" /> */}
                <div className="container">
                    <div className="questions__namebox">
                        <div className="questions__title">
                            <span></span>
                            <h1>F.A.Q.</h1>
                            <span></span>
                        </div>
                        <div className="questions__subtitle">
                            <p>Нам задают много вопросов по поводу курса, а мы отвечаем! Посмотрите на самые частые вопросы</p>
                        </div>
                    </div>
                    <div className="accordion__block">
                        <div className="accordion__block-one">
                            <AccordionComp />
                        </div>
                        <div className="accordion__block-two">
                            <AccordionComp />
                        </div>
                    </div>
                    <div className="blockQuestions__btn">
                        <button className='questions__btn'>ПОКАЗАТЬ БОЛЬШЕ</button>
                    </div>
                    <div className="contact">
                    <div className="contact__title">
                        <h1>КОНТАКТЫ</h1>
                    </div>
                    <div className="contact__full">
                        <div className="contact__block">
                            <p className='contact__subtitle'>Мы доступны практически 24/7, пишите и звоните в любое время!</p>
                            <div className="contact__number">
                                <p className='contact__number__text'>телефон</p>
                                <div className="number__block">
                                    <p>+7 (987) 654-32-10</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact__info">
                            <div className="info__blockOne">
                                <div className="info__item">
                                    <h2>ЭЛ. ПОЧТА</h2>
                                    <p><a href="mailto:vlad@htmlbook.ru">support@kolnya.ru</a></p>
                                </div>
                                <div className="info__item">
                                    <h2>АДРЕС</h2>
                                    <p>г. Вологда, ул. Ленинградская, 48</p>
                                </div>
                            </div>
                            <div className="info__blockTwo">
                                <div className="info__item">
                                    <h2>СОЦ. СЕТИ</h2>
                                    <div className="info__item__img">
                                        <a href="">
                                        <img src={inst} alt="#" />
                                        </a>
                                        <a href="">
                                        <img src={vk} alt="#" />
                                        </a>
                                        <a href="">
                                        <img src={youtube} alt="#" />
                                        </a>
                                        <a href="">
                                        <img src={tg} alt="#" />
                                        </a>
                                    </div>
                                </div>
                                <div className="info__item">
                                    <h2>ЛОКАЦИЯ</h2>
                                    <div className="info__item__maps">
                                        <a href="">
                                        <img src={gis} alt="#" />
                                        </a>
                                        <a href="">
                                        <img src={yaMaps} alt="#" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Questions;