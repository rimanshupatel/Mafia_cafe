import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />
      
      {/* Dark Header Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Our Menu</h1>
        <p className="text-white/70 max-w-2xl text-lg mb-4 mx-auto">
          Handcrafted beverages and treats. Discover the flavors of CaféLuxe.
        </p>
      </div>

      {/* Light Content Section */}
      <MenuSection />

      <div className="bg-background pb-20 flex justify-center">
        <button className="bg-dark hover:bg-primary text-white border border-dark px-10 py-3 rounded-full font-medium transition-colors active:scale-95 shadow-md">
          Download PDF Menu
        </button>
      </div>
      
      <Footer />
    </main>
  );
}
