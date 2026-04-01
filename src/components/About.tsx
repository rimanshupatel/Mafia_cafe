"use client";

import { motion } from "framer-motion";
import hookah from "../../public/hookah.jpg";
import hooks from "../../public/hooks.webp";
import { HeartIcon } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Images Layout */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[80%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={hooks.src}
                alt="Cafe interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[20%] right-0 w-[55%] aspect-square rounded-full border-[12px] border-white overflow-hidden shadow-xl z-20"
            >
              <img
                src={hookah.src}
                alt="Barista making coffee"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-30 flex items-center gap-4"
            >
              <h4 className="text-4xl font-bold text-primary font-serif"><HeartIcon /></h4>
              <p className="text-sm font-semibold text-dark/70 leading-tight">
                Taste the<br />  New Vibe
              </p>
            </motion.div>

          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6 leading-[1.15]">
                We Believe in Quality & Passion
              </h3>

              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>

              <p className="text-dark/70 text-lg leading-relaxed mb-6 font-light">
                Founded in 2026, Mafia Café started with a simple vision: to create a space where community and exceptional coffee intersect. We source our beans ethically from independent farmers worldwide.
              </p>

              <p className="text-dark/70 text-lg leading-relaxed mb-10 font-light">
                Every cup we pour goes through a rigorous quality check, ensuring that you taste the true characteristics of the bean—roasted to perfection by our master roasters in-house.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <blockquote className="border-l-4 border-primary pl-4 text-dark font-serif italic text-xl flex-1">
                  "The best coffee experience you'll ever have, crafted with utmost love and precision."
                </blockquote>

                <div className="flex-shrink-0">
                  <p className="font-bold text-dark mb-1">Jane Doe</p>
                  <p className="text-sm text-primary font-medium">Head Roaster</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
