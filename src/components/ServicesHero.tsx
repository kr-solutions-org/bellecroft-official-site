import React from "react";
import ServicesHeroImg from "../assets/ServicesHero.jpeg";

const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center justify-end bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${ServicesHeroImg})` }}
    >
      {/* Soft overlay keeps the existing typography readable over the image */}
      <div className="absolute inset-0 z-0 bg-white/20"></div>

      {/* Centered text content */}
      <div className="relative z-10 w-full max-w-4xl px-8 md:px-12 lg:px-16 flex flex-col items-center">
          
          <h1 className="flex flex-col items-center leading-[1.05] mb-6 w-full">
            <span className="text-[#333333] text-[clamp(3.5rem,6vw,5.5rem)] font-black tracking-tight">
              Strategic
            </span>
            <span className="text-[#333333] text-[clamp(3.5rem,6vw,5.5rem)] font-black tracking-tight">
              Solutions
            </span>
            <span className="text-[#E6A2A9] text-[clamp(2.5rem,4.5vw,4rem)] font-bold mt-1">
              Meaningful 
            </span>
            <span 
              className="text-transparent text-[clamp(4rem,7vw,6.5rem)] leading-[0.8] mt-2"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                WebkitTextStroke: "1px #E6A2A9",
                fontWeight: 600,
                fontStyle: "normal",
              }}
            >
              Growth
            </span>
          </h1>

          <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-md text-center font-medium mt-2">
            At Bellecroft, we bridge the gap between global<br className="hidden md:block"/>
            expertise and local market nuances. Our service suite<br className="hidden md:block"/>
            is built to empower organizations to navigate<br className="hidden md:block"/>
            complex business landscapes with<br className="hidden md:block"/>
            confidence.
          </p>
      </div>
    </section>
  );
};

export default ServicesHero;
