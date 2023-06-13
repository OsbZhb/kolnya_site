import './CoffeeHouse.scss';
import panorama from './photo/panorama.png';
import photo_1 from './photo/photo_1.png';
import photo_2 from './photo/photo_2.png';
import photo_3 from './photo/photo_3.png';
import pie from './photo/img_1.png';
import coffeeСup from './photo/img_2.png';
import coffeeTumbler from './photo/img_3.png';
// import pie from './photo/img_1.png';

const CoffeeHouse = () => {
    return ( 
        <div className="coffeeHouse">
            <div className="container">
            <div className="coffeeHouse_backgroundImages">
                <img className='img__pie' src={pie} alt="#" />
                <img className='coffeeСup' src={coffeeСup} alt="#" />
                <img className='coffeeTumbler' src={coffeeTumbler} alt="#" />
            </div>
                <div className="coffeeHouse__block">
                    <div className="coffeeHouse-title">
                        <h1>наша <span>кофейня</span></h1>
                    </div>
                    <div className="coffeeHouse-subtitle">
                        <p>Кофейня "Кольня" - лучшее место, где делают татуировкии удаляют татуировки лазером в Вологде. Приятная атмосфера, профессиональные мастера, полная стерильность, индивидуальный подход к каждому клиенту. </p>
                    </div>
                </div>
                <div className="coffeeHouse__content">
                    <img src={panorama} alt="#" />
                </div>
                <div className="coffeeHouse__photos">
                    <img src={photo_1} alt="#" />
                    <img src={photo_2} alt="#" />
                    <img src={photo_3} alt="#" />
                </div>
            </div>
        </div>
    );
}
 
export default CoffeeHouse;