"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// যদি '@/data' কাজ না করে, তবে এর বদলে '../../../../data' ব্যবহার করবেন
import { BLOG_POSTS } from '../../../data'; 

export default function SingleBlogPage() {
  // useParams() হুক ব্যবহার করে URL থেকে ডায়নামিক slug ধরা হচ্ছে
  const params = useParams();
  const slug = params?.slug;
  
  // Find the current blog post based on slug
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[postIndex];

  // If post not found, trigger 404 page
  if (!post) {
    return notFound();
  }

  // Next/Prev Navigation Logic
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  // Contact Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    lawArea: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    // Handle API submission here
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      
      {/* ==============================================
          HERO SECTION
      ============================================== */}
      <section className="relative w-full h-[40vh] sm:h-[45vh] flex items-center justify-center bg-[#181515] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-40 grayscale" 
            unoptimized
          />
        </div>
        
        {/* Title Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight px-4">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ==============================================
          MAIN CONTENT & SIDEBAR
      ============================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Blog Content */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl font-bold text-[#1A1A1A] mb-8 leading-snug">
              {post.title}
            </h2>
            
            {/* 
              Render HTML content directly.
            */}
            <div 
              className="prose prose-lg max-w-none text-gray-600 leading-relaxed text-justify mb-16
                         prose-headings:font-display prose-headings:font-bold prose-headings:text-[#1A1A1A]
                         prose-p:mb-6 prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Pagination / Prev-Next Links */}
            <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="group flex items-center gap-3 text-left max-w-[45%]">
                  <ChevronLeft className="w-8 h-8 text-gray-400 group-hover:text-[#C5A85C] transition-colors shrink-0" />
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Previous</span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A192F] line-clamp-2 transition-colors">
                      {prevPost.title}
                    </span>
                  </div>
                </Link>
              ) : <div className="w-1/2" />} 

              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group flex items-center justify-end gap-3 text-right max-w-[45%]">
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Next</span>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-[#0A192F] line-clamp-2 transition-colors">
                      {nextPost.title}
                    </span>
                  </div>
                  <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-[#C5A85C] transition-colors shrink-0" />
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar Form */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-[#EAE8DD] p-8 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-[#C5A85C] mb-6 text-center">
                Speak to an Attorney
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 italic">
                    <span className="text-red-500">*</span> First name
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#C5A85C] bg-white"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 italic">
                    <span className="text-red-500">*</span> Last name
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#C5A85C] bg-white"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 italic">
                    <span className="text-red-500">*</span> Phone (Primary)
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#C5A85C] bg-white"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <p className="text-[9px] text-gray-500 leading-tight my-2">
                  By providing your phone number, you consent to receive automated SMS/text messages from Boles Holmes White LLC. Consent is not a condition of purchase. Message & data rates may apply.
                </p>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 italic">
                    <span className="text-red-500">*</span> Email (Primary)
                  </label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#C5A85C] bg-white"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 italic">
                    <span className="text-red-500">*</span> What BEST describes the area of law you are contacting us about?
                  </label>
                  <select 
                    required
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-[#C5A85C] bg-white text-gray-700 text-sm"
                    value={formData.lawArea}
                    onChange={e => setFormData({...formData, lawArea: e.target.value})}
                  >
                    <option value="" disabled>Select...</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="white-collar">White Collar Crime</option>
                    <option value="family">Family Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button 
                    type="submit"
                    className="bg-[#66A16B] hover:bg-[#528A57] text-white font-bold text-sm uppercase px-8 py-2.5 transition-colors"
                  >
                    SUBMIT
                  </button>
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded flex items-center justify-center">
                    <span className="text-[10px] text-blue-500 font-bold rotate-180">↻</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}