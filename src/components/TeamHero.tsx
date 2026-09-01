import React from "react";
import StredgeLogo from "../assets/StredgeLogo.png"

const TeamHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-white">
      
      {/* Background Image (Tree) */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[65%] lg:w-[60%] z-0">
        <img 
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
          alt="Large intricate tree" 
          className="w-full h-full object-cover object-left grayscale opacity-90 mix-blend-multiply"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
          }}
        />
        {/* Gradient to seamlessly blend the tree into the white left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent w-[70%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
      </div>

      {/* Main Content Container (Top half) */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 flex-1 flex flex-col justify-center items-center max-w-7xl mx-auto pt-24">
        <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col items-center text-center">
          
          <h1 className="leading-[1.1] mb-6 flex flex-col">
            <span className="block text-[clamp(2.5rem,5vw,4.5rem)] font-black text-[#2B2A2A] tracking-tight">
              The Architects of
            </span>
            <span className="block text-[clamp(3.5rem,7vw,6.5rem)] font-black text-[#E6A2A9] tracking-tighter leading-[0.9] mt-1 text-[clamp(3.5rem,8vw,7rem)]"  style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}>
              Strategic
            </span>
            <span 
              className="block text-[#E6A2A9]  text-[clamp(3.5rem,7vw,6.5rem)] italic tracking-tight leading-[0.9] mt-2 text-[clamp(3.5rem,8vw,7rem)]"  style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}
            >
              Growth
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-[1.1rem] leading-relaxed max-w-[600px] mb-8 font-medium">
            At Bellecroft, we bridge the gap between global strategic theory and local operational excellence. Our team is comprised of seasoned consultants, world-class trainers, and visionary partners dedicated to your professional evolution.
          </p>

          {/* StrEdge Logo Placeholder */}
          <div className="flex items-center gap-1 text-[2.5rem] font-bold tracking-widest text-black mb-4">
            {/* Simple geometric icon representing the logo */}
            <img src={StredgeLogo} alt="Stredge Logo" className="w-100" />
          </div>

        </div>
      </div>

      {/* Bottom Pink Bar */}
      {/* <div className="relative z-20 w-full bg-[#E2A6AA]/75 py-10 md:py-12 px-8 md:px-16 lg:px-28 flex flex-col justify-center mt-auto">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:w-[70%] lg:w-[65%]">
          
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <h2 className="text-2xl md:text-[1.75rem] font-bold text-white tracking-tight">
              Synergizing Global Insights
            </h2>
            <span className="bg-white/90 text-[#E6A2A9] text-[10px] md:text-[11px] font-bold tracking-widest px-3 py-1.5 uppercase rounded-sm shadow-sm">
              Strategic Partner
            </span>
          </div>
          
          <p className="text-[#3b2a2b]/80 text-[14px] md:text-[15px] font-medium leading-relaxed max-w-[700px] mb-8">
            Our strategic relationship with StrEdge Advisory allows us to leverage deep domain expertise across finance, law, and organizational design. This partnership ensures that Bellecroft clients receive the most sophisticated, data-driven consultancy solutions available in the region.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#2B2A2A] text-white text-[14px] font-bold rounded-lg hover:bg-[#404040] transition-colors duration-200 shadow-sm"
            >
              View Collabarative Projects
            </Link>
            
            <Link
              to="/stredge"
              className="inline-flex items-center justify-center gap-2 text-[#2B2A2A] text-[14px] font-bold hover:text-white transition-colors duration-200 group"
            >
              Learn about StrEdge 
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
          
        </div>
      </div> */}
      
    </section>
  );
};

export default TeamHero;
