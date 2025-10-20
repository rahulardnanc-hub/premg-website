import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import type { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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
    return <div className="text-center py-20">Loading Product Details...</div>;
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
    <div className="bg-warm-off-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full max-w-lg rounded-lg shadow-lg object-cover"
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
                    <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
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
                  document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-premg-yellow text-charcoal-text font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors text-center shadow-lg"
              >
                Request Bulk Quote
              </a>

              <Link
                to={`/products/${product.category.toLowerCase()}`}
                className="bg-white border-2 border-heritage-green text-heritage-green font-poppins font-semibold py-3 px-8 rounded-lg hover:bg-heritage-green hover:text-white transition-colors text-center"
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