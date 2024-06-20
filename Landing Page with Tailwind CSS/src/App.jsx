import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
