import React from 'react';
import { Link } from 'react-router-dom';
import StrategicConsultingImg from '../assets/StrategicConsulting.png'; // Assuming this is the correct image based on filename

const CorporateConsulting: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center bg-[#FAFAFA] overflow-hidden py-8">
      {/* Background subtle curve if needed, relying on clean background for now as it matches the vibe */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-gray-400 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-1">
              Corporate Consulting
            </h3>
            <h2 className="text-[#333333] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Strategic Guidance
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <p className="text-[#4A4A4A] text-sm md:text-base lg:text-lg font-medium italic border-l-2 border-transparent md:border-none leading-relaxed">
              " Our consultancy arm provides high-impact strategic roadmaps, ensuring that your business not only adapts to change but drives it. "
            </p>
          </div>
        </div>

        {/* Middle Cards Section */}
        <div className="relative mb-12">
          
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="w-full lg:w-3/5 relative z-0">
              <img 
                src={StrategicConsultingImg} 
                alt="Strategic Consulting" 
                className="w-full h-[200px] md:h-[280px] lg:h-[320px] object-cover grayscale opacity-90"
              />
            </div>
            
            {/* Empty space for flex layout, cards will be absolutely positioned over this */}
            <div className="hidden lg:block lg:w-2/5"></div>
          </div>

          {/* Cards overlapping */}
          <div className="w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex flex-col md:flex-row gap-3 lg:gap-4 z-10 px-4 lg:px-0 lg:pl-[35%] mt-[-2rem] lg:mt-0">
            
            {/* Card 1 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/5 rounded-sm lg:-ml-10 border border-gray-50">
              <h4 className="text-[#E6A2A9] text-base md:text-lg font-bold mb-2 leading-tight">Strategic<br/>Advisory</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Comprehensive market analysis and growth strategy formulation designed to position your enterprise as a market leader in the Asia-Pacific region.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/5 rounded-sm border border-gray-50">
              <h4 className="text-[#E6A2A9] text-base md:text-lg font-bold mb-2 leading-tight">Operational<br/>Excellence</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Process optimisation and organisational restructuring focused on efficiency, scalability, and long-term sustainability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/5 rounded-sm border border-gray-50">
              <h4 className="text-[#E6A2A9] text-base md:text-lg font-bold mb-2 leading-tight">Digital<br/>Transformation</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Guiding organisations through the complexities of modernisation, from infrastructure overhaul to AI-driven workflow integration.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Methodology Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Left Side */}
          <div className="w-full lg:w-1/3 flex flex-col items-start pr-0 lg:pr-4">
            <h2 className="text-[#333333] text-xl md:text-2xl font-black uppercase leading-tight mb-3">
              The Bellecroft<br/>Methodology
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
              Success isn’t just about what you do, but how you do it. We blend international standard frameworks with deep-rooted Maldivian market insights to deliver results that are both globally competitive and locally relevant.
            </p>
            <Link to="/methodology" className="bg-[#E6A2A9] text-white font-bold text-[10px] md:text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm hover:bg-[#d98b92] transition-colors flex items-center gap-2 w-max">
              Our Approach <span>&rarr;</span>
            </Link>
          </div>

          {/* Right Side Cards */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Pink Card 1 */}
              <div className="flex-1 bg-[#E6A2A9] p-5 shadow-md rounded-sm">
                <h4 className="text-white text-base font-bold mb-2">Trusted Experts</h4>
                <p className="text-[#333333] text-xs md:text-sm font-medium leading-relaxed">
                  Strategic partnerships with global leaders like StrEdge.
                </p>
              </div>

              {/* Pink Card 2 */}
              <div className="flex-1 bg-[#E6A2A9] p-5 shadow-md rounded-sm opacity-90">
                <h4 className="text-white text-base font-bold mb-2">Innate Insights</h4>
                <p className="text-[#333333] text-xs md:text-sm font-medium leading-relaxed">
                  Leveraging local data for precise market forecasting.
                </p>
              </div>
            </div>

            {/* Carousel dots placeholder */}
            <div className="flex items-center justify-center lg:justify-end gap-2 mt-4">
              <div className="w-6 h-1.5 bg-gray-400 rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-gray-200 rounded-sm"></div>
              <div className="w-1.5 h-1.5 bg-gray-200 rounded-sm"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CorporateConsulting;
