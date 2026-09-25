import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { BestSellers } from './components/BestSellers';
import { ToppingsAndSizes } from './components/ToppingsAndSizes';
import { CraftStory } from './components/CraftStory';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D0E14] text-slate-100 flex flex-col selection:bg-[#FF7200] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 pb-16 sm:pb-0">
          <Hero />
          <BestSellers />
          <MenuSection />
          <ToppingsAndSizes />
          <CraftStory />
          <ContactLocation />
        </main>

        {/* Global Slide-Over Cart Drawer */}
        <CartDrawer />

        {/* Mobile Sticky Action Bar */}
        <FloatingMobileBar />

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
