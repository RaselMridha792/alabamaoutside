// Assemble a full static HTML page from a processed body fragment.
// usage: node assemble.js <bodyFile> <name> <title> <extraScripts csv> <outFile>
const fs = require('fs');
const [, , bodyFile, name, title, extraScripts, outFile] = process.argv;
const body = fs.readFileSync(bodyFile, 'utf8');
const scripts = (extraScripts || '').split(',').filter(Boolean);

const scriptTags = ['../global/global.js'].concat(scripts)
  .map(function (s) { return '  <script src="' + s + '" defer></script>'; }).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="icon" href="../assets/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="../global/global.css">
  <link rel="stylesheet" href="${name}.css">
</head>
<body class="antialiased">
${body}
${scriptTags}
</body>
</html>
`;
fs.writeFileSync(outFile, html);
console.log('assembled', outFile);
