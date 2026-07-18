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
      <IndustriesHero />
      <IndustryCards />
      <GlobalStandardsSection />
      <section className="relative w-full overflow-hidden flex flex-col bg-white">
        <Footer />
      </section>
    </>
  );
};

export default IndustriesPage;
