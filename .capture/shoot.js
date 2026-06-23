// Full-page screenshot via CDP. usage: node shoot.js <url> <outPng>
const fs = require('fs');
const http = require('http');
const url = process.argv[2], out = process.argv[3];

function getJSON(path) {
  return new Promise((res, rej) => {
    http.get({ host: '127.0.0.1', port: 9222, path }, r => {
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
}

(async () => {
  // find a page target
  let targets = await getJSON('/json');
  let page = targets.find(t => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0; const pending = {};
  const send = (method, params) => new Promise(r => { id++; pending[id] = r; ws.send(JSON.stringify({ id, method, params })); });
  await new Promise(r => ws.onopen = r);
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pending[m.id]) pending[m.id](m.result); };

  await send('Page.enable', {});
  await send('Runtime.enable', {});
  await send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 3500)); // let JS run
  const evalExpr = process.argv[4];
  if (evalExpr) {
    await send('Runtime.evaluate', { expression: evalExpr });
    await new Promise(r => setTimeout(r, 800));
  }
  const { cssContentSize } = await send('Page.getLayoutMetrics', {});
  const w = Math.ceil(cssContentSize.width), h = Math.ceil(cssContentSize.height);
  const shot = await send('Page.captureScreenshot', {
    format: 'png', captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: w, height: h, scale: 1 }
  });
  fs.writeFileSync(out, Buffer.from(shot.data, 'base64'));
  console.log('saved', out, w + 'x' + h);
  ws.close();
  process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
