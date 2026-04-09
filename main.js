/* ============================================================
   IAI Group — Main JavaScript
   ============================================================ */

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile hamburger ──────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── Grid canvas background ────────────────────────────────
(function initGrid() {
  const canvas = document.getElementById('gridCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, cols, rows;
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    cols = Math.ceil(W / 48);
    rows = Math.ceil(H / 48);
    draw();
  }
  function draw() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const lineColor = isLight ? 'rgba(29,110,197,0.1)' : 'rgba(99,179,237,0.18)';
    const dotColor  = isLight ? 'rgba(29,110,197,0.2)' : 'rgba(99,179,237,0.35)';
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.5;
    const sx = W / cols, sy = H / rows;
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath(); ctx.moveTo(c * sx, 0); ctx.lineTo(c * sx, H); ctx.stroke();
    }
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath(); ctx.moveTo(0, r * sy); ctx.lineTo(W, r * sy); ctx.stroke();
    }
    ctx.fillStyle = dotColor;
    for (let c = 0; c <= cols; c++) {
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        ctx.arc(c * sx, r * sy, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  canvas._redraw = draw;
  window.addEventListener('resize', resize);
  resize();
})();

// ── Tag label map ─────────────────────────────────────────
const TAG_LABELS = {
  automation: 'Factory Automation',
  hrc:        'Human-Robot',
  embodied:   'Embodied AI',
};

// ── Render publications ───────────────────────────────────
function renderPublications(area) {
  const all = getPublications();
  const activeArea = area || 'automation';
  const list = [...all]
    .filter(p => p.tag === activeArea)
    .sort((a, b) => b.year - a.year)
    .slice(0, 8);
  const container = document.getElementById('pubList');
  if (!container) return;

  container.innerHTML = list.map(p => `
    <div class="pub-item" data-tag="${p.tag}">
      <div class="pub-year">${p.year}</div>
      <div class="pub-content">
        <span class="pub-tag ${p.tag}">${TAG_LABELS[p.tag] || p.tag}</span>
        <h4>${p.title}</h4>
        <p class="pub-authors">${p.authors}</p>
        <p class="pub-venue">${p.venue}</p>
        <div class="pub-links">
          ${p.links.map(l => `<a href="${l.url}">${l.label}</a>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  addReveal();
}

// ── Publication area tabs ─────────────────────────────────
function initPubTabs() {
  const tabs = document.querySelectorAll('.pub-area-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPublications(tab.dataset.area);
    });
  });
}

// ── Render news ───────────────────────────────────────────
function renderNews() {
  const list = getNews().slice(0, 5);
  const container = document.getElementById('newsGrid');
  if (!container) return;

  container.innerHTML = list.map((n, i) => `
    <div class="news-card ${i === 0 ? 'featured-news' : ''}">
      ${n.image ? `<img src="${n.image}" alt="${n.title}" class="news-card-img" loading="lazy" />` : ''}
      <div class="news-card-body">
        <div class="news-card-meta">
          <span class="news-date">${n.date}</span>
          <span class="news-badge">${n.badge}</span>
        </div>
        <h4>${n.title}</h4>
        <p>${n.body}</p>
        <a href="news-detail.html?id=${n.id}">${n.linkText} →</a>
      </div>
    </div>
  `).join('');

  addReveal();
}

// ── Publication filters ───────────────────────────────────
function initPubFilters() {
  const filters  = document.querySelectorAll('.pub-filter');
  const pubItems = document.querySelectorAll('.pub-item');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      pubItems.forEach(item => {
        item.classList.toggle('hidden', f !== 'all' && item.dataset.tag !== f);
      });
    });
  });
}

// ── Scroll reveal ─────────────────────────────────────────
function addReveal() {
  const selectors = [
    '.research-card', '.team-card', '.pub-item',
    '.news-card', '.team-pi', '.contact-layout', '.about-text',
    '.initiative-card', '.video-featured', '.strip-item', '.facility-card',
  ];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (el.classList.contains('reveal')) return; // already wired
      el.classList.add('reveal');
      el.style.transitionDelay = `${i * 60}ms`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

// ── Contact form ──────────────────────────────────────────
function handleForm(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Message sent! We will get back to you shortly.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
}

// ── Video showcase ────────────────────────────────────────
function initVideoGallery() {
  const frame     = document.getElementById('featuredFrame');
  const featTag   = document.getElementById('featuredTag');
  const featTitle = document.getElementById('featuredTitle');
  const featDesc  = document.getElementById('featuredDesc');
  const strip     = document.getElementById('videoStrip');
  const prevBtn   = document.getElementById('stripPrev');
  const nextBtn   = document.getElementById('stripNext');
  if (!frame || !strip) return;

  const items = strip.querySelectorAll('.strip-item');

  function selectItem(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    frame.src        = item.dataset.src;
    featTag.textContent   = item.dataset.tag;
    featTitle.textContent = item.dataset.title;
    featDesc.textContent  = item.dataset.desc;
  }

  items.forEach(item => {
    item.addEventListener('click', () => selectItem(item));
  });

  function updateArrows() {
    prevBtn.disabled = strip.scrollLeft <= 0;
    nextBtn.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 1;
  }

  prevBtn.addEventListener('click', () => {
    strip.scrollBy({ left: -strip.clientWidth * 0.6, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    strip.scrollBy({ left: strip.clientWidth * 0.6, behavior: 'smooth' });
  });
  strip.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();
}

// ── Init ──────────────────────────────────────────────────
renderPublications('automation');
initPubTabs();
renderNews();
initVideoGallery();
addReveal();
