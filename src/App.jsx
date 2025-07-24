import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from "./Components/Header";
import Footer from './Components/Footer';

// Pages


// Home Components
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/ServicesSection';
import WhyChooseSection from './Components/WhyChooseSection';
import ITServicesSection from './Components/ITServicesSection';
import WorkProcess from './Components/WorkProcess';
import About from './Page/About';
import Services from './Page/Services';
import Contact from './Page/Contact';
import Career from './Page/Career';


function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ITServicesSection />
      <WorkProcess />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
