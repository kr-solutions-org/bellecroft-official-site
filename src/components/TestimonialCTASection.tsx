import React from 'react';
import { Link } from 'react-router-dom';

const TestimonialCTASection: React.FC = () => {
  return (
    <div className="flex-1 w-full relative flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden bg-[#fafafa]">
      
      {/* Faint Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex flex-col justify-between opacity-[0.03] select-none">
        <span className="text-[15vw] font-black uppercase leading-none whitespace-nowrap ml-[-10%]">BELLECROFT BELLECROFT</span>
        <span className="text-[15vw] font-black uppercase leading-none whitespace-nowrap ml-[-5%]">BELLECROFT BELLECROFT</span>
        <span className="text-[15vw] font-black uppercase leading-none whitespace-nowrap ml-[-20%]">BELLECROFT BELLECROFT</span>
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center gap-8 md:gap-12 h-full">
        
        {/* Testimonial Card */}
        <div className="w-full bg-white rounded-4xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] flex flex-col md:flex-row overflow-hidden relative min-h-[300px]">
          
          {/* Left - Person Silhouette Placeholder */}
          <div className="w-full md:w-[45%] bg-gray-300 relative min-h-[250px] md:min-h-full flex items-center justify-center">
            {/* Using a simple placeholder for the silhouette */}
            <div className="text-gray-500 font-bold uppercase tracking-widest text-sm text-center px-4">
              (Person Silhouette Placeholder)
            </div>
            {/* Simulated silhouette shape overlay */}
            <div className="absolute bottom-0 w-3/4 h-3/4 bg-gray-400 rounded-t-full opacity-50 blur-sm" />
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center relative">
            {/* Quote Mark */}
            <div className="text-[#D1D5DB] text-7xl md:text-9xl font-serif font-black leading-none absolute top-4 left-6 opacity-40">
              “
            </div>
            
            <div className="relative z-10 mt-6 md:mt-8">
              <p className="text-gray-800 text-lg md:text-xl lg:text-[22px] leading-relaxed font-medium mb-8">
                <span className="font-bold text-gray-900">BelleCroft</span> <span className="italic">transformed our board's approach to risk. Their insight was not just deep, it was actionable and immediate.</span>
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                    {/* Fake avatar icon */}
                    <div className="w-5 h-5 bg-gray-200 rounded-full mt-2 mb-1" />
                    <div className="w-8 h-8 bg-gray-200 rounded-t-full absolute bottom-[-4px]" />
                  </div>
                  {/* Name & Title */}
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold text-sm">Ahmed Ibrahim</span>
                    <span className="text-[#848496] text-[10px] md:text-xs font-bold uppercase tracking-wide mt-1">CFO, Island Financial Group</span>
                    {/* Pink underline */}
                    <div className="w-6 h-[2px] bg-[#E6A2A9] mt-1" />
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer group">
                  <svg className="w-6 h-6 text-gray-900 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Box (Matching Home Page Design) */}
        <div className="relative z-20 w-full shrink-0 pointer-events-auto mt-4">
          <div className="w-full bg-[#1c1c1c] rounded-xl px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0 text-center md:text-left max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Let’s Start a Conversation</h3>
              <p className="text-gray-400 text-sm md:text-[15px]">
                Discover how Bellecroft can support your organisation’s next stage of growth.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/contact" className="px-6 py-3 bg-[#E6A2A9] text-white font-bold rounded-md hover:bg-[#d68a91] transition-colors text-sm shadow-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCTASection;
