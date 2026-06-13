import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Membership from './pages/Membership';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ProgramDetailModal from './components/ProgramDetailModal';
import TrainerBookingModal from './components/TrainerBookingModal';

function MainAppContent() {
  const { activePage } = useApp();

  // Simple routing based on activePage state
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'programs':
        return <Programs />;
      case 'trainers':
        return <Trainers />;
      case 'membership':
        return <Membership />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-on-surface">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <ProgramDetailModal />
      <TrainerBookingModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
