import React, { useState } from 'react';

// Using random professional Unsplash portraits as placeholders
const leadership = [
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

const associates = [
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Jocelyn Schleifer", role: "Managing Director", img: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
];

interface Member {
  name: string;
  role: string;
  img: string;
}

const TeamCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="flex flex-col w-full shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
    <div className="w-full h-32 md:h-40 lg:h-48 xl:h-56 bg-gray-200 overflow-hidden relative">
      <img 
        src={member.img} 
        alt={member.name} 
        className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-105" 
      />
    </div>
    <div className="bg-[#2B2A2A] p-3 md:p-4 flex flex-col gap-0.5 border-t-4 border-transparent group-hover:border-[#E6A2A9] transition-colors duration-300">
      <h4 className="text-white font-bold text-sm md:text-base">{member.name}</h4>
      <p className="text-gray-400 text-[10px] md:text-xs">{member.role}</p>
    </div>
  </div>
);

const TeamMembers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Experts');

  return (
    <section className="relative w-full h-screen snap-center py-4 md:py-6 px-6 md:px-12 lg:px-20 bg-[#fdfdfd] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle radial glow background to match design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-white rounded-full opacity-60 blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 h-full justify-center">
        
        {/* LEADERSHIP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="flex flex-col gap-2 lg:pr-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#2B2A2A] tracking-tight">
              The Leadership
            </h2>
            <p className="text-[#3b2a2b]/80 text-[13px] md:text-sm leading-relaxed font-medium">
              Ibrahim Nasheed and Dr. Aishath Zeena form the strategic core of BellaCroft , combining 20+ years of corporate restructuring expertise with deep mastery in organizational psychology to drive every client engagement from vision to measurable transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {leadership.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>

        {/* ASSOCIATES & EXPERTS SECTION */}
        <div className="flex flex-col gap-4">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-gray-200 pb-2 md:pb-3">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xl md:text-2xl font-black text-[#2B2A2A] tracking-tight">
                Associates &amp; Experts
              </h2>
              <p className="text-gray-500 text-[11px] md:text-xs font-medium">
                Specialized consultants and certified trainers ready to deploy.
              </p>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4">
              {['All Experts', 'Consultants', 'Trainers'].map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 md:py-1.5 text-[11px] md:text-xs font-bold rounded-full transition-colors duration-200 ${
                    activeFilter === filter 
                      ? 'bg-[#E6A2A9] text-white shadow-sm' 
                      : 'bg-transparent text-gray-500 hover:text-[#2B2A2A]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {associates.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>

          {/* See More Link */}
          <div className="w-full text-center mt-1">
            <button className="text-gray-500 hover:text-[#E6A2A9] text-[11px] md:text-[13px] font-medium transition-colors">
              See more...
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeamMembers;
