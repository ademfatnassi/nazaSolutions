import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar/MyNavbar';
import MyCarousel from './components/carousel/MyCarousel';
import About from './components/about/About';
import MyServices from './components/services/MyServices';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <MyNavbar />
      <div className="circle_cornor" ></div>
      <MyCarousel />

      <About />
      <MyServices />
      <Contact />
    </>
  );
}

export default App;
