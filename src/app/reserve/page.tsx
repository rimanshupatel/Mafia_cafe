"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ReservePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const text = `*New Table Reservation Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Guests:* ${formData.guests}%0A*Special Requests:* ${formData.requests || "None"}`;

    // WhatsApp Phone Number
    const phoneNumber = "919798872976";

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />

      {/* Dark Header Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none -z-10"></div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
            Reserve Your Table
          </h1>
          <p className="text-white/70 max-w-2xl text-lg mx-auto">
            Experience premium dining. Book your table directly via WhatsApp and we will confirm your reservation instantly.
          </p>
        </motion.div>
      </div>

      {/* Light Content Section - Form */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-[50vh]">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>

          <h2 className="text-3xl font-serif text-dark mb-8 text-center">Reservation Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Date <span className="text-red-500">*</span></label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Time <span className="text-red-500">*</span></label>
                <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Guests <span className="text-red-500">*</span></label>
                <select required name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                  <option value="" disabled>Select</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark/70 mb-2">Special Requests</label>
              <textarea rows={4} name="requests" value={formData.requests} onChange={handleChange} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Any dietary requirements or special occasions?"></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_8px_25px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98] text-lg mt-4 flex items-center justify-center gap-2">
              <span>Book via WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
