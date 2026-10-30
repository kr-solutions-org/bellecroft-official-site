import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Replace with your actual logo import
// import BellecroftLogo from "../assets/bellecroft-logo.svg";
import BellecroftLogo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
];

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  // Track which route the drawer was opened on so navigating closes it
  // without needing a state-syncing effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;
  const setMobileOpen = (open: boolean) => setOpenPath(open ? pathname : null);
  const [hidden, setHidden] = useState(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    // The app scrolls inside its full-height wrapper rather than the window.
    const scrollContainer = document.querySelector<HTMLElement>(
      "[data-scroll-container]"
    );

    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollTop = Math.max(scrollContainer.scrollTop, 0);
      const scrollDelta = currentScrollTop - lastScrollTop.current;

      // Always show the navbar at the top of a page.
      if (currentScrollTop <= 8) {
        setHidden(false);
      } else if (Math.abs(scrollDelta) >= 6) {
        // Hide on a meaningful downward movement and reveal on upward movement.
        setHidden(scrollDelta > 0 && !mobileOpen);
        lastScrollTop.current = currentScrollTop;
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [mobileOpen]);

  const shouldHide = hidden && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 sm:px-6 lg:px-12 py-3 lg:py-4 flex items-center justify-between gap-3 z-50 bg-white/90 backdrop-blur-md shadow-sm lg:shadow-none lg:bg-transparent lg:backdrop-blur-none transform transition-transform duration-300 motion-reduce:transition-none ${
        shouldHide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 shrink-0"
        onClick={() => setMobileOpen(false)}
        aria-label="Bellecroft home"
      >
        <img
          src={BellecroftLogo}
          alt="Bellecroft Logo"
          className="h-14 sm:h-16 lg:h-20 xl:h-22 w-auto"
        />
      </Link>

      {/* Desktop Nav Links — pill container */}
      <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/95 backdrop-blur-md rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-3 xl:px-6 py-1.5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="px-4 xl:px-5 py-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/contact"
        className="hidden lg:inline-flex items-center px-6 xl:px-8 py-2.5 rounded-full border border-[#E6A2A9] text-[#E6A2A9] text-sm font-medium hover:bg-[#E6A2A9] hover:text-white transition-all duration-200 shadow-sm bg-white/50 backdrop-blur-sm"
      >
        Contact Us
      </Link>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 -mr-1 rounded-lg text-gray-800 active:bg-gray-100 transition-colors"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-navigation"
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
        <div
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-white shadow-xl border-t border-gray-100 flex flex-col gap-1 py-3 px-5 sm:px-6 lg:hidden z-50"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`py-3.5 px-2 text-gray-700 text-base font-medium border-b border-gray-100 hover:text-[#c9878a] active:text-[#c9878a] transition-colors ${
                pathname === link.href ? "text-[#c9878a]" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 mb-2 inline-flex items-center justify-center px-6 py-3.5 rounded-full border-2 border-[#c9878a] text-[#c9878a] text-base font-semibold hover:bg-[#c9878a] hover:text-white active:bg-[#c9878a] active:text-white transition-all duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
