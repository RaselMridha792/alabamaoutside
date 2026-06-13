"use client";

import React from "react";
import { FiPhone, FiClock, FiSend } from "react-icons/fi";

export default function ContactUs() {
  return (
    <section
      className="relative bg-[#0a1122] bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fbc0a0c0b0ea380e7229577_courtroom-898931_1920-1-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div> {/* overlay */}
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
        {/* Left content */}
        <div className="flex flex-col justify-start">
          <p className="text-[#c5a880] uppercase text-sm mb-2">
            Immediate Response Advisory
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-[#c5a880] mb-6"></div>
          <p className="mb-6 text-gray-300">
            Protecting your future requires timely, sophisticated action. Our
            responsive multi-state attorneys are prepared to counsel you through
            complex white collar charges, business disputes, or individual
            family disputes. Fill out the contact request form to schedule your
            case evaluation.
          </p>

          {/* Hotline & Response */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <FiPhone className="text-[#c5a880] text-xl" />
              <div>
                <p className="text-gray-400 text-xs uppercase">
                  Direct Hotline
                </p>
                <p className="font-semibold text-lg">205-502-2000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiClock className="text-[#c5a880] text-xl" />
              <div>
                <p className="text-gray-400 text-xs uppercase">
                  Response Expectation
                </p>
                <p className="font-semibold text-lg">
                  All inquiries reviewed within 2 hours
                </p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded flex flex-col items-center w-28">
              <span className="text-[#c5a880] text-2xl">⚖️</span>
              <p className="text-xs mt-2">BHW Justice</p>
            </div>
            <div className="bg-white/10 p-4 rounded flex flex-col items-center w-28">
              <p className="font-bold text-sm">10.0</p>
              <p className="text-xs mt-1">AVVO Rated</p>
            </div>
            <div className="bg-white/10 p-4 rounded flex flex-col items-center w-28">
              <p className="text-xs">AV Preeminent</p>
            </div>
            <div className="bg-white/10 p-4 rounded flex flex-col items-center w-28">
              <p className="text-xs">Super Lawyer</p>
            </div>
            <div className="bg-white/10 p-4 rounded flex flex-col items-center w-28">
              <p className="text-xs">Top 100 Trial Lawyers</p>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-[#0d1b33] p-8 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Case Assessment Submission</h3>
          <p className="text-gray-400 text-sm mb-6">
            Information submitted through this form is held in strict fiduciary
            confidence.
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-3 bg-[#0a1122] rounded border border-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-3 bg-[#0a1122] rounded border border-gray-700 text-white"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Phone (Primary)"
                className="flex-1 p-3 bg-[#0a1122] rounded border border-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Email (Primary)"
                className="flex-1 p-3 bg-[#0a1122] rounded border border-gray-700 text-white"
              />
            </div>
            <select className="p-3 bg-[#0a1122] rounded border border-gray-700 text-gray-300">
              <option>Select legal practice category...</option>
            </select>
            <textarea
              placeholder="Please write down high-level details of your case..."
              className="p-3 bg-[#0a1122] rounded border border-gray-700 text-white h-32"
            />
            <p className="text-xs text-gray-400 mt-2">
              By providing your phone number, you consent to receive automated
              informational/promotional SMS communications...
            </p>
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 bg-[#c5a880] text-black font-semibold py-3 rounded hover:bg-[#c5a880]/80 transition"
            >
              Submit Request <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}