import React from 'react';

const Hero = ({ brand }) => {
  return (
    <section className="bg-navy text-white py-20 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
          {brand?.tagline?.split('.')[0]}. <br />
          <span className="text-orange">{brand?.tagline?.split('.')[1]}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-3xl">
          {brand?.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#pricing" 
            className="bg-orange hover:bg-yellow text-charcoal px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg text-center"
          >
            View Bots & Pricing →
          </a>
          <a 
            href={brand?.telegram || "#results"} 
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white hover:bg-white hover:text-charcoal text-white px-8 py-4 rounded-lg font-bold text-lg transition text-center"
          >
            See Live Results
          </a>
        </div>
        <div className="mt-16 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-charcoal/50">
           <div className="bg-charcoal p-2 flex items-center gap-2">
              <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-slate-400 font-mono">live.{brand?.domain}</div>
           </div>
           <div className="bg-charcoal aspect-video flex items-center justify-center text-slate-500 relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-orange font-mono tracking-widest uppercase">Connecting to Live Feed...</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
