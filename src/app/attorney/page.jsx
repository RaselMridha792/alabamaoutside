"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image'; // ✅ Next.js Image ইমপোর্ট করা হয়েছে
import { 
  Scale, Briefcase, Mail, Phone, ExternalLink, X, MapPin, 
  Award, BookOpen, ShieldCheck, CornerDownRight, ArrowRight, Sparkles, Filter
} from 'lucide-react';

const ATTORNEYS_DATA = [
  {
    name: 'Jeffrey E. Holmes',
    role: 'Partner / Lead Trial Litigator',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img2.jpg',
    practiceAreas: ['Civil Lawsuits', 'Trial Litigation', 'Government Investigations', 'White Collar Defense'],
    shortBio: 'Lead trial attorney representing individuals and corporate clients in federal and state courts throughout Alabama.',
    detailedBio: 'Jeffrey E. Holmes is a distinguished founding partner at Boles Holmes White with deep expertise in lead trial advocacy. Over a career spanning more than three decades, Jeff has directed hundreds of complex trials spanning state, federal, and appellate panel jurisdictions. He is widely praised as one of Alabama\'s most tenacious, experienced, and tactical trial litigators. Corporations, officers, and individuals facing high-security federal inquiries, white-collar criminal pursuits, and commercial disputes of immense magnitude trust Jeff with their most crucial legal defense requirements.',
    education: [
      'J.D., Cumberland School of Law, Samford University',
      'B.A., University of Alabama'
    ],
    barAdmissions: [
      'Alabama State Bar, 1991',
      'U.S. Court of Appeals for the 11th Circuit',
      'U.S. District Court for Northern, Middle, and Southern Districts of Alabama'
    ],
    awards: [
      'Best Lawyers in America® – White Collar Defense & Criminal Trial Litigation',
      'Martindale-Hubbell® AV Preeminent Rating (Highest Peer Review Standard for Ethics and Legal ability)',
      'National Trial Lawyers Top 100 Criminal Defense Attorneys'
    ],
    contact: {
      email: 'jholmes@bhwlegal.com',
      phone: '205-502-2000'
    }
  },
  {
    name: 'William C. White, II',
    role: 'Partner / Chair of White Collar Defense & Investigations',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img3.jpg',
    practiceAreas: ['Government Investigations', 'White Collar Defense', 'Regulatory Representation', 'Federal Criminal Defense'],
    shortBio: 'Renowned regulatory and high-profile white collar defense attorney with extensive national experience.',
    detailedBio: 'William C. ("Wally") White, II enjoys a national reputation for regulatory defense, white-collar criminal advocacy, and internal investigations. Wally routinely assists small, medium, and multi-national corporations as well as public servants to confidently navigate high-stakes investigations led by agencies such as the DOJ, FDA, EPA, SEC, CBP, OFAC, and the HHS-OIG. Wally has successfully defended clients against allegations ranging from health care and mortgage fraud to bribery, money laundering, and economic espionage across Alabama, Florida, Louisiana, Michigan, California, and many other states.',
    education: [
      'J.D., University of Alabama School of Law, magna cum laude',
      'B.S., Auburn University'
    ],
    barAdmissions: [
      'Alabama State Bar, 1996',
      'State Bar of Georgia',
      'Supreme Court of the United States',
      'U.S. Court of Appeals for the 4th, 6th, and 11th Circuits'
    ],
    awards: [
      'Super Lawyers® Top Rated Class of Criminal & White Collar Defense (2012-Present)',
      'Benchmark Litigation Star in Federal Investigations',
      'Chambers and Partners Rated Advocate in White Collar Crime & Government Counsel'
    ],
    contact: {
      email: 'wwhite@bhwlegal.com',
      phone: '205-502-2000'
    }
  },
  {
    name: 'Suzanne Norman',
    role: 'Attorney / Chair of Personal & Family Law',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img6.jpg',
    practiceAreas: ['Personal Injury', 'Divorce & Family Law', 'Wills and Probate', 'Civil Lawsuits'],
    shortBio: 'Empathetic and meticulous advocate guiding families and injured victims through complex civil litigation.',
    detailedBio: 'Suzanne Norman is an accomplished partner who commands high praise and confidence for her work across personal injury litigation, divorce, trust creation, family matters, and probate management. Her strategic negotiation abilities and courtroom tenacity ensure that injured victims are vigorously represented and family legal transitions are treated with premium confidentiality, personal attention, and absolute focus. She stands out for giving clients direct, individual attention in addressing their particular legal matters.',
    education: [
      'J.D., Thomas Goode Jones School of Law, Faulkner University',
      'B.A., Birmingham-Southern College'
    ],
    barAdmissions: [
      'Alabama State Bar, 2004',
      'U.S. District Court for Northern and Middle Districts of Alabama'
    ],
    awards: [
      'Top 100 Personal Injury Trial Lawyers (Alabama Association for Justice)',
      'American Institute of Family Law Attorneys – Peer Recommended',
      'Faulkner University Alumni Leadership Recognition Award'
    ],
    contact: {
      email: 'snorman@bhwlegal.com',
      phone: '205-502-2000'
    }
  },
  {
    name: 'H. Hampton Boles',
    role: 'Partner / Counsel for Corporate Law',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img4.jpg',
    practiceAreas: ['Corporate Law', 'Transactions', 'Business Formation & Dissolution', 'Commercial Real Estate'],
    shortBio: 'Over 35 years of general counsel and transactional experience representing banks, real estate portfolios, and mature companies.',
    detailedBio: 'H. Hampton Boles delivers premier corporate counseling, joint venture negotiations, entity design, and transaction oversight. Over his thirty-five years of business advocacy, Hampton has guided mature corporate entities and early-stage companies to capture market share, negotiate license rights, navigate tax policies, and structure commercial real estate acquisitions. He provides standard outside general counsel services with unparalleled, high-level cost responsiveness.',
    education: [
      'J.D., Vanderbilt University Law School',
      'B.A., Samford University, cum laude'
    ],
    barAdmissions: [
      'Alabama State Bar, 1982',
      'United States Tax Court'
    ],
    awards: [
      'Corporate Counsel Association Special Award for Outstanding Legal Service',
      'Best Lawyers® – Business & Taxation Advisory of Dothan and Birmingham',
      'AV Preeminent Rating by Martindale-Hubbell'
    ],
    contact: {
      email: 'hboles@bhwlegal.com',
      phone: '205-502-2000'
    }
  },
  {
    name: 'Nathan Holmes',
    role: 'Attorney / Business & Intellectual Property Advocate',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img5.jpg',
    practiceAreas: ['Business Consulting', 'Business Formation & Dissolution', 'Transactions', 'Labor & Employment'],
    shortBio: 'Dedicated general corporate advisor specializing in start-up counseling, contracts, and commercial operations.',
    detailedBio: 'Nathan Holmes acts as outside corporate counsel and business advisor to small and medium enterprises. He provides legal advice for modern business operations, drafting contract instruments, facilitating strategic business plans, protecting trade secrets, and guiding employment policies. His tech-focused, agile legal approach helps early-stage start-up companies navigate their entity formations and licensing agreements with ease.',
    education: [
      'J.D., University of Alabama School of Law',
      'B.A., University of Alabama at Birmingham'
    ],
    barAdmissions: [
      'Alabama State Bar, 2011',
      'U.S. District Court for Northern District of Alabama'
    ],
    awards: [
      'Best Lawyers: Ones to Watch® – Commercial Litigation and Corporate Law',
      'Birmingham Business Journal "Top 40 under 40" Legal Advisory nominee'
    ],
    contact: {
      email: 'nholmes@bhwlegal.com',
      phone: '205-502-2000'
    }
  }
];

const ALL_PRACTICE_AREAS = [
  'All',
  'Corporate Law',
  'Government Investigations',
  'White Collar Defense',
  'Personal Injury',
  'Divorce & Family Law',
  'Civil Lawsuits',
  'Transactions'
];

export default function AttorneysPage({ onNavigateToContact }) {
  const [selectedAttorney, setSelectedAttorney] = useState(null);
  const [filterPractice, setFilterPractice] = useState('All');

  const filteredAttorneys = filterPractice === 'All'
    ? ATTORNEYS_DATA
    : ATTORNEYS_DATA.filter(att => 
        att.practiceAreas.some(area => area.toLowerCase().includes(filterPractice.toLowerCase()))
      );

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-24">
      {/* Premium Courthouse Hero Section */}
      <section className="relative h-[55vh] sm:h-[60vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="attorneys-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg')" }}
        />
        {/* Navy Overlay with gold ambient radials for stunning contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/55 to-brand-navy/95" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-brand-navy/20 to-brand-navy/70" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          {/* Accent Gold Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/90 border border-brand-gold/45 rounded-full text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-5 shadow-lg"
          >
            <Sparkles className="w-3 h-3 text-brand-gold animate-pulse" />
            <span>Dedicated Representation &amp; Counsel</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="attorneys-page-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4 drop-shadow-md"
          >
            Our Experienced Attorneys in Alabama
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="attorneys-page-subtitle"
            className="font-serif text-sm sm:text-base md:text-lg text-brand-gold-light max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm italic"
          >
            At Alabama Outside Counsel, we have a team of highly experienced attorneys, each specializing in various practice areas including corporate law, criminal defense, personal injury, estate planning, and more. Our attorneys provide expert legal advice and representation to clients throughout Alabama.
          </motion.p>
        </div>

        {/* Slanted border element transitioning with page */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-slate-50 transform origin-bottom-left skew-y-1 block" />
      </section>

      {/* Main Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Practice Filter Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-gray-200 pb-8 sm:flex-row">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy uppercase tracking-tight">
              Filter by Practice Area
            </h2>
            <p className="text-xs text-gray-500 font-sans mt-1">
              Select an expertise category to locate specializing advocates.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {ALL_PRACTICE_AREAS.map((practice) => (
              <button
                key={practice}
                onClick={() => setFilterPractice(practice)}
                className={`px-3 py-1.5 rounded-sm font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  filterPractice === practice
                    ? 'bg-brand-navy text-brand-gold border-brand-navy shadow-md scale-105'
                    : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {practice}
              </button>
            ))}
          </div>
        </div>

        {/* Attorney Profile List Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredAttorneys.map((attorney) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={attorney.name}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image Frame with gold border touch */}
                <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden">
                  <Image 
                    src={attorney.image} 
                    alt={attorney.name} 
                    fill // ✅ Next.js fill property use kora hoyeche
                    className="object-cover object-top hover:scale-105 transition-transform duration-500 select-none filter brightness-95 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Gold Border Accent */}
                  <div className="absolute inset-0 border border-brand-gold/10 pointer-events-none group-hover:border-brand-gold/40 transition-colors duration-300" />
                  
                  {/* Floating subtle overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-white">
                    <p className="text-[10px] text-brand-gold uppercase tracking-widest font-sans font-bold mb-0.5">
                      {attorney.role.split(' / ')[0]}
                    </p>
                    <p className="text-xs text-gray-300 font-sans italic line-clamp-1">
                      {attorney.practiceAreas.slice(0, 2).join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Profile Card Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-brand-navy tracking-tight uppercase group-hover:text-brand-gold transition-colors duration-300">
                      {attorney.name}
                    </h3>
                    <p className="font-sans text-xs font-bold text-brand-gold uppercase tracking-wide mt-1">
                      {attorney.role.split(' / ')[1] || attorney.role}
                    </p>
                    <p className="font-sans text-xs text-gray-600 mt-3 leading-relaxed">
                      {attorney.shortBio}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedAttorney(attorney)}
                      className="text-xs font-extrabold text-brand-navy hover:text-brand-gold uppercase tracking-widest flex items-center gap-1.5 transition-colors group cursor-pointer"
                    >
                      <span>Read Full Bio</span>
                      <CornerDownRight className="w-3.5 h-3.5 text-brand-gold transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                    </button>

                    <a 
                      href={`mailto:${attorney.contact.email}`}
                      className="p-2 rounded-full hover:bg-brand-gold/10 text-brand-navy hover:text-brand-gold transition-colors duration-200"
                      title={`Email ${attorney.name.split(' ')[0]}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Practice Area Reference section */}
        <div className="mt-24 bg-white rounded-xl shadow-xl p-8 sm:p-12 border border-blue-50/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">Alabama Legal Advisory</span>
            <h3 className="font-display text-2xl font-bold uppercase text-brand-navy tracking-tight">Need Immediate Legal Representation?</h3>
            <p className="text-sm font-sans text-gray-600 leading-relaxed max-w-2xl">
              Our firm maintains standard, reliable offices in downtown Birmingham and Dothan, Alabama. In states where BHW does not have physically resident licensed attorneys, members of our firm receive admission of that jurisdiction through pro hac vice to ensure continuous guidance.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <button
              onClick={onNavigateToContact}
              className="px-8 py-4 bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg transition-all duration-350 cursor-pointer transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span>Schedule Free Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </section>

      {/* High-Fidelity Bio Overlay Modal */}
      <AnimatePresence>
        {selectedAttorney && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Dark Blur Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAttorney(null)}
              className="absolute inset-0 bg-brand-navy/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Profile Drawer Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl z-10 max-h-[85vh] md:max-h-[80vh] flex flex-col md:flex-row"
            >
              {/* Left Column: Portrait & Floating details */}
              <div className="w-full md:w-2/5 bg-brand-navy text-white p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-r border-brand-gold/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
                
                {/* Portrait */}
                <div className="relative aspect-[4/5] rounded-md overflow-hidden bg-slate-950 border border-brand-gold/20 shadow-lg select-none mb-6">
                  <Image 
                    src={selectedAttorney.image} 
                    alt={selectedAttorney.name} 
                    fill // ✅ Next.js fill property use kora hoyeche
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-40" />
                </div>

                {/* Direct info list */}
                <div className="space-y-4 relative z-10">
                  <h4 className="font-display text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-white/10 pb-1.5">Direct Channels</h4>
                  
                  <div className="space-y-2.5 text-xs">
                    <a 
                      href={`mailto:${selectedAttorney.contact.email}`} 
                      className="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"
                    >
                      <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                      <span className="truncate">{selectedAttorney.contact.email}</span>
                    </a>
                    
                    <a 
                      href={`tel:${selectedAttorney.contact.phone}`} 
                      className="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{selectedAttorney.contact.phone}</span>
                    </a>

                    <div className="flex items-center gap-2.5 text-gray-350">
                      <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>Birmingham, AL Office</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Deep Biography Data (Scrollable) */}
              <div className="w-full md:w-3/5 p-8 overflow-y-auto flex-grow flex flex-col justify-between max-h-[50vh] md:max-h-[80vh]">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAttorney(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-brand-navy hover:text-white rounded-full transition-colors duration-250 cursor-pointer z-20"
                  aria-label="Close Biography"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header Credentials */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs text-brand-gold font-bold uppercase tracking-widest">
                    <Scale className="w-4 h-4" />
                    <span>Attorney Biography</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-brand-navy uppercase tracking-tight leading-tight">
                    {selectedAttorney.name}
                  </h3>
                  <p className="font-sans text-xs md:text-sm font-extrabold text-brand-gold uppercase tracking-wide mt-1">
                    {selectedAttorney.role}
                  </p>

                  {/* Core practice list badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedAttorney.practiceAreas.map((area) => (
                      <span key={area} className="px-2.5 py-1 bg-slate-100 text-gray-600 border border-gray-200/60 rounded text-[10px] uppercase font-bold tracking-wide">
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Biography text body */}
                  <div className="mt-6 font-sans text-gray-700 text-xs sm:text-sm leading-relaxed space-y-4 text-justify pr-2">
                    <p>{selectedAttorney.detailedBio}</p>
                  </div>

                  {/* Tabbed / Collapsed Info Sections */}
                  <div className="mt-8 space-y-6">
                    
                    {/* Education */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                        <BookOpen className="w-4 h-4 text-brand-gold" />
                        <span>Education</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {selectedAttorney.education.map((edu, key) => (
                          <li key={key} className="flex gap-2 items-start">
                            <span className="text-brand-gold font-bold mt-0.5">•</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bar Admissions */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                        <ShieldCheck className="w-4 h-4 text-brand-gold" />
                        <span>Admissions</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {selectedAttorney.barAdmissions.map((adm, key) => (
                          <li key={key} className="flex gap-2 items-start">
                            <span className="text-brand-gold font-bold mt-0.5">•</span>
                            <span>{adm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Honors / Awards */}
                    {selectedAttorney.awards && selectedAttorney.awards.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                          <Award className="w-4 h-4 text-brand-gold" />
                          <span>Credentials &amp; Awards</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {selectedAttorney.awards.map((awr, key) => (
                            <li key={key} className="flex gap-2 items-start">
                              <span className="text-brand-gold font-bold mt-0.5">•</span>
                              <span>{awr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3.5">
                  <button
                    onClick={() => {
                      setSelectedAttorney(null);
                      onNavigateToContact();
                    }}
                    className="px-5 py-2.5 bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-250 cursor-pointer"
                  >
                    Direct Consultation Request
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}