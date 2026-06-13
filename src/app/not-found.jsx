"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Scale, Home, PhoneCall } from 'lucide-react';
import Link from 'next/link'; // Next.js Link ইমপোর্ট করা হলো

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-navy text-white px-4 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Scale className="w-[600px] h-[600px] text-brand-gold" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        
        {/* Animated Badge / Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy-light/80 border border-brand-gold/30 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2 shadow-md">
            Error Code: 404
          </span>
          <h1 className="font-display text-7xl sm:text-9xl font-black tracking-extrawide text-brand-gold drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
            Case Dismissed &bull; Page Not Found
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed max-w-md mx-auto">
            The legal path or document you are trying to access does not exist or has been permanently moved from our servers. 
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          {/* Return to Home using Next.js Link */}
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-sm transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          {/* Contact Counsel using Next.js Link */}
          <Link
            href="/#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/30 hover:border-brand-gold text-white font-bold text-xs tracking-widest uppercase px-6 py-4 rounded-sm transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4 text-brand-gold" />
            <span>Contact Counsel</span>
          </Link>
        </motion.div>

        {/* Subtle Bottom Banner */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] sm:text-xs font-sans tracking-wide uppercase text-gray-400 pt-8"
        >
          Boles Holmes White LLC &bull; Confidential & Secure Legal Network
        </motion.p>

      </div>
    </section>
  );
}