"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function LatestUpdates() {
  const swiperRef = useRef(null);

  const data = [
    {
      img: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/662e106b3e6778df1e79108c_Wage-Fixing-scaled-p-500.jpeg.webp",
      date: "Apr 28, 2024",
      title:
        "WAGE FIXING AND NO POACH AGREEMENTS IN CRIMINAL CROSSHAIRS",
      desc: "It is common knowledge among corporate executives that it is illegal to conspire...",
    },
    {
      img: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/662e0fb4c999dfe9b2dfcd63_Illegal-Sports-Gambling-scaled-p-500.jpeg.webp",
      date: "Apr 15, 2024",
      title:
        "ILLEGAL SPORTS GAMBLING SUBJECT TO PROSECUTION",
      desc: "In years past, sports gambling was often associated with seedy characters...",
    },
    {
      img: "http://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/6244ba26e1c13c41ffd68ebc_US-court-of-appeals-p-500.jpeg.webp",
      date: "Mar 15, 2022",
      title:
        "BOLES HOLMES WHITE ATTORNEY WALLY WALKER ASSISTS...",
      desc: "On March 15, 2022, the United States Court of Appeals for the Fourth Circuit affirmed...",
    },
    {
      img: "https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/6020ed45a265973d0c86f0fe_pharma-part-3-p-500-2.jpeg.webp",
      date: "Mar 10, 2024",
      title: "PHARMACEUTICAL LAW INSIGHTS",
      desc: "Regulatory insights in pharmaceutical frameworks...",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-[3px] text-gray-400 uppercase">
              LEGAL INSIGHTS & NEWS
            </p>

            <h2 className="text-[42px] font-semibold mt-2 tracking-tight">
              LATEST UPDATES
            </h2>

            <div className="w-14 h-[2px] bg-yellow-600 mt-3"></div>
          </div>

          {/* Custom Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition"
            >
              <FaArrowLeft size={12} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition"
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition">

                {/* Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[230px] object-cover"
                  />

                  <span className="absolute top-4 left-4 text-[10px] tracking-wider bg-[#0b1a2f] text-white px-3 py-1 rounded">
                    IN-DEPTH REVIEW
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[12px] text-gray-400 mb-3">
                    {item.date}
                  </p>

                  <h3 className="text-[14px] font-semibold leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[12px] text-gray-500 mb-5">
                    {item.desc}
                  </p>

                  <button className="text-[11px] font-semibold tracking-wide flex items-center gap-2 text-gray-700 hover:gap-3 transition">
                    READ MORE →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}