"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { OFFICE_INFO, SMS_CONSENT_TEXT, CONTACT_PAGE_IMAGE } from "../../data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the SMS communications statement to proceed.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
      });
    }, 1500);
  };

  const selectFAQ = [
    {
      q: "Are Initial Consultations Confidential?",
      a: "Yes. Every inquiry, call, and written communication made through this secure server is immediately subject to attorney-client privilege. Your circumstances will not be shared with any state or corporate entity.",
    },
    {
      q: "Where do you handle criminal and regulatory cases?",
      a: "Our firm’s physical offices are in Birmingham and Dothan, Alabama. However, our trial attorneys handle complex federal defense, white collar government investigations, and civil litigation matters throughout the United States. In other jurisdictions, our attorneys gain temporary admission via pro hac vice rules.",
    },
    {
      q: "What is your hourly rate or retainer cost?",
      a: "Fee models vary by case. Personal Injury and Class Action cases generally proceed under contingent arrangements. Complex White Collar investigations, criminal indictments, and outside business consultations typically operate on custom retainer schedules or structured milestones.",
    },
  ];

  return (
    <div
      className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16"
      id="contact-page-view"
    >
      {/* Hero Section */}
      <section
        className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden"
        id="contact-hero"
      >
        <div className="absolute inset-0 opacity-85">
          <Image
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg"
            alt="Courthouse Contact Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/60 to-brand-navy/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12 animate-fade-in">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="contact-page-main-header-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-lg"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* Main Container */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        id="contact-main"
      >
        {/* Contact info row - three equal-height cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch mb-10"
          id="contact-info-row"
        >
          {/* CARD 1: Location */}
          <div
            className="bg-white p-7 rounded-lg border border-gray-150 shadow-sm flex flex-col gap-5"
            id="contact_card_location"
          >
              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-brand-navy rounded-sm text-brand-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block font-mono">
                    Headquarters Location
                  </span>
                  <h2 className="font-display text-lg font-bold text-brand-navy tracking-wide uppercase">
                    Birmingham Office
                  </h2>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 text-xs sm:text-sm text-gray-600">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <p className="font-sans leading-relaxed text-justify">
                    1929 3rd Ave. North, Suite 500
                    <br />
                    Birmingham, AL 35203
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10.5px] font-extrabold text-gray-400 font-mono">
                  ESTABLISHED LITIGATION SUITE
                </span>
                <span className="text-xs font-bold text-brand-gold uppercase">
                  Suite 500
                </span>
              </div>
            </div>

            {/* CARD 2: Consultation Hours */}
            <div
              className="bg-white p-7 rounded-lg border border-gray-150 shadow-sm flex flex-col gap-5"
              id="office_hours_card"
            >
              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-brand-navy rounded-sm text-brand-gold">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block font-mono">
                    Office Schedule
                  </span>
                  <h2 className="font-display text-lg font-bold text-brand-navy tracking-wide uppercase">
                    Consultation Hours
                  </h2>
                </div>
              </div>
              <ul className="mt-auto space-y-3 pt-2 text-xs sm:text-sm font-sans text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2 leading-snug">
                  <span>Monday - Friday</span>
                  <span className="font-bold text-brand-navy">
                    8:00 AM - 5:00 PM
                  </span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2 leading-snug">
                  <span>Saturday</span>
                  <span className="text-amber-600 font-semibold uppercase">
                    By Appointment
                  </span>
                </li>
                <li className="flex justify-between leading-snug">
                  <span>Emergency Line</span>
                  <span className="text-brand-gold font-bold">
                    24 / 7 Active
                  </span>
                </li>
              </ul>
            </div>

            {/* CARD 3: Direct Contact */}
            <div
              className="bg-white p-7 rounded-lg border border-gray-150 shadow-sm flex flex-col gap-5"
              id="contact_card_direct"
            >
              <div className="flex items-center gap-3">
                <div className="p-3.5 bg-brand-navy rounded-sm text-brand-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block font-mono">
                    Direct Line
                  </span>
                  <h2 className="font-display text-lg font-bold text-brand-navy tracking-wide uppercase">
                    Reach Us
                  </h2>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:205-502-2000"
                  className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-bold hover:text-brand-gold transition-colors font-sans"
                >
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>205-502-2000</span>
                </a>

                <a
                  href="mailto:info@bolesholmes.com"
                  className="flex items-center gap-3 text-xs sm:text-sm text-brand-navy font-bold hover:text-brand-gold transition-colors font-sans"
                >
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10.5px] font-extrabold text-gray-400 font-mono">
                  EMERGENCY DEFENSE LINE
                </span>
                <span className="text-xs font-bold text-brand-gold uppercase">
                  24 / 7
                </span>
              </div>
            </div>
        </div>

        {/* CONTACT FORM - centered below the info row */}
        <section
          className="max-w-3xl mx-auto w-full bg-white p-8 sm:p-10 rounded-lg border border-gray-150 shadow-md space-y-8"
          id="contact-right-section"
        >
            <div className="space-y-3 border-b border-gray-100 pb-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-tight">
                Schedule a Consultation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed text-b">
                Transmit your details to our intake partners. All data and
                queries are held in ironclad legal confidence.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact_intake_form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="form_first_name"
                        className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest font-sans"
                      >
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        id="form_first_name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold/60 text-gray-800 transition-all font-sans font-medium"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="form_last_name"
                        className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest font-sans"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        id="form_last_name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold/60 text-gray-800 transition-all font-sans font-medium"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="form_phone"
                        className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest font-sans"
                      >
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        id="form_phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold/60 text-gray-800 transition-all font-sans font-medium"
                        placeholder="205-502-2000"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="form_email"
                        className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest font-sans"
                      >
                        Secure Email Address
                      </label>
                      <input
                        required
                        type="email"
                        id="form_email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold/60 text-gray-800 transition-all font-sans font-medium"
                        placeholder="john.doe@corporate.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="form_message"
                      className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest font-sans"
                    >
                      Case Brief / Context Description
                    </label>
                    <textarea
                      required
                      id="form_message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded bg-slate-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold/60 text-gray-800 transition-all resize-none font-sans font-medium"
                      placeholder="Please outline the dates, parties, regulatory authorities, or criminal allegations currently present..."
                    />
                  </div>

                  {/* SMS CONSENT SECTION */}
                  <div
                    className="bg-slate-50 p-4 border border-gray-150 rounded text-[10px] leading-relaxed text-gray-500 space-y-3 text-justify relative"
                    id="consent_container_box"
                  >
                    <div className="flex gap-2.5 items-start">
                      <input
                        required
                        type="checkbox"
                        id="form_consent_checkbox"
                        checked={formData.consent}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            consent: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded border-gray-300 text-brand-gold focus:ring-brand-gold h-3.5 w-3.5 shrink-0 cursor-pointer"
                      />
                      <label
                        htmlFor="form_consent_checkbox"
                        className="font-sans text-[10px] text-gray-500 select-none cursor-pointer"
                      >
                        {SMS_CONSENT_TEXT ||
                          "By providing your phone number, you consent to receive automated informational/conversational SMS communications. Consent is not a condition of service. Message & data rates may apply and frequency will vary. Reply STOP to unsubscribe."}
                      </label>
                    </div>

                    <div className="flex gap-1.5 pt-1 text-[9.5px] items-center text-[#C5A85C] font-semibold uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>
                        Compliant with standard Lawmatics integration
                        requirements
                      </span>
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-navy hover:bg-brand-navy-light text-brand-gold font-bold text-xs uppercase tracking-wider py-4 rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                      id="contact_form_submit_btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
                          <span>Securing transmission channel...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 inline-block" />
                          <span>Submit Legal Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-navy text-white p-8 text-center rounded border border-brand-gold/30 space-y-4"
                  id="contact_form_success_feedback"
                >
                  <CheckCircle2 className="w-14 h-14 text-brand-gold mx-auto animate-bounce" />
                  <h3 className="font-display text-lg font-bold uppercase text-brand-gold tracking-wide">
                    Brief Safely Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.firstName}. Your consultation brief has
                    been recorded on our secure intake channels. A managing
                    litigation partner will review and contact you on the secure
                    phone and email provided.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-4.5 py-2.5 bg-brand-navy-light border border-brand-gold/20 text-white rounded hover:border-brand-gold hover:text-brand-gold hover:bg-brand-navy transition-all text-xs uppercase font-semibold"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS - Homepage-style accordion */}
        <section className="mt-24" id="contact-faq-section">
          <div className="bg-[#0A192F] rounded-2xl py-16 px-6 sm:px-10 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white max-w-3xl mx-auto">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-brand-gold mx-auto" />
            </div>

            {/* Accordion */}
            <div className="max-w-3xl mx-auto flex flex-col gap-6">
              {selectFAQ.map((faq, idx) => {
                const isOpen = openFAQ === idx;
                return (
                  <div
                    key={idx}
                    className="border border-brand-gold/20 rounded-lg overflow-hidden bg-brand-navy-light h-fit"
                    id={`faq_item_${idx}`}
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : idx)}
                      className={`w-full px-6 py-5 flex items-start justify-between gap-4 transition-colors duration-300 ${
                        isOpen ? "bg-brand-navy" : "hover:bg-brand-navy/80"
                      }`}
                    >
                      <span className="font-display text-sm sm:text-base font-bold text-brand-gold text-left">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-2 bg-brand-navy">
                            <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed text-justify">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GOOGLE MAP REGION */}
        <section className="mt-24 space-y-4" id="google-maps-section">
          <h3 className="font-display text-xs font-extrabold text-[#C5A85C] uppercase tracking-widest border-b border-gray-200 pb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            <span>Birmingham Litigation Chambers Map</span>
          </h3>

          <div
            className="w-full h-96 bg-gray-200 rounded border border-gray-150 overflow-hidden shadow-sm relative group"
            id="embedded_maps_iframe_box"
          >
            <iframe
              src="https://maps.google.com/maps?q=1929%203rd%20Ave%20N%20%23500%2C%20Birmingham%2C%20AL%2035203&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Boles Holmes White Suite 500 Birmingham Location Map"
            />
            {/* Subtle premium cover overlay */}
            <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-sm px-3 py-1.5 rounded text-white text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 pointer-events-none border border-brand-gold/15 shadow">
              <MapPin className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
              <span>Suite 500 &bull; Historic 3rd Avenue North</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
