"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

// আপনার দেওয়া অরিজিনাল ক্লাউডিনারি লিংকগুলোর সাথে ডাটা ম্যাপ করা হয়েছে
const PRACTICE_AREAS_DATA = [
  { 
    name: 'Criminal Defense', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324901/Criminal_Defense_wybsoi.jpg' 
  },
  { 
    name: 'DUI Defense', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/DUI_Defense_mxu56q.jpg' 
  },
  { 
    name: 'Civil Lawsuits', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/Civil_Lawsuits_bs638u.jpg' 
  },
  { 
    name: 'Divorce & Family Law', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/Divorce_Family_Law_lgo4sa.jpg' 
  },
  { 
    name: 'Personal Injury', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/Personal_Injury_ue919g.jpg' 
  },
  { 
    name: 'Wills and Probate', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324901/probate_yzfnjw.jpg' 
  },
  { 
    name: 'White Collar Defense', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/White_Collar_Defense_bhpna6.webp' 
  },
  { 
    name: 'Administrative Law', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/Administrative_Law_wvmw0q.jpg' 
  },
  { 
    name: 'Business Litigation', 
    image: 'https://res.cloudinary.com/dp08caz1r/image/upload/v1781324900/Business_Litigation_mlbyhy.jpg' 
  }
];

export default function PracticeAreas() {
  // শুরুতে ৬টি আইটেম দেখাবে
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleAreas = PRACTICE_AREAS_DATA.slice(0, visibleCount);
  const hasMore = visibleCount < PRACTICE_AREAS_DATA.length;

  const handleViewMore = () => {
    // প্রতি ক্লিকে আরও ৩টি করে আইটেম লোড হবে
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="bg-[#1E263D] py-24 px-4 sm:px-6 lg:px-8" id="practice-areas">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-wide">
            Our Practice Areas
          </h2>
        </div>

        {/* Grid Layout (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleAreas.map((area, index) => (
              <motion.div
                key={area.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="h-full"
              >
                {/* 
                  Link ট্যাগ দিয়ে র্যাপিং করা হয়েছে যাতে পুরো কার্ডটিতে 
                  ক্লিক করলেই /personal পেজে নিয়ে যায়।
                */}
                <Link href="/personal" className="group flex flex-col h-full block">
                  
                  {/* Image Section (With dynamic zoom and overlay effect) */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111827] shadow-lg">
                    <Image 
                      src={area.image} 
                      alt={area.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Subtle inner shadow for premium look */}
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                  </div>
                  
                  {/* Text Section (Hover করলে সলিড হোয়াইট হয়ে যাবে) */}
                  <div className="p-5 sm:p-6 text-center transition-all duration-300 bg-transparent group-hover:bg-white flex-grow flex items-center justify-center transform group-hover:-translate-y-1 shadow-xl">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#1E263D] tracking-wider transition-colors duration-300 uppercase">
                      {area.name}
                    </h3>
                  </div>
                  
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleViewMore}
              className="px-10 py-3 bg-transparent border-2 border-white text-white font-bold text-xs sm:text-sm tracking-widest hover:bg-white hover:text-[#1E263D] transition-colors duration-300 transform hover:-translate-y-1 active:translate-y-0"
            >
              View More
            </button>
          </div>
        )}

      </div>
    </section>
  );
}