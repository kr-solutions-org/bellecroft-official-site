import React from 'react';
import { Link } from 'react-router-dom';
import SkycraperBG from '../assets/SkycraperBG.png';

const IndustriesHero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${SkycraperBG})` }}
    >
      {/* Optional overlay to ensure text readability if needed, though the image seems to have a built-in fade */}
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl px-6 mt-16 md:mt-0">
        
        <h1 className="flex flex-col leading-[1.05] mb-6">
          <span className="text-[#333333] text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tight">
            Sectors 
          </span>
          <span className="text-[#E6A2A9] text-[clamp(3.5rem,8vw,7rem)] font-black tracking-tight -mt-2">
            We Serve
          </span>
        </h1>

        <p className="text-[#666666] text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium mb-10">
          We deliver tailored strategic guidance and<br className="hidden md:block"/>
          professional development across diverse sectors,<br className="hidden md:block"/>
          ensuring our clients stay ahead in an<br className="hidden md:block"/>
          ever-evolving global economy.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link to="/contact" className="bg-[#E6A2A9] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-lg hover:bg-[#c9878a] transition-colors w-full sm:w-auto shadow-md text-center block">
            Request a Consultation
          </Link>
          <Link to="/services" className="flex items-center gap-2 bg-transparent text-[#2B2A2A] font-bold text-sm tracking-wide px-6 py-4 rounded-lg hover:text-[#E6A2A9] transition-colors group w-full sm:w-auto justify-center">
            Our Services 
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IndustriesHero;
