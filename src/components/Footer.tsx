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
    <footer className="shrink-0 w-full bg-[#141414] px-8 md:px-16 lg:px-28 pt-12 pb-8 flex flex-col z-10 relative text-gray-300">
      
      {/* Top Section: Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-center text-center md:text-left">
        {/* Left: Logo */}
        <div className="flex justify-center md:justify-start">
          <Link to="/">
            {/* We apply brightness-0 invert to make the logo white for the dark background */}
            <img src={BellecroftLogo} alt="Bellecroft Logo" className="h-16 w-auto object-contain hover:opacity-100 transition-opacity" />
          </Link>
        </div>
        
        {/* Centre: Location */}
        <div className="flex justify-center text-[15px] font-medium tracking-wide">
          <p>Malé, Republic of Maldives</p>
        </div>
        
        {/* Right: Email */}
        <div className="flex justify-center md:justify-end text-[15px] font-medium tracking-wide">
          <a href="mailto:connect@bellecroft.com" className="hover:text-white transition-colors">
            connect@bellecroft.com
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm font-semibold tracking-wider uppercase text-gray-400">
        {NAV_LINKS.map((link) => (
          <Link key={link.label} to={link.href} className="hover:text-white transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom Section: Partner Line & Copyright */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-gray-500 font-medium">
        <p className="tracking-wide">
          In strategic partnership with <span className="text-gray-300">StrEdge Advisory</span>
        </p>
        <div className="flex gap-6">
          <p>© {new Date().getFullYear()} Bellecroft Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
