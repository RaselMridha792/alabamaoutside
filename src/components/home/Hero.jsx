'use client';

import { ChevronDown } from 'lucide-react';

// কাস্টম এসভিজি আইকনসমূহ
const GovernmentIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="16" width="30" height="3" fill="#B8986A" />
    <rect x="6"  y="19" width="3.5" height="12" fill="#B8986A" />
    <rect x="12.5" y="19" width="3.5" height="12" fill="#B8986A" />
    <rect x="20" y="19" width="3.5" height="12" fill="#B8986A" />
    <rect x="26.5" y="19" width="3.5" height="12" fill="#B8986A" />
    <rect x="3" y="31" width="30" height="2.5" fill="#B8986A" />
    <polygon points="18,3 3,16 33,16" fill="#B8986A" />
  </svg>
);

const BusinessIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="13" width="26" height="18" rx="1" stroke="#B8986A" strokeWidth="2" fill="none" />
    <path d="M13 13V10C13 8.34 14.34 7 16 7H20C21.66 7 23 8.34 23 10V13" stroke="#B8986A" strokeWidth="2" fill="none" />
    <line x1="5" y1="22" x2="31" y2="22" stroke="#B8986A" strokeWidth="2" />
    <line x1="18" y1="19" x2="18" y2="25" stroke="#B8986A" strokeWidth="2" />
  </svg>
);

const LitigationIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3L5 10V20C5 27.2 10.8 33.8 18 35C25.2 33.8 31 27.2 31 20V10L18 3Z" stroke="#B8986A" strokeWidth="2" fill="none" />
    <polyline points="12,18 16,22 24,14" stroke="#B8986A" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const practiceAreas = [
  {
    icon: <GovernmentIcon />,
    title: 'GOVERNMENT INVESTIGATIONS',
    body: "We handle every variety of criminal, white collar defense and regulatory investigation, including investigations involving USDA, DOJ, securities, tax (IRS), professional licensure, embezzlement, environmental (EPA), fraud, healthcare and insurance. Clients trust our criminal and regulatory lawyers with their most important criminal litigation and regulatory matters, which has brought our attorneys before state, federal and administrative courts in over half of our nation's states.",
  },
  {
    icon: <BusinessIcon />,
    title: 'BUSINESS LAW',
    body: "Our business attorneys have rich experience consulting a variety of businesses, both traditional brick and mortar to e-commerce and technology based, from inception to sale or dissolution and everything in between. We are happy to assist you whether you need help forming your start-up and securing its intellectual property or have a billion dollar transaction; we've done both.",
  },
  {
    icon: <LitigationIcon />,
    title: 'LITIGATION',
    body: "Our lawyers have tried hundreds of cases. We offer timely and creative solutions and sound commercial advice. We are a full service litigation firm, including, intellectual property, privacy and technology matters, labor and employment, white collar defense and corporate investigations, construction, real property, personal injury, breach of contract, products liability, professional liability, business litigation, and general commercial litigation. Please review our website to see the full breadth of litigation services we offer.",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* ── MAIN WRAPPER (হিরো ব্যাকগ্রাউন্ড ইমেজ এবং ওভারলে) ── */}
      <div 
        className="relative w-full bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-[#070e1a]/65 before:z-0"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dsga4gyw9/image/upload/v1781091276/home-bg_unmzib.webp')" }}
      >
        {/* pt-44 md:pt-48 ব্যবহারের ফলে লেখাগুলো ফিক্সড হেডারের নিচে ঢুকবে না।
          pb-24 দিয়ে নিচের দিকে স্পেস রাখা হয়েছে যাতে কার্ডগুলো সুন্দরভাবে বসতে পারে।
        */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center pt-44 md:pt-48 pb-24">
          <div className="text-center max-w-4xl px-6 mx-auto w-full">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#B8986A]/60 bg-[#0a1423]/30 text-[#c9ae82] text-[10px] font-medium tracking-[0.22em] uppercase px-5 py-2 mb-8">
              <span className="text-[8px] text-[#B8986A] leading-none">✦</span>
              LITIGATION &amp; REGULATORY LEADERS
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide uppercase leading-[1.1] mb-6">
              PROTECT YOUR PRIORITIES
            </h1>

            {/* Italic quote */}
            <p className="font-serif italic text-xl md:text-2xl font-normal text-[#d4c5a9] leading-relaxed mb-6 max-w-3xl mx-auto">
              &ldquo;The law firm of Boles Holmes White has a long history of<br className="hidden md:inline" />
              protecting our clients.&rdquo;
            </p>

            {/* Body */}
            <p className="font-sans text-sm font-normal text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto tracking-wide">
              We determine the risks our clients face and develop a plan to protect their<br className="hidden md:inline" />
              reputation, financial strength, business relationships, freedom, and future.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap ">
              <button className="border border-[#B8986A] bg-[#B8986A]/10 text-[#d4b896] font-sans text-[10px] font-semibold tracking-[0.18em] uppercase px-8 py-4 transition-colors duration-200 hover:bg-[#B8986A] hover:text-white cursor-pointer">
                REQUEST FREE CONSULTATION
              </button>
              <button className="border border-white/50 bg-transparent text-white/85 font-sans text-[10px] font-semibold tracking-[0.18em] uppercase px-8 py-4 transition-colors duration-200 hover:bg-white/10 cursor-pointer">
                EXPLORE PRACTICE AREAS
              </button>
            </div>

            {/* Chevron */}
            <div className="flex justify-center opacity-80 ">
              <ChevronDown size={22} className="text-[#B8986A] stroke-[1.5]" />
            </div>

          </div>

          {/* ── CARDS GRID (আপনার লাল মার্ক করা পজিশনে কার্ডগুলোকে তোলার জন্য এখানে রাখা হয়েছে) ── */}
          {/* translate-y-36 বা translate-y-40 দিয়ে কার্ডগুলোকে নিখুঁতভাবে অর্ধেক ব্যাকগ্রাউন্ডের ওপর তোলা হয়েছে */}
          <div className="relative z-20 max-w-6xl w-full mx-auto px-6 translate-y-36 md:translate-y-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {practiceAreas.map((area) => (
                <div 
                  key={area.title} 
                  className="bg-[#1a2a42]  border-t-2 border-[#c4a881] rounded-md p-8 flex flex-col justify-between min-h-[410px] shadow-2xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="mb-5">{area.icon}</div>
                    <h3 className="font-sans text-xs font-bold tracking-[0.13em] text-white uppercase mb-4">
                      {area.title}
                    </h3>
                    <p className="font-sans text-[13px] font-light text-[#becddc]/75 leading-relaxed text-justify">
                      {area.body}
                    </p>
                  </div>
                  
                  <a 
                    href="#" 
                    className="block mt-8 pt-4 border-t border-white/10 text-[10px] font-semibold tracking-[0.16em] text-[#B8986A] uppercase no-underline transition-colors duration-200 hover:text-[#d4b896]"
                  >
                    SCHEDULE ADVISORY →
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── WHITE SECTION (হিরো সেকশনের ঠিক পরের অংশ) ── */}
      {/*pt-36 বা pt-40 দেওয়া হয়েছে যাতে কার্ডগুলোর পেছনের খালি অংশটি ব্যালেন্স হয়ে যায় */}
      <div className="bg-white relative w-full pt-36 md:pt-40 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* এখানে আপনার পরের সেকশনের কন্টেন্ট বসবে (যেমন: ABOUT OUR LAW FIRM) */}
        </div>
      </div>
    </>
  );
}