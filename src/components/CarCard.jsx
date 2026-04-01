'use client';

import { Fuel, Gauge, Zap, ChevronRight, Scale, CalendarDays, Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

export function CarCard({ car, onViewDetails }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group bg-primary/5 dark:bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 flex flex-col h-full hover:border-primary dark:hover:border-primary-dark"
        >
            {/* Image Container with Badge */}
            <div className="relative aspect-[16/11] overflow-hidden shrink-0">
                <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Type Badge */}
                <div className="absolute top-6 left-6 z-10">
                    <span className="px-5 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl flex items-center gap-2 border border-white/20">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                        {car.type}
                    </span>
                </div>


            </div>

            {/* Info Area */}
            <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6 gap-4  h-16 ">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{car.brand}</p>
                        <h4 className="  text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">{car.name}</h4>

                    </div>
                    <div className="text-right shrink-0 ">
                        <p className="text-2xl font-black text-primary tracking-tighter">
                            $ {(car.price / 1000).toFixed(0)}k
                        </p>
                        <p className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">MSRP</p>
                    </div>
                </div>

                <p className=" text-slate-900/50 dark:text-slate-400 text-sm md:text-base mb-8 line-clamp-2 leading-relaxed font-medium">
                    {car.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-3 mb-auto">
                    {[
                        { icon: <Fuel size={14} />, label: car.features.fuel },
                        { icon: <Gauge size={14} />, label: car.features.mileage },
                        { icon: <CalendarDays size={14} />, label: car.features.year },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-100 dark:border-slate-800 transition-all group-hover:border-primary/20 group-hover:bg-primary/5">
                            <div className="text-primary/55 dark:text-primary/70 group-hover:text-primary transition-colors">{item.icon}</div>
                            <span className="text-[9px] font-black text-slate-900/40 dark:text-slate-500 uppercase tracking-widest text-center truncate w-full px-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <button
                    onClick={() => onViewDetails(car)}
                    className="mt-10 w-full py-5  gap-3 shadow-xl   text-primary-dark dark:text-primary rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center border border-primary-dark dark:border-primary border-b-4 transition-all duration-300 ease-in-out hover:text-white dark:hover:text-white hover:bg-primary-dark dark:hover:bg-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                    View Details <ChevronRight size={16} />
                </button>
            </div>
        </motion.div>
    );
}