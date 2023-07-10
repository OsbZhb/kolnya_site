import React from "react";
import { Outlet } from 'react-router-dom';

import SliderBlock from '../SliderBlock/SliderBlock';
import OurStudio from '../OurStudio/OurStudio';
import Masters from '../Masters/Masters';
import TattooRemoval from '../TattooRemoval/TattooRemoval';
import Reviews from '../Reviews/Reviews.jsx';
import CoffeeHouse from '../CoffeeHouse/CoffeeHouse';
import TattooSchool from '../TattooSchool/TattooSchool';
import Products from '../Products/Products';
import Questions from '../Questions/Questions';

const GeneralComponents = () => {
    return (
        <>
        <SliderBlock />
        <OurStudio/>
        <Masters />
        <TattooRemoval />
        <Reviews />
        <CoffeeHouse />
        <TattooSchool />
        <Products />
        {/* <Questions /> */}
        </>
     );
}
 
export default GeneralComponents;