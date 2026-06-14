"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Star, Quote, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import CaseReviewsHero from '@/components/CaseReview/CaseReviewsHero';



const CLIENT_REVIEWS = [
  {
    name: "Christopher M.",
    title: "Highly professional and responsive",
    text: "They explained everything clearly and kept me updated throughout my case. I felt confident from day one. Attorney White and his team are amazing. They were there for my family and me from the very start.",
    stars: 5,
    date: "2 months ago"
  },
  {
    name: "David S.",
    title: "Best defense attorney experience",
    text: "Boles Holmes White saved my life! My charges were serious, but they handled everything with care and reduced the impact on my record. Mr. White was able to get my case dismissed. If you need a lawyer who will fight for you, call them!",
    stars: 5,
    date: "4 months ago"
  },
  {
    name: "John C.",
    title: "Strong legal support",
    text: "They actually listened to my side of the story and built a strong defense strategy. If you are looking for an attorney I highly recommend Boles Holmes White! They treat you like family.",
    stars: 5,
    date: "5 months ago"
  },
  {
    name: "D.H.",
    title: "Excellent communication and results",
    text: "Mr. Boles is an excellent attorney. Very professional and down to earth. I was very nervous about my case but he reassured me and kept me informed every step of the way.",
    stars: 5,
    date: "6 months ago"
  },
  {
    name: "Anthony L.",
    title: "Outstanding law firm",
    text: "Outstanding law firm. They really care about their clients and work tirelessly to get the best outcome. I highly recommend them to anyone facing white collar or criminal charges.",
    stars: 5,
    date: "8 months ago"
  },
  {
    name: "Sarah W.",
    title: "Saved our business reputation",
    text: "When our company faced an unexpected regulatory investigation, BHW stepped in immediately. Their corporate litigation team is unmatched in Alabama. They protected our assets.",
    stars: 5,
    date: "1 year ago"
  },
  {
    name: "Michael R.",
    title: "Saved my career and my license",
    text: "I was facing a serious DUI charge that could have ended my career. The team at BHW worked diligently to uncover flaws in the traffic stop. Ultimately, the charges were dropped. I can't thank them enough for their dedication.",
    stars: 5,
    date: "1 month ago"
  },
  {
    name: "Elizabeth T.",
    title: "Exceptional representation in federal court",
    text: "Federal investigations are terrifying, but having Boles Holmes White in my corner gave me peace of mind. Their understanding of complex financial regulations is incredible. They successfully negotiated a resolution that kept my business intact.",
    stars: 5,
    date: "3 months ago"
  },
  {
    name: "Marcus J.",
    title: "A legal team that truly cares",
    text: "From the initial consultation, I knew I was in good hands. They didn't judge me; they just got straight to work. The paralegals and attorneys were always available to answer my calls. We got a much better result than I ever expected.",
    stars: 5,
    date: "7 months ago"
  },
  {
    name: "Jessica B.",
    title: "Fierce advocates during a difficult time",
    text: "Going through a contentious divorce was the hardest thing I've ever done. The attorneys at BHW were compassionate with me but fierce in the courtroom. They protected my assets and my rights brilliantly.",
    stars: 5,
    date: "10 months ago"
  },
  {
    name: "Robert V.",
    title: "Brilliant courtroom strategy",
    text: "We hired BHW for a complex breach of contract dispute. Their trial preparation was meticulous, and their performance in court was commanding. We won the case and recovered our damages fully. Highly recommended for corporate litigation.",
    stars: 5,
    date: "1 year ago"
  },
  {
    name: "T.K.",
    title: "Simply the best in Alabama",
    text: "Worth every penny. They are straightforward, honest, and aggressive when they need to be. If you want the best possible outcome for your legal troubles, hire Boles Holmes White.",
    stars: 5,
    date: "2 years ago"
  }
];

const PRACTICE_AREAS_SIDEBAR = [
  "Criminal Defense",
  "White Collar Defense",
  "Federal Criminal Defense",
  "DUI Defense",
  "Drug Crimes",
  "Civil Lawsuits",
  "Business Litigation",
  "Divorce & Family Law",
  "Personal Injury",
  "Appeals"
];

export default function CaseReviewsPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen text-gray-800 scroll-smooth" id="case-reviews-main">
      
      {/* ১. Hero Section Component */}
      <CaseReviewsHero />

      {/* ২. Main Content Layout (Reviews + Sidebar) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Client Reviews */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-8 border-b border-gray-200 pb-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A192F] uppercase tracking-wide">
                Client Reviews
              </h3>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C5A85C] text-[#C5A85C]" />
                ))}
                <span className="ml-2 text-xs sm:text-sm font-bold text-gray-600">5.0 Average Rating</span>
              </div>
            </div>

            <div className="space-y-6">
              {CLIENT_REVIEWS.map((review, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 relative group hover:border-[#C5A85C]/50 transition-colors"
                >
                  <Quote className="absolute right-4 sm:right-6 top-4 sm:top-6 w-8 h-8 sm:w-12 sm:h-12 text-gray-100 group-hover:text-[#C5A85C]/10 transition-colors pointer-events-none" />
                  
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#C5A85C] text-[#C5A85C]" />
                    ))}
                  </div>
                  
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#0A192F] mb-2 sm:mb-3 pr-8 sm:pr-12">
                    {review.title}
                  </h4>
                  
                  <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed text-justify mb-5 sm:mb-6 italic">
                    {review.text}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-50 pt-4 gap-2">
                    <span className="font-bold text-xs sm:text-sm text-[#0A192F] uppercase tracking-wider">
                      — {review.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium">
                      {review.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Sidebar (Sticky) */}
          <div className="lg:col-span-4 space-y-8 lg:space-y-10 lg:sticky lg:top-32">
            
            {/* Contact Form Sidebar */}
            <div className="bg-[#0A192F] text-white p-6 sm:p-8 rounded-lg shadow-xl border-t-4 border-[#C5A85C]">
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide mb-2 text-center">
                Contact Us
              </h3>
              <p className="text-xs text-gray-300 text-center mb-6">
                Fill out the form below or call our 24/7 Helpline.
              </p>

              {!submitSuccess ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Name (Required)" 
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#C5A85C] text-white placeholder-gray-400 transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      required
                      placeholder="Email (Required)" 
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#C5A85C] text-white placeholder-gray-400 transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone (Required)" 
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#C5A85C] text-white placeholder-gray-400 transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows={4}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-[#C5A85C] text-white placeholder-gray-400 transition-colors resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#C5A85C] hover:bg-[#DFC27D] text-[#0A192F] font-bold text-xs uppercase tracking-widest py-3.5 rounded transition-colors flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 rounded-full border-2 border-[#0A192F] border-t-transparent animate-spin" />
                    ) : (
                      "Contact Us Now"
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#C5A85C] mx-auto" />
                  <p className="text-xs sm:text-sm text-gray-200">Your message has been sent. We will contact you shortly.</p>
                </div>
              )}
            </div>

            {/* Practice Areas Sidebar */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-150 hidden sm:block">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#0A192F] uppercase tracking-wide border-b border-gray-200 pb-3 mb-4">
                Practice Areas
              </h3>
              <ul className="space-y-3">
                {PRACTICE_AREAS_SIDEBAR.map((area, idx) => (
                  <li key={idx} className="group flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A85C] transition-transform group-hover:translate-x-1 shrink-0" />
                    <Link href="/personal" className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-[#0A192F] transition-colors line-clamp-1">
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </main>

      {/* ৩. Leave a Review CTA (Google Review) */}
      <section className="bg-white border-y border-gray-200 py-12 sm:py-16" id="leave-review-cta">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5 sm:space-y-6">
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
              <span className="font-display font-bold text-lg sm:text-xl text-blue-600">G</span>
            </div>
          </div>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#0A192F] tracking-wide">
            Were You Happy With Our Services?
          </h2>
          <p className="font-sans text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            We value your feedback. Leaving a review on our Google profile helps us continue to provide top-tier legal defense and helps others in Alabama find the representation they need.
          </p>
          <div className="pt-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#0A192F] hover:bg-[#112240] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Leave a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A85C]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}