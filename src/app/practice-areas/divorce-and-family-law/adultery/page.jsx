"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scale, ShieldCheck, 
  ArrowRight, Mail, Phone, User, PhoneCall, CheckCircle2, ChevronDown
} from 'lucide-react';

import FeaturedLogos from '@/components/FeaturedLogos';
import FAQ from '@/components/home/FAQ';

export default function AdulteryPage() {
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
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="adultery-page">
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
            Adultery
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
                Adultery
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                Experienced with handling cases involving adultery
              </h3>
            </div>

            {/* General Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="general-inquiry-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy" />
              
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                You’ve got that feeling in your gut that something isn’t right.  You may not have any hard evidence, but you feel your spouse is being unfaithful.  Either they’ve denied it, or you haven’t had the energy to confront them.  But infidelity is not one of those situations you can just ignore.  What do you do?  Contact an experienced divorce attorney who knows how to deal with adultery in a divorce context.
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                You may have noticed new behavior in your husband.   He may be working out more, buying new clothes, staying late at the office.  Your wife may seem disinterested, and be spending more and more time “with her friends” or on the computer in the other room.
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                Suspicion of a cheating wife or cheating husband is one of the top reasons new clients contact our divorce attorneys in Birmingham, Alabama.  Adultery is one of the grounds authorized by Alabama law for a divorce court judge to grant a divorce.  The divorce lawyers in our Birmingham office can work with you to determine if your spouse has had a wandering eye, and if so begin planning your exit strategy.   In some cases, we have even found that the suspicion is unwarranted, allowing the marriage to be repaired.
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                We work with private investigators and other experts have been successful in catching a cheating spouse in the act.  Once that is done, this damaging information can be used to obtain the best possible outcome for you in your divorce.
              </p>
            </div>

            {/* Segment 1: Protecting Yourself Section */}
            <div className="space-y-4" id="protect-yourself-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <ShieldCheck className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  You’re the cheater?  How do you protect yourself?
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-5">
                  You’ve either been caught committing adultery, or you are worried that your secret is about to end.  Where do you go from here?  Many of our clients have made mistakes in their marriage, including adultery.  It is our job to mitigate that, and prevent it from causing devastating effects to you in your divorce case.
                </p>

                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-5">
                  There is likely a reason you’ve strayed in your marriage that will explain your behavior.  While this may not excuse what you’ve done completely, our divorce attorneys are skilled advocates that can make the court understand the position in which you have found yourself.  Additionally, if no one yet knows about your “indiscretion” our divorce lawyers can help you negotiate a settlement before it comes to light, or advise you in how to disclose your adultery to your spouse in an effort to either help save the marriage or minimize the damage.
                </p>

                <div className="p-5 bg-slate-50 border-t border-gray-100 rounded">
                  <p className="font-sans text-sm sm:text-base text-brand-navy font-semibold text-justify">
                    If you suspect adultery, or your spouse is seeking a divorce from you because you have cheated, contact divorce attorney William White at Boles Holmes White LLC to guide you through this stressful time.
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
                    Thank you. A resident trial attorney from Boles Holmes White will contact you inside 24 business hours.
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
                      >
                        <option value="" disabled>Select...</option>
                        <option value="Divorce / Family Law">Divorce / Family Law (Adultery)</option>
                        <option value="Criminal Defense">Criminal Defense</option>
                        <option value="DUI Defense">DUI Defense</option>
                        <option value="Other">Other Legal Matter</option>
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* SMS Policy Consent Agreement */}
                  <div className="p-3 bg-white/70 rounded border border-gray-250 text-[10px] sm:text-xs text-gray-500 leading-relaxed select-none">
                    By providing your phone number, you consent to receive automated informational/conversational SMS communications from Lawmatics on behalf of Boles Holmes White. Consent is not a condition of service. Message &amp; data rates may apply and frequency will vary. Reply STOP to unsubscribe. Text HELP for help. <a href="#privacy" className="underline hover:text-brand-gold">Privacy Policy</a> &bull; <a href="#terms" className="underline hover:text-brand-gold">Terms of Use</a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
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

      {/* Featured In Logos Component */}
      <FeaturedLogos />

      {/* FAQ Component */}
      <FAQ />

    </div>
  );
}