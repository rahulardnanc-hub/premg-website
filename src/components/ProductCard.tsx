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
    <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-heritage-green hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-poppins font-semibold text-charcoal-text group-hover:text-heritage-green transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-lato text-gray-600 mt-2 h-10 line-clamp-2">{product.tagline}</p>

        <Link
          to={`/product/${product.id}`}
          className="inline-block mt-4 bg-heritage-green text-white font-poppins text-sm font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow hover:shadow-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;