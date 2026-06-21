"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scale, ShieldCheck, Landmark, AlertTriangle,
  ArrowRight, Mail, Phone, User, PhoneCall, CheckCircle2, ChevronDown
} from 'lucide-react';

import FeaturedLogos from '@/components/FeaturedLogos';
import FAQ from '@/components/home/FAQ';

export default function AlabamaDrunkDrivingLawsPage() {
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
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="dui-laws-page">
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
            <span>DUI Defense Practice</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="personal-page-main-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Alabama Drunk Driving Laws
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
                Alabama Drunk Driving Laws and Penalties
              </h2>
              <h3 className="font-serif text-lg sm:text-xl text-brand-gold font-semibold italic border-l-4 border-brand-navy pl-4" id="personal_subheading_2">
                There are two avenues of punishment everyone should consider when arrested for DUI.  There are civil issues and criminal issues.
              </h3>
            </div>

            {/* Segment 1: Civil Issues (Driver's License) */}
            <div className="space-y-4" id="civil-issues-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-navy/5 text-brand-navy rounded-md">
                  <Landmark className="w-5 h-5 sm:h-6 sm:w-6 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  The Civil Issues: Driver s License Consequences
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-6">
                  The civil issues are those concerning a driver’s license.  For a first DUI conviction, the driver’s license will be suspended for 90 days.  If during the DUI arrest a driver refuses to take a breath test, has a passenger under the age of 14 within the vehicle, or someone other than the driver is injured during the operation of the vehicle, then the driver’s license will be suspended for 90 days and an ignition interlock device shall be installed for a period of two years.  If a driver provides a breath test and the result is .15 or higher, the driver’s license will be suspended for one year.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a second DUI conviction within a five-year period, the driver’s license will be revoked for one year and an ignition interlock device must be installed for a period of two years.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a third DUI conviction within a five-year period, the driver’s license will be revoked for three years and an ignition interlock device must be installed for a period of three years.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-gold rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a fourth or subsequent DUI conviction within a five-year period, the driver’s license will be revoked for five years and an ignition interlock device must be installed for a period of five years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Segment 2: Criminal Aspect */}
            <div className="space-y-4" id="criminal-aspect-section">
              <div className="flex items-center gap-2.5">
                <div className="p-2 sm:p-2.5 bg-brand-gold/10 text-brand-gold rounded-md">
                  <Scale className="w-5 h-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                  The Criminal Aspect: Fines &amp; Incarceration
                </h3>
              </div>
              
              <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-150 shadow-sm leading-relaxed">
                <p className="font-sans text-sm sm:text-base text-gray-750 text-justify mb-6">
                  The second avenue that a person arrested for DUI must be concerned with is the criminal aspect of the arrest.  This can range from fines/probation to being incarcerated for a length of time.  For a first DUI conviction, the court must impose a fine of at least $600 and not more than $2,100.  A driver can also be sentenced to serve up to a year in jail.  If the driver provides a breath test of .15 or higher, the minimum fine double to $1,200.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-navy rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a second DUI conviction within a five-year period, the court must impose a fine of $1,100 and not more than $5,100.  The court can sentence a person up to a year in jail and must sentence the driver to at least five days in jail or 30 hours of community service.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-navy rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a third DUI conviction within a five-year period, the court must impose a fine of $2,200 and not more than $10,100.  The court can sentence a person up to a year in jail and must sentence the driver to at least 60 days in jail.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-4 border-brand-navy rounded-r">
                    <p className="text-xs sm:text-sm text-gray-700 text-justify">
                      For a fourth DUI conviction within a five-year period, the driver can be found guilty of a Class C felony.  The punishment for this offense is a minimum fine of $4,100 and not more than $10,100.  The driver may also be incarcerated for a period of one year and one day up to ten years.  The mandatory sentence for a fourth conviction is ten days incarceration.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r flex gap-3 items-start mb-6">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm text-amber-900 text-justify">
                      If a driver provides a breath test with a .15 or higher, the court shall punish the driver of the vehicle with double the minimum punishment as discussed above.  This means that fines and jail sentences will be doubled.
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <p className="font-sans text-sm sm:text-base text-brand-navy font-bold text-justify mb-2">
                    A conviction can have a serious impact upon the daily lives of those individuals arrested for DUI.
                  </p>
                  <p className="font-sans text-sm sm:text-base text-gray-750 text-justify">
                    The attorneys at Boles Holmes White LLC have specialized in the defense of those drivers charged with DUI.  Allow us to walk you through this process.
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
                        <option value="DUI Defense">DUI Defense (Laws &amp; Penalties)</option>
                        <option value="Criminal Defense">Criminal Defense</option>
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