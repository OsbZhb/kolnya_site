import './Products.scss';

import img_1 from './photo/img_1.png';
import img_2 from './photo/img_2.png';
import img_3 from './photo/img_3.png';
import img_4 from './photo/img_4.png';

const Products = () => {
    return ( 
        <div className="products">
            <div className="container">
                <div className="products__block">
                    <div className="products__title">
                        <h1>товары</h1>
                    </div>
                    <div className="products_namebox">
                        <div className="products__subtitle">
                            <p>Тату - студия "Кольня" - лучшее место, где делают татуировкии удаляют татуировки лазером в Вологде. </p>
                        </div>
                        {/* <div className="products-btn">
                            <button className='cards__item__btn'>смотреть все отзывы</button>
                        </div> */}
                        <button className='products__btn'>смотреть все отзывы</button>
                    </div>
                    <div className="products__showcase">
                        <div className="products__showcase-item">
                            <img src={img_1} alt="#" />
                            <h2>Концентрат антибактериального мыла</h2>
                            <p>Используется для приготовления мыльного раствора в процессе работы. Создан для работы с гиперчувствительной кожей, обладает антисептическими свойствами. Имеет лёгкий цитрусовый аромат. Объем: 250мл.</p>
                        </div>
                        <div className="products__showcase-item">
                            <img src={img_1} alt="#" />
                            <h2>Гель для перевода трансфера</h2>
                            <p>Tattoo Revive STENCIL — профессиональный гель для четкого перевода линий на кожу. Состав позволяет переводить детализированные рисунки любого размера. Идеален для сложных текстур и дотворка. Надежно фиксирует чернила рисунка при стадийном реализме.</p>
                        </div>
                        <div className="products__showcase-item">
                            <img src={img_1} alt="#" />
                            <h2>Остужающая антибактериальная пена</h2>
                            <p>Отлично чистит поры от загрязнений, вазелина и красителя. Такие ингредиенты как ацитилсалициловая кислота, гидролат ромашки, экстракт алоэ, ментол позволяют снизить раздражение (покраснение), тем самым подготовить работу к съемке. Объем: 200мл.</p>
                        </div>
                        <div className="products__showcase-item">
                            <img src={img_1} alt="#" />
                            <h2>Гель для заживления татуировки</h2>
                            <p>Используется для приготовления мыльного раствора в процессе работы. Создан для работыс гиперчувствительной кожей, обладает антисептическими свойствами. Имеет лёгкий цитрусовый аромат.Объем: 250мл.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;