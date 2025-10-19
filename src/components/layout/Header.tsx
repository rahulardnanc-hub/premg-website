import React from 'react';
import { Link } from 'react-router-dom';
import PremGLogo from '../../assets/New Logo1.jpg'; 

const Header: React.FC = () => {
  // ... (scrollToInquiry function remains the same) ...
  const scrollToInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={PremGLogo} alt="PremG Logo" className="h-12" />
        </Link>

        <div className="flex items-center space-x-8">
          <Link to="/products/namkeen" className="text-charcoal-text font-lato hover:text-heritage-green">Products</Link>
          {/* REVERTED to a non-navigational 'a' tag */}
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">About Us</a>
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">Quality Assurance</a>
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">Contact</a>
        </div>

        <div>
          <button 
            onClick={scrollToInquiry}
            className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 shadow"
          >
            Become a Distributor
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;