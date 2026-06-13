"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Calendar, ArrowRight, X, ChevronDown, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../../data';

export default function LatestUpdates() {
  // প্রথমে ৬টি পোস্ট (৩ কলাম x ২ রো) দেখানোর জন্য স্টেট
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedPost, setSelectedPost] = useState(null);

  // Load More বাটনে ক্লিক করলে আরও ৩টি করে পোস্ট বাড়বে
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // বর্তমানে যতগুলো পোস্ট ভিজিবল আছে
  const visiblePosts = BLOG_POSTS.slice(0, visibleCount);
  const hasMorePosts = visibleCount < BLOG_POSTS.length;

  return (
    // স্ক্রিনশটের মতো ডার্ক নেভি ব্যাকগ্রাউন্ড
    <section className="bg-[#1A253B] text-white py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20" id="latest-updates">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Centered like the screenshot) */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white drop-shadow-md" id="updates_title">
            Latest Updates
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Review supreme court decisions, regional regulatory shifts, and in-depth legal intelligence reports.
          </p>
        </div>

        {/* Blog Posts Grid (3 Columns) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="blog_grid"
        >
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header with Next.js Image */}
                  <div className="relative overflow-hidden aspect-video bg-gray-900 w-full">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title} 
                      fill
                      className="object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-md">
                      Legal Brief
                    </div>
                  </div>

                  {/* Content Pad (White background for text contrast) */}
                  <div className="p-6 space-y-4 text-gray-800">
                    {post.date && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </div>
                    )}
                    
                    <h3 className="font-display text-lg font-bold text-brand-navy tracking-tight leading-snug line-clamp-2 group-hover:text-brand-gold transition-colors duration-200" title={post.title}>
                      {post.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Read More Button Area */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-navy uppercase tracking-wider transition-colors duration-200"
                  >
                    <span>{post.actionText || 'Read More'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy font-bold text-sm tracking-widest uppercase rounded transition-all duration-300"
            >
              <span>Load More</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        )}

        {/* Modal/Lightbox Overlay for reading full article */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 bg-brand-navy/90 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto" id="blog_modal">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-2xl max-w-3xl w-full overflow-hidden border border-brand-gold/10 relative my-8"
              >
                {/* Image top bar */}
                <div className="relative h-64 sm:h-80 w-full bg-gray-900">
                  <Image 
                    src={selectedPost.imageUrl} 
                    alt={selectedPost.title} 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Close btn */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    id="btn_close_blog_modal"
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2.5 rounded-full transition-colors focus:outline-none z-10"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
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
                <div className="p-6 sm:p-8 space-y-6 font-sans text-gray-700 leading-relaxed max-h-[50vh] overflow-y-auto custom-scrollbar">
                  <div className="bg-gray-50 border-l-4 border-brand-gold p-4 italic text-sm text-gray-600 rounded-r-md">
                    {selectedPost.summary || selectedPost.excerpt}
                  </div>

                  <p className="text-xs sm:text-sm">
                    {selectedPost.content || "This specialized report documents ongoing regulatory adjustments and key litigation shifts monitored by Boles Holmes White. Legal briefs, environmental studies, and class-action updates are thoroughly investigated by our state, federal, and administrative attorneys."}
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