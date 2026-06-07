import React from 'react';

const Features = ({ brand }) => {
  const brandName = brand?.name || "TradeMind AI";
  const features = [
    {
      title: "Real-Time Robot Results",
      copy: `Every algorithm on ${brandName} publishes live performance metrics — monthly return, total profit, drawdown, and win rate. No cherry-picked backtests. No fake screenshots. Just real data you can verify.`,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Lifetime License. No Subscriptions.",
      copy: "Pay once, own forever. No monthly fees, no surprise renewals, no recurring charges. Your bot keeps working as long as you do — at no extra cost.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Trade Anywhere",
      copy: "Whether you swing trade on your phone, scalp on your tablet, or run full automation on PC — we've got you covered. Android, iOS, or MetaTrader — pick your platform and go.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Trade Smarter. Not Harder.</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We believe trading algorithms should prove themselves. That's why every bot on our marketplace streams live, 
            unedited performance data — so you can verify results before spending a cent.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-charcoal text-orange rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {f.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
