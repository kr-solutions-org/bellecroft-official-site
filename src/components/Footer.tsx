import React from "react";
import { Link } from "react-router-dom";
import BellecroftLogo from '../assets/logo.png';

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  return (
    <footer className="shrink-0 w-full bg-[#141414] px-6 sm:px-8 md:px-16 lg:px-28 pt-10 md:pt-12 pb-8 flex flex-col z-10 relative text-gray-300 max-sm:px-5 max-sm:pt-11 max-sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
      
      {/* Top Section: Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 items-center text-center md:text-left max-sm:gap-4 max-sm:mb-7">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/" aria-label="Bellecroft home">
            {/* We apply brightness-0 invert to make the logo white for the dark background */}
            <img src={BellecroftLogo} alt="Bellecroft Logo" className="h-14 md:h-16 w-auto max-w-[220px] object-contain hover:opacity-100 transition-opacity max-sm:h-12" />
          </Link>
        </div>
        
        {/* Centre: Location */}
        <div className="flex justify-center text-sm md:text-[15px] font-medium tracking-wide max-sm:text-[13px]">
          <p>Malé, Republic of Maldives</p>
        </div>
        
        {/* Right: Email */}
        <div className="flex justify-center md:justify-end text-sm md:text-[15px] font-medium tracking-wide max-sm:text-[13.5px]">
          <a href="mailto:connect@bellecroft.com" className="inline-flex items-center min-h-11 break-all hover:text-white transition-colors">
            connect@bellecroft.com
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-x-5 sm:gap-x-8 gap-y-1 sm:gap-y-4 mb-8 md:mb-12 text-xs sm:text-sm font-semibold tracking-wider uppercase text-gray-400 max-sm:grid max-sm:grid-cols-2 max-sm:gap-x-6 max-sm:gap-y-0 max-sm:text-left max-sm:text-[11.5px] max-sm:tracking-[0.16em] max-sm:border-t max-sm:border-white/10 max-sm:pt-2">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} to={link.href} className="px-1 py-2 hover:text-white transition-colors max-sm:flex max-sm:min-h-12 max-sm:items-center max-sm:px-0 max-sm:border-b max-sm:border-white/[0.06]">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom Section: Partner Line & Copyright */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-gray-500 font-medium text-center md:text-left max-sm:gap-3 max-sm:pt-5 max-sm:text-[11.5px] max-sm:leading-relaxed">
        <p className="tracking-wide">
          In strategic partnership with <span className="text-gray-300">StrEdge Advisory</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 max-sm:gap-1">
          <Link to="/terms-and-policies" className="inline-flex items-center min-h-11 py-1 hover:text-white transition-colors">
            Terms &amp; Conditions and Policies
          </Link>
          <p>© {new Date().getFullYear()} Bellecroft Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
