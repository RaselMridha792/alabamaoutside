/* media.js — YouTube video lightbox */
(function () {
  "use strict";
  var VIDEOS = /*__VIDEOS__*/[];

  function init() {
    var modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-[100] items-center justify-center p-4 bg-black/85 backdrop-blur-sm hidden';
    modal.style.display = 'none';
    modal.innerHTML = '<button data-close class="absolute top-5 right-5 text-white text-3xl leading-none cursor-pointer z-10">✕</button>' +
      '<div class="relative w-full max-w-4xl aspect-video" data-frame></div>';
    document.body.appendChild(modal);
    var frame = modal.querySelector('[data-frame]');

    function open(id) {
      frame.innerHTML = '<iframe class="w-full h-full rounded-lg shadow-2xl" src="https://www.youtube.com/embed/' + id + '?autoplay=1" title="YouTube video" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    function close() { modal.style.display = 'none'; frame.innerHTML = ''; document.body.style.overflow = ''; }

    modal.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', close); });
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    VIDEOS.forEach(function (v, i) {
      var card = document.getElementById('youtube_card_' + i);
      if (card) card.addEventListener('click', function () { open(v.youtubeId); });
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
