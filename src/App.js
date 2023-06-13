import './App.css';
import Header from './components/Header/Header';
import OurStudio from './components/OurStudio/OurStudio';
import Masters from './components/Masters/Masters';
import TattooRemoval from './components/TattooRemoval/TattooRemoval';
import Reviews from './components/Reviews/Reviews.jsx';
import CoffeeHouse from './components/CoffeeHouse/CoffeeHouse';
import TattooSchool from './components/TattooSchool/TattooSchool';
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';


function App() {
  return (
    <div className="App">
     <Header/>
     <OurStudio/>
     <Masters />
     <TattooRemoval />
     <Reviews />
     <CoffeeHouse />
     <TattooSchool />
     <Products />
     <Questions />
    </div>
  );
}

export default App;
