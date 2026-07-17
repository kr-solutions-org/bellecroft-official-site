import React from 'react';
import Navbar from '../components/Navbar';
import InsightsHero from '../components/InsightsHero';
import ExpertPerspectives from '../components/ExpertPerspectives';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const InsightsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <InsightsHero />
      <ExpertPerspectives />
      <section className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
        <Newsletter />
        <div className="shrink-0 w-full">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default InsightsPage;
