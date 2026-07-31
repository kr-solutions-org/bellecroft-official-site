import React from 'react';
import Navbar from '../components/Navbar';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <ContactHero />

      <ContactFormSection />

      <section className="w-full flex flex-col overflow-hidden">
        <Footer />
      </section>
    </div>
  );
};

export default ContactPage;
