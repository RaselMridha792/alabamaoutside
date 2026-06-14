"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS_DATA = [
  {
    name: "Corporate Client",
    feedback: "Boles Holmes White LLC provided us with 'big firm experience' and customized representation while maintaining an incredible level of accessibility. Their dedicated approach to our contract negotiation and compliance matters truly set them apart.",
    rating: 5,
    caseType: "Corporate & General Counsel"
  },
  {
    name: "Litigation Client",
    feedback: "When our business relationship was threatened by a complex contract breach, their trial attorneys offered timely, creative solutions and sound commercial advice. They handled our litigation with absolute precision.",
    rating: 5,
    caseType: "Business Litigation Case"
  },
  {
    name: "Individual Representation Client",
    feedback: "They gave my family personal and individualized attention during a very stressful civil dispute. They truly listened to our goals, fully identified the legal issues, and protected our best interests in the court of law.",
    rating: 5,
    caseType: "Civil Lawsuit Defense"
  }
];

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // অটো-প্লে ইফেক্ট (প্রতি ৫ সেকেন্ড পর পর নিজে নিজেই স্লাইড হবে)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // মাউস দিয়ে ড্র্যাগ বা সোয়াইপ হ্যান্ডেল করার লজিক
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50; // কতটুকু টানলে স্লাইড চেঞ্জ হবে (পিক্সেল)
    
    if (info.offset.x < -swipeThreshold) {
      // বামে টানলে নেক্সট রিভিউ আসবে
      setDirection(1);
      setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
    } else if (info.offset.x > swipeThreshold) {
      // ডানে টানলে প্রিভিয়াস রিভিউ আসবে
      setDirection(-1);
      setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
    }
  };

  const currentReview = REVIEWS_DATA[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 150 : -150,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -150 : 150,
    })
  };

  return (
    <section className="bg-[#0A192F] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="client-reviews">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-brand-gold font-sans font-bold text-xs tracking-widest uppercase block">
            Client Testimonials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Client Testimonials
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        {/* Slider Container (মাউস আনলে অটো-প্লে পজ হবে) */}
        <div 
          className="relative min-h-[340px] sm:min-h-[260px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              
              // ✅ Framer Motion Drag Capabilities (মাউস ও টাচ কন্ট্রোল)
              drag="x" 
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white p-8 sm:p-10 rounded-xl border border-white/5 shadow-2xl w-full flex flex-col justify-between relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 w-16 h-16 text-brand-navy pointer-events-none stroke-[1.5]" />

              <div className="space-y-6">
                {/* Ratings */}
                <div className="flex gap-1">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="font-serif text-base sm:text-lg md:text-xl text-brand-navy italic leading-relaxed text-justify sm:text-left pointer-events-none">
                  “{currentReview.feedback}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pointer-events-none">
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-brand-navy tracking-wide">
                    {currentReview.name}
                  </h4>
                  <span className="text-[10px] sm:text-xs font-semibold text-brand-gold uppercase tracking-wider block mt-0.5">
                    {currentReview.caseType}
                  </span>
                </div>
                
                <span className="text-[9px] uppercase tracking-widest bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded font-mono font-medium">
                  Verified Case Review
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Active Pagination Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS_DATA.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-350 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}