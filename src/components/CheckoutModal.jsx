import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function CheckoutModal() {
  const {
    cart,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    checkoutPlan
  } = useApp();

  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Processing, 4: Success
  const [loadingText, setLoadingText] = useState('FORGING YOUR PROFILE...');
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'STRENGTH',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isCheckoutOpen) {
      setStep(1);
      setErrors({});
    }
  }, [isCheckoutOpen]);

  if (!isCheckoutOpen) return null;

  // Determine items purchasing
  const purchaseItems = checkoutPlan ? [checkoutPlan] : cart;
  const totalAmount = purchaseItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Valid 16-digit card number is required';
    }
    if (!formData.cardExpiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
      newErrors.cardExpiry = 'Expiry date (MM/YY) is required';
    }
    if (!formData.cardCvv.trim() || formData.cardCvv.length < 3) {
      newErrors.cardCvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || value;
    setFormData({ ...formData, cardNumber: value.substring(0, 19) });
    if (errors.cardNumber) setErrors({ ...errors, cardNumber: '' });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setFormData({ ...formData, cardExpiry: value.substring(0, 5) });
    if (errors.cardExpiry) setErrors({ ...errors, cardExpiry: '' });
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cardCvv: value.substring(0, 4) });
    if (errors.cardCvv) setErrors({ ...errors, cardCvv: '' });
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
        triggerProcessing();
      }
    }
  };

  const triggerProcessing = () => {
    const texts = [
      'CALIBRATING MUSCLE CODES...',
      'FORGING DIGITAL SECURITY MATRIX...',
      'CALCULATING PEAK ENERGY ZONES...',
      'PROVISONING DIGITAL KEYCARD...'
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < texts.length) {
        setLoadingText(texts[currentIdx]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setStep(4);
        clearCart();
      }
    }, 1200);
  };

  // Helper: Get plan metadata for confirmation card
  const getConfirmationTier = () => {
    const primaryItem = purchaseItems[0];
    if (!primaryItem) return 'BASIC';
    const title = primaryItem.title.toUpperCase();
    if (title.includes('PRO')) return 'PRO MEMBER';
    if (title.includes('ELITE')) return 'ELITE MEMBER';
    return 'BASIC MEMBER';
  };

  const memberBarcode = 'FK-' + Math.floor(100000000 + Math.random() * 900000000);

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={() => step !== 3 && setIsCheckoutOpen(false)}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-surface-container border border-outline-variant/30 z-10 flex flex-col max-h-[90vh] overflow-y-auto rounded-none shadow-2xl animate-scale-up">
        
        {/* Close Button */}
        {step !== 3 && (
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="absolute top-4 right-4 text-on-secondary-container hover:text-primary transition-colors focus:outline-none z-20"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        )}

        {/* Dynamic Content */}
        <div className="p-8 md:p-10 flex flex-col h-full">
          {/* Progress Indicator */}
          {step <= 2 && (
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 flex items-center justify-center font-display text-lg ${step === 1 ? 'bg-primary text-white' : 'bg-outline-variant text-on-secondary-container'}`}>1</span>
                <span className="font-display text-sm tracking-wider uppercase hidden sm:inline text-on-surface">BIO DETAILS</span>
              </div>
              <div className="h-0.5 w-12 bg-outline-variant/30"></div>
              <div className="flex items-center gap-2">
                <span className={`w-8 h-8 flex items-center justify-center font-display text-lg ${step === 2 ? 'bg-primary text-white' : 'bg-outline-variant text-on-secondary-container'}`}>2</span>
                <span className="font-display text-sm tracking-wider uppercase hidden sm:inline text-on-secondary-container">PAYMENT</span>
              </div>
            </div>
          )}

          {/* STEP 1: Bio / Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-4xl text-on-surface uppercase tracking-tight">JOIN THE ELITE</h3>
                <p className="font-body text-sm text-on-secondary-container mt-1">Provide your entry credentials below.</p>
              </div>

              {/* Purchase Summary */}
              <div className="p-4 bg-background border border-outline-variant/20 space-y-2">
                <h4 className="font-display text-lg uppercase text-primary tracking-wide">SELECTED PLANS:</h4>
                <div className="space-y-1">
                  {purchaseItems.length === 0 ? (
                    <p className="font-body text-sm text-on-secondary-container">No membership selected. Defaulting to Basic Trial.</p>
                  ) : (
                    purchaseItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm font-body">
                        <span className="text-on-surface uppercase font-semibold">{item.title} x {item.quantity || 1}</span>
                        <span className="text-on-surface-variant font-bold">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                    ))
                  )}
                </div>
                <div className="border-t border-outline-variant/10 pt-2 flex justify-between items-center mt-2 font-display text-xl uppercase">
                  <span className="text-on-secondary-container">Total Due</span>
                  <span className="text-primary font-bold">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                    placeholder="E.G. MARCUS VANCE"
                  />
                  {errors.name && <p className="text-primary text-xs font-bold font-body">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                    placeholder="E.G. CHAMPION@FITKIT.COM"
                  />
                  {errors.email && <p className="text-primary text-xs font-bold font-body">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                    placeholder="E.G. +1 (555) 019-2834"
                  />
                  {errors.phone && <p className="text-primary text-xs font-bold font-body">{errors.phone}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">TRAINING FOCUS</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none uppercase"
                  >
                    <option value="STRENGTH">BRUTE STRENGTH</option>
                    <option value="HYPERTROPHY">HYPERTROPHY & SIZE</option>
                    <option value="CARDIO">HIIT & CONDITIONING</option>
                    <option value="OLYMPIC">FUNCTIONAL FITNESS</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="w-full bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-primary hover:border-white focus:outline-none"
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          )}

          {/* STEP 2: Payment Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-4xl text-on-surface uppercase tracking-tight">SECURE PAYMENT</h3>
                <p className="font-body text-sm text-on-secondary-container mt-1">Provide payment details to secure your authorization.</p>
              </div>

              {/* Card Mockup */}
              <div className="w-full h-44 bg-gradient-to-tr from-brand-grey-dark to-surface-bright border border-outline-variant/50 p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex justify-between items-center">
                  <span className="font-display text-xl text-white tracking-widest">FIT KIT ELITE ACCESS</span>
                  <span className="material-symbols-outlined text-primary text-3xl">sports_kabaddi</span>
                </div>
                <div className="font-mono text-xl text-on-surface tracking-[0.15em] py-2">
                  {formData.cardNumber || '•••• •••• •••• ••••'}
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-on-secondary-container uppercase">CARDHOLDER</span>
                    <span className="font-display text-sm text-white uppercase tracking-wider truncate max-w-[200px]">
                      {formData.cardName || 'YOUR FULL NAME'}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] text-on-secondary-container uppercase">EXPIRES</span>
                      <span className="font-mono text-xs text-white">
                        {formData.cardExpiry || 'MM/YY'}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[9px] text-on-secondary-container uppercase">CVV</span>
                      <span className="font-mono text-xs text-white">
                        {formData.cardCvv || '•••'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Fields */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">CARDHOLDER NAME</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none uppercase"
                    placeholder="E.G. MARCUS VANCE"
                  />
                  {errors.cardName && <p className="text-primary text-xs font-bold font-body">{errors.cardName}</p>}
                </div>

                <div className="space-y-1">
                  <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">CARD NUMBER</label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                    placeholder="0000 0000 0000 0000"
                  />
                  {errors.cardNumber && <p className="text-primary text-xs font-bold font-body">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">EXPIRY DATE</label>
                    <input
                      type="text"
                      value={formData.cardExpiry}
                      onChange={handleExpiryChange}
                      className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                      placeholder="MM/YY"
                    />
                    {errors.cardExpiry && <p className="text-primary text-xs font-bold font-body">{errors.cardExpiry}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="font-display text-xs text-on-secondary-container uppercase tracking-wider">CVV CODE</label>
                    <input
                      type="password"
                      value={formData.cardCvv}
                      onChange={handleCvvChange}
                      className="w-full bg-background border border-outline-variant/50 focus:border-primary px-4 py-3 text-on-surface font-body text-sm rounded-none focus:outline-none"
                      placeholder="•••"
                    />
                    {errors.cardCvv && <p className="text-primary text-xs font-bold font-body">{errors.cardCvv}</p>}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/3 border border-outline-variant text-on-surface font-bold py-4 uppercase tracking-wider hover:border-primary hover:text-primary transition-colors focus:outline-none"
                >
                  BACK
                </button>
                <button
                  onClick={handleNextStep}
                  className="w-2/3 bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border border-primary hover:border-white focus:outline-none"
                >
                  AUTHORIZE & PAY
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Loading / Processing */}
          {step === 3 && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
              <div className="relative w-20 h-20">
                {/* Custom Brutalist Red Loader */}
                <div className="absolute inset-0 border-4 border-outline-variant animate-pulse"></div>
                <div className="absolute inset-0 border-t-4 border-l-4 border-primary animate-spin"></div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-on-surface tracking-widest animate-pulse">{loadingText}</h3>
                <p className="font-body text-xs text-on-secondary-container">Do not close this window. Syncing database credentials...</p>
              </div>
            </div>
          )}

          {/* STEP 4: Success / Membership Card */}
          {step === 4 && (
            <div className="space-y-6 flex flex-col items-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary rounded-full mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">task_alt</span>
                </div>
                <h3 className="font-display text-4xl text-white uppercase tracking-tight">ENTRY CREDENTIALS FORGED</h3>
                <p className="font-body text-sm text-on-secondary-container mt-1">Welcome to the inner circle. Your digital access pass is active.</p>
              </div>

              {/* Digital Pass Card */}
              <div className="w-full max-w-sm bg-black border-4 border-primary p-6 relative overflow-hidden flex flex-col items-center space-y-4 shadow-[8px_8px_0px_0px_rgba(255,85,64,0.15)] select-none">
                {/* Vignette Gritty effect */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-full flex justify-between items-center border-b border-primary/30 pb-3">
                  <span className="font-display text-2xl text-white tracking-widest">FIT KIT HQ</span>
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 tracking-widest uppercase rounded-sm">
                    {getConfirmationTier()}
                  </span>
                </div>

                <div className="w-full py-4 flex flex-col items-center text-center space-y-2 z-10">
                  <div className="w-20 h-20 bg-brand-grey-dark border-2 border-outline-variant flex items-center justify-center rounded-full overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-on-secondary-container">person</span>
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-white uppercase tracking-wider truncate max-w-[280px]">
                      {formData.name || 'ELITE ATHLETE'}
                    </h4>
                    <p className="font-mono text-xs text-primary">{formData.email}</p>
                  </div>
                </div>

                <div className="w-full bg-brand-grey-dark p-3 border border-outline-variant/30 grid grid-cols-2 gap-2 text-center z-10 text-[10px] font-body">
                  <div>
                    <span className="text-on-secondary-container uppercase block font-semibold">STATUS</span>
                    <span className="text-green-500 font-bold uppercase tracking-wider block">ACTIVE / SYNCED</span>
                  </div>
                  <div>
                    <span className="text-on-secondary-container uppercase block font-semibold">FOCUS</span>
                    <span className="text-white font-bold uppercase tracking-wider block">{formData.goal}</span>
                  </div>
                </div>

                {/* Barcode */}
                <div className="w-full flex flex-col items-center pt-2 space-y-1">
                  <div className="w-full h-12 bg-white flex items-center justify-center p-1 border border-outline">
                    {/* Simulated brutalist barcode */}
                    <div className="flex w-full h-full gap-0.5 px-2 bg-white">
                      {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 1].map((width, idx) => (
                        <div
                          key={idx}
                          className="bg-black h-full flex-grow"
                          style={{ minWidth: `${width * 1.5}px` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-on-secondary-container tracking-[0.2em] uppercase font-bold">
                    {memberBarcode}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full flex flex-col gap-2 pt-4">
                <button
                  onClick={() => {
                    const printWindow = window.open('', '_blank');
                    printWindow.document.write(`
                      <html>
                        <head>
                          <title>FIT KIT Access Card</title>
                          <style>
                            body { background-color: #000; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; }
                            .card { border: 4px solid #ff5540; padding: 30px; width: 350px; text-align: center; }
                          </style>
                        </head>
                        <body>
                          <div class="card">
                            <h2>FIT KIT</h2>
                            <p>${formData.name}</p>
                            <p>${formData.email}</p>
                            <p>BARCODE: ${memberBarcode}</p>
                          </div>
                          <script>window.print();</script>
                        </body>
                      </html>
                    `);
                    printWindow.document.close();
                  }}
                  className="w-full bg-brand-grey-dark text-on-surface font-bold py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-colors focus:outline-none flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">download</span>
                  DOWNLOAD DIGITAL ACCESS PASS
                </button>
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="w-full bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 focus:outline-none"
                >
                  RETURN TO GYM HQ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
