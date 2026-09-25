import React from 'react';
import { BobaCultLogo } from './BobaCultLogo';
import { BUSINESS_INFO } from '../data/menuData';
import { Instagram, Facebook, Phone, MessageCircle, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0B0F] border-t border-white/10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <BobaCultLogo size="md" />
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Sri Lanka's handcrafted bubble tea experience. Real Ceylon tea leaves, fresh milk, and slow-cooked tapioca pearls.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 flex items-center justify-center text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-syne font-bold text-white text-xs uppercase tracking-wider">
              Explore
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Full Menu & Combos
                </a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-white transition-colors">
                  Top Rated Signatures
                </a>
              </li>
              <li>
                <a href="#toppings" className="hover:text-white transition-colors">
                  Cup Sizes & Add-Ons
                </a>
              </li>
              <li>
                <a href="#craft" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Find Koswatte Outlet
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-syne font-bold text-white text-xs uppercase tracking-wider">
              Store Contact
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF7200] shrink-0" />
                <span>411 Kalapaluwawa Rd, Koswatte</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF7200] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.landlineRaw}`} className="hover:text-white">
                  {BUSINESS_INFO.landlineNumber}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`} className="hover:text-white">
                  {BUSINESS_INFO.whatsappNumber}
                </a>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Mon – Sun: 9:30 AM – 10:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with prominent Heshan Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="text-white font-medium">
              Copyright © {new Date().getFullYear()} <strong className="text-[#FF7200]">Heshan</strong>. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              BobaCult Premium Bubble Tea · Crafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> by Heshan
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Operated by Excient Group</span>
            <span aria-hidden="true">·</span>
            <a href={BUSINESS_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Koswatte, Battaramulla
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
