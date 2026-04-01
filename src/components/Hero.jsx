'use client';

import { motion } from 'framer-motion';
import { Search, ChevronRight, Fuel, Gauge, Zap } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-900">
            {/* Background Hero Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Car Hero"
                    fill
                    className="object-cover object-center translate-x-0 md:translate-x-0"
                    priority
                />
                {/* Adjusted Graient Overlay to match the provided image */}
                <div className="absolute inset-0 hero-gradient dark:from-slate-900 dark:via-slate-900/80 dark:to-transparent"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 z-10 relative">
                <div className="max-w-2xl pt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <span className="text-xs font-black tracking-[0.3em] text-primary uppercase mt-5">
                            Exclusive Showcase 2025
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-[8rem] font-black text-slate-900 dark:text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        Find Your <br />
                        <span className="italic font-serif text-primary">Dream Car</span> <br />
                        Today
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-lg text-slate-900/60 dark:text-slate-400 mb-10 leading-relaxed max-w-lg"
                    >
                        Experience the pinnacle of automotive excellence. Browse our curated collection
                        of luxury, sport, and electric vehicles designed to elevate your journey.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <a
                            href="#cars"
                            className="px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/30"
                        >
                            Browse Cars <ChevronRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-10 py-5 text-primary-dark dark:text-primary rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center border border-primary-dark dark:border-primary border-b-4 transition-all duration-300 ease-in-out hover:text-white dark:hover:text-white hover:bg-primary-dark dark:hover:bg-primary hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book Test Drive
                        </a>
                    </motion.div>

                    {/* Quick Stats moved to the bottom as in the target image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 mb-6"
                    >
                        {[
                            { icon: <Zap className="text-primary" size={24} />, val: "500+", label: "Premium Units" },
                            { icon: <Gauge className="text-primary" size={24} />, val: "24/7", label: "Expert Support" },
                            { icon: <Fuel className="text-primary" size={24} />, val: "0%", label: "APR Financing" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <div className="p-3 bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-primary">{stat.icon}</div>
                                <div>
                                    <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">{stat.val}</p>
                                    <p className="text-[10px] text-slate-900/40 dark:text-slate-500 uppercase tracking-widest font-black">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Aesthetic Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-900/30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest font-black text-slate-900/50 dark:text-slate-400">Scroll</span>
                <div className="w-[1px] h-12 bg-slate-900/10 dark:bg-slate-500 relative">
                    <div className="absolute top-0 left-0 w-full h-4 bg-primary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}