// Pre-renders the default (unfiltered, newest-first, year >= 2019) publication list
// into publications.html's #pubList container, so crawlers that don't execute
// JavaScript still see full publication content. The page's own script overwrites
// this markup with an identical render() on load, so behavior for real users and
// JS-executing crawlers is unchanged — this is a pure progressive-enhancement fallback.
// Run with: node generate-publications-fallback.js
// Re-run whenever publications are added or changed in data.js.

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
const publications = ctx.DEFAULT_PUBLICATIONS;

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const list = publications
  .filter(p => p.year >= 2019)
  .sort((a, b) => b.year - a.year);

const html = list.map(p => `
        <div class="pub-item" data-tag="${p.tag}" data-year="${p.year}">
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

const pubsPath = path.join(__dirname, 'publications.html');
let pubsHtml = fs.readFileSync(pubsPath, 'utf8');

const START = '<!-- PUBLICATIONS_FALLBACK_START -->';
const END   = '<!-- PUBLICATIONS_FALLBACK_END -->';
const startIdx = pubsHtml.indexOf(START);
const endIdx   = pubsHtml.indexOf(END);
if (startIdx === -1 || endIdx === -1) {
  throw new Error(`Could not find ${START} / ${END} markers in publications.html`);
}
pubsHtml =
  pubsHtml.slice(0, startIdx + START.length) +
  html +
  pubsHtml.slice(endIdx);

fs.writeFileSync(pubsPath, pubsHtml, 'utf8');
console.log(`Pre-rendered ${list.length} publications into publications.html`);
