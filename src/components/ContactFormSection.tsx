import React from "react";

const ContactFormSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center snap-center">
      {/* Background Image for the lower part */}
      <div className="absolute inset-0 z-0 top-[200px]">
        <img 
          src="https://images.unsplash.com/photo-1473876637954-4b593eb45fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Cityscape in clouds" 
          className="w-full h-full object-cover object-center mix-blend-multiply opacity-40 grayscale" 
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
          }}
        />
        {/* Gradients to fade out the image at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
      </div>

      {/* TOP BANNER: Contact Details */}
      <div className="relative z-20 w-full bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] py-12 px-8 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-0">
        
        {/* Left Intro */}
        <div className="flex flex-col gap-3 lg:max-w-[280px]">
          <h2 className="leading-tight">
            <span className="block text-3xl font-black text-[#2B2A2A]">Contact</span>
            <span className="block text-3xl font-light italic text-[#2B2A2A]">Details</span>
          </h2>
          <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
            Our consultants are available for global inquiries with a local heart in the Maldives.
          </p>
          <a href="#form" className="text-[13px] font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors flex items-center gap-1.5 mt-2">
            Send an Inquiry <span>→</span>
          </a>
        </div>

        {/* Right Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 w-full lg:w-auto">
          
          {/* Item 1 */}
          <div className="flex flex-col gap-2.5">
            <div className="bg-[#E6A2A9] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase w-fit rounded-sm">
              Direct Inquiries
            </div>
            <a href="mailto:hello@bellecroft.mv" className="text-lg font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors">
              hello@bellecroft.mv
            </a>
            <p className="text-[12px] text-gray-500 italic leading-snug max-w-[150px]">
              2-4 business hours response time
            </p>
            <a href="mailto:hello@bellecroft.mv" className="text-[12px] font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors flex items-center gap-1.5 mt-1">
              Write to us <span>→</span>
            </a>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-2.5">
            <div className="bg-[#E6A2A9] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase w-fit rounded-sm">
              Call Us
            </div>
            <a href="tel:+9601234567" className="text-lg font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors">
              +960 123 4567
            </a>
            <p className="text-[12px] text-gray-500 italic leading-snug max-w-[150px]">
              Mon-Fri, 9am - 5pm GMT+5
            </p>
            <a href="tel:+9601234567" className="text-[12px] font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors flex items-center gap-1.5 mt-1">
              Call now <span>→</span>
            </a>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-2.5">
            <div className="bg-[#E6A2A9] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase w-fit rounded-sm">
              Office Hours
            </div>
            <div className="text-lg font-bold text-[#2B2A2A]">
              Sun – Thursday
            </div>
            <p className="text-[12px] text-gray-500 italic leading-snug max-w-[160px]">
              Standard Maldivian Government Hours
            </p>
            <a href="#" className="text-[12px] font-bold text-[#2B2A2A] hover:text-[#E6A2A9] transition-colors flex items-center gap-1.5 mt-1">
              View calendar <span>→</span>
            </a>
          </div>

        </div>
      </div>

      {/* BOTTOM FORM AREA */}
      <div id="form" className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center py-16">
        <div className="flex flex-col md:flex-row w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
          
          {/* Left Panel - Image & Title */}
          <div className="w-full md:w-[45%] relative bg-gray-100 flex flex-col justify-end p-10 md:p-14 min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Building structure" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="leading-[1.1] flex flex-wrap items-baseline gap-x-2">
                <span className="text-[2.2rem] lg:text-[2.75rem] font-black text-[#2B2A2A] tracking-tight">
                  Send an
                </span>
                <span className="text-[2.2rem] lg:text-[3rem] font-black text-[#E6A2A9] tracking-tight">
                  Inquiry
                </span>
              </h2>
              <span className="block text-sm font-medium italic text-gray-600 mt-1">
                to our Team.
              </span>
            </div>
          </div>

          {/* Right Panel - Form Fields */}
          <div className="w-full md:w-[55%] p-10 md:p-14 bg-white flex flex-col justify-center">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                  <input type="text" placeholder="John" className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E6A2A9]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E6A2A9]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E6A2A9]" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Company Name</label>
                  <input type="text" placeholder="Organization Ltd." className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E6A2A9]" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Primary Interest</label>
                <div className="relative">
                  <select className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-400 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E6A2A9] cursor-pointer">
                    <option value="" disabled selected>Select your primary interest...</option>
                    <option value="consulting">Consulting</option>
                    <option value="training">Training</option>
                    <option value="audit">Operational Audit</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Tell us about your needs</label>
                <textarea 
                  rows={4} 
                  placeholder="Briefly describe your current challenge or the training requirements of your team..." 
                  className="w-full bg-[#f2f2f2] border-none px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#E6A2A9] resize-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#E6A2A9] focus:ring-[#E6A2A9] cursor-pointer" />
                <label htmlFor="privacy" className="text-[13px] text-gray-500 leading-snug cursor-pointer">
                  I agree to the privacy policy and consent to Bellecroft processing my data.
                </label>
              </div>

              <button type="submit" className="mt-4 px-8 py-3.5 bg-[#E6A2A9] text-white text-[14px] font-bold rounded-lg hover:bg-[#d68a91] transition-colors duration-200 shadow-sm self-start">
                Send Strategic Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ContactFormSection;
