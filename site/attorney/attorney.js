/* attorney.js — practice-area filter + full-bio modal (data-driven) */
(function () {
  "use strict";
  var ATTORNEYS = [{"name":"Jeffrey E. Holmes","role":"Partner / Lead Trial Litigator","image":"https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img2.jpg","practiceAreas":["Civil Lawsuits","Trial Litigation","Government Investigations","White Collar Defense"],"shortBio":"Lead trial attorney representing individuals and corporate clients in federal and state courts throughout Alabama.","detailedBio":"Jeffrey E. Holmes is a distinguished founding partner at Boles Holmes White with deep expertise in lead trial advocacy. Over a career spanning more than three decades, Jeff has directed hundreds of complex trials spanning state, federal, and appellate panel jurisdictions. He is widely praised as one of Alabama's most tenacious, experienced, and tactical trial litigators. Corporations, officers, and individuals facing high-security federal inquiries, white-collar criminal pursuits, and commercial disputes of immense magnitude trust Jeff with their most crucial legal defense requirements.","education":["J.D., Cumberland School of Law, Samford University","B.A., University of Alabama"],"barAdmissions":["Alabama State Bar, 1991","U.S. Court of Appeals for the 11th Circuit","U.S. District Court for Northern, Middle, and Southern Districts of Alabama"],"awards":["Best Lawyers in America® – White Collar Defense & Criminal Trial Litigation","Martindale-Hubbell® AV Preeminent Rating (Highest Peer Review Standard for Ethics and Legal ability)","National Trial Lawyers Top 100 Criminal Defense Attorneys"],"contact":{"email":"jholmes@bhwlegal.com","phone":"205-502-2000"}},{"name":"William C. White, II","role":"Partner / Chair of White Collar Defense & Investigations","image":"https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img3.jpg","practiceAreas":["Government Investigations","White Collar Defense","Regulatory Representation","Federal Criminal Defense"],"shortBio":"Renowned regulatory and high-profile white collar defense attorney with extensive national experience.","detailedBio":"William C. (\"Wally\") White, II enjoys a national reputation for regulatory defense, white-collar criminal advocacy, and internal investigations. Wally routinely assists small, medium, and multi-national corporations as well as public servants to confidently navigate high-stakes investigations led by agencies such as the DOJ, FDA, EPA, SEC, CBP, OFAC, and the HHS-OIG. Wally has successfully defended clients against allegations ranging from health care and mortgage fraud to bribery, money laundering, and economic espionage across Alabama, Florida, Louisiana, Michigan, California, and many other states.","education":["J.D., University of Alabama School of Law, magna cum laude","B.S., Auburn University"],"barAdmissions":["Alabama State Bar, 1996","State Bar of Georgia","Supreme Court of the United States","U.S. Court of Appeals for the 4th, 6th, and 11th Circuits"],"awards":["Super Lawyers® Top Rated Class of Criminal & White Collar Defense (2012-Present)","Benchmark Litigation Star in Federal Investigations","Chambers and Partners Rated Advocate in White Collar Crime & Government Counsel"],"contact":{"email":"wwhite@bhwlegal.com","phone":"205-502-2000"}},{"name":"Suzanne Norman","role":"Attorney / Chair of Personal & Family Law","image":"https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img6.jpg","practiceAreas":["Personal Injury","Divorce & Family Law","Wills and Probate","Civil Lawsuits"],"shortBio":"Empathetic and meticulous advocate guiding families and injured victims through complex civil litigation.","detailedBio":"Suzanne Norman is an accomplished partner who commands high praise and confidence for her work across personal injury litigation, divorce, trust creation, family matters, and probate management. Her strategic negotiation abilities and courtroom tenacity ensure that injured victims are vigorously represented and family legal transitions are treated with premium confidentiality, personal attention, and absolute focus. She stands out for giving clients direct, individual attention in addressing their particular legal matters.","education":["J.D., Thomas Goode Jones School of Law, Faulkner University","B.A., Birmingham-Southern College"],"barAdmissions":["Alabama State Bar, 2004","U.S. District Court for Northern and Middle Districts of Alabama"],"awards":["Top 100 Personal Injury Trial Lawyers (Alabama Association for Justice)","American Institute of Family Law Attorneys – Peer Recommended","Faulkner University Alumni Leadership Recognition Award"],"contact":{"email":"snorman@bhwlegal.com","phone":"205-502-2000"}},{"name":"H. Hampton Boles","role":"Partner / Counsel for Corporate Law","image":"https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img4.jpg","practiceAreas":["Corporate Law","Transactions","Business Formation & Dissolution","Commercial Real Estate"],"shortBio":"Over 35 years of general counsel and transactional experience representing banks, real estate portfolios, and mature companies.","detailedBio":"H. Hampton Boles delivers premier corporate counseling, joint venture negotiations, entity design, and transaction oversight. Over his thirty-five years of business advocacy, Hampton has guided mature corporate entities and early-stage companies to capture market share, negotiate license rights, navigate tax policies, and structure commercial real estate acquisitions. He provides standard outside general counsel services with unparalleled, high-level cost responsiveness.","education":["J.D., Vanderbilt University Law School","B.A., Samford University, cum laude"],"barAdmissions":["Alabama State Bar, 1982","United States Tax Court"],"awards":["Corporate Counsel Association Special Award for Outstanding Legal Service","Best Lawyers® – Business & Taxation Advisory of Dothan and Birmingham","AV Preeminent Rating by Martindale-Hubbell"],"contact":{"email":"hboles@bhwlegal.com","phone":"205-502-2000"}},{"name":"Nathan Holmes","role":"Attorney / Business & Intellectual Property Advocate","image":"https://alabamaoutsidecounsel.com/wp-content/uploads/2024/06/img5.jpg","practiceAreas":["Business Consulting","Business Formation & Dissolution","Transactions","Labor & Employment"],"shortBio":"Dedicated general corporate advisor specializing in start-up counseling, contracts, and commercial operations.","detailedBio":"Nathan Holmes acts as outside corporate counsel and business advisor to small and medium enterprises. He provides legal advice for modern business operations, drafting contract instruments, facilitating strategic business plans, protecting trade secrets, and guiding employment policies. His tech-focused, agile legal approach helps early-stage start-up companies navigate their entity formations and licensing agreements with ease.","education":["J.D., University of Alabama School of Law","B.A., University of Alabama at Birmingham"],"barAdmissions":["Alabama State Bar, 2011","U.S. District Court for Northern District of Alabama"],"awards":["Best Lawyers: Ones to Watch® – Commercial Litigation and Corporate Law","Birmingham Business Journal \"Top 40 under 40\" Legal Advisory nominee"],"contact":{"email":"nholmes@bhwlegal.com","phone":"205-502-2000"}}];
  var FILTER_LABELS = ["All","Corporate Law","Government Investigations","White Collar Defense","Personal Injury","Divorce & Family Law","Civil Lawsuits","Transactions"];

  function byName(name) {
    name = name.trim().toLowerCase();
    return ATTORNEYS.find(function (a) { return a.name.trim().toLowerCase() === name; });
  }

  function li(items) {
    return (items || []).map(function (x) {
      return '<li class="flex gap-2 items-start"><span class="text-brand-gold font-bold mt-0.5">•</span><span>' + x + '</span></li>';
    }).join('');
  }

  function buildModal() {
    var m = document.createElement('div');
    m.id = 'attorney-bio-modal';
    m.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 hidden';
    document.body.appendChild(m);
    return m;
  }

  function openModal(modal, a) {
    var awards = (a.awards && a.awards.length) ?
      '<div><div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5"><span>Credentials &amp; Awards</span></div><ul class="space-y-1.5 text-xs text-gray-600">' + li(a.awards) + '</ul></div>' : '';
    modal.innerHTML =
      '<div class="absolute inset-0 bg-brand-navy/85 backdrop-blur-sm cursor-pointer" data-close></div>' +
      '<div class="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl z-10 max-h-[85vh] md:max-h-[80vh] flex flex-col md:flex-row">' +
        '<div class="w-full md:w-2/5 bg-brand-navy text-white p-8 flex flex-col justify-between relative overflow-hidden shrink-0 border-r border-brand-gold/10">' +
          '<div class="relative aspect-[4/5] rounded-md overflow-hidden bg-slate-950 border border-brand-gold/20 shadow-lg mb-6"><img src="' + a.image + '" alt="' + a.name + '" referrerpolicy="no-referrer" class="absolute inset-0 w-full h-full object-cover object-top"></div>' +
          '<div class="space-y-4 relative z-10"><h4 class="font-display text-xs font-bold uppercase tracking-widest text-brand-gold border-b border-white/10 pb-1.5">Direct Channels</h4>' +
            '<div class="space-y-2.5 text-xs">' +
              '<a href="mailto:' + a.contact.email + '" class="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"><span class="truncate">' + a.contact.email + '</span></a>' +
              (a.contact.phone ? '<a href="tel:' + a.contact.phone + '" class="flex items-center gap-2.5 text-gray-300 hover:text-brand-gold transition-colors"><span>' + a.contact.phone + '</span></a>' : '') +
              '<div class="flex items-center gap-2.5 text-gray-300"><span>Birmingham, AL Office</span></div>' +
            '</div></div>' +
        '</div>' +
        '<div class="w-full md:w-3/5 p-8 overflow-y-auto grow flex flex-col justify-between max-h-[50vh] md:max-h-[80vh] custom-scrollbar">' +
          '<button data-close class="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-brand-navy hover:text-white rounded-full transition-colors z-20 cursor-pointer" aria-label="Close Biography">✕</button>' +
          '<div>' +
            '<div class="flex items-center gap-2 mb-2 text-xs text-brand-gold font-bold uppercase tracking-widest"><span>Attorney Biography</span></div>' +
            '<h3 class="font-display text-2xl md:text-3xl font-extrabold text-brand-navy uppercase tracking-tight leading-tight">' + a.name + '</h3>' +
            '<p class="font-sans text-xs md:text-sm font-extrabold text-brand-gold uppercase tracking-wide mt-1">' + a.role + '</p>' +
            '<div class="flex flex-wrap gap-2 mt-4">' + a.practiceAreas.map(function (p) { return '<span class="px-2.5 py-1 bg-slate-100 text-gray-600 border border-gray-200/60 rounded text-[10px] uppercase font-bold tracking-wide">' + p + '</span>'; }).join('') + '</div>' +
            '<div class="mt-6 font-sans text-gray-700 text-xs sm:text-sm leading-relaxed space-y-4 text-justify pr-2"><p>' + a.detailedBio + '</p></div>' +
            '<div class="mt-8 space-y-6">' +
              '<div><div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5"><span>Education</span></div><ul class="space-y-1.5 text-xs text-gray-600">' + li(a.education) + '</ul></div>' +
              '<div><div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-gray-100 pb-2 mb-2.5"><span>Admissions</span></div><ul class="space-y-1.5 text-xs text-gray-600">' + li(a.barAdmissions) + '</ul></div>' +
              awards +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', function () { closeModal(modal); });
    });
  }
  function closeModal(modal) { modal.classList.add('hidden'); document.body.style.overflow = ''; }

  function init() {
    var bioButtons = Array.prototype.filter.call(document.querySelectorAll('button'), function (b) {
      return /Read Full Bio/i.test(b.textContent);
    });
    if (!bioButtons.length) return;
    var modal = buildModal();

    // map each card -> attorney data
    var cards = [];
    bioButtons.forEach(function (btn) {
      var card = btn.closest('div.group') || btn.closest('div');
      var h3 = card ? card.querySelector('h3') : null;
      var data = h3 ? byName(h3.textContent) : null;
      if (!card || !data) return;
      cards.push({ card: card, data: data });
      btn.addEventListener('click', function () { openModal(modal, data); });
    });

    // filter buttons: text matches one of FILTER_LABELS
    var filterBtns = Array.prototype.filter.call(document.querySelectorAll('button'), function (b) {
      return FILTER_LABELS.indexOf(b.textContent.trim()) !== -1;
    });
    filterBtns.forEach(function (btn) {
      var label = btn.textContent.trim();
      var key = label.toLowerCase();
      btn.addEventListener('click', function () {
        setActiveFilter(btn);
        cards.forEach(function (c) {
          var show = label === 'All' || c.data.practiceAreas.some(function (p) { return p.toLowerCase().indexOf(key) !== -1; });
          c.card.style.display = show ? '' : 'none';
        });
      });
    });

    function setActiveFilter(active) {
      filterBtns.forEach(function (btn) {
        var on = btn === active;
        btn.classList.toggle('bg-brand-navy', on);
        btn.classList.toggle('text-brand-gold', on);
        btn.classList.toggle('shadow-md', on);
        btn.classList.toggle('scale-105', on);
        btn.classList.toggle('bg-white', !on);
        btn.classList.toggle('text-gray-600', !on);
      });
    }

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(modal); });
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
