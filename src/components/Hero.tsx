import React from "react";
import { Link } from "react-router-dom";import HeroBG from "../assets/HeroBG.png";
import HeroPerson from "../assets/HeroPerson.png";

// ─── Image variables ─────────────────────────────────────────────
// Replace these with your actual asset imports or URLs.
// e.g. import HeroPortrait from "../assets/hero-portrait.png";
const HeroPortrait = HeroPerson;

// Partner logos — add real URLs/imports as needed
const partners: { name: string; logo?: string }[] = [
  { name: "StrEdge Advisory" },
  { name: "Vantage Global" },
  { name: "Island Hospitality" },
  { name: "Blue Ocean Partners" },
];

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col"
      style={{ backgroundImage: `url(${HeroBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* ── Main content row ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Faint Background Text */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none z-0 opacity-[0.04]">
          <span className="text-[60vw] md:text-[40vw] font-black text-gray-900 leading-none">b</span>
        </div>
        {/* LEFT — text content */}
        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-28 pt-28 pb-10 md:py-0 w-full md:w-[60%]">
          {/* Eyebrow */}
          <p className="text-xs sm:text-[13px] md:text-[15px] font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase text-gray-800 mb-3 md:mb-2 leading-relaxed">
            Professional Development &amp; Strategic Advisory
          </p>

          {/* Headline */}
          <h1 className="leading-none mb-6 md:mb-8">
            {/* Line 1 */}
            <span className="block text-[clamp(3rem,14vw,6.25rem)] font-black text-gray-900">
              Empowering
            </span>

            {/* Line 2 — accent word */}
            <span className="block w-max max-w-full">
              <span
                className="relative block text-[clamp(4.25rem,26vw,12.5rem)] leading-[0.95] text-[#E6A2A9]"
                style={{
                  fontFamily: "var(--font-cursive)",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  fontStyle: "normal"
                }}
              >
                Leaders
              </span>
            </span>

            {/* Line 3 */}
            <span className="block text-[clamp(1.5rem,5.5vw,3rem)] font-bold leading-tight">
                Strengthening Organisations
            </span>
          </h1>

          {/* Body copy */}
          <p className="text-gray-600 text-sm sm:text-base md:text-[20px] leading-relaxed mb-6 md:mb-8 max-w-xl">
            Bellecroft helps organisations build capability, develop leadership, and navigate change through strategic advisory, professional development, and tailored corporate training solutions.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E6A2A9] text-white text-[15px] font-bold rounded-xl hover:bg-[#c9878a] transition-colors duration-200 shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#c9878a] transition-colors duration-200 group py-1 min-h-11"
            >
              Explore Our Services 
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Partner ticker strip ────────────────────────────────── */}
      <div className="bg-[#E6A2A9] py-3 md:py-4 flex items-center overflow-hidden w-full relative z-30">
        <div className="flex gap-8 md:gap-12 animate-marquee whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...partners].map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-white/60 text-sm font-semibold tracking-wide"
            >
              {i === 0 && (
                <span className="px-4 md:px-12 text-white text-xs font-bold uppercase tracking-widest mr-2">
                  Strategic Partners
                </span>
              )}
              {p.logo ? (
                <img src={p.logo} alt={p.name} className="h-5 w-auto opacity-90" />
              ) : (
                <span>{p.name}</span>
              )}
              <span className="text-white/40 text-lg">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT — portrait image overlapping ticker (desktop / tablet only) */}
      <div className="hidden md:flex absolute right-0 bottom-0 z-40 pointer-events-none justify-end items-end">
        <img
          src={HeroPortrait}
          alt="Leadership portrait"
          className="w-full h-auto max-h-[95vh] object-contain object-bottom drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
