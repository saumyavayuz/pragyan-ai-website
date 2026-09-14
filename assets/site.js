const q=(s,c=document)=>c.querySelector(s), qa=(s,c=document)=>[...c.querySelectorAll(s)];
const prog=q('.progress'); addEventListener('scroll',()=>{const d=document.documentElement; const p=d.scrollTop/(d.scrollHeight-d.clientHeight||1); if(prog)prog.style.width=(p*100)+'%'});
const cg=q('.cursor-glow'); addEventListener('pointermove',e=>{if(cg){cg.style.left=e.clientX+'px';cg.style.top=e.clientY+'px'}});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.14}); qa('.reveal').forEach(el=>io.observe(el));
const menu=q('[data-menu-toggle]'), nav=q('[data-nav]'); if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));
qa('.faq-q').forEach(b=>b.addEventListener('click',()=>b.closest('.faq-item').classList.toggle('open')));
const media=q('.hero-media img'); if(media&&!matchMedia('(prefers-reduced-motion: reduce)').matches){addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*10,y=(e.clientY/innerHeight-.5)*6;media.style.transform=`scale(1.07) translate(${x}px,${y}px)`});}
qa('[data-phase]').forEach(b=>b.addEventListener('click',()=>{qa('[data-phase]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const id=b.dataset.phase;qa('[data-phase-panel]').forEach(p=>p.hidden=p.dataset.phasePanel!==id)}));
qa('[data-filter]').forEach(b=>b.addEventListener('click',()=>{qa('[data-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;qa('[data-industry]').forEach(x=>x.style.display=(f==='all'||x.dataset.industry===f)?'block':'none')}));
qa('.year').forEach(x=>x.textContent=new Date().getFullYear());
