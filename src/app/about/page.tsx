import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />
      
      {/* Dark Header Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Story</span></h1>
        <p className="text-white/70 max-w-2xl text-lg mx-auto">
          Discover the passion and craftsmanship behind CaféLuxe.
        </p>
      </div>

      {/* Light Content Section */}
      <About />
      <Testimonials />
      
      <Footer />
    </main>
  );
}
