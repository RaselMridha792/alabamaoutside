"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Award, Shield, Clock } from 'lucide-react';

// ক্লায়েন্টের রিকয়ারমেন্ট অনুযায়ী সস্তা (Cheap) শব্দ বাদ দিয়ে নতুন কন্টেন্ট
const WHY_CHOOSE_US = [
  {
    icon: Briefcase,
    title: "Unmatched Experience",
    description: "Seasoned attorneys with decades of practice in state and federal courts."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "A highly rated legal team with a track record of success in high-stakes litigation."
  },
  {
    icon: Shield,
    title: "Aggressive Advocacy",
    description: "Tenacious representation focused entirely on achieving the best possible outcome."
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Dedicated, round-the-clock support for our clients when they need us most."
  }
];

export default function WhyOurFirm() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8" id="why-our-firm">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#0A192F]">
            Why Our Firm
          </h2>
          <div className="w-12 h-1 bg-[#C5A85C] mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group text-center space-y-4">
                {/* Icon Container */}
                <div className="flex justify-center">
                  <div className="bg-[#C5A85C]/10 group-hover:bg-[#C5A85C]/20 p-4 rounded-lg transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#C5A85C]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}