import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import TestimonialCTASection from '../components/TestimonialCTASection';
import AboutUsHero from '../assets/AboutUsHero.png';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-white">
        
        {/* Faint Background Text */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 flex flex-col gap-0 leading-[0.8] opacity-5">
          <span className="text-[22vw] font-black text-gray-900 uppercase tracking-tighter">BELLECROFT</span>
          <span className="text-[22vw] font-black text-gray-900 uppercase tracking-tighter">BELLECROFT</span>
        </div>

        {/* Title */}
        <div className="absolute top-32 md:top-36 left-0 w-full z-10 text-center">
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tight leading-none">
            <span className="text-[#2c2c2c]">Cultivated</span><br/>
            <span className="text-[#E6A2A9]">Growth.</span>
          </h1>
        </div>

        {/* Team Photo */}
        <div className="absolute top-24 bottom-0 left-0 w-full h-[75%] md:h-[95%] z-10 flex items-end justify-center pointer-events-none">
          <img 
            src={AboutUsHero} 
            alt="Team Collaboration" 
            className="w-full h-full object-cover object-bottom" 
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </div>

        {/* Bottom Bar Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <div className="w-full bg-linear-to-t from-[#e9ebed] via-[#e9ebed]/90 to-transparent pt-24 pb-8 px-6 text-center">
            <h3 className="text-[#3b3b4f] font-bold text-lg md:text-[22px] mb-2 max-w-4xl mx-auto">
              We define strategic futures by blending global excellence with deep local insights.
            </h3>
            <p className="text-[#848496] text-sm md:text-base font-medium max-w-4xl mx-auto">
              BellaCroft is more than consulting; it's an architectural approach to corporate evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <VisionSection />

      {/* Mission Section */}
      <MissionSection />

      {/* Final Section (Testimonial + Footer) */}
      <section className="w-full h-screen flex flex-col overflow-hidden">
        <TestimonialCTASection />
        <Footer />
      </section>
    </div>
  );
};

export default AboutUsPage;
