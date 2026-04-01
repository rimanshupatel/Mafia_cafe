"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/hooks.webp"
          alt="Coffee shop ambiance"
          className="w-full h-full object-cover"
        />
        {/* Layered gradient overlay: black/80 -> transparent + warm orange tint with vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-orange-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80 pointer-events-none"></div>
        {/* Subtle decorative overlay (simulating noise/texture) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >


            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-white leading-[1.05] mb-6 tracking-tight flex flex-col gap-1">
              <span className="block opacity-90 transition-opacity hover:opacity-100 font-sans tracking-tight text-white/90">Experience the</span>
              <span className="block font-bold mt-1">
                Taste of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200 font-serif italic pr-2">Premium</span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed max-w-lg border-l-2 border-orange-500/50 pl-5 ml-1">
              Elevate your morning routine with our artisanal blends, carefully crafted by award-winning baristas in a modern atmosphere.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-5 items-center mt-4"
            >
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 flex items-center gap-2 group text-lg relative overflow-hidden">
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
                <ShoppingBag size={20} className="group-hover:-translate-y-1 transition-transform" />
                <span className="relative z-10">Order Now</span>
              </button>

              <button className="bg-transparent hover:bg-white/5 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-medium transition-all active:scale-95 flex items-center gap-2 group text-lg relative overflow-hidden">
                <span className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">View Menu</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Highlight stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl w-fit"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Customer" className="w-12 h-12 rounded-full border-2 border-black object-cover z-[1] hover:z-10 transition-all hover:scale-110" />
              ))}
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center border-2 border-black z-[1] text-xs font-bold text-white">
                2k+
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                <Star fill="currentColor" size={16} />
                <span className="text-white font-bold text-lg ml-1">4.8</span>
                <span className="text-white/60 text-sm">Rating</span>
              </div>
              <p className="text-white/80 text-sm">Over 2,000+ happy customers</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-white" />
        </motion.div>
      </motion.div>

      {/* Decorative element bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 w-full pointer-events-none" />
    </section>
  );
}
