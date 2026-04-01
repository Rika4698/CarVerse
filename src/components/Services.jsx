'use client';

import { motion } from 'framer-motion';
import { Globe2, Clock4, Users2, Activity, Sparkles, DollarSign, ArrowRight } from 'lucide-react';


export function Services() {
  const services = [
    { title: 'Premium Leasing', desc: 'Tailored leasing options for individuals and corporate fleets with zero hidden fees and full tax benefits.', icon: <Clock4 size={32} /> },
    { title: 'Global Logistics', desc: 'Secure door-to-door delivery anywhere in the world, fully insured and tracked in real-time.', icon: <Globe2 size={32} /> },
    { title: 'VIP Support', desc: 'Dedicated concierge for all your maintenance needs and premium 24/7 roadside assistance.', icon: <Users2 size={32} /> },
    { title: 'Performance Tuning', desc: 'Unlock hidden potential with custom ECU mapping and high-end hardware performance upgrades.', icon: <Activity size={32} /> },
    { title: 'Precision Detailing', desc: 'Advanced nano-ceramic coatings and interior rejuvenation to maintain showroom perfection.', icon: <Sparkles size={32} /> },
    { title: 'Valuation Vault', desc: 'Instant, data-backed market valuation for your trade-in, ensuring you get the best possible value.', icon: <DollarSign size={32} /> },
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-slate-900">
  
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-xl">
            <h2 className="text-xs font-black text-primary uppercase tracking-[0.6em] mb-4">Elevated Experience</h2>
            <h3 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
              Premium <span className="italic font-black text-primary ">Services</span>
            </h3>
          </div>
          <p className="text-slate-900/50 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px] bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-700">
            6 Specialized Departments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white dark:bg-slate-800 p-12 rounded-[50px] border border-slate-100 dark:border-slate-700/50 group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 relative overflow-hidden hover:-translate-y-2"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              <div className="w-20 h-20 bg-primary/10 rounded-[25px] flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-6">
                {service.icon}
              </div>
              <h4 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">{service.title}</h4>
              <p className="text-slate-900/50 dark:text-slate-400 leading-relaxed font-medium">
                {service.desc}
              </p>
              
              <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-700/50 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Department {idx + 1}</span>
                <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}