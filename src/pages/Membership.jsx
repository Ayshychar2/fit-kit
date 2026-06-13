import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Membership() {
  const { addToCart } = useApp();
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      id: 'plan-basic',
      title: 'BASIC',
      price: 29,
      description: 'Essential access for those who want to get in, lift, and get out.',
      type: 'MEMBERSHIP',
      features: [
        { name: 'Full Gym Access', included: true },
        { name: 'Locker Room Use', included: true },
        { name: 'Free Weights Area', included: true },
        { name: 'Group Classes', included: false },
        { name: 'Personal Training', included: false }
      ]
    },
    {
      id: 'plan-pro',
      title: 'PRO',
      price: 59,
      description: 'For the dedicated athlete demanding more from their training.',
      type: 'MEMBERSHIP',
      popular: true,
      features: [
        { name: 'All Basic Features', included: true },
        { name: 'Unlimited Group Classes', included: true },
        { name: 'Advanced Recovery Zone', included: true },
        { name: '1 PT Session / Month', included: true },
        { name: 'Nutrition Coaching', included: false }
      ]
    },
    {
      id: 'plan-elite',
      title: 'ELITE',
      price: 129,
      description: 'The ultimate package for uncompromising performance and results.',
      type: 'MEMBERSHIP',
      features: [
        { name: 'All Pro Features', included: true },
        { name: 'Unlimited PT Sessions', included: true },
        { name: 'Personalized Nutrition Plan', included: true },
        { name: 'VIP Locker Access', included: true },
        { name: 'Priority Class Booking', included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'IS THERE A JOINING FEE?',
      answer: 'No. We believe in straightforward pricing. What you see is what you pay. There are no hidden joining fees, cancellation fees, or maintenance fees.'
    },
    {
      question: 'CAN I FREEZE MY MEMBERSHIP?',
      answer: 'Yes, Pro and Elite members can freeze their membership for up to 3 months per calendar year at no extra cost. Basic members can freeze for a small administrative fee.'
    },
    {
      question: 'WHAT ARE THE GYM HOURS?',
      answer: 'We are open 24/7 for all members. Access is via a secure digital keycard provided upon sign-up. Staffed hours are from 6 AM to 10 PM daily.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Header Section */}
      <header className="relative pt-32 pb-20 px-container-margin-mobile md:px-container-margin-desktop flex flex-col items-center justify-center text-center bg-grid-pattern border-b border-outline-variant/10">
        <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.25em] block mb-3">— PRICING & TIERS</span>
        <h1 className="font-display text-[54px] md:text-[80px] leading-none text-on-surface uppercase tracking-tighter mb-4 max-w-4xl">
          UNLEASH YOUR <span className="text-primary">POTENTIAL</span>
        </h1>
        <p className="font-body text-sm md:text-lg text-on-secondary-container max-w-2xl mb-8 leading-relaxed">
          Choose the membership that fits your goals. No hidden fees, no compromises. Just raw performance.
        </p>
      </header>

      {/* Pricing Grid */}
      <section className="px-container-margin-mobile md:px-container-margin-desktop py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 flex flex-col justify-between h-full transition-all duration-300 relative border rounded-none shadow-xl ${
                plan.popular
                  ? 'bg-black border-primary scale-102 z-10 shadow-primary/5 hover:shadow-primary/10'
                  : 'bg-brand-grey-dark border-outline-variant/30 hover:border-outline-variant/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-body text-[10px] font-bold px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="font-display text-[32px] text-on-surface uppercase mb-2 mt-4 tracking-wide">
                  {plan.title}
                </h3>
                <div className="mb-6">
                  <span className="font-display text-[54px] text-white font-bold">${plan.price}</span>
                  <span className="font-body text-xs text-on-secondary-container tracking-wider">/month</span>
                </div>
                <p className="font-body text-xs md:text-sm text-on-secondary-container mb-8 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-4 mb-10 border-t border-outline-variant/10 pt-6">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center text-xs md:text-sm font-body ${
                        feat.included ? 'text-on-surface' : 'text-on-secondary-container/40'
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined mr-3 text-lg ${
                          feat.included ? 'text-primary' : 'text-on-secondary-container/20'
                        }`}
                      >
                        {feat.included ? 'check' : 'close'}
                      </span>
                      <span className="tracking-wide uppercase font-semibold">{feat.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => addToCart(plan)}
                className={`font-body text-xs font-bold w-full py-4 tracking-widest border transition-all duration-300 focus:outline-none uppercase ${
                  plan.popular
                    ? 'bg-primary text-white border-primary hover:bg-white hover:text-black hover:border-white shadow-[4px_4px_0px_0px_rgba(255,85,64,0.15)]'
                    : 'bg-transparent border-outline hover:border-primary hover:text-primary'
                }`}
              >
                SELECT {plan.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container-lowest py-24 px-container-margin-mobile md:px-container-margin-desktop">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-[40px] md:text-5xl text-on-surface uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-brand-grey-dark border border-outline-variant/20 p-6 cursor-pointer hover:bg-surface-container-low transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center select-none">
                  <h4 className="font-display text-lg md:text-xl text-on-surface uppercase tracking-wider">
                    {faq.question}
                  </h4>
                  <span
                    className="material-symbols-outlined text-primary transition-transform duration-300"
                    style={{
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    expand_more
                  </span>
                </div>
                {openFaq === index && (
                  <p className="mt-4 text-on-secondary-container font-body text-xs md:text-sm leading-relaxed border-t border-outline-variant/10 pt-4 uppercase">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
