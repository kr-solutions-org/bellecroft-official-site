import React from "react";
import SkyscraperBG from "../assets/SkycraperBG.png";

const GlobalWisdom: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SkyscraperBG} 
          alt="Skyscrapers looking up" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Gradient overlay to ensure text readability on the right side */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F9FAFB]/90 via-[#F9FAFB]/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 py-20 flex justify-end">
        <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col items-end text-right">
          
          <h2 className="leading-[1.15] mb-6 flex flex-col items-end">
            <span className="block text-[clamp(2.2rem,4vw,3.5rem)] font-black text-[#2B2A2A] tracking-tight">
              A Blend of
            </span>
            <div className="flex items-baseline gap-2 md:gap-3 flex-wrap justify-end">
              <span 
                className="text-[clamp(3rem,5vw,4.5rem)] text-[#E6A2A9]"
                style={{
                  fontFamily: "'Caveat', 'Pacifico', 'Dancing Script', cursive",
                  fontWeight: 400,
                }}
              >
                Global Wisdom
              </span>
              <span className="text-[clamp(2.2rem,4vw,3.5rem)] font-medium text-[#2B2A2A] tracking-tight">
                and
              </span>
            </div>
            <span className="block text-[clamp(2.2rem,4vw,3.5rem)] font-black text-[#2B2A2A] tracking-tight">
              Local Insight.
            </span>
          </h2>

          <p className="text-gray-800 text-base md:text-[1.1rem] leading-relaxed max-w-[500px] mb-8 font-medium">
            We don't just apply foreign frameworks. We adapt international best practices to the unique cultural and economic landscape of the Maldives, ensuring solutions that actually work.
          </p>

          <a
            href="#methodology"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E6A2A9] text-white text-[15px] font-bold rounded-xl hover:bg-[#d68a91] transition-colors duration-200 shadow-sm"
          >
            Explore Our Methodology
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default GlobalWisdom;
