// Pre-renders the homepage's news preview (#newsGrid) and publications preview
// (#pubList, default "automation" tab) into index.html, matching main.js's
// renderNews()/renderPublications() output exactly, so crawlers that don't
// execute JavaScript still see this content and its links. main.js re-renders
// identically on load and whenever a publication tab is clicked, so behavior
// for real users and JS-executing crawlers is unchanged.
// Run with: node generate-homepage-fallback.js
// Re-run whenever news items or publications are added/changed in data.js.

const vm = require('vm');
const fs = require('fs');
const path = require('path');

const TAG_LABELS = {
  automation: 'Factory Automation',
  hrc:        'Human-Robot',
  embodied:   'Embodied AI',
};

const dataJs = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8')
  .replace(/^const /gm, 'var ')
  .replace(/^let /gm, 'var ');
const ctx = { localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} } };
vm.createContext(ctx);
vm.runInContext(dataJs, ctx);
const news = ctx.DEFAULT_NEWS;
const publications = ctx.DEFAULT_PUBLICATIONS;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── News preview (renderNews: getNews().slice(0, 5)) ────────
const newsList = news.slice(0, 5);
const newsHtml = newsList.map((n, i) => `
    <div class="news-card ${i === 0 ? 'featured-news' : ''}">
      ${n.image ? `<img src="${n.image}" alt="${esc(n.title)}" class="news-card-img" loading="lazy" />` : ''}
      <div class="news-card-body">
        <div class="news-card-meta">
          <span class="news-date">${esc(n.date)}</span>
          <span class="news-badge">${esc(n.badge)}</span>
        </div>
        <h4>${esc(n.title)}</h4>
        <p>${esc(n.body)}</p>
        <a href="news/${n.id}.html">${esc(n.linkText)} →</a>
      </div>
    </div>
  `).join('');

// ── Publications preview (renderPublications('automation')) ─
const pubsList = publications
  .filter(p => p.tag === 'automation')
  .sort((a, b) => b.year - a.year)
  .slice(0, 8);
const pubsHtml = pubsList.map(p => `
    <div class="pub-item" data-tag="${p.tag}">
      <div class="pub-year">${p.year}</div>
      <div class="pub-content">
        <span class="pub-tag ${p.tag}">${TAG_LABELS[p.tag] || p.tag}</span>
        <h4>${esc(p.title)}</h4>
        <p class="pub-authors">${esc(p.authors)}</p>
        <p class="pub-venue">${esc(p.venue)}</p>
        <div class="pub-links">
          ${p.links.map(l => `<a href="${l.url}">${esc(l.label)}</a>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');

function fillMarker(html, name, content) {
  const start = `<!-- ${name}_START -->`;
  const end   = `<!-- ${name}_END -->`;
  const startIdx = html.indexOf(start);
  const endIdx   = html.indexOf(end);
  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Could not find ${start} / ${end} markers in index.html`);
  }
  return html.slice(0, startIdx + start.length) + content + html.slice(endIdx);
}

indexHtml = fillMarker(indexHtml, 'HOME_NEWS_FALLBACK', newsHtml);
indexHtml = fillMarker(indexHtml, 'HOME_PUBS_FALLBACK', pubsHtml);

fs.writeFileSync(indexPath, indexHtml, 'utf8');
console.log(`Pre-rendered ${newsList.length} news cards and ${pubsList.length} publications into index.html`);
