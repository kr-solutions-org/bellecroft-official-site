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
      <div className="snap-start snap-always w-full shrink-0"><InsightsHero /></div>
      <div className="snap-start snap-always w-full shrink-0"><ExpertPerspectives /></div>
      <div className="snap-start snap-always w-full shrink-0">
        <section className="relative w-full h-screen flex flex-col bg-white overflow-hidden">
          <Newsletter />
          <div className="shrink-0 w-full">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default InsightsPage;
