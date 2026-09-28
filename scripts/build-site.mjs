import fs from 'node:fs';
import path from 'node:path';
import { marked, Renderer } from 'marked';

const root=process.cwd();
const publicBase='https://ailucasdz.github.io/jornada-engenheiro-de-ia/';
const repo='https://github.com/AiLucasdz/jornada-engenheiro-de-ia';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug=s=>s.toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s+/g,'-');
const sources=['README.md','CONTRIBUTING.md',...['docs','materiais','modelos','assets'].flatMap(dir=>fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>dir+'/'+f))];
const targets=new Map(sources.map(s=>[s,s==='README.md'?'index.html':'leitura/'+s.replace(/README\.md$/,'index.html').replace(/\.md$/,'.html')]));
const rel=(from,to)=>path.posix.relative(path.posix.dirname(from),to)||path.posix.basename(to);
function urlFor(href,source,target){
 let url=href;
 if(url.startsWith(publicBase)) url='/'+decodeURI(url.slice(publicBase.length));
 if(/^(https?:|mailto:|#)/.test(url)) return url;
 const [pathname,hash]=url.split('#');
 const resolved=url.startsWith('/')?pathname.slice(1):path.posix.normalize(path.posix.join(path.posix.dirname(source),decodeURI(pathname)));
 return encodeURI(rel(target,targets.get(resolved)||resolved))+(hash?'#'+hash:'');
}
function header(target){
 const routes=[['Início','index.html'],['Trilha','leitura/docs/trilha-12-semanas.html'],['Materiais','leitura/materiais/index.html'],['Onde estudar','leitura/docs/fontes-e-comunidade.html'],['X e Discord','leitura/docs/comunidades.html'],['Modelos','leitura/modelos/index.html']];
 return `<a class="skip" href="#conteudo">Pular para o conteúdo</a><header class="site-header"><a class="brand" href="${rel(target,'index.html')}"><span class="brand-mark">J</span> Jornada do Engenheiro de IA</a><nav aria-label="Navegação principal">${routes.map(([label,dest])=>`<a ${dest===target?'aria-current="page"':''} href="${rel(target,dest)}">${label}</a>`).join('')}<a href="${repo}">GitHub ↗</a></nav></header>`;
}
const index=[];
for(const source of sources){
 const target=targets.get(source); let markdown=fs.readFileSync(source,'utf8').replace(/<\/?div[^>]*>/g,'');
 const toc=[]; const seen=new Map();
 const renderer=Object.assign(new Renderer(),{
  heading({tokens,depth}){const text=this.parser.parseInline(tokens);const idBase=slug(text);const count=seen.get(idBase)||0;seen.set(idBase,count+1);const id=idBase+(count?'-'+count:'');if(depth===2)toc.push({text:text.replace(/<[^>]*>/g,''),id});return `<h${depth} id="${esc(id)}">${text}</h${depth}>\n`;},
  link({href,title,tokens}){return `<a href="${esc(urlFor(href,source,target))}"${title?' title="'+esc(title)+'"':''}>${this.parser.parseInline(tokens)}</a>`;},
  image({href,text}){return `<img src="${esc(urlFor(href,source,target))}" alt="${esc(text)}" loading="lazy">`;},
  code({text,lang}){if(lang==='mermaid')return `<figure class="flow-fallback"><p>Mensagem ou formulário → Validar e identificar → Salvar evento e estado → Consultar informação confiável → Verificar, agir e registrar → Medir resultado</p><figcaption>Quando faltar informação confiável, encaminhe a uma pessoa antes de continuar.</figcaption></figure>`;return `<pre><code>${esc(text)}</code></pre>`;}
 });
 const body=marked.parse(markdown,{renderer,gfm:true}).replaceAll('<table>','<div class="table-scroll" tabindex="0" role="region" aria-label="Tabela de consulta"><table>').replaceAll('</table>','</table></div>');
 const title=(markdown.match(/^# (.+)$/m)?.[1]||'Jornada').replace(/\*|`/g,'');
 const content=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · Jornada IA</title><meta name="description" content="Uma trilha prática de Engenharia de IA: materiais, fontes oficiais, projetos e comunidades."><link rel="stylesheet" href="${rel(target,'assets/site.css')}"><script defer src="${rel(target,'assets/site.js')}"></script></head><body>${header(target)}<div class="page-shell"><aside class="sidebar"><p class="eyebrow">CONSULTE A JORNADA</p><label for="busca">Buscar por assunto</label><input id="busca" type="search" placeholder="RAG, teoria, Discord…" data-index="${rel(target,'assets/busca.json')}"><p id="busca-status" class="search-status" role="status"></p><ul id="resultados" aria-label="Resultados da busca"></ul><nav class="toc" aria-label="Nesta página"><strong>Nesta página</strong>${toc.map(x=>`<a href="#${esc(x.id)}">${esc(x.text)}</a>`).join('')}</nav><a class="study-note" href="${rel(target,'leitura/docs/como-estudar.html')}"><strong>80% prática<br>20% teoria</strong><span>Estude uma ideia.<br>Aplique no seu agente.</span></a></aside><main id="conteudo"><article>${body}</article><footer><a href="${repo}/blob/main/${encodeURI(source)}">Ver este conteúdo no GitHub ↗</a><span>Um projeto. Aprendizado contínuo.</span></footer></main></div></body></html>`;
 fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);
 index.push({title,url:target,text:body.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ')});
}
// Preserve the supplied materials and add scoped navigation only.
for(const file of fs.readdirSync('materiais').filter(f=>f.endsWith('.html'))){
 const target='materiais/'+file;let html=fs.readFileSync(target,'utf8');
 html=html.replace(/<!-- jornada-nav:start -->[\s\S]*?<!-- jornada-nav:end -->\n?/g,'');
 if(file.startsWith('Base')){
  let i=0;html=html.replace(/<div class="block-head"(?: id="bloco-\d+")?>/g,()=>`<div class="block-head" id="bloco-${++i}">`);
 }
 html=html.replace(/<html(?![^>]*\blang=)([^>]*)>/i,'<html lang="pt-BR"$1>');
 const nav=`<!-- jornada-nav:start --><nav aria-label="Navegação da jornada" style="box-sizing:border-box;display:flex;flex-wrap:wrap;gap:12px;padding:16px 24px;background:#102236;color:#e2e8f0;font:14px/1.5 system-ui"><a style="color:#7debd9;text-decoration:underline" href="../index.html">← Jornada do Engenheiro de IA</a><a style="color:#e2e8f0;text-decoration:underline" href="../leitura/materiais/index.html">Biblioteca</a><a style="color:#e2e8f0;text-decoration:underline" href="../leitura/docs/trilha-12-semanas.html">Trilha</a><a style="color:#e2e8f0;text-decoration:underline" href="../leitura/docs/fontes-e-comunidade.html">Onde estudar</a></nav><!-- jornada-nav:end -->`;
 html=html.replace(/<!-- jornada-responsive:start -->[\s\S]*?<!-- jornada-responsive:end -->/g,'');
 const mobile='<!-- jornada-responsive:start --><style>@media(max-width:600px){.term h3 .en{white-space:normal;overflow-wrap:anywhere}.term-head>*{min-width:0}.wrap{min-width:0}p,li,a{overflow-wrap:anywhere}}</style><!-- jornada-responsive:end -->';
 html=html.replace(/<body([^>]*)>/i,'<body$1>'+nav).replace('</body>',mobile+'</body>');fs.writeFileSync(target,html);
 index.push({title:file.startsWith('Base')?'Base Técnica de IA — material completo':'História da IA — material completo',url:target,text:html.replace(/<style[\s\S]*?<\/style>/g,'').replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ')});
}
fs.writeFileSync('assets/busca.json',JSON.stringify(index));
console.log(`Geradas ${sources.length} páginas de leitura; ${index.length} documentos no índice de busca.`);
