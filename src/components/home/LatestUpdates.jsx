"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, X, ArrowRight, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../../data';

export default function LatestUpdates() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  // স্লাইডের ডিরেকশন ট্র্যাক করার জন্য (১ মানে নেক্সট, -১ মানে প্রিভিয়াস)
  const [direction, setDirection] = useState(1); 

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev === 0 ? BLOG_POSTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev === BLOG_POSTS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay Effect
  useEffect(() => {
    if (isPaused || selectedPost !== null) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [startIndex, isPaused, selectedPost]);

  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % BLOG_POSTS.length;
      visible.push({ ...BLOG_POSTS[index], originalIndex: index });
    }
    return visible;
  };

  const visiblePosts = getVisiblePosts();

  // স্মুথ অ্যানিমেশনের ভ্যারিয়েন্ট কনফিগারেশন
  const slideVariants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
    })
  };

  return (
    <section className="bg-white text-gray-800 py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden" id="latest-updates">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-brand-gold font-sans font-bold text-xs tracking-widest uppercase block">
              Legal Insights & News
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-brand-navy font-bold tracking-tight uppercase" id="updates_title">
              Latest Updates
            </h2>
            <div className="w-16 h-1 bg-brand-gold" />
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              id="updates_carousel_prev"
              className="p-2.5 rounded-full border border-gray-200 hover:border-brand-gold hover:bg-brand-navy hover:text-white transition-all text-gray-600 shadow-sm cursor-pointer"
              aria-label="Previous Post"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              id="updates_carousel_next"
              className="p-2.5 rounded-full border border-gray-200 hover:border-brand-gold hover:bg-brand-navy hover:text-white transition-all text-gray-600 shadow-sm cursor-pointer"
              aria-label="Next Post"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container - কন্টেইনার লেভেলে ধাক্কা খাওয়া বন্ধ করার জন্য popLayout মোড */}
        <div 
          className="relative min-h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div 
              key={startIndex} // প্রতিবার ইনডেক্স চেঞ্জ হলে পুরো গ্রিড একসাথে স্মুথলি ট্রানজিশন হবে
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} // Professional Cubic Bezier easing
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              id="blog_grid"
            >
              {visiblePosts.map((post) => (
                <article
                  key={post.title}
                  className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-brand-gold/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Image Header wrapper */}
                    <div className="relative overflow-hidden aspect-video bg-gray-100">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy/85 backdrop-blur-sm text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                        In-Depth Review
                      </div>
                    </div>

                    {/* Content Pad */}
                    <div className="p-6 space-y-4">
                      {post.date && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                      )}
                      
                      <h3 className="font-display text-base font-bold text-brand-navy tracking-tight uppercase line-clamp-2 hover:text-brand-gold duration-200" title={post.title}>
                        {post.title}
                      </h3>
                      
                      <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-navy uppercase tracking-wider transition-colors duration-200"
                    >
                      <span>{post.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modal/Lightbox Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 bg-brand-navy/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto" id="blog_modal">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden border border-brand-gold/10 relative my-8"
              >
                {/* Image top bar */}
                <div className="relative h-64 sm:h-80 w-full bg-gray-900">
                  <img 
                    src={selectedPost.imageUrl} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  
                  {/* Close btn */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    id="btn_close_blog_modal"
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors focus:outline-none"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    {selectedPost.date && (
                      <div className="flex items-center gap-1.5 text-xs text-brand-gold font-semibold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{selectedPost.date}</span>
                        <span className="text-white/40">&bull;</span>
                        <span>Legal Intelligence REPORT</span>
                      </div>
                    )}
                    <h3 className="font-display text-lg sm:text-2xl font-bold uppercase leading-tight tracking-wide">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                {/* Actual detailed text */}
                <div className="p-6 sm:p-8 space-y-6 font-sans text-gray-700 leading-relaxed max-h-[50vh] overflow-y-auto">
                  <div className="bg-gray-50 border-l-4 border-brand-gold p-4 italic text-sm text-gray-600 rounded-r-md">
                    {selectedPost.summary}
                  </div>

                  <p className="text-xs sm:text-sm">
                    This specialized report documents ongoing regulatory adjustments and key litigation shifts monitored by Boles Holmes White. Legal briefs, environmental studies, and class-action updates are thoroughly investigated by our state, federal, and administrative attorneys.
                  </p>

                  <p className="text-xs sm:text-sm">
                    Understanding compliance shifts, white-collar boundaries, and class settlements are foundational to safeguarding individual rights and corporate longevity. BHW continues to analyze precedents at the state, federal, and administrative levels in over 25 states.
                  </p>

                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-semibold uppercase text-brand-navy">
                    <span>Published by Boles Holmes White LLC</span>
                    <button
                      onClick={() => alert(`Review: "${selectedPost.title}" - shared link to clipboard.`)}
                      className="inline-flex items-center gap-1 text-xs text-brand-gold hover:text-brand-navy"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>Share Legal Update</span>
                    </button>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}