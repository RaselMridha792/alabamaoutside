"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, Building, Home, ShieldCheck, Compass, Users, Phone, ArrowRight, CheckCircle2, Award,
  Scale, FileText, Landmark, Shield, Cpu, Zap, Handshake, Globe, DollarSign, Heart, ExternalLink,
  BookOpen, Star, Sparkles
} from 'lucide-react';

const INDUSTRIES = [
  { name: 'Real Estate', icon: Home, desc: 'Property, zoning, & commercial portfolios' },
  { name: 'Banking', icon: DollarSign, desc: 'Commercial tier-one lending & finance compliance' },
  { name: 'Telecommunications', icon: Zap, desc: 'Regulatory filings and infrastructure licensing' },
  { name: 'Environmental', icon: ShieldCheck, desc: 'EPA counsel and site protection advisory' },
  { name: 'Transportation', icon: Globe, desc: 'Interstate shipping, freight, & logistics' },
  { name: 'Mining', icon: Landmark, desc: 'Natural resources, lease extraction & environmental' },
  { name: 'Technology', icon: Cpu, desc: 'Early stage startups & IP protection' },
  { name: 'Media', icon: BookOpen, desc: 'Licensing, publication, & content distribution' },
  { name: 'Healthcare', icon: Heart, desc: 'Regulatory clearance, compliance, & HHS-OIG defense' },
  { name: 'Manufacturing', icon: Building, desc: 'Supply chains, corporate defense, & distribution' }
];

const GENERAL_COUNSEL_SERVICES = [
  'General Corporate Counseling',
  'Contract Negotiations',
  'Licensing & Joint Ventures',
  'Mergers, Acquisitions & Dispositions',
  'Employment Counseling',
  'Business Entity Formation',
  'Commercial Real Estate Transactions',
  'Commercial Lending',
  'Litigation',
  'Tax Matters',
  'Patent Filings',
  'International Transactions'
];

export default function AboutPage({ onNavigateToContact }) {
  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth">
      {/* Premium Hero Section with Subtle Overlay */}
      <section className="relative h-[60vh] sm:h-[65vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="about-hero">
        {/* Background Image: Courthouse to match exactly with beautiful, subtle gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg')" }}
        />
        {/* Very subtle gold/navy radial and linear gradient overlay for excellent contrast and clean image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/50 to-brand-navy/95" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-brand-navy/30 to-brand-navy/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          {/* Accent Gold Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/85 border border-brand-gold/45 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span>Dedicated Representation</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="about-page-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-4 drop-shadow-md"
          >
            About BHW
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="about-page-subtitle"
            className="font-serif text-lg sm:text-xl md:text-2xl text-brand-gold-light max-w-3xl mx-auto font-medium italic drop-shadow"
          >
            Best Full Service Law Firm in Birmingham Alabama
          </motion.p>
        </div>

        {/* Diagonal border accent at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-50 transform origin-bottom-left skew-y-1 block" />
      </section>

      {/* Main Narrative - Story & General Counsel Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto -mt-8">
        <div className="bg-white rounded-xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-gray-100">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Full Copy intro */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5 text-xs text-brand-gold font-bold uppercase tracking-widest">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <span>Our Capabilities</span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl text-brand-navy font-bold uppercase tracking-tight">
                Corporate &amp; General Counsel Excellence
              </h2>

              <p className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                Boles Holmes White LLC is a boutique full-service law firm in Birmingham Alabama. It providing general and corporate counsel legal services and litigation services to businesses, individuals, entrepreneurs, government offices and entities, and business clients in industries such as real estate, banking, telecommunications, environmental, transportation, mining, technology, media, healthcare and manufacturing sectors. We advise a broad range of clients from mature companies capturing market share to early stage start-up companies. We provide organizations with services typically provided by a general counsel and outside corporate counsel in a cost-effective, efficient and responsive manner. Our general counsel and transaction services concentrate on general corporate counseling; contract negotiations; licensing and joint venture transactions; mergers, acquisitions and dispositions; employment counseling; business entity formation, commercial real estate transactions commercial lending; litigation, tax matters, patent filings, and international transactions, to name a few.
              </p>

              {/* Verified Badge / Highlights Bar */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-brand-gold/10 text-brand-navy rounded">
                    <Shield className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-navy">General Counsel Advisory</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">Comprehensive legal counsel tailored for high growth &amp; enterprise portfolios.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 bg-brand-gold/10 text-brand-navy rounded">
                    <Handshake className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-navy">Transactional Precision</h4>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">Securing license agreements, contract operations, and cross-border transactions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic services list representation to match premium styling */}
            <div className="lg:col-span-12 xl:col-span-5 bg-brand-navy rounded-lg p-6 sm:p-8 text-white space-y-6 shadow-xl border border-white/5">
              <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold border-b border-brand-gold/20 pb-3">
                Corporate Counseling Focus
              </h3>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-3.5">
                {GENERAL_COUNSEL_SERVICES.map((item, id) => (
                  <li key={id} className="flex gap-3 items-start text-xs sm:text-sm text-gray-200 hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Grid of Represented Industries (verbatim from copy list) */}
          <div className="mt-20 border-t border-gray-100 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase block mb-2">Multidisciplinary Reach</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-brand-navy">
                Industries Served throughout the United States
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 font-sans">
                Representing organizations across key commercial sectors, from local boutiques to international conglomerates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div 
                    key={industry.name} 
                    className="p-5 bg-gray-50/70 border border-gray-200/50 rounded-lg hover:border-brand-gold/30 hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300 mb-3" />
                    <h4 className="font-display text-xs font-bold uppercase text-brand-navy tracking-wide mb-1">
                      {industry.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-sans leading-snug">
                      {industry.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Defense & Criminal Inquiries - Verbatim Paragraph B */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        {/* Subtle decorative geometric lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Verbatim Copy Block */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-widest">
                <span className="w-6 h-[1px] bg-brand-gold"></span>
                <span>Defense &amp; Federal Investigations</span>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                Nationwide Criminal &amp; Regulatory Defense
              </h2>

              <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Our corporate law attorneys and business attorneys have particular expertise and experience in providing legal services and business counseling to small, medium, and large businesses in a full range of business, commercial, and litigation matters. Our defense and personal injury litigation attorneys are well versed in negotiation and claim settlement. Our criminal defense attorneys have a well-deserved reputation for excellence in criminal defense. Our Experienced lawyers have successfully defended clients against criminal charges throughout Alabama, Florida, Louisiana, Michigan, California, and many other states. Our experience has helped thousands of clients. Boles Holmes White has represented and assisted public and private companies to navigate the investigatory process from agencies like the Department of Justice, FDA, EPA, SEC, CBP, Office of Foreign Assets Control, and Health and Human Services – Office of Inspector General. In matters ranging from allegations of health care, securities, tax, and mortgage fraud to RICO violations, bribery and money laundering, immigration offenses, offenses under the Foreign Corrupt Practices Act, theft of trade secrets, economic espionage, IP offenses, and even NAFTA violations, our lawyers provide timely, capable defense against both civil and criminal investigations and prosecution.
              </p>

              {/* State Defense Indicator Banner */}
              <div className="bg-brand-navy-light/60 border border-brand-gold/20 p-5 rounded-md flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <h4 className="font-display text-xs font-bold uppercase text-brand-gold">Admissions Across Five Vital Jurisdictions</h4>
                  <p className="text-[11px] text-gray-400 font-sans mt-0.5">Litigators active on state &amp; federal panels nationwide.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Alabama', 'Florida', 'Louisiana', 'Michigan', 'California'].map((state) => (
                    <span key={state} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase font-bold text-gray-300 rounded">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Visual Representation of Investigatory Agencies & Allegations */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Box 1: Federal Regulatory Agencies Defended */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                  <Scale className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    Agencies Navigated
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {[
                    'DOJ (Dept of Justice)',
                    'FDA (Food & Drug Admin)',
                    'EPA (Environmental Protection)',
                    'SEC (Securities & Exchange)',
                    'CBP (Customs & Border)',
                    'OFAC (Foreign Assets)',
                    'HHS - OIG (Health & Human)'
                  ].map((agency) => (
                    <div key={agency} className="flex gap-2 items-center text-gray-300 bg-brand-navy-light/40 hover:bg-brand-navy-light/95 px-3 py-2 rounded border border-white/5">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      <span className="font-medium text-[10px] sm:text-xs">{agency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: Defended Matters Breakdown */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 shadow-xl">
                <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                  <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    Allegations Defended
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 text-[10px]">
                  {[
                    'Healthcare Fraud', 'Securities Fraud', 'Tax & Mortgage Fraud',
                    'RICO Violations', 'Bribery', 'Money Laundering',
                    'Immigration Offenses', 'FCPA Enforcement', 'Theft of Trade Secrets',
                    'Economic Espionage', 'IP Violations', 'NAFTA Disputes'
                  ].map((matter) => (
                    <span key={matter} className="px-2.5 py-1.5 bg-brand-gold/10 text-brand-gold border border-brand-gold/25 rounded-full font-sans uppercase font-semibold">
                      {matter}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* The BHW Personal Touch - Verbatim Paragraph C */}
      <section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center justify-center p-3 bg-brand-navy text-white rounded-full mx-auto shadow-md">
            <Users className="w-7 h-7 text-brand-gold" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-brand-navy font-semibold italic max-w-2xl mx-auto leading-relaxed">
            “Personal and individualized attention in addressing and resolving legal matters.”
          </h3>

          <div className="bg-white border-l-4 border-brand-gold shadow-lg rounded-r-lg p-8 sm:p-10 text-left space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/5 transform rotate-45 translate-x-12 -translate-y-12 block" />
            
            <p className="font-sans text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              We offer our clients personal and individualized attention in addressing and resolving their particular legal matter. We listen to our clients so that we may identify their goals and fully understand and identify the important legal issues inherent in their case. Dedication to quality representation and a thorough understanding of the law make BHW a wise choice for individuals and businesses in need of distinctive experienced legal representation and personal representation. Contact_us_today and see how we can be of assistance to you.
            </p>
          </div>

          {/* Large Primary Action Button */}
          <div className="pt-8">
            <button
              onClick={onNavigateToContact}
              id="about-page-cta"
              className="inline-flex items-center gap-2.5 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all shadow-xl hover:-translate-y-1 transform duration-300"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}