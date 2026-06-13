/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ACCREDITATIONS } from '../../data';

export default function Accreditations() {
  return (
    <section className="bg-[#ECEAE3] py-10 sm:py-12 px-4 sm:px-6 lg:px-8" id="accreditations">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-y-8 gap-x-2 sm:gap-x-4 md:divide-x md:divide-brand-navy/15">
          {ACCREDITATIONS.map((item) => (
            <div
              key={item.name}
              className="w-full h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-center"
            >
              <img
                src={item.logo}
                alt={`${item.name} accreditation`}
                className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
