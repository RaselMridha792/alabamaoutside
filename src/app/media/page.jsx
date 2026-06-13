"use client";




import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Play, Newspaper, X } from "lucide-react";
import { FEATURED_REPORTERS } from "../../data";

export default function MediaPage({ onNavigateToContact }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  
  const youtubeVideos = [
    {
      title: "Business Challenges in a Pandemic",
      channel: "Boles Holmes Parkman White LLC",
      youtubeId: "KwE7mpbbwAY",
    },
    {
      title: "Divorce During a Pandemic",
      channel: "Boles Holmes Parkman White LLC",
      youtubeId: "5o3fwpFeWjA",
    },
    {
      title: "Considering divorce?",
      channel: "Boles Holmes Parkman White LLC",
      youtubeId: "62DShppBwGo",
    },
  ];

  const pressMentions = [
    {
      source: "Forbes",
      title:
        "Managing Corporate White-Collar Liability in Transitioning Regulatory Eras",
      date: "Jan 12, 2024",
      highlight:
        "In-depth counsel insight provided by White Collar Litigation Partners.",
    },
    {
      source: "American Lawyer",
      title: "How Boles Holmes White Secured the $40M Class Affirmation",
      date: "Nov 04, 2023",
      highlight:
        "The appellate and defense coordination that overcame rigorous objectors.",
    },
    {
      source: "CBS News",
      title:
        "Antitrust Division Targets Non-Compete and Wage Fixing in Corporate Suites",
      date: "Jul 21, 2023",
      highlight:
        "Expert commentary regarding the DOJ Criminal prosecution shifts.",
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div
      className="bg-slate-50 min-h-screen text-gray-800 scroll-smooth pb-16"
      id="media-page-view"
    >
      {/* Hero Section */}
      <section
        className="relative h-[45vh] sm:h-[50vh] flex items-center justify-center text-white bg-brand-navy overflow-hidden"
        id="media-hero"
      >
        <div className="absolute inset-0 opacity-85">
          <Image
            src="https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/about-cover.jpg"
            alt="Media Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/60 to-brand-navy/95" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            id="media-page-main-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-white drop-shadow-lg"
          >
            Media
          </motion.h1>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 bg-white" id="youtube-videos-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="font-serif text-3xl sm:text-4xl text-[#C5A85C] font-normal leading-tight"
              id="youtube-heading-serif"
            >
              YouTube Videos
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A85C] mx-auto" />
          </div>

          {/* YouTube Video Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto"
            id="youtube-videos-grid"
          >
            {youtubeVideos.map((video, idx) => {
              // ✅ প্রতিটি ভিডিওর ডিফল্ট ইউটিউব থাম্বনেইল ইউআরএল জেনারেট করা হচ্ছে
              const defaultYoutubeThumbnail = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-black relative rounded shadow-lg overflow-hidden group aspect-video border border-gray-150 cursor-pointer text-white"
                  onClick={() => handleVideoClick(video)}
                  id={`youtube_card_${idx}`}
                >
                  {/* ✅ Unsplash এর বদলে এখন অফিশিয়াল ইউটিউব ডিফল্ট থাম্বনেইল লোড হবে */}
                  <Image
                    src={defaultYoutubeThumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover filter brightness-90 group-hover:scale-105 duration-500 transition-transform"
                    unoptimized // ইউটিউবের ডোমেইন এক্সটার্নাল হওয়ায় নেক্সট ইমেজের এই প্রপার্টি সেফটি নিশ্চিত করে
                  />

                  <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/80 to-transparent flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-brand-navy border border-brand-gold flex items-center justify-center shrink-0">
                      <span className="font-serif text-[10px] font-bold text-brand-gold">
                        BHW
                      </span>
                    </div>
                    <div className="space-y-0.1 select-none">
                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide line-clamp-1 group-hover:text-brand-gold transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-[10px] text-gray-300 font-medium">
                        {video.channel}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-11 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#E50000] duration-300 transition-all">
                      <Play className="w-5 h-5 text-white fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10.5px] font-bold tracking-wider rounded flex items-center gap-1.5 hover:bg-neutral-900 shadow transition-colors">
                    <span>Watch on</span>
                    <div className="flex items-center gap-0.5">
                      <span className="font-extrabold text-white text-[11px] uppercase tracking-tighter">
                        You
                      </span>
                      <span className="bg-[#FF0000] text-white px-1 sm:px-1.5 rounded-sm text-[9.5px] font-black uppercase">
                        Tube
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={() => window.open("https://youtube.com", "_blank")}
              className="bg-[#DFC27D] hover:bg-[#C5A85C] text-brand-navy font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer text-center select-none font-sans outline-none"
              id="btn_visit_youtube_channel"
            >
              VISIT YOUTUBE CHANNEL
            </button>
          </div>
        </div>
      </section>

      {/* Press Mentions Section */}
      <section
        className="py-20 bg-slate-50 border-t border-gray-150"
        id="press-mentions-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-gold font-sans font-bold text-xs tracking-widest uppercase block">
                NATIONAL LAW COVERAGE
              </span>
              <h2 className="font-serif text-3xl text-brand-navy font-normal leading-tight uppercase">
                Law Firm Press Advocacy
              </h2>
              <div className="w-12 h-1 bg-brand-gold" />
              <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed text-justify">
                As trial defense attorneys handling high-profile corporate white
                collar criminal allegations, environmental contamination class
                briefs, and federal antitrust defense, our attorneys are
                frequently consulted by leading publications, TV news
                affiliates, and financial journals.
              </p>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed text-justify italic">
                We believe in providing the public with transparent regulatory
                understanding, and our insights help clarify the complex web of
                federal and state administrative decisions that affect
                businesses across the Southeast.
              </p>
              <div className="pt-4">
                <button
                  onClick={onNavigateToContact}
                  className="bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-300 shadow"
                >
                  Media Inquiry Contact
                </button>
              </div>
            </div>

            <div
              className="lg:col-span-7 space-y-6"
              id="press-timeline-container"
            >
              {pressMentions.map((mention, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded border border-gray-150 shadow-sm relative overflow-hidden"
                  id={`press_mention_${idx}`}
                >
                  <div className="absolute top-0 right-0 py-1.5 px-3 bg-brand-navy text-brand-gold text-[10px] font-bold uppercase tracking-wider">
                    {mention.source}
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10.5px] font-bold text-gray-400 font-mono flex items-center gap-1">
                      <Newspaper className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{mention.date}</span>
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-brand-navy uppercase max-w-lg leading-tight">
                      {mention.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-650 text-justify">
                      {mention.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Logos Grid */}
      <section
        className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100"
        id="media-logos-grid"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-widest block">
              Recognized Credibility
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-brand-navy tracking-normal">
              In The News
            </h3>
            <div className="w-8 h-0.5 bg-brand-gold mx-auto" />
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center select-none"
            id="media-reporters-grid"
          >
            {FEATURED_REPORTERS.map((reporter, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-3 filter grayscale hover:grayscale-0 transition-all duration-300"
                id={`media_reporter_${reporter.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
              >
                <div className="relative h-12 w-full max-w-[150px]">
                  <Image
                    src={reporter.logo}
                    alt={`${reporter.name} Logo`}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
            id="youtube_modal_lightbox"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-neutral-900 border border-white/10 text-white p-2 rounded-full transition-colors focus:outline-none cursor-pointer z-[55]"
                aria-label="Close Playback"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
