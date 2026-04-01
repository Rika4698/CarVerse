'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap,  Award,  ArrowRight } from 'lucide-react';

export function About() {
  const highlights = [
    { 
      icon: <ShieldCheck size={28} />, 
      title: 'Certified Units', 
      desc: 'Every car undergoes a 200-point inspection before listing, ensuring the highest standards of safety and performance.' 
    },
    { 
      icon: <Award size={28} />, 
      title: 'Award Winning', 
      desc: 'Recognized as the top premium dealership 3 years in a row by the Global Automotive Excellence Committee.' 
    },
    { 
      icon: <Zap size={28} />, 
      title: 'Instant Approval', 
      desc: 'Get financing approval within minutes, not days. Our seamless digital process keeps you moving.' 
    },
  ];

  const stats = [
    { label: 'Vehicles Delivered', value: '15k+' },
    { label: 'Satisfied Clients', value: '12k+' },
    { label: 'Global Offices', value: '8' },
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Dealership" 
                className="w-full h-[600px] object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-12">
                <div className="flex gap-8 border-t border-white/20 pt-8 mt-auto">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex-1">
                      <p className="text-3xl font-black text-white mb-1 uppercase tracking-tighter">{stat.value}</p>
                      <p className="text-xs font-bold text-white/50 uppercase tracking-widest leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Absolute badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 10 }}
              className="absolute -top-10 -right-4 lg:-right-10 w-32 h-32 lg:w-44 lg:h-44 bg-primary rounded-full flex flex-col items-center justify-center p-6 text-center text-white shadow-2xl border-8 border-white dark:border-slate-900"
            >
              <h4 className="text-4xl font-black italic font-serif leading-none">25</h4>
              <p className="text-[10px] font-black uppercase tracking-widest mt-1">Years of Pure Legacy</p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 pt-10">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.6em] mb-6 inline-block bg-primary/5 px-4 py-2 rounded-full">Our Heritage</h2>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 leading-tight">
              Redefining <br/> 
              <span className="italic font-serif text-primary">Automotive Art</span>
            </h2>
            
            <p className="text-xl text-slate-900/60 dark:text-slate-400 leading-relaxed mb-16 max-w-xl">
              Since 2000, <span className="font-black text-slate-900 dark:text-white italic">CarVerse</span> has been more than a dealership. We are architects of mobility, curating the world's most exceptional machines for those who demand more than just transportation.
            </p>

            <div className="space-y-12">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 group cursor-default"
                >
                  <div className="shrink-0 w-16 h-16 bg-slate-50 dark:bg-slate-800/80 rounded-2xl text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100 dark:border-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight flex items-center gap-3">
                      {item.title}
                      <ArrowRight size={16} className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h5>
                    <p className="text-slate-900/50 dark:text-slate-400 leading-relaxed max-w-sm font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

