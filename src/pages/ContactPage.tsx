import React from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="snap-start snap-always w-full shrink-0">
        <ContactHero />
      </div>

      <div className="snap-start snap-always w-full shrink-0">
        <ContactFormSection />
      </div>

      <div className="snap-end snap-always w-full shrink-0 relative bg-white">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
