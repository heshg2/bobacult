import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES, MenuItem, SIZES, ADD_ONS, SizeOption, AddOnOption, BUSINESS_INFO } from '../data/menuData';
import { DrinkIllustration } from './DrinkIllustration';
import { useCart } from '../context/CartContext';
import { Search, Plus, Check, Info, X, Sparkles, ExternalLink, Star, ArrowUpRight } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Quick Feedback state for 1-click adds
  const [addedItemIds, setAddedItemIds] = useState<{ [id: string]: boolean }>({});

  // Clean, simple size/add-on selector (No sugar/ice customization as instructed)
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(SIZES[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnOption[]>([]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Quick 1-click direct add to bag with animation feedback
  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(item, SIZES[0], []);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const openItemModal = (item: MenuItem) => {
    setActiveModalItem(item);
    setSelectedSize(SIZES[0]);
    setSelectedAddOns([]);
  };

  const closeModal = () => {
    setActiveModalItem(null);
  };

  const toggleAddOn = (addOn: AddOnOption) => {
    if (selectedAddOns.some((a) => a.id === addOn.id)) {
      setSelectedAddOns(selectedAddOns.filter((a) => a.id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  const handleModalAdd = () => {
    if (!activeModalItem) return;
    addItem(activeModalItem, selectedSize, selectedAddOns);
    closeModal();
  };

  const modalCurrentTotal = activeModalItem
    ? activeModalItem.price +
      selectedSize.extraPrice +
      selectedAddOns.reduce((sum, a) => sum + a.price, 0)
    : 0;

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#0F1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Uber Eats & Quality Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-950/40 via-[#1A1822] to-emerald-950/30 border border-[#FF7200]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#06C167]/15 border border-[#06C167]/30 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-[#06C167] fill-[#06C167]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-syne font-bold text-white text-sm">Uber Eats Verified Store</span>
                <span className="text-xs bg-[#06C167]/20 text-[#06C167] font-bold px-2 py-0.5 rounded-full">
                  4.4 ★ (3,000+ ratings)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Koswaththa branch live menu & prices updated. Direct takeaway counter or Uber Eats delivery.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <a
              href={BUSINESS_INFO.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-4 py-2 bg-[#06C167] hover:bg-[#05a859] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Order on Uber Eats</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FF7200] uppercase tracking-wider mb-2">
              <span>Koswatte Flagship Menu</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Authentic Ceylon Tea</span>
            </div>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              BobaCult Menu
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              From our famous Butterscotch and Milo Dream to creamy Milkshakes, Korean Shin Ramyun Combos, and Torched Creme Brulee.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search drinks (e.g. Milkshake, Milo, Faluda, Ramyun)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#171823] border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7200] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Horizontal Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#FF7200] text-white shadow-md shadow-orange-950/40 font-bold'
                    : 'bg-[#171823] text-slate-300 hover:text-white hover:bg-[#1E202E] border border-white/5'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-black/25 text-white font-bold' : 'bg-white/5 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & No-Customization Notice */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-6 gap-2">
          <div>
            Showing <span className="font-semibold text-white">{filteredItems.length}</span> menu items
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7200]" />
            <span>Pre-balanced barista recipes — no sugar/ice customization needed!</span>
          </div>
        </div>

        {/* Drinks Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center rounded-2xl bg-[#141520] border border-white/5 p-8">
            <p className="text-slate-400 text-sm">No drinks found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-[#FF7200] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item) => {
              const isAdded = !!addedItemIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => openItemModal(item)}
                  className="group rounded-2xl bg-[#151622] hover:bg-[#1A1C2B] border border-white/5 hover:border-[#FF7200]/30 p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/30 cursor-pointer"
                >
                  <div>
                    {/* Top Tags & Category */}
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                        {item.category.replace('-', ' ')}
                      </span>
                      {item.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                          item.tag === 'Best Seller'
                            ? 'text-amber-300 bg-amber-500/10 border-amber-500/25'
                            : item.tag === 'Value Deal'
                            ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/25'
                            : 'text-[#FF7200] bg-orange-500/10 border-orange-500/25'
                        }`}>
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Drink Illustration Preview */}
                    <div className="py-4 flex items-center justify-center bg-black/25 rounded-xl border border-white/5 mb-3 group-hover:bg-black/35 transition-colors">
                      <DrinkIllustration item={item} size="md" />
                    </div>

                    {/* Drink Name & Description */}
                    <h3 className="font-syne font-bold text-base text-white group-hover:text-[#FFA726] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action & Price */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block leading-tight">Price</span>
                      <span className="text-base font-extrabold text-white tabular-nums font-syne">
                        Rs. {item.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Direct 1-Click Quick Add Button */}
                      <button
                        type="button"
                        onClick={(e) => handleQuickAdd(item, e)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-sm ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#FF7200] hover:bg-[#E65100] text-white shadow-orange-950/40'
                        }`}
                        title="Add to bag"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Simple Size & Extra Topping Modal (No complex sugar/ice options) */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#141622] border border-white/10 rounded-2xl shadow-2xl p-6 text-slate-100 my-8 animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 pr-8">
              <div className="w-16 h-20 bg-black/40 rounded-xl p-1 shrink-0 flex items-center justify-center border border-white/5">
                <DrinkIllustration item={activeModalItem} size="sm" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#FF7200] uppercase tracking-wider">
                  {activeModalItem.category.replace('-', ' ')}
                </span>
                <h3 className="font-syne font-bold text-lg text-white">
                  {activeModalItem.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                  {activeModalItem.description}
                </p>
              </div>
            </div>

            {/* Barista Perfected Note (Highlighting no customize requirement) */}
            <div className="my-4 p-3 bg-white/5 rounded-xl border border-white/5 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#FF7200] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Pre-Balanced Cult Recipe:</strong> Handcrafted to our master barista chill and sweetness balance. No complicated sugar or ice adjustments needed!
              </div>
            </div>

            {/* 1. Size Selection */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Select Cup Size</span>
                <span className="text-[11px] font-normal text-slate-400">Choose size</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {SIZES.map((size) => {
                  const isSelected = selectedSize.id === size.id;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FF7200]/15 border-[#FF7200] text-white shadow-sm'
                          : 'bg-black/30 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-xs">{size.name}</div>
                      <div className="text-[11px] text-slate-400">{size.volume}</div>
                      <div className="text-xs font-semibold text-[#FF7200] mt-1 tabular-nums">
                        {size.extraPrice === 0 ? 'Base' : `+Rs. ${size.extraPrice}`}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Optional Extra Toppings */}
            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>Extra Boba / Toppings</span>
                <span className="text-[11px] font-normal text-slate-400">Optional</span>
              </label>

              <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                {ADD_ONS.map((addOn) => {
                  const isChecked = selectedAddOns.some((a) => a.id === addOn.id);
                  return (
                    <button
                      key={addOn.id}
                      type="button"
                      onClick={() => toggleAddOn(addOn)}
                      className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#FF7200]/10 border-[#FF7200]/40 text-white'
                          : 'bg-black/20 border-white/5 text-slate-300 hover:bg-black/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-[#FF7200] border-[#FF7200] text-white' : 'border-white/20'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{addOn.name}</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-300 tabular-nums">
                        +Rs. {addOn.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-slate-400 block">Drink Total</span>
                <span className="text-xl font-extrabold text-white tabular-nums font-syne">
                  Rs. {modalCurrentTotal.toLocaleString()}
                </span>
              </div>

              <button
                type="button"
                onClick={handleModalAdd}
                className="py-3 px-6 bg-[#FF7200] hover:bg-[#E65100] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                Add to Bag
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
