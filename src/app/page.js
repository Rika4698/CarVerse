'use client';

import { useState, useEffect } from 'react';
import { About } from "@/components/About";
import { CarListing } from "@/components/CarListing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Loading } from '@/components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds for a premium feel

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-slate-900">
        <Loading />
      </div>
    );
  }

  return (
  
      <main className="relative min-h-screen">
        <Navbar/>
        <Hero/>
        <About/>
        <CarListing/>
        <Services/>
        <Contact/>
        <Footer/>
        
      </main>
    
  );
}
