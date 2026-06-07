import React, { useState, useEffect } from 'react';

const Results = ({ brand }) => {
  const brandName = brand?.name || "TradeMind AI";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/results.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching results:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="results" className="py-24 px-6 bg-bg-light">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-12 w-64 bg-slate-200 rounded mb-6"></div>
            <div className="h-6 w-96 bg-slate-200 rounded mb-16"></div>
            <div className="grid md:grid-cols-3 gap-8 w-full">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-3xl p-8 h-80 shadow-xl border border-slate-100"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="results" className="py-24 px-6 bg-bg-light">
        <div className="max-w-6xl mx-auto text-center text-red-500">
          <h2 className="text-2xl font-bold">Error loading performance data</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  const { bots, lastUpdated, verifiedScreenshots } = data;
  const [selectedImage, setSelectedImage] = useState(null);

  const formattedDate = new Date(lastUpdated).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return (
    <section id="results" className="py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">{brandName} Performance Dashboard</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4">
            These numbers update in real time. What you see is what our bots actually delivered — 
            no filters, no retouching, and no hidden small print.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LAST UPDATED: {formattedDate}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {bots.map((bot) => (
            <div key={bot.id} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold">{bot.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">ID: {bot.id}</p>
                </div>
                <div className="bg-green-100 text-success px-3 py-1 rounded-full text-sm font-bold">
                  {bot.status.toUpperCase()}
                </div>
              </div>

              <div className="mb-8">
                 <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-success">{bot.return}</span>
                    <span className="text-slate-400 text-sm font-medium">Monthly</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-success h-full" style={{width: `${bot.performance}%`}}></div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-6">
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Profit</p>
                  <p className="text-lg font-bold">{bot.profit}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Win Rate</p>
                  <p className="text-lg font-bold">{bot.winRate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Max Drawdown</p>
                  <p className="text-lg font-bold text-red-500">{bot.drawdown}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Status</p>
                  <p className="text-lg font-bold text-success italic">{bot.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-charcoal text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden mb-24">
           <div className="absolute right-0 top-0 w-64 h-64 bg-orange opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">No Smoke. No Mirrors.</h3>
              <p className="text-slate-300 max-w-xl">
                Our robots stream live on this page 24/7. If a bot underperforms, you'll see it — before you buy.
                Transparency is our only strategy.
              </p>
           </div>
           <a href="#contact" className="bg-orange text-charcoal px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:scale-105 transition relative z-10 shadow-lg">
              Verify These Trades
           </a>
        </div>

        {/* Verified Results Gallery */}
        <div className="mt-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Radical Transparency: Verified Trade Logs</h2>
            <p className="text-slate-400">Click on any screenshot to view full-size verified trade proof.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verifiedScreenshots && verifiedScreenshots.map((shot, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(shot)}
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-slate-800 transition-all group-hover:border-orange">
                  <img 
                    src={shot.url} 
                    alt={shot.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold">{shot.caption}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-orange text-charcoal text-[10px] font-black px-2 py-1 rounded-md transform rotate-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                    VERIFIED PROOF
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-bold">{shot.caption}</span>
                  <span className="text-slate-500 font-mono">{shot.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-charcoal/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div 
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="w-full h-auto max-h-[80vh] rounded-xl shadow-2xl border-4 border-slate-800"
              />
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black text-orange mb-2">{selectedImage.caption}</h3>
                <p className="text-slate-400 font-mono">Captured on: {selectedImage.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
