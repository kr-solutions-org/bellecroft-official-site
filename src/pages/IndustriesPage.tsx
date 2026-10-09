import React from 'react';
import Navbar from '../components/Navbar';
import IndustriesHero from '../components/IndustriesHero';
import IndustryCards from '../components/IndustryCards';
import GlobalStandardsSection from '../components/GlobalStandardsSection';
import Footer from '../components/Footer';

const IndustriesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="snap-start snap-always w-full shrink-0"><IndustriesHero /></div>
      <div className="snap-start snap-always w-full shrink-0"><IndustryCards /></div>
      <div className="snap-start snap-always w-full shrink-0"><GlobalStandardsSection /></div>
      <div className="snap-end snap-always w-full shrink-0 relative bg-white">
        <Footer />
      </div>
    </>
  );
};

export default IndustriesPage;
