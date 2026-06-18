"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image'; 
import { 
  Scale, ShieldCheck, Landmark, Briefcase, HelpCircle, 
  ArrowRight, Mail, Phone, User, PhoneCall, CheckCircle2, ChevronDown
} from 'lucide-react';
import FAQ from '@/components/home/FAQ';

export default function CriminalDefensePage({ onNavigateToContact }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    practiceArea: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // All 15 media images referenced in the prompt
  const mediaLogos = [
    { name: "Forbes", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd892f06cae3d3bff4e71d0_forbes-1024x401.png" },
    { name: "The Dallas Morning News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd8993c59c519c3e5572559_The_Dallas_Morning_News_Logo.svg-1024x102.png" },
    { name: "ABC News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/3.svg" },
    { name: "NBC", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/4.png" },
    { name: "Fox News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/5.svg" },
    { name: "The Washington Post", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/6.svg" },
    { name: "American Lawyer", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/7.png" },
    { name: "The Birmingham News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/8.svg" },
    { name: "CBS News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/9.svg" },
    { name: "NBC News Channel", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/10.svg" },
    { name: "CNN", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/11.png" },
    { name: "Los Angeles Times", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/12.svg" },
    { name: "The Detroit News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/13-1024x185.png" },
    { name: "The Atlanta Journal-Constitution", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/14.svg" },
    { name: "Detroit Free Press", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/15.svg" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', practiceArea: '' });
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="personal-criminal-page">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="personal-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85"
          style={{ backgroundImage: "url('https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/6042af26a5e70e1e56ee3508_1hugoblacktint.jpg')" }}
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/60 to-brand-navy/95" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/80 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Criminal Practice</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="personal-page-main-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Criminal Defense
          </motion.h1>
        </div>
      </section>

      {/* Structured Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="personal-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Rich legal informational sections (7 cols) */}
          <section className="lg:col-span-7 space-y-12" id="personal-content-col">
            
            {/* Header Block */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-navy font-bold leading-tight uppercase tracking-tight" id="personal_subheading_1">
                Experienced Birmingham Criminal Defense Lawyer
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                Aggressive Criminal Defense Attorneys in Birmingham AL
              </h3>
            </div>

            {/* General Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="general-inquiry-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy" />
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 text-justify" id="general-inquiry-text">
                The lawyers at Boles Holmes White LLC, your trusted Birmingham criminal defense lawyer, have a long-standing reputation. Our experienced defense attorneys have successfully represented clients across Alabama and have been trusted to defend clients in states like Florida, New York, Michigan, California, and many other states in the nation. With thousands of criminal cases handled, our skilled criminal lawyers in Birmingham are ready to use their extensive experience to protect your rights and achieve the best possible outcome for your case. Our Birmingham criminal defense lawyers helped thousands of clients and now we can use that experience to help you.
              </p>
              
              {/* Question list adapted from content to maintain design */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Represented clients across Alabama",
                  "Trusted in NY, FL, MI, & CA",
                  "Thousands of criminal cases handled",
                  "Focused on achieving the best outcomes"
                ].map((q, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-3 bg-slate-50/80 rounded border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-xs sm:text-sm font-semibold text-brand-navy">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment 1: Criminal Defense Services */}
            <div className="space-y-4" id="criminal-services-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-gold/10 text-brand-gold rounded-md">
                  <ShieldCheck className="w-5 h-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight" id="injury_heading">
                  Our Criminal Defense Services
                </h3>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed" id="injury_card_body">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify" id="injury_paragraph">
                  We handle criminal defense matters across the State of Alabama from our offices in Birmingham, Dothan and Auburn. Whatever charges that have been brought against you, our Alabama defense attorneys are skilled at defending your rights. We can assist you with severe criminal charges including:
                </p>
                
                {/* Visual grid listing types of cases evaluated (Mapped from your content) */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Defending Against All Charges</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-center">
                    {[
                      "Domestic Violence", 
                      "Drug Crimes", 
                      "Felony DUI", 
                      "Property Crimes", 
                      "Violent Crimes",
                      "Restraining Orders"
                    ].map((item, idx) => (
                      <span key={idx} className="bg-slate-50 py-2 px-1 text-[11px] sm:text-xs font-bold text-brand-navy rounded border border-gray-100 hover:border-brand-gold hover:bg-white transition-all duration-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Segment 2: Proactive Legal Defense */}
            <div className="space-y-4" id="proactive-defense-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <Scale className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight" id="business_litigation_heading">
                  Proactive Legal Defense for Your Rights
                </h3>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed" id="business_card_body">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-5" id="business_paragraph">
                  Prosecutors are aggressive. Our Birmingham Criminal defense attorneys will prepare your case for court and will offer you an exceptionally aggressive and rigorous defense if your case goes to trial. But, our skilled lawyers may be able to get the charges against you dropped. In many cases, we can determine that the police officers or other Alabama law enforcement officials violated your rights during an arrest or investigation. We will also work hard to find holes in the prosecution’s case against you. We will tenaciously defend your rights against your accusers. Contact the Birmingham criminal defense lawyers at Boles Holmes White LLC; we will be on your side against the longest odds and most complex criminal charges.
                </p>
                
                {/* Visual callout focusing on background credentials */}
                <div className="p-4 bg-slate-50 border-l-4 border-brand-gold rounded-r flex gap-3 items-start">
                  <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-navy uppercase tracking-wide">Aggressive Representation</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">We tenaciously defend your rights and work tirelessly to uncover civil rights violations or holes in the prosecution’s case to protect your future.</p>
                  </div>
                </div>
              </div>
            </div>

          </section>

          {/* Right Column: Sticky Contact Form (Unchanged Design) */}
          <section className="lg:col-span-5 lg:sticky lg:top-28" id="personal-form-col">
            <div className="bg-[#EAECEE]/90 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-xl border border-gray-250" id="consultation-form-card">
              
              <div className="border-b border-gray-300 pb-4 mb-6">
                <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">
                  <PhoneCall className="w-4 h-4 text-brand-gold animate-bounce" />
                  <span>Immediate Case Intake</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-navy uppercase tracking-tight" id="form-heading">
                  Speak to an Attorney
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  Provide your case details below for an absolute confidential, privileged legal consultation.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-250 p-6 rounded text-center space-y-3"
                >
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-800 text-sm uppercase tracking-wide">Confidential Form Received</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                    Thank you. A resident trial litigation attorney from Boles Holmes White will contact you inside 24 business hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                  
                  {/* First Name Field */}
                  <div className="space-y-1.5 focus-within:text-brand-navy">
                    <label id="lbl_first_name" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * First name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="John"
                        className="w-full bg-white text-gray-800 pl-11 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold"
                        id="input_first_name"
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="space-y-1.5">
                    <label id="lbl_last_name" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * Last name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        placeholder="Doe"
                        className="w-full bg-white text-gray-800 pl-11 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold"
                        id="input_last_name"
                      />
                    </div>
                  </div>

                  {/* Phone (Primary) Field */}
                  <div className="space-y-1.5">
                    <label id="lbl_phone" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * Phone (Primary)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(205) 502-2000"
                        className="w-full bg-white text-gray-800 pl-11 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold"
                        id="input_phone"
                      />
                    </div>
                  </div>

                  {/* Email (Primary) Field */}
                  <div className="space-y-1.5">
                    <label id="lbl_email" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * Email (Primary)
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="johndoe@example.com"
                        className="w-full bg-white text-gray-800 pl-11 pr-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold"
                        id="input_email"
                      />
                    </div>
                  </div>

                  {/* Practice Area Dropdown Selector */}
                  <div className="space-y-1.5">
                    <label id="lbl_area" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * What BEST describes the area of law you are contacting us about?
                    </label>
                    <div className="relative font-semibold">
                      <select 
                        required
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({...formData, practiceArea: e.target.value})}
                        className="w-full bg-white text-gray-800 pl-4 pr-10 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold cursor-pointer appearance-none"
                        id="select_area"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Criminal Defense">Criminal Defense</option>
                        <option value="DUI Defense">DUI Defense</option>
                        <option value="White Collar Crime">White Collar Crime</option>
                        <option value="Other">Other Legal Matter</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* SMS Policy Consent Agreement */}
                  <div className="p-3 bg-white/70 rounded border border-gray-250 text-[10px] sm:text-xs text-gray-500 leading-relaxed select-none" id="sms-consent-box">
                    By providing your phone number, you consent to receive automated informational/conversational SMS communications from Lawmatics on behalf of Boles Holmes White. Consent is not a condition of service. Message &amp; data rates may apply and frequency will vary. Reply STOP to unsubscribe. Text HELP for help. <a href="#privacy" className="underline hover:text-brand-gold">Privacy Policy</a> &bull; <a href="#terms" className="underline hover:text-brand-gold">Terms of Use</a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="btn_submit_intake"
                    className="w-full py-4 bg-[#4CAF50] hover:bg-[#43A047] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-sm shadow-md transition-all duration-200 cursor-pointer text-center select-none transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT</span>
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>

                </form>
              )}

            </div>
          </section>

        </div>
      </main>

      {/* Featured In Logos Grid (Unchanged Design) */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100" id="personal-media-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[10px] sm:text-xs font-extrabold text-brand-gold uppercase tracking-widest block">Media Advocacy &amp; recognition</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-navy tracking-tight">Featured In</h3>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center select-none" id="media-grid">
            {mediaLogos.map((reporter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="w-full flex items-center justify-center p-3 filter grayscale hover:grayscale-0 transition-all duration-300"
                id={`media_item_${reporter.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}
              >
                <div className="relative h-12 w-full max-w-[150px]">
                  <Image 
                    src={reporter.logo} 
                    alt={`${reporter.name} Logo`} 
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<FAQ></FAQ>


    </div>




  );
}