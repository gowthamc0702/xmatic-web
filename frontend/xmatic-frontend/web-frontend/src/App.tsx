import React from 'react';

import './App.css';
import Nav from './components/Navbar/Nav';
import AboutUs from './components/AboutUs/AboutUs';
import KnowMore from './components/AboutUs/KnowMore/KnowMore';
import CardComponent from './components/AboutUs/Card/CardComponent';
import ReactCertificateSlider from './components/AboutUs/CertificateSlider/ReactCertificateSlider';
import CustomCard from './components/AboutUs/CustomCard/CustomCard';
import Location from './components/AboutUs/Location/location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <AboutUs />
      <ReactCertificateSlider />
      <CustomCard />
      <KnowMore />
      <Location />
      <Footer />
      {/* <CardComponent/> */}
    </>
  );
}

export default App;
