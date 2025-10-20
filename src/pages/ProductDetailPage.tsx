import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ProductDetailSkeleton } from '../components/LoadingSkeleton';
import type { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching product:', error);
      } else if (data) {
        const rawImage = data.imageurls;
        const imageUrls = Array.isArray(rawImage)
          ? rawImage
          : rawImage
          ? [rawImage]
          : [];

        const mapped: Product = {
          id: data.id,
          name: data.name,
          tagline: data.tagline,
          imageUrls,
          category: data.category,
          description: data.description,
          packagingInfo: data.packaginginfo ?? [],
        };

        setProduct(mapped);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link to="/" className="text-heritage-green hover:underline mt-4 inline-block">
          Return to Homepage
        </Link>
      </div>
    );
  }

  const imageUrl = product.imageUrls && product.imageUrls[0]
    ? product.imageUrls[0]
    : 'https://via.placeholder.com/600x400.png?text=No+Image';

  return (
    <div className="bg-warm-off-white min-h-screen animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-heritage-green hover:text-green-700 transition-colors font-lato"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full max-w-lg rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="bg-heritage-green text-white text-sm font-poppins font-semibold py-1 px-4 rounded-full">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-charcoal-text mb-4">
              {product.name}
            </h1>

            <p className="text-xl font-lato text-gray-600 italic mb-6">
              {product.tagline}
            </p>

            <p className="text-base font-lato text-charcoal-text leading-relaxed mb-8">
              {product.description}
            </p>

            {product.packagingInfo && product.packagingInfo.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-poppins font-semibold text-charcoal-text mb-4">
                  Available Packaging Options
                </h2>
                <div className="space-y-3">
                  {product.packagingInfo.map((pkg, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-heritage-green">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-poppins font-semibold text-charcoal-text">
                            {pkg.weight} - {pkg.caseType}
                          </p>
                          <p className="text-sm font-lato text-gray-600">
                            {pkg.unitsPerCase} units per case
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inquiry-form"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-all duration-300 text-center shadow-lg transform hover:scale-105"
              >
                Request Bulk Quote
              </a>

              <Link
                to={`/products/${product.category.toLowerCase()}`}
                className="bg-white border-2 border-heritage-green text-heritage-green font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-heritage-green hover:text-white transition-all duration-300 text-center transform hover:scale-105"
              >
                View More {product.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;