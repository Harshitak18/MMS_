import Client from './components/client';
import Navbar from './components/navbar';
import Home from './Pages/home.jsx';
import Reviews from './components/Reviews.jsx'
import './styleSheets/home.css'; // Include the CSS file
import Coustomer from './components/Coustomer.jsx';
import Values from './components/Values.jsx';
import ReviewContent from './components/ReviewContent.jsx';
import OurPartners from './components/OurPartners.jsx';

function App() {
  return (
    <>
   <Navbar/>
     <Home/>
     <Client/>
     <Coustomer/>
     <Reviews/>
     <Values/>
     <ReviewContent/>
     <OurPartners/>
    </>
  );
}

export default App;
