import React from "react";
import ServicesHeroImg from "../assets/ServicesHero.jpeg";

const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-end bg-white bg-cover bg-center max-sm:min-h-[32rem]"
      style={{ backgroundImage: `url(${ServicesHeroImg})` }}
    >
      {/* Soft overlay keeps the existing typography readable over the image */}
      <div className="absolute inset-0 z-0 bg-white/20"></div>

      {/* Centered text content */}
      <div className="relative z-10 w-full max-w-3xl px-5 sm:px-8 md:px-12 lg:px-16 py-28 md:py-0 flex flex-col items-center max-sm:justify-center max-sm:pt-24 max-sm:pb-14">
          
          <h1 className="flex flex-col items-center leading-[1.05] mb-6 w-full max-sm:mb-5">
            <span className="text-[#333333] text-[clamp(2.75rem,11vw,5.5rem)] font-black tracking-tight max-sm:text-[clamp(2.35rem,10.5vw,2.85rem)]">
              Strategic
            </span>
            <span className="text-[#333333] text-[clamp(2.75rem,11vw,5.5rem)] font-black tracking-tight max-sm:text-[clamp(2.35rem,10.5vw,2.85rem)]">
              Solutions
            </span>
            <span className="text-[#E6A2A9] text-[clamp(2.75rem,12vw,6.5rem)] font-bold mt-1 leading-tight max-sm:text-[clamp(2.6rem,12vw,3.1rem)] max-sm:mt-0.5 max-sm:leading-[0.95]" style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}>
              Meaningful 
            </span>
            <span 
              className="text-[#E6A2A9] text-[clamp(2.75rem,12vw,6.5rem)] leading-[0.9] mt-2 max-sm:text-[clamp(2.6rem,12vw,3.1rem)] max-sm:mt-0"
              style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}
            >
              Growth
            </span>
          </h1>

          <p className="text-[#666666] text-sm md:text-base leading-relaxed max-w-md text-center font-medium mt-2 max-sm:mt-1 max-sm:text-[14.5px] max-sm:leading-[1.7]">
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
