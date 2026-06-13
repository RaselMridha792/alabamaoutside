"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MessageSquare, X, ChevronUp, CheckCircle, 
  Send, User, Landmark, HelpCircle, MapPin, Building, ShieldCheck
} from 'lucide-react';
import { SMS_CONSENT_TEXT } from '../../data';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [chatSubmitted, setChatSubmitted] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Form states
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    aboutLaw: '',
    message: ''
  });

  // Chat states
  const [chatStep, setChatStep] = useState(1);
  const [chatAnswers, setChatAnswers] = useState({
    name: '',
    contact: '',
    area: '',
    details: ''
  });
  const [chatInput, setChatInput] = useState('');

  const widgetRef = useRef(null);

  // Close widget on clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Stop pulsing animation once opened
  useEffect(() => {
    if (isOpen) {
      setPulse(false);
    }
  }, [isOpen]);

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitFormInquiry = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', aboutLaw: '', message: '' });
      setIsOpen(false);
    }, 4500);
  };

  // Chat conversational progression helper
  const handleChatNext = (e) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() && chatStep !== 3) return;

    if (chatStep === 1) {
      setChatAnswers(prev => ({ ...prev, name: chatInput }));
      setChatInput('');
      setChatStep(2);
    } else if (chatStep === 2) {
      setChatAnswers(prev => ({ ...prev, contact: chatInput }));
      setChatInput('');
      setChatStep(3);
    } else if (chatStep === 3) {
      setChatAnswers(prev => ({ ...prev, area: chatInput }));
      setChatInput('');
      setChatStep(4);
    } else if (chatStep === 4) {
      setChatAnswers(prev => ({ ...prev, details: chatInput }));
      setChatInput('');
      setChatSubmitted(true);
      setTimeout(() => {
        setChatSubmitted(false);
        setChatStep(1);
        setChatAnswers({ name: '', contact: '', area: '', details: '' });
        setIsOpen(false);
      }, 5000);
    }
  };

  const handleChatOptionSelect = (option) => {
    setChatAnswers(prev => ({ ...prev, area: option }));
    setChatStep(4);
  };

  return (
    <div 
      ref={widgetRef} 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans select-none pointer-events-auto"
      id="global-floating-contact-widget"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 260 }}
            className="absolute bottom-16 right-0 w-[92vw] sm:w-[410px] bg-brand-navy-light text-white rounded-xl shadow-2xl border border-brand-gold/20 overflow-hidden mb-2"
            id="floating-contact-panel"
          >
            {/* Header banner */}
            <div className="bg-brand-navy p-4 pb-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping" />
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Privileged Duty Advisor</h3>
                  <p className="text-[10px] text-brand-gold font-semibold uppercase tracking-widest">BHW Confidential Triage</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 px-1.5 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white rounded border border-white/10 cursor-pointer"
                id="btn-close-floating-panel"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Panel Mode Select Tabs */}
            <div className="grid grid-cols-3 bg-brand-navy/60 border-b border-white/5 text-center text-xs">
              <button 
                onClick={() => { setActiveTab('form'); setFormSubmitted(false); }}
                className={`py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'form' ? 'text-brand-gold border-b-2 border-brand-gold bg-brand-navy-light' : 'text-gray-400 hover:text-white'}`}
                id="tab-intake-form"
              >
                Intake Form
              </button>
              <button 
                onClick={() => { setActiveTab('chat'); setChatSubmitted(false); }}
                className={`py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'chat' ? 'text-brand-gold border-b-2 border-brand-gold bg-brand-navy-light' : 'text-gray-400 hover:text-white'}`}
                id="tab-interactive-chat"
              >
                Legal Chat
              </button>
              <button 
                onClick={() => setActiveTab('info')}
                className={`py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'info' ? 'text-brand-gold border-b-2 border-brand-gold bg-brand-navy-light' : 'text-gray-400 hover:text-white'}`}
                id="tab-direct-lines"
              >
                Direct Info
              </button>
            </div>

            {/* Panel Tab Content Container */}
            <div className="max-h-[380px] sm:max-h-[420px] overflow-y-auto p-4 sm:p-5 custom-scrollbar" id="floating-panel-inner-body">
              
              {/* TAB 1: Standalone Formal Case Evaluation Intake Form */}
              {activeTab === 'form' && (
                <div>
                  {formSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95 }} 
                      animate={{ scale: 1 }} 
                      className="text-center py-8 space-y-4"
                    >
                      <CheckCircle className="w-12 h-12 text-brand-gold mx-auto" />
                      <h4 className="font-display font-bold text-white uppercase text-base tracking-wide">Inquiry Authenticated</h4>
                      <p className="text-xs text-gray-300 leading-relaxed max-w-[300px] mx-auto">
                        Your direct request file has been logged secure and routed to our Alabama Attorney on Duty. We will call you within two business hours.
                      </p>
                      <div className="text-[10px] text-gray-400 italic">Preeminent Regional Trial Representation</div>
                    </motion.div>
                  ) : (
                    <form onSubmit={submitFormInquiry} className="space-y-3 text-xs sm:text-sm">
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-gray-300 font-bold block">* First Name</label>
                          <input 
                            required 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleFormInputChange}
                            placeholder="First..."
                            className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"
                            id="floating-form-fname"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase text-gray-300 font-bold block">* Last Name</label>
                          <input 
                            required 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleFormInputChange}
                            placeholder="Last..."
                            className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"
                            id="floating-form-lname"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-gray-300 font-bold block">* Phone (Primary)</label>
                        <input 
                          required 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormInputChange}
                          placeholder="(205) 502-2000"
                          className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"
                          id="floating-form-phone"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-gray-300 font-bold block">* Email (Primary)</label>
                        <input 
                          required 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleFormInputChange}
                          placeholder="name@example.com"
                          className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"
                          id="floating-form-email"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-gray-300 font-bold block">* Practice Area of Inquiry</label>
                        <select 
                          required
                          name="aboutLaw"
                          value={formData.aboutLaw}
                          onChange={handleFormInputChange}
                          className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold select-none cursor-pointer"
                          id="floating-form-area"
                        >
                          <option value="" disabled>Select...</option>
                          <option value="Corporate &amp; Business">Corporate &amp; Business Litigation</option>
                          <option value="Government Investigations">Government Investigations</option>
                          <option value="White Collar Defense">White Collar Defense</option>
                          <option value="Professional License">Professional License Protection</option>
                          <option value="Criminal Defense / DUI">Criminal Defense / DUI</option>
                          <option value="Personal Injury">Personal Injury Claims</option>
                          <option value="Family Law">Divorce &amp; Family Law</option>
                          <option value="Other">Other Civil Challenges</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-gray-400 block">Brief Outline of your Case / Situation</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleFormInputChange}
                          rows={2.5}
                          placeholder="State high-level outline details of legal challenge..."
                          className="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-regular resize-none"
                          id="floating-form-msg"
                        />
                      </div>

                      <div className="text-[9px] text-gray-400 bg-brand-navy/60 p-2 border border-white/5 rounded leading-normal">
                        {SMS_CONSENT_TEXT}
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-2.5 bg-[#4CAF50] hover:bg-[#43A047] text-white font-extrabold uppercase text-xs tracking-wider rounded transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 shadow-md"
                        id="floating-form-submit-btn"
                      >
                        <span>SUBMIT SECURITY INQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* TAB 2: Dynamic Interactive guided counselor Chatbot */}
              {activeTab === 'chat' && (
                <div className="space-y-4">
                  {chatSubmitted ? (
                    <motion.div 
                      initial={{ scale: 0.95 }} 
                      animate={{ scale: 1 }} 
                      className="text-center py-10 space-y-4 text-xs"
                    >
                      <CheckCircle className="w-12 h-12 text-[#4CAF50] mx-auto" />
                      <h4 className="font-display font-medium text-white uppercase text-sm tracking-wide">Interactive Session Secure</h4>
                      <div className="bg-brand-navy/60 p-3 rounded text-left border border-white/5 space-y-1 max-w-[320px] mx-auto">
                        <p className="font-bold text-brand-gold text-[10px] uppercase tracking-wider">Session File Record:</p>
                        <p>&bull; <strong>Consultant:</strong> {chatAnswers.name}</p>
                        <p>&bull; <strong>Contact Stream:</strong> {chatAnswers.contact}</p>
                        <p>&bull; <strong>Practice Area:</strong> {chatAnswers.area}</p>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-relaxed max-w-[280px] mx-auto">
                        Thank you for executing this secure triage. An administrative litigation attorney has taken custody of your session data. We will make immediate telephone contact.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4 text-xs font-sans">
                      {/* Step Status Bar */}
                      <div className="flex justify-between items-center bg-brand-navy/70 px-3 py-1.5 rounded text-[9px] uppercase tracking-wider font-extrabold text-gray-400">
                        <span>Guided Counselor</span>
                        <span className="text-brand-gold">Progress Step {chatStep} of 4</span>
                      </div>

                      {/* Chat dialog panel */}
                      <div className="space-y-3 bg-brand-navy/40 p-3 rounded-lg border border-white/5">
                        
                        {/* Step 1 prompts */}
                        {chatStep >= 1 && (
                          <div className="space-y-1.5" id="chat-bubble-1">
                            <div className="flex gap-2 items-start">
                              <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold uppercase font-bold text-[9px] shrink-0">BHW</div>
                              <div className="bg-white/5 p-2 rounded-r-lg rounded-bl-lg text-xs leading-normal text-gray-200">
                                Welcome to BHW Trial Lawyers. To start a confidential triage session, what is your **Full Name**?
                              </div>
                            </div>
                            {chatAnswers.name && (
                              <div className="flex gap-2 items-center justify-end">
                                <span className="bg-brand-gold text-brand-navy font-bold px-2.5 py-1 rounded-l-lg rounded-br-lg text-[11px]">
                                  {chatAnswers.name}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Step 2 prompts */}
                        {chatStep >= 2 && (
                          <div className="space-y-1.5" id="chat-bubble-2">
                            <div className="flex gap-2 items-start">
                              <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold uppercase font-bold text-[9px] shrink-0">BHW</div>
                              <div className="bg-white/5 p-2 rounded-r-lg rounded-bl-lg text-xs leading-normal text-gray-200">
                                Thank you, {chatAnswers.name.split(' ')[0]}. What is the best **Phone Number or Email** to reach you at?
                              </div>
                            </div>
                            {chatAnswers.contact && (
                              <div className="flex gap-2 items-center justify-end">
                                <span className="bg-brand-gold text-brand-navy font-bold px-2.5 py-1 rounded-l-lg rounded-br-lg text-[11px]">
                                  {chatAnswers.contact}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Step 3 prompts */}
                        {chatStep >= 3 && (
                          <div className="space-y-1.5" id="chat-bubble-3">
                            <div className="flex gap-2 items-start">
                              <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold uppercase font-bold text-[9px] shrink-0">BHW</div>
                              <div className="bg-white/5 p-2 rounded-r-lg rounded-bl-lg text-xs leading-normal text-gray-200">
                                What category best matches your legal inquiry? You can select a quick action trigger below or enter an description.
                              </div>
                            </div>
                            
                            {!chatAnswers.area && (
                              <div className="grid grid-cols-2 gap-1.5 pl-8 pt-1">
                                {["White Collar Defense", "Civil Lawsuits", "Business Dispute", "Personal Injury Claim", "DUI & Criminal", "Government Fraud"].map((item, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleChatOptionSelect(item)}
                                    className="bg-brand-navy border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-navy-light text-[10px] text-left p-1.5 rounded transition-all font-semibold font-sans uppercase tracking-tight text-gray-200 cursor-pointer"
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            )}

                            {chatAnswers.area && (
                              <div className="flex gap-2 items-center justify-end">
                                <span className="bg-brand-gold text-brand-navy font-bold px-2.5 py-1 rounded-l-lg rounded-br-lg text-[11px]">
                                  {chatAnswers.area}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Step 4 prompts */}
                        {chatStep >= 4 && (
                          <div className="space-y-1.5" id="chat-bubble-4">
                            <div className="flex gap-2 items-start">
                              <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold uppercase font-bold text-[9px] shrink-0">BHW</div>
                              <div className="bg-white/5 p-2 rounded-r-lg rounded-bl-lg text-xs leading-normal text-gray-200">
                                Understood. Please supply any additional brief details about this situation so our administrative counselors can prepare properly before calling.
                              </div>
                            </div>
                            {chatAnswers.details && (
                              <div className="flex gap-2 items-center justify-end">
                                <span className="bg-brand-gold text-brand-navy font-bold px-2.5 py-1 rounded-l-lg rounded-br-lg text-[11px]">
                                  {chatAnswers.details}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                      </div>

                      {/* Chat text box entry form */}
                      <form onSubmit={handleChatNext} className="flex gap-2 items-center pt-1">
                        <input 
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          placeholder={
                            chatStep === 1 ? "Enter your Full Name..." :
                            chatStep === 2 ? "Enter your Phone or Email..." :
                            chatStep === 3 ? "Or type practice area details..." :
                            "Enter legal issue description outlines..."
                          }
                          className="flex-grow bg-brand-navy border border-white/10 rounded px-2.5 py-2.5 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"
                          id="chat-guided-input-box"
                        />
                        <button
                          type="submit"
                          className="p-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy rounded cursor-pointer transition-all shrink-0"
                          title="Send message"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Direct Contact Information */}
              {activeTab === 'info' && (
                <div className="space-y-4 text-xs font-sans leading-relaxed">
                  <div className="flex gap-2.5 bg-brand-navy/60 p-3 rounded border border-white/5">
                    <Building className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-medium text-white uppercase text-xs tracking-wider">Birmingham Headquarters</h4>
                      <p className="text-gray-300 text-xs mt-0.5">
                        1929 3rd Ave. North, Suite 500<br />
                        Birmingham, AL 35203
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 bg-brand-navy/60 p-3 rounded border border-white/5">
                    <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-medium text-white uppercase text-xs tracking-wider">Dothan Administration Suite</h4>
                      <p className="text-gray-300 text-xs mt-0.5">
                        Downtown Central Offices<br />
                        Dothan, AL 36301
                      </p>
                    </div>
                  </div>

                  {/* Immediate clickable hotphone */}
                  <a 
                    href="tel:205-502-2000" 
                    className="flex justify-between items-center group bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold uppercase px-4 py-3 rounded border border-brand-gold/10 transition-all duration-200"
                    id="info-dial-direct-btn"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4.5 h-4.5 animate-pulse" />
                      <span className="text-xs uppercase tracking-widest font-extrabold">Dial Primary Hotline</span>
                    </div>
                    <span className="text-sm font-sans tracking-tight">205-502-2000</span>
                  </a>

                  {/* Immediate mock interactive live agent email routing */}
                  <a 
                    href="mailto:intake@bolesholmes.com?subject=Confidential%20Legal%20Case%20Assessment"
                    className="flex justify-between items-center bg-white/5 hover:bg-white/10 text-white font-semibold uppercase px-4 py-3 rounded border border-white/10 transition-all text-xs"
                    id="info-email-direct-btn"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4.5 h-4.5" />
                      <span>Transmit Priority Email</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-sans tracking-wide">Secure Server Route</span>
                  </a>

                  {/* Attorney fiduciary protection disclaimers */}
                  <div className="p-3 bg-brand-navy rounded border border-white/5 flex gap-2.5 items-start text-[10px] text-gray-400 font-sans">
                    <ShieldCheck className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-bold text-gray-300 text-[9px] uppercase tracking-wider mb-0.5">Strict Privacy Bound</h5>
                      <p className="leading-normal">All interactive exchanges on this website are completely encrypted and bound under professional, state-level attorney-client communication privilege standards.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED PLATFORM WIDGET BAR */}
      <div 
        className={`bg-brand-navy text-white flex items-center justify-between rounded-full shadow-2xl border border-brand-gold/35 relative overflow-hidden transition-all duration-300 select-none ${isOpen ? 'ring-2 ring-brand-gold' : ''}`}
        id="floating-contact-bar-panel"
      >
        <div className="flex items-center gap-1.5 py-1 px-1.5 pr-3.5" id="floating-bar-controls">
          
          {/* Action 1: Toggle Widget Open/Close with Text */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase transition-all whitespace-nowrap cursor-pointer select-none ${isOpen ? 'bg-brand-navy-light text-brand-gold' : 'bg-brand-gold text-brand-navy hover:bg-brand-gold-dark'}`}
            id="btn-toggle-main-widget"
          >
            <LANDMARK_ICON className="w-3.5 h-3.5 animate-spin-slow text-current" />
            <span className="tracking-widest font-extrabold">{isOpen ? 'Close Center' : 'Contact Us'}</span>
            {isOpen ? <X className="w-3.5 h-3.5 ml-0.5" /> : <ChevronUp className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {/* Vertical divider */}
          <span className="h-5 w-px bg-white/15 block" />

          {/* Action 2: Quick Telephone dialer */}
          <a
            href="tel:205-502-2000"
            onClick={(e) => {
              if (window.innerWidth >= 640) {
                e.preventDefault();
                setIsOpen(true);
                setActiveTab('info');
              }
            }}
            className="p-2 text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-full transition-all flex items-center gap-1 inline-flex cursor-pointer"
            id="widget-btn-phone"
            title="Telephonic Hotline consultation"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase font-bold tracking-tight hidden sm:inline">Call</span>
          </a>

          {/* Action 3: Quick Email triggers */}
          <a
            href="mailto:intake@bolesholmes.com?subject=Secure%20Contact%20Request"
            onClick={(e) => {
              if (window.innerWidth >= 640) {
                e.preventDefault();
                setIsOpen(true);
                setActiveTab('form');
              }
            }}
            className="p-2 text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-full transition-all flex items-center gap-1 inline-flex cursor-pointer"
            id="widget-btn-email"
            title="Email intake division"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase font-bold tracking-tight hidden sm:inline">Email</span>
          </a>

          {/* Action 4: Quick chat assistant tab toggle */}
          <button
            onClick={() => {
              setIsOpen(true);
              setActiveTab('chat');
            }}
            className="p-2 text-gray-300 hover:text-brand-gold hover:bg-white/5 rounded-full transition-all flex items-center gap-1 inline-flex cursor-pointer"
            id="widget-btn-chat"
            title="Start Interactive Guided Consultation"
          >
            <MessageSquare className="w-3.5 h-3.5 text-brand-gold-light" />
            <span className="text-[10px] uppercase font-bold tracking-tight hidden sm:inline">Chat</span>
          </button>

        </div>
      </div>
    </div>
  );
}

// Minimalist local Scales of Justice icon
function LANDMARK_ICON({ className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1"/>
      <path d="M18 8h4a1 1 0 0 1 1 1v1a5 5 0 0 1-5 5h-3"/>
      <path d="M8 8H4a1 1 0 0 0-1 1v1a5 5 0 0 0 5 5h3"/>
      <line x1="2" y1="2" x2="22" y2="22"/>
    </svg>
  );
}