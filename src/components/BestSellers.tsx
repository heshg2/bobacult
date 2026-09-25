import React, { useState } from 'react';
import { MENU_ITEMS } from '../data/menuData';
import { DrinkIllustration } from './DrinkIllustration';
import { useCart } from '../context/CartContext';
import { Sparkles, Plus, Star, Check } from 'lucide-react';

export const BestSellers: React.FC = () => {
  const { addItem } = useCart();
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  const handleAdd = (item: (typeof MENU_ITEMS)[0]) => {
    addItem(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const bestSellers = MENU_ITEMS.filter(
    (item) => item.tag === 'Best Seller' || item.tag === 'Must Have' || item.tag === 'Value Deal'
  ).slice(0, 6);

  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-[#0B0C12] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7200] uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cult Obsessions</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Top Rated Signatures
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            The drinks that defined our cult following. Handcrafted with authentic Ceylon tea, rich dairy, and caramelized layers.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bestSellers.map((item) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <div
                key={item.id}
                className="relative rounded-3xl bg-gradient-to-b from-[#171926] to-[#11121C] border border-white/10 p-6 flex flex-col justify-between hover:border-[#FF7200]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/40"
              >
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1 ${
                    item.tag === 'Value Deal'
                      ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20'
                      : 'text-amber-300 bg-amber-500/10 border-amber-500/20'
                  }`}>
                    <Star className="w-3 h-3 fill-current" />
                    {item.tag || 'Popular'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.category.replace('-', ' ')}
                  </span>
                </div>

                {/* Graphic Drink Illustration */}
                <div className="py-8 flex items-center justify-center">
                  <DrinkIllustration item={item} size="md" className="group-hover:scale-105 transition-transform duration-300" />
                </div>

                {/* Information */}
                <div>
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-[#FFA726] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Price and Add button */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Price</span>
                      <span className="text-lg font-extrabold text-white tabular-nums font-syne">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAdd(item)}
                      className={`py-2.5 px-4 text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 shadow-emerald-950/40'
                          : 'bg-[#FF7200] hover:bg-[#E65100] shadow-orange-950/40'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
