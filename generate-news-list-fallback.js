// Pre-renders the default (unfiltered, newest-first) news list — featured card plus
// grid — into news.html's #newsFeatured / #newsListGrid containers, so crawlers that
// don't execute JavaScript still see the full list of article titles/links. The
// page's own script overwrites this markup with an identical render() on load, so
// behavior for real users and JS-executing crawlers is unchanged — pure
// progressive-enhancement fallback, same pattern as generate-publications-fallback.js.
// Run with: node generate-news-list-fallback.js
// Re-run whenever news items are added or changed in data.js.

const vm = require('vm');
const fs = require('fs');
const path = require('path');

const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8')
  .replace(/^const /gm, 'var ')
  .replace(/^let /gm, 'var ');
const ctx = { localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} } };
vm.createContext(ctx);
vm.runInContext(dataJs, ctx);
const news = ctx.DEFAULT_NEWS;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const NO_IMG_SVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

function badgeHtml(badge) {
  return `<span class="news-badge" data-type="${esc(badge)}">${esc(badge)}</span>`;
}

const list = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
const [featured, ...rest] = list;

const featuredHtml = `
        <a class="nl-card-featured" href="news-detail.html?id=${featured.id}">
          <div class="nl-featured-img-wrap${featured.image ? '' : ' nl-featured-no-img'}">
            ${featured.image
              ? `<img src="${featured.image}" alt="${esc(featured.title)}" loading="lazy" />`
              : NO_IMG_SVG}
            <span class="nl-featured-tag">${esc(featured.badge)}</span>
          </div>
          <div class="nl-featured-body">
            <div class="nl-card-meta">
              <span class="news-date">${esc(featured.date)}</span>
              ${badgeHtml(featured.badge)}
            </div>
            <h3>${esc(featured.title)}</h3>
            <p>${esc(featured.body)}</p>
            <span class="nl-featured-read-more">${esc(featured.linkText)} <span>→</span></span>
          </div>
        </a>
      `;

const gridHtml = rest.map(n => `
        <a class="nl-card" href="news-detail.html?id=${n.id}">
          <div class="nl-card-img-wrap${n.image ? '' : ' nl-card-no-img'}">
            ${n.image
              ? `<img src="${n.image}" alt="${esc(n.title)}" loading="lazy" />`
              : NO_IMG_SVG}
          </div>
          <div class="nl-card-body">
            <div class="nl-card-meta">
              <span class="news-date">${esc(n.date)}</span>
              ${badgeHtml(n.badge)}
            </div>
            <h4>${esc(n.title)}</h4>
            <p>${esc(n.body)}</p>
            <span class="nl-read-more">${esc(n.linkText)} <span>→</span></span>
          </div>
        </a>
      `).join('');

const newsPath = path.join(__dirname, 'news.html');
let newsHtml = fs.readFileSync(newsPath, 'utf8');

function fillMarker(html, name, content) {
  const start = `<!-- ${name}_START -->`;
  const end   = `<!-- ${name}_END -->`;
  const startIdx = html.indexOf(start);
  const endIdx   = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Could not find ${start} / ${end} markers in news.html`);
  }
  return html.slice(0, startIdx + start.length) + content + html.slice(endIdx);
}

newsHtml = fillMarker(newsHtml, 'NEWS_FEATURED_FALLBACK', featuredHtml);
newsHtml = fillMarker(newsHtml, 'NEWS_GRID_FALLBACK', gridHtml);

fs.writeFileSync(newsPath, newsHtml, 'utf8');
console.log(`Pre-rendered 1 featured + ${rest.length} grid news cards into news.html`);
