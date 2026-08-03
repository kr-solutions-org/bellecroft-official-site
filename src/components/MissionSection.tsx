import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="w-full h-screen relative flex flex-col font-sans overflow-hidden bg-[#fafafa]">
      
      {/* Top Half - Mission & Vision */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-0">
        
        {/* Left: Our Mission */}
        <div className="w-full md:w-[60%] h-1/2 md:h-full bg-[#E6A2A9] p-8 md:p-16 lg:p-24 flex flex-col justify-center text-gray-900">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-white self-start">
            Our Mission
          </h2>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold italic mb-4 md:mb-6 max-w-2xl leading-tight text-gray-800">
            Empowering leaders to architect resilient futures through tailored
          </h3>
          <p className="text-sm md:text-base text-gray-800 opacity-90 max-w-xl font-medium leading-relaxed">
            We exist to provide the intellectual scaffolding upon which businesses can build their most ambitious projects, ensuring stability through expert-led transformation.
          </p>
        </div>

        {/* Right: Our Vision Image Placeholder */}
        <div className="w-full md:w-[40%] h-1/2 md:h-full relative bg-gray-900 flex flex-col justify-end overflow-hidden">
          {/* Placeholder for the Eye/HUD image */}
          <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a] to-[#3a2020] opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center opacity-30 border-2 border-dashed border-gray-600 m-4">
             <span className="text-white uppercase tracking-widest text-sm">(Vision Image Placeholder)</span>
          </div>
          
          {/* Our Vision Banner */}
          <div className="relative z-10 w-full bg-[#E6A2A9]/80 backdrop-blur-xs py-3 md:py-4 text-center">
            <span className="text-white text-xl md:text-3xl font-light tracking-wide">Our Vision</span>
          </div>
        </div>
      </div>

      {/* Bottom Half - Why BelleCroft */}
      <div className="flex-1 flex flex-col w-full min-h-0 items-center justify-center p-4 md:p-8 lg:p-12">
        
        {/* Header */}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="relative z-10">Belle</span>Croft?
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto font-medium">
            Our methodology is built on four pillars that ensure every engagement yields measurable, high-impact results.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto px-4 md:px-0">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-cyan-500/10 border border-gray-50 flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Global Perspective</h4>
            <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
              We import international best practices and tailor them precisely for the unique dynamics of the Maldivian and regional markets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-pink-500/10 border border-gray-50 flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Uncompromising<br/>Integrity</h4>
            <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
              Our ethos is transparent, evidence-based, and focused precisely on the long-term health of your organization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-cyan-500/10 border border-gray-50 flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Agile Methodology</h4>
            <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
              We don't believe in rigid frameworks. We adapt our approach to meet your specific cultural and operational challenges.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-pink-500/10 border border-gray-50 flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Outcome Driven</h4>
            <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
              Our success is measured by your growth. Every strategy is designed with clear KPIs and implementation roadmaps built for accountability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
