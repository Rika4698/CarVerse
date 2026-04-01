'use client';

import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X, CarFront } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Cars', href: '#cars' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 pb-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary shadow-lg shadow-primary/20 transition-all group-hover:scale-105">
            <CarFront className="text-white" size={24} strokeWidth={2} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
            Car<span className="text-primary italic">Verse</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-xs lg:text-sm font-black uppercase tracking-widest relative group transition-all 
                ${
                  activeLink === link.href
                    ? 'text-primary'
                    : 'text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary'
                }
              `}
            >
              {link.name}

              {/* underline */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all
                  ${
                    activeLink === link.href
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }
                `}
              ></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-100 dark:bg-white transition-colors text-slate-900 dark:text-yellow-500"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 dark:text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute  left-0 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600"
          >
            <div className="flex flex-col p-8 gap-6">
               {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveLink(link.href);
                  }}
                  className={`text-lg font-black uppercase tracking-widest transition-all
                    ${
                      activeLink === link.href
                        ? 'text-primary'
                        : 'text-slate-900 dark:text-white hover:text-primary'
                    }
                  `}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-600 flex justify-between items-center">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-900/30 dark:text-slate-400">Switch Theme</span>
                <button 
                  onClick={toggleTheme}
                  className="p-4 bg-slate-100 dark:bg-white text-black dark:text-yellow-500 rounded-2xl"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}