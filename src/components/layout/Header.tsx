import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PremGLogo from '../../assets/New Logo1.jpg'; 

const Header: React.FC = () => {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToInquiry = () => {
    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <img src={PremGLogo} alt="PremG Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/products/namkeen" className="text-charcoal-text font-lato hover:text-heritage-green">Products</Link>
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">About Us</a>
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">Quality Assurance</a>
          <a href="#" className="text-charcoal-text font-lato hover:text-heritage-green">Contact</a>
        </div>
        
        <div className="hidden md:block">
          <button 
            onClick={scrollToInquiry}
            className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 shadow"
          >
            Become a Distributor
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-warm-off-white shadow-lg">
          <Link to="/products/namkeen" className="block text-center py-2 px-4 text-sm hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Products</Link>
          <a href="#" className="block text-center py-2 px-4 text-sm hover:bg-gray-200">About Us</a>
          <a href="#" className="block text-center py-2 px-4 text-sm hover:bg-gray-200">Quality Assurance</a>
          <a href="#" className="block text-center py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
          <div className="py-2 px-4">
             <button 
               onClick={scrollToInquiry}
               className="w-full bg-premg-yellow text-charcoal-text font-poppins font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 shadow"
             >
               Become a Distributor
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;