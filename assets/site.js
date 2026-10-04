const input=document.querySelector('#busca');
const results=document.querySelector('#resultados');
const status=document.querySelector('#busca-status');
let indexPromise;
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
if(input)input.addEventListener('input',async()=>{
 const query=input.value.trim();results.replaceChildren();status.textContent='';if(query.length<2)return;
 try{
  const indexUrl=new URL(input.dataset.index,location.href);
  const rootUrl=new URL('../',indexUrl);
  indexPromise??=fetch(indexUrl).then(r=>{if(!r.ok)throw Error('index');return r.json()});
  const entries=await indexPromise;if(input.value.trim()!==query)return;
  const words=normalize(query).split(/\s+/);
  const hits=entries.filter(e=>words.every(w=>normalize(e.title+' '+e.text).includes(w))).sort((a,b)=>Number(normalize(b.title).includes(normalize(query)))-Number(normalize(a.title).includes(normalize(query))));
  status.textContent=hits.length?`${hits.length} resultado(s)`:'Nenhum resultado. Tente outro assunto.';
  for(const hit of hits.slice(0,10)){const li=document.createElement('li');const a=document.createElement('a');a.href=new URL(hit.url,rootUrl).href;a.textContent=hit.title;li.append(a);results.append(li)}
 }catch{status.textContent='Não foi possível carregar a busca. Use os links do menu.';indexPromise=undefined;}
});

// An anchor may point to a heading inside an optional deep dive.
function revealSection(hash=location.hash){
 if(!hash)return;
 let id;try{id=decodeURIComponent(hash.slice(1))}catch{return}
 const target=document.getElementById(id);if(!target)return;
 let parent=target.parentElement;
 while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement}
 target.scrollIntoView({block:'start'});
}
window.addEventListener('hashchange',()=>revealSection());
document.addEventListener('click',event=>{
 const anchor=event.target.closest('a[href^="#"]');if(anchor)revealSection(anchor.hash);
});
if(location.hash)window.addEventListener('load',()=>revealSection());
