import './CoffeeHouse.scss';
import panorama from './photo/panorama.png';
import panorama_mobile from './photo/panorama_mobile.png';
import photo_1 from './photo/photo_1.png';
import photo_2 from './photo/photo_2.png';
import photo_3 from './photo/photo_3.png';
import pie from './photo/img_1.png';
import coffeeСup from './photo/img_2.png';
import coffeeTumbler from './photo/img_3.png';
import coffeeTumbler2 from './photo/img_4.png';

// import pie from './photo/img_1.png';

// VECTOR
import vector_1 from './photo/vector/Vector_1.svg';
import vector_2 from './photo/vector/Vector_2.svg';
import vector_3 from './photo/vector/Vector_3.svg';
import vector_4 from './photo/vector/Vector_4.svg';
import vector_5 from './photo/vector/Vector_5.svg';
import vector_6 from './photo/vector/Vector_6.svg';
import cake from './photo/cake.png';




const CoffeeHouse = () => {
    return ( 
        <div className="coffeeHouse" id='coffeHouse'>
            <div className="container">
            <div className="coffeeHouse_backgroundImages">
                <img className='img__pie' src={pie} alt="#" />
                <img className='coffeeСup' src={coffeeСup} alt="#" />
                <img className='coffeeTumbler' src={coffeeTumbler} alt="#" />
            </div>
            <div className="coffeeTumbler2-block">
                <img className='coffeeTumbler2' src={coffeeTumbler2} alt="#" />
                <img className='vector_1' src={vector_1} alt="#" />
                <img className='vector_2' src={vector_2} alt="#" />
                <img className='vector_3' src={vector_3} alt="#" />
                <img className='vector_4' src={vector_4} alt="#" />
                <img className='vector_5' src={vector_5} alt="#" />
                <img className='vector_6' src={vector_6} alt="#" />
                <img className='cake_img' src={cake} alt="#" />
            </div>
                <div className="coffeeHouse__block">
                    <div className="coffeeHouse-title">
                        <h1>наша <span>кофейня</span></h1>
                    </div>
                    <div className="coffeeHouse-subtitle">
                        <p>Кофейня "Кольня" - лучшее место, где делают татуировки <br />и удаляют татуировки лазером в Вологде. Приятная атмосфера, профессиональные мастера, полная стерильность, индивидуальный подход к каждому клиенту. </p>
                    </div>
                </div>
                <div className="coffeeHouse__content">
                    <img src={panorama} alt="#" />
                </div>
                <div className="coffeeHouse__content-mobile">
                    <img src={panorama_mobile} alt="#" />
                </div>
                <div className="coffeeHouse__photos">
                    <img className='coffeeHouse__photos-photo_1' src={photo_1} alt="#" />
                    <img className='coffeeHouse__photos-photo_2' src={photo_2} alt="#" />
                    <img className='coffeeHouse__photos-photo_3' src={photo_3} alt="#" />
                </div>
            </div>
        </div>
    );
}
 
export default CoffeeHouse;