// Converts a captured Next.js prod HTML page into a clean static page body.
const fs = require('fs');

// Known top-level routes -> static folder/file name (folder == file basename)
const ROUTE_NAME = {
  '/': 'home',
  '/about': 'about',
  '/attorney': 'attorney',
  '/blog': 'blog',
  '/case-review': 'case-review',
  '/contact': 'contact',
  '/media': 'media',
  '/personal': 'personal',
  '/personal/criminal-defense': 'criminal-defense',
  '/personal/divorce-and-family-law': 'divorce-and-family-law',
  '/personal/dui-defense': 'dui-defense',
  '/personal/personal-injury': 'personal-injury',
  '/personal/wills-and-probate': 'wills-and-probate',
  '/professional': 'professional',
  '/professional/appellate-litigation': 'appellate-litigation',
  '/professional/business-consulting': 'business-consulting',
  '/professional/business-formation-dissolution': 'business-formation-dissolution',
};

function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// Resolve a Next route href to a static-site relative link (pages are siblings: ../<name>/<name>.html)
function rewriteHref(href, selfName) {
  let hash = '';
  const hi = href.indexOf('#');
  if (hi >= 0) { hash = href.slice(hi); href = href.slice(0, hi); }
  if (href === '') return hash; // pure anchor on same page
  let name = ROUTE_NAME[href];
  if (!name) {
    const m = href.match(/^\/blog\/(.+)$/);
    if (m) name = 'blog/' + m[1]; // blog detail pages live inside blog/ folder
  }
  if (!name) return href + hash; // unknown -> leave as-is
  if (name === selfName) return (hash || '#');
  if (name.startsWith('blog/')) return '../' + name + '.html' + hash;
  return '../' + name + '/' + name + '.html' + hash;
}

function rewriteNextImage(url) {
  // url like /_next/image?url=ENC&w=..&q=..
  const m = url.match(/url=([^&]+)/);
  if (!m) return url;
  let orig = decodeURIComponent(m[1]);
  if (/^https?:\/\//.test(orig)) return orig;       // remote -> keep
  if (orig.startsWith('/')) return '../assets' + orig; // local public asset
  return orig;
}

function convert(inFile, selfName) {
  let html = fs.readFileSync(inFile, 'utf8');

  // body inner
  let body = html.slice(html.indexOf('>', html.indexOf('<body')) + 1, html.lastIndexOf('</body>'));

  // strip React/Next hydration comment markers
  body = body.replace(/<!--\/?\$[?!]?-->/g, '');   // Suspense boundary markers
  body = body.replace(/<!-- -->/g, '');             // adjacent-text separators
  body = body.replace(/<div hidden="">\s*<\/div>/g, '');

  // strip scripts
  body = body.replace(/<script\b[\s\S]*?<\/script>/gi, '');
  // strip next route announcer / template / self-injected stylesheet links
  body = body.replace(/<next-route-announcer[\s\S]*?<\/next-route-announcer>/gi, '');
  body = body.replace(/<template\b[\s\S]*?<\/template>/gi, '');
  body = body.replace(/<link\b[^>]*rel="stylesheet"[^>]*>/gi, '');
  body = body.replace(/<link\b[^>]*rel="preload"[^>]*>/gi, '');

  // drop next/image internal markers
  body = body.replace(/\sdata-nimg="[^"]*"/gi, '');

  // rewrite <img> next/image src + drop its srcset
  body = body.replace(/srcset="[^"]*\/_next\/image[^"]*"/gi, '');
  body = body.replace(/src="(\/_next\/image[^"]*)"/gi, (mm, p1) => {
    return 'src="' + rewriteNextImage(decodeEntities(p1)) + '"';
  });

  // rewrite remaining local <img src="/foo.png"> (plain, not next/image) to assets
  body = body.replace(/src="\/(?!_next)([^"]+)"/g, 'src="../assets/$1"');

  // neutralize framer-motion initial hidden state (opacity:0 ...)
  body = body.replace(/style="[^"]*opacity:0[^"]*"/gi, '');

  // rewrite internal hrefs
  body = body.replace(/href="(\/[^"]*)"/g, (mm, p1) => 'href="' + rewriteHref(decodeEntities(p1), selfName) + '"');

  // tidy: collapse leftover empty style="" and double spaces in tags
  body = body.replace(/\s+style=""/g, '');

  return body.trim();
}

const [, , inFile, selfName, outFile] = process.argv;
fs.writeFileSync(outFile, convert(inFile, selfName));
console.log('wrote', outFile);
