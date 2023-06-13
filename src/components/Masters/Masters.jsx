import './Masters.scss'

import photo_1 from './photo/photo_1.png';
import photo_2 from './photo/photo_2.png';
import photo_3 from './photo/photo_3.png';
import photo_4 from './photo/photo_4.png';
import photo_5 from './photo/photo_5.png';
import bg from './photo/bg.png';

const Masters = () => {
    return ( 
        <div className="masters">
            <div className="container">
                <div className="masters__headline">
                    <h2 className='masters__title'>мастера</h2>
                    <p className='masters__subtitle'>Наши ученики очень довольны пройденым курсом по татуировкам. Посмотрите, какие у них получились результаты</p>
                </div>
                <div className="yallwo__wrapper">
                    <div className="yallow-background">
                        <img src={bg} alt="#" />
                    </div>
                </div>
                <div className="masters__cards">
                    <div className="masters__cards-item">
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <button className='cards__item__btn'>СМОТРЕТЬ ПОРТФОЛИО</button>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <button className='cards__item__btn'>СМОТРЕТЬ ПОРТФОЛИО</button>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <button className='cards__item__btn'>СМОТРЕТЬ ПОРТФОЛИО</button>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <button className='cards__item__btn'>СМОТРЕТЬ ПОРТФОЛИО</button>
                        </div>
                        <div className="cards__item-1">
                            <img className='cards__img grey-image' src={photo_1} alt="#" />
                            <h2 className='cards__item__title'><span>ЕКАТЕРИНА МАКСИМОВА</span></h2>
                            <p className='cards__item__subtitle'>Мастер художественной татуировки</p>
                            <button className='cards__item__btn'>СМОТРЕТЬ ПОРТФОЛИО</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Masters;