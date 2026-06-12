// Generates one static HTML file per news item in news/ for LinkedIn OG meta tags.
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
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

for (const item of news) {
  const detailUrl = `/news-detail.html?id=${item.id}`;
  const canonicalUrl = `${BASE_URL}/news/${item.id}.html`;
  const imageUrl = item.image ? `${BASE_URL}/${item.image}` : null;
  const description = esc((item.body || '').slice(0, 200));
  const title = esc(item.title);

  const ogImage = imageUrl
    ? `  <meta property="og:image" content="${imageUrl}" />\n  <meta name="twitter:image" content="${imageUrl}" />`
    : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} — IAI Group</title>
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="IAI Group" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonicalUrl}" />
${ogImage}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <link rel="canonical" href="${canonicalUrl}" />
  <meta http-equiv="refresh" content="0;url=${detailUrl}" />
  <script>window.location.replace('${detailUrl}');</script>
</head>
<body>
  <p>Redirecting to <a href="${detailUrl}">${title}</a>&hellip;</p>
</body>
</html>`;

  fs.writeFileSync(path.join(OUT_DIR, `${item.id}.html`), html, 'utf8');
  console.log(`  news/${item.id}.html`);
}

console.log(`\nGenerated ${news.length} pages in news/`);
