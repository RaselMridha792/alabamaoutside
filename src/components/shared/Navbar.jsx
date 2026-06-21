"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MapPin, ChevronDown, ChevronRight } from "lucide-react";
import { HERO_CONTENT } from '../../data';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // মোবাইলে ড্রপডাউন ওপেন করার জন্য স্টেট
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});
  
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Attorneys', href: '/attorney' },
    { 
      name: 'Practice Areas', 
      subItems: [
        { name: 'Civil Lawsuits', href: '/practice-areas/civil-lawsuits' },
        { 
          name: 'Criminal Defense', 
          href: '/practice-areas/criminal-defense', 
          subSubItems: [
            { name: 'Criminal Defense Overview', href: '/practice-areas/criminal-defense/CriminalDefenseOverview' },
            { name: 'Arson', href: '/practice-areas/criminal-defense/arson' },
            { name: 'Assault', href: '/practice-areas/criminal-defense/assault' },
            { name: 'Burglary', href: '/practice-areas/criminal-defense/burglary' },
          ]
        },
        { 
          name: 'Divorce and Family Law', 
          href: '/practice-areas/divorce-and-family-law',
          subSubItems: [
            { name: 'Divorce and Family Law', href: '/practice-areas/divorce-and-family-law/divorce-&-family-law' },
            { name: 'Adultery', href: '/practice-areas/divorce-and-family-law/adultery' },
            { name: 'Alimony', href: '/practice-areas/divorce-and-family-law/alimony' },
            { name: 'Annulments', href: '/practice-areas/divorce-and-family-law/annulments' },
          ]
        },
        { 
          name: 'DUI Defense', 
          href: '/practice-areas/dui-defense',
          subSubItems: [
            { name: 'DUI Defense', href: '/practice-areas/dui-defense/dui-defense' },
            { name: 'Penalties', href: '/practice-areas/dui-defense/penalties' },
          ]
        },
        { name: 'Personal Injury', href: '/practice-areas/personal-injury' },
        { 
          name: 'Wills and Probate', 
          href: '/practice-areas/wills-and-probate',
          subSubItems: [
            { name: 'Will Contests', href: '/practice-areas/wills-and-probate/will-contests' },
          ]
        },
        { 
          name: 'White Collar Defense & Investigations', 
          href: '/practice-areas/white-collar-defense',
          subSubItems: [
            { name: 'Fraud Defense', href: '/practice-areas/white-collar-defense/fraud' },
          ]
        },
        { name: 'Administrative Law', href: '/practice-areas/administrative-law' },
        { name: 'Appellate Litigation', href: '/practice-areas/appellate-litigation' },
        { name: 'Business Consulting', href: '/practice-areas/business-consulting' },
        { name: 'Business Formation & Dissolution', href: '/practice-areas/business-formation-dissolution' }
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
    setOpenDropdowns({});
    setOpenSubDropdowns({});
  };

  const toggleMobileDropdown = (menuName, e) => {
    e.preventDefault();
    setOpenDropdowns(prev => ({ ...prev, [menuName]: !prev[menuName] }));
  };

  const toggleMobileSubDropdown = (subMenuName, e) => {
    e.preventDefault();
    setOpenSubDropdowns(prev => ({ ...prev, [subMenuName]: !prev[subMenuName] }));
  };

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-[#0A192F] py-4 sm:py-6 z-40 relative">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
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

          <div className="hidden sm:flex flex-col items-end justify-center text-right">
            <div className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm mb-1">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Birmingham, AL 35203</span>
            </div>
            <a href="tel:205-502-2000" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors duration-300 group">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-brand-gold group-hover:text-white" />
              <span className="text-xl sm:text-2xl lg:text-3xl font-display font-medium tracking-tight">
                205-502-2000
              </span>
            </a>
          </div>

          <div className="sm:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-brand-gold p-2 transition-colors focus:outline-none">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header className={`w-full bg-[#F8F9FA] z-50 sticky top-0 transition-shadow duration-300 ${scrolled ? 'shadow-md border-b-transparent' : 'border-b border-gray-200'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Navigation */}
          <div className="hidden sm:flex justify-between items-center py-4">
            
            <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
              {mainMenuItems.map((item) => {
                const hasDropdown = !!item.subItems;
                const isActive = hasDropdown 
                  ? item.subItems.some(sub => pathname.includes(sub.href))
                  : pathname === item.href;
                
                return (
                  <div key={item.name} className="relative group">
                    {/* Practice Areas (Main Menu Item) */}
                    {hasDropdown ? (
                      <div className="flex items-center">
                        <span className={`text-[11px] md:text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 relative py-2 cursor-default ${isActive ? 'text-brand-navy' : 'text-[#0A192F]/80 hover:text-brand-gold'}`}>
                          {item.name}
                          <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                          <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </span>
                      </div>
                    ) : (
                      <Link href={item.href} className={`text-[11px] md:text-xs font-bold tracking-wider uppercase transition-colors flex items-center gap-1 relative py-2 ${isActive ? 'text-brand-navy' : 'text-[#0A192F]/80 hover:text-brand-gold'}`}>
                        {item.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </Link>
                    )}

                    {/* Level 1 Dropdown */}
                    {hasDropdown && (
                      <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 pt-2 z-50">
                        <div className="bg-white shadow-xl border border-gray-100 border-t-2 border-t-brand-gold min-w-[280px] flex flex-col py-2 rounded-b-md">
                          {item.subItems.map((subItem) => {
                            const hasSubSub = !!subItem.subSubItems;
                            const isSubActive = pathname.includes(subItem.href);

                            return (
                              <div key={subItem.name} className="relative group/sub">
                                {/* যদি সাব-মেনু থাকে তবে এটি কোনো লিংক হবে না, শুধুমাত্র একটি div হবে */}
                                {hasSubSub ? (
                                  <div className={`w-full flex items-center justify-between px-5 py-3 text-[11px] font-bold tracking-wider uppercase hover:text-brand-gold hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-b-0 cursor-default ${isSubActive ? 'text-brand-gold bg-slate-50' : 'text-[#0A192F]/80'}`}>
                                    {subItem.name}
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={`w-full flex items-center justify-between px-5 py-3 text-[11px] font-bold tracking-wider uppercase hover:text-brand-gold hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-b-0 ${isSubActive ? 'text-brand-gold bg-slate-50' : 'text-[#0A192F]/80'}`}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}

                                {/* Level 2 Dropdown (Flyout Menu) */}
                                {hasSubSub && (
                                  <div className="absolute top-0 left-full ml-0.5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform -translate-x-2 group-hover/sub:translate-x-0 z-50">
                                    <div className="bg-white shadow-xl border border-gray-100 border-t-2 border-t-brand-gold min-w-[300px] max-h-[70vh] overflow-y-auto custom-scrollbar flex flex-col py-2 rounded-b-md">
                                      {subItem.subSubItems.map((child) => {
                                        const isChildActive = pathname === child.href;
                                        return (
                                          <Link
                                            key={child.name}
                                            href={child.href}
                                            className={`px-5 py-2.5 text-[11px] font-bold tracking-wider uppercase hover:text-brand-gold hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-b-0 ${isChildActive ? 'text-brand-gold bg-slate-50' : 'text-[#0A192F]/80'}`}
                                          >
                                            {child.name}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="flex items-center pl-6 border-l border-gray-200">
              <Link href={contactItem.href} className="bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] font-bold text-[11px] md:text-xs tracking-wider uppercase px-6 py-2.5 rounded shadow-sm transition-all duration-300 hover:-translate-y-0.5">
                {contactItem.name}
              </Link>
            </div>
          </div>

          {/* Mobile Header scrolled */}
          {scrolled && (
            <div className="sm:hidden flex justify-between items-center py-3">
              <a href="tel:205-502-2000" className="flex items-center gap-2 text-brand-navy font-bold">
                <Phone className="w-4 h-4 text-brand-gold" fill="currentColor" />
                <span>205-502-2000</span>
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-brand-navy hover:text-brand-gold focus:outline-none">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Navigation Menu Dropdown */}
        <div className={`sm:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-400 ease-in-out ${mobileMenuOpen ? 'max-h-[85vh] border-b border-gray-200 opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
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
              const isActive = hasDropdown ? item.subItems.some(sub => pathname.includes(sub.href)) : pathname === item.href;
              const isDropdownOpen = openDropdowns[item.name];

              return (
                <div key={item.name} className="flex flex-col">
                  {hasDropdown ? (
                    <button onClick={(e) => toggleMobileDropdown(item.name, e)} className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase transition-all focus:outline-none cursor-pointer ${isActive ? 'bg-brand-navy/5 text-brand-navy border-l-4 border-brand-gold' : 'text-gray-700 hover:bg-slate-50 hover:text-brand-gold'}`}>
                      <span>{item.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                    </button>
                  ) : (
                    <Link href={item.href} onClick={handleLinkClick} className={`block px-4 py-3 rounded-md text-sm font-bold tracking-wider uppercase transition-all ${isActive ? 'bg-brand-navy/5 text-brand-navy border-l-4 border-brand-gold' : 'text-gray-700 hover:bg-slate-50 hover:text-brand-gold'}`}>
                      {item.name}
                    </Link>
                  )}

                  {/* Level 1 Mobile Dropdown */}
                  {hasDropdown && (
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-brand-gold/30 ml-4 mt-1 mb-2">
                        {item.subItems.map((subItem) => {
                          const hasSubSub = !!subItem.subSubItems;
                          const isSubActive = pathname.includes(subItem.href);
                          const isSubDropdownOpen = openSubDropdowns[subItem.name];

                          return (
                            <div key={subItem.name} className="flex flex-col">
                              {/* মোবাইলে সাব-মেনু থাকলে সেটি বাটন হিসেবে কাজ করবে এবং ক্লিক করলে ড্রপডাউন খুলবে */}
                              {hasSubSub ? (
                                <button onClick={(e) => toggleMobileSubDropdown(subItem.name, e)} className={`w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none ${isSubActive ? 'text-brand-gold' : 'text-gray-600 hover:text-brand-gold'}`}>
                                  <span className="text-left">{subItem.name}</span>
                                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isSubDropdownOpen ? 'rotate-180 text-brand-gold' : ''}`} />
                                </button>
                              ) : (
                                <Link href={subItem.href} onClick={handleLinkClick} className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${isSubActive ? 'text-brand-gold' : 'text-gray-600 hover:text-brand-gold'}`}>
                                  {subItem.name}
                                </Link>
                              )}

                              {/* Level 2 Mobile Dropdown */}
                              {hasSubSub && (
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSubDropdownOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                  <div className="pl-4 pr-2 py-1 space-y-1 border-l border-gray-200 ml-4 mb-2">
                                    {subItem.subSubItems.map((child) => (
                                      <Link key={child.name} href={child.href} onClick={handleLinkClick} className={`block px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${pathname === child.href ? 'text-brand-navy bg-slate-50 rounded' : 'text-gray-500 hover:text-brand-gold'}`}>
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 mt-2">
              <Link href={contactItem.href} onClick={handleLinkClick} className="block w-full text-center bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] px-4 py-3.5 rounded-md text-sm font-bold tracking-wider uppercase transition-colors shadow-sm">
                {contactItem.name}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}