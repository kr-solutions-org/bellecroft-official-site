import React from "react";
import { Link } from "react-router-dom";
// Add these images to your src/assets folder
import TeamPhoto from "../assets/TeamPhoto.png";
import StrategicConsultingImg from "../assets/StrategicConsulting.png";
import CorporateTrainingImg from "../assets/CorporateTraining.png";
import ExecutiveCoachingImg from "../assets/ExecutiveCoaching.png";

const CoreOfferings: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#F9FAFB] flex flex-col">
      {/* Soft transition from the hero ticker into the offerings section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 z-40 bg-gradient-to-b from-[#E6A2A9]/80 via-[#E6A2A9]/30 to-transparent" />

      {/* Overlapping Arm Image (adjust positioning as needed) */}
      {/* <div className="absolute right-0 z-10 pointer-events-none hidden md:block">
        <img src={HeroArm} alt="Gesturing Arm" className=" object-contain object-right" />
      </div> */}

      {/* Top Banner Area */}
      <div className="relative w-full overflow-hidden bg-[#f0c8cc0c] flex flex-col justify-center flex-[0.45] min-h-0 shrink-0">
        {/* Background image placeholder & Gradient overlay */}
        <div className="absolute inset-0 z-10">
          {/* Right side image */}
          <div className="absolute top-0 right-0 w-full z-30 md:w-2/3 h-full">
            <img src={TeamPhoto} alt="Team collaborating" className="w-full h-full object-cover object-left md:object-center" />
          </div>
          {/* Gradient to blend the text side into the image side */}
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-[#E6A2A9] via-[#E6A2A9]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 py-4 md:py-8 flex flex-col">
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <h2 className="mb-2 md:mb-4 leading-[1.1]">
              <span className="block text-[clamp(1.75rem,3.5vw,3.5rem)] font-black text-white tracking-tight">
                Our Core
              </span>
              <span className="block text-[clamp(1.75rem,3.5vw,3.5rem)] font-cursive font-light text-white tracking-tight"
              style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}>
                Offerings
              </span>
            </h2>
            <p className="text-white/90 text-sm md:text-[20px] leading-relaxed max-w-md mb-4 md:mb-6 font-light">
              We deliver specialised expertise through a methodology that
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[13px] md:text-[20px] font-bold text-gray-900 hover:text-gray-700 transition-colors group"
            >
              See All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards Area */}
      <div className="relative z-20 w-full px-8 md:px-16 lg:px-28 py-4 md:py-8 flex-[0.55] min-h-0 flex flex-col justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0 max-w-7xl mx-auto w-full h-full">
          
          {/* Card 1 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            {/* Image Box */}
            <div className="relative w-full flex-1 min-h-[150px] bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={StrategicConsultingImg} alt="Strategic Advisory" className="w-full h-full object-cover object-top" />
              </div>
              {/* Fade to background color at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            {/* Text Content */}
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">01</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight">
                  Strategic
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight">
                  Advisory
                </span>
              </h3>
              <p className="text-gray-600 text-[12px] md:text-[13px] leading-relaxed max-w-xs mx-auto">
                Governance, planning, and transformation — for decisions made with confidence.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full flex-1 min-h-[150px] bg-gray-300 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={CorporateTrainingImg} alt="Corporate Training" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">02</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight">
                  Corporate
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight">
                  Training
                </span>
              </h3>
              <p className="text-gray-600 text-[12px] md:text-[13px] leading-relaxed max-w-xs mx-auto">
                Practical learning experiences that enhance professional capability and workplace performance.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full flex-1 min-h-[150px] bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={ExecutiveCoachingImg} alt="Executive Development" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">03</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight">
                  Executive
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight">
                  Development
                </span>
              </h3>
              <p className="text-gray-600 text-[12px] md:text-[13px] leading-relaxed max-w-xs mx-auto">
                Leadership coaching and development programmes for current and future leaders.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full flex-1 min-h-[150px] bg-gray-300 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                {/* Reusing StrategicConsultingImg as no new image was provided */}
                <img src={StrategicConsultingImg} alt="Organisational Development" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">04</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight">
                  Organisational
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight">
                  Development
                </span>
              </h3>
              <p className="text-gray-600 text-[12px] md:text-[13px] leading-relaxed max-w-xs mx-auto">
                Building stronger organisations through culture, capability, and performance improvement.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
