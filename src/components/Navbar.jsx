import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const { activePage, navigateTo, cart, setIsCartOpen, openCheckout } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'membership', label: 'Pricing' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-black/95 border-outline-variant/30 shadow-2xl'
          : 'py-4 bg-surface/90 backdrop-blur-xl border-outline-variant/10'
      }`}
    >
      <div className="flex justify-between items-center px-container-margin-mobile md:px-container-margin-desktop py-1 w-full max-w-[1440px] mx-auto">
        {/* Brand */}
        <button
          onClick={() => navigateTo('home')}
          className="font-display text-[32px] md:text-[40px] text-on-surface uppercase tracking-tighter hover:text-primary transition-colors flex items-center gap-2 focus:outline-none"
        >
          FIT KIT
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`font-label text-sm uppercase tracking-wider transition-all duration-300 pb-1 ${
                activePage === link.id
                  ? 'text-primary border-b-2 border-primary font-bold'
                  : 'text-on-secondary-container hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Shopping Cart button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-on-surface hover:text-primary transition-all duration-300 flex items-center justify-center rounded-full active:scale-95 focus:outline-none"
            aria-label="Open Shopping Cart"
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-black animate-pulse">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Join Now Button */}
          <button
            onClick={() => openCheckout()}
            className="hidden md:inline-block bg-primary text-on-primary font-bold text-sm px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest border border-primary hover:border-white focus:outline-none"
          >
            JOIN NOW
          </button>

          {/* Mobile Menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-on-surface hover:text-primary p-2 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-black/98 border-b border-outline-variant/30 py-6 px-6 flex flex-col gap-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left font-display text-2xl uppercase tracking-widest py-2 border-b border-white/5 ${
                  activePage === link.id ? 'text-primary' : 'text-on-secondary-container'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              openCheckout();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-primary text-on-primary font-bold py-4 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-center"
          >
            JOIN NOW
          </button>
        </div>
      )}
    </header>
  );
}
