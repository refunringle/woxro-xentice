import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Iconsbar from './Components/Iconsbar/Iconsbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import CardsSlide from './Components/CardsSlide/CardsSlide';
import Footer from './Components/Footer/Footer';
import { GiShop } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { BiLandscape } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
import { RiBuilding4Line } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <NavBar/>
      <Iconsbar/>
      <Banner/>
      <Services/>
      <CardsSlide mode={"Commercial Shop"} logo={GiShop} title='Commercial Shop' />
      <CardsSlide mode={"Commercial Office"} logo={ImOffice} title='Commercial Office' />
      <CardsSlide mode={"Commercial Land"} logo={BiLandscape} title='Commercial Land' />
      <CardsSlide mode={"Commercial Building"} logo={BsBuilding} title='Commercial Building' />
      <CardsSlide mode={"Industrial Building"} logo={FaIndustry} title='Industrial Building' />
      <CardsSlide mode={"Industrial Land"} logo={GiOfficeChair} title='Industrial Land' />
      <CardsSlide mode={"Co-working Space"} logo={ImOffice} title='Co-working Space' />
      <CardsSlide mode={"Private Office"} logo={RiBuilding4Line} title='Private Office' />
      <CardsSlide mode={"Meeting Room"} logo={MdMeetingRoom} title='Meeting Room' />
      <Footer/>
     </div> 
  );
}

export default App;
