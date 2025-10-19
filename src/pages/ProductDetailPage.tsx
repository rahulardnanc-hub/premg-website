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
        .single(); // .single() fetches one specific row

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        setProduct(data as Product);
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

  return (
    // The JSX for this component remains the same as before.
    // ... (The full JSX from the previous version goes here) ...
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        {/* The two-column grid and all its contents */}
      </div>
    </div>
  );
};

export default ProductDetailPage;