import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { supabase } from '../lib/supabaseClient';
import type { Product } from '../types/product';

const ProductListingPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) return;
      
      setLoading(true);
      const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

      const { data, error } = await supabase
        .from('products')
        .select('id, name, tagline, imageurls, category, description') // Explicitly select all needed columns
        .eq('category', capitalizedCategory);

        // 👇 ADD THIS LINE RIGHT HERE
    console.log('Data from Supabase:', data);

      if (error) {
        console.error('Error fetching products:', error);
      } else if (data) {
        // Map Supabase rows to the Product type expected by the app:
        // - convert imageurls -> imageUrls (ensure an array)
        // - provide a default packagingInfo field if missing
        const mapped = (data as any[]).map((item) => {
          const rawImage = item.imageurls;
          const imageUrls = Array.isArray(rawImage)
            ? rawImage
            : rawImage
            ? [rawImage]
            : [];

          return {
            id: item.id,
            name: item.name,
            tagline: item.tagline,
            imageUrls,
            category: item.category,
            description: item.description,
            // provide a sensible default; adjust if Product.packagingInfo has a stricter shape
            packagingInfo: item.packagingInfo ?? item.packaging_info ?? null,
          } as Product;
        });

        setProducts(mapped);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  const capitalizedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Products';

  if (loading) {
    return <div className="text-center py-20">Loading Products...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-poppins font-bold text-charcoal-text text-center mb-4">
        Our {capitalizedCategory} Range
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;