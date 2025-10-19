import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // This safety check prevents crashes if an image URL is missing
  const imageUrl = product.imageUrls && product.imageUrls[0] 
    ? product.imageUrls[0] 
    : 'https://via.placeholder.com/400x300.png?text=No+Image';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200">
      <div className="relative">
        <img 
          src={imageUrl}
          alt={product.name} 
          className="w-full h-48 object-cover" 
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-poppins font-semibold text-charcoal-text">{product.name}</h3>
        <p className="font-lato text-gray-600 mt-2 h-10">{product.tagline}</p>
        
        {/* THIS IS THE CRITICAL PART */}
        <Link 
          to={`/product/${product.id}`}
          className="inline-block mt-4 bg-heritage-green text-white font-poppins text-sm font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
        >
          View Details
        </Link>
        
      </div>
    </div>
  );
};

export default ProductCard;