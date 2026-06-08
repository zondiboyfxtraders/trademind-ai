import React from 'react';

const Hero = ({ brand }) => {
  return (
    <section className="relative bg-charcoal text-white py-20 lg:py-32 px-6 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/spongebob-trader.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-none tracking-tighter sm:whitespace-nowrap">
          {brand?.name || "SPONGEBOB KILLER"}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-orange font-bold uppercase tracking-[0.2em]">
          {brand?.tagline}
        </p>
        <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-3xl leading-relaxed">
          {brand?.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href="#pricing"
            className="bg-orange hover:bg-yellow text-charcoal px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,140,0,0.3)] text-center"
          >
            VIEW BOTS & PRICING →
          </a>
          <a
            href={brand?.telegram || "#results"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-charcoal text-white px-10 py-5 rounded-full font-black text-xl transition-all transform hover:scale-105 text-center"
          >
            SEE LIVE RESULTS
          </a>
        </div>
        
        {/* Terminal Mockup */}
        <div className="mt-20 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-charcoal/60 backdrop-blur-xl">
           <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/10">
              <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto text-[10px] text-slate-400 font-mono uppercase tracking-widest">Global Terminal — {brand?.domain?.replace('https://', '')}</div>
           </div>
           <div className="aspect-video flex items-center justify-center text-slate-500 relative">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 border-4 border-orange border-t-transparent rounded-full animate-spin mb-6"></div>
                <p className="text-orange font-mono tracking-tighter text-xl font-bold px-4">STREAMS ACTIVE: SYNCING WITH MARKET NODES...</p>
                <div className="mt-4 flex gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    <span>Latency: 14ms</span>
                    <span>Status: Decrypting Signals</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
