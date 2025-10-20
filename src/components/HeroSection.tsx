import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-spices.jpg';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const heroStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`,
  };

  const handleViewProducts = () => {
    navigate('/products/namkeen');
  };

  const handleSendInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative bg-cover bg-center h-[60vh] md:h-[70vh] flex items-center justify-center text-center"
      style={heroStyle}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 p-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white leading-tight [text-shadow:0px_2px_4px_rgba(0,0,0,0.7)]">
          Authentic Flavour. <br /> Unbeatable Quality.
        </h1>
        <p className="text-xl md:text-2xl font-lato text-white mt-4 [text-shadow:0px_2px_4px_rgba(0,0,0,0.7)]">
          The Perfect Partner for Your Business.
        </p>

        <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:justify-center">
          <button
            onClick={handleViewProducts}
            className="w-full max-w-xs md:w-auto bg-premg-yellow text-charcoal-text font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl"
          >
            View Our Products
          </button>

          <button
            onClick={handleSendInquiry}
            className="w-full max-w-xs md:w-auto bg-transparent border-2 border-white text-white font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-charcoal-text transition-all duration-300 transform hover:scale-105"
          >
            Send an Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;