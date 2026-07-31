import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MethodologyHero from '../components/MethodologyHero';
import MethodologyContent from '../components/MethodologyContent';
import ContextMatters from '../components/ContextMatters';

const MethodologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <MethodologyHero />

      <MethodologyContent />

      <section className="w-full h-screen flex flex-col snap-center overflow-hidden">
        <ContextMatters />
        <Footer />
      </section>
    </div>
  );
};

export default MethodologyPage;
