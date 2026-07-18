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
      <ServicesHero />
      <CorporateConsulting />
      <WorkshopsTraining />
      <section className="relative w-full overflow-hidden flex flex-col bg-white">
        <Footer />
      </section>
    </>
  );
};

export default ServicesPage;
