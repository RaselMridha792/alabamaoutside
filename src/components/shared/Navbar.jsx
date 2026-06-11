"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HERO_CONTENT } from '../../data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // ✅ Active পেজ ট্র্যাক করার জন্য

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // ✅ বর্তমান URL পাথ পাওয়ার জন্য

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Attorneys', href: '/attorney' },
    { name: 'Personal', href: '/personal' },
    { name: 'Professional', href: '/professional' },
    { name: 'Blog', href: '/blog' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' }
  ];

  // ✅ মোবাইল মেনু বন্ধ করার জন্য সিম্পল ফাংশন
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    // পুরো হেডারকে fixed করা হয়েছে যেন স্মুথ ট্রানজিশন হয়
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div 
        className={`bg-brand-navy text-gray-300 px-4 sm:px-6 lg:px-8 text-xs transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
          scrolled 
            ? 'max-h-0 opacity-0 py-0 border-transparent' 
            : 'max-h-[100px] opacity-100 py-2 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="https://maps.google.com/?q=1929+3rd+Ave.+North,+Suite+500,+Birmingham,+AL+35203" 
              target="_blank" 
              rel="noopener noreferrer" 
              id="header_address_link"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Birmingham, AL 35203</span>
            </a>
            <a 
              href="tel:205-502-2000" 
              id="header_phone_link"
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors duration-200 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>205-502-2000</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" id="header_fb" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Facebook">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" id="header_tw" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Twitter">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" id="header_ig" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="Instagram">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" id="header_li" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        id="main_nav"
        className={`w-full transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-lg shadow-sm py-4 border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center bg-transparent">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex items-center shrink-0" id="logo_link">
            <Image
              src={HERO_CONTENT.logoImage}
              alt="Boles Holmes White LLC Logo"
              id="logo_img"
              width={150}   
              height={50}   
              className="h-8 sm:h-10 md:h-12 w-auto object-contain hover:opacity-90 transition-opacity select-none"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6 xl:gap-8 shrink-0">
            {menuItems.map((item) => {
              // ✅ Next.js এর usePathname দিয়ে খুব সহজেই Active পেজ চেক করা যায়
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  id={`nav_item_${item.name.toLowerCase().replace(' ', '_')}`}
                  className={`text-xs xl:text-sm font-semibold tracking-wide uppercase transition-colors block relative group py-1 ${
                    isActive ? 'text-brand-navy font-bold' : 'text-brand-navy/80 hover:text-brand-gold-dark'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              id="nav_cta_button"
              className="bg-brand-navy hover:bg-brand-navy-light text-brand-gold font-bold text-[11px] xl:text-xs tracking-wider uppercase px-4 xl:px-5 py-2.5 rounded-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile_menu_toggle"
              className="text-brand-navy hover:text-brand-gold p-2 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl" id="mobile_menu_dropdown">
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  id={`mobile_nav_${item.name.toLowerCase().replace(' ', '_')}`}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-navy hover:bg-slate-50 hover:text-brand-gold-dark transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  id="mobile_cta_button"
                  onClick={handleLinkClick}
                  className="block w-full text-center bg-brand-navy hover:bg-brand-navy-light text-brand-gold font-bold py-3 px-4 rounded-sm transition-all text-sm tracking-wider uppercase"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}