import React from 'react';
import Navbar from '../components/Navbar';
import ServicesHero from '../components/ServicesHero';
import CorporateConsulting from '../components/CorporateConsulting';
import WorkshopsTraining from '../components/WorkshopsTraining';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="snap-start snap-always w-full shrink-0"><ServicesHero /></div>
      <div className="snap-start snap-always w-full shrink-0"><CorporateConsulting /></div>
      <div className="snap-start snap-always w-full shrink-0"><WorkshopsTraining /></div>
      <div className="snap-start snap-always w-full shrink-0">
        <section className="relative w-full h-screen overflow-hidden flex flex-col bg-white">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
