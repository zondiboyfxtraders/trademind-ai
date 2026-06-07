import React from 'react';

const About = ({ brand }) => {
  const brandName = brand?.name || "TradeMind AI";

  return (
    <section id="about" className="py-24 px-6 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange opacity-5 rounded-full blur-[120px] -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange opacity-5 rounded-full blur-[120px] -mr-48 -mb-48"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black mb-8 text-orange">Built by Traders. Backed by Code.</h2>
           <div className="w-20 h-1.5 bg-orange mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-slate-300">
          <p>
            {brandName} was founded on a simple belief: the best trading algorithms should be transparent by default. 
            We got tired of black-box bots that show you flashy backtests but nothing real.
          </p>
          <p>
            So we built a marketplace where every algorithm streams its live performance — wins, losses, and everything in between. 
            We call it <span className="text-white font-bold italic underline decoration-orange underline-offset-4">Radical Transparency™</span>.
          </p>
          <p>
            Every bot is rigorously tested, runs on real market data, and is available as a lifetime license. No subscriptions. 
            No hidden fees. Just honest, high-performance trading automation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: "Founded by", value: "Quant Devs" },
             { label: "Focus", value: "Transparency" },
             { label: "Model", value: "One-Time" },
             { label: "Support", value: "Human-Led" }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <p className="text-orange font-black text-2xl mb-1">{stat.value}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default About;
