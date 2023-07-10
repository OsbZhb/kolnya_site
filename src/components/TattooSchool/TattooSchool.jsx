import './TattooSchool.scss';
import tattooSchool_background from './photo/background.png';
import img_1 from './photo/img_1.png';
import img_2 from './photo/img_2.png';
import img_3 from './photo/img_3.png';
import video_block from './photo/video_block.png';
import tattooSchoolCake from './photo/img_4.png';

import line_1 from './photo/line_1.png';
import line_2 from './photo/line_2.png';
import line_3 from './photo/line_3.png';
import line_4 from './photo/Line_4.png';


const TattooSchool = () => {
    return ( 
        <div className="tattooSchool">
            <div className="tattooSchool-background">
                {/* <img src={tattooSchool_background} alt="#" /> */}
                <div className="container">
                <div className="tattooSchool__wrapper-background">
                    <div className="tattooSchoolCake">
                        <img src={tattooSchoolCake} alt="#" />
                    </div>
                    <div className="tattooSchool__lines">
                        <img className='tattooSchool__line_1' src={line_1} alt="#" />
                        <img className='tattooSchool__line_2' src={line_2} alt="#" />
                        <img className='tattooSchool__line_3' src={line_3} alt="#" />
                        <img className='tattooSchool__line_4' src={line_4} alt="#" />
                    </div>
                </div>
                    <div className="tattooSchool__block-title">
                        <div className="tattooSchool__title">
                            <h1>ШКОЛА ТАТУИРОВКИ “КОЛЬНЯ”</h1>
                    </div>
                </div>
                    <div className="tattooSchool_box">
                        <div className="tattooSchool_item">
                            <img src={img_1} alt="#" />
                            <p>более 250 <span>учеников</span></p>
                        </div>
                        <div className="tattooSchool_item">
                            <img src={img_2} alt="#" />
                            <p>с 2018 г. <span>обучаем тату</span></p>  
                        </div>
                        <div className="tattooSchool_item">
                            <img src={img_3} alt="#" />
                            <p>СО ВСЕГО МИРА<br /><span>к нам едут ученики</span></p>
                        </div>
                    </div>
                    <div className="tattooSchool_videos">
                        <img src={video_block} alt="#" />
                        <img src={video_block} alt="#" />
                        <img src={video_block} alt="#" />
                    </div>
                    <div className="tattooSchool_text">
                        <p>За весь курс каждый из учеников выполнит по 4 татуировки на моделях. Всё как всегда происходит под чутким руководством преподавателей индивидуально у каждого! Саша Кот также курирует каждого ученика. Подбор преподавателей для обучающегося происходит по средствам уклона на стилистику, предпочитаемую студентом.</p>
                    </div>
                    <div className="tattooSchool__btn">
                        <a href="https://t.me/kolnya_school_bot" target="_blank" without rel="noreferrer"><button className='cards__item__btn tattooSchool'>ХОЧУ УЧИТЬСЯ!</button></a>    
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
 
export default TattooSchool;