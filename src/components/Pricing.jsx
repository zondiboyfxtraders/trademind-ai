import React, { useState, useEffect } from 'react';
import CheckoutModal from './CheckoutModal';

const Pricing = ({ brand }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/data/pricing.json')
      .then(res => res.json())
      .then(data => setPlans(data.plans))
      .catch(err => console.error('Error loading pricing data:', err));
  }, []);

  const handleOpenModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <section id="pricing" className="py-24 px-6 bg-orange">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Choose Your Platform. Own It for Life.</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-bold">
            One price. One payment. Lifetime access.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, i) => (
            <div key={i} className={`relative flex flex-col p-10 rounded-3xl border-4 transition-all duration-300 bg-charcoal text-white ${plan.highlight ? 'border-yellow shadow-2xl scale-105 z-10' : 'border-charcoal shadow-lg hover:border-yellow'}`}>
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow text-charcoal text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-black mb-6 text-orange uppercase tracking-tight">{plan.name}</h3>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">{plan.price_zar}</span>
                </div>
                <p className="text-sm mt-1 font-medium text-slate-400">/ {plan.price_usd} USD — One-time</p>
              </div>

              <div className="text-xs font-black uppercase tracking-widest mb-6 text-yellow/80">
                Lifetime License Included
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleOpenModal(plan)}
                className={`w-full py-5 rounded-2xl font-black text-lg transition shadow-lg ${plan.highlight ? 'bg-orange text-white hover:bg-yellow hover:text-charcoal' : 'bg-white/10 text-white hover:bg-orange transition-all border border-white/20'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <CheckoutModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          selectedPlan={selectedPlan} 
          brand={brand}
        />

        <div className="text-center">
           <p className="text-slate-500 font-medium mb-8 italic">
            "Lifetime = your lifetime. No renewals. No expiry."
           </p>
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale border-t border-slate-100 pt-12">
              <span className="font-bold flex items-center gap-2"><div className="w-2 h-2 bg-slate-900 rounded-full"></div> Secure Checkout</span>
              <span className="font-bold flex items-center gap-2"><div className="w-2 h-2 bg-slate-900 rounded-full"></div> Direct Bank Deposit</span>
              <span className="font-bold flex items-center gap-2"><div className="w-2 h-2 bg-slate-900 rounded-full"></div> Instant Access</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
