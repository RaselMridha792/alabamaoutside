"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image'; 
import Link from 'next/link'; // ✅ Link ইমপোর্ট করা হয়েছে ডায়নামিক রাউটিং এর জন্য
import { Search, Calendar, AlertCircle, BookOpen, ChevronDown } from 'lucide-react';
import { BLOG_POSTS } from '../../data'; // ✅ আপনার ডাটা ফাইল থেকে ব্লগ ড্যাটা ইমপোর্ট করা হলো

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  // ক্যাটাগরি লিস্ট ডায়নামিকভাবে তৈরি করা হচ্ছে (আপনি চাইলে ম্যানুয়ালিও রাখতে পারেন)
  const categoriesList = [
    { name: 'Civil Suits', count: 5 },
    { name: 'Criminal Defense', count: 37 },
    { name: 'DUI', count: 54 },
    { name: 'Estate Planning', count: 1 },
    { name: 'Family Law', count: 9 },
    { name: 'Pharmaceuticals', count: 3 },
    { name: 'Probate Law', count: 3 },
    { name: 'Trademark Law', count: 1 },
    { name: 'Uncategorized', count: 2 },
    { name: 'White Collar Crime', count: 2 }
  ];

  // Filter and Search logic (এখন BLOG_POSTS থেকে ফিল্টার হবে)
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      // যেহেতু আপনার ডাটায় সরাসরি excerpt নেই, তাই content থেকেই সার্চ হবে
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      // আপনার ডাটায় ক্যাটাগরি ফিল্ড না থাকলে এটি স্কিপ করতে পারেন অথবা ডাটায় ক্যাটাগরি যুক্ত করতে পারেন
      const matchesCategory = !selectedCategory || (post.category && post.category === selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePageClick = (page) => {
    setCurrentPageNum(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // একটি হেল্পার ফাংশন যা HTML কন্টেন্ট থেকে প্রথম ২০০ ক্যারেক্টার বের করে excerpt হিসেবে দেখাবে
  const extractExcerpt = (htmlContent) => {
    const textContent = htmlContent.replace(/<[^>]+>/g, ''); // HTML ট্যাগ রিমুভ করবে
    return textContent.substring(0, 150) + '...';
  };

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="blog-posts-page-view">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="blog-hero">
        <div className="absolute inset-0 opacity-85">
          <Image 
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg"
            alt="Courthouse Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/60 to-brand-navy/95" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/80 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Legal Intelligence Portal</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Our Blog
          </motion.h1>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="blog-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* LEFT COLUMN: Blog Cards Grid */}
          <section className="lg:col-span-8 flex flex-col space-y-8" id="blog-left-col">
            
            {filteredPosts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-gray-200 shadow-sm space-y-4">
                <AlertCircle className="w-12 h-12 text-brand-gold mx-auto" />
                <h3 className="font-display text-lg font-bold text-brand-navy uppercase">No Articles Found</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                  We could not locate any law publications matching {searchQuery} under the selected category. Expand your parameters or clear the query.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="px-4 py-2 bg-brand-navy text-white text-xs font-semibold uppercase rounded hover:bg-brand-gold hover:text-brand-navy transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="blog-posts-grid">
                {filteredPosts.map((post) => (
                  <motion.article 
                    layoutId={`post_card_${post.id}`}
                    key={post.id}
                    className="bg-white rounded-lg border border-gray-150 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        <span className="px-2 py-0.5 bg-slate-100 text-brand-navy rounded-sm">{post.category || 'Law Updates'}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand-gold" />
                          <span>June 2024</span>
                        </div>
                      </div>

                      <h3 className="font-display text-[15px] sm:text-base font-bold text-brand-navy group-hover:text-brand-gold tracking-tight leading-snug uppercase transition-colors line-clamp-3">
                        {post.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-gray-600 line-clamp-4 leading-relaxed text-justify">
                        {extractExcerpt(post.content)}
                      </p>
                    </div>

                    {/* ✅ READ MORE Button - Now links dynamically to single page */}
                    <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-navy uppercase tracking-wider transition-colors duration-200"
                      >
                        <span>READ MORE »</span>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="pt-12 pb-4 border-t border-gray-150 flex justify-center items-center select-none overflow-x-auto" id="blog-pagination">
              <nav className="inline-flex flex-wrap sm:flex-nowrap justify-center -space-x-px gap-1.5 text-xs uppercase" aria-label="Pagination">
                <button 
                  onClick={() => handlePageClick(1)}
                  className="px-3 py-2 rounded border border-gray-200 bg-white hover:border-brand-gold text-gray-500 hover:text-brand-navy transition-all cursor-pointer font-semibold whitespace-nowrap"
                >
                  « Previous
                </button>
                <button 
                  onClick={() => handlePageClick(1)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 1 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 1
                </button>
                <button 
                  onClick={() => handlePageClick(2)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 2 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 2
                </button>
                <button 
                  onClick={() => handlePageClick(2)}
                  className="px-3 py-2 rounded border border-gray-200 bg-white hover:border-brand-gold text-gray-500 hover:text-brand-navy transition-all cursor-pointer font-semibold whitespace-nowrap"
                >
                  Next »
                </button>
              </nav>
            </div>

          </section>

          {/* RIGHT SIDEBAR */}
          <section className="lg:col-span-4 space-y-8 lg:sticky lg:top-28" id="blog-sidebar-col">
            <div className="bg-[#DFC483] p-6 sm:p-7 rounded shadow-md border border-amber-300 text-brand-navy space-y-8" id="blog-sidebar-container">
              
              {/* SEARCH BOX */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  SEARCH
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..." 
                    className="w-full bg-white text-gray-800 placeholder-gray-400 pl-4 pr-10 py-2.5 rounded text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-navy border border-transparent shadow-inner"
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* CATEGORIES SECTION */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  CATEGORIES
                </h3>
                <ul className="space-y-2 text-xs font-semibold">
                  {categoriesList.map((cat, idx) => {
                    const isSelected = selectedCategory === cat.name;
                    return (
                      <li key={idx} className="flex justify-between items-center group">
                        <button
                          onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                          className={`text-left hover:text-white transition-colors flex items-center gap-1.5 select-none w-full ${isSelected ? 'text-white font-extrabold shadow-sm' : 'text-brand-navy/85'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-brand-navy transition-all ${isSelected ? 'bg-white scale-125' : 'group-hover:bg-white group-hover:scale-125'}`} />
                          <span className="flex-1">{cat.name}</span>
                          <span>({cat.count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* RECENT POSTS SECTION */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  RECENT POSTS
                </h3>
                <ul className="space-y-3 text-[11px] font-bold text-brand-navy/90 leading-tight">
                  {BLOG_POSTS.slice(0, 5).map((post) => (
                    <li key={post.id} className="border-b border-brand-navy/5 pb-2 last:border-b-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-left hover:text-white duration-250 block hover:translate-x-0.5 transition-transform"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHIVES SECTION */}
              <div className="space-y-3">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  ARCHIVES
                </h3>
                <div className="relative font-bold">
                  <select 
                    defaultValue=""
                    className="w-full bg-white text-gray-800 pl-4 pr-10 py-2.5 rounded text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-navy hover:border-brand-navy appearance-none"
                  >
                    <option value="" disabled>Select Month</option>
                    <option value="June 2024">June 2024</option>
                    <option value="May 2024">May 2024</option>
                    <option value="April 2024">April 2024</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}