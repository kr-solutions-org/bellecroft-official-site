import React from 'react';

const GlobalStandardsSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden">
      
      {/* Top Half: Pink Background */}
      <div className="w-full flex-1 bg-[#E6A2A9] flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Text */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight mb-4 md:mb-6">
              <span className="text-white block">Global Standards,</span>
              <span className="text-[#333333] block">Local Soul.</span>
            </h2>
            <p className="text-[#333333] text-sm md:text-base leading-relaxed max-w-md font-medium">
              BelleCroft bridges the gap between international management best practices and the unique socio-economic landscape of the Maldives and the wider Indian Ocean region.
            </p>
          </div>

          {/* Right Pills */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            
            {/* Pill 1 */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-5 shadow-lg flex flex-col justify-center">
              <h4 className="text-[#333333] text-lg font-bold mb-1">Market Adaptability</h4>
              <p className="text-[#333333] text-xs font-medium">
                Tailoring strategic frameworks to local market dynamics and conditions.
              </p>
            </div>

            {/* Pill 2 */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-8 py-5 shadow-lg flex flex-col justify-center ml-0 md:ml-8 lg:ml-12">
              <h4 className="text-[#333333] text-lg font-bold mb-1">Regulatory Alignment</h4>
              <p className="text-[#333333] text-xs font-medium">
                Ensuring all corporate strategies comply with local mandates and governance.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Half: White Background */}
      <div className="w-full flex-[1.1] bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] flex flex-col relative pt-10 pb-8 md:pt-12">
        
        {/* Header & Text */}
        <div className="flex flex-col items-center text-center px-6 mb-8 md:mb-10 max-w-3xl mx-auto">
          <h3 className="text-[#E6A2A9] text-2xl md:text-4xl font-black mb-4">
            Proven Results Across the Board
          </h3>
          <div className="w-16 h-1 bg-[#E6A2A9]/40 mb-6 rounded-full"></div>
          <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
            Our consultants have partnered with over 150+ organizations globally, ranging from boutique law firms to international luxury resort groups.
          </p>
        </div>

        {/* Ticker Tape */}
        <div className="w-full bg-[#2B2A2A] py-4 md:py-5 overflow-hidden flex items-center shrink-0">
          <div className="flex gap-8 md:gap-16 animate-marquee whitespace-nowrap">
            {/* Repeat content for seamless marquee */}
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-white font-bold tracking-widest text-sm md:text-base">STREDGE</span>
                <span className="text-[#E6A2A9] text-xl leading-none">&bull;</span>
                <span className="text-white font-bold tracking-widest text-sm md:text-base">RESORTX</span>
                <span className="text-[#E6A2A9] text-xl leading-none">&bull;</span>
                <span className="text-white font-bold tracking-widest text-sm md:text-base">LEGALGLOBAL EDUCORE</span>
                <span className="text-[#E6A2A9] text-xl leading-none">&bull;</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="w-full px-6 flex-1 flex items-end md:items-center justify-center pb-6 md:pb-0 mt-6 md:mt-8">
          <div className="w-full max-w-5xl bg-[#222222] rounded-xl shadow-2xl px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-white text-xl md:text-3xl font-bold mb-2">Ready to lead your Industry?</h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium">Connect with our consultants for a specialized sector deep-dive.</p>
            </div>
            <button className="bg-[#E6A2A9] text-white font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:bg-[#d98b92] transition-colors shrink-0 whitespace-nowrap shadow-md">
              Register Today
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};

export default GlobalStandardsSection;
