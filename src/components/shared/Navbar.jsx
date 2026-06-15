"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { HERO_CONTENT } from '../../data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // মোবাইলে ড্রপডাউন ওপেন/ক্লোজ করার জন্য স্টেট
  const [openDropdowns, setOpenDropdowns] = useState({});
  
  const pathname = usePathname();

  // Scroll effect (শুধুমাত্র শ্যাডো অ্যাড করার জন্য ব্যবহার হবে, লেআউট জাম্প করবে না)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Personal এবং Professional থেকে মেইন URL রিমুভ করা হয়েছে এবং সাব-পেজ অ্যাড করা হয়েছে
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Attorneys', href: '/attorney' },
    { 
      name: 'Personal', 
      subItems: [
        { name: 'Civil Lawsuits', href: '/personal' },
        { name: 'Criminal Defense', href: '/personal/criminal-defense' },
        { name: 'Divorce and Family Law', href: '/personal/divorce-and-family-law' },
        { name: 'DUI Defense', href: '/personal/dui-defense' },
        { name: 'Personal Injury', href: '/personal/personal-injury' },
        { name: 'Wills and Probate', href: '/personal/wills-and-probate' }
      ]
    },
    { 
      name: 'Professional', 
      subItems: [
        { name: 'Administrative Law', href: '/professional' },
        { name: 'Appellate Litigation', href: '/professional/appellate-litigation' },
        { name: 'Business Consulting', href: '/professional/business-consulting' },
        { name: 'Business Formation & Dissolution', href: '/professional/business-formation-dissolution' }
      ]
    },
    { name: 'Case Reviews', href: '/case-review' },
    { name: 'Blog', href: '/blog' },
    { name: 'Media', href: '/media' },
    { name: 'Contact', href: '/contact' }
  ];

  const mainMenuItems = menuItems.filter(item => item.name !== 'Contact');
  const contactItem = menuItems.find(item => item.name === 'Contact');

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({}); // মেনু ক্লোজ হলে ড্রপডাউনগুলোও রিসেট হবে
  };

  const toggleMobileDropdown = (menuName, e) => {
    e.preventDefault(); // লিংক ক্লিক হওয়া বন্ধ করে শুধু ড্রপডাউন ওপেন করবে
    setOpenDropdowns(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <>
      {/* ========================================
        TOP TIER: Navy Background
        এটি নরমালি স্ক্রল হয়ে উপরে চলে যাবে। কোনো জাভাস্ক্রিপ্ট ট্রানজিশন নেই, তাই কাঁপবে না।
        ========================================
      */}
      <div className="w-full bg-[#0A192F] py-4 sm:py-6 z-40 relative">
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
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm mb-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Birmingham, AL 35203</span>
            </div>
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
        এটি `sticky top-0` দেওয়া আছে। পেজ স্ক্রল করলে শুধু এই সাদা বারটি টপে স্টিক হয়ে থাকবে।
        ========================================
      */}
      <header 
        className={`w-full bg-[#F8F9FA] z-50 sticky top-0 transition-shadow duration-300 ${
          scrolled ? 'shadow-md border-b-transparent' : 'border-b border-gray-200'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-between items-center py-4">
            
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              {mainMenuItems.map((item) => {
                const hasDropdown = !!item.subItems;
                // Check if active (matches exact href or any sub-item href)
                const isActive = hasDropdown 
                  ? item.subItems.some(sub => pathname === sub.href)
                  : pathname === item.href;
                
                return (
                  <div key={item.name} className="relative group">
                    {hasDropdown ? (
                      // ড্রপডাউনের জন্য বাটন ব্যবহার করা হয়েছে, তাই ক্লিক করলে পেজ লোড হবে না
                      <button
                        className={`text-[11px] md:text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 relative py-2 cursor-pointer focus:outline-none ${
                          isActive ? 'text-brand-navy' : 'text-[#0A192F]/80 hover:text-brand-gold'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </button>
                    ) : (
                      // সাধারণ মেনুর জন্য লিংক
                      <Link
                        href={item.href}
                        className={`text-[11px] md:text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 relative py-2 ${
                          isActive ? 'text-brand-navy' : 'text-[#0A192F]/80 hover:text-brand-gold'
                        }`}
                      >
                        {item.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </Link>
                    )}

                    {/* Desktop Dropdown Menu */}
                    {hasDropdown && (
                      <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2 z-50">
                        <div className="bg-white shadow-xl border border-gray-100 border-t-2 border-t-brand-gold min-w-[260px] flex flex-col py-2 rounded-b-md">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="px-5 py-3 text-[11px] font-bold tracking-wider uppercase text-[#0A192F]/80 hover:text-brand-gold hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-b-0"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="flex items-center pl-6 border-l border-gray-200">
              <Link
                href={contactItem.href}
                className="bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] font-bold text-[11px] md:text-xs tracking-wider uppercase px-6 py-2.5 rounded shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                {contactItem.name}
              </Link>
            </div>
          </div>

          {/* Mobile Phone Number & Hamburger (visible when scrolled past blue bar) */}
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
        </nav>

        {/* Mobile Navigation Menu Dropdown */}
        <div 
          className={`sm:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-400 ease-in-out ${
            mobileMenuOpen ? 'max-h-[800px] border-b border-gray-200 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {!scrolled && (
              <div className="pb-4 mb-4 border-b border-gray-100 flex justify-center">
                <a href="tel:205-502-2000" className="flex items-center gap-2 text-brand-navy text-lg font-bold">
                  <Phone className="w-5 h-5 text-brand-gold" fill="currentColor" />
                  <span>205-502-2000</span>
                </a>
              </div>
            )}
            
            {mainMenuItems.map((item) => {
              const hasDropdown = !!item.subItems;
              const isActive = hasDropdown 
                ? item.subItems.some(sub => pathname === sub.href)
                : pathname === item.href;
              const isDropdownOpen = openDropdowns[item.name];

              return (
                <div key={item.name} className="flex flex-col">
                  {hasDropdown ? (
                    // মোবাইলে ড্রপডাউন টগল করার জন্য পুরো রো-টি বাটন
                    <button
                      onClick={(e) => toggleMobileDropdown(item.name, e)}
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase transition-all focus:outline-none cursor-pointer ${
                        isActive ? 'bg-brand-navy/5 text-brand-navy border-l-4 border-brand-gold' : 'text-gray-700 hover:bg-slate-50 hover:text-brand-gold'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                    </button>
                  ) : (
                    // সাধারণ লিংকের জন্য
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`block px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase transition-all ${
                        isActive ? 'bg-brand-navy/5 text-brand-navy border-l-4 border-brand-gold' : 'text-gray-700 hover:bg-slate-50 hover:text-brand-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown Items */}
                  {hasDropdown && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-6 pr-4 py-2 space-y-1 border-l-2 border-brand-gold/30 ml-6 mt-1 mb-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-2.5 text-xs font-bold text-gray-600 hover:text-brand-gold uppercase tracking-wider transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

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
      </header>

    </>
  );
}