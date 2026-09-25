import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/menuData';
import { DrinkIllustration } from './DrinkIllustration';
import { X, Trash2, Plus, Minus, Send, Phone, ExternalLink, ShoppingBag, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    totalItems,
    generateWhatsAppLink,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#13141C] border-l border-white/10 flex flex-col shadow-2xl text-slate-100">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#171823]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF7200]/20 border border-[#FF7200]/30 flex items-center justify-center text-[#FF7200]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-syne font-bold text-white text-base">Your Boba Bag</h3>
                <p className="text-xs text-slate-400">
                  {totalItems} {totalItems === 1 ? 'drink' : 'drinks'} selected
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-400 transition-colors px-2 py-1"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={closeCart}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-lg">Your bag is empty</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Explore our 50+ handcrafted bubble teas, fresh fruit milks, and creme brulee drinks!
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 bg-[#FF7200] hover:bg-[#E65100] text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-orange-950/40 inline-flex items-center gap-1.5"
                >
                  Browse Menu <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#1A1C27] border border-white/5 hover:border-white/10 transition-colors flex gap-3.5 items-start"
                  >
                    {/* Visual Drink Thumbnail */}
                    <div className="w-14 h-18 shrink-0 bg-black/40 rounded-lg p-1 flex items-center justify-center border border-white/5">
                      <DrinkIllustration item={item.menuItem} size="sm" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-sm text-white truncate">
                          {item.menuItem.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-slate-500 hover:text-rose-400 p-0.5 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-xs text-[#FF7200] font-medium mt-0.5">
                        {item.size.name} ({item.size.volume})
                      </div>

                      {item.selectedAddOns.length > 0 && (
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                          {item.selectedAddOns.map((a) => a.name).join(', ')}
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                        {/* Quantity Stepper */}
                        <div className="flex items-center bg-black/40 rounded-lg border border-white/10 px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold tabular-nums text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="font-semibold text-sm text-white tabular-nums">
                          Rs. {item.totalPrice.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Order Details Form */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-3.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Order Options
                  </div>

                  {/* Pickup vs Delivery Toggle */}
                  <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/10">
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        orderType === 'pickup'
                          ? 'bg-[#FF7200] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🛍️ Store Takeaway
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#FF7200] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      🛵 Local Delivery
                    </button>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kasun / Sarah"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7200]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-slate-400 mb-1">
                      Delivery Address or Special Request
                    </label>
                    <input
                      type="text"
                      placeholder={orderType === 'delivery' ? 'e.g. Koswatte Road, Battaramulla' : 'e.g. Pickup around 4:00 PM'}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF7200]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#171823] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-medium">Subtotal ({totalItems} items)</span>
                <span className="text-lg font-bold text-white tabular-nums">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>

              {/* Primary WhatsApp Order Button */}
              <a
                href={generateWhatsAppLink(customerName, orderType, notes)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BD5A] text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
                <span>Send Order via WhatsApp ({BUSINESS_INFO.whatsappNumber})</span>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {/* Landline / Mobile Call Option */}
                <a
                  href={`tel:${BUSINESS_INFO.landlineRaw}`}
                  className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FF7200]" />
                  <span>Call Store</span>
                </a>

                {/* Uber Eats Direct Link */}
                <a
                  href={BUSINESS_INFO.uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Uber Eats</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-500 pt-1">
                Handcrafted fresh upon order confirmation · Free WhatsApp ordering
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
