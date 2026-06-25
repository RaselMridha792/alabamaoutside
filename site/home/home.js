/* =====================================================================
   home.js — behaviour specific to the home page
   - Hero animated count-up numbers
   - FAQ accordion (answers injected from data)
   - Client testimonials auto-rotating carousel
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- Hero count-up ---------- */
  function initCounters() {
    var hero = document.getElementById('hero-section');
    if (!hero) return;
    var config = {
      'Charges Resolved':    { end: 25000, decimals: 0, suffix: '+', group: true },
      '5 Star AVVO Reviews': { end: 880,   decimals: 0, suffix: '+' },
      'Perfect AVVO Rating': { end: 10,    decimals: 1, suffix: ''  },
      'Lawyer Endorsements': { end: 44,    decimals: 0, suffix: '+' },
      'Years of Experience': { end: 32,    decimals: 0, suffix: '+' }
    };
    var labelSpans = hero.querySelectorAll('span.block');
    labelSpans.forEach(function (label) {
      var cfg = config[label.textContent.trim()];
      if (!cfg) return;
      var numEl = label.previousElementSibling;
      if (!numEl) return;
      animate(numEl, cfg);
    });

    function format(val, cfg) {
      var n = cfg.decimals ? val.toFixed(cfg.decimals) : String(Math.floor(val));
      if (cfg.group) n = Number(Math.floor(val)).toLocaleString();
      return n + cfg.suffix;
    }
    function animate(el, cfg) {
      var duration = 1500, start = null;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        el.textContent = format(p * cfg.end, cfg);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = format(cfg.end, cfg);
      }
      setTimeout(function () { requestAnimationFrame(step); }, 200);
    }
  }

  /* ---------- FAQ accordion ---------- */
  var FAQ_ANSWERS = [
    "If you are facing criminal charges, being detained by the police, or being arrested, you should hire a criminal defense lawyer. Hiring an attorney can protect your rights and give you an advocate who will fight for your best interests. An experienced criminal defense attorney can help you evaluate your options and determine whether accepting a plea deal is in your interest.",
    "Even if you are innocent, it is critical to hire a skilled criminal defense lawyer. Your attorney can ensure your rights are protected as they fight for your freedom. Even innocent people can end up facing the devastating consequences of a criminal conviction if they don't have experienced attorneys representing them.",
    "Plea bargains are offers made by prosecutors to defendants. In these arrangements, a defendant may receive a lesser sentence or reduced charges in exchange for agreeing to plead guilty. A plea bargain may be the best option in your case, but it is important to consult a criminal defense attorney before making a decision. If you plead guilty, it will be reflected in your criminal record. A skilled criminal defense attorney can help you evaluate your options and determine whether accepting a plea deal is in your interest.",
    "Yes, you can be arrested even if the police don't have a warrant. The police are not required to have a warrant to make an arrest. However, failure to secure a warrant prior to making an arrest can make it easier to challenge the arrest. If you were arrested without a warrant, a criminal defense attorney may be able to help you get the charges dismissed.",
    "Typically, the police are not able to conduct a warrantless search. However, there are exceptions to the warrant requirement. An officer can conduct a search if you consent to it. There may also be exceptions to the warrant requirement, including an emergency situation, violent threats, or items in plain view. If you do not consent to a search, an exception to the warrant requirement does not apply, the charges may be thrown out.",
    "Even if you believe that you're guilty, you should still hire a criminal defense lawyer. While you may be facing criminal charges and hefty sentences, an attorney can work to reduce the charges and potential sentence. They can also help with plea negotiations and fight to ensure that the prosecution must prove your guilt beyond a reasonable doubt in order to get a conviction. Hiring a lawyer to fight for you can make it much more difficult for the prosecution to meet the burden.",
    "If you are arrested, you, your loved ones, or a bail bondsman may be given the option to pay a specified amount of money in order to get you released from jail. Bail encourages you to return for future hearings and court dates. While not all cases require bail, a skilled criminal defense lawyer can help you get the bail reduced and ensure your rights are protected as they fight for your freedom.",
    "Misdemeanors are crimes that carry a sentence of up to one year. However, felonies are more serious crimes with more significant sentences. Your past criminal history, the nature of the charges you face, and other critical factors can impact whether you are charged with a felony or misdemeanor. Your criminal defense attorney can help you better understand the extent of the charges you face."
  ];

  function initFAQ() {
    var faq = document.getElementById('faq');
    if (!faq) return;
    var buttons = faq.querySelectorAll('button');
    buttons.forEach(function (btn, i) {
      if (i >= FAQ_ANSWERS.length) return;
      var answer = document.createElement('div');
      answer.className = 'overflow-hidden transition-all duration-300 ease-in-out max-h-0';
      answer.innerHTML = '<div class="px-6 pb-5 pt-2 bg-brand-navy"><p class="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed text-justify">' + FAQ_ANSWERS[i] + '</p></div>';
      btn.parentNode.insertBefore(answer, btn.nextSibling);

      btn.addEventListener('click', function () {
        var isOpen = answer.classList.contains('max-h-[600px]');
        // close all
        faq.querySelectorAll('button').forEach(function (b) {
          var a = b.nextElementSibling;
          if (a) { a.classList.remove('max-h-[600px]'); a.classList.add('max-h-0'); }
          b.classList.remove('bg-brand-navy');
          b.classList.add('hover:bg-brand-navy/80');
          var c = b.querySelector('svg'); if (c) c.classList.remove('rotate-180');
        });
        if (!isOpen) {
          answer.classList.remove('max-h-0');
          answer.classList.add('max-h-[600px]');
          btn.classList.add('bg-brand-navy');
          btn.classList.remove('hover:bg-brand-navy/80');
          var chev = btn.querySelector('svg'); if (chev) chev.classList.add('rotate-180');
        }
      });
    });
  }

  /* ---------- Client testimonials carousel ---------- */
  var REVIEWS = [
    { name: "Corporate Client", caseType: "Corporate & General Counsel", rating: 5,
      feedback: "Boles Holmes White LLC provided us with 'big firm experience' and customized representation while maintaining an incredible level of accessibility. Their dedicated approach to our contract negotiation and compliance matters truly set them apart." },
    { name: "Litigation Client", caseType: "Business Litigation Case", rating: 5,
      feedback: "When our business relationship was threatened by a complex contract breach, their trial attorneys offered timely, creative solutions and sound commercial advice. They handled our litigation with absolute precision." },
    { name: "Individual Representation Client", caseType: "Civil Lawsuit Defense", rating: 5,
      feedback: "They gave my family personal and individualized attention during a very stressful civil dispute. They truly listened to our goals, fully identified the legal issues, and protected our best interests in the court of law." }
  ];

  function initReviews() {
    var section = document.getElementById('client-reviews');
    if (!section) return;
    var card = section.querySelector('.bg-white');
    var dots = section.querySelectorAll('.flex.justify-center.gap-2 button');
    if (!card) return;
    var slider = section.querySelector('.cursor-grab') || card.parentNode;
    var idx = 0, paused = false, timer = null, animating = false;
    var TRANS = 'opacity .35s ease, transform .35s ease';

    function stars(n) {
      var s = '';
      for (var i = 0; i < n; i++) s += '<svg class="w-4 h-4 sm:w-5 sm:h-5 fill-brand-gold text-brand-gold" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      return s;
    }
    function content(r) {
      return '<svg class="absolute right-6 top-6 w-16 h-16 text-brand-navy pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>' +
        '<div class="space-y-6"><div class="flex gap-1">' + stars(r.rating) + '</div>' +
        '<p class="font-serif text-base sm:text-lg md:text-xl text-brand-navy italic leading-relaxed text-justify sm:text-left">“' + r.feedback + '”</p></div>' +
        '<div class="mt-8 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">' +
        '<div><h4 class="font-display text-sm sm:text-base font-bold text-brand-navy tracking-wide">' + r.name + '</h4>' +
        '<span class="text-[10px] sm:text-xs font-semibold text-brand-gold uppercase tracking-wider block mt-0.5">' + r.caseType + '</span></div>' +
        '<span class="text-[9px] uppercase tracking-widest bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-2 py-0.5 rounded font-mono font-medium">Verified Case Review</span></div>';
    }
    function paintDots() {
      dots.forEach(function (d, i) {
        var active = i === idx;
        d.classList.toggle('w-6', active);
        d.classList.toggle('bg-brand-gold', active);
        d.classList.toggle('w-1.5', !active);
        d.classList.toggle('bg-white/20', !active);
      });
    }
    function paint() { card.innerHTML = content(REVIEWS[idx]); paintDots(); }

    // animated transition to a target index
    function go(target, dir) {
      target = (target % REVIEWS.length + REVIEWS.length) % REVIEWS.length;
      if (target === idx || animating) return;
      if (!dir) dir = target > idx ? 1 : -1;
      animating = true;
      card.style.transition = TRANS;
      card.style.opacity = '0';
      card.style.transform = 'translateX(' + (dir > 0 ? -40 : 40) + 'px)';
      setTimeout(function () {
        idx = target;
        paint();
        card.style.transition = 'none';
        card.style.transform = 'translateX(' + (dir > 0 ? 40 : -40) + 'px)';
        // force reflow so the next change animates
        void card.offsetWidth;
        card.style.transition = TRANS;
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
        setTimeout(function () { animating = false; }, 360);
      }, 350);
    }
    function next() { go(idx + 1, 1); }
    function prev() { go(idx - 1, -1); }
    function start() { stop(); if (!paused) timer = setInterval(next, 5000); }
    function stop() { if (timer) clearInterval(timer); timer = null; }

    // prev / next arrow buttons
    function arrow(dirRight) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', dirRight ? 'Next review' : 'Previous review');
      b.className = 'absolute top-1/2 -translate-y-1/2 ' + (dirRight ? 'right-0 sm:-right-4' : 'left-0 sm:-left-4') +
        ' z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-brand-navy shadow-lg cursor-pointer transition-colors';
      b.innerHTML = dirRight
        ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>'
        : '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
      b.addEventListener('click', function (e) { e.stopPropagation(); dirRight ? next() : prev(); start(); });
      return b;
    }
    if (slider) {
      if (getComputedStyle(slider).position === 'static') slider.classList.add('relative');
      slider.appendChild(arrow(false));
      slider.appendChild(arrow(true));
    }

    // dot navigation
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { go(i); start(); });
    });

    // pause on hover
    if (slider) {
      slider.addEventListener('mouseenter', function () { paused = true; stop(); });
      slider.addEventListener('mouseleave', function () { paused = false; start(); });
    }

    // touch / pointer swipe
    if (slider) {
      var startX = null;
      slider.addEventListener('pointerdown', function (e) { startX = e.clientX; });
      slider.addEventListener('pointerup', function (e) {
        if (startX === null) return;
        var dx = e.clientX - startX; startX = null;
        if (dx < -50) { next(); start(); }
        else if (dx > 50) { prev(); start(); }
      });
    }

    paint(); start();
  }

  function init() { initCounters(); initFAQ(); initReviews(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
