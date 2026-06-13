"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Target, Handshake, Gavel } from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Case Evaluation',
    description: 'We offer personal and individualized attention. We listen closely to identify your goals and fully understand the important legal issues inherent in your case.',
    icon: MessageSquare,
  },
  {
    id: '02',
    title: 'Strategic Assessment',
    description: 'We determine the exact risks you face and develop a comprehensive plan to protect your reputation, financial strength, business relationships, and freedom.',
    icon: Target,
  },
  {
    id: '03',
    title: 'Negotiation & Resolution',
    description: 'We provide timely, creative solutions and sound commercial advice. We negotiate vigorously on your behalf in a cost-effective, efficient, and responsive manner.',
    icon: Handshake,
  },
  {
    id: '04',
    title: 'Trial Litigation',
    description: 'Our lawyers have tried hundreds of cases across multiple jurisdictions. If necessary, we are fully prepared to aggressively try your case in a court of law.',
    icon: Gavel,
  }
];

export default function OurProcess() {
  return (
    <section className="bg-[#F8F9FA] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="our-process">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy text-[10px] sm:text-xs font-bold uppercase tracking-widest"
          >
            How We Protect You
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0A192F]"
          >
            Our Legal Process
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-brand-gold mx-auto mt-4" 
          />
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Connecting Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[2px] bg-gray-200 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-brand-gold"
            />
          </div>

          {PROCESS_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Icon & Number */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-lg group-hover:border-brand-gold transition-colors duration-300 relative z-10">
                    <Icon className="w-10 h-10 text-[#0A192F] group-hover:text-brand-gold transition-colors duration-300" />
                  </div>
                  {/* Floating Number Indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A192F] text-white flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {step.id}
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full h-full group-hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-display text-lg font-bold text-[#0A192F] uppercase tracking-wide mb-3 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}