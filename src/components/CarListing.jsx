'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Car, X, ChevronDown } from 'lucide-react';
import { cars } from '@/data/cars';
import { CarCard } from './CarCard';
import { CarModal } from './CarModal';


export function CarListing() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    const [selectedBrand, setSelectedBrand] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');
    const [selectedCar, setSelectedCar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading on initial mount and filter changes
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, [selectedType, selectedBrand, selectedPrice]);

    const carTypes = ['All', ...new Set(cars.map(car => car.type))];
    const brands = ['All', ...new Set(cars.map(car => car.brand))];
    const priceRanges = [
        { label: 'All', value: 'All' },
        { label: 'Under $50k', value: '0-50000' },
        { label: '$50k - $100k', value: '50000-100000' },
        { label: 'Over $100k', value: '100000-999999' },
    ];

    const filteredCars = useMemo(() => {
        return cars.filter(car => {
            const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.brand.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'All' || car.type === selectedType;
            const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;

            let matchesPrice = true;
            if (selectedPrice !== 'All') {
                const [min, max] = selectedPrice.split('-').map(Number);
                matchesPrice = car.price >= min && car.price <= max;
            }

            return matchesSearch && matchesType && matchesBrand && matchesPrice;
        });
    }, [searchTerm, selectedType, selectedBrand, selectedPrice]);

    const handleViewDetails = (car) => {
        setSelectedCar(car);
        setIsModalOpen(true);
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedType('All');
        setSelectedBrand('All');
        setSelectedPrice('All');
    };

    return (
        <section id="cars" className="py-28 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
                    <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <h2 className="text-xs font-black text-primary uppercase tracking-[0.6em] mb-6 inline-block bg-primary/15 dark:bg-primary/25 px-4 py-1 rounded-full">Discover Our Fleet</h2>
                        <h2 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 leading-tight">
                            Featured <br /> <span className="italic font-serif text-primary">Vehicles</span>
                        </h2>
                        <p className="text-xl text-slate-900/50 dark:text-slate-500 max-w-lg leading-relaxed font-medium">
                            Explore our meticulously curated collection of high-performance machines and luxury cruisers.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
                        {/* Search Box */}
                        <div className="w-full sm:w-80 group relative">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 transition-colors group-focus-within:text-primary">
                                <Search size={22} strokeWidth={2.5} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by car name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-16 pr-12 py-5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:ring-4 focus:ring-primary/10 transition-all font-black uppercase text-[10px] tracking-widest placeholder:text-slate-400 dark:placeholder:text-slate-500"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-900/20 dark:text-slate-400 hover:text-primary transition-colors"
                                >
                                    <X size={18} strokeWidth={3} />
                                </button>
                            )}
                        </div>

                        <button
                            onClick={resetFilters}
                            className="px-8 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black  uppercase text-[10px] tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            Reset <X size={14} />
                        </button>
                    </div>
                </div>

                {/* Filter Toolbar */}
                <div className="bg-slate-50 dark:bg-slate-700/40 p-8 rounded-2xl mb-16 border border-slate-100 dark:border-slate-800">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Type Filter */}
                        <div className="w-full lg:w-auto flex flex-wrap items-center justify-center lg:justify-start gap-2">
                            <span className="text-[13px] font-black uppercase tracking-widest text-slate-900/40 dark:text-slate-400 mr-4">Type:</span>
                            {carTypes.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setSelectedType(type)}
                                    className={`px-3 py-2 rounded-md transition-all font-black uppercase text-[13px] tracking-widest border-2 ${selectedType === type
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                                            : 'bg-white dark:bg-slate-700 border-transparent text-slate-900/40 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Separator */}
                        <div className="hidden lg:block w-px h-10 bg-slate-200 dark:bg-slate-600 mx-4"></div>

                        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-6 flex-1">
                            {/* Brand Filter */}
                            <div className="w-full flex-1 relative group">
                                <select
                                    value={selectedBrand}
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                    className="w-full appearance-none px-8 py-4 bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-300 dark:border-slate-600 focus:border-primary dark:focus:border-primary/50 text-slate-900 dark:text-white font-black uppercase text-[12px] tracking-widest transition-all cursor-pointer outline-none"
                                >
                                    <option value="All">All Brands</option>
                                    {brands.filter(b => b !== 'All').map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>
                                <ChevronDown size={14} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-400 group-hover:text-primary transition-colors pointer-events-none" />
                            </div>

                            {/* Price Filter */}
                            <div className="w-full flex-1 relative group">
                                <select
                                    value={selectedPrice}
                                    onChange={(e) => setSelectedPrice(e.target.value)}
                                    className="w-full appearance-none px-8 py-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-300 dark:border-slate-600  focus:border-primary dark:focus:border-primary/50  text-slate-900 dark:text-white font-black uppercase text-[12px] tracking-widest transition-all cursor-pointer outline-none"
                                >
                                    {priceRanges.map(range => (
                                        <option key={range.value} value={range.value}>{range.label}</option>
                                    ))}
                                </select>
                                <ChevronDown size={14} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-400 group-hover:text-primary transition-colors pointer-events-none" />
                            </div>
                        </div>

                        <div className="hidden xl:flex items-center gap-3 text-slate-400 dark:text-slate-500 text-[12px] font-black uppercase tracking-widest shrink-0">
                            {filteredCars.length} Machines Available
                        </div>
                    </div>
                </div>

                {/* Grid layout */}
                {isLoading ? (
                    ""
                ) : filteredCars.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredCars.map((car) => (
                                <CarCard
                                    key={car.id}
                                    car={car}
                                    onViewDetails={handleViewDetails}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700"
                    >
                        <div className="p-8 bg-primary/15 dark:bg-primary/25 rounded-full mb-8">
                            <Car className="text-primary dark:text-primary" size={80} strokeWidth={1} />
                        </div>
                        <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">No Vehicles Found</h4>
                        <p className="text-slate-900/40 dark:text-slate-500 font-bold uppercase tracking-widest text-xs">Try adjusting your filters.</p>
                        <button
                            onClick={resetFilters}
                            className="mt-10 px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-[12px] hover:scale-105 transition-all shadow-2xl shadow-primary/20"
                        >
                            Reset All Filters
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Detail Modal */}
            <CarModal
                car={selectedCar}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}