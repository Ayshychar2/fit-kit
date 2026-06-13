import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { navigateTo } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-8 border-t-4 border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <button
            onClick={() => navigateTo('home')}
            className="font-display text-[32px] text-primary uppercase tracking-tighter block mb-4 hover:opacity-90 focus:outline-none"
          >
            FIT KIT
          </button>
          <p className="font-body text-sm text-on-secondary-container mb-6 pr-4 leading-relaxed">
            Performance centers engineered for those who demand excellence. We build strength, character, and community.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-on-secondary-container hover:text-primary transition-colors">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="text-on-secondary-container hover:text-primary transition-colors">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="#" className="text-on-secondary-container hover:text-primary transition-colors">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-display text-[24px] text-on-surface uppercase mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <button onClick={() => navigateTo('programs')} className="text-on-secondary-container hover:text-primary transition-colors focus:outline-none text-left">
                Programs
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('trainers')} className="text-on-secondary-container hover:text-primary transition-colors focus:outline-none text-left">
                Trainers
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('membership')} className="text-on-secondary-container hover:text-primary transition-colors focus:outline-none text-left">
                Membership Pricing
              </button>
            </li>
            <li>
              <a href="#" className="text-on-secondary-container hover:text-primary transition-colors text-left block">
                Class Schedule
              </a>
            </li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="font-display text-[24px] text-on-surface uppercase mb-6 tracking-wide">Support</h4>
          <ul className="space-y-3 font-body text-sm">
            <li><a className="text-on-secondary-container hover:text-primary transition-colors" href="#">FAQ</a></li>
            <li><a className="text-on-secondary-container hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="text-on-secondary-container hover:text-primary transition-colors" href="#">Location Finder</a></li>
            <li><a className="text-on-secondary-container hover:text-primary transition-colors" href="#">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-display text-[24px] text-on-surface uppercase mb-6 tracking-wide">Stay Focused</h4>
          <p className="font-body text-sm text-on-secondary-container mb-4 leading-relaxed">
            Subscribe for training tips and exclusive gear drops.
          </p>
          {subscribed ? (
            <div className="bg-primary/10 border border-primary text-primary px-4 py-3 rounded-none font-bold text-xs uppercase tracking-wider animate-pulse">
              SUCCESSFULLY SUBSCRIBED. STAY GRINDING!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-surface-variant border-b border-outline-variant focus:border-primary text-on-surface font-body px-4 py-3 focus:ring-0 w-full placeholder-on-secondary-container/50 transition-colors uppercase text-sm focus:outline-none rounded-none"
                placeholder="ENTER EMAIL"
              />
              <button
                type="submit"
                className="mt-2 text-left font-bold text-sm text-primary hover:text-on-surface uppercase tracking-wider transition-colors flex items-center group focus:outline-none"
              >
                SUBSCRIBE 
                <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="px-container-margin-mobile md:px-container-margin-desktop max-w-7xl mx-auto border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-on-secondary-container opacity-60">
          © {new Date().getFullYear()} FIT KIT PERFORMANCE CENTERS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4 font-body text-xs">
          <a className="text-on-secondary-container hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-secondary-container hover:text-on-surface transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
