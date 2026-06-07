import React, { useState, useEffect } from 'react';

const CheckoutModal = ({ isOpen, onClose, selectedPlan, brand }) => {
  const [step, setStep] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [reference, setReference] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Generate reference number
      const randomDigits = Math.floor(100000 + Math.random() * 900000);
      setReference(`TM-${randomDigits}`);
      
      // Reset state
      setStep(1);
      setIsSuccess(false);
      
      // Fetch payment info
      fetch('/data/payment-info.json')
        .then(res => res.json())
        .then(data => setPaymentInfo(data))
        .catch(err => console.error('Error loading payment info:', err));
    }
  }, [isOpen]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(reference);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePopSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden my-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-charcoal transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <div className="p-8 md:p-12">
            {/* Steps Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= 1 ? 'bg-orange text-white' : 'bg-slate-100 text-slate-400'}`}>1</div>
              <div className={`flex-grow h-1 rounded-full transition-all ${step >= 2 ? 'bg-orange' : 'bg-slate-100'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= 2 ? 'bg-orange text-white' : 'bg-slate-100 text-slate-400'}`}>2</div>
              <div className={`flex-grow h-1 rounded-full transition-all ${step >= 3 ? 'bg-orange' : 'bg-slate-100'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= 3 ? 'bg-orange text-white' : 'bg-slate-100 text-slate-400'}`}>3</div>
            </div>

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black mb-2 text-charcoal">Order Summary</h2>
                <p className="text-slate-500 mb-8">Review your selection before proceeding.</p>
                
                <div className="bg-bg-light rounded-2xl p-6 mb-8 border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-slate-600">Product:</span>
                    <span className="font-black text-charcoal">{selectedPlan?.name} License</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-slate-600">Price (ZAR):</span>
                    <span className="font-black text-charcoal text-xl">{selectedPlan?.price_zar}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-slate-600">Price (USD):</span>
                    <span className="font-black text-slate-500">{selectedPlan?.price_usd}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
                    <span className="font-bold text-slate-600">Type:</span>
                    <span className="bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">Lifetime Access</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-black text-charcoal mb-4 uppercase tracking-widest text-xs">Select Payment Method</h3>
                  <button className="w-full flex items-center justify-between p-5 rounded-2xl border-2 border-orange bg-orange/5 text-charcoal font-bold transition shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full border-4 border-orange bg-orange"></div>
                      <span>Direct Bank Deposit</span>
                    </div>
                    <span className="text-xs bg-orange text-white px-2 py-0.5 rounded font-black uppercase">Recommended</span>
                  </button>
                  <button disabled className="w-full flex items-center justify-between p-5 rounded-2xl border-2 border-slate-100 bg-white text-slate-400 font-bold cursor-not-allowed grayscale">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full border-4 border-slate-100"></div>
                      <span>Credit / Debit Card</span>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded font-black uppercase">Coming Soon</span>
                  </button>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full mt-12 bg-charcoal text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-lg"
                >
                  Confirm & Generate Reference →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black mb-2 text-charcoal">Make Payment</h2>
                <p className="text-slate-500 mb-8">Follow the instructions below to complete your order.</p>

                <div className="bg-charcoal text-white rounded-2xl p-8 mb-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <img src="/trademind-logo.png" alt={brand?.name} className="h-6 opacity-20 grayscale brightness-200" />
                  </div>
                  <h4 className="text-orange uppercase tracking-widest font-black text-xs mb-4">Bank Account Details</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Bank</p>
                      <p className="font-bold">{paymentInfo?.bankName}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Account Holder</p>
                      <p className="font-bold">{paymentInfo?.accountHolder}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Account Number</p>
                      <p className="font-bold font-mono">{paymentInfo?.accountNumber}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold uppercase text-[10px] mb-1">Branch / Swift</p>
                      <p className="font-bold">{paymentInfo?.branchCode} / {paymentInfo?.swiftCode}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-orange font-black uppercase text-[10px] mb-2 tracking-widest">Your Unique Reference</p>
                    <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-2xl font-black tracking-tighter">{reference}</span>
                      <button 
                        onClick={copyToClipboard}
                        className={`px-4 py-2 rounded-lg font-bold text-xs transition uppercase ${isCopied ? 'bg-success text-white' : 'bg-orange text-white hover:bg-yellow hover:text-charcoal'}`}
                      >
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="mt-4 text-xs text-slate-300 italic">
                      ⚠️ Use this exact reference in your banking app.
                    </p>
                  </div>
                </div>

                <div className="bg-bg-light rounded-2xl p-6 border border-slate-100 mb-8">
                  <p className="font-bold text-charcoal mb-4">Final Amount to Pay:</p>
                  <div className="flex gap-4">
                    <div className="bg-white border border-slate-200 p-4 rounded-xl flex-grow">
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">ZAR</p>
                      <p className="text-xl font-black text-charcoal">{selectedPlan?.price_zar}</p>
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-xl flex-grow">
                      <p className="text-xs text-slate-400 font-bold uppercase mb-1">USD</p>
                      <p className="text-xl font-black text-charcoal">{selectedPlan?.price_usd}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="py-5 rounded-2xl font-black text-lg border-2 border-slate-100 text-slate-400 hover:border-slate-200 transition"
                  >
                    ← Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    className="bg-orange text-white py-5 rounded-2xl font-black text-lg hover:bg-yellow hover:text-charcoal transition shadow-lg"
                  >
                    I've Made Payment →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black mb-2 text-charcoal text-center">Verify Payment</h2>
                <p className="text-slate-500 mb-10 text-center">Submit your proof of payment to activate your license.</p>

                <div className="space-y-6">
                  {/* Option A: WhatsApp */}
                  <div className="p-8 rounded-3xl border-2 border-whatsapp/20 bg-whatsapp/5 relative overflow-hidden group">
                    <div className="flex flex-col items-center text-center relative z-10">
                      <div className="w-16 h-16 bg-whatsapp text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition duration-300">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-2.32 0-4.591.564-6.613 1.636l-4.743-1.547 1.574 4.624c-1.18 2.073-1.802 4.437-1.802 6.84 0 7.55 6.143 13.693 13.693 13.693 2.37 0 4.68-.613 6.713-1.774l4.747 1.554-1.575-4.633c1.233-2.14 1.884-4.57 1.884-7.07 0-7.55-6.143-13.693-13.693-13.693zM12.031 32.12c-2.13 0-4.21-.51-6.07-1.48l-.43-.23-4.52 1.48 1.51-4.43-.26-.41c-1.07-1.71-1.63-3.69-1.63-5.74 0-6.17 5.02-11.2 11.2-11.2 2.99 0 5.8 1.16 7.91 3.28s3.28 4.92 3.28 7.91c-.01 6.18-5.03 11.21-11.21 11.21z"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-black text-charcoal mb-2">Option A: Send via WhatsApp</h3>
                      <p className="text-slate-500 mb-8 max-w-sm">Recommended for fast verification. Attach your POP screenshot directly.</p>
                      <a 
                        href={`https://wa.me/${paymentInfo?.whatsappNumber?.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${brand?.name}! I've just made a payment.\n\nReference: ${reference}\nProduct: ${selectedPlan?.name} License\nAmount: ${selectedPlan?.price_zar}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp text-white px-8 py-4 rounded-xl font-black shadow-lg hover:bg-green-500 transition-all flex items-center gap-3 active:scale-95"
                      >
                        📱 Open WhatsApp Fast-Verify
                      </a>
                    </div>
                  </div>

                  <div className="relative py-4 flex items-center justify-center">
                    <div className="absolute w-full h-px bg-slate-100"></div>
                    <span className="relative bg-white px-4 text-xs font-black text-slate-300 uppercase tracking-widest">or</span>
                  </div>

                  {/* Option B: Web Form */}
                  <div className="p-8 rounded-3xl border border-slate-100 bg-bg-light/50">
                    <h3 className="text-lg font-black text-charcoal mb-6">Option B: Upload on Website</h3>
                    <form onSubmit={handlePopSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1 block">Full Name</label>
                          <input 
                            type="text" 
                            required
                            placeholder="John Doe"
                            className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl font-bold text-charcoal focus:ring-2 focus:ring-orange focus:border-transparent transition"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1 block">Email Address</label>
                          <input 
                            type="email" 
                            required
                            placeholder="john@example.com"
                            className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl font-bold text-charcoal focus:ring-2 focus:ring-orange focus:border-transparent transition"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1 block">Order Reference</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={reference}
                          className="w-full bg-white/50 border border-slate-200 px-4 py-3 rounded-xl font-bold text-slate-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1 block">Upload Proof (PNG/JPG/PDF)</label>
                        <div className="relative group">
                          <input 
                            type="file" 
                            required
                            accept=".png,.jpg,.jpeg,.pdf"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="w-full bg-white border-2 border-dashed border-slate-200 py-8 rounded-xl flex flex-col items-center group-hover:border-orange group-hover:bg-orange/5 transition duration-300">
                             <svg className="w-8 h-8 text-slate-300 group-hover:text-orange mb-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                             </svg>
                             <span className="text-xs font-bold text-slate-400 group-hover:text-charcoal transition">Drop file here or click to browse</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-charcoal text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-lg mt-4 disabled:opacity-50 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : 'Submit Proof of Payment →'}
                      </button>
                    </form>
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full mt-8 text-slate-400 font-bold hover:text-charcoal transition text-sm underline underline-offset-4"
                >
                  ← Go back to account details
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-success text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
               </svg>
            </div>
            <h2 className="text-3xl font-black mb-4 text-charcoal">POP Received!</h2>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto leading-relaxed">
              Thank you! We've received your payment confirmation. Our team will verify the deposit and send your license key to your email within 30 minutes.
            </p>
            
            <div className="bg-bg-light rounded-2xl p-6 mb-10 inline-block text-left border border-slate-100">
               <div className="text-xs font-black uppercase text-slate-400 mb-2">Order Reference</div>
               <div className="text-xl font-black text-charcoal">{reference}</div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={onClose}
                className="w-full bg-charcoal text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-lg"
              >
                Done
              </button>
              <a 
                href="#results" 
                onClick={onClose}
                className="block text-orange font-black uppercase tracking-widest text-xs hover:underline"
              >
                Watch live results while you wait →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
