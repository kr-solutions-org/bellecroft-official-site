import React from 'react';
import { Link } from 'react-router-dom';

const ContextMatters: React.FC = () => {
  const tableData = [
    {
      area: "Leadership Training",
      typical: "Standard Western corporate modules",
      bellecroft: "Modules localized for high-context island hospitality culture."
    },
    {
      area: "Operational Audit",
      typical: "Remote data analysis via KPIs.",
      bellecroft: "On-Site immersion & stakeholder interviews across islands."
    },
    {
      area: "Policy Development",
      typical: "Generic compliance templates.",
      bellecroft: "Full alignment with Maldives Employment Act & Tourism Regulations."
    },
    {
      area: "Strategic Support",
      typical: "Short-term project engagement.",
      bellecroft: "Long-term advisory with StrEdge partnership network."
    },
    {
      area: "Communication",
      typical: "Formalized, high-barrier interactions.",
      bellecroft: "Direct, personal relationship-based advisory model."
    }
  ];

  return (
    <div className="w-full flex-1 bg-[#E2A6AA] flex flex-col items-center justify-center relative overflow-hidden py-4 md:py-6">
      
      <div className="w-full max-w-5xl px-6 md:px-12 mx-auto flex flex-col justify-center h-full gap-4 md:gap-6">
        
        {/* TOP: Table Section */}
        <div className="flex flex-col items-center w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight text-center">
            Context Matters
          </h2>
          
          <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg border border-white/20">
            <div className="grid grid-cols-3 bg-[#FDF8F8] border-b border-[#F0E6E6]">
              <div className="py-2.5 px-3 md:py-3 md:px-4 font-bold text-[10px] md:text-[11px] text-[#E2A6AA] uppercase tracking-wider">
                Strategic Area
              </div>
              <div className="py-2.5 px-3 md:py-3 md:px-4 font-bold text-[10px] md:text-[11px] text-[#E2A6AA] uppercase tracking-wider border-l border-[#F0E6E6]">
                Typical Global Firm
              </div>
              <div className="py-2.5 px-3 md:py-3 md:px-4 font-bold text-[10px] md:text-[11px] text-[#E2A6AA] uppercase tracking-wider border-l border-[#F0E6E6]">
                The Bellecroft Approach
              </div>
            </div>
            
            <div className="flex flex-col">
              {tableData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 text-[12px] md:text-[13px] border-b border-[#F0E6E6] last:border-b-0 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#FAF5F5]'
                  }`}
                >
                  <div className="py-2.5 px-3 md:py-3 md:px-4 text-gray-700 font-medium">
                    {row.area}
                  </div>
                  <div className="py-2.5 px-3 md:py-3 md:px-4 text-gray-600 border-l border-[#F0E6E6]">
                    {row.typical}
                  </div>
                  <div className="py-2.5 px-3 md:py-3 md:px-4 text-gray-600 border-l border-[#F0E6E6]">
                    {row.bellecroft}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: CTA Section */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
            <span className="text-white block">Empower Your Organization with</span>
            <span className="text-[#2B2A2A] block mt-0.5">Strategic Precision.</span>
          </h2>
          
          <p className="text-[#2B2A2A]/80 text-[13px] md:text-[14px] font-medium max-w-2xl">
            Contact our consultants today for a confidential assessment of your organizational needs.
          </p>
          
          <div className="flex items-center gap-3 mt-1">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-white text-[#E2A6AA] text-[13px] md:text-[14px] font-bold rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="px-6 py-2.5 bg-transparent border-2 border-white text-white text-[13px] md:text-[14px] font-bold rounded-lg hover:bg-white/10 transition-colors shadow-sm"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContextMatters;
