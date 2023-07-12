import './Masters.scss'
import { Route, Routes, Link} from 'react-router-dom';

import photo_1 from './photo/photo_1.png';
import photo_2 from './photo/photo_2.png';
import photo_3 from './photo/photo_3.png';
import photo_4 from './photo/photo_4.png';
import photo_5 from './photo/photo_5.png';
import bg from './photo/bg.png';


const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const Masters = () => {
    return ( 
        <div className="masters">
            <div className="yallow__wrapper">
                    {/* <div className="yallow-background">
                        <img src={bg} alt="#" />
                   </div> */}
            <div className="container">
                <div className="masters__content">
                <div className="masters__headline">
                    <h2 className='masters__title'>мастера</h2>
                    <p className='masters__subtitle'>Наши ученики очень довольны пройденым курсом по татуировкам. Посмотрите, какие у них получились результаты</p>
                </div>

                <div className="masters__cards">
                    <div className="masters__cards-item">
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            {/* <a href="#">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </a> */}
                            <Link onClick={scrollToTop} to="/MastersPage_Katya">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_2} alt="#" />
                            <h2 className='cards__item__title'><span>ЕЛИЗАВЕТА ПЕТРОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <Link onClick={scrollToTop} to="/MastersPage_Liza">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_3} alt="#" />
                            <h2 className='cards__item__title'><span>ПОЛИНА ГАМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <Link onClick={scrollToTop} to="/MastersPage_Polina">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_4} alt="#" />
                            <h2 className='cards__item__title'><span>Лера Невзорова</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <Link onClick={scrollToTop} to="/MastersPage_Lera">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_5} alt="#" />
                            <h2 className='cards__item__title'><span>ЕЛИЗАВЕТА ГРОМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <Link onClick={scrollToTop} to="/MastersPage_LizaRemoval">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_5} alt="#" />
                            <h2 className='cards__item__title'><span>САША КОТ</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <Link onClick={scrollToTop} to="/MastersPage_LizaRemoval">
                                <button className='cards__item__btn'>
                                    СМОТРЕТЬ ПОРТФОЛИО
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>

        </div>
     );
}
 
export default Masters;