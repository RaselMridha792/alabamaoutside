"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

// import { Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

// ✅ lucide icons (valid ones only)
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

// ✅ social icons (react-icons থেকে)
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";

import { HERO_CONTENT, ABOUT_CONTENT, OFFICE_INFO, ATTORNEYS, DISCLAIMERS } from '../../data';

export default function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-brand-navy-light text-gray-300 pt-16 pb-12 border-t border-brand-gold/10" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Newsletter Subscribe Section */}
        <div className="bg-brand-navy border border-brand-gold/15 p-8 sm:p-10 rounded-lg shadow-xl mb-16 relative overflow-hidden" id="newsletter_box">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-2">
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                Subscribe to our newsletter
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans">
                Review supreme court decisions, regional regulatory shifts, and hot white collar counsel.
              </p>
            </div>

            <div className="lg:col-span-7">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="newsletter_email"
                      placeholder="Enter your secure business email"
                      className="w-full bg-brand-navy-light text-white text-xs sm:text-sm pl-11 pr-4 py-3.5 rounded-sm border border-white/10 focus:outline-none focus:border-brand-gold text-gray-200"
                    />
                  </div>
                  <button
                    type="submit"
                    id="newsletter_submit"
                    className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 p-4 bg-brand-gold/10 border border-brand-gold/30 text-brand-gold rounded-sm" id="newsletter_success">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Subscription Successful - Welcome to our Advisory List</span>
                </div>
              )}
            </div>
          </div>
          
        </div>

        {/* Middle: Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Firm description */}
          <div className="lg:col-span-5 space-y-6">
            <img 
              src={HERO_CONTENT.logoImage} 
              alt="Boles Holmes White Gold brand logo" 
              className="h-10 sm:h-12 object-contain filter brightness-100"
              referrerPolicy="no-referrer"
            />
            <h4 className="text-xs font-bold text-white uppercase tracking-widest hidden">BOLES HOLMES WHITE LLC</h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans" id="footer_about_text">
              Boles Holmes White LLC is a full-service law firm providing transactional, litigation, government relations and white collar/criminal defense. We represent both businesses and individuals throughout the Southeast Region. As a full-service law firm with roots in the small town of Dothan and with large Birmingham firm experience, all of our attorneys strive to provide clients “big firm” representation with “small town” accessibility and personal attention. That is what sets us apart.
            </p>

            {/* Alabama bar associations mandate bar representation statement */}
            <p className="text-[10px] sm:text-xs text-amber-500/85 leading-relaxed font-serif italic border-l border-brand-gold/35 pl-3" id="footer_bar_disclaimer">
              {DISCLAIMERS.barDisclaimer}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 items-center pt-2">
              <a href="https://www.facebook.com/bhwlaw" id="footer_fb" className="bg-white/5 hover:bg-brand-gold text-white hover:text-brand-navy p-2 rounded-full transition-all duration-300" aria-label="Facebook">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/BHWLaw" id="footer_tw" className="bg-white/5 hover:bg-brand-gold text-white hover:text-brand-navy p-2 rounded-full transition-all duration-300" aria-label="Twitter">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/bhwlaw/" id="footer_ig" className="bg-white/5 hover:bg-brand-gold text-white hover:text-brand-navy p-2 rounded-full transition-all duration-300" aria-label="Instagram">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/bhwlaw/" id="footer_li" className="bg-white/5 hover:bg-brand-gold text-white hover:text-brand-navy p-2 rounded-full transition-all duration-300" aria-label="LinkedIn">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Offices */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">
              Offices
            </h4>
            
            <div className="space-y-4">
              {OFFICE_INFO.map((office) => (
                <div key={office.name} className="space-y-2 text-xs sm:text-sm" id="footer_office_block">
                  <h5 className="font-bold text-brand-gold text-xs tracking-wider uppercase">{office.name}</h5>
                  <p className="text-gray-400 font-sans leading-relaxed">
                    {office.addressLine1}
                    <br />
                    {office.addressLine2}
                  </p>
                  <a 
                    href={`tel:${office.phone}`} 
                    className="inline-flex items-center gap-1.5 font-bold hover:text-brand-gold text-white transition-colors mt-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone: {office.phone}</span>
                  </a>
                </div>
              ))}
              
              {/* Secondary Office Note for Dothan (mentioned heavily in copy context) */}
              <div className="pt-2 border-t border-white/5 text-[11px] text-gray-500">
                <h6 className="font-semibold text-gray-400 uppercase">Dothan Liaison</h6>
                <p className="mt-1 font-sans">Roots rooted in Dothan, AL. Attorneys available representation throughout the country.</p>
              </div>
            </div>
          </div>

          {/* Resources Directory (Attorneys) */}
          <div className="lg:col-span-2 space-y-6" id="attorneys">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">
              Resources
            </h4>
            
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {ATTORNEYS.map((attorney) => (
                <li key={attorney.name} className="group" id={`footer_attorney_${attorney.name.toLowerCase().replace(/[^a-z0-9]/g, '_')}`}>
                  <a 
                    href="#attorneys-page" 
                    onClick={(e) => {
                      if (setCurrentPage) {
                        e.preventDefault();
                        setCurrentPage('attorneys');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-brand-gold block transition-colors duration-200 cursor-pointer"
                  >
                    <span className="font-semibold block text-white group-hover:text-brand-gold">{attorney.name}</span>
                    <span className="text-[10px] text-gray-500 block group-hover:text-brand-gold/80">{attorney.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">
              Legal Info
            </h4>
            
            <ul className="space-y-3 text-xs uppercase tracking-wider font-semibold">
              <li>
                <a href="#footer" onClick={() => alert('Confidentiality: All communications bound by strict attorney-client privilege. Privacy policy details available by contacting administrative suite.')} className="text-gray-400 hover:text-brand-gold duration-200 block" id="link_privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#footer" onClick={() => alert('Terms of Service: By querying this server, all rights of dispute remain limited to standard arbitrations in Birmingham, AL.')} className="text-gray-400 hover:text-brand-gold duration-200 block" id="link_terms">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#footer" onClick={() => alert('Disclaimer statement: General litigation services are non-representational unless formalized contract signed by managing principal partner.')} className="text-gray-400 hover:text-brand-gold duration-200 block" id="link_disclaimer">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom: Copyright ribbon */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p id="copyright_p">
            {DISCLAIMERS.copyright}
          </p>
          <div className="flex gap-4 items-center">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span className="font-sans text-[10px] tracking-wide uppercase">Elite Corporate Counsel &bull; Proudly Serving Dothan & Birmingham</span>
          </div>
        </div>

      </div>
    </footer>
  );
}