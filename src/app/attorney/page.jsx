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
    role: 'Telecommunications Lawyer in Alabama',
    headline: 'Telecommunications Lawyer in Alabama – Legal Expertise for Your Business',
    subHeadline: '',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img2.jpg',
    practiceAreas: ['Telecommunications', 'Health Care', 'Mining', 'Hospitality', 'Technology-Related Business Transactions', 'Intellectual Property Matters', 'Environmental Matters', 'Labor & Employment'],
    shortBio: 'Jeff Holmes represents clients in a number of different industries, including telecommunications, health care, mining, and hospitality.',
    detailedBio: [
      `Jeff Holmes represents clients in a number of different industries, including telecommunications, health care, mining, and hospitality. Jeff brings broad legal expertise to his clients. After serving as a law clerk to U.S. District Court Judge J. Foy Guin, Jr., Northern District of Alabama, Jeff worked as in-house counsel to a Fortune 500 company for nine years. He has been in private corporate law practice since 1996.`,
      `Jeff has conducted technology-related business transactions, negotiated intellectual property matters, and developed technology-based evidence in trials and before environmental agencies and other agencies. He has provided consultation concerning a variety of environmental matters including site assessments, environmental audits, and responses to agency enforcement actions.`,
      `He has managed $23 million in asset deals including sales of telecommunication businesses, a wholesale supply business, and a software business.`,
      `Jeff also provides advice and representation to employers in labor and employment matters, including Title VII, wage and hour laws, disability laws, compliance with executive orders, and employment policies and procedures.`
    ],
    education: [
      'Cumberland School of Law, J.D., 1984',
      'University of Alabama, M.S., Engineering Science & Mechanics, 2007',
      'Concentration in dynamics, research in analytical modeling of impact of fluid-filled bottles',
      'University of Alabama at Birmingham, B.A., Political Science, 1981'
    ],
    barAdmissions: [],
    courtAdmissions: [],
    awards: [],
    contact: {
      direct: '205-403-5713',
      bhw: '205-502-2000',
      email: 'jholmes@bhw.law',
      fax: '205-847-1285',
      phone: '205-403-5713'
    }
  },
  {
    name: 'William C. White, II',
    role: 'White Collar Criminal Defense Attorney in Alabama',
    headline: 'William C. White – White Collar Criminal Defense Attorney in Alabama',
    subHeadline: '',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img3.jpg',
    practiceAreas: ['White Collar Criminal Defense', 'Civil Litigation', 'Business Consulting', 'Administrative Law', 'Transportation Law', 'Corporate Law', 'Professional License Protection', 'USDA Administrative Proceedings'],
    shortBio: 'From white collar criminal defense to civil litigation and business consulting, William’s legal experience is varied and deep.',
    detailedBio: [
      `From white collar criminal defense to civil litigation and business consulting, William’s legal experience is varied and deep. Mr. White graduated with an accounting degree from the University of Alabama’s Culverhouse School of Accountancy in 1995 and also earned his law degree in 1998 from the University of Alabama.`,
      `Since then, his commitment to clients has justified his reputation as an exceptional attorney in the fields of administrative law, transportation law, corporate law, civil litigation and white collar crime. His wide variety of experience has allowed him to counsel business owners and employees in a wide variety of industries. He has also represented doctors, attorneys, nurses, pharmacists, counselors and real estate professionals on professional licensing issues.`,
      `He also has an active practice representing USDA licensees in response to licensure investigations and USDA administrative proceedings.`,
      `With a degree in accounting and a background with insurance and real estate law, Mr. White offers knowledge and skill that make him an ideal white collar crime attorney. Through his career, he has successfully represented clients in Alabama, Georgia, California, Florida, Michigan, New Jersey, New York, Illinois, Texas, and other states, Mr. White has experience applicable to courts throughout the nation and suited for a wide variety of cases including civil litigation, white collar defense or corporate representation.`,
      `Before co-founding Boles Holmes White LLC in 2018, Mr. White was the managing partner of Parkman White LLC. Prior to that, he was an Assistant District Attorney for Alabama’s 20th Judicial District. As a prosecutor, he took 75 felony cases to trial, including drug trafficking, rape and murder cases. With that background, Mr. White has found great success in local, state, and federal criminal defense including, but not limited to, white collar criminal defense.`,
      `He is admitted to all federal and state courts in Alabama and also has Bar Admissions in New York, the District of Columbia, the United States Supreme Court, and the United States Court of Appeals 11th Circuit. As a result of his accomplishments and varied legal experience, Mr. White is ranked as one of the top 100 Lawyers by the American Trial Lawyers Association.`,
      `Mr. White was lucky enough to participate in the legal defense for former HealthSouth CEO Richard Scrushy. That case was one of the most significant corporate fraud cases in legal history. The United States Department of Justice accused Scrushy of breaking certain laws related to the Sarbanes-Oxley Act designed to hold corporate executives more accountable. Scrushy faced accusations related to more than 2 billion dollars in accounting fraud. Thanks to an aggressive defense, led by Jim Parkman, Mr. White’s former law partner, Scrushy was acquitted.`,
      `Mr. White also represented Senator Harri Anne Smith on her full acquittal on 19 charges of alleged corruption from the State of Alabama “Bingo trials” of 2011 and 2012. Mr. White’s blistering cross-examination of the government’s primary witness led the witness to proclaim in front of the jury “you’re sweating me out up here.”`,
      `Mr. White is active in his community having served as a coach in the Vestavia Hills youth football and lacrosse leagues. He also volunteered for various girl’s youth volleyball teams as well as the Vestavia Hills High School Show Choir. He is on the Board of Directors for the Animal Welfare Alliance and is an active member of the Greater Hoover Rotary Club. He and his family are members of Independent Presbyterian Church in Birmingham, Alabama.`
    ],
    education: [
      'University of Alabama School of Law – J.D. 1998',
      'University of Alabama – 1995 – Accounting Major'
    ],
    barAdmissions: [
      'Alabama',
      'District of Columbia',
      'New York',
      'Texas'
    ],
    courtAdmissions: [
      'Supreme Court of the United States',
      'All State courts of Alabama',
      'All State courts of New York',
      'All State courts of Texas',
      'United States District Court for:',
      '– the District of Columbia',
      '– the Northern District of Alabama',
      '– the Middle District of Alabama',
      '– the Southern District of Alabama',
      '– the Northern District of Florida',
      '– the Eastern District of Michigan',
      'United States Court of Appeal:',
      '– for the Eleventh Circuit',
      '– for the Fourth Circuit'
    ],
    awardsHeading: 'Honors',
    awards: [
      'AV-Pre-imminent rated by Martindale Hubbell',
      'Perfect 10.0 rated by AVVO',
      'Top 100 Trial Attorneys',
      'Alabama Leadership Forum Alumnus',
      'Leadership Vestavia Hills Alumnus',
      'Member of the Transportation Lawyers Association (Multiple committees)',
      'Board of Directors of the Animal Welfare Alliance'
    ],
    contact: {
      direct: '205-403-5712',
      bhw: '205-502-2000',
      email: 'wwhite@bhw.law',
      fax: '205-847-1285',
      phone: '205-403-5712'
    }
  },
 {
    name: 'Suzanne Norman',
    // ক্লায়েন্টের কথামতো টাইটেল এবং রোল আপডেট করা হয়েছে
    role: 'Chair of Appeals / Civil Litigation & White Collar Investigations',
    headline: 'Civil Litigation & White Collar Investigations in Alabama',
    subHeadline: '',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img6.jpg',
    // ক্লায়েন্টের দেওয়া সঠিক প্র্যাকটিস এরিয়া
    practiceAreas: ['Civil Litigation', 'White Collar Investigations', 'Appeals', 'Criminal Defense'],
    shortBio: 'Skilled advocate focusing on civil litigation, white-collar investigations, and complex appeals, advocating strongly for her clients.',
    detailedBio: [
      `Suzanne attended Auburn University where she graduated with degrees in public relations and Spanish with a minor in political science. After graduation, Suzanne attended Cumberland School of Law where she received her Juris Doctor. At Cumberland, Suzanne served as a Senior Associate Editor of Cumberland’s American Journal of Trial Advocacy and was a member of the Phi Alpha Delta Law Fraternity. In addition, Suzanne was listed on the Dean’s List for six semesters and was named Scholar of Merit for Superior Performance in Professional Responsibilities in the Fall of 2018.`,
      `Throughout her time at Cumberland, Suzanne worked as a law clerk for BHW, preparing her to be able to skillfully and effectively serve her clients as a practicing attorney. Suzanne’s focus during law school was on criminal and white-collar defense, as well as civil litigation. She strives to use her experience and education to best represent her clients and provide them with the strongest defense possible.`,
      `In her free time, Suzanne serves as a member of the Junior League of Birmingham, where she feels fortunate to be able to serve our local community with such an impactful organization.`
    ],
    education: [
      'Cumberland School of Law, J.D., 2019',
      'Auburn University, B.A., Public Relations, 2016',
      'Auburn University, B.A., Spanish, 2016'
    ],
    barAdmissions: [
      'Alabama'
    ],
    courtAdmissions: [
      'Alabama State Courts',
      'United States District Court for:',
      'The Northern District of Alabama',
      'The Middle District of Alabama',
      'The Southern District of Alabama'
    ],
    awards: [
      'Scholar of Merit for Superior Performance in Professional Responsibilities (Fall 2018)',
      'Dean’s List for six semesters'
    ],
    contact: {
      direct: '205-403-5715',
      bhw: '205-502-2000',
      email: 'snorman@bhw.law',
      fax: '205-847-1285',
      phone: '205-403-5715'
    }
  },
  {
    name: 'H. Hampton Boles',
    role: 'Of Counsel',
    headline: 'H. Hampton Boles – Alabama Banking and Compliance Attorney',
    subHeadline: '',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img4.jpg',
    practiceAreas: ['Banking and Compliance', 'Regulatory Compliance', 'Financial Issues', 'Corporate Clients', 'State Legislative Matters'],
    shortBio: 'Hamp Boles focuses on regulatory, compliance and financial issues for corporate clients.',
    detailedBio: [
      `In his “Of Counsel” role with the firm, Hamp Boles focuses on regulatory, compliance and financial issues for corporate clients. Since 1985, Hamp has drafted or participated in drafting substantial portions of the current Alabama Banking Code and various Articles of the UCC. Hamp counsels directors and officers about their responsibilities to regulators, shareholders and customers.`,
      `“Hamp Boles is the dean of Alabama banking law. His work ethic, character and integrity are beyond reproach and he’d be included in any dream team of bank regulatory lawyers in Alabama.” -Chambers USA`,
      `Regulations and compliance issues have been, are now, and will continue to be an important part of management, and costly for all regulated industries. Hamp believes that all businesses of every type and size are “regulated” to some extent and often face compliance issues. Addressing compliance before there is a need is the best practice. Hamp also works on state legislative matters.`
    ],
    professionalAffiliations: [
      'American College of Real Estate Lawyers',
      'Birmingham Bar Association',
      'Alabama State Bar',
      'American Bar Association'
    ],
    awardsHeading: 'Awards & Accolades',
    awards: [
      'American College of Real Estate Lawyers',
      'Chambers USA, Banking and Finance: Mainly Regulatory',
      'The Best Lawyers in America, 1993 – Present',
      'Named “Lawyer of the Year” by Best Lawyers for:',
      'Real Estate Law, Birmingham (2013)',
      'Banking and Financial Law, Birmingham (2009)',
      'Super Lawyers, 2008 – Present',
      'Birmingham Magazine, Top Attorney, 2017',
      'B-Metro Magazine, Top Lawyers, 2015, 2017, 2018'
    ],
    education: [
      'Tulane University Law School, 1967'
    ],
    barAdmissions: [],
    courtAdmissions: [],
    contact: {
      direct: '205-403-5701',
      bhw: '205-502-2000',
      email: 'wwhite@bhw.law',
      fax: '205-847-1285',
      phone: '205-403-5701'
    }
  },
  {
    name: 'Nathan Holmes',
    role: 'Of Counsel',
    headline: 'Nathan Holmes - Artificial Intelligence, Technology, and Business Law Attorney',
    subHeadline: 'Legal Advisor for AI & Emerging Technologies',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img5.jpg',
    practiceAreas: ['Artificial Intelligence and Emerging Technology Law', 'Privacy and Cybersecurity', 'Technology, Software, and SAAS Transactions', 'Intellectual Property Prosecution and Litigation', 'Commercial Litigation', 'General Business Law'],
    shortBio: 'Much of Mr. Holmes’ practice focuses on matters where science and technology are central to the dispute or transaction.',
    detailedBio: [
      `Much of Mr. Holmes’ practice focuses on matters where science and technology are central to the dispute or transaction. Such work often involves industries and innovations where an operative understanding of the underlying technology is important to achieving an effective outcome.`,
      `This includes traditional legal fields such as intellectual property litigation or prosecution as well as cases and deals involving emerging technologies, such as artificial intelligence, or legal matters hinging on forensic or technical evidence, where mathematics is applied to evaluate the evidence.`,
      `Additionally, Mr. Holmes has extensive experience in commercial litigation and transactions as well as general business law. He has assisted with litigation or appeared pro hac vice in matters across the country, including in Alabama, Mississippi, Texas, California, Louisiana, Florida, Georgia, Washington DC, Pennsylvania, Illinois, Wisconsin, New York, North Carolina, and South Carolina.`,
      `In addition to his JD (University of Alabama), Mr. Holmes obtained a masters degree in applied mathematics from Columbia University, a masters degree in civil engineering and bachelors degree in mathematics from the University of Alabama, and a certificate in real world risk management from the Real World Risk Institute.`,
      `Mr. Holmes is a published independent scholar at the intersection of technology and law (see, for example, A Transaction Represented With Weighted Finite State Transducers). Mr. Holmes has an Erdős number of 5. Mr. Holmes is a frequent speaker at the American Academy of Forensic Science Annual Conference. He has presented there on a variety of topics, including misconceptions surrounding artificial intelligence, admissibility of expert forensic testimony, and utilizing neural networks to disprove the validity of certain speaker identification techniques used as evidence against criminal defendants. Moreover, Mr. Holmes frequently gives keynote talks, presentations, and continuing legal education (CLE) lectures on law and technology topics.`,
      `Mr. Holmes serves as an adjunct professor of law at the University of Alabama school of Law and Cumberland school of Law where he teaches courses on AI and law.`,
      `Mr. Holmes believes there is no better feeling than being useful to his clients, many of whom are risk takers – entrepreneurs, scientists and inventors, business owners, and colorful individuals – who stand to lose from their actions and opinions. Mr. Holmes is proud to serve as an attorney-scientist member of your business team and a thoughtful and zealous advocate for your business’ commercial matters.`
    ],
    education: [
      'Columbia University (New York, NY) – MS Applied Mathematics',
      'University of Alabama School of Law (Tuscaloosa, AL) – Juris Doctor',
      'University of Alabama (Tuscaloosa, AL) – MS Civil Engineering',
      'University of Alabama Honors College (Tuscaloosa, AL) – BS Mathematics, Minor Computer Based Honors, Summa Cum Laude, Dr. Fred A. and Francis Pickens Lewis Endowed Scholarship Recipient (math department award)',
      'Real World Risk Institute (New York, NY) – Certificate in Real World Risk Management'
    ],
    barAdmissions: [
      'Alabama'
    ],
    courtAdmissions: [],
    corePracticeAreas: [
      'Artificial Intelligence and Emerging Technology Law',
      'Privacy and Cybersecurity',
      'Linguistic Forensics and Authorship Disputes',
      'Technology, Software, and SAAS Transactions',
      'Intellectual Property Prosecution and Litigation',
      'False Advertising and Unfair Competition',
      'E-Commerce Law and Platform Disputes',
      'Digital Media, Branding, and Influencer Law',
      'Technology Litigation',
      'Commercial Litigation',
      'General Business Law'
    ],
    awards: [],
    contact: {
      direct: '205-447-6283',
      bhw: '',
      email: 'nholmes@bhw.law',
      fax: '205-847-1285',
      phone: '205-447-6283'
    }
  }
];

const ALL_PRACTICE_AREAS = [
  'All',
  'White Collar Criminal Defense',
  'Civil Litigation',
  'Business Consulting',
  'Banking and Compliance',
  'Artificial Intelligence and Emerging Technology Law',
  'Privacy and Cybersecurity',
  'Commercial Litigation',
  'Labor & Employment',
  'Criminal Defense',
  'Corporate Law',
  'Regulatory Compliance',
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
                      {attorney.role}
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
                      {attorney.headline || attorney.role}
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
              Our firm maintains standard, reliable offices in downtown Birmingham, Alabama. In states where BHW does not have physically resident licensed attorneys, members of our firm receive admission of that jurisdiction through pro hac vice to ensure continuous guidance.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <button
              onClick={onNavigateToContact}
              className="px-8 py-4 bg-brand-navy hover:bg-brand-gold hover:text-brand-navy text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg transition-all duration-350 cursor-pointer transform hover:-translate-y-1 flex items-center gap-2 group"
            >
              <span>SCHEDULE AN INQUIRY</span>
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
                      <span className="truncate">Email: {selectedAttorney.contact.email}</span>
                    </a>
                    
                    {selectedAttorney.contact.direct && (
                      <a 
                        href={`tel:${selectedAttorney.contact.direct}`} 
                        className="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Direct: {selectedAttorney.contact.direct}</span>
                      </a>
                    )}

                    {selectedAttorney.contact.bhw && (
                      <a 
                        href={`tel:${selectedAttorney.contact.bhw}`} 
                        className="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"
                      >
                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>BHW: {selectedAttorney.contact.bhw}</span>
                      </a>
                    )}

                    {selectedAttorney.contact.fax && (
                      <div className="flex items-center gap-2.5 text-gray-350">
                        <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                        <span>Fax: {selectedAttorney.contact.fax}</span>
                      </div>
                    )}

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
                    {selectedAttorney.headline || selectedAttorney.role}
                  </p>
                  {selectedAttorney.subHeadline && (
                    <p className="font-sans text-sm md:text-base font-bold text-gray-600 mt-2">
                      {selectedAttorney.subHeadline}
                    </p>
                  )}

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
                    {(Array.isArray(selectedAttorney.detailedBio) ? selectedAttorney.detailedBio : [selectedAttorney.detailedBio]).map((paragraph, key) => (
                      <p key={key}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Tabbed / Collapsed Info Sections */}
                  <div className="mt-8 space-y-6">
                    
                    {/* Education */}
                    {selectedAttorney.education && selectedAttorney.education.length > 0 && (
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
                    )}

                    {/* Admissions */}
                    {selectedAttorney.barAdmissions && selectedAttorney.barAdmissions.length > 0 && (
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
                    )}

                    {/* Court Admissions */}
                    {selectedAttorney.courtAdmissions && selectedAttorney.courtAdmissions.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                          <ShieldCheck className="w-4 h-4 text-brand-gold" />
                          <span>Court Admissions</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {selectedAttorney.courtAdmissions.map((item, key) => (
                            <li key={key} className="flex gap-2 items-start">
                              <span className="text-brand-gold font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Professional Affiliations */}
                    {selectedAttorney.professionalAffiliations && selectedAttorney.professionalAffiliations.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                          <Briefcase className="w-4 h-4 text-brand-gold" />
                          <span>Professional Affiliations</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {selectedAttorney.professionalAffiliations.map((item, key) => (
                            <li key={key} className="flex gap-2 items-start">
                              <span className="text-brand-gold font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Core Practice Areas */}
                    {selectedAttorney.corePracticeAreas && selectedAttorney.corePracticeAreas.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                          <Scale className="w-4 h-4 text-brand-gold" />
                          <span>Core Practice Areas</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {selectedAttorney.corePracticeAreas.map((item, key) => (
                            <li key={key} className="flex gap-2 items-start">
                              <span className="text-brand-gold font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Honors / Awards */}
                    {selectedAttorney.awards && selectedAttorney.awards.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5">
                          <Award className="w-4 h-4 text-brand-gold" />
                          <span>{selectedAttorney.awardsHeading || 'Credentials & Awards'}</span>
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