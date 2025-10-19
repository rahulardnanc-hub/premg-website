import React from 'react';
import { Link } from 'react-router-dom'; // We'll use Link for navigation


// Define the type for a single category
interface Category {
  name: string;
  imageSrc: string;
  link: string; // Add a link for navigation
}

// Sample data for the categories.
const categories: Category[] = [
  // Use direct paths to the public folder
  { name: 'Namkeen & Bhujia', imageSrc: '/images/namkeen-category.jpg', link: '/products/namkeen' },
  { name: 'Traditional Chips', imageSrc: '/images/chips-category.jpg', link: '/products/chips' },
  { name: 'Healthy Sattu Snacks', imageSrc: '/images/sattu-category.jpg', link: '/products/sattu' },
];

const ProductCategoriesSection: React.FC = () => {
  return (
    <section className="bg-warm-off-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-text mb-12">
          Our Signature Range
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link // Use Link to make the whole card clickable for navigation
              to={category.link} 
              key={category.name} 
              className="group relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={category.imageSrc} // Use the imported image
                alt={category.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay for text readability and hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-poppins font-semibold text-white [text-shadow:0px_2px_4px_rgba(0,0,0,0.7)]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;