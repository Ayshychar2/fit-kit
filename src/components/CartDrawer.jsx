import React from 'react';
import { useApp } from '../context/AppContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    openCheckout
  } = useApp();

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Cart Panel */}
      <div className="relative w-full max-w-md h-full bg-surface-container border-l border-outline-variant/30 flex flex-col z-10 animate-slide-in">
        
        {/* Header */}
        <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-background">
          <h2 className="font-display text-3xl uppercase tracking-wider text-on-surface">
            Your Gear & Plans
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-on-surface hover:text-primary transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-on-secondary-container">
                shopping_cart
              </span>
              <p className="font-display text-2xl uppercase text-on-surface">Your Cart is Empty</p>
              <p className="font-body text-sm text-on-secondary-container max-w-xs">
                Go to Programs or Pricing and add plans to start your journey.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  window.location.hash = 'membership';
                }}
                className="bg-primary text-white font-bold uppercase tracking-wider px-6 py-3 border border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                BROWSE PLANS
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-4 bg-background border border-outline-variant/30 flex items-center justify-between group rounded-none"
              >
                <div className="flex-grow pr-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/10 border border-primary/30 text-primary text-[10px] uppercase font-bold px-1.5 py-0.5 tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-on-surface uppercase mt-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-on-secondary-container mt-0.5">
                    ${item.price} / monthly
                  </p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-on-secondary-container hover:text-primary transition-colors focus:outline-none"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-outline-variant/50 bg-surface-container-low">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-on-surface hover:bg-primary hover:text-white transition-colors font-bold focus:outline-none"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-bold text-on-surface">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-on-surface hover:bg-primary hover:text-white transition-colors font-bold focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-outline-variant/20 bg-background space-y-6">
            <div className="flex justify-between items-center">
              <span className="font-display text-xl uppercase tracking-wider text-on-secondary-container">
                Subtotal
              </span>
              <span className="font-display text-3xl text-primary font-bold">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  openCheckout();
                }}
                className="w-full bg-primary text-white font-bold text-center py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 focus:outline-none"
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs font-bold text-on-secondary-container hover:text-primary uppercase tracking-wider py-1.5 focus:outline-none"
              >
                CONTINUE BROWSING
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
