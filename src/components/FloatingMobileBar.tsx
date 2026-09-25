import React from 'react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/menuData';
import { ShoppingBag, MessageCircle, Phone } from 'lucide-react';

export const FloatingMobileBar: React.FC = () => {
  const { openCart, totalItems } = useCart();

  return (
    <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#0E1017]/95 backdrop-blur-md border-t border-white/10 px-3 py-2">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* WhatsApp Call / Chat */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-[#25D366] text-slate-950 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Call landline */}
        <a
          href={`tel:${BUSINESS_INFO.landlineRaw}`}
          className="p-2 bg-white/10 text-white rounded-xl text-xs font-semibold flex items-center justify-center border border-white/10"
          aria-label="Call store"
        >
          <Phone className="w-4 h-4 text-[#FF7200]" />
        </a>

        {/* View Bag Button */}
        <button
          onClick={openCart}
          className="flex-1 py-2 px-3 bg-[#FF7200] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-orange-950/40"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Bag ({totalItems})</span>
        </button>

      </div>
    </aside>
  );
};
