import './Reviews.scss'
import yallow_background from './photo/union.png';
import profile from './photo/profile.png';

const Reviews = () => {
    return ( 
        <div className="reviews">
            <div className="container">
                <div className="yallow__wrapper-background">
                    <div className="reviews-background">
                        <img src={yallow_background} alt="#" />
                    </div>
                </div>
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
                    <button className='cards__item__btn'>смотреть все отзывы</button>
                </div>
            </div>
        </div>
    );
}
 
export default Reviews;