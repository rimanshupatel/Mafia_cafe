import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />

      {/* Dark Header Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">The Coffee Blog</h1>
        <p className="text-white/70 max-w-2xl text-lg mx-auto">
          Insights, roasting techniques, and stories from the baristas of CaféLuxe.
        </p>
      </div>

      {/* Light Content Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "The Art of the Perfect Espresso Pull", date: "Oct 12, 2024", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" },
            { title: "Why Single Origin Matters", date: "Oct 05, 2024", img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop" },
            { title: "Matching Pastries to Your Roast", date: "Sep 28, 2024", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop" }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 flex flex-col">
              <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] bg-beige relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <div className="text-primary text-xs font-semibold uppercase tracking-wider mb-2">{post.date}</div>
              <h3 className="text-xl font-medium text-dark group-hover:text-primary transition-colors font-serif">{post.title}</h3>
              <p className="mt-2 text-dark/60 text-sm line-clamp-2">Discover the subtle nuances of flavor and explore the journey from bean to cup in our latest feature.</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
