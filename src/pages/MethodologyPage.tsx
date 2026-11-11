import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MethodologyHero from '../components/MethodologyHero';
import MethodologyContent from '../components/MethodologyContent';
import ContextMatters from '../components/ContextMatters';

const MethodologyPage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="snap-start snap-always w-full shrink-0">
        <MethodologyHero />
      </div>

      <div className="snap-start snap-always w-full shrink-0">
        <MethodologyContent />
      </div>

      <div className="snap-start snap-always w-full shrink-0">
        <section className="w-full h-screen flex flex-col snap-center overflow-hidden">
          <ContextMatters />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default MethodologyPage;
