import '../MastersPage.scss'
import katyaImg from './img/Katya.png';

import img_1 from './img/img_1.jpg';
import img_2 from './img/img_2.jpg';
import img_3 from './img/img_3.jpg';
import img_4 from './img/img_4.jpg';
import img_5 from './img/img_5.jpg';
import img_6 from './img/img_6.jpg';
import img_7 from './img/img_7.jpg';
import img_8 from './img/img_8.jpg';
import img_9 from './img/img_9.jpg';
import img_10 from './img/img_10.jpg';

import img_social_1 from './img/social_icon/img_social_1.png';
import img_social_2 from './img/social_icon/img_social_2.png';
import img_social_3 from './img/social_icon/img_social_3.png';
import img_social_4 from './img/social_icon/img_social_4.png';


const MastersPage_Katya = () => {
    return ( 
        <div className="mastersPage">
            <div className="container">
                <div className="mastersProfile_block">
                <div className="mastersProfile">
                    <img src={katyaImg} alt="#" />
                    <div className="masterAbout">
                        <h1>Портфолио мастера<br /> <span>Екатерины</span></h1>
                        <p className="masterName">ЕКАТЕРИНА МАКСИМОВА</p>
                        <p className="mastersDescription">
                        Мастер художественной татуировки. Елизавета практикуется уже больше 5 лет. Мастер художественной татуировки. Елизавета практикуется уже больше 5 лет. 
                        </p>
                        <button className="vk__link">
                            <a href="https://vk.com/kolnya" target="_blank" without rel="noreferrer">ЗАПИСАТЬСЯ К МАСТЕРУ</a>
                        </button>
                    </div>
                    </div>

                    <div className="masterGallery">
                        <img src={img_1} alt="#" />
                        <img src={img_2} alt="#" />
                        <img src={img_3} alt="#" />
                        <img src={img_4} alt="#" />
                        <img src={img_5} alt="#" />
                        <img src={img_6} alt="#" />
                        <img src={img_7} alt="#" />
                        <img src={img_8} alt="#" />
                        <img src={img_9} alt="#" />
                        <img src={img_10} alt="#" />
                    </div>
                    <div className="master-social">
                        <h2>социальные сети</h2>
                        <div className="socialIcon-block">
                            <img src={img_social_1} alt="#" />
                            <img src={img_social_2} alt="#" />
                            <img src={img_social_3} alt="#" />
                            <img src={img_social_4} alt="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MastersPage_Katya;