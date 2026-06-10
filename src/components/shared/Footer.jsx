"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a1122] text-white py-16 relative">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="bg-[#0d1b33] p-6 rounded-md flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 text-sm">
              Review supreme court decisions, regional regulatory shifts, and hot white collar counsel.
            </p>
          </div>
          <div className="flex-1 flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your secure business email"
              className="flex-1 p-3 rounded border border-gray-700 bg-[#0a1122] text-white"
            />
            <button className="bg-[#c5a880] text-black font-semibold px-4 rounded hover:bg-[#c5a880]/80 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <img
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/logo-footer.png"
            alt="Boles Holmes White LLC"
            className="h-10 mb-4"
          />
          <p className="text-gray-400 text-sm mb-2">
            Boles Holmes White LLC is a full-service law firm providing transactional, litigation, government relations and white collar/criminal defense...
          </p>
          <p className="text-[#c5a880] text-xs italic">
            no representation is made that the quality of the legal services to be performed is greater than the quality of legal services performed by other lawyers.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="hover:text-[#c5a880] transition" />
            <FaTwitter className="hover:text-[#c5a880] transition" />
            <FaInstagram className="hover:text-[#c5a880] transition" />
            <FaLinkedinIn className="hover:text-[#c5a880] transition" />
          </div>
        </div>

        {/* Offices */}
        <div>
          <h4 className="font-semibold mb-2">Offices</h4>
          <p className="text-[#c5a880] text-sm font-medium">Birmingham Office</p>
          <p className="text-gray-400 text-sm">
            1929 3rd Ave. North, Suite 500 <br />
            Birmingham, AL 35203
          </p>
          <p className="text-gray-400 text-sm mt-1">
            <span className="font-semibold text-white">Phone: 205-502-2000</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Dothan Liaison: Roots rooted in Dothan, AL. Attorneys available representation throughout the country.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Jeffrey E. Holmes - Partner / Litigator</li>
            <li>William C. White, II - Partner / White Collar Defense</li>
            <li>H. Hampton Boles - Partner / Corporate Law</li>
            <li>Nathan Holmes - Attorney / Business Law</li>
            <li>Suzanne Norman - Attorney / Personal & Family Law</li>
          </ul>
        </div>

        {/* Legal Info */}
        <div>
          <h4 className="font-semibold mb-2">Legal Info</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between text-gray-500 text-xs">
        <p>© 2024 Boles Holmes White LLC</p>
        <p>Elite Corporate Counsel • Proudly Serving Dothan & Birmingham</p>
      </div>
    </footer>
  );
}