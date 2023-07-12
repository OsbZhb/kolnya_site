import './Reviews.scss'
import yallow_background from './photo/union.png';
import profile from './photo/profile.png';

const Reviews = () => {
    return ( 
        <div className="reviews">
                <div className="yallow__wrapper-background">
                    {/* <div className="reviews-background">
                        <img src={yallow_background} alt="#" />
                    </div> */}
                <div className="container">
                    <div className="reviews__content">
                    <div className="block__title">
                        <div className="reviews-title">
                            <h1>ОТЗЫВЫ КЛИЕНТОВ</h1>
                        </div>
                        <div className="reviews-subtitle">
                            <p>Наши клиенты очень довольны татуировками. Посмотрите, что они говорят про студию!</p>
                        </div>
                    </div>
                    <div className="reviews-section">
                        <div className="reviews__block">
                            <div className="reviews__item">
                                <div className="reviews__item-profile">
                                    <img src={profile} alt="#" />
                                    <h2>​Timofey</h2>
                                </div>
                                <p className='item-profile__text'>Классное место, тату набил - кофе попил Рекомендую тату-мастера Полину! Второй раз у неё бил тату, и далеко не последний!</p>
                            </div>
                            <div className="reviews__item">
                                <div className="reviews__item-profile">
                                    <img src={profile} alt="#" />
                                    <h2>Anastasia</h2>
                                </div>
                                <p className='item-profile__text'>Классное место, тату набил - кофе попил Рекомендую тату-мастера Полину! Второй раз у неё бил тату, и далеко не последний!</p>
                            </div>
                            <div className="reviews__item">
                                <div className="reviews__item-profile">
                                    <img src={profile} alt="#" />
                                    <h2>Egor</h2>
                                </div>
                                <p className='item-profile__text'>Классное место, тату набил - кофе попил Рекомендую тату-мастера Полину! Второй раз у неё бил тату, и далеко не последний!</p>
                            </div>
                        </div>
                        <div className="reviews__btn">
                        <a href="https://yandex.ru/search/touch/?text=%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8F&search_source=dzen_touch_safe&lr=21" target="_blank" without rel="noreferrer"><button className='review__item__btn'>смотреть все отзывы</button></a>
                        </div>
                        
                    </div>
                    </div>

                </div>
                </div>

        </div>
    );
}
 
export default Reviews;