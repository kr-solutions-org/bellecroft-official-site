import React from 'react';
import FounderImg from '../assets/FounderImg.jpeg';

const leadership = [
  { name: "Neefeen Ibrahim", role: "Founder & Managing Director", img: FounderImg },
];

interface Member {
  name: string;
  role: string;
  img: string;
}

const TeamCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="flex flex-col w-full shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
    <div className="w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] bg-gray-200 overflow-hidden relative">
      <img 
        src={member.img} 
        alt={member.name} 
        className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-in-out group-hover:scale-105" 
      />
    </div>
    <div className="bg-[#2B2A2A] p-4 md:p-6 flex flex-col gap-1 border-t-4 border-transparent group-hover:border-[#E6A2A9] transition-colors duration-300">
      <h4 className="text-white font-bold text-base md:text-lg">{member.name}</h4>
      <p className="text-gray-400 text-xs md:text-sm">{member.role}</p>
    </div>
  </div>
);

const TeamMembers: React.FC = () => {
  return (
    <section className="relative w-full h-screen snap-center py-4 md:py-6 px-6 md:px-12 lg:px-20 bg-[#fdfdfd] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Subtle radial glow background to match design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-white rounded-full opacity-60 blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 h-full justify-center">
        
        {/* LEADERSHIP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="flex flex-col gap-2 lg:pr-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#2B2A2A] tracking-tight">
              Founder &amp; Managing Director
            </h2>
            <p className="text-[#3b2a2b]/80 text-[13px] md:text-sm leading-relaxed font-medium">
              Neefeen Ibrahim is the Founder and Managing Director of Bellecroft. A legal professional, higher education lecturer, and corporate trainer, she brings experience across professional development, governance, organisational development, and leadership training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            {leadership.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>

        {/* ASSOCIATES & EXPERTS SECTION */}
        {/* <div className="flex flex-col gap-4"> */}
          
          {/* Header Row */}
          {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-gray-200 pb-2 md:pb-3">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xl md:text-2xl font-black text-[#2B2A2A] tracking-tight">
                Associates &amp; Experts
              </h2>
              <p className="text-gray-500 text-[11px] md:text-[13px] font-medium max-w-2xl">
                Bellecroft collaborates with a trusted network of consultants, trainers, and subject matter experts to deliver specialised expertise across a range of sectors and disciplines.
              </p>
            </div>
          </div> */}

          {/* Cards Grid */}
          {/* {associates.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {associates.map((member, i) => (
                <TeamCard key={i} member={member} />
              ))}
            </div>
          )} */}

        {/* </div> */}

      </div>
    </section>
  );
};

export default TeamMembers;
