import React from "react";
import WebMeetingImg from "../assets/WebMeeting.png";

const AboutUs: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col relative min-h-0">
      
      {/* Absolute Background Image (Spans full height of AboutUs, going under the black strip) */}
      <div className="absolute top-0 left-0 bottom-0 w-full md:w-1/2 z-0">
        <img src={WebMeetingImg} alt="Web Meeting" className="w-full h-full object-cover object-left" />
        {/* Fade gradient to blend smoothly into the white background on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white"></div>
        {/* Bottom fade so it seamlessly transitions to the footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
      </div>
      
      {/* Main Content (Image Spacer + Text) */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 relative z-10 pointer-events-none">
        
        {/* Left: Spacer (matches image width) */}
        <div className="w-full md:w-1/2 h-full"></div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-8 overflow-y-auto pointer-events-auto">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-gray-900 leading-[1.1] mb-6">
            Trust Built Through<br />
            Expertise.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-[500px]">
            At <strong className="text-gray-900 font-bold">Bellecroft</strong>, we believe that strategic guidance is more than
            just advice, it's a partnership. Our consultants are senior leaders
            with decades of experience across finance, hospitality, and public
            sectors.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Strategic Alignment with StrEdge Advisory",
              "Context-Aware Training Modules",
              "Proven Track Record in the Maldives Market"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-[14px] md:text-[15px] font-bold text-gray-700">
                <span className="w-1.5 h-1.5 bg-[#E6A2A9] shrink-0 block"></span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#about" className="text-[#E6A2A9] font-bold text-[14px] md:text-[15px] hover:text-[#d68a91] transition-colors w-max">
            Learn More About Us
          </a>
        </div>
      </div>

      {/* CTA Banner (Sits directly between the main content and footer) */}
      <div className="relative z-20 w-full px-8 md:px-16 lg:px-28 pb-8 shrink-0 pointer-events-auto">
        <div className="w-full bg-[#1c1c1c] rounded-xl px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your organization?</h3>
            <p className="text-gray-400 text-sm md:text-[15px]">Consult with our expert team to design your path to growth.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <button className="px-6 py-3 bg-[#E6A2A9] text-white font-bold rounded-md hover:bg-[#d68a91] transition-colors text-sm">
              Inquire Now
            </button>
            <button className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 font-bold rounded-md hover:bg-gray-800 transition-colors text-sm">
              Meet Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
