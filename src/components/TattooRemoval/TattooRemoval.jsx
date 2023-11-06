import './TattooRemoval.scss';
import { Link } from 'react-router-dom';
import photo_1 from './photo/photo_1.png';
import laser from "./photo/photo_2.png";

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const TattooRemoval = () => {
    return ( 
        <div className="tattooRemoval">
            <div className="container">
                <div className="tattooRemoval__block">
                    <div className="tattooRemoval__title">
                        <h2>удаление <span>татуировок</span></h2>
                    </div>
                    <div className="block__content">
                        <div className="block__image">
                            <img className='image__background' src={photo_1} alt="#" />
                            <img  className='imege__laser' src={laser} alt="" />
                        </div>
                        <div className="block_text">
                            <p className='tattooRemoval__subtitle'>Благодаря дорогостоящему лазеру Magic Super Fullот компании Melsytech, мы удаляем татуировки и татуаж любой сложности без шрамов и ожогов.</p>
                            <div className="tattooRemoval__list">
                                <ul className='tattooRemoval__items'>
                                    <li className="tattooRemoval__item">Специалист с медицинским образованием </li>
                                    <li className="tattooRemoval__item">Аппарат с регистрационным удостоверением</li>
                                    <li className="tattooRemoval__item">Удаление цветных и черных татуировок</li>
                                    <li className="tattooRemoval__item">Удаления татуажа бровей, стрелок и губ</li>
                                    <li className="tattooRemoval__item">Без шрамов и ожогов</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="block__button">
                        <Link onClick={scrollToTop} to="/MastersPage_LizaRemoval">
                            <button className="vk__link">
                                УЗНАТЬ ПОДРОБНЕЕ
                            </button>
                        </Link>
                        {/* <button className="vk__link">
                            <a href="https://vk.com/kolnya">УЗНАТЬ ПОДРОБНЕЕ</a>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default TattooRemoval;