import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCategoriesSection from '../components/ProductCategoriesSection';
import WhyPartnerSection from '../components/WhyPartnerSection';
import InquiryFormSection from '../components/InquiryFormSection'; // <-- Import the final section

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <WhyPartnerSection />
      <InquiryFormSection /> {/* <-- Place it at the end */}
    </>
  );
};

export default HomePage;