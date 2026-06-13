/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldAlert, Star } from 'lucide-react';
import { FEATURED_REPORTERS } from '../../data';

export default function FeaturedIn() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-gold/10 scroll-mt-20" id="featured-in">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
          <div className="flex justify-center items-center gap-1.5 text-brand-gold uppercase text-xs tracking-widest font-bold">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>National Credibility</span>
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
          </div>
          <h2 className="font-display text-lg sm:text-xl text-brand-navy font-semibold tracking-widest uppercase">
            Featured In
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Gray/White Logo Layout Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
          {FEATURED_REPORTERS.map((reporter, index) => (
            <div 
              key={reporter.name}
              className="bg-brand-navy/10 p-3.5 sm:p-5 w-full h-16 sm:h-20 rounded-lg flex items-center justify-center border border-white/10 transition-all duration-350 group shadow-lg hover:-translate-y-1 hover:shadow-xl hover:border-brand-gold/40"
              id={`featured_logo_${index}`}
            >
              <img
                src={reporter.logo}
                alt={`${reporter.name} Press Feature Logo`}
                className="max-h-10 max-w-[90%] object-contain filter grayscale hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Subtle Bottom Trust Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-gold" />
            <span>Nationally Highlighted Litigation Performance</span>
          </div>
          <span className="hidden sm:inline text-white/15">|</span>
          <p>
            Boles Holmes White LLC is trusted nationwide with criminal, transactional, and regulatory actions.
          </p>
        </div>

      </div>
    </section>
  );
}