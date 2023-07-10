import './OurStudio.scss'
import photo_1 from './photo/photo_1.png'
import photo_2 from './photo/photo_2.png'
import photo_3 from './photo/photo_3.png'
import photo_4 from './photo/photo_4.png'



const OurStudio = () => {
    return ( 
        <div className="ourStudio">
        <div className="container">
            <div className="studio_block">
                <div className="studio__description">
                    <h1>наша <span>студия</span></h1>
                    <p>Тату - студия "Кольня" - лучшее место, где делают татуировки и удаляют татуировки лазером в Вологде. Приятная атмосфера, профессиональные мастера, полная стерильность, индивидуальный подход к каждому клиенту. </p>
                    <img src={photo_1} alt="photo_1" />
                </div>
                <img className='photo_coffee' src={photo_2} alt="photo_2" />
            </div>
            <div className="studio__img">
                    <img src={photo_3} alt="photo_3" />
                    <img src={photo_4} alt="photo_4" />
                </div>
                <div className="studio__btn">
                    <button className="vk__link">
                        <a href="https://vk.com/kolnya" target="_blank" without rel="noreferrer">перейти в группу студии</a>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default OurStudio;