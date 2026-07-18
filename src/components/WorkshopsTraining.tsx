import React from 'react';
import CorporateTrainingImg from '../assets/CorporateTraining.png';

const WorkshopsTraining: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center bg-[#E2A6A9] overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="w-full md:w-1/2">
            <h3 className="text-white font-bold tracking-widest text-[10px] md:text-xs uppercase mb-1">
              Workshops and Training
            </h3>
            <h2 className="text-[#333333] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              Empowering People
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:pl-10">
            <p className="text-[#333333] text-sm md:text-base lg:text-lg font-medium italic border-l-2 border-transparent md:border-none leading-relaxed">
              " Investment in human capital is the highest yielding strategy. Our corporate training programs are designed to transform your workforce into a competitive asset. "
            </p>
          </div>
        </div>

        {/* Middle Cards Section */}
        <div className="relative mb-12">
          
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image */}
            <div className="w-full lg:w-3/5 relative z-0">
              {/* Using mix-blend mode to give the image a pinkish tint from the background, or just opacity */}
              <div className="absolute inset-0 bg-[#E2A6A9] mix-blend-color z-10"></div>
              <img 
                src={CorporateTrainingImg} 
                alt="Corporate Training" 
                className="w-full h-[200px] md:h-[280px] lg:h-[320px] object-cover grayscale opacity-90 relative z-0"
              />
            </div>
            
            {/* Empty space for flex layout, cards will be absolutely positioned over this */}
            <div className="hidden lg:block lg:w-2/5"></div>
          </div>

          {/* Cards overlapping */}
          <div className="w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 flex flex-col md:flex-row gap-3 lg:gap-4 z-20 px-4 lg:px-0 lg:pl-[35%] mt-[-2rem] lg:mt-0">
            
            {/* Card 1 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/10 rounded-sm lg:-ml-10 border border-gray-50">
              <h4 className="text-[#333333] text-base md:text-lg font-bold mb-2 leading-tight">Executive<br/>Leadership</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Developing the next generation of C-suite leaders through immersive workshops, emotional intelligence training, and strategic simulations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/10 rounded-sm border border-gray-50">
              <h4 className="text-[#333333] text-base md:text-lg font-bold mb-2 leading-tight">Soft skills Mastery</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Empowering teams with essential communication, negotiation, and conflict resolution skills to foster a collaborative corporate culture.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex-1 bg-white p-4 md:p-6 shadow-xl shadow-black/10 rounded-sm border border-gray-50">
              <h4 className="text-[#333333] text-base md:text-lg font-bold mb-2 leading-tight">Technical<br/>Excellence</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Domain-specific training modules tailored for Finance, Legal, and Public Sector professionals, keeping your workforce at the cutting edge.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mt-8 mb-4">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-2 leading-tight">
            <span className="text-white font-bold">Ready to Elevate your Professional</span><br className="hidden md:block"/>
            <span className="text-[#333333] font-black"> Standard?</span>
          </h2>
          
          <p className="text-[#333333] text-sm md:text-base max-w-2xl mx-auto mb-6 leading-relaxed font-medium">
            Whether you're looking for organizational transformation or high-impact training workshops, our team is ready to design a solution tailored to your specific goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="bg-white text-[#E2A6A9] font-bold text-xs tracking-wide px-6 py-2.5 rounded-sm hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-md">
              Schedule a Consultation
            </button>
            <button className="bg-transparent border border-white text-white font-bold text-xs tracking-wide px-6 py-2.5 rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto">
              Browse Upcoming Workshops
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkshopsTraining;
