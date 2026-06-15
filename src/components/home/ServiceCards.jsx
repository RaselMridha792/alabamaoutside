"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Briefcase, Scale } from 'lucide-react';

const SERVICES_DATA = [
  {
    title: "Government Investigations",
    icon: Landmark,
    content: "We handle every variety of criminal, white collar defense and regulatory investigation, including investigations involving USDA, DOJ, securities, tax (IRS), professional licensure, embezzlement, environmental (EPA), fraud, healthcare and insurance. Clients trust our criminal and regulatory lawyers with their most important criminal litigation and regulatory matters, which has brought our attorneys before state, federal and administrative courts in over half of our nation’s states."
  },
  {
    title: "Business Law",
    icon: Briefcase,
    content: "Our business attorneys have rich experience consulting a variety of businesses, both traditional brick and mortar to e-commerce and technology based, from inception to sale or dissolution and everything in between. We are happy to assist you whether you need help forming your start-up and securing its intellectual property or have a billion dollar transaction; we’ve done both."
  },
  {
    title: "Litigation",
    icon: Scale,
    content: "Our lawyers have tried hundreds of cases. We offer timely and creative solutions and sound commercial advice. We are a full service litigation firm, including, intellectual property, privacy and technology matters, labor and employment, white collar defense and corporate investigations, construction, real property, personal injury, breach of contract, products liability, professional liability, business litigation, and general commercial litigation. Please review our website to see the full breadth of litigation services we offer."
  }
];

export default function ServiceCards() {
  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#C5A85C]/40 transition-all duration-300 group flex flex-col relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A192F] to-[#C5A85C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Icon & Title */}
                <div className="flex flex-col items-center text-center space-y-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#0A192F] group-hover:border-[#0A192F] transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#C5A85C]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0A192F] tracking-tight group-hover:text-[#C5A85C] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-[#C5A85C]/30 mx-auto mb-6 group-hover:w-24 group-hover:bg-[#C5A85C] transition-all duration-300" />

                {/* Content */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed text-center flex-grow">
                  {service.content}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}