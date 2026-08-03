import React from "react";
// Add these images to your src/assets folder
import TeamPhoto from "../assets/TeamPhoto.png";
import HeroArm from "../assets/HeroArm.png";
import StrategicConsultingImg from "../assets/StrategicConsulting.png";
import CorporateTrainingImg from "../assets/CorporateTraining.png";
import ExecutiveCoachingImg from "../assets/ExecutiveCoaching.png";

const CoreOfferings: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#F9FAFB] flex flex-col">
      {/* Overlapping Arm Image (adjust positioning as needed) */}
      <div className="absolute right-0 z-10 pointer-events-none hidden md:block">
        <img src={HeroArm} alt="Gesturing Arm" className=" object-contain object-right" />
      </div>

      {/* Top Banner Area */}
      <div className="relative w-full overflow-hidden bg-[#f0c8cc0c] flex flex-col justify-center flex-[0.45] min-h-0 shrink-0">
        {/* Background image placeholder & Gradient overlay */}
        <div className="absolute inset-0 z-10">
          {/* Right side image */}
          <div className="absolute top-0 right-0 w-full z-30 md:w-2/3 h-full">
            <img src={TeamPhoto} alt="Team collaborating" className="w-full h-full object-cover object-left md:object-center" />
          </div>
          {/* Gradient to blend the text side into the image side */}
          <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-[#E6A2A9] via-[#E6A2A9]/95 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-16 lg:px-28 py-4 md:py-8 flex flex-col">
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <h2 className="mb-2 md:mb-4 leading-[1.1]">
              <span className="block text-[clamp(1.75rem,3.5vw,3.5rem)] font-black text-white tracking-tight">
                Our Core
              </span>
              <span className="block text-[clamp(1.75rem,3.5vw,3.5rem)] font-light text-white tracking-tight">
                Offerings
              </span>
            </h2>
            <p className="text-white/90 text-sm md:text-[20px] leading-relaxed max-w-md mb-4 md:mb-6 font-light">
              We deliver specialized expertise through a methodology that
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-[13px] md:text-[20px] font-bold text-gray-900 hover:text-gray-700 transition-colors group"
            >
              See All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Cards Area */}
      <div className="relative z-20 w-full px-8 md:px-16 lg:px-28 py-4 md:py-8 flex-[0.55] min-h-0 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-7xl mx-auto w-full h-full">
          
          {/* Card 1 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            {/* Image Box */}
            <div className="relative w-full flex-1 min-h-0 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={StrategicConsultingImg} alt="Strategic Consulting" className="w-full h-full object-cover object-top" />
              </div>
              {/* Fade to background color at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            {/* Text Content */}
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-2 md:pb-6 text-center px-2 md:px-6">
              <h3 className="mb-2 leading-tight">
                <span className="block text-[20px] md:text-[28px] font-black text-gray-900 tracking-tight">
                  Strategic
                </span>
                <span className="block text-[18px] md:text-[24px] font-medium text-gray-800 tracking-tight">
                  Consulting
                </span>
              </h3>
              {/* <p className="text-gray-600 text-[12px] md:text-[15px] leading-relaxed max-w-xs mx-auto hidden md:block">
                Bespoke organizational strategies designed to navigate complex
                market dynamics and drive sustainable growth.
              </p> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full flex-1 min-h-0 bg-gray-300 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={CorporateTrainingImg} alt="Corporate Training" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-2 md:pb-6 text-center px-2 md:px-6">
              <h3 className="mb-2 leading-tight">
                <span className="block text-[20px] md:text-[28px] font-black text-gray-900 tracking-tight">
                  Corporate
                </span>
                <span className="block text-[18px] md:text-[24px] font-medium text-gray-800 tracking-tight">
                  Training
                </span>
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col h-full min-h-0 cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full flex-1 min-h-0 bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="absolute inset-0">
                <img src={ExecutiveCoachingImg} alt="Executive Coaching" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#F9FAFB] to-transparent"></div>
            </div>
            <div className="shrink-0 bg-[#F9FAFB] pt-2 pb-2 md:pb-6 text-center px-2 md:px-6">
              <h3 className="mb-2 leading-tight">
                <span className="block text-[20px] md:text-[28px] font-black text-gray-900 tracking-tight">
                  Executive
                </span>
                <span className="block text-[18px] md:text-[24px] font-medium text-gray-800 tracking-tight">
                  Coaching
                </span>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
