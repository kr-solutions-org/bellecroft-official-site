import React from 'react';
import { Link } from 'react-router-dom';

const TeamCTA: React.FC = () => {
  return (
    <div className="w-full flex-1 bg-[#E6A2A9] flex flex-col items-center justify-center relative overflow-hidden py-10 md:py-16 px-6">
      
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-5 md:gap-6">
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          <span className="text-white block">Ready to collaborate with</span>
          <span className="text-[#2B2A2A] block mt-1 md:mt-2">Our Experts?</span>
        </h2>
        
        <p className="text-[#2B2A2A]/80 text-[15px] md:text-[17px] font-medium max-w-3xl leading-relaxed">
          Whether you need a full strategic audit or a tailored corporate training workshop,<br className="hidden md:block" />
          Our team is equipped to deliver results that transcend traditional consulting boundaries.
        </p>
        
        <div className="flex items-center gap-4 mt-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-white text-[#E6A2A9] text-[14px] md:text-[15px] font-bold rounded hover:bg-gray-50 transition-colors shadow-sm"
          >
            Inquire Now
          </Link>
          <Link
            to="/services"
            className="px-8 py-3 bg-transparent border-2 border-white text-white text-[14px] md:text-[15px] font-bold rounded hover:bg-white/10 transition-colors shadow-sm"
          >
            Our Services
          </Link>
        </div>

      </div>

    </div>
  );
};

export default TeamCTA;
