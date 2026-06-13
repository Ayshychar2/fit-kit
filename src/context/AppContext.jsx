import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('fitkit_cart');
      if (saved && saved !== 'undefined') {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('fitkit_cart', JSON.stringify(cart));
  }, [cart]);

  // Navigate and scroll to top
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update hash for browser history / direct access support
    window.location.hash = page === 'home' ? '' : `#${page}`;
  };

  // Listen to hash changes for simple routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'programs', 'trainers', 'membership'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true); // Open cart automatically when item added
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCheckout = (plan = null) => {
    setCheckoutPlan(plan);
    setIsCheckoutOpen(true);
  };

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setIsProgramModalOpen(true);
  };

  const openTrainerModal = (trainer) => {
    setSelectedTrainer(trainer);
    setIsTrainerModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        activePage,
        navigateTo,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkoutPlan,
        openCheckout,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProgram,
        openProgramModal,
        isProgramModalOpen,
        setIsProgramModalOpen,
        selectedTrainer,
        openTrainerModal,
        isTrainerModalOpen,
        setIsTrainerModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
