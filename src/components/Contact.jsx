import React from 'react';

const Contact = ({ brand }) => {
  return (
    <section id="contact" className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-charcoal">Have Questions? We're Here.</h2>
        <p className="text-slate-500 font-bold mb-10 tracking-tight">
          (That green WhatsApp button isn't just for show — real humans respond.)
        </p>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Not sure which bot fits your strategy? Wondering about MetaTrader setup? 
          Just want to verify a result? Tap the WhatsApp button and ask us anything.
        </p>
        
        <div className="flex flex-col items-center">
          <a 
            href={`https://wa.me/${brand?.whatsapp?.replace(/\D/g, '')}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-whatsapp hover:bg-green-500 text-white px-10 py-6 rounded-2xl text-xl font-black transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-2.32 0-4.591.564-6.613 1.636l-4.743-1.547 1.574 4.624c-1.18 2.073-1.802 4.437-1.802 6.84 0 7.55 6.143 13.693 13.693 13.693 2.37 0 4.68-.613 6.713-1.774l4.747 1.554-1.575-4.633c1.233-2.14 1.884-4.57 1.884-7.07 0-7.55-6.143-13.693-13.693-13.693zM12.031 32.12c-2.13 0-4.21-.51-6.07-1.48l-.43-.23-4.52 1.48 1.51-4.43-.26-.41c-1.07-1.71-1.63-3.69-1.63-5.74 0-6.17 5.02-11.2 11.2-11.2 2.99 0 5.8 1.16 7.91 3.28s3.28 4.92 3.28 7.91c-.01 6.18-5.03 11.21-11.21 11.21z"></path>
            </svg>
            Chat on WhatsApp
            
            <div className="absolute -top-3 -right-3 flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-2 border-white"></span>
            </div>
          </a>
          
          <div className="mt-8 flex gap-8">
             <div className="flex flex-col items-center">
                <span className="text-charcoal font-black">2min</span>
                <span className="text-xs text-slate-400 uppercase font-bold">Avg. Response</span>
             </div>
             <div className="w-px h-10 bg-slate-100"></div>
             <div className="flex flex-col items-center">
                <span className="text-charcoal font-black">24/7</span>
                <span className="text-xs text-slate-400 uppercase font-bold">Availability</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
