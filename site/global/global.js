/* =====================================================================
   global.js — shared behaviour for every page
   - Navbar: mobile menu toggle, mobile sub-menu accordions, scroll shadow
   - Floating contact widget: panel inject + tabs + form/chat/info logic
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     NAVBAR
  --------------------------------------------------------------- */
  function initNavbar() {
    var toggles = document.querySelectorAll('button[aria-label="Toggle Menu"]');
    var panel = document.querySelector(
      '.sm\\:hidden.absolute.top-full.left-0.w-full.bg-white'
    );

    var OPEN = ['max-h-[800px]', 'border-b', 'border-gray-200', 'opacity-100', 'overflow-y-auto'];
    var CLOSED = ['max-h-0', 'opacity-0'];
    var open = false;

    function setOpen(state) {
      if (!panel) return;
      open = state;
      CLOSED.forEach(function (c) { panel.classList.toggle(c, !open); });
      OPEN.forEach(function (c) { panel.classList.toggle(c, open); });
    }

    toggles.forEach(function (btn) {
      btn.addEventListener('click', function () { setOpen(!open); });
    });

    // Mobile sub-menu accordions (Personal / Professional inside the panel)
    if (panel) {
      panel.querySelectorAll('button').forEach(function (btn) {
        var sub = btn.nextElementSibling;
        if (!sub || sub.className.indexOf('overflow-hidden') === -1) return;
        btn.addEventListener('click', function () {
          var isOpen = sub.classList.contains('max-h-[500px]');
          sub.classList.toggle('max-h-[500px]', !isOpen);
          sub.classList.toggle('opacity-100', !isOpen);
          sub.classList.toggle('max-h-0', isOpen);
          sub.classList.toggle('opacity-0', isOpen);
          var chev = btn.querySelector('svg');
          if (chev) chev.classList.toggle('rotate-180', !isOpen);
        });
      });

      // Close menu when a real link is tapped
      panel.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { setOpen(false); });
      });
    }

    // Scroll shadow on the sticky white header
    var header = document.querySelector('header.sticky');
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 50) {
          header.classList.add('shadow-md');
          header.classList.remove('border-b', 'border-gray-200');
        } else {
          header.classList.remove('shadow-md');
          header.classList.add('border-b', 'border-gray-200');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------------------------------------------------------------
     FLOATING CONTACT WIDGET
  --------------------------------------------------------------- */
  var SMS_CONSENT_TEXT = "By providing your phone number, you consent to receive automated informational/promotional SMS communications from Lawmatics on behalf of Boles Holmes White. Consent is not a condition of purchase. Message & data rates may apply and frequency will vary. Reply STOP to unsubscribe. Text HELP for help. Privacy Policy • Terms of Use";

  function buildPanel() {
    var areaOptions = [
      ['Corporate & Business', 'Corporate & Business Litigation'],
      ['Government Investigations', 'Government Investigations'],
      ['White Collar Defense', 'White Collar Defense'],
      ['Professional License', 'Professional License Protection'],
      ['Criminal Defense / DUI', 'Criminal Defense / DUI'],
      ['Personal Injury', 'Personal Injury Claims'],
      ['Family Law', 'Divorce & Family Law'],
      ['Other', 'Other Civil Challenges']
    ].map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('');

    var chatChips = ["White Collar Defense", "Civil Lawsuits", "Business Dispute", "Personal Injury Claim", "DUI & Criminal", "Government Fraud"]
      .map(function (c) {
        return '<button type="button" data-chip="' + c + '" class="bg-brand-navy border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-navy-light text-[10px] text-left p-1.5 rounded transition-all font-semibold font-sans uppercase tracking-tight text-gray-200 cursor-pointer">' + c + '</button>';
      }).join('');

    return '' +
'<div class="absolute bottom-16 right-0 w-[92vw] sm:w-[410px] bg-brand-navy-light text-white rounded-xl shadow-2xl border border-brand-gold/20 overflow-hidden mb-2 hidden" id="floating-contact-panel">' +
  '<div class="bg-brand-navy p-4 pb-3 border-b border-white/10 flex items-center justify-between">' +
    '<div class="flex items-center gap-2.5">' +
      '<div class="w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping"></div>' +
      '<div><h3 class="font-display text-sm font-bold uppercase tracking-wider text-white">Privileged Duty Advisor</h3>' +
      '<p class="text-[10px] text-brand-gold font-semibold uppercase tracking-widest">BHW Confidential Triage</p></div>' +
    '</div>' +
    '<button id="btn-close-floating-panel" aria-label="Close panel" class="p-1 px-1.5 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white rounded border border-white/10 cursor-pointer">✕</button>' +
  '</div>' +
  '<div class="grid grid-cols-3 bg-brand-navy/60 border-b border-white/5 text-center text-xs">' +
    '<button data-tab="form" class="py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer">Intake Form</button>' +
    '<button data-tab="chat" class="py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer">Legal Chat</button>' +
    '<button data-tab="info" class="py-2.5 font-bold uppercase tracking-wider transition-all cursor-pointer">Direct Info</button>' +
  '</div>' +
  '<div class="max-h-[380px] sm:max-h-[420px] overflow-y-auto p-4 sm:p-5 custom-scrollbar" id="floating-panel-inner-body">' +

    /* FORM TAB */
    '<div data-pane="form">' +
      '<form id="floating-intake-form" class="space-y-3 text-xs sm:text-sm">' +
        '<div class="grid grid-cols-2 gap-2.5">' +
          '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-300 font-bold block">* First Name</label><input required type="text" name="firstName" placeholder="First..." class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"></div>' +
          '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-300 font-bold block">* Last Name</label><input required type="text" name="lastName" placeholder="Last..." class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"></div>' +
        '</div>' +
        '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-300 font-bold block">* Phone (Primary)</label><input required type="tel" name="phone" placeholder="(205) 502-2000" class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"></div>' +
        '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-300 font-bold block">* Email (Primary)</label><input required type="email" name="email" placeholder="name@example.com" class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold"></div>' +
        '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-300 font-bold block">* Practice Area of Inquiry</label><select required name="aboutLaw" class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold cursor-pointer"><option value="" disabled selected>Select...</option>' + areaOptions + '</select></div>' +
        '<div class="space-y-1"><label class="text-[10px] uppercase text-gray-400 block">Brief Outline of your Case / Situation</label><textarea name="message" rows="3" placeholder="State high-level outline details of legal challenge..." class="w-full bg-brand-navy border border-white/10 rounded px-2.5 py-2 text-white focus:outline-none focus:border-brand-gold text-xs resize-none"></textarea></div>' +
        '<div class="text-[9px] text-gray-400 bg-brand-navy/60 p-2 border border-white/5 rounded leading-normal">' + SMS_CONSENT_TEXT + '</div>' +
        '<button type="submit" class="w-full py-2.5 bg-[#4CAF50] hover:bg-[#43A047] text-white font-extrabold uppercase text-xs tracking-wider rounded transition-all duration-200 cursor-pointer text-center flex items-center justify-center gap-2 shadow-md">SUBMIT SECURITY INQUIRY</button>' +
      '</form>' +
      '<div class="text-center py-8 space-y-4 hidden" data-success="form"><div class="text-brand-gold text-4xl">✓</div><h4 class="font-display font-bold text-white uppercase text-base tracking-wide">Inquiry Authenticated</h4><p class="text-xs text-gray-300 leading-relaxed max-w-[300px] mx-auto">Your direct request file has been logged secure and routed to our Alabama Attorney on Duty. We will call you within two business hours.</p></div>' +
    '</div>' +

    /* CHAT TAB */
    '<div data-pane="chat" class="hidden">' +
      '<div class="space-y-4 text-xs font-sans" data-chat-live>' +
        '<div class="flex justify-between items-center bg-brand-navy/70 px-3 py-1.5 rounded text-[9px] uppercase tracking-wider font-extrabold text-gray-400"><span>Guided Counselor</span><span class="text-brand-gold">Progress Step <span data-chat-step>1</span> of 4</span></div>' +
        '<div class="space-y-3 bg-brand-navy/40 p-3 rounded-lg border border-white/5" data-chat-thread></div>' +
        '<form data-chat-form class="flex gap-2 items-center pt-1"><input type="text" data-chat-input class="flex-grow bg-brand-navy border border-white/10 rounded px-2.5 py-2.5 text-white focus:outline-none focus:border-brand-gold text-xs font-semibold" placeholder="Enter your Full Name..."><button type="submit" class="p-2.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy rounded cursor-pointer transition-all shrink-0">➤</button></form>' +
      '</div>' +
      '<div class="text-center py-10 space-y-4 text-xs hidden" data-success="chat"><div class="text-[#4CAF50] text-4xl">✓</div><h4 class="font-display font-medium text-white uppercase text-sm tracking-wide">Interactive Session Secure</h4><p class="text-[11px] text-gray-300 leading-relaxed max-w-[280px] mx-auto">Thank you for executing this secure triage. An administrative litigation attorney has taken custody of your session data. We will make immediate telephone contact.</p></div>' +
    '</div>' +

    /* INFO TAB */
    '<div data-pane="info" class="hidden space-y-4 text-xs font-sans leading-relaxed">' +
      '<div class="flex gap-2.5 bg-brand-navy/60 p-3 rounded border border-white/5"><div><h4 class="font-display font-medium text-white uppercase text-xs tracking-wider">Birmingham Headquarters</h4><p class="text-gray-300 text-xs mt-0.5">1929 3rd Ave. North, Suite 500<br>Birmingham, AL 35203</p></div></div>' +
      '<div class="flex gap-2.5 bg-brand-navy/60 p-3 rounded border border-white/5"><div><h4 class="font-display font-medium text-white uppercase text-xs tracking-wider">Dothan Administration Suite</h4><p class="text-gray-300 text-xs mt-0.5">Downtown Central Offices<br>Dothan, AL 36301</p></div></div>' +
      '<a href="tel:205-502-2000" class="flex justify-between items-center bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-extrabold uppercase px-4 py-3 rounded transition-all duration-200"><span class="text-xs uppercase tracking-widest font-extrabold">Dial Primary Hotline</span><span class="text-sm tracking-tight">205-502-2000</span></a>' +
      '<a href="mailto:intake@bolesholmes.com?subject=Confidential%20Legal%20Case%20Assessment" class="flex justify-between items-center bg-white/5 hover:bg-white/10 text-white font-semibold uppercase px-4 py-3 rounded border border-white/10 transition-all text-xs"><span>Transmit Priority Email</span><span class="text-[10px] text-gray-400 tracking-wide">Secure Server Route</span></a>' +
      '<div class="p-3 bg-brand-navy rounded border border-white/5 text-[10px] text-gray-400"><h5 class="font-bold text-gray-300 text-[9px] uppercase tracking-wider mb-0.5">Strict Privacy Bound</h5><p class="leading-normal">All interactive exchanges on this website are completely encrypted and bound under professional, state-level attorney-client communication privilege standards.</p></div>' +
    '</div>' +

  '</div>' +
'</div>';
  }

  function initFloatingWidget() {
    var root = document.getElementById('global-floating-contact-widget');
    if (!root) return;

    root.insertAdjacentHTML('afterbegin', buildPanel());
    var panel = document.getElementById('floating-contact-panel');
    var toggleBtn = document.getElementById('btn-toggle-main-widget');
    var closeBtn = document.getElementById('btn-close-floating-panel');
    var open = false;

    function setOpen(state) {
      open = state;
      panel.classList.toggle('hidden', !open);
      // update toggle button label
      if (toggleBtn) {
        var span = toggleBtn.querySelector('span');
        if (span) span.textContent = open ? 'Close Center' : 'Contact Us';
      }
    }
    function showTab(name) {
      panel.querySelectorAll('[data-pane]').forEach(function (p) {
        p.classList.toggle('hidden', p.getAttribute('data-pane') !== name);
      });
      panel.querySelectorAll('[data-tab]').forEach(function (t) {
        var active = t.getAttribute('data-tab') === name;
        t.classList.toggle('text-brand-gold', active);
        t.classList.toggle('border-b-2', active);
        t.classList.toggle('border-brand-gold', active);
        t.classList.toggle('bg-brand-navy-light', active);
        t.classList.toggle('text-gray-400', !active);
      });
    }

    if (toggleBtn) toggleBtn.addEventListener('click', function () { setOpen(!open); });
    if (closeBtn) closeBtn.addEventListener('click', function () { setOpen(false); });
    panel.querySelectorAll('[data-tab]').forEach(function (t) {
      t.addEventListener('click', function () { showTab(t.getAttribute('data-tab')); });
    });

    // Quick-action bar buttons
    var byId = function (id) { return document.getElementById(id); };
    [['widget-btn-phone', 'info'], ['widget-btn-email', 'form'], ['widget-btn-chat', 'chat']].forEach(function (pair) {
      var el = byId(pair[0]);
      if (el) el.addEventListener('click', function (e) {
        if (window.innerWidth >= 640 || pair[1] === 'chat') {
          if (el.tagName === 'A' && window.innerWidth >= 640) e.preventDefault();
          setOpen(true); showTab(pair[1]);
        }
      });
    });

    // Close on outside click
    document.addEventListener('mousedown', function (e) {
      if (open && !root.contains(e.target)) setOpen(false);
    });

    showTab('form');

    // Intake form submit -> success message
    var form = document.getElementById('floating-intake-form');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('hidden');
      panel.querySelector('[data-success="form"]').classList.remove('hidden');
      setTimeout(function () {
        form.reset();
        form.classList.remove('hidden');
        panel.querySelector('[data-success="form"]').classList.add('hidden');
        setOpen(false);
      }, 4500);
    });

    // Guided chat
    initChat(panel);
  }

  function initChat(panel) {
    var thread = panel.querySelector('[data-chat-thread]');
    var input = panel.querySelector('[data-chat-input]');
    var stepEl = panel.querySelector('[data-chat-step]');
    var form = panel.querySelector('[data-chat-form]');
    var live = panel.querySelector('[data-chat-live]');
    var success = panel.querySelector('[data-success="chat"]');
    var step = 1;
    var answers = { name: '', contact: '', area: '', details: '' };
    var prompts = {
      1: 'Welcome to BHW Trial Lawyers. To start a confidential triage session, what is your <strong>Full Name</strong>?',
      2: function () { return 'Thank you, ' + (answers.name.split(' ')[0] || '') + '. What is the best <strong>Phone Number or Email</strong> to reach you at?'; },
      3: 'What category best matches your legal inquiry? Select a quick action below or type a description.',
      4: 'Understood. Please supply any additional brief details about this situation so our administrative counselors can prepare properly before calling.'
    };
    var placeholders = {
      1: 'Enter your Full Name...', 2: 'Enter your Phone or Email...',
      3: 'Or type practice area details...', 4: 'Enter legal issue description outlines...'
    };

    function bubble(html, fromUser) {
      var d = document.createElement('div');
      d.className = fromUser ? 'flex gap-2 items-center justify-end' : 'flex gap-2 items-start';
      d.innerHTML = fromUser
        ? '<span class="bg-brand-gold text-brand-navy font-bold px-2.5 py-1 rounded-l-lg rounded-br-lg text-[11px]">' + html + '</span>'
        : '<div class="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold uppercase font-bold text-[9px] shrink-0">BHW</div><div class="bg-white/5 p-2 rounded-r-lg rounded-bl-lg text-xs leading-normal text-gray-200">' + html + '</div>';
      thread.appendChild(d);
    }
    function ask(n) {
      var p = prompts[n];
      bubble(typeof p === 'function' ? p() : p, false);
      if (n === 3) {
        var wrap = document.createElement('div');
        wrap.className = 'grid grid-cols-2 gap-1.5 pl-8 pt-1';
        ["White Collar Defense", "Civil Lawsuits", "Business Dispute", "Personal Injury Claim", "DUI & Criminal", "Government Fraud"].forEach(function (c) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'bg-brand-navy border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-navy-light text-[10px] text-left p-1.5 rounded transition-all font-semibold uppercase tracking-tight text-gray-200 cursor-pointer';
          b.textContent = c;
          b.addEventListener('click', function () { wrap.remove(); answer(c); });
          wrap.appendChild(b);
        });
        thread.appendChild(wrap);
      }
      if (input) input.placeholder = placeholders[n] || '';
      if (stepEl) stepEl.textContent = n;
    }
    function answer(val) {
      bubble(val, true);
      if (step === 1) answers.name = val;
      else if (step === 2) answers.contact = val;
      else if (step === 3) answers.area = val;
      else if (step === 4) answers.details = val;
      if (step === 4) { finish(); return; }
      step++; ask(step);
    }
    function finish() {
      if (live) live.classList.add('hidden');
      if (success) success.classList.remove('hidden');
    }
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = (input.value || '').trim();
      if (!v && step !== 3) return;
      if (v) { input.value = ''; answer(v); }
    });
    ask(1);
  }

  /* ---------------------------------------------------------------
     GENERIC PAGE FORMS — show an inline thank-you on submit.
     (Skips the floating widget's own form/chat, handled above.)
  --------------------------------------------------------------- */
  function initPageForms() {
    var skip = { 'floating-intake-form': 1 };
    document.querySelectorAll('form').forEach(function (form) {
      if (skip[form.id] || form.hasAttribute('data-chat-form') || form.closest('#global-floating-contact-widget')) return;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = document.createElement('div');
        msg.className = 'rounded-lg bg-green-50 border border-green-300 text-green-800 px-5 py-4 text-sm font-sans text-center';
        msg.setAttribute('role', 'status');
        msg.innerHTML = '<strong class="block font-bold mb-1">Thank you — your request has been received.</strong>An attorney from Boles Holmes White will contact you shortly.';
        form.style.display = 'none';
        form.parentNode.insertBefore(msg, form.nextSibling);
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });
  }

  function init() { initNavbar(); initFloatingWidget(); initPageForms(); }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
