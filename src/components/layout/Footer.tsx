import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-text text-warm-off-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">PremG Snacks</h3>
            <p className="font-lato">123 Industrial Area, Snacksville,</p>
            <p className="font-lato">Mumbai, Maharashtra - 400001</p>
            <p className="font-lato mt-4">Email: rahul.ardnanc@gmail.com</p>
            <p className="font-lato">Phone: +91 8617355796</p>
          </div>
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="font-lato hover:text-premg-yellow">Products</a></li>
              <li><a href="#" className="font-lato hover:text-premg-yellow">About Us</a></li>
              <li><a href="#" className="font-lato hover:text-premg-yellow">Become a Distributor</a></li>
            </ul>
          </div>
          <div>
             <h3 className="font-poppins font-bold text-lg mb-4">Follow Us</h3>
             <p className="font-lato">Connect with us on social media.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="font-lato text-sm">&copy; {currentYear} PremG. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;