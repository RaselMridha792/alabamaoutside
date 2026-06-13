/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DollarSign, Users, MessageSquare, Clock } from 'lucide-react';

const WHY_CHOOSE_US = [
  {
    icon: DollarSign,
    title: "We Offer Flexible Payments",
    description: "Customized payment plans that work with your budget"
  },
  {
    icon: Users,
    title: "Our Legal Team Is Highly Rated",
    description: "Experienced and dedicated attorneys with proven track records"
  },
  {
    icon: MessageSquare,
    title: "We Offer Free Consultations",
    description: "Discuss your case with no obligation or cost"
  },
  {
    icon: Clock,
    title: "We're Available To You 24/7",
    description: "Round-the-clock support when you need us most"
  }
];

export default function WhyOurFirm() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8" id="why-our-firm">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-brand-navy">
            Why Our Firm
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group text-center space-y-4">
                {/* Icon Container */}
                <div className="flex justify-center">
                  <div className="bg-brand-gold/10 group-hover:bg-brand-gold/20 p-4 rounded-lg transition-colors duration-300">
                    <Icon className="w-8 h-8 text-brand-gold" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-brand-navy">
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
