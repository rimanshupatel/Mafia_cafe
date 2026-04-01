"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    // "/gallery/6.webp",
  ];

  const getGridSpan = (idx: number) => {
    switch (idx) {
      case 0: return "col-span-2 md:col-span-2 md:row-span-2";
      case 1: return "col-span-1 md:col-span-1 md:row-span-1";
      case 2: return "col-span-1 row-span-2 md:col-span-1 md:row-span-2";
      case 3: return "col-span-1 md:col-span-1 md:row-span-1";
      case 4: return "col-span-2 md:col-span-1 md:row-span-1";
      case 5: return "col-span-2 md:col-span-3 md:row-span-1";
      default: return "col-span-1";
    }
  };

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">
              Gallery
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
              Vibes & Aesthetics
            </h3>
            <p className="text-dark/70 font-light text-lg">
              Follow us @mafiacafeofficial_ and tag your pictures to get featured on our page.
            </p>
          </motion.div>
        </div>

        {/* Collage Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[300px] gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${getGridSpan(idx)}`}
            >
              <img
                src={src}
                alt={`Gallery photo ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  View Full
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
