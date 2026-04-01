"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import logo from "../../public/Mafia_logo .png"
/**
 * Premium Navbar component
 * Glassmorphism pill-shaped container with brand links.
 */
const Navbar = () => {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-8 py-3.5 flex items-center justify-between w-full max-w-5xl shadow-2xl shadow-black/40"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src={logo.src}
            alt="Mafia Cafe Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
          />
          {/* Optional fallback text if the image is just an icon */}
          {/* <span className="text-white font-serif font-bold text-2xl tracking-wide ml-2"><span className="text-orange-400">Mafia</span>Cafe</span> */}
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          <NavLink label="Home" href="/" />
          <NavLink label="About Us" href="/about" />
          <NavLink label="Menu" href="/menu" />
          <NavLink label="Blog" href="/blog" />
          <NavLink label="Gallery" href="/gallery" />
          <NavLink label="Contact Us" href="/contact" />
        </div>

        {/* Reserve Table Button */}
        <div>
          <Link href="/reserve" className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300">
            Reserve Table
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

const NavLink = ({ label, href }: { label: string; href: string }) => (
  <Link
    href={href}
    className="relative px-4 py-2 text-white/80 hover:text-white text-[15px] font-medium transition-colors group overflow-hidden rounded-full"
  >
    <span className="absolute inset-0 bg-white/10 rounded-full opacity-0 scale-75 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></span>
    <span className="relative z-10">{label}</span>
  </Link>
);

export default Navbar;

