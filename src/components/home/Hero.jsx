"use client"

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Landmark, Briefcase, ChevronDown } from 'lucide-react';
import { HERO_CONTENT, FORWARD_CARDS } from '../../data';
import Link from 'next/link';

export default function Hero() {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Landmark className="w-8 h-8 text-brand-gold" />;
      case 1:
        return <Briefcase className="w-8 h-8 text-brand-gold" />;
      case 2:
        return <ShieldCheck className="w-8 h-8 text-brand-gold" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-brand-gold" />;
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between text-white bg-brand-navy overflow-visible" id="hero">
      {/* Background Wrapper with absolute clipping to prevent horizontal scrollbars on scaling */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Image with Dark & Warm Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-100 filter contrast-105 brightness-90 transition-opacity duration-500"
          style={{ backgroundImage: `url(${HERO_CONTENT.backgroundImage})` }}
        />
        {/* Decorative Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/45 to-brand-navy/95" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-12 flex-grow flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Accent Gold Crest / Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy/80 border border-brand-gold/45 rounded-full text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6 shadow-md" id="hero_badge">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
            Litigation & Regulatory Leaders
          </div>

          <h1 
            id="hero_title"
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-6 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
          >
            {HERO_CONTENT.title}
          </h1>

          <p 
            id="hero_subtitle"
            className="font-serif text-lg sm:text-xl md:text-2xl text-brand-gold-light tracking-wide max-w-3xl mx-auto font-medium mb-4 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
          >
            “{HERO_CONTENT.subtitle}”
          </p>

          <p 
            id="hero_description"
            className="font-sans text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] font-medium"
          >
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#contact" 
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 shadow-xl"
              id="hero_cta_consult"
            >
              Request Free Consultation
            </Link>
            <Link 
              href="#practice-areas" 
              className="bg-transparent hover:bg-white/5 border border-white/30 hover:border-brand-gold font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-sm transition-all duration-300 text-white"
              id="hero_cta_practices"
            >
              Explore Practice Areas
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-brand-gold-light/60 hover:text-brand-gold cursor-pointer transition-colors hidden md:block">
          <Link href="#three-pillars" aria-label="Scroll Down">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </div>
      </div>

      {/* Floating 3 Pillars Overlay (Government Investigations, Business Law, Litigation) */}
      <div id="three-pillars" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-16 md:-mb-28 transform translate-y-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FORWARD_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-brand-navy-light/95 backdrop-blur-md rounded-lg p-6 border-t-4 border-brand-gold shadow-2xl flex flex-col justify-between"
              id={`pillar_card_${i}`}
            >
              <div>
                <div className="p-3 bg-brand-gold/10 border border-brand-gold/20 rounded-md inline-block mb-4 leading-none">
                  {getIcon(i)}
                </div>
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {card.content}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold hover:text-white uppercase tracking-wider transition-colors"
                >
                  Schedule Advisory &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}