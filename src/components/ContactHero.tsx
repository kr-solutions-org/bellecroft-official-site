import React from "react";
import { Link } from "react-router-dom";

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473876637954-4b593eb45fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Cityscape in clouds" 
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-80" 
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
          }}
        />
        {/* Pinkish/sepia overlay to match image tone */}
        <div className="absolute inset-0 bg-[#E6A2A9]/20 mix-blend-overlay"></div>
        {/* White gradient from left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-[90%] md:w-[75%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 flex-1 flex flex-col justify-center max-w-7xl mx-auto">
        <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col items-start text-left">
          
          <h1 className="leading-[1.1] mb-6 flex flex-col">
            <div className="flex items-baseline gap-3">
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight italic">
                Get In
              </span>
            </div>
            <span className="block text-[clamp(3.5rem,7vw,6.5rem)] font-black text-[#E6A2A9] tracking-tighter leading-[0.9] mb-1">
              Touch
            </span>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight">
                Shape Your
              </span>
            </div>
            <div className="flex items-baseline gap-3 md:gap-4 flex-wrap mt-1">
              <span 
                className="text-[clamp(3rem,6vw,5.5rem)] text-[#E6A2A9]"
                style={{
                  fontFamily: "'Caveat', 'Pacifico', 'Dancing Script', cursive",
                  fontWeight: 300,
                  fontStyle: 'italic'
                }}
              >
                Strategic
              </span>
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight">
                Future
              </span>
            </div>
          </h1>

          <p className="text-gray-600 text-base md:text-[1.1rem] leading-relaxed max-w-[550px] mb-10 font-medium">
            Bellecroft combines international excellence with local Maldivian insights to deliver transformative consulting and corporate training solutions.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2B2A2A] text-white text-[15px] font-bold rounded-xl hover:bg-[#404040] transition-colors duration-200 shadow-sm"
            >
              Get In Touch
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 text-[#2B2A2A] text-[15px] font-bold hover:text-[#E6A2A9] transition-colors duration-200 group"
            >
              Our Story 
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
          
        </div>
      </div>

      {/* Bottom Ticker Bar */}
      <div className="relative z-20 w-full bg-[#2B2A2A] py-3 overflow-hidden whitespace-nowrap flex border-t border-white/10">
        {/* We use two identical ticker divs moving left for an infinite scroll effect. 
            For a static version, we can just center the content or let it scroll with CSS. */}
        <div className="animate-marquee inline-flex items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">GDPR Compliant</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Digital Concierge Online</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Response in 2-4 hrs</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">SSL Encrypted</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-3 flex items-center shrink-0">
           {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">GDPR Compliant</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Digital Concierge Online</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">Response in 2-4 hrs</span>
              <span className="text-white/40 mx-4 text-xs">✦</span>
              <span className="text-gray-300 text-sm font-medium tracking-wide">SSL Encrypted</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* We need to define the marquee animation in index.css for this to scroll, 
          but if not, it will just show statically which is also fine. */}
    </section>
  );
};

export default ContactHero;
