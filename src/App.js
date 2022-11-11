import Admission from './Components/Admission';
import Home from './Components/Home';
import Footer from './Components/Footer';
import LatestNews from './Components/LatestNews';
import Navbar from './Components/Navbar';
import NextNavbar from './Components/NextNavbar';
import logo from './logo.svg';
import HlastSection from './Components/HlastSection';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './Components/Gallery';
import Facilities from './Components/Facilities';
import ContactUs from './Components/ContactUs';
import AcademicPRocedure from './Components/AcademicPRocedure';
import OurSchool from './Components/OurSchool';
import Map from './Components/Map';
import BoardD from './Components/BoardD';
import Principal from './Components/Principal';


function App() {
  return (
    <>
    <div className='container-fluid p-0'>
      <BrowserRouter>
      <Navbar/>
      <NextNavbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={ <Gallery/>} />
          <Route path="/facilities" element={ <Facilities/>} />
          <Route path="/contactus" element={ <ContactUs/>} />
          <Route path="/academicprocedure" element={ <AcademicPRocedure/>} />
          <Route path="/ourschool" element={ <OurSchool/>} />
          <Route path="/boarddirector" element={ <BoardD/>} />
          <Route path="/principal" element={ <Principal/>} />


      </Routes>
      <Footer/>
    </BrowserRouter>


    </div>
    
    
    
    </>
  );
}

export default App;
