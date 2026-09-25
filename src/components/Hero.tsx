import React, { useState } from 'react';
import { BUSINESS_INFO, MENU_ITEMS } from '../data/menuData';
import { DrinkIllustration } from './DrinkIllustration';
import { useCart } from '../context/CartContext';
import { ArrowRight, MessageCircle, ExternalLink, Sparkles, MapPin, CheckCircle2, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const { addItem } = useCart();

  // Featured spotlight items
  const featuredDrinks = [
    MENU_ITEMS.find((i) => i.id === 'combo-2-butterscotch') || MENU_ITEMS[0],
    MENU_ITEMS.find((i) => i.id === 'milo-dream') || MENU_ITEMS[1],
    MENU_ITEMS.find((i) => i.id === 'matcha-milkshake') || MENU_ITEMS[2],
    MENU_ITEMS.find((i) => i.id === 'thai-milk-tea-shake') || MENU_ITEMS[3],
    MENU_ITEMS.find((i) => i.id === 'strawberry-matcha-latte') || MENU_ITEMS[4],
  ].filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeDrink = featuredDrinks[activeIndex] || featuredDrinks[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-white/10">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7200]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Clean unboxed location & trust meta */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1 text-[#FF7200]">
                <MapPin className="w-3.5 h-3.5" />
                411 Kalapaluwawa Rd, Koswatte
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Star className="w-3 h-3 fill-emerald-400" />
                Uber Eats 4.4 ★ (3,000+ ratings)
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Daily 9:30 AM – 10:00 PM</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08] text-balance">
              Bold Flavor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7200] via-[#FFA726] to-[#FF9100]">
                Cult Status.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Sri Lanka's artisanal bubble tea movement. Indulge in our famous Butterscotch, Milo Dream, thick ice cream Milkshakes, French sparkling sodas, and hot Korean Shin Ramyun Combos.
            </p>

            {/* Quick Badges: Authentic Quality Markers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF7200] shrink-0" />
                <span>No Guesswork: Pre-Balanced</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF7200] shrink-0" />
                <span>Brown Sugar Tapioca Pearls</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF7200] shrink-0" />
                <span>Direct WhatsApp & Uber Eats</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="px-6 py-3.5 rounded-xl bg-[#FF7200] hover:bg-[#E65100] text-white font-bold text-sm transition-all shadow-lg shadow-orange-950/50 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                  'Hello BobaCult Koswatte! I would like to place an order.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold text-sm transition-all inline-flex items-center gap-2 shadow-lg shadow-emerald-950/30"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
              </a>

              <a
                href={BUSINESS_INFO.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-semibold text-xs transition-all inline-flex items-center gap-1.5"
              >
                <span>Uber Eats Delivery</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>

            {/* Quick Local Details Footer */}
            <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
              <div>
                <span className="font-bold text-white text-sm tabular-nums">50+</span> Handcrafted Items
              </div>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <div>
                Combos from <span className="font-bold text-white text-sm tabular-nums">Rs. 1,500</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <div>
                Koswatte Outlet: <span className="text-white font-medium">Open Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Featured Drink Spotlight */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1C1E2B] to-[#12131C] p-6 border border-white/10 shadow-2xl relative">
              
              {/* Top Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#FF7200] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cult Favorite
                </span>
                {activeDrink.tag && (
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    activeDrink.tag === 'Best Seller'
                      ? 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                      : 'text-[#FF7200] bg-orange-500/10 border-orange-500/20'
                  }`}>
                    {activeDrink.tag}
                  </span>
                )}
              </div>

              {/* Graphic Drink Display */}
              <div className="py-6 flex items-center justify-center">
                <DrinkIllustration item={activeDrink} size="lg" />
              </div>

              {/* Drink Info & Quick Add */}
              <div className="space-y-2 text-center">
                <h3 className="font-syne font-bold text-xl text-white">
                  {activeDrink.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 px-2">
                  {activeDrink.description}
                </p>
                <div className="pt-2 flex items-center justify-center gap-1.5">
                  <span className="text-xs text-slate-400">Price:</span>
                  <span className="text-xl font-extrabold text-[#FF7200] tabular-nums font-syne">
                    Rs. {activeDrink.price.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Interactive Quick Add */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  onClick={() => addItem(activeDrink)}
                  className="flex-1 py-3 bg-[#FF7200] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-orange-950/40 cursor-pointer"
                >
                  Quick Add to Bag
                </button>
              </div>

              {/* Tab Selector for Spotlight Drinks */}
              <div className="mt-4 pt-3 flex items-center justify-center gap-2">
                {featuredDrinks.map((drink, idx) => (
                  <button
                    key={drink.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx
                        ? 'w-8 bg-[#FF7200]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`View ${drink.name}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
