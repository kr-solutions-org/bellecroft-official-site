import React from "react";
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

// ─── Utility: thin marquee-like scroll for partner strip ─────────
// Pure CSS via Tailwind's animate-[marquee] — add the keyframe in
// your tailwind.config.js (see comment at bottom of this file).

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundImage: `url(${HeroBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* ── Main content row ───────────────────────────────────── */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* LEFT — text content */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-28 pt-32 pb-10 md:py-0 w-full md:w-[60%]">
          {/* Eyebrow */}
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-800 mb-5">
            Professional Development &amp; Strategy
          </p>

          {/* Headline */}
          <h1 className="leading-none mb-8">
            {/* Line 1 */}
            <span className="block text-[clamp(3rem,7vw,6rem)] font-black text-gray-900 leading-[1.05] tracking-tight">
              Elevating
            </span>

            {/* Line 2 — accent bar + script word */}
            <span className="relative block my-2 w-max">
              <span className="absolute top-[15%] bottom-[15%] left-[-100vw] -right-5 bg-[#E6A2A9] skew-y-0 z-0" />
              <span
                className="relative z-10 block text-[clamp(4rem,9vw,8rem)] text-white leading-none pr-4 pl-2"
                style={{
                  fontFamily: "'Caveat', 'Pacifico', 'Dancing Script', cursive",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                LEADERSHIP
              </span>
            </span>

            {/* Line 3 */}
            <span className="block text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-tight mt-2">
              <span className="text-[#E6A2A9] font-bold">
                Across
              </span>{" "}
              <span className="text-gray-800 font-light" style={{ fontWeight: 300 }}>
                Borders
              </span>
            </span>
          </h1>

          {/* Body copy */}
          <p className="text-gray-600 text-base md:text-[17px] leading-relaxed max-w-md mb-10">
            Bellecroft combines international excellence with local Maldivian
            insights to deliver transformative consulting and corporate training
            solutions.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition-colors duration-200 shadow-md"
            >
              Get in Touch
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#c9878a] transition-colors duration-200 group"
            >
              Our Story
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
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
