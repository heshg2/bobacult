import React, { useState } from 'react';
import { BobaCultLogo } from './BobaCultLogo';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/menuData';
import { ShoppingBag, MessageCircle, Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openCart, totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0D0E14]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Zone (Single element lockup) */}
        <a href="#" className="flex items-center group">
          <BobaCultLogo size="md" />
        </a>

        {/* Zone 2: Navigation Links (Text with hover states) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#menu"
            className="hover:text-white transition-colors"
          >
            Menu
          </a>
          <a
            href="#bestsellers"
            className="hover:text-white transition-colors"
          >
            Best Sellers
          </a>
          <a
            href="#toppings"
            className="hover:text-white transition-colors"
          >
            Sizes & Add-ons
          </a>
          <a
            href="#craft"
            className="hover:text-white transition-colors"
          >
            Our Story
          </a>
          <a
            href="#location"
            className="hover:text-white transition-colors"
          >
            Visit Koswatte
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Quick WhatsApp Order link */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Hi BobaCult Koswatte! I would like to place an order from your menu.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>077 871 3585</span>
          </a>

          {/* Cart Bag Trigger */}
          <button
            onClick={openCart}
            className="relative px-3.5 py-2 rounded-xl bg-[#FF7200] hover:bg-[#E65100] text-white font-semibold text-xs transition-all shadow-md shadow-orange-950/40 flex items-center gap-2 group cursor-pointer"
            aria-label="View shopping bag"
          >
            <ShoppingBag className="w-4 h-4 group-hover:scale-105 transition-transform" />
            <span className="hidden sm:inline">Bag</span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-[#FF7200] text-[11px] font-bold flex items-center justify-center tabular-nums">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13141C] border-b border-white/10 px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Full Menu (50+ Flavors)
            </a>
            <a
              href="#bestsellers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Best Sellers
            </a>
            <a
              href="#toppings"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Cup Sizes & Add-Ons
            </a>
            <a
              href="#craft"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Handcrafted in Sri Lanka
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              Koswatte Location & Hours
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#25D366] text-slate-950 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 077 871 3585</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.landlineRaw}`}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:text-white flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#FF7200]" />
              <span>Call: 0112 530 025</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
