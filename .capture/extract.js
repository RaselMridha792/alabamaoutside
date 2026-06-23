// Extract a top-level array/object literal `const NAME = [...]` or `{...}` from a JS/JSX file.
const fs = require('fs');
const [, , file, varName] = process.argv;
const src = fs.readFileSync(file, 'utf8');
const idx = src.indexOf(varName + ' = ');
if (idx < 0) { console.error('not found', varName); process.exit(1); }
let i = src.indexOf('=', idx) + 1;
while (' \t\n'.includes(src[i])) i++;
const open = src[i], close = open === '[' ? ']' : '}';
let depth = 0, j = i, inStr = false, q = '';
for (; j < src.length; j++) {
  const c = src[j], p = src[j - 1];
  if (inStr) { if (c === q && p !== '\\') inStr = false; continue; }
  if (c === '"' || c === "'" || c === '`') { inStr = true; q = c; continue; }
  if (c === open) depth++;
  else if (c === close) { depth--; if (depth === 0) { j++; break; } }
}
const literal = src.slice(i, j);
let val;
try { val = (new Function('return (' + literal + ')'))(); }
catch (e) { console.error('eval failed:', e.message); process.exit(1); }
process.stdout.write(JSON.stringify(val, null, 0));
