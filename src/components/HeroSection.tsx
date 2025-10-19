import React from 'react';
import heroImage from '../assets/hero-spices.jpg'; // <-- IMPORT YOUR IMAGE HERE

const HeroSection: React.FC = () => {
  const heroStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`, // <-- USE THE IMPORTED IMAGE HERE
  };

  return (
    <section 
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center" 
      style={heroStyle} // Apply the background style
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white leading-tight [text-shadow:0px_2px_4px_rgba(0,0,0,0.7)]">
          Authentic Flavour. <br /> Unbeatable Quality.
        </h1>
        <p className="text-xl md:text-2xl font-lato text-white mt-4 [text-shadow:0px_2px_4px_rgba(0,0,0,0.7)]">
          The Perfect Partner for Your Business.
        </p>

        <div className="mt-8 space-x-4">
  {/* CHANGE THIS BUTTON */}
  <button className="bg-transparent border-2 border-white  text-white font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
    View Our Products
  </button>
  
  {/* THIS BUTTON IS STYLED CORRECTLY AS A SECONDARY ACTION */}
  <button className="bg-transparent border-2 border-white text-white font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 hover:text-charcoal-text transition-colors duration-300">
    Send an Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;