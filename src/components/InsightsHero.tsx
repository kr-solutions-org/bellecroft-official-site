import React from 'react';
import InsightsHeroImg from '../assets/InsightsHero.png';

const InsightsHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      
      {/* Left side: Text Content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 md:pt-0 z-10">
        <h1 className="flex flex-col items-start leading-[1.05] mb-6">
          <span className="text-[#333333] text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight">
            The Future of
          </span>
          <span className="text-[#E6A2A9] text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight mt-[-0.2em]">
            Operational
          </span>
          <span 
            className="text-transparent text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] mt-[-0.1em]"
            style={{
              fontFamily: "'Caveat', 'Pacifico', 'Dancing Script', cursive",
              WebkitTextStroke: "1.5px #E6A2A9",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Excellence
          </span>
          <span className="text-[#333333] text-[clamp(2rem,4.5vw,4rem)] font-black italic tracking-tight mt-2">
            In Island Economies
          </span>
        </h1>

        <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mb-8 font-medium">
          Our latest deep-dive guide explores how digital transformation and ESG integration are reshaping the competitive landscape for businesses in the Maldives and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#2B2A2A] text-white font-bold text-sm tracking-wide px-8 py-4 rounded-lg shadow-md hover:bg-black transition-colors w-full sm:w-auto">
            Read the full Report
          </button>
          <button className="flex items-center justify-center gap-2 bg-transparent text-[#333333] font-bold text-sm tracking-wide px-6 py-4 rounded-lg hover:text-[#E6A2A9] transition-colors group w-full sm:w-auto">
            Download PDF 
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 font-normal text-lg leading-none">
              &rarr;
            </span>
          </button>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-[45%] h-full absolute md:relative right-0 bottom-0 opacity-20 md:opacity-100 pointer-events-none md:pointer-events-auto flex items-end justify-end md:justify-center">
        <img 
          src={InsightsHeroImg} 
          alt="Insights Hero" 
          className="w-full h-auto max-h-[85vh] object-contain object-right-bottom md:object-bottom lg:scale-110 origin-bottom"
        />
      </div>

    </section>
  );
};

export default InsightsHero;
