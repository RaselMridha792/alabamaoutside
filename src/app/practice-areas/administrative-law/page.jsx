"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image'; // ✅ Next.js Image ইমপোর্ট করা হয়েছে
import { 
  Scale, ShieldCheck, Landmark, Briefcase, HelpCircle, 
  ArrowRight, Mail, Phone, User, PhoneCall, CheckCircle2, ChevronDown, Building2, Gavel
} from 'lucide-react';
import FeaturedLogos from '@/components/FeaturedLogos';

export default function ProfessionalPage({ onNavigateToContact }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    practiceArea: ''
  });
  const [submitted, setSubmitted] = useState(false);



  // Specific administrative agencies handled
  const agencyList = [
    "The Department of Justice (DOJ)",
    "U.S. Food and Drug Administration (FDA)",
    "The United States Department of Agriculture (USDA)",
    "U.S. Environmental Protection Agency (EPA)",
    "The Securities and Exchange Commission (SEC)",
    "The Alabama Securities Commission",
    "Corporation for Public Broadcasting",
    "Office of Foreign Assets Control",
    "Health and Human Services – Office of Inspector General (HHS – OIG)",
    "The Alabama Ethics Commission",
    "State of Alabama Real Estate Commission",
    "The Alabama Board of Medical Examiners",
    "The Alabama Board of Nursing",
    "The Alabama State Board of Pharmacy",
    "The Alabama Board of Examiners in Psychology"
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
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="professional-administrative-page">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="professional-hero">
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Corporate & Regulatory Practice</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="professional-page-main-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Administrative Law
          </motion.h1>
        </div>
      </section>

      {/* Structured Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="professional-main-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Rich legal informational sections */}
          <section className="lg:col-span-7 space-y-10" id="professional-content-col">
            
            {/* Header Block */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-brand-navy font-bold leading-tight uppercase tracking-tight" id="professional_subheading_1">
                Birmingham, ALabama Administrative Law
              </h2>
              <div className="w-20 h-1 bg-brand-gold" />
            </div>

            {/* General Paragraph 1 Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="admin-intro-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify" id="admin-p1-text">
                Both state governments and the federal government have policies and regulations with which businesses must comply or face unwanted consequences. Attorneys in our administrative law practice work closely with those involved in business litigation, appellate litigation, white collar criminal defense, compliance, regulatory representation and professional license protection practice areas to provide our clients with the most effective advocacy and comprehensive approach to administrative issues and disputes as possible. Often, clients find themselves accused of violating government regulations they were not even aware existed. This can be the result of misinformation, newly enacted regulations, or simply changes to existing statutes or rules.
              </p>
            </div>

            {/* Paragraph 2 - Challenging & Defending */}
            <div className="bg-brand-navy/5 p-6 rounded-lg border-l-4 border-brand-navy leading-relaxed" id="admin-p2-card">
              <p className="font-sans text-sm sm:text-base text-brand-navy font-medium text-justify" id="admin-p2-text">
                Aside from Boles Holmes White’s base knowledge and understanding of these governmental agencies and the complex web regulations they implement, we have the experience challenging and defending such regulations when our client’s businesses and livelihoods have been threatened.
              </p>
            </div>

            {/* Paragraph 3 - SUCCESS STATEMENT */}
            <div className="space-y-4 leading-relaxed" id="admin-success-section">
              <p className="font-sans text-sm sm:text-base text-gray-700 text-justify" id="admin-p3-text">
                Our attorneys have a history of success defending businesses from a variety of industries in proceedings before both state and federal administrative agencies. Because BHW’s lawyers work closely with other practice areas within our firm, we are also successful challenging administrative decisions on appeal to protect our clients’ interests. We use the input and guidance of our appellate attorneys to ensure each client has the best case for appeal, in the event an adverse ruling is given by an agency. Some of the agencies our firm has appeared before or dealt with include:
              </p>
            </div>

            {/* Structured List of Agencies Grid */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm" id="admin-agencies-card">
              <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Agencies Handled & Appeared Before</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="admin-agencies-list">
                {agencyList.map((agency, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-2.5 bg-slate-50 border border-gray-100 rounded hover:border-brand-gold/45 transition-colors group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="font-sans text-xs sm:text-sm font-medium text-gray-800">{agency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Paragraph 4 - Deep Understanding and Assistance */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4" id="admin-p4-card">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-brand-gold" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy">Comprehensive Assistance & Policy Understanding</h4>
              </div>
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify" id="admin-p4-text">
                At BHW, we are equipped with a deep understanding of governmental entities and policy-making bodies to provide our corporate clients with current, comprehensive assistance to make sure their business operate within the requirements of governmental regulations. We also have attorneys who work closely on issues of state legislative matters. Our attorneys specialize in regulatory compliance and administrative defense of a wide variety of issues that concern a business, including employment matters, professional licenses, taxation, compliance, zoning and permits, claims arising out of federal and state grants, communications, health and safety, and insurance matters.
              </p>
            </div>

            {/* Paragraph 5 - Resolution and Custom Defense */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 space-y-4" id="admin-p5-card">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-navy">Personalized Action & Resolution</h4>
              </div>
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify" id="admin-p5-text">
                We regularly represent clients dealing with federal, state, and even local agencies. Alongside this experience, our attorneys have the best understanding of how to resolve our client’s disputes, approaching each case with the personalization clients deserve, rather than pursuing a cookie-cutter defense. In some cases, that may mean taking the issue to court. In other instances, it may mean we continue fighting for you before the government agency. No matter what challenge a particular client is facing, we have the experience to protect you and your business.
              </p>
            </div>

          </section>

          {/* Right Column: Sticky Contact Form */}
          <section className="lg:col-span-5 lg:sticky lg:top-28" id="professional-form-col">
            <div className="bg-[#EAECEE]/90 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-xl border border-gray-250" id="professional-consultation-card">
              
              <div className="border-b border-gray-300 pb-4 mb-6">
                <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">
                  <PhoneCall className="w-4 h-4 text-brand-gold animate-bounce" />
                  <span>Immediate Case Intake</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-brand-navy uppercase tracking-tight" id="professional-form-heading">
                  Speak to an Attorney
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  Provide your business or individual defense details below for an absolute confidential, privileged assessment.
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
                    <label id="prof_lbl_first_name" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                        id="prof_input_first_name"
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="space-y-1.5">
                    <label id="prof_lbl_last_name" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                        id="prof_input_last_name"
                      />
                    </div>
                  </div>

                  {/* Phone (Primary) Field */}
                  <div className="space-y-1.5">
                    <label id="prof_lbl_phone" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                        id="prof_input_phone"
                      />
                    </div>
                  </div>

                  {/* Email (Primary) Field */}
                  <div className="space-y-1.5">
                    <label id="prof_lbl_email" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
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
                        id="prof_input_email"
                      />
                    </div>
                  </div>

                  {/* Practice Area Dropdown Selector */}
                  <div className="space-y-1.5">
                    <label id="prof_lbl_area" className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                      * What BEST describes the area of law you are contacting us about?
                    </label>
                    <div className="relative font-semibold">
                      <select 
                        required
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({...formData, practiceArea: e.target.value})}
                        className="w-full bg-white text-gray-800 pl-4 pr-10 py-3 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-navy focus:border-brand-navy hover:border-gray-400 transition-all text-xs font-semibold cursor-pointer appearance-none"
                        id="prof_select_area"
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Administrative Law">Administrative Law &amp; Defense</option>
                        <option value="Regulatory Representation">Regulatory Representation</option>
                        <option value="Business Litigation">Business Disputes &amp; Litigation</option>
                        <option value="Government Investigations">Government Investigations</option>
                        <option value="Professional License Action">Professional License Protection</option>
                        <option value="Other">Other Civil/Corp Challenge</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* SMS Policy Consent Agreement */}
                  <div className="p-3 bg-white/70 rounded border border-gray-250 text-[10px] sm:text-xs text-gray-500 leading-relaxed select-none" id="prof-sms-consent-box">
                    By providing your phone number, you consent to receive automated informational/conversational SMS communications from Lawmatics on behalf of Boles Holmes White. Consent is not a condition of service. Message &amp; data rates may apply and frequency will vary. Reply STOP to unsubscribe. Text HELP for help. <a href="#privacy" className="underline hover:text-brand-gold">Privacy Policy</a> &bull; <a href="#terms" className="underline hover:text-brand-gold">Terms of Use</a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="prof_btn_submit_intake"
                    className="w-full py-4.5 bg-[#4CAF50] hover:bg-[#43A047] text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest rounded-sm shadow-md transition-all duration-200 cursor-pointer text-center select-none transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
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

      {/* Featured In Logos Grid */}
   <FeaturedLogos></FeaturedLogos>
    </div>
  );
}