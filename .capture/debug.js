// CDP debug: load a URL, capture console errors, run eval probes.
const http = require('http');
const fs = require('fs');
const url = process.argv[2];
const probes = process.argv.slice(3).map(function (p) {
  return p[0] === '@' ? fs.readFileSync(p.slice(1), 'utf8') : p;
});
function getJSON(p){return new Promise((res,rej)=>{http.get({host:'127.0.0.1',port:9222,path:p},r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>res(JSON.parse(d)));}).on('error',rej);});}
(async()=>{
  const t=(await getJSON('/json')).find(x=>x.type==='page');
  const ws=new WebSocket(t.webSocketDebuggerUrl);
  let id=0;const pend={};
  const send=(m,p)=>new Promise(r=>{id++;pend[id]=r;ws.send(JSON.stringify({id,method:m,params:p}));});
  await new Promise(r=>ws.onopen=r);
  const logs=[];
  ws.onmessage=e=>{const m=JSON.parse(e.data);
    if(m.id&&pend[m.id])pend[m.id](m.result);
    if(m.method==='Runtime.consoleAPICalled'){logs.push('['+m.params.type+'] '+m.params.args.map(a=>a.value||a.description||'').join(' '));}
    if(m.method==='Runtime.exceptionThrown'){logs.push('[EXCEPTION] '+(m.params.exceptionDetails.exception&&m.params.exceptionDetails.exception.description||m.params.exceptionDetails.text));}
  };
  await send('Runtime.enable',{});
  await send('Page.enable',{});
  await send('Page.navigate',{url});
  await new Promise(r=>setTimeout(r,3500));
  for(const expr of probes){
    const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});
    console.log('» '+expr);
    console.log('  =',JSON.stringify(r.result&&r.result.value));
    if(r.exceptionDetails)console.log('  ERR',r.exceptionDetails.text);
  }
  if(logs.length){console.log('--- console ---');logs.forEach(l=>console.log(l));}
  ws.close();process.exit(0);
})().catch(e=>{console.error(e);process.exit(1);});
