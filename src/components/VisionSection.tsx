import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="w-full h-screen relative flex flex-col font-sans overflow-hidden">
      
      {/* Top Row */}
      <div className="flex-1 flex flex-col md:flex-row w-full min-h-0 relative z-0">
        {/* Top Left - Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#1a0b0b] to-[#4a1c1c] opacity-80" />
          <div className="relative z-10 w-3/4 h-3/4 border-4 border-gray-800/50 flex flex-col items-center justify-center p-4 text-center">
             <span className="text-white/20 font-black text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest -rotate-12">Excellence</span>
             <p className="text-white/50 text-xs md:text-sm mt-4 uppercase tracking-widest">(Placeholder)</p>
          </div>
        </div>

        {/* Top Right - Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#E6A2A9] p-6 md:p-12 lg:p-24 flex flex-col justify-center text-white">
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold mb-4 md:mb-8 relative inline-block self-start">
            <span className="relative z-10">A Vision for Excellence</span>
            <span className="absolute bottom-1 left-0 w-16 md:w-24 h-0.5 md:h-0.75 bg-white z-0" />
          </h2>
          <p className="text-sm md:text-base lg:text-[17px] mb-3 md:mb-6 leading-relaxed opacity-90 font-medium">
            Founded on the principles of precision and strategic foresight, BelleCroft emerged to bridge the gap between abstract corporate theory and tangible operational success.
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
          <div className="absolute -top-7.5 md:-top-20 left-1/2 md:left-[55%] -translate-x-1/2 w-[70%] max-w-100 aspect-4/3 bg-white border-10 md:border-20 border-[#E6A2A9] flex items-center justify-center p-4 md:p-8 z-20 pointer-events-auto shadow-sm">
            {/* StrEdge Logo Placeholder */}
            <div className="flex items-center gap-1 scale-75 md:scale-100">
              <div className="w-10 md:w-14 h-12 md:h-16 relative flex flex-col justify-between py-1">
                 <div className="w-full h-2 md:h-3 border-2 border-gray-800 rounded-sm skew-x-12 transform -translate-x-1" />
                 <div className="w-full h-2 md:h-3 border-2 border-gray-800 rounded-sm skew-x-12" />
                 <div className="w-full h-2 md:h-3 border-2 border-[#3caaf0] rounded-sm skew-x-12 transform translate-x-1" />
              </div>
              <div className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 ml-2 md:ml-4 font-sans">
                str<span className="text-[#3caaf0]">e</span>dge
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 lg:p-24 flex flex-col justify-center relative z-10">
          <h3 className="text-xl md:text-3xl lg:text-[2.2rem] font-bold text-gray-900 mb-4 md:mb-8 relative inline-block self-start">
            The StrEdge Connection
            {/* Small pink underline */}
            <span className="absolute -bottom-2 left-0 w-12 md:w-16 h-1 bg-[#E6A2A9]" />
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
