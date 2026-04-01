"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function SpecialOffers() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3 text-center">
              Today's Specials
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Chef's Signatures
            </h3>
            <p className="text-white/70 font-light text-lg">
              Indulge in our carefully curated seasonal offerings, designed to tantalize your taste buds.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Main Special */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" 
              alt="Premium Burger" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-primary text-white font-bold px-4 py-2 rounded-full text-sm">
                Recommended
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-white mb-2">Truffle Beef Burger</h4>
                  <p className="text-white/80 max-w-md line-clamp-2 text-sm leading-relaxed mb-4">
                    Double smash patty, melted aged cheddar, truffle aioli, crispy onions on a toasted brioche bun.
                  </p>
                </div>
                <div className="text-3xl font-bold text-primary mb-5">$18.99</div>
              </div>
              <button className="w-full bg-white/10 hover:bg-primary backdrop-blur-md border border-white/20 hover:border-primary text-white py-3 rounded-xl font-medium transition-all flex justify-center items-center gap-2 group/btn relative overflow-hidden">
                <span className="relative z-10">Add to Cart</span>
                <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Secondary Specials */}
          <div className="flex flex-col gap-6">
            
            {/* Promo Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors flex-1"
            >
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop" 
                  alt="Latte" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex gap-1 text-primary mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h5 className="font-serif font-bold text-xl text-white mb-1">Hazelnut Latte</h5>
                <p className="text-white/60 text-sm line-clamp-2">Our signature roast with rich hazelnut syrup.</p>
                <div className="mt-3 font-bold text-primary">$5.50</div>
              </div>
            </motion.div>

            {/* Promo Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-primary rounded-3xl p-8 flex flex-col justify-center flex-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none scale-150 translate-x-1/4 -translate-y-1/4">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 20H6C4.89543 20 4 19.1046 4 18V9C4 7.89543 4.89543 7 6 7H11V20ZM13 20H18C19.1046 20 20 19.1046 20 18V9C20 7.89543 19.1046 7 18 7H13V20ZM11 5H6C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7H11V5ZM13 5H18C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7H13V5Z"/>
                </svg>
              </div>
              
              <div className="relative z-10">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  Limited Time
                </span>
                <h4 className="text-3xl font-serif font-bold text-white mb-3 leading-tight">
                  Get 20% Off Your First Order
                </h4>
                <p className="text-white/90 text-sm mb-6 max-w-xs">
                  Use code <span className="font-bold bg-white/20 px-2 py-1 rounded">AURA20</span> at checkout today.
                </p>
                
                <button className="bg-white text-primary hover:bg-beige hover:text-dark px-6 py-3 rounded-full font-bold transition-colors w-max shadow-xl">
                  Order Now
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
