"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Reynolds",
      role: "Local Guide",
      content: "The best avocado toast I've ever had! The ambiance is perfect for remote work or just chilling with friends. Definitely coming back.",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
    },
    {
      id: 2,
      name: "James Chen",
      role: "Coffee Enthusiast",
      content: "Their signature espresso roast is out of this world. You can tell they really care about the beans they source. A true hidden gem.",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Food Blogger",
      content: "Aura Café isn't just about coffee; it's an experience. The truffle burger is exquisite, and the service is always top-notch.",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 4,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-beige relative overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-3">
              Testimonials
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">
              What Our Customers Say
            </h3>
          </motion.div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden w-full group">
          <div className="flex gap-8 w-max animate-scroll px-4">
            {duplicatedReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="bg-white rounded-3xl p-8 relative shadow-sm hover:shadow-xl transition-shadow border border-gray-100/50 w-[350px] md:w-[400px] flex-shrink-0"
              >
                <div className="text-primary/20 absolute top-6 right-6">
                  <Quote size={48} />
                </div>

                <div className="flex gap-1 text-amber-500 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
                  ))}
                </div>

                <p className="text-dark/70 italic text-lg leading-relaxed mb-8 min-h-[100px] relative z-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-beige"
                  />
                  <div>
                    <h5 className="font-bold text-dark font-serif text-lg">{review.name}</h5>
                    <p className="text-primary text-sm font-medium">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
