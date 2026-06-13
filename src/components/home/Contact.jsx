"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Phone, Mail, Clock, Send, CheckCircle, Flame, Shield, Award } from 'lucide-react';
import { CONTACT_PAGE_IMAGE, SMS_CONSENT_TEXT } from '../../data';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    aboutLaw: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const optionSelections = [
    "Corporate & Business Litigation",
    "Government Investigations",
    "White Collar Defense",
    "Professional License Protection",
    "Regulatory Representation",
    "Criminal Defense / DUI",
    "Personal Injury & Wrongful Death",
    "Divorce & Family Law",
    "Wills, Estate & Probate",
    "Transactions & Compliance",
    "Other Civil Legal Challenge"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setErrorMsg('Please supply both your First Name and Last Name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMsg('Please supply either an Email Address or Phone Number.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate premium backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-brand-navy overflow-hidden scroll-mt-20" id="contact">
      {/* Courtroom bg wallpaper with luxurious gold / blue overlay filter */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 filter brightness-50"
        style={{ backgroundImage: `url(${CONTACT_PAGE_IMAGE})` }}
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-navy to-transparent z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Block: Brief and contact options */}
          <div className="lg:col-span-5 text-white space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <span className="text-brand-gold font-sans font-bold text-xs tracking-widest uppercase block">
                Immediate Response Advisory
              </span>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-brand-gold" />
            </div>

            <p className="font-sans text-gray-300 leading-relaxed text-sm sm:text-base">
              Protecting your future requires timely, sophisticated action. Our responsive multi-state attorneys are prepared to counsel you through complex white collar charges, business disputes, or individual family disputes. Fill out the contact request form to schedule your case evaluation.
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-gold/15 rounded-md text-brand-gold border border-brand-gold/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Hotline</h4>
                  <a href="tel:205-502-2000" className="text-lg font-semibold hover:text-brand-gold transition-colors block">205-502-2000</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-gold/15 rounded-md text-brand-gold border border-brand-gold/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Response Expectation</h4>
                  <span className="text-sm font-sans text-gray-200 block">All inquiries reviewed within 2 hours</span>
                </div>
              </div>
            </div>

            {/* Accolades Widget / Badges based on the icons in the screenshot */}
            <div className="pt-8 border-t border-white/10 hidden sm:block">
              <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-5">Professional Standings & Accolades</h4>
              <div className="grid grid-cols-5 gap-3 items-center justify-items-center bg-brand-navy-light/50 p-4 border border-white/5 rounded-md">
                
                {/* Justice Scales badge */}
                <div className="flex flex-col items-center text-center">
                  <Scale className="w-7 h-7 text-brand-gold mb-1" />
                  <span className="text-[9px] font-sans text-gray-400 uppercase font-medium">BHW Justice</span>
                </div>

                {/* AVVO 10.0 badge */}
                <div className="flex flex-col items-center text-center border-l border-white/15 pl-2.5">
                  <div className="font-sans font-black text-brand-gold text-sm tracking-tighter leading-none">10.0</div>
                  <span className="text-[9px] text-gray-400 uppercase tracking-tighter font-semibold">AVVO Rated</span>
                </div>

                {/* Martindale-Hubbell preeminent */}
                <div className="flex flex-col items-center text-center border-l border-white/15 pl-2.5">
                  <div className="font-sans font-bold text-white text-[11px] uppercase tracking-wide leading-none">AV</div>
                  <span className="text-[8px] text-brand-gold-light uppercase leading-tight font-medium">Preeminent</span>
                </div>

                {/* Super lawyers */}
                <div className="flex flex-col items-center text-center border-l border-white/15 pl-2.5">
                  <Award className="w-5 h-5 text-brand-gold mb-1" />
                  <span className="text-[8px] text-gray-400 uppercase leading-tight font-medium text-center">Super Lawyer</span>
                </div>

                {/* National Trial lawyers */}
                <div className="flex flex-col items-center text-center border-l border-white/15 pl-2.5">
                  <div className="font-sans font-black text-brand-gold text-[10px] leading-none uppercase">Top</div>
                  <div className="font-sans font-bold text-white text-[10px] leading-none">100</div>
                  <span className="text-[7px] text-gray-500 uppercase leading-none font-medium">Trial Lawyers</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-brand-navy-light/90 backdrop-blur-md p-6 sm:p-10 rounded-lg border border-brand-gold/10 hover:border-brand-gold/25 shadow-2xl transition-all duration-300">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-1">
                        Case Assessment Submission
                      </h3>
                      <p className="text-xs text-gray-400">
                        Information submitted through this form is held in strict fiduciary confidence.
                      </p>
                    </div>

                    {errorMsg && (
                      <div className="p-3.5 bg-red-950/80 border border-red-800 text-red-200 text-xs rounded-sm">
                        {errorMsg}
                      </div>
                    )}

                    {/* First & Last Name Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="firstName" className="text-xs uppercase text-gray-300 tracking-wider font-semibold block">
                          First Name <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          placeholder="first name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lastName" className="text-xs uppercase text-gray-300 tracking-wider font-semibold block">
                          Last Name <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          placeholder="last name"
                        />
                      </div>
                    </div>

                    {/* Primary Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs uppercase text-gray-300 tracking-wider block">
                          Phone (Primary)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          placeholder="(eg. 205-555-0100)"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs uppercase text-gray-300 tracking-wider block">
                          Email (Primary)
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                          placeholder="email address"
                        />
                      </div>
                    </div>

                    {/* Area of Law Select Dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="aboutLaw" className="text-xs uppercase text-brand-gold tracking-wider font-semibold block">
                        What BEST describes the area of law you are contacting us about?
                      </label>
                      <select
                        id="aboutLaw"
                        name="aboutLaw"
                        value={formData.aboutLaw}
                        onChange={handleInputChange}
                        className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold transition-all cursor-pointer"
                      >
                        <option value="">Select legal practice category...</option>
                        {optionSelections.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Primary Message description block */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs uppercase text-gray-300 tracking-wider block">
                        Brief Outline of your Case / Situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-brand-navy text-white text-sm px-4 py-3 border border-white/10 rounded-sm focus:outline-none focus:border-brand-gold transition-all resize-none"
                        placeholder="Please write down high-level details of your case..."
                      />
                    </div>

                    {/* SMS Legal consent */}
                    <div className="p-3.5 bg-brand-navy rounded border border-white/5 text-[10px] sm:text-xs text-gray-400 leading-relaxed font-sans" id="sms_consent_block">
                      {SMS_CONSENT_TEXT}
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact_form_submit"
                      className="w-full flex justify-center items-center gap-2.5 bg-brand-gold hover:bg-brand-gold-dark disabled:bg-brand-gold/50 text-brand-navy font-bold text-xs tracking-widest uppercase py-4 rounded-sm transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-navy border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="submission-feedback"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 space-y-6"
                    id="contact_form_success"
                  >
                    <div className="inline-flex p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold mb-2 leading-none">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wider">
                        Request Received
                      </h3>
                      <p className="text-brand-gold font-serif text-sm italic">
                        Thank you, {formData.firstName} {formData.lastName}.
                      </p>
                    </div>
                    <div className="p-4 bg-brand-navy border border-white/10 rounded-md text-sm text-gray-400 space-y-2 text-left max-w-md mx-auto">
                      <p className="font-semibold text-white uppercase text-xs tracking-wider">Advisory Summary:</p>
                      <ul className="space-y-1 text-xs">
                        <li>&bull; <strong>Lead Stream:</strong> {formData.aboutLaw || "General Legal Assessment"}</li>
                        {formData.phone && <li>&bull; <strong>Callback Contact:</strong> {formData.phone}</li>}
                        {formData.email && <li>&bull; <strong>Confidential Email:</strong> {formData.email}</li>}
                        <li>&bull; <strong>Status:</strong> Immediate Advisory Queue &bull; Hot triage</li>
                      </ul>
                    </div>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      An advisor from our Birmingham or Dothan team has completed intake of your file. We will connect with you confidentialy within two analytical business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', phone: '', email: '', aboutLaw: '', message: '' }); }}
                      className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs tracking-wider uppercase px-6 py-2.5 rounded-sm transition-all"
                    >
                      New Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}