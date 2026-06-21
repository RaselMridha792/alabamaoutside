"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scale, ShieldCheck, Landmark, HelpCircle,
  ArrowRight, Mail, Phone, User, PhoneCall, CheckCircle2, ChevronDown
} from 'lucide-react';

import FeaturedLogos from '@/components/FeaturedLogos';
import FAQ from '@/components/home/FAQ';

export default function AlimonyPage() {
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
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="alimony-page">
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
            Alimony and Spousal Support
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
                Birmingham alimony Lawyer & Spousal Support attorney;
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                Helping clients in Vestavia Hills, Gardendale, Columbiana and the surrounding areas
              </h3>
            </div>

            {/* General Description Card */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden" id="general-inquiry-card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy" />
              
              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                One of the most contested aspects of a divorce case is alimony.  While people usually do not complain about supporting their minor children, they really don’t like having to write their ex a check every month.  To do so makes the payer of alimony feel like the divorce will never end, and makes him feel he is working hard to support someone that doesn’t appreciate him.
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                On the flip side, a spouse who didn’t work during the marriage, often at the insistence of her husband, is in some cases entitled to maintain the standard of living to which she has grown accustomed.  She may have foregone a successful career in order to support her spouse’s career and their children.  Alimony and Spousal Support is designed to ensure she is not left destitute after all of her sacrifice.
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed text-justify mb-4">
                A judge usually awards alimony and spousal support based upon the need of one spouse requesting alimony and the ability of the other spouse to pay.  In determining the amount of alimony, a number of factors are considered, such as length of the marriage and reasons for the divorce.  If the family law judge determines there is fault, which caused the divorce, they may order alimony out of the estate of one of the spouses.  However, as a general rule, property owned prior to the marriage or received through inheritance cannot be considered when deciding the amount of alimony.  An exception to this exists if the property or inheritance was used throughout the marriage to support the marriage.   Alabama State Divorce Code – Chapter 2, Section 30-2-52, 30-2-53]
              </p>

              <p className="font-sans text-sm sm:text-base text-gray-750 font-bold text-justify">
                Alimony in Alabama takes two forms:  Alimony in Gross and Periodic Alimony
              </p>
            </div>

            {/* Segment 1: Alimony in Gross */}
            <div className="space-y-4" id="alimony-in-gross-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <Landmark className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  What is Alimony in Gross?
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify">
                  Alimony in gross means payments from one spouse to another that are fixed and for a definite amount.  Alimony in Gross cannot be modified after it has been Ordered , unless it is successfully appealed.  It is usually based upon the assets the parties have at the time of the divorce, not based on either’s future earning ability, although earning ability can be considered.  Alimony in Gross is often ordered as a lump sum payment and is part of the total property settlement of the parties.  A common example of Alimony in Gross is to allow one spouse to keep the vacation house, but Order a lump sum payment of $100,000 as alimony in gross.  Recipients of in gross alimony should know that it can be discharged through bankruptcy of the paying spouse.
                </p>
              </div>
            </div>

            {/* Segment 2: Periodic Alimony */}
            <div className="space-y-4" id="periodic-alimony-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-gold/10 text-brand-gold rounded-md">
                  <ShieldCheck className="w-5 h-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  What is Periodic Alimony?
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-6">
                  Periodic Alimony is typically a set amount of money paid to the spouse on a monthly basis based on the divorce decree.  The divorce judge can order it for a set number of years, which is often referred to as temporary alimony, or it can be for the rest of the spouse’s life, often referred to as permanent alimony.  Periodic Alimony is considered taxable income to the spouse that receives it, and is a non taxable deduction to the spouse required to pay.  Even if periodic alimony has been ordered permanently, it can be terminated if the recipient gets remarried or moves in with someone of the opposite sex.
                </p>

                <div className="space-y-4">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block">The Jere Beasley Report, August 2005</span>
                  
                  <p className="font-sans text-sm sm:text-base text-gray-750 text-justify">
                    One of the most hotly contested issues our Birmingham alimony lawyer handle post divorce is a hearing to terminate alimony due to cohabitation.  The spouse paying alimony is anxious to get their ex off their payroll and can successfully end periodic alimony by showing cohabitation.  The spouse receiving alimony will often deny cohabitation, but that they maintain a separate residence from their new significant other.   This is usually a judgment call for the court, requiring a skilled Birmingham alimony lawyer & spousal support attorney to present the proper convincing evidence.  Tens of thousands of dollars (if not hundreds of thousands of dollars) usually hinge on the outcome of these alimony termination hearings.
                  </p>

                  <p className="font-sans text-sm sm:text-base text-gray-750 text-justify">
                    Even if you do not seek to terminate periodic alimony completely, unlike alimony in gross, it can be modified if there has been a material change in circumstances.  The most common example our Alabama divorce attorneys see is a change in the income of the alimony payor.  If the payor’s income is decreased substantially, they can petition the court to modify the periodic alimony to a lower amount.   Similarly, if the paying spouse begins making more money, the alimony recipient may seek an Order from the divorce court judge increasing the alimony amount.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="font-sans text-sm sm:text-base text-brand-navy font-semibold text-justify">
                    If you have questions about alimony in your divorce contact our experienced Birmingham alimony lawyer & spousal attorney .  Alimony can be a complex topic, and you need to know what the pros and cons of alimony in gross and periodic alimony are before making any divorce agreement.  At Boles Holmes White LLC we are ready to answer all of your Alabama alimony questions
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
                        <option value="Divorce / Family Law">Divorce / Family Law (Alimony)</option>
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