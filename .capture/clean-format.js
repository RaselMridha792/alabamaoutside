// Strip Next/React hydration markers and pretty-print every site HTML file.
const fs = require('fs');
const path = require('path');
const beautify = require(path.join(__dirname, 'tools', 'node_modules', 'js-beautify')).html;

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap(e => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

const opts = {
  indent_size: 2,
  wrap_line_length: 0,          // never wrap lines (avoids changing inline text)
  preserve_newlines: false,
  max_preserve_newlines: 1,
  indent_inner_html: true,
  content_unformatted: ['pre', 'textarea'],
  extra_liners: [],             // no forced blank lines before head/body/html
};

const files = walk(path.resolve('site')).filter(f => f.endsWith('.html'));
let count = 0;
for (const f of files) {
  let html = fs.readFileSync(f, 'utf8');

  // 1) remove React/Next Suspense comment markers: <!--$-->, <!--/$-->, <!--$?-->, <!--$!-->, <!--/$?-->
  html = html.replace(/<!--\/?\$[?!]?-->/g, '');
  // 2) remove React adjacent-text separators: <!-- -->
  html = html.replace(/<!-- -->/g, '');
  // 3) drop now-empty hidden suspense placeholder divs
  html = html.replace(/<div hidden="">\s*<\/div>/g, '');

  // 4) pretty-print
  html = beautify(html, opts);
  if (!html.endsWith('\n')) html += '\n';

  fs.writeFileSync(f, html);
  count++;
}
console.log('cleaned + formatted', count, 'HTML files');
