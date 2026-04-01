import { About } from "@/components/About";
import { CarListing } from "@/components/CarListing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";


export default function Home() {
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
