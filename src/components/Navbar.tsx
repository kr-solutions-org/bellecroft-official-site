import React, { useState } from "react";
import { Link } from "react-router-dom";

// Replace with your actual logo import
// import BellecroftLogo from "../assets/bellecroft-logo.svg";
const BellecrogtLogo = "LOGO_PLACEHOLDER";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full px-6 md:px-12 py-6 flex items-center justify-between z-50 bg-transparent">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 shrink-0">
        {/* Replace <img> src with your actual logo variable */}
        <img
          src={BellecrogtLogo}
          alt="Bellecroft Logo"
          className="h-12 w-auto"
          onError={(e) => {
            // Fallback inline SVG-style placeholder when no image provided
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Inline fallback logo — remove once real logo is provided */}
        <span className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-t-lg rounded-b-full border-2 border-[#E6A2A9] text-[#E6A2A9] font-bold text-lg font-serif relative">
            <span className="absolute -top-3 text-xs">👑</span>
            b
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[#E6A2A9] font-medium text-2xl tracking-wide lowercase font-sans">
              bellecroft
            </span>
            <span className="text-[#E6A2A9]/60 text-[8px] uppercase tracking-[0.2em] font-sans font-medium">
              PVT LTD
            </span>
          </span>
        </span>
      </Link>

      {/* Desktop Nav Links — pill container */}
      <div className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-6 py-1.5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="px-5 py-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/contact"
        className="hidden md:inline-flex items-center px-8 py-2.5 rounded-full border border-[#E6A2A9] text-[#E6A2A9] text-sm font-medium hover:bg-[#E6A2A9] hover:text-white transition-all duration-200 shadow-sm bg-white/50 backdrop-blur-sm"
      >
        Contact Us
      </Link>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
            mobileOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${
            mobileOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${
            mobileOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 flex flex-col gap-1 py-4 px-6 md:hidden z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="py-2.5 text-gray-700 text-sm font-medium border-b border-gray-50 hover:text-[#c9878a] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-3 inline-flex justify-center px-6 py-2.5 rounded-full border-2 border-[#c9878a] text-[#c9878a] text-sm font-semibold hover:bg-[#c9878a] hover:text-white transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;