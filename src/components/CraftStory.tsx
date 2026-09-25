import React from 'react';
import { Heart, Sparkles, ShieldCheck, Flame } from 'lucide-react';
import { BobaCultLogo } from './BobaCultLogo';

export const CraftStory: React.FC = () => {
  return (
    <section id="craft" className="py-16 sm:py-24 bg-[#0A0B10] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-[#1C1F2E] via-[#141622] to-[#0D0E16] border border-white/10 p-8 shadow-2xl text-center flex flex-col items-center">
              
              {/* Logo Emblem in larger size */}
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <BobaCultLogo size="xl" showText={false} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7200]/10 border border-[#FF7200]/25 text-[#FF7200] text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Made in Sri Lanka With Love</span>
              </div>

              <h3 className="font-syne font-extrabold text-2xl text-white uppercase tracking-tight">
                By Sri Lankans, For Sri Lankan Taste
              </h3>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                "Thank you for supporting local. Your support means the world to our kitchen and our team."
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 w-full grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">Origin</div>
                  <div className="text-xs font-bold text-white mt-0.5">Koswatte, Battaramulla</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">Quality</div>
                  <div className="text-xs font-bold text-white mt-0.5">100% Real Tea Brew</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#FF7200] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The BobaCult Standard</span>
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Crafted with Quality Ingredients for the Perfect Treat
              </h2>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                At BobaCult Premium, we started with a mission to elevate bubble tea in Sri Lanka. From high-grade Ceylon black teas to luscious tropical mangoes and slow-simmered tapioca pearls, every detail matters.
              </p>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-2xl bg-[#141624] border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-[#FF7200] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Premium Ingredients</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real dairy, authentic ceremonial Japanese matcha, imported popping pearls, and rich fruit extracts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141624] border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Handcrafted Daily</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Made fresh throughout the day. Tapioca pearls are boiled and steeped in small batches for the quintessential bouncy chew.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141624] border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Torched Creme Brulee</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our signature thick custard cream crowns torched to a crisp caramelized crust right before serving.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#141624] border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-syne font-bold text-white text-base">Proudly Sri Lankan</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Designed, owned, and served by Sri Lankans who love bold beverages and welcoming hospitality.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
