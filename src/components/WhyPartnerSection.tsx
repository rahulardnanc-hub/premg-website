import React from 'react';

// Define the type for a feature, now including a color class
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string; // e.g., 'bg-heritage-green', 'bg-premg-yellow'
}

// Placeholder SVG Icon Component - we can reuse this for all features
const FeatureIcon: React.FC = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

// Data for the features, now with colors assigned
const features: Feature[] = [
  {
    icon: <FeatureIcon />,
    title: 'Authentic Recipes',
    description: 'Crafted with traditional methods and pure ingredients that customers love.',
    color: 'bg-heritage-green', // Our brand green
  },
  {
    icon: <FeatureIcon />,
    title: 'Modern Manufacturing',
    description: 'State-of-the-art facilities ensure hygiene, quality, and consistency in every batch.',
    color: 'bg-premg-yellow', // Our brand yellow
  },
  {
    icon: <FeatureIcon />,
    title: 'Reliable Supply Chain',
    description: 'Timely deliveries across our network to keep your shelves stocked.',
    color: 'bg-chili-red', // Our brand red
  },
  {
    icon: <FeatureIcon />,
    title: 'Dedicated Partner Support',
    description: 'We grow when you grow. Our team is here to support your business needs.',
    color: 'bg-blue-500', // A complementary blue for balance
  }
];

const WhyPartnerSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-charcoal-text">
            The Mark of Quality and Trust
          </h2>
          <p className="text-lg font-lato text-gray-600 mt-2">
            Why leading retailers & distributors partner with PremG.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            // This is the new card container
            <div key={feature.title} className="bg-warm-off-white p-8 text-center rounded-xl shadow-lg border border-gray-200">
              {/* This div creates the colored circle */}
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-charcoal-text mt-6 mb-2">
                {feature.title}
              </h3>
              <p className="font-lato text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;