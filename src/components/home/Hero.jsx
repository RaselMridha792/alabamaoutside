"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Custom hook to animate counting numbers.
 */
function useCountUp(endValue, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(progress * endValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const delayId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(delayId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return count;
}

export default function Hero() {
  // ক্লায়েন্টের রিকয়ারমেন্ট অনুযায়ী নতুন ডাটা 
  const endValues = {
    casesResolved: 25000,
    countiesServed: 67,
    statesRepresented: 25,
    avvoRating: 10
  };

  const casesCount = useCountUp(endValues.casesResolved);
  const countiesCount = useCountUp(endValues.countiesServed);
  const statesCount = useCountUp(endValues.statesRepresented);
  const ratingCount = useCountUp(endValues.avvoRating);

  return (
    <section className="relative w-full flex flex-col z-0 overflow-hidden" id="hero-section">
      
      {/* MAIN HERO BODY */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        
        <div className="absolute inset-0">
          <Image 
            src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781763917/9c6ad7e8-c3ad-42b5-b444-f6c54f4734f1_ptjfv3.png"
            alt="Alabama Criminal Defense Attorneys Background"
            fill
            priority
            className="object-contain md:object-cover object-[center_15%]"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/25" />
        
        {/* Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20 sm:mt-24 md:mt-28 pb-16 sm:pb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2 sm:space-y-4 mb-6 sm:mb-8"
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight drop-shadow-lg">
              Protect Your Priorities
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 mb-10 sm:mb-12"
          >
            <p className="font-sans text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto tracking-wide font-semibold drop-shadow">
              The law firm of Boles Holmes White has a long history of protecting our clients.
            </p>
            <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 max-w-3xl mx-auto tracking-wide drop-shadow">
              We determine the risks our clients face and develop a plan to protect their reputation, financial strength, business relationships, freedom, and future.
            </p>
          </motion.div>

          {/* বাটনের টেক্সট আপডেট করা হয়েছে (No "Free" word) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#C92A2A] hover:bg-[#A02020] text-white font-sans font-medium text-sm tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group whitespace-nowrap"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform font-light group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-sans font-medium text-sm tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group whitespace-nowrap"
            >
              <span>Contact Our Office</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform font-light group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ==============================================
        COUNTER SECTION: Updated with Client's 5 Stats
        ==============================================
      */}
      <div className="relative bg-[#0F1420] text-white py-10 px-4 sm:px-6 lg:px-8 z-10 border-t border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 sm:gap-6 justify-items-center">
          
          {/* Stat 1: Cases Resolved */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(casesCount).toLocaleString()}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Cases Resolved
            </span>
          </div>

          {/* Stat 2: Alabama Counties */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(countiesCount)}
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Alabama Counties Served
            </span>
          </div>

          {/* Stat 3: US States */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(statesCount)}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              US States Represented In
            </span>
          </div>

          {/* Stat 4: AVVO Rating */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {ratingCount.toFixed(1)}
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Perfect AVVO Rating
            </span>
          </div>

          {/* Stat 5: Highest AV Rating by Martindale */}
          <div className="w-full flex flex-col items-center justify-center text-center border-r-0">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              AV®
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Highest Rating by Martindale
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}