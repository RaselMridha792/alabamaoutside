"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Image from 'next/image';
import { Award, Star } from 'lucide-react';
import { FEATURED_REPORTERS } from '../../data';

export default function FeaturedIn() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100 scroll-mt-20" id="featured-in">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <div className="flex justify-center items-center gap-1.5 text-brand-gold uppercase text-xs tracking-widest font-bold">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>National Credibility</span>
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
          </div>
          <h2 className="font-display text-lg sm:text-2xl text-brand-navy font-bold tracking-widest uppercase">
            Featured In
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Logo Layout Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
          {FEATURED_REPORTERS.map((reporter, index) => (
            <div 
              key={reporter.name}
              className="relative w-full h-20 sm:h-24 bg-slate-50 rounded-lg flex items-center justify-center border border-gray-200 transition-all duration-300 group shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-brand-gold/50 overflow-hidden px-4 py-2"
              id={`featured_logo_${index}`}
            >
              {/* Next.js Image Component - No Grayscale, 100% Clear */}
              <div className="relative w-full h-full">
                <Image
                  src={reporter.logo}
                  alt={`${reporter.name} Press Feature Logo`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  unoptimized // এক্সটার্নাল ডোমেইন থেকে লোগো আসার কারণে এটি সেফটি হিসেবে দেওয়া হলো
                />
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Bottom Trust Bar */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-gold" />
            <span className="text-brand-navy font-bold">Nationally Highlighted Litigation Performance</span>
          </div>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p>
            Boles Holmes White LLC is trusted nationwide with criminal, transactional, and regulatory actions.
          </p>
        </div>

      </div>
    </section>
  );
}