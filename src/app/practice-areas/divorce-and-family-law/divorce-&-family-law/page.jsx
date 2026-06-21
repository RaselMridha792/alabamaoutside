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
import FeaturedLogos from '@/components/FeaturedLogos';

export default function DivorceAndFamilyLawPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    practiceArea: ''
  });
  const [submitted, setSubmitted] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', practiceArea: '' });
    }, 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="divorce-family-page">
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
            <Scale className="w-3.5 h-3.5" />
            <span>Family Law Practice</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="personal-page-main-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Divorce and Family Law
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
                Divorce Attorney Birmingham AL; Free Consultation Family Lawyer
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                Counseling Clients on Family Law Issues Throughout the State of Alabama
              </h3>
            </div>

            {/* General Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="general-inquiry-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy" />
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 text-justify" id="general-inquiry-text">
                One of the most difficult tasks a person will face is navigating a divorce in Alabama. A Divorce Attorney in Birmingham AL can guide you through this challenging process. Divorces cause enormous stress to your emotions, preventing many from thinking clearly. For most, divorce is something they only deal with once in their life. Our divorce attorney and family lawyer in Birmingham, AL has years of experience in dealing with divorces on a daily basis, and knows how to advise clients in the most challenging domestic cases.
              </p>
              
              {/* Scope of Services Grid - Updated to match existing website topics */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Adultery",
                  "Alimony and Spousal Support",
                  "Annulments",
                  "Asset Location",
                  "Attorney Fee Recovery",
                  "Changing Alimony or Child Support",
                  "Child Custody",
                  "Child Relocation",
                  "Child Support Calculations",
                  "Child Visitation",
                  "Contested Divorce",
                  "Courthouses We Service",
                  "Divorce Appeals",
                  "Divorce of Same Sex Couples",
                  "Domestic Violence / Protection from Abuse",
                  "Enforcement of Divorce Decrees",
                  "Grandparents Rights",
                  "Grounds for Divorce",
                  "How to Prepare for a Child Custody Case",
                  "Joint Accounts in a Divorce"
                ].map((q, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start p-3 bg-slate-50/80 rounded border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                    <span className="font-sans text-[11px] sm:text-xs font-semibold text-brand-navy leading-tight">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Segment 1: Fighting for our Divorce Clients */}
            <div className="space-y-4" id="fighting-for-clients-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-gold/10 text-brand-gold rounded-md">
                  <ShieldCheck className="w-5 h-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  Fighting &amp; Negotiating for Our Clients
                </h3>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-4">
                  Whether your goal is to negotiate an amicable resolution, or to fight to protect your assets or your child custody rights, we can help. If you’ve been the victim of domestic violence, adultery, or your spouse has addiction issues, our firm will act quickly to make sure your rights are protected. In some situations, we can move the court to Order custody of the children and the marital home to our clients while the divorce is pending. 
                </p>
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify">
                  Likewise, if you have simply fallen out of love with your spouse and are looking to peaceably go your separate ways, we can help. We can file an uncontested divorce or work directly with your spouse’s attorney to resolve issues. We also have extensive experience with domestic mediation, where issues of divorce are negotiated peaceably.
                </p>
              </div>
            </div>

            {/* Segment 2: Divorce Decree Enforcement Assistance */}
            <div className="space-y-4" id="decree-enforcement-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <Landmark className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  Divorce Decree Enforcement &amp; Modification
                </h3>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-5">
                  If you’ve already obtained a divorce, but are seeking to enforce or modify the existing divorce decree, our family lawyers can assist. If there has been a material change in circumstances, a petition can be filed requesting the court for a modification of child support or alimony payments. Furthermore, if your ex-spouse has failed to make ordered payments or turn over certain property, they can be held in contempt of court. We can request a formal court hearing and Order your ex to explain why they have violated the terms of the original decree.
                </p>
                
                {/* Locations Grid - Bibb County added */}
                <div className="p-5 bg-slate-50 border-t border-gray-100 rounded">
                  <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Serving Surrounding Localities Including:</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Birmingham, Tuscaloosa, Columbiana, Hoover, Mountain Brook, Chelsea, Vestavia Hills, Homewood, Irondale, Pell City, Bessemer, Pelham, Alabaster, Gardendale, Fultondale, Trussville, Leeds, Jefferson County, Shelby County, Tuscaloosa County, Bibb County, and St. Clair County.
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Right Column: Sticky Contact Form */}
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
                    Thank you. A resident trial family lawyer from Boles Holmes White will contact you inside 24 business hours.
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
                        <option value="Divorce">Divorce Proceedings</option>
                        <option value="Child Custody">Child Custody &amp; Support</option>
                        <option value="Decree Modification">Decree Enforcement / Modification</option>
                        <option value="Other">Other Family Law Matter</option>
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

      {/* Featured In Logos Grid */}
    <FeaturedLogos></FeaturedLogos>
    </div>
  );
}