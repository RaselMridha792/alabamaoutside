"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Compass, Award, ExternalLink, ArrowRight, ShieldAlert } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data';
import Image from 'next/image';
import Link from 'next/link';

export default function About({ onNavigateToAbout }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-white text-gray-800 py-32 px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-brand-gold font-sans font-semibold text-xs tracking-widest uppercase block">
                Established Foundations &bull; Proactive Defense
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-navy font-bold tracking-tight uppercase" id="about_title">
                {ABOUT_CONTENT.title}
              </h2>
              <div className="w-16 h-1 bg-brand-gold" />
            </div>

            <div className="space-y-6 font-sans text-gray-600 leading-relaxed text-sm sm:text-base">
              <p id="about_p1" className="text-gray-700 font-serif text-lg leading-relaxed italic border-l-4 border-brand-gold/30 pl-4">
                {ABOUT_CONTENT.paragraph1}
              </p>
              
              <p id="about_p2" className="text-gray-600">
                {ABOUT_CONTENT.paragraph2}
              </p>
            </div>

            {/* Quick Stats Grid or Trust Banner */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 border-l-2 border-brand-gold rounded-r-md">
                <Compass className="w-5 h-5 text-brand-gold mb-1.5" />
                <h4 className="font-semibold text-brand-navy text-sm uppercase">Pro Hac Vice</h4>
                <p className="text-xs text-gray-500 mt-1">Multi-state representation & representation throughout the country.</p>
              </div>
              <div className="p-4 bg-gray-50 border-l-2 border-brand-gold rounded-r-md">
                <Building2 className="w-5 h-5 text-brand-gold mb-1.5" />
                <h4 className="font-semibold text-brand-navy text-sm uppercase">Dual Office Reach</h4>
                <p className="text-xs text-gray-500 mt-1">Fully staffed, highly accessible offices in Birmingham and Dothan.</p>
              </div>
            </div>

            {/* Learn More Action Button */}
            <div className="pt-4 flex flex-col gap-4">
              <Link
                href="/about"
                id="about_learn_more_btn"
                className="inline-flex self-start items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark hover:text-brand-navy font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-sm transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>{ABOUT_CONTENT.actionText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <AnimatePresence>
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-brand-navy/5 border border-brand-gold/20 p-6 rounded-md text-sm text-gray-700 italic space-y-4 shadow-inner"
                    id="about_extended_content"
                  >
                    <div className="flex gap-2.5 items-start">
                      <ShieldAlert className="w-5 h-5 text-brand-dark collapse shrink-0 text-brand-gold mt-0.5" />
                      <div>
                        <strong className="text-brand-navy font-sans tracking-wide block uppercase not-italic text-xs font-semibold mb-1">
                          Admissions & Jurisdictional Compliance
                        </strong>
                        <p className="leading-relaxed">
                          In states where BHW does not have a licensed attorney physically residing, members of our firm have been admitted <em>pro hac vice</em> to advocate for our clients in state and federal courts. Our commitment is as accessible and robust as a local firm with all the resources of a national powerhouse.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Photo Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-6 gap-4 items-end">
              
              {/* Image 1 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="col-span-2 overflow-hidden rounded-md shadow-lg"
                id="about_img_1_container"
              >
               <Image
  src={ABOUT_CONTENT.images[0]}
  alt="BHW Attorney Office Portrait 1"
  id="about_img_1"
  width={600}
  height={400}
  className="w-full h-48 sm:h-64 object-cover brightness-95 contrast-105 hover:brightness-100 transition-all duration-300"
  referrerPolicy="no-referrer"
/>
              </motion.div>

              {/* Image 2 (Center highlight - taller) */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="col-span-2 overflow-hidden rounded-md shadow-2xl border-4 border-white transform translate-y-[-16px]"
                id="about_img_2_container"
              >
               <Image
  src={ABOUT_CONTENT.images[1]}
  alt="BHW Attorney Office Portrait 2"
  id="about_img_2"
  width={600}
  height={500}
  className="w-full h-64 sm:h-80 object-cover brightness-95 contrast-105 hover:brightness-100 transition-all duration-300"
  referrerPolicy="no-referrer"
/>
              </motion.div>

              {/* Image 3 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="col-span-2 overflow-hidden rounded-md shadow-lg"
                id="about_img_3_container"
              >
               <Image
  src={ABOUT_CONTENT.images[2]}
  alt="BHW Attorney Office Portrait 3"
  id="about_img_3"
  width={600}
  height={400}
  className="w-full h-48 sm:h-64 object-cover brightness-95 contrast-105 hover:brightness-100 transition-all duration-300"
  referrerPolicy="no-referrer"
/>
                
              </motion.div>

            </div>

            {/* Subtle decorative gold outline box in background */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 border-r-2 border-b-2 border-brand-gold/30 hidden sm:block pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}