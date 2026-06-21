"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image'; 

const mediaLogos = [
  { name: "Forbes", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd892f06cae3d3bff4e71d0_forbes-1024x401.png" },
  { name: "The Dallas Morning News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd8993c59c519c3e5572559_The_Dallas_Morning_News_Logo.svg-1024x102.png" },
  { name: "ABC News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/3.svg" },
  { name: "NBC", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/4.png" },
  { name: "Fox News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/5.svg" },
  { name: "The Washington Post", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/6.svg" },
  { name: "American Lawyer", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/7.png" },
  { name: "The Birmingham News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/8.svg" },
  { name: "CBS News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/9.svg" },
  { name: "NBC News Channel", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/10.svg" },
  { name: "CNN", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/11.png" },
  { name: "Los Angeles Times", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/12.svg" },
  { name: "The Detroit News", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/13-1024x185.png" },
  { name: "The Atlanta Journal-Constitution", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/14.svg" },
  { name: "Detroit Free Press", logo: "https://alabamaoutsidecounsel.com/wp-content/uploads//2024/06/15.svg" }
];

export default function FeaturedLogos() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100" id="personal-media-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[10px] sm:text-xs font-extrabold text-brand-gold uppercase tracking-widest block">
            Media Advocacy &amp; recognition
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-brand-navy tracking-tight">
            Featured In
          </h3>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center select-none" id="media-grid">
          {mediaLogos.map((reporter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="w-full flex items-center justify-center p-3 filter grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="relative h-12 w-full max-w-[150px]">
                <Image 
                  src={reporter.logo} 
                  alt={`${reporter.name} Logo`} 
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}