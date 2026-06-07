import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Results from './components/Results'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [brand, setBrand] = useState({ 
    name: 'TradeMind AI', 
    domain: 'trademind.ai',
    whatsapp: '+27 84 883 4651',
    tagline: 'Stop Guessing. Start Winning.',
    description: 'High-performance AI trading algorithms. Transparent results, verified data, and lifetime access.'
  });
  const [pricing, setPricing] = useState(null);

  useEffect(() => {
    fetch('/data/brand.json')
      .then(res => res.json())
      .then(data => setBrand(data))
      .catch(err => console.error('Error loading brand config:', err));

    fetch('/data/pricing.json')
      .then(res => res.json())
      .then(data => setPricing(data))
      .catch(err => console.error('Error loading pricing config:', err));
  }, []);

  const brandName = brand?.name || "TradeMind AI";
  const firstName = brandName.split(' ')[0];
  const lastName = brandName.split(' ').slice(1).join(' ');
  const plans = pricing?.plans || [];

  return (
    <div className="min-h-screen font-sans text-text-dark bg-bg-light">
      {/* Navigation */}
      <nav className="bg-charcoal border-b border-charcoal/50 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/trademind-logo.png" alt={brandName} className="h-10 mix-blend-multiply" />
            <div className="text-2xl font-black tracking-tighter text-white">
              {firstName} <span className="text-orange">{lastName}</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-slate-300">
            <a href="#results" className="hover:text-orange transition">Results</a>
            <a href="#pricing" className="hover:text-orange transition">Pricing</a>
            <a href="#about" className="hover:text-orange transition">About</a>
            <a href="#contact" className="hover:text-orange transition text-white border border-white/20 px-4 py-2 rounded-lg -mt-2">Support</a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero brand={brand} />
        <Features brand={brand} />
        <Results brand={brand} />
        <Pricing brand={brand} />
        <About brand={brand} />
        <Contact brand={brand} />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal py-16 px-6 border-t border-charcoal/50 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-black tracking-tighter text-white mb-4 flex items-center gap-2">
              <img src="/trademind-logo.png" alt="" className="h-8 mix-blend-multiply" />
              {firstName} <span className="text-orange">{lastName}</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 font-medium">
              {brand?.description || "High-performance AI trading algorithms. Transparent results, verified data, and lifetime access."}
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange hover:text-charcoal transition cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </div>
               <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange hover:text-charcoal transition cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-orange text-xs mb-6">Products</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              {plans.map((plan, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  <a href="#pricing">{plan.name}</a>
                </li>
              ))}
              {plans.length === 0 && (
                <>
                  <li className="hover:text-white transition cursor-pointer">Mobile Bot</li>
                  <li className="hover:text-white transition cursor-pointer">iOS Bot</li>
                  <li className="hover:text-white transition cursor-pointer">PC Automation</li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-orange text-xs mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="hover:text-white transition cursor-pointer">About Us</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-12 border-t border-charcoal/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          <p>{brand?.domain || "spongebob.killer.com"}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
