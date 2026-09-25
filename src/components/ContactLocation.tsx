import React from 'react';
import { BUSINESS_INFO } from '../data/menuData';
import { MapPin, Phone, MessageCircle, Mail, Clock, ExternalLink, Instagram, Facebook, Navigation, ShoppingBag } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#0F1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7200] uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store & Ordering</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
            Visit Us or Order Direct
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Drop by our Koswatte outlet for takeaway, or order directly via WhatsApp, Phone, or Uber Eats delivery.
          </p>
        </div>

        {/* Contact and Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Koswatte Store Profile */}
          <div className="lg:col-span-7 rounded-3xl bg-[#151624] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#FF7200] uppercase tracking-wider">
                    Flagship Outlet · 4.4 ★ (3,000+ ratings)
                  </span>
                  <h3 className="font-syne font-bold text-2xl text-white mt-1">
                    BobaCult Koswatte
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    411 Kalapaluwawa Rd, Koswatte, Battaramulla, Sri Lanka
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FF7200] hover:bg-[#E65100] text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-orange-950/40 flex items-center gap-1.5 shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>

              {/* Operating Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <Clock className="w-4 h-4 text-[#FF7200]" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Monday – Sunday: <strong className="text-white">10:30 AM – 10:30 PM</strong>
                  </p>
                  <p className="text-[11px] text-emerald-400 font-medium">
                    ● Open Every Day
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                    <ShoppingBag className="w-4 h-4 text-[#FF7200]" />
                    <span>Service Options</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Takeaway Counter · WhatsApp Delivery · Uber Eats
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Fast order turnaround
                  </p>
                </div>
              </div>

              {/* Interactive Directions Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/30 to-black/40 border border-[#FF7200]/25 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block">Need navigation help?</span>
                  Tap below to open location directly in your Google Maps app.
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Social Channels Adjacency */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-medium">Follow our cult community:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-900/30 to-rose-900/30 hover:from-purple-900/50 hover:to-rose-900/50 border border-rose-500/30 rounded-lg text-xs font-semibold text-rose-300 flex items-center gap-1.5 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-900/20 hover:bg-blue-900/30 border border-blue-500/30 rounded-lg text-xs font-semibold text-blue-300 flex items-center gap-1.5 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Card 2: Direct Contact Channels */}
          <div className="lg:col-span-5 rounded-3xl bg-[#151624] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#FF7200] uppercase tracking-wider">
                Direct Contact
              </span>
              <h3 className="font-syne font-bold text-xl text-white mt-1 mb-5">
                Get in Touch
              </h3>

              <div className="space-y-3">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                    'Hello BobaCult Koswatte! I would like to make an inquiry / place an order.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-[#25D366]/10 border border-white/5 hover:border-[#25D366]/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">WhatsApp Orders & Inquiries</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">
                        {BUSINESS_INFO.whatsappNumber}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#25D366]" />
                </a>

                {/* Land Phone */}
                <a
                  href={`tel:${BUSINESS_INFO.landlineRaw}`}
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-orange-500/10 border border-white/5 hover:border-[#FF7200]/40 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FF7200]/20 text-[#FF7200] flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Store Landline</div>
                      <div className="text-sm font-bold text-white group-hover:text-[#FF7200] transition-colors">
                        {BUSINESS_INFO.landlineNumber}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#FF7200]" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="p-3.5 rounded-xl bg-black/40 hover:bg-white/5 border border-white/5 hover:border-white/20 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/5 text-slate-300 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Official Email</div>
                      <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {BUSINESS_INFO.email}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* Uber Eats direct */}
                <a
                  href={BUSINESS_INFO.uberEatsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      Uber
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-400 font-medium">Order Delivery Online</div>
                      <div className="text-xs font-bold text-white">
                        BobaCult on Uber Eats Koswaththa
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                </a>

              </div>
            </div>

            <p className="text-[11px] text-slate-500 text-center pt-2">
              Owned & Operated by Excient Group · Sri Lanka
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
