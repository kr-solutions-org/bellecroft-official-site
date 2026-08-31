import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="w-full flex-1 bg-[#d5a5ac] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-12 md:py-16 text-center" style={{ backgroundColor: '#DBA8AF' }}>
      
      {/* Title */}
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-tight tracking-tight mb-4">
        <span className="text-white">Insights Delivered to<br/></span>
        <span className="text-white">Your </span>
        <span className="text-[#333333]">Executive Dashboard</span>
      </h2>
      
      {/* Separator Line */}
      <div className="w-24 h-1 bg-white mb-6 rounded-full"></div>
      
      {/* Description */}
      <p className="text-[#333333] text-base md:text-lg lg:text-xl font-medium max-w-3xl mb-10 leading-relaxed">
        Receive updates on leadership, governance, professional development, and organisational growth.
      </p>
      
      {/* Form */}
      <form className="w-full max-w-4xl flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your professional email" 
          className="flex-1 bg-white px-6 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#333333] text-gray-800 placeholder-gray-400 text-base"
          required
        />
        <button 
          type="submit" 
          className="bg-[#E6A2A9] text-white font-bold text-sm md:text-base px-8 py-4 rounded-md shadow-md hover:bg-[#c9878a] transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
      
      {/* Disclaimer text */}
      <p className="text-[#444444] text-sm md:text-base font-medium">
        By subscribing, you agree to our privacy Policy and consent to receive marketing updates.<br className="hidden md:block"/>
        No spam, just pure strategy.
      </p>
      
    </div>
  );
};

export default Newsletter;
