/* ---------- Utility carousel ---------- */
const utilSlides = document.querySelectorAll('.util-slide');
const utilDotsEl = document.getElementById('utilDots');
utilSlides.forEach((_,i)=>{const d=document.createElement('span');if(i===0)d.classList.add('active');utilDotsEl.appendChild(d);});
let utilIdx=0;
setInterval(()=>{
  utilSlides[utilIdx].classList.remove('active');
  utilDotsEl.children[utilIdx].classList.remove('active');
  utilIdx=(utilIdx+1)%utilSlides.length;
  utilSlides[utilIdx].classList.add('active');
  utilDotsEl.children[utilIdx].classList.add('active');
},3500);

/* ---------- Hero carousel ---------- */
const heroTrack=document.getElementById('heroTrack');
const heroSlideCount=heroTrack.children.length;
const heroDotsEl=document.getElementById('heroDots');
for(let i=0;i<heroSlideCount;i++){const d=document.createElement('span');if(i===0)d.classList.add('active');d.onclick=()=>{heroIdx=i;renderHero();};heroDotsEl.appendChild(d);}
let heroIdx=0;
function renderHero(){
  heroTrack.style.transform=`translateX(-${heroIdx*100}%)`;
  [...heroDotsEl.children].forEach((d,i)=>d.classList.toggle('active',i===heroIdx));
}
function moveHero(dir){heroIdx=(heroIdx+dir+heroSlideCount)%heroSlideCount;renderHero();}
setInterval(()=>moveHero(1),5000);

/* ---------- Feature carousel ---------- */
const featureTrack=document.getElementById('featureTrack');
const featureCount=featureTrack.children.length;
const featureDotsEl=document.getElementById('featureDots');
for(let i=0;i<featureCount;i++){const d=document.createElement('span');if(i===0)d.classList.add('active');featureDotsEl.appendChild(d);}
let featureIdx=0;
setInterval(()=>{
  featureDotsEl.children[featureIdx].classList.remove('active');
  featureIdx=(featureIdx+1)%featureCount;
  featureTrack.style.transform=`translateX(-${featureIdx*100}%)`;
  featureDotsEl.children[featureIdx].classList.add('active');
},4000);

/* ---------- Product "database" ---------- */
const products=[
  {brand:'Anua',name:'Heartleaf 77% Soothing Toner',price:79.90,old:99.90,badge:'-20%',rating:4.5,reviews:120},
  {brand:'COSRX',name:'Advanced Snail 96 Mucin Power Essence',price:89.90,old:105.90,badge:'-15%',rating:4.6,reviews:98},
  {brand:'Beauty of Joseon',name:'Relief Sun: Rice + Probiotics SPF50+',price:69.90,badge:null,rating:4.7,reviews:210},
  {brand:'iUNIK',name:'Centella Calming Gel Cream',price:89.90,old:99.90,badge:'-10%',rating:4.5,reviews:76},
  {brand:'SKIN1004',name:'Madagascar Centella Ampoule',price:89.90,badge:null,rating:4.4,reviews:145},
];
const prodGrid=document.getElementById('prodGrid');
prodGrid.innerHTML=products.map(p=>`
  <div class="prod-card">
    <div class="prod-img">${p.badge?`<span class="prod-badge">${p.badge}</span>`:''}<div class="bt"></div></div>
    <div class="prod-body">
      <div class="prod-brand">${p.brand}</div>
      <div class="prod-name">${p.name}</div>
      <div style="font-size:11.5px;color:#c99;margin-bottom:4px;">★★★★★ (${p.reviews})</div>
      <div class="prod-price">S/ ${p.price.toFixed(2)}${p.old?`<del>S/ ${p.old.toFixed(2)}</del>`:''}</div>
    </div>
  </div>`).join('');

/* ---------- Reviews "database" (small local dataset, loaded progressively) ---------- */
const reviewDB=[
  {name:'Daniela R.',stars:5,text:'Excelente servicio y entrega rápida, 100% recomendado.'},
  {name:'Valeria M.',stars:5,text:'Me encantó la variedad de productos 💕'},
  {name:'Andrea C.',stars:5,text:'Mis productos favoritos desde que uso skincare coreano.'},
  {name:'María P.',stars:5,text:'La atención personalizada súper amable y recomiendan lo mejor ✨'},
  {name:'Camila S.',stars:4,text:'Buenos precios y llega bien empacado, repetiré compra.'},
  {name:'Fernanda L.',stars:5,text:'Mi piel cambió por completo en tres semanas, increíble.'},
  {name:'Rocío T.',stars:5,text:'El chat de ayuda me resolvió todas mis dudas al toque.'},
  {name:'Ximena B.',stars:4,text:'Envío puntual, empaque cuidado y productos originales.'},
];
let reviewsShown=0;
const reviewGrid=document.getElementById('reviewGrid');
document.getElementById('reviewCount').textContent=reviewDB.length;
function loadReviews(n){
  const next=reviewDB.slice(reviewsShown,reviewsShown+n);
  next.forEach(r=>{
    const el=document.createElement('div');
    el.className='review-card';
    el.innerHTML=`<div class="review-top"><div class="avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div></div></div><p class="review-text">${r.text}</p>`;
    reviewGrid.appendChild(el);
  });
  reviewsShown+=next.length;
  document.getElementById('loadMoreBtn').style.display = reviewsShown>=reviewDB.length ? 'none':'inline-flex';
}
loadReviews(4);
document.getElementById('loadMoreBtn').onclick=()=>loadReviews(4);

/* ---------- Chatbot (privacidad → chat, no página aparte) ---------- */
const chatPanel=document.getElementById('chatPanel');
const chatBody=document.getElementById('chatBody');
function botMsg(t){const d=document.createElement('div');d.className='msg bot';d.textContent=t;chatBody.appendChild(d);chatBody.scrollTop=chatBody.scrollHeight;}
function userMsg(t){const d=document.createElement('div');d.className='msg user';d.textContent=t;chatBody.appendChild(d);chatBody.scrollTop=chatBody.scrollHeight;}
let chatStarted=false;
function openChat(fromPrivacy){
  chatPanel.classList.add('open');
  if(!chatStarted){
    botMsg('¡Hola! Soy el asistente de Seoul Glow 🌸 ¿En qué puedo ayudarte?');
    chatStarted=true;
  }
  if(fromPrivacy){
    botMsg('Veo que querías ver nuestra Política de Privacidad. En Seoul Glow protegemos tus datos personales y solo los usamos para procesar tus pedidos y mejorar tu experiencia. ¿Quieres que te cuente algo específico (datos, pagos, cookies)?');
  }
}
function closeChat(){chatPanel.classList.remove('open');}
function sendChat(){
  const input=document.getElementById('chatInput');
  const val=input.value.trim();
  if(!val)return;
  userMsg(val);
  input.value='';
  setTimeout(()=>botMsg('Gracias por tu mensaje. Un asesor revisará esto — mientras tanto, ¿quieres que te muestre nuestras ofertas del día?'),600);
}
document.getElementById('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter')sendChat();});