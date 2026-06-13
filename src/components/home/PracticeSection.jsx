"use client";

import { useState } from "react";
import { FaUser, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function PracticeSection() {
  const [active, setActive] = useState("personal");

  return (
    <section className="bg-[#f7f7f7] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Practice Specialization
          </p>

          <h2 className="text-4xl font-bold mt-2">
            OUR PRACTICE AREAS
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Choose whether you require individual representation or
            state/interstate corporate representation.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div className="bg-white p-6 rounded-xl shadow-sm">

            <p className="text-xs text-gray-400 mb-4">
              SELECT ADVISORY STREAM
            </p>

            {/* Personal */}
            <div
              onClick={() => setActive("personal")}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer mb-3 transition ${
                active === "personal"
                  ? "bg-[#0b1a2f] text-white"
                  : "bg-gray-100"
              }`}
            >
              <FaUser />
              <div>
                <h4 className="font-semibold">PERSONAL</h4>
                <p className="text-xs opacity-70">
                  Civil & Criminal Individual Representation
                </p>
              </div>
            </div>

            {/* Professional */}
            <div
              onClick={() => setActive("professional")}
              className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition ${
                active === "professional"
                  ? "bg-[#0b1a2f] text-white"
                  : "bg-gray-100"
              }`}
            >
              <FaBriefcase />
              <div>
                <h4 className="font-semibold">PROFESSIONAL</h4>
                <p className="text-xs opacity-70">
                  Corporate Litigation & Compliance
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-6">
              <p className="text-xs text-gray-400 mb-2">
                DIRECT SEARCH SPECIALTIES
              </p>
              <input
                type="text"
                placeholder="e.g. White Collar, Licensing..."
                className="w-full border rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="text-xs text-gray-400 mt-4 border p-3 rounded-md">
              Our civil and regulatory lawyers have defended state and federal
              challenges in over 25 states.
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* Dark Box */}
            <div className="bg-[#0b1a2f] text-white p-8 rounded-xl mb-6 shadow-md">
              <p className="text-xs text-gray-400 mb-2">
                CATEGORY SCOPE
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                {active === "personal"
                  ? "PERSONAL COUNSEL"
                  : "PROFESSIONAL COUNSEL"}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {active === "personal"
                  ? "Our civil attorneys can help, whether your case involves a business dispute, a wrongful death, or you are a whistleblower."
                  : "Our corporate lawyers handle compliance, regulatory matters and business litigation for companies across multiple states."}
              </p>
            </div>

            {/* Practice List */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Civil Lawsuits",
                "Criminal Defense",
                "Divorce & Family Law",
                "DUI Defense",
                "Personal Injury",
                "Wills and Probate",
                "White Collar Defense & Investigations",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <span className="text-sm">{item}</span>
                  <FaArrowRight className="text-gray-400 text-xs" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}