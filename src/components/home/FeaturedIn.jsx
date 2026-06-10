"use client";

import React from "react";

const featuredImages = [
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd892f06cae3d3bff4e71d0_forbes-1024x401.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5fd8993c59c519c3e5572559_The_Dallas_Morning_News_Logo.svg-1024x102.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/3.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/4.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/5.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/6.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/7.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/8.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/9.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/10.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/11.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/12.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/13-1024x185.png",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/14.svg",
  "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/15.svg",
];

export default function FeaturedIn() {
  return (
    <section className="bg-[#0a1122] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-yellow-500 text-sm uppercase mb-2 flex items-center justify-center gap-2">
          <span>⭐</span> National Credibility <span>⭐</span>
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
          Featured In
        </h2>
        <div className="w-24 h-0.5 bg-yellow-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {featuredImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-md flex items-center justify-center w-full h-20 md:h-24"
            >
              <img
                src={img}
                alt={`Featured logo ${idx + 1}`}
                className="object-contain max-h-full"
              />
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm mt-12">
          Nationally Highlighted Litigation Performance | Boles Holmes White
          LLC is trusted nationwide with criminal, transactional, and
          regulatory actions.
        </p>
      </div>
    </section>
  );
}