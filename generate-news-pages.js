// Generates one fully static, self-contained HTML article page per news item in
// news/ — same markup/CSS as news-detail.html's JS-rendered view, but with the
// article's content baked into the HTML at generation time instead of loaded by
// JS from data.js at runtime. This makes each article indexable by search engines
// (and visible to social-preview crawlers) without depending on JS execution.
// Run with: node generate-news-pages.js
// Re-run whenever news items are added or changed in data.js.

const vm = require('vm');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://uoa-iai.github.io';
const OUT_DIR  = path.join(__dirname, 'news');

// Evaluate data.js with a mocked localStorage so we can extract DEFAULT_NEWS.
// Replace const/let with var so declarations attach to the vm context object.
const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8')
  .replace(/^const /gm, 'var ')
  .replace(/^let /gm, 'var ');
const ctx = { localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} } };
vm.createContext(ctx);
vm.runInContext(dataJs, ctx);
const news = ctx.DEFAULT_NEWS;

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Article markdown/resource-link paths (e.g. "assets/images/news/x.png") are
// written relative to the site root, since they were originally only ever
// consumed by news-detail.html living at the root. These generated pages live
// one level down in news/, so any root-relative path needs to become absolute.
function resolveAssetUrl(url) {
  if (/^(https?:)?\/\//.test(url) || url.startsWith('/')) return url;
  return `${BASE_URL}/${url}`;
}

// ── Markdown-lite renderer ────────────────────────────────
// Mirrors the browser renderer in news-detail.html exactly (same feature set,
// same quirks) so generated pages match what the client-side script would show.
function isImageLine(line) {
  return /^!\[([^\]]*)\]\(([^)]+)\)$/.test(line.trim());
}

function renderImageLine(line) {
  const m = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  return m ? `<img src="${resolveAssetUrl(m[2])}" alt="${m[1]}" class="detail-body-img" loading="lazy" />` : '';
}

function inline(str) {
  str = esc(str).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  str = str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  return str;
}

function renderMarkdown(text) {
  const lines = text.split('\n');
  const html = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (line.startsWith('### ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h3>${esc(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h2>${esc(line.slice(3))}</h2>`);
      continue;
    }

    if (isImageLine(line)) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(renderImageLine(line));
      continue;
    }

    if (line.startsWith('- ')) {
      if (!inList) { html.push('<ul>'); inList = true; }
      html.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }

    if (inList) { html.push('</ul>'); inList = false; }

    if (line.trim() === '') {
      html.push('<br>');
      continue;
    }

    html.push(`<p>${inline(line)}</p>`);
  }

  if (inList) html.push('</ul>');
  return html.join('\n');
}

const ICONS = {
  pdf: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
};

function navAndHead(title, headExtra) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <script>
    (function(){var t=localStorage.getItem('iai_theme')||((new Date().getHours()>=6&&new Date().getHours()<20)?'light':'dark');document.documentElement.setAttribute('data-theme',t);})();
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
${headExtra}
  <link rel="stylesheet" href="../style.css" />
  <link rel="stylesheet" href="../news-detail.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

  <!-- NAV -->
  <nav id="navbar">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">
        <img src="../logo_light.svg" alt="Industrial AI Group" class="nav-logo-img nav-logo-dark" />
        <img src="../logo_dark.svg" alt="Industrial AI Group" class="nav-logo-img nav-logo-light" style="display:none" />
      </a>
      <ul class="nav-links">
        <li><a href="../index.html#gallery">Gallery</a></li>
        <li><a href="../index.html#research">Research</a></li>
        <li><a href="../news.html">News</a></li>
        <li><a href="../index.html#initiatives">Initiatives</a></li>
        <li><a href="../index.html#team">Team</a></li>
        <li><a href="../index.html#facility">Facility</a></li>
        <li><a href="../publications.html">Publications</a></li>
        <li><a href="../opportunity.html">Join Us</a></li>
        <li><a href="../index.html#contact" class="nav-cta">Contact</a></li>
        <li>
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme" title="Toggle light/dark mode">
            <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
        </li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="../index.html#gallery">Gallery</a>
      <a href="../index.html#research">Research</a>
      <a href="../news.html">News</a>
      <a href="../index.html#initiatives">Initiatives</a>
      <a href="../index.html#team">Team</a>
      <a href="../index.html#facility">Facility</a>
      <a href="../publications.html">Publications</a>
      <a href="../opportunity.html">Join Us</a>
      <a href="../index.html#contact">Contact</a>
      <button class="theme-toggle" id="themeToggleMobile" aria-label="Toggle theme" style="margin:8px 0;align-self:flex-start;">
        <svg class="icon-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        <svg class="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
    </div>
  </nav>
`;
}

function footer() {
  return `
  <!-- FOOTER -->
  <footer>
    <div class="container footer-inner">
      <div class="footer-left">
        <img src="../logo_light.svg" alt="Industrial AI Group" class="footer-logo-img footer-logo-dark" />
        <img src="../logo_dark.svg" alt="Industrial AI Group" class="footer-logo-img footer-logo-light" style="display:none" />
        <p>Industrial Artificial Intelligence Group<br />Advancing intelligence for the factory of the future.</p>
      </div>
      <div class="footer-links">
        <div>
          <strong>Research</strong>
          <a href="../index.html#research">Factory Automation</a>
          <a href="../index.html#research">Human-Robot Collab</a>
          <a href="../index.html#research">Embodied Intelligence</a>
        </div>
        <div>
          <strong>Lab</strong>
          <a href="../index.html#team">Team</a>
          <a href="../publications.html">Publications</a>
          <a href="../news.html">News</a>
          <a href="../opportunity.html">Join Us</a>
      <a href="../index.html#contact">Contact</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Industrial AI Group. All rights reserved.</span>
    </div>
  </footer>

  <script src="../theme.js"></script>
  <script>
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });
    document.getElementById('hamburger').addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.toggle('open');
    });
  </script>
</body>
</html>`;
}

for (const item of news) {
  const canonicalUrl = `${BASE_URL}/news/${item.id}.html`;
  const imageUrl = item.image ? `${BASE_URL}/${item.image}` : null;
  const description = esc((item.body || '').slice(0, 200));
  const title = esc(item.title);

  const ogImage = imageUrl
    ? `  <meta property="og:image" content="${imageUrl}" />\n  <meta name="twitter:image" content="${imageUrl}" />`
    : '';

  const headExtra = `  <meta name="description" content="${description}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Industrial AI Group" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonicalUrl}" />
${ogImage}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />`;

  const heroHtml = item.image
    ? `        <div>
          <img src="${imageUrl}" alt="${title}" class="detail-hero-img" />
        </div>\n`
    : '';

  const resourceLinksHtml = (item.resourceLinks && item.resourceLinks.length)
    ? `          <div class="detail-resource-links">
${item.resourceLinks.map(l => `            <a href="${resolveAssetUrl(l.url)}" target="_blank" rel="noopener noreferrer" class="resource-link resource-link--${l.icon}">${ICONS[l.icon] || ''}${esc(l.label)}</a>`).join('\n')}
          </div>\n`
    : '';

  const bodyContent = item.fullContent || item.body;
  const bodyHtml = renderMarkdown(bodyContent);

  const linkedinShareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(canonicalUrl);

  const others = news.filter(n => n.id !== item.id).slice(0, 3);
  const relatedHtml = others.length
    ? `  <section class="related-section">
    <div class="container">
      <h3 class="related-title">More News</h3>
      <div class="related-grid">
${others.map(n => `        <a class="related-card" href="${n.id}.html">
          <span class="news-badge">${esc(n.badge)}</span>
          <span class="related-date">${esc(n.date)}</span>
          <h4>${esc(n.title)}</h4>
          <p>${esc(n.body)}</p>
        </a>`).join('\n')}
      </div>
    </div>
  </section>\n`
    : '';

  const html = `${navAndHead(`${title} — Industrial AI Group`, headExtra)}
  <!-- ARTICLE -->
  <main class="detail-main">
    <article>
      <div class="container detail-container">

        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <a href="../index.html">Home</a>
          <span>›</span>
          <a href="../news.html">News</a>
          <span>›</span>
          <span>${title}</span>
        </nav>

        <!-- Featured image -->
${heroHtml}
        <!-- Header -->
        <header class="detail-header">
          <div class="detail-meta">
            <span class="news-badge">${esc(item.badge)}</span>
            <span class="detail-date">${esc(item.date)}</span>
          </div>
          <h1>${title}</h1>
          <!-- Resource links (PDF, GitHub, etc.) -->
${resourceLinksHtml}
        </header>

        <!-- Body -->
        <div class="detail-body">
${bodyHtml}
        </div>

        <!-- Footer actions -->
        <div class="detail-footer">
          <a href="../news.html" class="btn-ghost">← Back to News</a>
          <a href="${linkedinShareUrl}" target="_blank" rel="noopener noreferrer" class="linkedin-share-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Share on LinkedIn
          </a>
        </div>

      </div>
    </article>

${relatedHtml}
  </main>
${footer()}`;

  fs.writeFileSync(path.join(OUT_DIR, `${item.id}.html`), html, 'utf8');
  console.log(`  news/${item.id}.html`);
}

console.log(`\nGenerated ${news.length} pages in news/`);
