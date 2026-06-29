import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 w-full bg-white px-8 md:px-16 lg:px-28 pt-8 pb-6 flex flex-col z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
        
        {/* Column 1 & 2: Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            {/* Simplified Crown/b Logo SVG placeholder based on design */}
            <div className="text-[#E6A2A9] font-serif text-3xl font-bold flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#E6A2A9]">
              b
            </div>
            <span className="text-2xl font-light text-[#E6A2A9] tracking-tight">bellecroft</span>
          </div>
          <p className="text-gray-400 text-[13px] leading-relaxed max-w-[280px] mb-6 font-medium">
            Cultivating growth through elegant strategy and
            expert professional development.
          </p>
          {/* Social Icons Placeholder */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:text-gray-900 cursor-pointer transition-colors text-sm font-bold">X</div>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:text-gray-900 cursor-pointer transition-colors text-sm font-bold">IG</div>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-500 hover:text-gray-900 cursor-pointer transition-colors text-sm font-bold">IN</div>
          </div>
        </div>

        {/* Column 3: Company */}
        <div className="flex flex-col gap-3 text-[13px] font-medium">
          <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 mb-2">Company</h4>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Our Story</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Team &amp; Experts</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Methodology</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Careers</a>
        </div>

        {/* Column 4: Offerings */}
        <div className="flex flex-col gap-3 text-[13px] font-medium">
          <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 mb-2">Offerings</h4>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Consulting Services</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Workshops &amp; Training</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Industries</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Client Success</a>
        </div>

        {/* Column 5: Knowledge */}
        <div className="flex flex-col gap-3 text-[13px] font-medium">
          <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 mb-2">Knowledge</h4>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Insights &amp; Blog</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Public Sector</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Finance &amp; Law</a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Corporate Strategy</a>
        </div>

        {/* Column 6: Connect */}
        <div className="flex flex-col gap-3 text-[13px] font-medium">
          <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 mb-2">Connect</h4>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-gray-400">✉</span>
            <a href="mailto:hello@bellecroft.mv" className="hover:text-gray-900 transition-colors">hello@bellecroft.mv</a>
          </div>
          <div className="flex items-start gap-2 text-gray-500">
            <span className="text-gray-400">📍</span>
            <span>Male', Republic of Maldives</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-gray-500 font-medium">© 2026 Bellecroft. All rights reserved.</p>
        <div className="flex gap-8 text-[12px] text-gray-500 font-medium">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
