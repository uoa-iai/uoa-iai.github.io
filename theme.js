/* ============================================================
   IAI Group — Theme toggle (dark / light)
   ============================================================ */

(function () {
  var STORAGE_KEY = 'iai_theme';
  var DEFAULT     = 'dark';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Swap logos: white svg for dark, black svg for light
    document.querySelectorAll('.nav-logo-dark, .footer-logo-dark').forEach(function (el) {
      el.style.display = theme === 'light' ? 'none' : '';
    });
    document.querySelectorAll('.nav-logo-light, .footer-logo-light').forEach(function (el) {
      el.style.display = theme === 'light' ? '' : 'none';
    });

    // Update canvas colours (if canvas exists)
    var canvas = document.getElementById('gridCanvas');
    if (canvas && canvas._redraw) canvas._redraw();
  }

  // Apply immediately on script load (before DOMContentLoaded)
  var saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
  apply(saved);

  document.addEventListener('DOMContentLoaded', function () {
    apply(saved); // re-run to swap logos once DOM is ready

    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || DEFAULT;
        apply(current === 'dark' ? 'light' : 'dark');
      });
    }
    var btnMobile = document.getElementById('themeToggleMobile');
    if (btnMobile) {
      btnMobile.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme') || 'dark';
        apply(current === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
