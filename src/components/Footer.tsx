"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import logo from "../../public/Mafia_logo .png";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80 pt-20 pb-10 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Col */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center group">
              <img
                src={logo.src}
                alt="Mafia Cafe Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
              />
            </Link>
            <p className="text-sm leading-loose mb-6 font-light">
              Elevating the cafe experience with premium artisanal coffee, freshly baked pastries, and a welcoming atmosphere built for our community.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mafiacafeofficial_" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6 flex items-center gap-2">
              <Clock size={20} className="text-primary" />
              Opening Hours
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="font-medium text-white">7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="font-medium text-white">8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2 text-primary font-medium">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link href="#" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Home</Link></li>
              <li><Link href="#menu" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Our Menu</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> About Us</Link></li>
              <li><Link href="/reserve" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Reservations</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex gap-4 items-start">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span>123 Coffee Street, Downtown<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-primary shrink-0" />
                <span>hello@auracafe.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-white/50">
          <p>&copy; {new Date().getFullYear()} Aura Café. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
