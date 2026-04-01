import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />
      {/* Dark Hero */}
      <Hero />
      
      {/* Light sections */}
      <MenuSection />
      <About />
      <Gallery />
      <Testimonials />
      
      <Footer />
    </main>
  );
}
