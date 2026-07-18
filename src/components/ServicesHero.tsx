import React from "react";
import ServicesHeroImg from "../assets/ServicesHero.png";

const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col bg-white">
      {/* Background subtle gradient to match the design vibe */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white via-white to-pink-50/30 opacity-70"></div>

      <div className="flex-1 flex flex-col md:flex-row relative z-10 max-w-7xl mx-auto w-full pt-32 pb-16 md:pt-0">
        
        {/* LEFT - Image Collage */}
        <div className="w-full md:w-1/2 flex items-end justify-start relative">
          <img
            src={ServicesHeroImg}
            alt="Services Overview"
            className="w-full h-auto object-contain max-h-[85vh] md:max-h-[95vh] -ml-4 md:-ml-12"
          />
        </div>

        {/* RIGHT - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end px-8 md:px-12 lg:px-16 pt-10 md:pt-20">
          
          <h1 className="flex flex-col items-end leading-[1.05] mb-6 w-full">
            <span className="text-[#333333] text-[clamp(3.5rem,6vw,5.5rem)] font-black tracking-tight">
              Strategic
            </span>
            <span className="text-[#333333] text-[clamp(3.5rem,6vw,5.5rem)] font-black tracking-tight">
              Solutions
            </span>
            <span className="text-[#E6A2A9] text-[clamp(2.5rem,4.5vw,4rem)] font-bold mt-1">
              Tailored for
            </span>
            <span 
              className="text-transparent text-[clamp(4rem,7vw,6.5rem)] leading-[0.8] mt-2 mr-2"
              style={{
                fontFamily: "'Caveat', 'Pacifico', 'Dancing Script', cursive",
                WebkitTextStroke: "1px #E6A2A9",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Growth
            </span>
          </h1>

          <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-md text-right font-medium mt-2">
            At Bellecroft, we bridge the gap between global<br className="hidden md:block"/>
            expertise and local market nuances. Our service suite<br className="hidden md:block"/>
            is built to empower organizations to navigate<br className="hidden md:block"/>
            complex business landscapes with<br className="hidden md:block"/>
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
