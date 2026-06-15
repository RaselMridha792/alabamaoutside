"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link'; // ✅ ডায়নামিক রাউটিং এর জন্য Link ইমপোর্ট করা হয়েছে
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data';

export default function LatestUpdates() {
  // আপনার রিকোয়ারমেন্ট অনুযায়ী শুধুমাত্র প্রথম ৬টি পোস্ট দেখানো হবে
  const visiblePosts = BLOG_POSTS.slice(0, 6);

  // ডায়নামিক URL (Slug) তৈরি করার ফাংশন (যাতে 404 Error না আসে)
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  return (
    <section className="bg-[#1A253B] text-white py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20" id="latest-updates">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white drop-shadow-md" id="updates_title">
            Latest Updates
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto" />
          <p className="text-gray-300 font-sans text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Review supreme court decisions, regional regulatory shifts, and in-depth legal intelligence reports.
          </p>
        </div>

        {/* Blog Posts Grid (3 Columns, Exactly 6 Items) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="blog_grid"
        >
          <AnimatePresence mode="popLayout">
            {visiblePosts.map((post, index) => {
              // ডায়নামিক স্লাগ তৈরি করা হচ্ছে
              const postSlug = post.slug || generateSlug(post.title);

              return (
                <motion.article
                  key={post.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-brand-gold/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header with Next.js Image */}
                    <div className="relative overflow-hidden aspect-video bg-gray-900 w-full">
                      <Image 
                        src={post.imageUrl || post.heroImage} // ডাটা ফাইলের প্রপার্টি অনুযায়ী হ্যান্ডেল করা হয়েছে
                        alt={post.title} 
                        fill
                        className="object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm text-brand-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-md">
                        Legal Brief
                      </div>
                    </div>

                    {/* Content Pad */}
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
                        {post.summary || post.excerpt || "Click read more to view the full details of this legal update."}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button Area (Now a Link to the Dynamic Page) */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/blog/${postSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-navy uppercase tracking-wider transition-colors duration-200"
                    >
                      <span>{post.actionText || 'Read More'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#C5A85C] text-[#0A192F] hover:bg-white hover:text-[#0A192F] font-bold text-sm tracking-widest uppercase rounded shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}