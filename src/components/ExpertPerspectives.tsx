import React from 'react';

const TOP_CARDS = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600",
    meta: "5 MIN READ • OCT 12, 2023",
    title: "Navigating Global Markets",
    description: "Strategies for expansion in uncertain economic climates.",
    author: "Jane Doe"
  },
  {
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=600",
    meta: "7 MIN READ • NOV 04, 2023",
    title: "Sustainable Growth Frameworks",
    description: "Integrating ESG principles into core operational strategies.",
    author: "Alice Smith"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=600",
    meta: "6 MIN READ • DEC 15, 2023",
    title: "The Art of Negotiation",
    description: "Securing strategic partnerships in competitive industries.",
    author: "John Doe"
  },
  {
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600",
    meta: "8 MIN READ • JAN 22, 2024",
    title: "Global Supply Chain Resilience",
    description: "Building robust networks to withstand macro-economic shocks.",
    author: "Mark Johnson"
  }
];

const BOTTOM_CARDS = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    meta: "4 MIN READ • FEB 10, 2024",
    title: "Leadership in Crisis",
    description: "Guiding organizations through unprecedented challenges.",
    author: "Sarah Connor"
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600",
    meta: "9 MIN READ • AUG 30, 2023",
    title: "Decision Intelligence: Merging Analytics with Intuition",
    description: "The psychological and technological framework for better executive decision-making processes.",
    author: "Dr. James Cross"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600",
    meta: "5 MIN READ • MAR 05, 2024",
    title: "Cultivating Corporate Culture",
    description: "Fostering collaboration and innovation in remote teams.",
    author: "Emma Watson"
  },
  {
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600",
    meta: "10 MIN READ • APR 18, 2024",
    title: "Urban Development Strategies",
    description: "Public-private partnerships for smart city initiatives.",
    author: "Michael Scott"
  }
];

const ArticleCard = ({ item }: { item: any }) => (
  <div className="group/card relative w-[300px] md:w-[400px] lg:w-[450px] h-[200px] md:h-[250px] lg:h-[280px] rounded-xl overflow-hidden shrink-0 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300">
    {/* Base Grayscale Image */}
    <img 
      src={item.image} 
      alt={item.title} 
      className="absolute inset-0 w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500 scale-100 group-hover/card:scale-105"
    />
    
    {/* Gradient Overlay (Appears on Hover) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

    {/* Content Overlay */}
    <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-300 pointer-events-none">
      <span className="text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-1">
        {item.meta}
      </span>
      <h3 className="text-white text-lg md:text-xl font-bold leading-tight mb-2">
        {item.title}
      </h3>
      <p className="text-gray-300 text-xs md:text-sm leading-snug line-clamp-2 mb-3 md:mb-4">
        {item.description}
      </p>
      <div>
        <span className="inline-block bg-[#E6A2A9] text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-sm">
          {item.author}
        </span>
      </div>
    </div>
  </div>
);

const ExpertPerspectives: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-[#F9FAFB] py-8">
      
      {/* Top Header & Filters */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 shrink-0 pt-4">
        <div>
          <h2 className="text-[#333333] text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-2">
            Expert Perspectives
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Strategic wisdom and operational guides from our senior partners.
          </p>
        </div>
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-6 md:mt-0">
          {['All', 'Strategy', 'Leadership', 'Growth', 'Training'].map((filter, i) => (
            <button 
              key={filter}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                i === 0 
                  ? 'bg-[#E6A2A9] text-white shadow-sm' 
                  : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee Rows Area */}
      <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 w-full overflow-hidden min-h-0">
        
        {/* Top Marquee (Scrolls Left) */}
        <div className="w-full flex overflow-hidden group">
          <div className="flex gap-4 md:gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0 w-[200%]">
            {[...TOP_CARDS, ...TOP_CARDS].map((item, i) => (
              <ArticleCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Marquee (Scrolls Right) */}
        <div className="w-full flex overflow-hidden group">
          <div className="flex gap-4 md:gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] shrink-0 w-[200%]">
            {[...BOTTOM_CARDS, ...BOTTOM_CARDS].map((item, i) => (
              <ArticleCard key={i} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExpertPerspectives;
