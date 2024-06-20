
import React from 'react';
import '../App.css'; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Clothes</h1>
        <p className="text-lg mb-8">The best solution for your fashion needs</p>
        <a href="#features" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Hero;
