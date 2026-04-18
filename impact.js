/* ============================================================
   IAI Group — Impact Page JavaScript
   ============================================================ */

(function () {

  // ── Password gate ────────────────────────────────────────
  var gate     = document.getElementById('passwordGate');
  var pwForm   = document.getElementById('pwForm');
  var pwInput  = document.getElementById('pwInput');
  var pwError  = document.getElementById('pwError');
  var PASSWORD = 'impact';

  function unlock() {
    sessionStorage.setItem('iai_impact_auth', '1');
    gate.classList.add('unlocked');
    document.documentElement.classList.remove('pw-locked');
  }

  if (sessionStorage.getItem('iai_impact_auth') === '1') {
    unlock();
  }

  if (pwForm) {
    pwForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (pwInput.value === PASSWORD) {
        pwError.style.display = 'none';
        unlock();
      } else {
        pwError.style.display = '';
        pwInput.value = '';
        pwInput.focus();
      }
    });
  }

  // ── Grid canvas background ──────────────────────────────
  (function initImpactGrid() {
    var canvas = document.getElementById('impactGridCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W, H, cols, rows;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      cols = Math.ceil(W / 48);
      rows = Math.ceil(H / 48);
      draw();
    }

    function draw() {
      var isLight = document.documentElement.getAttribute('data-theme') === 'light';
      var lineColor = isLight ? 'rgba(29,110,197,0.1)' : 'rgba(99,179,237,0.18)';
      var dotColor  = isLight ? 'rgba(29,110,197,0.2)' : 'rgba(99,179,237,0.35)';
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 0.5;
      var sx = W / cols, sy = H / rows;
      for (var c = 0; c <= cols; c++) {
        ctx.beginPath(); ctx.moveTo(c * sx, 0); ctx.lineTo(c * sx, H); ctx.stroke();
      }
      for (var r = 0; r <= rows; r++) {
        ctx.beginPath(); ctx.moveTo(0, r * sy); ctx.lineTo(W, r * sy); ctx.stroke();
      }
      ctx.fillStyle = dotColor;
      for (var ci = 0; ci <= cols; ci++) {
        for (var ri = 0; ri <= rows; ri++) {
          ctx.beginPath();
          ctx.arc(ci * sx, ri * sy, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    canvas._redraw = draw;
    window.addEventListener('resize', resize);
    resize();

    // Redraw when theme changes without modifying theme.js
    new MutationObserver(function () { draw(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  })();



  // ── Slide tracking, dot navigation & keyboard ───────────
  var slides = Array.from(document.querySelectorAll('.snap-slide'));
  var dots   = Array.from(document.querySelectorAll('.slide-dot'));
  var currentIndex = 0;

  function goToSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goToSlide(i); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goToSlide(currentIndex + 1); }
    if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goToSlide(currentIndex - 1); }
  });

  // "Explore" CTA button on slide 1
  document.querySelectorAll('.js-goto-slide').forEach(function (btn) {
    btn.addEventListener('click', function () {
      goToSlide(parseInt(btn.dataset.slide, 10));
    });
  });

  // Track which slide is visible
  var slideObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var idx = slides.indexOf(entry.target);
      if (idx === -1) return;
      currentIndex = idx;
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
      entry.target.classList.add('in-view');
      if (idx === 1) animateStats();
    });
  }, { threshold: 0.5, root: snapContainer });

  slides.forEach(function (s) { slideObserver.observe(s); });

  // ── Animated counters (slide 2) ─────────────────────────
  var statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;
    statsAnimated = true;

    document.querySelectorAll('.impact-stat-num').forEach(function (el) {
      var target   = parseFloat(el.dataset.target);
      var suffix   = el.dataset.suffix || '';
      var isFloat  = el.dataset.float === 'true';
      var start    = performance.now();
      var duration = 1600;

      (function tick(now) {
        var t      = Math.min((now - start) / duration, 1);
        var eased  = 1 - Math.pow(1 - t, 3); // ease-out cubic
        var value  = eased * target;
        el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      })(start);
    });

    document.querySelectorAll('.impact-stat-card').forEach(function (card) {
      card.classList.add('animated');
    });
  }

})();
