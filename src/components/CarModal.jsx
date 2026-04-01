/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ChevronRight, Gauge, Fuel, Calendar, Settings, Zap } from 'lucide-react';
import Image from 'next/image';

export function CarModal({ car, isOpen, onClose }) {
    if (!isOpen || !car) return null;

    const specs = [
        { Icon: Calendar, label: 'Year', value: car.features.year },
        { Icon: Gauge, label: 'Mileage', value: car.features.mileage },
        { Icon: Settings, label: 'Engine', value: car.features.engine },
        { Icon: Fuel, label: 'Fuel', value: car.features.fuel },
        { Icon: Zap, label: 'Transmission', value: car.features.transmission },
    ];

    return (
        <AnimatePresence>
            {/* Full-screen overlay — scrollable on small screens */}
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">

                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-background/80 dark:bg-background/40 backdrop-blur-xl"
                />

                {/* Modal card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 24 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="relative w-full max-w-5xl glass rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/10 border border-foreground/5 dark:border-slate-400 overflow-hidden z-10 my-auto"
                >
                    {/* Close btn */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-slate-700 dark:bg-slate-100 text-white dark:text-black hover:bg-primary hover:text-white transition-all z-20"
                    >
                        <X size={20} />
                    </button>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 ">

                        {/* ── Image side ── */}
                        <div className="relative  h-60 sm:h-80 lg:h-auto lg:min-h-[520px]">
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                            {/* Name overlay */}
                            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 z-10">
                                <span className="inline-block px-3 py-1.5 bg-primary text-white font-bold rounded-xl mb-3 uppercase text-xs sm:text-sm">
                                    {car.brand} {car.type}
                                </span>
                                <h2 className="text-3xl sm:text-5xl md:text-5xl font-black text-black drop-shadow-lg leading-tight">
                                    {car.name}
                                </h2>
                            </div>
                        </div>

                        {/* ── Details side ── */}
                        <div className="p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto max-h-[80vh] lg:max-h-none">

                            {/* Price row */}
                            <div className="flex items-center justify-between mb-7">
                                <p className="text-[10px] sm:text-lg font-bold text-primary uppercase tracking-[0.2em]">
                                    Vehicle Specifications
                                </p>
                                <p className="text-2xl sm:text-4xl font-black text-black dark:text-white">
                                    <span className="text-primary">$</span>{car.price.toLocaleString()}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base lg:text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed italic">
                                "{car.description}"
                            </p>

                            {/* Specs grid */}
                            <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-10">
                                {specs.map(({ Icon, label, value }) => (
                                    <div key={label} className="flex items-center gap-3">
                                        <div className="p-2.5 bg-primary/15 dark:bg-primary/25 rounded-2xl shrink-0">
                                            <Icon className="text-primary" size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] sm:text-[12px] text-slate-500 dark:text-slate-400 uppercase font-bold">{label}</p>
                                            <p className="font-black text-slate-800 dark:text-slate-100 text-base truncate">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="space-y-4">
                                <button className="w-full py-4 sm:py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-primary/20">
                                    Request Financing Quote <ChevronRight size={16} />
                                </button>

                                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-800 dark:text-slate-100 font-bold text-xs">
                                    {['Inspected', 'Warranty Included', 'Free Shipping'].map((badge) => (
                                        <span key={badge} className="flex items-center gap-1">
                                            <CheckCircle2 size={13} className="text-green-500" />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}