import React from "react";
import { Link } from "react-router-dom";
import HeroBG from "../assets/HeroBG.png";
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
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundImage: `url(${HeroBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* ── Main content row ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Faint Background Text */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none z-0 opacity-[0.04]">
          <span className="text-[60vw] md:text-[40vw] font-black text-gray-900 leading-none">b</span>
        </div>
        {/* LEFT — text content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-28 pt-32 pb-10 md:py-0 w-full md:w-[60%]">
          {/* Eyebrow */}
          <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-gray-800 mb-2">
            Professional Development &amp; Strategic Advisory
          </p>

          {/* Headline */}
          <h1 className="leading-none mb-8">
            {/* Line 1 */}
            <span className="block text-[100px] font-black text-gray-900">
              Empowering
            </span>

            {/* Line 2 — accent word */}
            <span className="block w-max">
              <span
                className="relative block text-[clamp(4rem,9vw,8rem)] text-[#E6A2A9] mt-8 mb-8"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                LEADERS.
              </span>
            </span>

            {/* Line 3 */}
            <span className="text-[48px] font-bold">
                Strengthening Organisations.
            </span>
          </h1>

          {/* Body copy */}
          <p className="text-gray-600 text-base md:text-[20px] leading-relaxed mb-8">
            Bellecroft helps organisations build capability, develop leadership, and navigate change through strategic advisory, professional development, and tailored corporate training solutions.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#2B2A2A] text-white text-[15px] font-bold rounded-xl hover:bg-[#404040] transition-colors duration-200 shadow-sm"
            >
              Contact Us
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#c9878a] transition-colors duration-200 group"
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
      <div className="bg-[#E6A2A9] py-4 flex items-center overflow-hidden w-full relative z-30">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {/* Duplicate for seamless loop */}
          {[...partners].map((p, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-white/60 text-sm font-semibold tracking-wide"
            >
              {i === 0 && (
                <span className="px-12 text-white text-xs font-bold uppercase tracking-widest mr-2">
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

      {/* RIGHT — portrait image overlapping ticker */}
      <div className="absolute right-0 bottom-0 z-40 pointer-events-none flex justify-end items-end">
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
