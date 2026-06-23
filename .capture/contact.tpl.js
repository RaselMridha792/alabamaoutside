/* contact.js — FAQ accordion (answers injected from data) */
(function () {
  "use strict";
  var FAQ = /*__FAQ__*/[];

  function init() {
    FAQ.forEach(function (item, i) {
      var box = document.getElementById('faq_item_' + i);
      if (!box) return;
      var btn = box.querySelector('button');
      if (!btn) return;
      var ans = document.createElement('div');
      ans.className = 'overflow-hidden transition-all duration-300 ease-in-out max-h-0';
      ans.innerHTML = '<div class="px-6 pb-5 pt-2 bg-brand-navy"><p class="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed text-justify">' + item.a + '</p></div>';
      box.appendChild(ans);

      btn.addEventListener('click', function () {
        var isOpen = ans.classList.contains('max-h-[600px]');
        FAQ.forEach(function (_, j) {
          var b = document.getElementById('faq_item_' + j);
          if (!b) return;
          var a = b.querySelector('div.overflow-hidden');
          var bb = b.querySelector('button');
          if (a) { a.classList.remove('max-h-[600px]'); a.classList.add('max-h-0'); }
          if (bb) { bb.classList.remove('bg-brand-navy'); bb.classList.add('hover:bg-brand-navy/80'); var c = bb.querySelector('svg'); if (c) c.classList.remove('rotate-180'); }
        });
        if (!isOpen) {
          ans.classList.remove('max-h-0'); ans.classList.add('max-h-[600px]');
          btn.classList.add('bg-brand-navy'); btn.classList.remove('hover:bg-brand-navy/80');
          var chev = btn.querySelector('svg'); if (chev) chev.classList.add('rotate-180');
        }
      });
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
