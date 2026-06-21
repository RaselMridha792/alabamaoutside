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

export default function AnnulmentsPage() {
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
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="annulments-page">
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
            Annulments
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
                Annulment Lawyer In Alabama
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                Representing clients in Irondale, Trussville, Bessemer and other areas of Jefferson, Tuscaloosa, Shelby and St. Clair Counties
              </h3>
            </div>

            {/* General Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="general-inquiry-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy" />
              
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                An annulment is different than a divorce in that if an annulment is granted, it is as if the marriage never occurred in the first place.  Annulments in Alabama are a rarity.  However, our annulment lawyer have experience in obtaining clients an annulment if the situation warrants.  There are only six scenarios in which you are able to obtain an annulment in Alabama.
              </p>
            </div>

            {/* Segment 1: Six Scenarios for Annulment */}
            <div className="space-y-4" id="annulment-scenarios-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <ShieldCheck className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  Six Scenarios for Annulment in Alabama
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                
                <div className="space-y-6">
                  
                  {/* Scenario 1: Fraud */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Fraud
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      An annulment may be obtained if your attorney can convince the family court judge that your spouse entered into the marriage fraudulently.  This typically involves one spouse who has an assumed identity and is not who they say they are.  In such a situation, the judge may grant an annulment based on fraud.
                    </p>
                  </div>
                  
                  {/* Scenario 2: Minor Age */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Minor Age
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      If one of the parties is under 18 years of age at the time of the marriage, their parents are required to consent to the marriage.  In the event the does not take place, you can argue the marriage was a nullity.  Similarly, even if parents consent, in Alabama you cannot get married if you are under 16 years of age.  If you do get married and one of the parties is under 16, the marriage can be annulled.
                    </p>
                  </div>
                  
                  {/* Scenario 3: Duress */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Duress
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      Shotgun weddings may be completely legal in Alabama, but if one of the parties only got married because they were staring down the barrel of a loaded gun, that marriage can be annulled.  Duress is one of the grounds for an annulment.  If one party is able to show the Alabama divorce court that they only got married under duress, they can seek an annulment.
                    </p>
                  </div>

                  {/* Scenario 4: Incest */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Incest
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      If you are married to your brother, sister, father, or mother, you can (and should) seek an annulment in Alabama’s family court.  Annulments for incest would be granted upon a showing of the close familial relationship in the marriage.
                    </p>
                  </div>

                  {/* Scenario 5: Lack of Mental Capacity */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Lack of Mental Capacity
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      If one of the parties to the marriage lacked mental capacity at the time of the marriage, that marriage can be annulled.  This lack of mental capacity can take several forms.   One example can be found in the popular movie “The Hangover” where one of the characters awakens from a night of alcohol (and a “ruffie”) to find out he was married the night before.  Under such circumstances, annulment would be possible.  Also, if one of the parties is otherwise mentally impaired, they would lack the ability to form the necessary intent to enter into the marriage contract, again reason for an annulment in Alabama.
                    </p>
                  </div>

                  {/* Scenario 6: Bigamy */}
                  <div className="p-5 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <h4 className="text-sm sm:text-base font-bold text-brand-navy uppercase tracking-wide mb-2">
                      Bigamy
                    </h4>
                    <p className="text-sm text-gray-700 text-justify leading-relaxed">
                      Finally, if you find out your spouse was already married when you got hitched, that is sufficient grounds for an annulment.  Not only is bigamy grounds for an annulment in Alabama, it is also a crime.
                    </p>
                  </div>
                  
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-sans text-sm sm:text-base text-brand-navy font-semibold text-justify">
                    If you prefer an annulment, rather than a divorce, contact the annulment lawyer in Alabama at Boles Holmes White LLC to see if you qualify to void your marriage.  William White, head of our domestic relations department, can be reached at 205-502-2000.
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
                        <option value="Divorce / Family Law">Divorce / Family Law (Annulments)</option>
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