import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
  
      <main className="relative min-h-screen">
        <Navbar/>
        <Contact/>
        <Footer/>
        
      </main>
    
  );
}
