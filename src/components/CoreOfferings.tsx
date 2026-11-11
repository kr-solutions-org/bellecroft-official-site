import React from "react";
import { Link } from "react-router-dom";
// Add these images to your src/assets folder
import TeamPhoto from "../assets/TeamPhoto.png";
import StrategicConsultingImg from "../assets/StrategicConsulting.png";
import CorporateTrainingImg from "../assets/CorporateTraining.png";
import ExecutiveCoachingImg from "../assets/ExecutiveCoaching.png";

const CoreOfferings: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100svh] md:overflow-hidden bg-[#F9FAFB] flex flex-col max-sm:min-h-0">
      {/* Soft transition from the hero ticker into the offerings section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 z-40 bg-gradient-to-b from-[#E6A2A9]/80 via-[#E6A2A9]/30 to-transparent" />

      {/* Overlapping Arm Image (adjust positioning as needed) */}
      {/* <div className="absolute right-0 z-10 pointer-events-none hidden md:block">
        <img src={HeroArm} alt="Gesturing Arm" className=" object-contain object-right" />
      </div> */}

      {/* Top Banner Area */}
      <div className="relative w-full overflow-hidden bg-[#f0c8cc0c] flex flex-col justify-center flex-none py-12 md:py-0 md:flex-[0.45] md:min-h-0 shrink-0 max-sm:min-h-[21rem] max-sm:py-9">
        {/* Background image placeholder & Gradient overlay */}
        <div className="absolute inset-0 z-10">
          {/* Right side image */}
          <div className="absolute top-0 right-0 w-full z-30 md:w-2/3 h-full">
            <img src={TeamPhoto} alt="Team collaborating" className="w-full h-full object-cover object-center" />
          </div>
          {/* Gradient to blend the text side into the image side */}
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-[#E6A2A9] via-[#E6A2A9]/80 md:via-[#E6A2A9]/60 to-[#E6A2A9]/30 md:to-transparent max-sm:from-[#E6A2A9] max-sm:via-[#E6A2A9]/88 max-sm:to-[#E6A2A9]/55"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-28 py-2 md:py-8 flex flex-col max-sm:py-0">
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
            <p className="text-white/90 text-sm md:text-[20px] leading-relaxed max-w-md mb-4 md:mb-6 font-light max-sm:mb-3 max-sm:text-[14px] max-sm:leading-[1.6]">
              <span className="hidden sm:inline">We deliver specialised expertise through a methodology that</span>
              <span className="sm:hidden">We deliver specialised expertise through proven methodologies that drive measurable organisational impact.</span>
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[13px] md:text-[20px] font-bold text-gray-900 max-sm:text-white max-sm:hover:text-white/85 hover:text-gray-700 transition-colors group py-1 min-h-11"
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
      <div className="relative z-20 w-full px-5 sm:px-8 md:px-16 lg:px-28 pb-10 md:py-8 flex-none md:flex-[0.55] md:min-h-0 flex flex-col justify-center max-sm:px-0 max-sm:pb-9 max-sm:pt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 max-w-7xl mx-auto w-full md:h-full max-sm:flex max-sm:gap-4 max-sm:overflow-x-auto max-sm:snap-x max-sm:snap-mandatory max-sm:scroll-px-5 max-sm:px-5 max-sm:pb-3 max-sm:scrollbar-hide">
          
          {/* Card 1 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 max-sm:snap-center max-sm:shrink-0 max-sm:w-[76vw] max-sm:max-w-[19rem] max-sm:h-[27rem] max-sm:rounded-2xl max-sm:bg-[#F9FAFB] max-sm:overflow-hidden max-sm:shadow-md max-sm:border max-sm:border-black/[0.04]">
            {/* Image Box */}
            <div className="relative w-full flex-1 min-h-[180px] md:min-h-[150px] bg-gray-200 overflow-hidden grayscale max-sm:grayscale-0 group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={StrategicConsultingImg} alt="Strategic Advisory" className="w-full h-full object-cover object-top" />
              </div>
              {/* Fade to background color at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            {/* Text Content */}
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative max-sm:px-5 max-sm:pb-6 max-sm:pt-3">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">01</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight max-sm:text-[20px]">
                  Strategic
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight max-sm:text-[17px]">
                  Advisory
                </span>
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs mx-auto max-sm:text-[13.5px] max-sm:leading-[1.65]">
                Governance, planning, and transformation — for decisions made with confidence.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 max-sm:snap-center max-sm:shrink-0 max-sm:w-[76vw] max-sm:max-w-[19rem] max-sm:h-[27rem] max-sm:rounded-2xl max-sm:bg-[#F9FAFB] max-sm:overflow-hidden max-sm:shadow-md max-sm:border max-sm:border-black/[0.04]">
            <div className="relative w-full flex-1 min-h-[180px] md:min-h-[150px] bg-gray-300 overflow-hidden grayscale max-sm:grayscale-0 group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={CorporateTrainingImg} alt="Corporate Training" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative max-sm:px-5 max-sm:pb-6 max-sm:pt-3">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">02</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight max-sm:text-[20px]">
                  Corporate
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight max-sm:text-[17px]">
                  Training
                </span>
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs mx-auto max-sm:text-[13.5px] max-sm:leading-[1.65]">
                Practical learning experiences that enhance professional capability and workplace performance.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 max-sm:snap-center max-sm:shrink-0 max-sm:w-[76vw] max-sm:max-w-[19rem] max-sm:h-[27rem] max-sm:rounded-2xl max-sm:bg-[#F9FAFB] max-sm:overflow-hidden max-sm:shadow-md max-sm:border max-sm:border-black/[0.04]">
            <div className="relative w-full flex-1 min-h-[180px] md:min-h-[150px] bg-gray-200 overflow-hidden grayscale max-sm:grayscale-0 group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={ExecutiveCoachingImg} alt="Executive Development" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative max-sm:px-5 max-sm:pb-6 max-sm:pt-3">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">03</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight max-sm:text-[20px]">
                  Executive
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight max-sm:text-[17px]">
                  Development
                </span>
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs mx-auto max-sm:text-[13.5px] max-sm:leading-[1.65]">
                Leadership coaching and development programmes for current and future leaders.
              </p>
              <div className="absolute bottom-2 right-4 text-[#E6A2A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                →
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300 max-sm:snap-center max-sm:shrink-0 max-sm:w-[76vw] max-sm:max-w-[19rem] max-sm:h-[27rem] max-sm:rounded-2xl max-sm:bg-[#F9FAFB] max-sm:overflow-hidden max-sm:shadow-md max-sm:border max-sm:border-black/[0.04]">
            <div className="relative w-full flex-1 min-h-[180px] md:min-h-[150px] bg-gray-300 overflow-hidden grayscale max-sm:grayscale-0 group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                {/* Reusing StrategicConsultingImg as no new image was provided */}
                <img src={StrategicConsultingImg} alt="Organisational Development" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-6 text-center px-4 relative max-sm:px-5 max-sm:pb-6 max-sm:pt-3">
              <span className="block text-[#E6A2A9] font-bold text-sm mb-1 tracking-widest">04</span>
              <h3 className="mb-2 leading-tight">
                <span className="block text-[18px] md:text-[22px] font-black text-gray-900 tracking-tight max-sm:text-[20px]">
                  Organisational
                </span>
                <span className="block text-[16px] md:text-[20px] font-medium text-gray-800 tracking-tight max-sm:text-[17px]">
                  Development
                </span>
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed max-w-xs mx-auto max-sm:text-[13.5px] max-sm:leading-[1.65]">
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
