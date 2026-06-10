"use client";

import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiX,
  FiChevronUp,
} from "react-icons/fi";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition"
          >
            <FiMessageCircle size={18} /> Contact Us
          </button>
        )}

        {/* Mini buttons when open */}
        {open && (
          <div className="flex flex-col gap-2 items-end">
            <button
              onClick={() => alert("Call primary hotline")}
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              <FiPhone size={16} /> Call
            </button>
            <button
              onClick={() => alert("Open email form")}
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              <FiMail size={16} /> Email
            </button>
            <button
              onClick={() => alert("Open chat window")}
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow hover:bg-gray-800 transition"
            >
              <FiMessageCircle size={16} /> Chat
            </button>
          </div>
        )}
      </div>

      {/* Sidebar / Contact Center */}
      {open && (
        <div className="fixed bottom-0 right-0 z-50 w-80 md:w-96 bg-[#0d1b33] text-white rounded-tl-md rounded-tr-md shadow-lg border border-gray-700">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            <div>
              <h4 className="font-semibold text-sm">
                Privileged Duty Advisor
              </h4>
              <p className="text-gray-400 text-xs">BHW Confidential Triage</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <FiX size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex text-xs font-semibold border-b border-gray-600">
            <button className="flex-1 py-2 text-gray-400 hover:text-yellow-500 transition">
              Intake Form
            </button>
            <button className="flex-1 py-2 text-gray-400 hover:text-yellow-500 transition">
              Legal Chat
            </button>
            <button className="flex-1 py-2 text-gray-400 hover:text-yellow-500 transition">
              Direct Info
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-3 text-gray-300 text-sm">
            <div>
              <p className="font-semibold text-white">Birmingham Headquarters</p>
              <p>1929 3rd Ave. North, Suite 500</p>
              <p>Birmingham, AL 35203</p>
            </div>
            <div>
              <p className="font-semibold text-white">Dothan Administration Suite</p>
              <p>Downtown Central Offices</p>
              <p>Dothan, AL 36301</p>
            </div>

            <button className="flex items-center gap-2 bg-yellow-500 text-black font-semibold px-4 py-2 rounded w-full hover:bg-yellow-400 transition">
              <FiPhone /> Dial Primary Hotline 205-502-2000
            </button>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded w-full hover:bg-gray-800 transition">
              <FiMail /> Transmit Priority Email
            </button>

            <div className="text-gray-400 text-xs border-t border-gray-600 pt-2">
              <p>
                Strict Privacy Bound: All interactive exchanges are encrypted and under professional attorney-client communication standards.
              </p>
            </div>

            {/* Close Footer Button */}
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 bg-gray-800 text-gray-300 px-4 py-2 rounded w-full hover:bg-gray-700 transition mt-2"
            >
              <FiChevronUp /> Close Center
            </button>
          </div>
        </div>
      )}
    </>
  );
}