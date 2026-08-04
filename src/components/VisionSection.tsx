import React from 'react';
import StredgeLogo from '../assets/StredgeLogo.png';
import VisionImage from '../assets/VisionImage.png';

const VisionSection: React.FC = () => {
  return (
    <section className="w-full h-screen relative flex flex-col font-sans overflow-hidden">
      
      {/* Top Row */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-0 relative z-0">
        {/* Top Left - Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center ">
          <div className="absolute inset-0 opacity-80" />
          <div className="relative z-10  flex flex-col items-center justify-center text-center">
             <img src={VisionImage} alt="" />
          </div>
        </div>

        {/* Top Right - Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#E6A2A9] p-6 md:p-12 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 md:mb-8 self-start">
            A Vision for Excellence
          </h2>
          <p className="text-sm md:text-base lg:text-[17px] mb-3 md:mb-6 leading-relaxed opacity-90 font-medium">
            Founded on the principles of precision and strategic foresight, Bellecroft emerged to bridge the gap between abstract corporate theory and tangible operational success.
          </p>
          <p className="text-sm md:text-base lg:text-[17px] leading-relaxed opacity-90 font-medium">
            Our journey began with a simple question: How can we cultivate lasting growth in an ever-shifting global landscape?
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-0 bg-white relative z-10">
        
        {/* Bottom Left - Overlapping Logo Box */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center pointer-events-none">
          {/* This box is positioned to overlap the top row */}
          <div className="absolute -top-7.5 md:-top-20 left-1/2 md:left-[55%] -translate-x-1/2 w-[70%] max-w-100 aspect-4/3 bg-white flex items-center justify-center p-4 md:p-8 z-20 pointer-events-auto shadow-sm">
            {/* StrEdge Logo Placeholder */}
            <img src={StredgeLogo} alt="StrEdge Logo" className="w-3/4 h-auto object-contain" />
          </div>
        </div>

        {/* Bottom Right - Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 lg:p-24 flex flex-col justify-center relative z-10">
          <h3 className="text-xl md:text-3xl lg:text-[2.2rem] font-bold text-gray-900 mb-4 md:mb-8 self-start">
            The StrEdge Connection
          </h3>
          <p className="text-[#848496] text-xs md:text-sm lg:text-[15px] leading-relaxed max-w-xl font-medium">
            Our strategic alliance with StrEdge Advisory represents a fusion of powerhouses. By integrating their analytical depth with our developmental expertise, we offer a 360-degree transformation suite that is unparalleled in the Maldives and beyond. Together, we navigate complexity with elegant simplicity.
          </p>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="shrink-0 w-full overflow-hidden border-t border-gray-100 py-3 md:py-4 bg-white flex items-center relative z-0">
        <div className="flex whitespace-nowrap animate-marquee opacity-[0.25] text-gray-500 font-light text-base md:text-[1.3rem] tracking-tight">
          {[...Array(30)].map((_, i) => (
            <span key={i} className="mx-3">Bellecroft</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
