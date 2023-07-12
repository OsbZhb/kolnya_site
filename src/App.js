import { Routes, Route } from 'react-router-dom';

import './App.css';
// import Header from './components/Header/Header';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MastersPage_Katya from './components/Masters/MastersPage/MastersPage_Katya/MastersPage_Katya';
import MastersPage_Liza from './components/Masters/MastersPage/MastersPage_Liza/MastersPage_Liza';
import MastersPage_Polina from './components/Masters/MastersPage/MastersPage_Polina/MastersPage_Polina';
import MastersPage_Lera from './components/Masters/MastersPage/MastersPage_Lera/MastersPage_Lera';
import MastersPage_LizaRemoval from './components/Masters/MastersPage/MastersPage_LizaRemoval/MastersPage_LizaRemoval';
import GeneralComponents from './components/GeneralComponents/GeneralComponents';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<GeneralComponents/>} />
            <Route path="MastersPage_Katya" element={<MastersPage_Katya/>} />
            <Route path="MastersPage_Liza" element={<MastersPage_Liza/>} />
            <Route path="MastersPage_Polina" element={<MastersPage_Polina/>} />
            <Route path="MastersPage_Lera" element={<MastersPage_Lera/>} />
            <Route path="MastersPage_LizaRemoval" element={<MastersPage_LizaRemoval/>} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;

{/* <Routes>
<Route path='MastersPage' element={<MastersPage />} />
</Routes> */}