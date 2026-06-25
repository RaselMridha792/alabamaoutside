new Promise(function (res) {
  var sec = document.getElementById('client-reviews');
  var arrows = sec.querySelectorAll('button[aria-label]');
  var nextBtn = [].slice.call(arrows).filter(function (b) { return /Next review/.test(b.getAttribute('aria-label')); })[0];
  var prevBtn = [].slice.call(arrows).filter(function (b) { return /Previous review/.test(b.getAttribute('aria-label')); })[0];
  var h4 = function () { return sec.querySelector('.bg-white h4').innerText; };
  var out = { arrowsFound: !!nextBtn && !!prevBtn, start: h4() };
  if (nextBtn) nextBtn.click();
  setTimeout(function () {
    out.afterNext = h4();
    out.cardTransition = sec.querySelector('.bg-white').style.transition;
    if (prevBtn) prevBtn.click();
    setTimeout(function () {
      out.afterPrev = h4();
      res(JSON.stringify(out));
    }, 900);
  }, 900);
});
