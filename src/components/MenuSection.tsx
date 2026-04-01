"use client";

import { motion } from "framer-motion";
import { Plus, Flame, Leaf } from "lucide-react";

export default function MenuSection() {
  const categories = ["Coffee", "Pastries", "Breakfast", "Lunch"];

  const menuItems = [
    {
      id: 1,
      name: "Signature Espresso",
      price: "$4.50",
      description: "Rich, full-bodied espresso with notes of dark chocolate and caramel.",
      calories: "15 Cal",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
      badge: "Popular",
      badgeIcon: <Flame size={14} />,
    },
    {
      id: 2,
      name: "Matcha Latte",
      price: "$5.80",
      description: "Ceremonial grade matcha blended with steamed oat milk.",
      calories: "120 Cal",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=800&auto=format&fit=crop",
      badge: "Vegan",
      badgeIcon: <Leaf size={14} />,
    },
    {
      id: 3,
      name: "Avocado Toast",
      price: "$12.00",
      description: "Sourdough bread, smashed avocado, cherry tomatoes, and microgreens.",
      calories: "350 Cal",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Almond Croissant",
      price: "$4.80",
      description: "Flaky, buttery pastry filled with sweet almond frangipane.",
      calories: "410 Cal",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Iced Caramel Macchiato",
      price: "$6.20",
      description: "Espresso combined with vanilla-flavored syrup, milk and ice.",
      calories: "250 Cal",
      image: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=800&auto=format&fit=crop",
      badge: "Popular",
      badgeIcon: <Flame size={14} />,
    },
    {
      id: 6,
      name: "Classic Cheeseburger",
      price: "$14.50",
      description: "Grass-fed beef patty, melted cheddar, fresh lettuce & tomato on brioche.",
      calories: "580 Cal",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-primary font-semibold tracking-wider text-sm uppercase mb-2">Our Menu</h2>
            <h3 className="text-4xl font-serif font-bold text-dark">Popular & Trending</h3>
          </div>
          
          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-colors ${
                  idx === 0 
                    ? "bg-dark text-white" 
                    : "bg-white text-dark/70 hover:bg-beige"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={item.id}
              className="bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all group flex flex-col h-full border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-beige">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    {item.badgeIcon && <span className={item.badge === "Popular" ? "text-primary" : "text-green-600"}>{item.badgeIcon}</span>}
                    {item.badge}
                  </div>
                )}
                
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-dark text-xs font-semibold px-2 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                  🔥 {item.calories}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h4 className="text-xl font-bold text-dark font-serif line-clamp-1">{item.name}</h4>
                </div>
                
                <p className="text-dark/60 text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-dark tracking-tight">{item.price}</span>
                  <button className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90">
                    <Plus size={20} className="stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <button className="text-dark font-semibold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            View Full Menu
          </button>
        </div>

      </div>
    </section>
  );
}
