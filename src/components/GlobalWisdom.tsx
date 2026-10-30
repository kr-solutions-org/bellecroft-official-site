import React from "react";
import { Link } from "react-router-dom";
import SkyscraperBG from "../assets/SkycraperBG.png";

const GlobalWisdom: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center overflow-hidden py-24 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={SkyscraperBG} 
          alt="Skyscrapers looking up" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Gradient overlay to ensure text readability on the right side */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB]/95 via-[#F9FAFB]/75 to-[#F9FAFB]/30 md:bg-gradient-to-l md:from-[#F9FAFB]/90 md:via-[#F9FAFB]/50 md:to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-28 py-10 md:py-20 flex justify-end">
        <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col items-start text-left md:items-end md:text-right">
          
          <h2 className="leading-[1.15] mb-6 flex flex-col items-start md:items-end">
            <span className="block text-[clamp(2rem,4vw,3.5rem)] font-black text-[#2B2A2A] tracking-tight">
              Local Understanding
            </span>
            <div className="flex items-baseline gap-2 md:gap-3 flex-wrap justify-start md:justify-end">
              <span 
                className="text-[clamp(2.25rem,4vw,4rem)] text-[#E6A2A9] leading-tight"
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}
              >
                Global Perspective
              </span>
            </div>
          </h2>

          <p className="text-gray-800 text-sm sm:text-base md:text-[1.1rem] leading-relaxed max-w-[500px] mb-8 font-medium">
            Bellecroft works closely with StrEdge Advisory as its international strategic partner. This collaboration enables our clients to benefit from broader perspectives, specialised expertise, and internationally informed approaches while maintaining solutions that remain practical and relevant to local contexts.
          </p>

          <Link
            to="/methodology"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E6A2A9] text-white text-[15px] font-bold rounded-xl hover:bg-[#d68a91] transition-colors duration-200 shadow-sm w-full sm:w-auto"
          >
            Explore Our Methodology
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default GlobalWisdom;
