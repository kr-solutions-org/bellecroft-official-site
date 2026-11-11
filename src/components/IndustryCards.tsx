import React from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES = [
  {
    title1: "Legal",
    title2: "Practices",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600",
    description: "Optimizing practice management and leadership for high-performance legal firms.",
    buttonText: "Legal & Compliance"
  },
  {
    title1: "Financial",
    title2: "Services",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600",
    description: "Driving operational efficiency and digital transformation in banking and finance.",
    buttonText: "Financial Consulting"
  },
  {
    title1: "Education",
    title2: "",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600",
    description: "Strategic frameworks for modernizing academic institutions and learning models.",
    buttonText: "Education Strategy"
  },
  {
    title1: "Public",
    title2: "Sector",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=600",
    description: "Enhancing governance, policy implementation, and public service delivery.",
    buttonText: "Public Sector Ops"
  },
  {
    title1: "Hospitality",
    title2: "& Tourism",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600",
    description: "Elevating guest experiences and streamlining operations for hospitality brands.",
    buttonText: "Hospitality Focus"
  }
];

const IndustryCards: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col bg-[#F3F4F6] overflow-hidden">
      
      {/* Cards Area (Top 70%) */}
      <div className="w-full flex-1 flex min-h-0 pt-16 md:pt-24 px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="w-full flex flex-row h-[70vh] md:h-[60vh] gap-1 md:gap-2">
          {INDUSTRIES.map((industry, index) => (
            <div 
              key={index} 
              className="group flex-1 flex flex-col h-full bg-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors duration-300 overflow-hidden relative cursor-pointer shadow-sm hover:shadow-xl hover:flex-[1.5] transition-all"
            >
              {/* Image box */}
              <div className="relative w-full h-1/2 flex-1 min-h-0 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title1} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
                {/* Fade at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E5E7EB] group-hover:from-[#F9FAFB] to-transparent transition-colors duration-300"></div>
              </div>
              
              {/* Text content */}
              <div className="shrink-0 bg-[#E5E7EB] group-hover:bg-[#F9FAFB] pt-2 pb-6 px-3 flex flex-col items-center justify-start text-center transition-colors duration-300 h-auto">
                <h3 className="mb-2 leading-tight">
                  <span className="block text-[18px] md:text-[24px] lg:text-[28px] font-black text-gray-900 tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                    {industry.title1}
                  </span>
                  {industry.title2 && (
                    <span className="block text-[16px] md:text-[20px] lg:text-[22px] font-medium text-gray-800 tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                      {industry.title2}
                    </span>
                  )}
                </h3>
                
                {/* Expandable description and button */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-full overflow-hidden">
                  <div className="min-h-0 flex flex-col items-center">
                    <p className="text-gray-600 text-[10px] md:text-[13px] leading-relaxed max-w-xs mx-auto mb-4 px-2 mt-2">
                      {industry.description}
                    </p>
                    <Link to="/contact" className="bg-[#E6A2A9] text-white font-bold text-[10px] md:text-xs px-4 py-2 rounded-sm shadow-sm hover:bg-[#d98b92] transition-colors whitespace-nowrap">
                      {industry.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Area (Bottom 30%) */}
      <div className="w-full shrink-0 py-8 md:py-12 flex flex-col items-center justify-center">
        <div className="bg-[#2B2A2A] rounded-xl px-6 md:px-12 py-8 md:py-10 flex flex-col items-center text-center max-w-4xl mx-4 w-full md:w-auto shadow-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Your Industry Next?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl">
            While we specialize in these key pillars, our methodology is built for cross-industry excellence.
          </p>
        </div>
        <div className="mt-[-1.5rem] z-10">
          <Link to="/contact" className="bg-[#E6A2A9] text-white font-bold text-sm tracking-wide px-8 py-3.5 rounded-sm shadow-xl hover:bg-[#d98b92] transition-colors">
            Inquire for Consultation
          </Link>
        </div>
      </div>

    </section>
  );
};

export default IndustryCards;
