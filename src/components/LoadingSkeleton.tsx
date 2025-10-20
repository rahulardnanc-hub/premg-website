import React from 'react';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-6 text-center">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-4"></div>
        <div className="h-10 bg-gray-300 rounded w-32 mx-auto"></div>
      </div>
    </div>
  );
};

export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="bg-warm-off-white min-h-screen animate-pulse">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg h-96 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="h-8 bg-gray-300 rounded w-24"></div>
            <div className="h-12 bg-gray-300 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="mt-8 space-y-3">
              <div className="h-20 bg-gray-300 rounded"></div>
              <div className="h-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
