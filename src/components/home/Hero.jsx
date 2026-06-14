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
 * @param {number} endValue - The target value to count to.
 * @param {number} duration - The duration of the animation in milliseconds.
 * @returns {number} - The current animated value.
 */
function useCountUp(endValue, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Update count based on progress
      setCount(progress * endValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Delay start slightly for visual effect
    const delayId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 200);

    // Clean up on unmount or reset
    return () => {
      clearTimeout(delayId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [endValue, duration]);

  return count;
}

export default function Hero() {
  // Define end values for each counter
  const endValues = {
    chargesResolved: 25000,
    avvoReviews: 880,
    avvoRating: 10,
    endorsements: 44,
    yearsExperience: 32
  };

  // Run the counting animation for each value
  const chargesCount = useCountUp(endValues.chargesResolved);
  const reviewsCount = useCountUp(endValues.avvoReviews);
  const ratingCount = useCountUp(endValues.avvoRating);
  const endorsementsCount = useCountUp(endValues.endorsements);
  const yearsCount = useCountUp(endValues.yearsExperience);

  return (
    <section className="relative w-full flex flex-col z-0 overflow-hidden" id="hero-section">
      
      {/* MAIN HERO BODY: High-resolution background image with overlay */}
      <div className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-[#1a1a1a] overflow-hidden">
        
        {/* Background Image: Next.js Image component for best optimization and avoiding crops */}
        <div className="absolute inset-0">
          <Image 
            src="https://res.cloudinary.com/dsga4gyw9/image/upload/v1781170345/ChatGPT_Image_Jun_11_2026_03_31_58_PM_oid42f.png"
            alt="Alabama Criminal Defense Attorneys Background"
            fill
            priority
            className="object-contain md:object-cover object-[center_15%]"
          />
        </div>
        
        {/* Soft, very light overlay just enough to make white text readable, without hiding the image */}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 bg-[#C92A2A] hover:bg-[#A02020] text-white font-sans font-medium text-sm tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group whitespace-nowrap"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform font-light group-hover:translate-x-1" />
            </Link>
            <Link
              href="/case-review"
              className="inline-flex items-center gap-2.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white font-sans font-medium text-sm tracking-wide px-6 sm:px-8 py-3 sm:py-3.5 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 group whitespace-nowrap"
            >
              <span>Free Case Review</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform font-light group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ==============================================
        COUNTER SECTION: Animating numbers from zero
        ==============================================
      */}
      <div className="relative bg-[#0F1420] text-white py-10 px-4 sm:px-6 lg:px-8 z-10 border-t border-gray-800 shadow-xl">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 sm:gap-6 justify-items-center">
          
          {/* Column 1: Charges Resolved */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(chargesCount).toLocaleString()}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Charges Resolved
            </span>
          </div>

          {/* Column 2: AVVO Reviews */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(reviewsCount)}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              5 Star AVVO Reviews
            </span>
          </div>

          {/* Column 3: AVVO Rating */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {ratingCount.toFixed(1)}
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Perfect AVVO Rating
            </span>
          </div>

          {/* Column 4: Lawyer Endorsements */}
          <div className="w-full flex flex-col items-center text-center border-r border-gray-700 last:border-r-0 md:border-r">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(endorsementsCount)}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Lawyer Endorsements
            </span>
          </div>

          {/* Column 5: Years of Experience */}
          <div className="w-full flex flex-col items-center text-center border-r-0">
            <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              {Math.floor(yearsCount)}+
            </span>
            <span className="block font-sans text-xs sm:text-sm text-gray-300 mt-2">
              Years of Experience
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}