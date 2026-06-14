"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseReviewsHero() {
  return (
    <section className="relative min-h-[55vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center text-white overflow-hidden bg-[#323f53]">
      
      {/* Background Image - Perfectly Responsive */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781170345/ChatGPT_Image_Jun_11_2026_03_31_58_PM_oid42f.png"
          alt="Boles Holmes White Client Reviews Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-top opacity-50"
          unoptimized
        />
        {/* Smooth Dark Gradient Overlay for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]/95" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 mt-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide text-white drop-shadow-lg mb-4 sm:mb-6 leading-tight"
        >
          What Our Clients Say About Boles Holmes White LLC
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-xs sm:text-sm md:text-base lg:text-lg text-[#C5A85C] uppercase tracking-widest font-bold mb-6 sm:mb-8 px-2"
        >
          Trusted by Individuals and Businesses Throughout Alabama — Here Why
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 text-justify sm:text-center px-2 sm:px-0"
        >
          At Boles Holmes White LLC, our greatest measure of success is the trust our clients place in us — and the outcomes we help them achieve. Whether you are navigating a complex criminal defense matter, protecting your business, working through a difficult divorce, or facing a government investigation, our team is committed to providing the kind of representation that earns not just results, but lasting confidence.
          <br className="hidden sm:block" /><br className="hidden sm:block" />
          The reviews and testimonials on this page come directly from real clients who have experienced our firm firsthand. We invite you to read their words and discover what sets BHW apart from other Alabama law firms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] font-bold text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <span>Schedule a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}