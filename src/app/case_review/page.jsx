"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Send, CheckCircle2, ShieldCheck, Scale, Clock, Lock } from 'lucide-react';

export default function FreeCaseReviewPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    caseType: '',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the communications statement to proceed.");
      return;
    }
    setIsSubmitting(true);
    
    // API Call Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        caseType: '',
        message: '',
        consent: false
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="free-case-review-page">
      
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-85">
          <Image 
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg"
            alt="Free Case Review Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-[#0A192F]/70 to-[#0A192F]/95" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/80 border border-brand-gold/30 rounded-full text-[#C5A85C] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Confidential & No Obligation</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-lg"
          >
            Get a Free Case Review
          </motion.h1>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: What to Expect & Firm Authority */}
          <section className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#0A192F] tracking-tight">
                Why Request a Free Evaluation?
              </h2>
              <div className="w-16 h-1 bg-[#C5A85C]" />
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                We provide a free evaluation of personal injury, criminal defense, and business litigation cases. Our attorneys evaluate the facts of the case, as well as any injuries or allegations, and make a recommendation as to whether we believe you should proceed with legal action.
              </p>
            </div>

            {/* Feature Points */}
            <div className="space-y-4 pt-4">
              <div className="bg-white p-5 rounded border border-gray-200 shadow-sm flex gap-4 items-start">
                <div className="p-2.5 bg-[#0A192F] rounded-sm text-[#C5A85C] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase text-sm tracking-wider mb-1">100% Confidential</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Every inquiry submitted is immediately subject to attorney-client privilege. Your information is secure and will never be shared.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded border border-gray-200 shadow-sm flex gap-4 items-start">
                <div className="p-2.5 bg-[#0A192F] rounded-sm text-[#C5A85C] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase text-sm tracking-wider mb-1">Timely Response</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Our intake team monitors submissions 24/7. A managing litigation partner will review your details and contact you promptly.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded border border-gray-200 shadow-sm flex gap-4 items-start">
                <div className="p-2.5 bg-[#0A192F] rounded-sm text-[#C5A85C] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A192F] uppercase text-sm tracking-wider mb-1">Expert Representation</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    With roots in Dothan and offices in Birmingham, our attorneys provide big firm representation with small town accessibility.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column: Case Review Form */}
          <section className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-gray-200 shadow-lg relative overflow-hidden">
            {/* Form Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C5A85C]" />

            <div className="space-y-2 mb-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#0A192F] tracking-tight">
                Case Evaluation Form
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500">
                Please provide as much context as possible so our attorneys can accurately review your situation before contacting you.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="review-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="review_first_name" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">First Name *</label>
                      <input 
                        required
                        type="text"
                        id="review_first_name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="review_last_name" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Last Name *</label>
                      <input 
                        required
                        type="text"
                        id="review_last_name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="review_phone" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Phone Number *</label>
                      <input 
                        required
                        type="tel"
                        id="review_phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="review_email" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Email Address *</label>
                      <input 
                        required
                        type="email"
                        id="review_email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Practice Area Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="review_case_type" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Type of Legal Matter *</label>
                    <select 
                      required
                      id="review_case_type"
                      value={formData.caseType}
                      onChange={(e) => setFormData({...formData, caseType: e.target.value})}
                      className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your case category...</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="White Collar Crime">White Collar Defense & Investigations</option>
                      <option value="Personal Injury">Personal Injury</option>
                      <option value="Civil Lawsuit">Civil Lawsuits / Business Litigation</option>
                      <option value="DUI Defense">DUI Defense</option>
                      <option value="Family Law">Divorce & Family Law</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="review_message" className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">Brief Description of Your Case *</label>
                    <textarea 
                      required
                      id="review_message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#C5A85C] focus:bg-white transition-all text-gray-800 resize-none"
                      placeholder="Please include relevant dates, parties involved, and any charges or injuries..."
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="bg-slate-50 p-4 border border-gray-200 rounded text-xs text-gray-500 mt-2">
                    <div className="flex gap-3 items-start">
                      <input 
                        required
                        type="checkbox"
                        id="review_consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                        className="mt-0.5 rounded border-gray-300 text-[#C5A85C] focus:ring-[#C5A85C] h-4 w-4 shrink-0 cursor-pointer"
                      />
                      <label htmlFor="review_consent" className="cursor-pointer leading-relaxed">
                        I understand that submitting this form does not establish an attorney-client relationship. I consent to be contacted by Boles Holmes White LLC regarding my legal inquiry via phone or email.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0A192F] hover:bg-[#112240] text-[#C5A85C] font-bold text-sm uppercase tracking-widest py-4 rounded transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-[#C5A85C] border-t-transparent animate-spin" />
                          <span>Submitting Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4.5 h-4.5" />
                          <span>Request Free Review</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0A192F] text-white p-10 text-center rounded-lg border border-[#C5A85C]/30 space-y-5"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#C5A85C] mx-auto animate-bounce" />
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#C5A85C] tracking-wide">
                    Request Received Securely
                  </h3>
                  <p className="font-sans text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
                    Thank you, {formData.firstName}. Your case review request has been safely transmitted to our intake team. A legal professional will review your details and contact you shortly.
                  </p>
                  <div className="pt-6">
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3 bg-transparent border border-[#C5A85C]/50 text-white rounded hover:bg-[#C5A85C] hover:text-[#0A192F] transition-all text-xs uppercase font-bold tracking-wider"
                    >
                      Submit Another Case
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

        </div>
      </main>
    </div>
  );
}