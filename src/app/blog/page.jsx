"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image'; // ✅ Next.js Image ইমপোর্ট করা হয়েছে
import { Search, Gavel, Calendar, ArrowRight, Eye, ChevronDown, BookOpen, AlertCircle, Bookmark } from 'lucide-react';

export default function BlogPage({ onNavigateToContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  // Raw blog posts list provided exactly in prompt - 10 items
  const blogPosts = [
    {
      id: 'wage-fixing',
      title: 'Wage Fixing and No Poach Agreements in Criminal Crosshairs',
      date: 'June 26, 2024',
      category: 'White Collar Crime',
      excerpt: 'It is common knowledge among corporate executives that it is illegal to conspire with your competitors to “price-fix”. Price-fixing is an agreement between competitors',
      content: 'It is common knowledge among corporate executives that it is illegal to conspire with your competitors to “price-fix”. Price-fixing is an agreement between competitors to sell a product or service at a set price, keeping prices artificially high and squeezing consumers. In recent years, the Department of Justice Antitrust Division has extended this logic to labor markets. Under “No Poach” agreements, competitors agree not to recruit each other’s employees, while under wage-fixing agreements, businesses collude to suppress wages. Today, these practices are squarely in the criminal crosshairs of federal prosecutors. Executives face massive personal fines and prison sentences under the Sherman Act for anti-competitive hiring.'
    },
    {
      id: 'sports-gambling',
      title: 'Illegal Sports Gambling Subject to Prosecution',
      date: 'June 26, 2024',
      category: 'Criminal Defense',
      excerpt: 'In years past, sports gambling was often associated with seedy characters involved in organized crime where weekly settlements occurred in person, and could involve',
      content: 'In years past, sports gambling was often associated with seedy characters involved in organized crime where weekly settlements occurred in person, and could involve threats or violence. Today, despite the legalization of sports betting in many states across the country, off-shore or unlicensed gambling systems remain highly illegal and subject to swift federal and state prosecution. Operating or assisting in an unlicensed bookmaking operation carries serious criminal charges, including racketeering (RICO), conspiracy, and money laundering. Boles Holmes White handles comprehensive criminal defense for individuals and operations facing gambling-related allegations.'
    },
    {
      id: 'class-action-affirm',
      title: 'Boles Holmes White Attorney Wally Walker Assists in Securing Affirmance of $40 Million Settlement for Plaintiff Class',
      date: 'June 26, 2024',
      category: 'Civil Suits',
      excerpt: 'On March 15, 2022, the United States Court of Appeals for the Fourth Circuit affirmed the approval of an approximate $40 million class action',
      content: 'On March 15, 2022, the United States Court of Appeals for the Fourth Circuit affirmed the approval of an approximate $40 million class action settlement for the plaintiff class. Boles Holmes White Attorney Wally Walker played a significant role alongside lead counsel in securing this major victory, defending the fairness of the hard-won settlement against multiple complex objector challenges. The decision secures significant relief for class members who had endured serious economic harm, cementing our team’s dedication to advocating for class rights across the United States.'
    },
    {
      id: 'pharma-part-3',
      title: 'Pharmaceuticals in Our Water Part 3: Section 2, Subpart B – Scientific Explanation of Pharmaceutical Contamination, Environmental Impact',
      date: 'June 26, 2024',
      category: 'Pharmaceuticals',
      excerpt: 'Section 2: Scientific Explanation of Pharmaceutical Contamination B. Environmental Impact While the link between the consumption of pharmaceutically contaminated water and ill health effects',
      content: 'Section 2: Scientific Explanation of Pharmaceutical Contamination B. Environmental Impact While the link between the consumption of pharmaceutically contaminated water and ill health effects in human populations remains under active study, the environmental impact on aquatic ecosystems is concrete and devastating. Studies show endocrine-disrupting pharmaceuticals cause severe reproductive anomalies in fish, disrupting local food webs and inducing species population collapse. Because sewage treatment facilities are not universally equipped to filter complex chemical synthetic drug elements, these pollutants circulate indefinitely. Our environmental lawyers work with local populations and advocacy bodies to seek corporate accountability.'
    },
    {
      id: 'pharma-part-2',
      title: 'Pharmaceuticals in Our Water: Part 2 – Section 2, Subpart A – Scientific Explanation of Pharmaceutical Discharge, Human Impact',
      date: 'June 26, 2024',
      category: 'Pharmaceuticals',
      excerpt: 'Section 2: Scientific Explanation of Pharmaceutical Contamination A. Human Impact Most pharmaceuticals in the water occur in concentrations far below prescribed dosages. Nevertheless,',
      content: 'Section 2: Scientific Explanation of Pharmaceutical Contamination A. Human Impact Most pharmaceuticals in the water occur in concentrations far below prescribed dosages. Nevertheless, the long-term cumulative exposure to trace amounts of compound classes like antibiotics, anti-convulsants, and synthetic hormones triggers profound concerns. Pediatric development, antibiotic resistance strains, and bio-accumulation in tissues suggest a slow-burn crisis. Regulatory departments have struggled to keep up with industrial outputs, leaving citizens unprotected. Boles Holmes White investigates regulatory failures concerning clean drinking water compliance.'
    },
    {
      id: 'pharma-part-1',
      title: 'Pharmaceuticals in Our Water: Part 1 – Introduction',
      date: 'June 26, 2024',
      category: 'Pharmaceuticals',
      excerpt: 'Section 1: Introduction Pharmaceuticals are in our rivers, streams, lakes, oceans, and ground and soil waters. A U.S. Geological survey conducted from 1999-2000, found',
      content: 'Section 1: Introduction Pharmaceuticals are in our rivers, streams, lakes, oceans, and ground and soil waters. A U.S. Geological survey conducted from 1999-2000, found that measurable levels of prescription and over-the-counter pharmaceuticals were present in 80% of monitored streams across 30 states. These medications enter the ecosystem through human excretion, flushing unused medications, and manufacturer effluent. In this ongoing multi-part brief, we trace the scientific mechanism of runoff, regulatory gaps, and legal pathways to mandate industrial protection and remediation.'
    },
    {
      id: 'taco-tuesday',
      title: 'Lebron James’ “Taco Tuesday” Trademark Application Denied by USPTO',
      date: 'June 26, 2024',
      category: 'Trademark Law',
      excerpt: 'Lebron James doesn’t miss often, but he missed in his attempt to trademark the phrase “Taco Tuesday.” This off season Lebron has been posting',
      content: 'Lebron James doesn’t miss often, but he missed in his attempt to trademark the phrase “Taco Tuesday.” This off-season, Lebron has been posting viral videos celebrating with his family on Tuesdays, leading to his corporation filing a trademark application. However, the USPTO issued a final refusal, explaining that “Taco Tuesday” is a widely used, commonplace consumer term that does not function as a source-identifier. Because the phrase represents a weekly ritual celebrated by countless restaurants and individuals, granting exclusive commercial rights would improperly restrain trade. This decision highlights the limits of personal-branding trademark reach.'
    },
    {
      id: 'sherman-sec-1',
      title: 'Section 1 – Trusts, restraint of trade',
      date: 'June 26, 2024',
      category: 'White Collar Crime',
      excerpt: 'The first section of the Sherman Antitrust Act targets specific business conduct that is anticompetitive by nature. The text of the first provision reads: Every contract,',
      content: 'The first section of the Sherman Antitrust Act targets specific business conduct that is anticompetitive by nature. The text of the first provision reads: Every contract, combination in the form of trust or otherwise, or conspiracy, in restraint of trade or commerce among the several States, or with foreign nations, is declared to be illegal. Unlike Section 2, which governs unilateral monopolistic behaviors, Section 1 strictly requires a collusive meeting of the minds—two or more parties coordinating to fix prices, manipulate auctions, partition geographic territories, or blackball suppliers. Our litigation group handles high-stakes defense against federal Section 1 indictments.'
    },
    {
      id: 'sherman-act-what',
      title: 'What is the Sherman Act?',
      date: 'June 26, 2024',
      category: 'White Collar Crime',
      excerpt: 'The Sherman Antitrust Act of 1890 (15 U.S.C. § 1-7) has been one of the most enduring pieces of legislation in the nation’s history. Passed in',
      content: 'The Sherman Antitrust Act of 1890 (15 U.S.C. § 1-7) has been one of the most enduring pieces of legislation in the nation’s history. Passed in response to the massive trust cartels of the Gilded Age, the Act remains the cornerstone of American competitive trade regulation. It enforces criminal and civil penalties for businesses attempting to stifle consumer choice or manipulate free market forces. Criminal violations are classified as major felonies, carrying massive corporate fines up to $100 million and individual prison terms up to 10 years. Navigating compliance with the Sherman Act is essential for modern scaling enterprises.'
    },
    {
      id: 'estate-plan-reasons',
      title: 'Reasons You Should Form an Estate Plan',
      date: 'June 26, 2024',
      category: 'Estate Planning',
      excerpt: 'Every individual, regardless of age or financial status, should consult an estate planning attorney to determine what happens upon their passing. The purpose of',
      content: 'Every individual, regardless of age or financial status, should consult an estate planning attorney to determine what happens upon their passing. The purpose of forming a precise estate plan reaches far beyond tax minimization or wealth transfer. It defines critical medical directives, names protective guardians for minor children, establishes trusts to protect vulnerable beneficiaries, and preserves family harmony during moments of profound grief. Failing to plan leaves critical assets behind to be distributed by court probate statutes, forcing extended disputes. Our firm offers compassionate and sophisticated estate configuration.'
    }
  ];

  // Specific Categories with counts from prompt
  const categoriesList = [
    { name: 'Civil Suits', count: 5 },
    { name: 'Criminal Defense', count: 37 },
    { name: 'DUI', count: 54 },
    { name: 'Estate Planning', count: 1 },
    { name: 'Family Law', count: 9 },
    { name: 'Pharmaceuticals', count: 3 },
    { name: 'Probate Law', count: 3 },
    { name: 'Trademark Law', count: 1 },
    { name: 'Uncategorized', count: 2 },
    { name: 'White Collar Crime', count: 2 }
  ];

  // Filter and Search logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handlePageClick = (page) => {
    setCurrentPageNum(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16" id="blog-posts-page-view">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden" id="blog-hero">
        
        {/* ✅ Next.js Image দিয়ে ব্যাকগ্রাউন্ড ইমেজ অপ্টিমাইজ করা হয়েছে */}
        <div className="absolute inset-0 opacity-85">
          <Image 
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg"
            alt="Courthouse Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/60 to-brand-navy/95" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/80 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Legal Intelligence Portal</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="blog-page-header-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg"
          >
            Our Blog
          </motion.h1>
        </div>
      </section>

      {/* Main Container mirroring the screenshots */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="blog-main-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* LEFT COLUMN: Blog Cards Grid (7 Cols) */}
          <section className="lg:col-span-8 flex flex-col space-y-8" id="blog-left-col">
            
            {filteredPosts.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg border border-gray-200 shadow-sm space-y-4">
                <AlertCircle className="w-12 h-12 text-brand-gold mx-auto" />
                <h3 className="font-display text-lg font-bold text-brand-navy uppercase">No Articles Found</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto">
                  We could not locate any law publications matching {searchQuery} under the selected category. Expand your parameters or clear the query.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="px-4 py-2 bg-brand-navy text-white text-xs font-semibold uppercase rounded hover:bg-brand-gold hover:text-brand-navy transition-all"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="blog-posts-grid">
                {filteredPosts.map((post) => (
                  <motion.article 
                    layoutId={`post_card_${post.id}`}
                    key={post.id}
                    className="bg-white rounded-lg border border-gray-150 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative"
                    id={`blog_card_${post.id}`}
                  >
                    <div className="space-y-4">
                      {/* Tag & Icon bar */}
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        <span className="px-2 py-0.5 bg-slate-100 text-brand-navy rounded-sm">{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-brand-gold" />
                          <span>{post.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-[15px] sm:text-base font-bold text-brand-navy group-hover:text-brand-gold tracking-tight leading-snug uppercase transition-colors line-clamp-3">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-sans text-xs sm:text-sm text-gray-600 line-clamp-4 leading-relaxed text-justify">
                        {post.excerpt}...
                      </p>
                    </div>

                    {/* Action Footer */}
                    <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center">
                      <button 
                        onClick={() => setSelectedPost(post)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-navy uppercase tracking-wider transition-colors duration-200 cursor-pointer"
                        id={`blog_read_more_${post.id}`}
                      >
                        <span>READ MORE »</span>
                      </button>
                      
                      <span className="text-[10px] font-semibold text-gray-400 font-mono">June 26, 2024</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}

            {/* Micro Pagination Section EXACTLY matchingScreenshot text:
                "« Previous Page 1 Page 2 Page 3 … Page 10 Next »" */}
            <div className="pt-12 pb-4 border-t border-gray-150 flex justify-center items-center select-none overflow-x-auto" id="blog-pagination">
              <nav className="inline-flex flex-wrap sm:flex-nowrap justify-center -space-x-px gap-1.5 text-xs uppercase" aria-label="Pagination">
                <button 
                  onClick={() => handlePageClick(1)}
                  className="px-3 py-2 rounded border border-gray-200 bg-white hover:border-brand-gold text-gray-500 hover:text-brand-navy transition-all cursor-pointer font-semibold whitespace-nowrap"
                >
                  « Previous
                </button>
                <button 
                  onClick={() => handlePageClick(1)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 1 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 1
                </button>
                <button 
                  onClick={() => handlePageClick(2)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 2 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 2
                </button>
                <button 
                  onClick={() => handlePageClick(3)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 3 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 3
                </button>
                <span className="px-1.5 py-2 text-gray-400 font-semibold">…</span>
                <button 
                  onClick={() => handlePageClick(10)}
                  className={`px-3 py-2 rounded border font-bold transition-all cursor-pointer whitespace-nowrap ${currentPageNum === 10 ? 'border-brand-gold bg-brand-navy text-brand-gold' : 'border-gray-200 bg-white text-gray-700 hover:border-brand-gold hover:text-brand-navy'}`}
                >
                  Page 10
                </button>
                <button 
                  onClick={() => handlePageClick(2)}
                  className="px-3 py-2 rounded border border-gray-200 bg-white hover:border-brand-gold text-gray-500 hover:text-brand-navy transition-all cursor-pointer font-semibold whitespace-nowrap"
                >
                  Next »
                </button>
              </nav>
            </div>

          </section>

          {/* RIGHT SIDEBAR: Styled EXACTLY as shown in Screenshot 1 (3 Cols) */}
          <section className="lg:col-span-4 space-y-8 lg:sticky lg:top-28" id="blog-sidebar-col">
            
            <div className="bg-[#DFC483] p-6 sm:p-7 rounded shadow-md border border-amber-300 text-brand-navy space-y-8" id="blog-sidebar-container">
              
              {/* SEARCH BOX */}
              <div className="space-y-3" id="sidebar-search-section">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  SEARCH
                </h3>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..." 
                    className="w-full bg-white text-gray-800 placeholder-gray-400 pl-4 pr-10 py-2.5 rounded text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-navy border border-transparent shadow-inner"
                    id="sidebar_search_input"
                  />
                  <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* CATEGORIES SECTION */}
              <div className="space-y-3" id="sidebar-categories-section">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  CATEGORIES
                </h3>
                <ul className="space-y-2 text-xs font-semibold" id="sidebar_categories_ul">
                  {categoriesList.map((cat, idx) => {
                    const isSelected = selectedCategory === cat.name;
                    return (
                      <li key={idx} className="flex justify-between items-center group">
                        <button
                          onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                          className={`text-left hover:text-white transition-colors flex items-center gap-1.5 select-none cursor-pointer w-full ${isSelected ? 'text-white font-extrabold shadow-sm' : 'text-brand-navy/85'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-brand-navy transition-all ${isSelected ? 'bg-white scale-125' : 'group-hover:bg-white group-hover:scale-125'}`} />
                          <span className="flex-1">{cat.name}</span>
                          <span>({cat.count})</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* RECENT POSTS SECTION */}
              <div className="space-y-3" id="sidebar-recent-posts-section">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  RECENT POSTS
                </h3>
                <ul className="space-y-3 text-[11px] font-bold text-brand-navy/90 leading-tight" id="sidebar_recent_ul">
                  {blogPosts.slice(0, 10).map((post) => (
                    <li key={post.id} className="border-b border-brand-navy/5 pb-2 last:border-b-0">
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-left hover:text-white duration-250 cursor-pointer block hover:translate-x-0.5 transition-transform"
                      >
                        {post.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHIVES SECTION */}
              <div className="space-y-3" id="sidebar-archives-section">
                <h3 className="font-display text-xs font-black uppercase tracking-widest border-b border-brand-navy/15 pb-2">
                  ARCHIVES
                </h3>
                <div className="relative font-bold">
                  <select 
                    id="sidebar_archives_select"
                    defaultValue=""
                    onChange={(e) => alert(`Selected archived files from: ${e.target.value}. Directing access.`)}
                    className="w-full bg-white text-gray-800 pl-4 pr-10 py-2.5 rounded text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-brand-navy hover:border-brand-navy duration-200 cursor-pointer appearance-none"
                  >
                    <option value="" disabled>Select Month</option>
                    <option value="June 2024">June 2024</option>
                    <option value="May 2024">May 2024</option>
                    <option value="April 2024">April 2024</option>
                    <option value="March 2022">March 2022</option>
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      {/* Lightbox Modal overlay for fully intensive detailed reading */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-brand-navy/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto" id="blog_lightbox_overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded shadow-2xl max-w-2xl w-full border border-brand-gold/15 relative overflow-hidden my-8"
            >
              {/* Header Box */}
              <div className="bg-brand-navy p-6 pr-12 text-white border-b border-brand-gold/25 relative">
                <div className="flex items-center gap-1.5 text-[10px] text-brand-gold font-extrabold uppercase tracking-widest mb-1.5">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{selectedPost.category} &bull; FULL BRIEF</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase leading-snug tracking-wide text-white">
                  {selectedPost.title}
                </h3>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-gold p-2 duration-200 focus:outline-none cursor-pointer"
                  id="btn_close_lightbox"
                  aria-label="Close brief"
                >
                  <span className="text-xl font-light font-sans">&times;</span>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 text-gray-700 leading-relaxed max-h-[60vh] overflow-y-auto font-sans custom-scrollbar">
                <div className="flex items-center gap-2 text-xs text-brand-navy font-bold uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>Posted {selectedPost.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-justify font-medium leading-relaxed bg-slate-50 border-l-2 border-brand-gold p-3.5 rounded-r">
                  {selectedPost.excerpt}.
                </p>

                <p className="text-xs sm:text-sm text-justify leading-relaxed whitespace-pre-wrap">
                  {selectedPost.content}
                </p>

                <p className="text-[11px] text-gray-400 italic">
                  Disclaimer: This bulletin is provided as a news, compliance and regulatory analysis service. It does not constitute formal legal representation. Contact BHW directly for privileged advice.
                </p>
              </div>

              {/* Footer CTA */}
              <div className="bg-slate-50 p-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs font-bold uppercase">
                <span className="text-brand-navy tracking-tight">Need Representation?</span>
                <button
                  onClick={() => { setSelectedPost(null); onNavigateToContact(); }}
                  className="px-4 py-2.5 bg-brand-gold text-brand-navy rounded-sm hover:bg-brand-navy hover:text-white transition-all text-[11px] sm:text-xs tracking-wider cursor-pointer font-black shrink-0"
                >
                  Consult an Attorney
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}