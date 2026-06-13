"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "When Should I Hire a Criminal Defense Lawyer?",
    answer: "If you are facing criminal charges, being detained by the police, or being arrested, you should hire a criminal defense lawyer. Hiring an attorney can protect your rights and give you an advocate who will fight for your best interests. An experienced criminal defense attorney can help you evaluate your options and determine whether accepting a plea deal is in your interest."
  },
  {
    question: "Do I Need a Criminal Defense Lawyer if I'm Innocent?",
    answer: "Even if you are innocent, it is critical to hire a skilled criminal defense lawyer. Your attorney can ensure your rights are protected as they fight for your freedom. Even innocent people can end up facing the devastating consequences of a criminal conviction if they don't have experienced attorneys representing them."
  },
  {
    question: "What's a Plea Bargain? Should I Accept a Deal?",
    answer: "Plea bargains are offers made by prosecutors to defendants. In these arrangements, a defendant may receive a lesser sentence or reduced charges in exchange for agreeing to plead guilty. A plea bargain may be the best option in your case, but it is important to consult a criminal defense attorney before making a decision. If you plead guilty, it will be reflected in your criminal record. A skilled criminal defense attorney can help you evaluate your options and determine whether accepting a plea deal is in your interest."
  },
  {
    question: "Can I Get Arrested if the Police Don't Have a Warrant?",
    answer: "Yes, you can be arrested even if the police don't have a warrant. The police are not required to have a warrant to make an arrest. However, failure to secure a warrant prior to making an arrest can make it easier to challenge the arrest. If you were arrested without a warrant, a criminal defense attorney may be able to help you get the charges dismissed."
  },
  {
    question: "Can the Police Conduct a Warrantless Search?",
    answer: "Typically, the police are not able to conduct a warrantless search. However, there are exceptions to the warrant requirement. An officer can conduct a search if you consent to it. There may also be exceptions to the warrant requirement, including an emergency situation, violent threats, or items in plain view. If you do not consent to a search, an exception to the warrant requirement does not apply, the charges may be thrown out."
  },
  {
    question: "Is It Worth It to Hire a Lawyer If I'm Guilty?",
    answer: "Even if you believe that you're guilty, you should still hire a criminal defense lawyer. While you may be facing criminal charges and hefty sentences, an attorney can work to reduce the charges and potential sentence. They can also help with plea negotiations and fight to ensure that the prosecution must prove your guilt beyond a reasonable doubt in order to get a conviction. Hiring a lawyer to fight for you can make it much more difficult for the prosecution to meet the burden."
  },
  {
    question: "What is Bail?",
    answer: "If you are arrested, you, your loved ones, or a bail bondsman may be given the option to pay a specified amount of money in order to get you released from jail. Bail encourages you to return for future hearings and court dates. While not all cases require bail, a skilled criminal defense lawyer can help you get the bail reduced and ensure your rights are protected as they fight for your freedom."
  },
  {
    question: "What's the Difference Between a Misdemeanor and a Felony?",
    answer: "Misdemeanors are crimes that carry a sentence of up to one year. However, felonies are more serious crimes with more significant sentences. Your past criminal history, the nature of the charges you face, and other critical factors can impact whether you are charged with a felony or misdemeanor. Your criminal defense attorney can help you better understand the extent of the charges you face."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#0A192F] py-24 px-4 sm:px-6 lg:px-8" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
            Common Questions About Criminal Defense in Birmingham, Alabama
          </h2>
          <div className="w-12 h-1 bg-brand-gold mx-auto" />
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FAQ_DATA.map((item, index) => (
            <div key={index} className="border border-brand-gold/20 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-brand-navy-light hover:bg-brand-navy/80 px-6 py-5 flex items-start justify-between gap-4 transition-colors duration-300"
              >
                <span className="font-display text-sm sm:text-base font-bold text-brand-gold text-left group-hover:text-brand-gold">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="bg-brand-navy px-6 py-5 border-t border-brand-gold/20">
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
