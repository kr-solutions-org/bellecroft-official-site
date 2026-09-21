import React from "react";
import { Link } from "react-router-dom";
import MethodologyHeroBg from "../assets/MethodologyBgHero.png";

const MethodologyHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={MethodologyHeroBg}
          alt="Methodology hero background" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Gradient overlay to ensure text readability on the right side - matching the image */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent w-full md:w-[70%] right-0 ml-auto"></div>
        {/* Further overall gradient to blend with the white */}
        <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 py-32 flex justify-end">
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-end text-right">
          
          <h1 className="leading-[1.1] mb-6 flex flex-col items-end">
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight">
              International
            </span>
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight">
              Perspective
            </span>
            <div className="flex items-baseline gap-2 md:gap-3 flex-wrap justify-end mt-1">
              <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#E6A2A9] tracking-tight text-[clamp(3.5rem,8vw,7rem)]"  style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}>
                Local
              </span>
              <span 
                className="text-[clamp(3rem,6vw,5.5rem)] text-[#E6A2A9] text-[clamp(3.5rem,8vw,7rem)]"  style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}
              >
                Insight
              </span>
            </div>
          </h1>

          <p className="text-gray-600 text-base md:text-[1.1rem] leading-relaxed max-w-[500px] mb-10 font-medium">
            We bridge the gap between world-class strategic frameworks and the practical realities of the Maldivian business landscape. Our approach isn't just about what works, It's about what works here.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E6A2A9] text-white text-[15px] font-bold rounded-xl hover:bg-[#c9878a] transition-colors duration-200 shadow-sm"
            >
              Start Your Journey
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 text-[#2B2A2A] text-[15px] font-bold hover:text-[#E6A2A9] transition-colors duration-200 group"
            >
              View Services 
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MethodologyHero;
