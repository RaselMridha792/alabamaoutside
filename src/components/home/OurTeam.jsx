"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

const TEAM_DATA = [
  {
    name: 'Jeffrey E. Holmes',
    role: 'Partner / Lead Trial Litigator',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img2.jpg',
  },
  {
    name: 'William C. White, II',
    role: 'Partner / White Collar Defense',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img3.jpg',
  },
  {
    name: 'Nathan Holmes',
    role: 'Attorney / Business & IP Advocate',
    image: 'https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img5.jpg',
  }
];

export default function OurTeam() {
  return (
    <section className="bg-[#F1F3F6] py-24 px-4 sm:px-6 lg:px-8" id="our-team">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header (Centered like the screenshot) */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A253B] tracking-tight">
            Meet Our Experienced Team
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto" />
          <p className="text-gray-600 font-sans text-sm sm:text-base max-w-2xl mx-auto mt-4">
            Our attorneys provide expert legal advice and representation to clients throughout Alabama and across the country.
          </p>
        </div>

        {/* Team Grid (3 Columns like screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TEAM_DATA.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Card: Rounded top with gradient background behind photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-[#D1D8E2] to-[#E2E8F0] shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                
                {/* Attorney Portrait with Next.js Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Floating Info Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Link 
                     href="/attorney" 
                     className="bg-white text-brand-navy p-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors"
                   >
                     <ArrowRight className="w-6 h-6" />
                   </Link>
                </div>
              </div>

              {/* Text Info (Bottom) */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-[#1A253B] group-hover:text-brand-gold transition-colors duration-300 uppercase tracking-tight">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
                
                {/* Contact Link */}
                <div className="mt-4 flex justify-center">
                  <Link 
                    href="/contact" 
                    className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-brand-navy transition-colors uppercase"
                  >
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/attorney"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A253B] text-white hover:bg-brand-gold font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300 shadow-md"
          >
            <span>View All Attorneys</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}