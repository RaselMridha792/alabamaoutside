'use client'; // React Hooks ব্যবহারের জন্য এটি প্রয়োজন

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// // lucide-react থেকে আইকন ইমপোর্ট করা হলো
// import { ChevronDown, Facebook, Instagram, Linkedin } from 'lucide-react';


import { ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // স্ক্রল ইভেন্ট হ্যান্ডেল করার জন্য useEffect হুক
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // পেজ স্ক্রল হলে true
      } else {
        setIsScrolled(false); // পেজের শুরুতে থাকলে false
      }
    };

    // লিসেনার যুক্ত করা হলো
    window.addEventListener('scroll', handleScroll);

    // ক্লিন-আপ ফাংশন (কম্পোনেন্ট আনমাউন্ট হলে লিসেনার রিমুভ করা হবে)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // নেভিগেশন লিংকগুলোর গঠন পরিবর্তন করা হলো (ড্রপডাউন নির্দেশ করার জন্য)
  const navLinks = [
    { name: 'About', href: '#', hasDropdown: false },
    { name: 'Attorneys', href: '#', hasDropdown: false },
    { name: 'Personal', href: '#', hasDropdown: true },
    { name: 'Professional', href: '#', hasDropdown: true },
    { name: 'Blog', href: '#', hasDropdown: false },
    { name: 'Media', href: '#', hasDropdown: false },
    { name: 'Contact', href: '#', hasDropdown: false },
  ];

  return (
    // মেইন হেডার কন্টেইনার - এটি fixed থাকবে
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      {/* ১. টপ-বার (সলিড কালো) - এটি স্ক্রল করলে লুকিয়ে যাবে */}
      <div
        className={`bg-black text-gray-200 text-xs transition-all duration-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-11 opacity-100 flex items-center'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-12 flex items-center justify-between">
          {/* বাম দিকের তথ্য */}
          <div className="flex items-center gap-1.5 font-sans">
            <span>Birmingham, AL 35203</span>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 8"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
                205-502-2000
            </span>
          </div>
          {/* ডান দিকের সোশ্যাল আইকন (সাদা স্কয়ার ব্যাকগ্রাউন্ডে) */}
          <div className="flex items-center gap-2 text-sm">
            <span className="cursor-pointer bg-white text-black p-1.5 rounded-sm hover:opacity-80 transition-opacity"><FaFacebookF size={14} /></span>
            <span className="cursor-pointer bg-white text-black p-1.5 rounded-sm hover:opacity-80 transition-opacity"><FaInstagram size={14} /></span>
            <span className="cursor-pointer bg-white text-black p-1.5 rounded-sm hover:opacity-80 transition-opacity"><FaLinkedinIn size={14} /></span>
          </div>
        </div>
      </div>

      {/* ২. মেইন নেভিগেশন (সাদা ব্যাকগ্রাউন্ড) - এটি কম্প্যাক্ট হবে */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2' // স্ক্রল করার পর সলিড সাদা এবং ছোট প্যাডিং
            : 'bg-[#fcfcfc] py-4' // ডিফল্ট হালকা ব্যাকগ্রাউন্ড এবং বেশি প্যাডিং
        }`}
      >
        <div className="container mx-auto py-4 px-4 lg:px-12 flex items-center justify-between">
          
          {/* লোগো (বামে) */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781089132/613bc307f40b1cafd5e5dcff_BHW_GOLD-straight-across-p-500_xrt2wi.png"
              alt="Boles Holmes White LLC Logo"
              width={260} // লোগোর উইডথ একটু কমানো হয়েছে কম্প্যাক্টনেসের জন্য
              height={45}
              priority // ইমেজটি দ্রুত লোড করার জন্য
              className="object-contain"
            />
          </Link>

          {/* মেনু লিংকসমূহ (ডানদিকে) */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-[16px] font-medium tracking-wider text-black hover:text-[#d4af37] px-3 py-1 transition-colors flex items-center gap-1"
              >
                {link.name}
                {/* ড্রপডাউন আইকন (কন্ডিশনাল) */}
                {link.hasDropdown && <ChevronDown size={14} className="text-black" />}
              </Link>
            ))}
          </div>

          {/* মোবাইল মেনু বাটন (শুধুমাত্র মোবাইলে দেখাবে) */}
          <button className="lg:hidden text-black p-2 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;