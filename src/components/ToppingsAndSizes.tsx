import React from 'react';
import { SIZES, ADD_ONS } from '../data/menuData';
import { Layers, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export const ToppingsAndSizes: React.FC = () => {
  const bubbles = ADD_ONS.filter((a) => a.category === 'bubble');
  const jellies = ADD_ONS.filter((a) => a.category === 'jelly');
  const toppings = ADD_ONS.filter((a) => a.category === 'topping');

  return (
    <section id="toppings" className="py-16 sm:py-24 bg-[#0E0F16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7200] uppercase tracking-widest mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Customize Your Cup</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Cup Sizes & Bubble Add-Ons
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Pick your perfect cup capacity and elevate your drink with signature chewy tapioca or bursting fruit popping boba.
          </p>
        </div>

        {/* Cup Sizes Comparison */}
        <div className="mb-14">
          <h3 className="font-syne font-bold text-lg text-white mb-6 text-center">
            Step 1: Choose Your Cup Size
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SIZES.map((size) => (
              <div
                key={size.id}
                className="rounded-2xl bg-[#151724] border border-white/10 p-6 flex flex-col items-center text-center hover:border-[#FF7200]/50 transition-all shadow-lg"
              >
                {/* Visual Cup Silhouette */}
                <div className="h-32 flex items-end justify-center mb-4">
                  <div
                    className={`rounded-b-2xl rounded-t-sm border-2 border-[#FF7200]/60 bg-gradient-to-t from-[#FF7200]/20 to-transparent flex flex-col items-center justify-center text-white font-bold transition-transform hover:scale-105 ${
                      size.id === 'small'
                        ? 'w-16 h-20 text-xs'
                        : size.id === 'regular'
                        ? 'w-20 h-26 text-sm'
                        : 'w-24 h-32 text-base'
                    }`}
                  >
                    <span className="font-syne text-[#FF7200]">{size.volume}</span>
                  </div>
                </div>

                <h4 className="font-syne font-bold text-lg text-white">{size.name} Cup</h4>
                <p className="text-xs text-slate-400 mt-1">
                  {size.id === 'small'
                    ? 'Perfect quick refresher'
                    : size.id === 'regular'
                    ? 'Our most popular everyday portion'
                    : 'Maximum boba enjoyment for true cult lovers'}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-between text-xs">
                  <span className="text-slate-400">Upgrade Price:</span>
                  <span className="font-bold text-[#FF7200] tabular-nums">
                    {size.extraPrice === 0 ? 'Base Price' : `+Rs. ${size.extraPrice}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bubble Selection & Add-Ons Grid */}
        <div>
          <h3 className="font-syne font-bold text-lg text-white mb-6 text-center">
            Step 2: Bubble & Topping Selection
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Boba & Popping Bubbles */}
            <div className="rounded-2xl bg-[#151724] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF7200]/20 flex items-center justify-center text-[#FF7200]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Bobas & Pearls</h4>
                  <p className="text-[11px] text-slate-400">Chewy or fruit juice popping</p>
                </div>
              </div>

              <div className="space-y-2">
                {bubbles.map((boba) => (
                  <div
                    key={boba.id}
                    className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-slate-200">{boba.name}</span>
                    <span className="font-bold text-[#FF7200] tabular-nums">+Rs. {boba.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Jellies & Textures */}
            <div className="rounded-2xl bg-[#151724] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Artisanal Jellies</h4>
                  <p className="text-[11px] text-slate-400">Silky textured bites</p>
                </div>
              </div>

              <div className="space-y-2">
                {jellies.map((jelly) => (
                  <div
                    key={jelly.id}
                    className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-slate-200">{jelly.name}</span>
                    <span className="font-bold text-[#FF7200] tabular-nums">+Rs. {jelly.price}</span>
                  </div>
                ))}
                <div className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-200">Rainbow Coconut Jelly</span>
                  <span className="font-bold text-[#FF7200] tabular-nums">+Rs. 300</span>
                </div>
              </div>
            </div>

            {/* 3. Decadent Toppings */}
            <div className="rounded-2xl bg-[#151724] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-base">Toppings & Scoops</h4>
                  <p className="text-[11px] text-slate-400">Pudding, cream & scoops</p>
                </div>
              </div>

              <div className="space-y-2">
                {toppings.map((top) => (
                  <div
                    key={top.id}
                    className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <span className="font-medium text-slate-200">{top.name}</span>
                    <span className="font-bold text-[#FF7200] tabular-nums">+Rs. {top.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Recipe Integrity Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-950/30 via-[#161825] to-black/40 border border-[#FF7200]/30 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-[#FF7200] text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-950/40">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="text-xs text-slate-300 space-y-1">
            <h5 className="font-syne font-bold text-white text-sm">
              The BobaCult Standard: No Customization Guesswork
            </h5>
            <p>
              Each recipe has been calibrated for optimal sweetness, tea extraction ratio, and ice balance. We ensure every cup you order delivers the exact cult taste we are renowned for.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
