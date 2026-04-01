'use client';

import { motion } from 'framer-motion';
import { CarFront } from 'lucide-react';

export function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full w-full bg-white dark:bg-slate-900 overflow-hidden relative"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>


      <div className="relative flex flex-col items-center">
        {/* Logo Icon Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 border-t-2 border-r-2 border-primary rounded-full blur-[2px]"
          ></motion.div>

          <div className="relative w-32 h-32 bg-slate-900 dark:bg-white rounded-[40px] flex items-center justify-center shadow-2xl shadow-primary/20 rotate-12">
            <CarFront size={64} className="text-white dark:text-slate-900 -rotate-12 group-hover:rotate-0 transition-transform" />
          </div>
        </motion.div>

        {/* Logo Text Animation */}
        <div className="flex items-center gap-3 mb-8">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase"
          >
            Car
          </motion.span>
          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-black italic font-serif text-primary uppercase"
          >
            Verse
          </motion.span>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-64 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-primary shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          ></motion.div>
        </div>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-[10px] font-black uppercase tracking-[0.5em] text-slate-900/40 dark:text-slate-500"
        >
          Calibrating Perfection
        </motion.p>
      </div>
    </motion.div>
  );
}
