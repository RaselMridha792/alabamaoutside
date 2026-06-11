"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, UserCheck, ShieldCheck, ArrowUpRight, Scale, Sparkles } from 'lucide-react';
import { PRACTICE_AREAS } from '../../data';

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState('personal');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = PRACTICE_AREAS[activeTab];

  // Helper to determine match for searching
  const filteredItems = currentCategory.items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-[#FAF9F6] text-gray-800 py-32 px-4 sm:px-6 lg:px-8 border-y border-gray-100 scroll-mt-20" id="practice-areas">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-gold font-sans font-bold text-xs tracking-widest uppercase block">
            Practice Specialization
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-navy font-bold tracking-tight uppercase" id="practice_title">
            Our Practice Areas
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
            Choose whether you require individual representation or state/interstate corporate representation. Search below to filter our extensive litigation specialities.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Controller Tabs & Search */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 space-y-8 sticky top-24">
            
            {/* Category Select Toggles */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Select Advisory Stream</span>
              
              <button
                onClick={() => { setActiveTab('personal'); setSearchQuery(''); }}
                id="btn_tab_personal"
                className={`flex items-center gap-4 p-4 rounded-md transition-all text-left border ${
                  activeTab === 'personal'
                    ? 'bg-brand-navy border-brand-gold text-white shadow-md'
                    : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className={`p-2.5 rounded-md ${activeTab === 'personal' ? 'bg-brand-gold/20 text-brand-gold' : 'bg-gray-200 text-gray-500'}`}>
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Personal</h3>
                  <p className="text-xs opacity-80 mt-0.5">Civil & Criminal Individual Representation</p>
                </div>
              </button>

              <button
                onClick={() => { setActiveTab('professional'); setSearchQuery(''); }}
                id="btn_tab_professional"
                className={`flex items-center gap-4 p-4 rounded-md transition-all text-left border ${
                  activeTab === 'professional'
                    ? 'bg-brand-navy border-brand-gold text-white shadow-md'
                    : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className={`p-2.5 rounded-md ${activeTab === 'professional' ? 'bg-brand-gold/20 text-brand-gold' : 'bg-gray-200 text-gray-500'}`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm uppercase tracking-wider">Professional</h3>
                  <p className="text-xs opacity-80 mt-0.5">Corporate Litigation & Compliance</p>
                </div>
              </button>
            </div>

            {/* Quick Interactive Search */}
            <div className="space-y-2">
              <label htmlFor="practice-search" className="text-xs font-semibold text-gray-400 tracking-wider uppercase block">
                Direct Search Specialties
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                <input
                  id="practice-search"
                  type="text"
                  placeholder="e.g. White Collar, Licensing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 text-sm pl-11 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:bg-white transition-all text-gray-800"
                />
              </div>
              {searchQuery && (
                <div className="text-[11px] text-brand-gold-dark font-medium flex justify-between">
                  <span>Found {filteredItems.length} matching areas</span>
                  <button onClick={() => setSearchQuery('')} className="underline hover:text-brand-navy">Clear search</button>
                </div>
              )}
            </div>

            {/* Static Highlight Box */}
            <div className="p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-md text-xs text-gray-600 italic">
              Our civil and regulatory lawyers have defended state and federal challenges in over 25 states.
            </div>

          </div>

          {/* Right Block: Content Cards and Items Grid */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Overview Card */}
            <div className="bg-brand-navy text-white p-8 rounded-lg shadow-xl border-l-4 border-brand-gold relative overflow-hidden">
              <div className="absolute right-4 top-4 text-white/[0.03] pointer-events-none">
                <Scale className="w-32 h-32" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <span className="text-brand-gold uppercase text-xs tracking-widest font-bold">Category Scope</span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {currentCategory.title} Counsel
                </h3>
                <p id={`practice_category_desc_${activeTab}`} className="font-serif text-base sm:text-lg text-brand-gold-light italic leading-relaxed">
                  {currentCategory.description}
                </p>
              </div>
            </div>

            {/* Items Grid */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-2">Practice Specialties & Focus</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item) => (
                    <motion.div
                      layout
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="group bg-white p-4 rounded-md border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300 flex justify-between items-center"
                      id={`practice_item_${item.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full group-hover:scale-150 transition-transform" />
                        <span className="font-sans font-medium text-sm sm:text-base text-gray-800 group-hover:text-brand-navy transition-colors">
                          {item}
                        </span>
                      </div>
                      <a href="#contact" className="text-gray-300 group-hover:text-brand-gold transition-colors duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </motion.div>
                  ))}
                  
                  {filteredItems.length === 0 && (
                    <div className="col-span-2 text-center py-10 bg-white border border-dashed border-gray-200 rounded-md text-gray-500">
                      No matching practice areas found. Try a different search term or check both columns.
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}