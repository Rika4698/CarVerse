'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2 
} from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  const connectionCards = [
    {
      icon: <Phone size={22} />,
      title: 'Concierge Line',
      val: '+8801933835589',
      status: 'Active Now',
      color: 'bg-orange-500'
    },
    {
      icon: <Mail size={22} />,
      title: 'Direct Dispatch',
      val: 'hello@carverse.com',
      status: 'Replies in 2h',
      color: 'bg-blue-500'
    },
    {
      icon: <MapPin size={22} />,
      title: 'Private Lounge',
      val: '123 CarVerse Ave, Bangladesh',
      status: 'Open: 9 AM - 8 PM',
      color: 'bg-green-500'
    },
    {
      icon: <MessageCircle size={22} />,
      title: 'VIP WhatsApp',
      val: 'Quick Connect',
      status: '24/7',
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-28 bg-white dark:bg-slate-900 overflow-hidden">
      


      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24">

        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 text-center lg:text-left"
          >
            Premium <br />
            <span className="text-primary italic">Connections</span>
          </motion.h2>

          <p className=" max-w-md mb-12  text-xl text-slate-900/50 dark:text-slate-500  leading-relaxed font-medium text-center lg:text-left  mx-auto lg:mx-0">
            Experience luxury communication with our elite concierge team.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {connectionCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600  shadow-sm group hover:shadow-xl transition-all"
              >
                <div className="flex justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {card.icon}
                  </div>
                 <div className="flex flex-col items-end">
                      <span className={`w-1.5 h-1.5 ${card.color} rounded-full`}></span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-900/30 dark:text-slate-500 mt-1">{card.status}</span>
                    </div>
                </div>

                <h4 className="text-xs uppercase text-slate-900/30 dark:text-slate-500 mb-1 ">
                  {card.title}
                </h4>
                <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-primary transition-colors">{card.val}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg shadow-slate-200 dark:shadow-slate-700 "
        >
          {formState === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle2
                size={50}
                className="mx-auto text-green-500 mb-4"
              />
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Message Sent Successfully
              </h4>
              <p className="text-slate-500 mb-6">
                We will contact you soon.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition"
              >
                Send Another
              </button>
            </div>
          ) : (
            <>
            <div className="mb-6 text-center">
  <div className="flex items-center justify-center gap-2 mb-2">
    <MessageCircle size={20} className="text-primary" />
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
      Send Us a Message
    </h3>
  </div>

  <p className="text-sm text-slate-900/50 dark:text-slate-500 leading-relaxed">
    Fill out the form below and we'll get back to you as soon as possible.
  </p>
</div>
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary outline-none resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>

            </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}