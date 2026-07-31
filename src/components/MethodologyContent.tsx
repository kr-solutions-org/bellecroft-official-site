import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MethodologyContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const synthesisData = [
    {
      title: "International Benchmarking",
      subtitle: "Leveraging global frameworks like Six Sigma, Agile, and OKRs.",
      content: "We utilize strategic tools and management methodologies practiced by the world's leading organizations. This ensures our clients are not just competitive locally, but are building organizations capable on the global stage."
    },
    {
      title: "Hyper-Local Customization",
      subtitle: "Nuanced adaptation for the Maldivian legislative and social context.",
      content: "We deeply embed local context into every strategy, ensuring that global frameworks are adapted to fit the specific regulatory, cultural, and operational realities of the Maldives."
    },
    {
      title: "Ethical Stewardship",
      subtitle: "Prioritizing sustainable growth and organizational health.",
      content: "Our approach goes beyond short-term gains. We focus on ethical practices that ensure long-term sustainability, preserving both the environment and the integrity of the organizations we work with."
    }
  ];

  return (
    <section className="w-full h-screen bg-[#f8f9fa] relative overflow-hidden flex flex-col items-center justify-center snap-center">
      {/* Background radial gradient for subtle effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)'
      }}></div>

      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-20 mx-auto relative z-10 flex flex-col gap-6 md:gap-10 h-full max-h-[900px] justify-center">
        
        {/* BLOCK 1: How we work with You */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B2A2A] mb-8 tracking-tight text-center relative">
            How we <span className="relative">
              work
              {/* Pink underline */}
              <span className="absolute left-0 right-0 -bottom-1.5 h-1 bg-[#E6A2A9]"></span>
            </span> with You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white hover:shadow-[0_8px_30px_rgba(230,162,169,0.15)] transition-shadow duration-300 relative group flex flex-col justify-center">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E6A2A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-lg font-bold text-[#2B2A2A] mb-2 relative z-10">Contextual Audit</h3>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">
                We begin by deep-diving into your current organizational state, identifying unique local challenges and global opportunities.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white hover:shadow-[0_8px_30px_rgba(230,162,169,0.15)] transition-shadow duration-300 relative group flex flex-col justify-center">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E6A2A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-lg font-bold text-[#2B2A2A] mb-2 relative z-10">Strategic Design</h3>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">
                Co-creating a tailored roadmap that aligns with international excellence while respecting local cultural and operational nuances.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white hover:shadow-[0_8px_30px_rgba(230,162,169,0.15)] transition-shadow duration-300 relative group flex flex-col justify-center">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E6A2A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-lg font-bold text-[#2B2A2A] mb-2 relative z-10">Tactical Execution</h3>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">
                Deploying our team of experts to implement solutions on the ground, ensuring seamless integration into daily operations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white hover:shadow-[0_8px_30px_rgba(230,162,169,0.15)] transition-shadow duration-300 relative group flex flex-col justify-center">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#E6A2A9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-lg font-bold text-[#2B2A2A] mb-2 relative z-10">Excellence Loop</h3>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">
                Continuous monitoring and benchmarking against global KPIs to ensure sustainable growth and long-term capability building.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 2: CTA Banner */}
        <div className="w-full bg-[#1a1a1a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shrink-0">
          <div className="flex flex-col gap-1.5 md:max-w-[70%]">
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">
              Ready to see our methodology in action?
            </h2>
            <p className="text-gray-400 text-[13px] md:text-sm font-medium leading-relaxed">
              Discover how we applied this approach to transform the operations of leading resorts and financial institutions.
            </p>
          </div>
          <Link
            to="/insights"
            className="shrink-0 px-6 py-2.5 bg-[#E6A2A9] text-white font-bold rounded-xl hover:bg-[#d68a91] transition-colors duration-200 shadow-md text-[13px] md:text-sm"
          >
            Explore Case Studies
          </Link>
        </div>

        {/* BLOCK 3: The Synthesis of Two Worlds */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-center shrink-0">
          
          {/* Left Column */}
          <div className="flex flex-col flex-1 gap-4 w-full">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
              <span className="text-[#3b3b4f]">The Synthesis of </span>
              <span className="text-[#E6A2A9]">Two Worlds</span>
            </h2>
            
            <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed font-medium">
              Many firms offer cookie-cutter global solutions that fail to account for local complexities. Others offer local knowledge but lack the rigor of international benchmarks.
            </p>

            <blockquote className="border-l-2 border-[#E6A2A9] pl-5 py-0.5 mt-2">
              <p className="text-[#3b3b4f] font-bold italic text-sm md:text-base leading-relaxed">
                " At Bellecroft, We believe excellence is found at the intersection of proven global strategies and deep cultural immersion. "
              </p>
            </blockquote>
          </div>

          {/* Right Column (Accordion/List) */}
          <div className="flex flex-col flex-1 gap-0 overflow-hidden rounded-xl border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.03)] bg-gray-50/50 w-full h-full">
            {synthesisData.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div 
                  key={index}
                  className={`flex flex-col transition-all duration-300 border-b border-white last:border-b-0 cursor-pointer ${
                    isActive ? 'bg-white shadow-sm relative z-10' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={`p-4 md:p-5 flex flex-col ${isActive ? 'border-l-4 border-[#E6A2A9]' : 'border-l-4 border-transparent'}`}>
                    <h3 className="text-base md:text-lg font-bold text-[#2B2A2A] mb-0.5">{item.title}</h3>
                    <p className={`text-[13px] ${isActive ? 'text-gray-600' : 'text-gray-500'} font-medium`}>{item.subtitle}</p>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodologyContent;
