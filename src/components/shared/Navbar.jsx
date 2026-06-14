"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin } from "lucide-react";
import { HERO_CONTENT } from '../../data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll effect for hiding top bar and sticking the nav bar (আপনার অরিজিনাল লজিক)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Attorneys', href: '/attorney' },
    { name: 'Personal', href: '/personal' },
    { name: 'Professional', href: '/professional' },
    { name: 'Case Reviews', href: '/case-review' },
    { name: 'Blog', href: '/blog' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' }
  ];

  // মেনুগুলোকে দুই ভাগে ভাগ করা হলো
  const mainMenuItems = menuItems.filter(item => item.name !== 'Contact');
  const contactItem = menuItems.find(item => item.name === 'Contact');

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col z-50">
      
      {/* ========================================
        TOP TIER: Navy Background (Logo & Phone)
        ========================================
      */}
      <div 
        className={`bg-[#0A192F] transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
          scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-[120px] opacity-100 py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Left: Logo */}
          <Link href="/" onClick={handleLinkClick} className="flex text-white items-center shrink-0">
            <Image
              src={HERO_CONTENT.logoImage}
              alt="Boles Holmes White LLC Logo"
              width={280}   
              height={70}   
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
              priority
            />
          </Link>

          {/* Right: Contact Info */}
          <div className="hidden sm:flex flex-col items-end justify-center text-right">
            {/* Address */}
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm mb-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Birmingham, AL 35203</span>
            </div>

            {/* Phone */}
            <a 
              href="tel:205-502-2000" 
              className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300 group"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-brand-gold group-hover:text-white" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-medium tracking-tight">
                205-502-2000
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-gold p-2 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================
        BOTTOM TIER: White Background Navigation
        ========================================
      */}
      <nav 
        className={`w-full bg-[#F8F9FA] transition-all duration-500 z-50 ${
          scrolled ? 'fixed top-0 left-0 shadow-md border-b border-gray-200' : 'relative border-b border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-between items-center py-4">
            
            {/* বাম দিকে সব মেনু */}
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {mainMenuItems.map((item) => {
                const isActive = pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[11px] md:text-xs font-bold tracking-wider uppercase transition-colors relative group ${
                      isActive ? 'text-brand-navy' : 'text-[#0A192F]/80 hover:text-brand-gold'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                );
              })}
            </div>

            {/* ডান দিকে Contact বাটন */}
            <div>
              <Link
                href={contactItem.href}
                className="bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] font-bold text-[11px] md:text-xs tracking-wider uppercase px-6 py-2.5 rounded shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                {contactItem.name}
              </Link>
            </div>
          </div>

          {/* Mobile Centered Phone Number */}
          {scrolled && (
            <div className="sm:hidden flex justify-between items-center py-3">
              <a href="tel:205-502-2000" className="flex items-center gap-2 text-brand-navy font-bold">
                <Phone className="w-4 h-4 text-brand-gold" fill="currentColor" />
                <span>205-502-2000</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-navy hover:text-brand-gold focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {!scrolled && (
                <div className="pb-4 mb-4 border-b border-gray-100 flex justify-center">
                  <a href="tel:205-502-2000" className="flex items-center gap-2 text-brand-navy text-lg font-bold">
                    <Phone className="w-5 h-5 text-brand-gold" fill="currentColor" />
                    <span>205-502-2000</span>
                  </a>
                </div>
              )}
              
              {/* Mobile Main Menus */}
              {mainMenuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase transition-all ${
                      isActive 
                        ? 'bg-brand-navy/5 text-brand-navy border-l-4 border-brand-gold' 
                        : 'text-gray-700 hover:bg-slate-50 hover:text-brand-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Contact Button */}
              <div className="pt-4 mt-2">
                <Link
                  href={contactItem.href}
                  onClick={handleLinkClick}
                  className="block w-full text-center bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] px-4 py-3.5 rounded-md text-sm font-bold tracking-wider uppercase transition-colors shadow-sm"
                >
                  {contactItem.name}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}