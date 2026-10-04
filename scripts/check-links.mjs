import fs from 'node:fs';
import path from 'node:path';
const base='https://ailucasdz.github.io/jornada-engenheiro-de-ia/';
const skip=new Set(['.git','.archify','node_modules']);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>skip.has(e.name)?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk('.').filter(f=>/\.(md|html)$/.test(f)&&f!=='assets/mapa-archify.html');
const failures=[];let checked=0;
function mdIds(content){return [...[...content.matchAll(/^#{1,6} (.+)$/gm)].map(m=>m[1].toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s+/g,'-')),...[...content.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1])];}
for(const file of files){
 const text=fs.readFileSync(file,'utf8');
 const htmlLinks=[...text.matchAll(/(?:href|src)="([^"<>]+)"/g)].map(m=>m[1]);
 const links=file.endsWith('.md')?[...[...text.matchAll(/\]\(([^)]+)\)/g)].map(m=>m[1]),...htmlLinks]:htmlLinks;
 for(let href of links){
  let localRoot=false;if(href.startsWith(base)){href=href.slice(base.length)||'index.html';localRoot=true;}
  if(/^(?:https?:|data:|mailto:|javascript:)/.test(href))continue;
  const [name,fragment]=href.split('#');
  const dest=path.normalize(localRoot?decodeURI(name):name?path.join(path.dirname(file),decodeURI(name)):file);
  if(!fs.existsSync(dest)){failures.push(`${file}: arquivo ausente ${href}`);continue;}
  checked++;
  if(fragment&&/\.(md|html)$/.test(dest)){
   const content=fs.readFileSync(dest,'utf8');const anchor=decodeURIComponent(fragment);
   const ids=dest.endsWith('.md')?mdIds(content):[...content.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
   if(!ids.includes(anchor))failures.push(`${file}: seção ausente ${href}`);
  }
 }
}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1}else console.log(`${checked} links locais e âncoras conferidos em ${files.length} arquivos.`);
