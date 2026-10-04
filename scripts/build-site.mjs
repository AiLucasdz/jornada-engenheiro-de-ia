import fs from 'node:fs';
import path from 'node:path';
import { marked, Renderer } from 'marked';

const root=process.cwd();
const publicBase='https://ailucasdz.github.io/jornada-engenheiro-de-ia/';
const repo='https://github.com/AiLucasdz/jornada-engenheiro-de-ia';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const slug=s=>s.toLowerCase().replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s+/g,'-');
const sources=['README.md','CONTRIBUTING.md',...['comece-aqui','aulas','pratique','mapas-e-desenhos','assets'].flatMap(dir=>fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(f=>dir+'/'+f))];
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
 const routes=[['Começar','leitura/comece-aqui/index.html'],['Aulas','leitura/aulas/index.html'],['Praticar','leitura/pratique/index.html'],['Mapas','leitura/mapas-e-desenhos/index.html'],['Onde estudar','leitura/comece-aqui/fontes-e-comunidade.html'],['Comunidade','leitura/comece-aqui/comunidades.html']];
 return `<a class="skip" href="#conteudo">Pular para o conteúdo</a><header class="site-header"><a class="brand" href="${rel(target,'index.html')}"><span class="brand-mark">J</span> Jornada do Engenheiro de IA</a><nav aria-label="Navegação principal">${routes.map(([label,dest])=>`<a ${dest===target?'aria-current="page"':''} href="${rel(target,dest)}">${label}</a>`).join('')}<a href="${repo}">GitHub ↗</a></nav></header>`;
}
const index=[];
for(const source of sources){
 const target=targets.get(source); let markdown=fs.readFileSync(source,'utf8').replace(/<\/?div[^>]*>/g,'');
 const toc=[]; const seen=new Map();let optionalDepth=0;
 const renderer=Object.assign(new Renderer(),{
  html({text}){optionalDepth+=(text.match(/<details\b/g)||[]).length-(text.match(/<\/details>/g)||[]).length;return text;},
  heading({tokens,depth}){const text=this.parser.parseInline(tokens);const idBase=slug(text);const count=seen.get(idBase)||0;seen.set(idBase,count+1);const id=idBase+(count?'-'+count:'');if(depth===2&&optionalDepth===0)toc.push({text:text.replace(/<[^>]*>/g,''),id});return `<h${depth} id="${esc(id)}">${text}</h${depth}>\n`;},
  link({href,title,tokens}){return `<a href="${esc(urlFor(href,source,target))}"${title?' title="'+esc(title)+'"':''}>${this.parser.parseInline(tokens)}</a>`;},
  image({href,text}){return `<img src="${esc(urlFor(href,source,target))}" alt="${esc(text)}" loading="lazy"${href.includes('mapas-e-desenhos/')||source.startsWith('mapas-e-desenhos/')&&href.endsWith('.svg')?' class="lesson-diagram"':''}>`;},
  code({text,lang}){if(lang==='mermaid')return `<figure class="flow-fallback"><p>Mensagem ou formulário → Validar e identificar → Salvar evento e estado → Consultar informação confiável → Verificar, agir e registrar → Medir resultado</p><figcaption>Quando faltar informação confiável, encaminhe a uma pessoa antes de continuar.</figcaption></figure>`;return `<pre><code>${esc(text)}</code></pre>`;}
 });
 const body=marked.parse(markdown,{renderer,gfm:true})
  .replaceAll('<table>','<div class="table-scroll" tabindex="0" role="region" aria-label="Tabela de consulta"><table>').replaceAll('</table>','</table></div>')
  .replaceAll('<!-- cards:start -->','<div class="link-cards">').replaceAll('<!-- cards:end -->','</div>')
  .replace(/<p>(<img src="([^"]+)"[^>]*class="lesson-diagram"[^>]*>)<\/p>/g,(_,img,url)=>`<figure class="lesson-figure"><a href="${url}" target="_blank" rel="noopener">${img}<span>Ampliar o desenho ↗</span></a></figure>`);
 const title=(markdown.match(/^# (.+)$/m)?.[1]||'Jornada').replace(/\*|`/g,'');
 const content=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · Jornada IA</title><meta name="description" content="Construa seu primeiro agente de IA em quatro entregas, com aulas curtas, desenhos, exercícios e fontes. Aprenda no seu ritmo."><link rel="stylesheet" href="${rel(target,'assets/site.css')}"><script defer src="${rel(target,'assets/site.js')}"></script></head><body>${header(target)}<div class="page-shell"><aside class="sidebar"><p class="eyebrow">EXPLORE A JORNADA</p><label for="busca">Buscar por assunto</label><input id="busca" type="search" placeholder="Hermes, fontes, testes…" data-index="${rel(target,'assets/busca.json')}"><p id="busca-status" class="search-status" role="status"></p><ul id="resultados" aria-label="Resultados da busca"></ul><nav class="toc" aria-label="Nesta página"><strong>Nesta página</strong>${toc.map(x=>`<a href="#${esc(x.id)}">${esc(x.text)}</a>`).join('')}</nav><a class="study-note" href="${rel(target,'leitura/comece-aqui/trilha-pratica.html')}"><strong>4 entregas.<br>No seu ritmo.</strong><span>80% construindo e testando.<br>20% aprendendo o necessário.</span></a></aside><main id="conteudo"><article>${body}</article><footer><a href="${repo}/blob/main/${encodeURI(source)}">Ver este conteúdo no GitHub ↗</a><span>Um agente. Uma melhoria de cada vez.</span></footer></main></div></body></html>`;
 fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,content);
 index.push({title,url:target,text:body.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ')});
}
// Keep old bookmarks working; the course content now lives inside the lessons.
const redirects=[
 ['materiais/historia-da-ia-material-de-formacao.html','leitura/aulas/01-historia-e-problemas.html',{
  conceitos:'leitura/aulas/02-modelos-e-aprendizado.html',trilha:'leitura/comece-aqui/fontes-e-comunidade.html'
 }],
 ['materiais/Base Técnica de IA.html','leitura/aulas/02-modelos-e-aprendizado.html',{
  'bloco-1':'leitura/aulas/02-modelos-e-aprendizado.html','bloco-2':'leitura/aulas/04-contexto-e-rag.html',
  'bloco-3':'leitura/aulas/05-agentes-e-ferramentas.html','bloco-4':'leitura/aulas/03-integracoes-e-dados.html',
  'bloco-5':'leitura/aulas/06-avaliacao-e-confiabilidade.html','bloco-6':'leitura/aulas/07-operacao-e-comunicacao.html'
 }],
 ['leitura/materiais/index.html','leitura/aulas/index.html',{}]
];
for(const [oldDir,newDir] of [['docs','comece-aqui'],['modelos','pratique']]){
 for(const source of sources.filter(s=>s.startsWith(newDir+'/'))){
  const filename=source.split('/').at(-1).replace('trilha-pratica.md','trilha-12-semanas.md');
  const legacy='leitura/'+oldDir+'/'+filename.replace('README.md','index.html').replace(/\.md$/,'.html');
  redirects.push([legacy,targets.get(source),{}]);
 }
}
for(const [legacy,destination,sections] of redirects){
 const routes=Object.fromEntries(Object.entries(sections).map(([key,value])=>[key,rel(legacy,value)]));
 const fallback=rel(legacy,destination);
 fs.mkdirSync(path.dirname(legacy),{recursive:true});
 fs.writeFileSync(legacy,`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Continue na aula · Jornada IA</title><link rel="canonical" href="${publicBase+destination}"><meta name="robots" content="noindex"><script>const sections=${JSON.stringify(routes)};location.replace(sections[location.hash.slice(1)]||${JSON.stringify(fallback)});</script></head><body><h1>Este conteúdo agora faz parte das aulas</h1><p>Conceitos, referências de estudo e exercícios estão reunidos na mesma etapa da jornada.</p><p><a href="${esc(fallback)}">Continuar na aula</a> · <a href="${rel(legacy,'leitura/aulas/index.html')}">Ver todas as aulas</a></p></body></html>`);
}
fs.writeFileSync('assets/busca.json',JSON.stringify(index));
console.log(`Geradas ${sources.length} páginas de leitura; ${index.length} documentos no índice de busca.`);
