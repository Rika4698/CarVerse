'use client';

import { CarFront } from 'lucide-react';
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-16 bg-slate-50 dark:bg-slate-900 text-white min-h-screen">
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          
          {/* LEFT SECTION */}
          <div className="max-w-md mx-auto text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8 group cursor-pointer ">
              <div className="w-12 h-12 rounded-[14px] bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform ">
                <CarFront className="text-white" size={28} />
              </div>
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                Car<span className="text-primary italic font-serif">Verse</span>
              </span>
            </div>

            <p className="text-slate-500 dark:text-white/50 text-sm font-medium leading-relaxed mb-10 max-w-sm">
              Since 2000, we've revolutionized the way the world moves. From heritage classics to future-electric machines, CarVerse is your primary destination for excellence.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-12 h-12 bg-slate-300 dark:bg-slate-500 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 shadow-sm border border-white/5"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT GRID SECTION */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24 place-items-center md:place-items-start text-center md:text-left">
              
              {/* Showroom */}
              <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                  Showroom
                </h6>
                <div className="flex flex-col gap-4 text-xs font-bold text-slate-400 dark:text-white/50 tracking-widest">
                  <a href="#cars" className="hover:text-primary transition-colors uppercase">Inventory</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Pre-order</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Custom Builds</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Trade-In</a>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                  Experience
                </h6>
                <div className="flex flex-col gap-4 text-xs font-bold text-slate-400 dark:text-white/50 tracking-widest">
                  <a href="#about" className="hover:text-primary transition-colors uppercase">Our Story</a>
                  <a href="#services" className="hover:text-primary transition-colors uppercase">Services</a>
                  <a href="#cars" className="hover:text-primary transition-colors uppercase">Technology</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Careers</a>
                </div>
              </div>

              {/* Connect */}
              <div className="space-y-8">
                <h6 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                  Connect
                </h6>
                <div className="flex flex-col gap-4 text-xs font-bold text-slate-400 dark:text-white/50 tracking-widest">
                  <a href="#contact" className="hover:text-primary transition-colors uppercase">Support</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Locations</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Legal</a>
                  <a href="#" className="hover:text-primary transition-colors uppercase">Press</a>
                </div>
              </div>

            </div>
          </div>

        </div>
        
        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-slate-300 dark:border-white/20 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-[10px] text-slate-300 dark:text-slate-500 font-black uppercase tracking-widest text-center">
            <p>© 2025 CARVERSE PLATFORMS INC.</p>

            <div className="hidden sm:flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <p>PRIVACY POLICY</p>
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <p>TERMS OF USE</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-slate-200 dark:bg-white/5 rounded-full border border-slate-300 dark:border-white/5">
            <span className="text-[10px] text-slate-400 dark:text-white/30 font-black uppercase tracking-widest">
              Crafted for
            </span>
            <span className="text-[10px] text-primary font-black uppercase tracking-widest italic font-serif">
              Performance
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}