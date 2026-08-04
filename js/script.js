/* ---------- Utility carousel ---------- */
const utilSlides = document.querySelectorAll('.util-slide');
const utilDotsEl = document.getElementById('utilDots');
if (utilSlides.length && utilDotsEl) {
  utilSlides.forEach((_,i)=>{const d=document.createElement('span');if(i===0)d.classList.add('active');utilDotsEl.appendChild(d);});
  let utilIdx=0;
  setInterval(()=>{
    utilSlides[utilIdx].classList.remove('active');
    utilDotsEl.children[utilIdx].classList.remove('active');
    utilIdx=(utilIdx+1)%utilSlides.length;
    utilSlides[utilIdx].classList.add('active');
    utilDotsEl.children[utilIdx].classList.add('active');
  },3500);
}

/* ---------- Hero carousel ---------- */
const heroTrack = document.getElementById('heroTrack');

if (heroTrack) {

  const heroSlides = heroTrack.querySelectorAll('.hero-slide');
  const heroSlideCount = heroSlides.length;
  const heroDotsEl = document.getElementById('heroDots');

  let heroIdx = 0;

  /* Crear indicadores */
  if (heroDotsEl) {

    for (let i = 0; i < heroSlideCount; i++) {

      const d = document.createElement('span');

      if (i === 0) {
        d.classList.add('active');
      }

      d.onclick = () => {
        heroIdx = i;
        renderHero();
      };
      heroDotsEl.appendChild(d);
    }

  }

  /* Mostrar slide */
  function renderHero() {

    heroTrack.style.transform =
      `translateX(-${heroIdx * 100}%)`;


    /* Activar animaciones del slide */
    heroSlides.forEach((slide, i) => {

      slide.classList.toggle(
        'active',
        i === heroIdx
      );

    });


    /* Actualizar puntos */
    if (heroDotsEl) {

      [...heroDotsEl.children].forEach((dot, i) => {

        dot.classList.toggle(
          'active',
          i === heroIdx
        );

      });

    }

  }


  /* Cambiar slide */
  function moveHero(dir) {

    heroIdx =
      (heroIdx + dir + heroSlideCount)
      % heroSlideCount;

    renderHero();

  }


  /* Mostrar correctamente el primer slide */
  renderHero();


  /* Cambio automático */
  setInterval(() => {

    moveHero(1);

  }, 5000);


  /* Hacer la función accesible desde los botones HTML */
  window.moveHero = moveHero;
}
/* ---------- Feature carousel ---------- */
const featureTrack=document.getElementById('featureTrack');
if (featureTrack) {
  const featureCount=featureTrack.children.length;
  const featureDotsEl=document.getElementById('featureDots');
  let featureIdx=0;
  for(let i=0;i<featureCount;i++){const d=document.createElement('span');if(i===0)d.classList.add('active');featureDotsEl.appendChild(d);}
  setInterval(()=>{
    featureDotsEl.children[featureIdx].classList.remove('active');
    featureIdx=(featureIdx+1)%featureCount;
    featureTrack.style.transform=`translateX(-${featureIdx*100}%)`;
    featureDotsEl.children[featureIdx].classList.add('active');
  },4000);
}

/* ---------- Product "database" ---------- */
const prodGrid=document.getElementById('prodGrid');
if (prodGrid) {
  const products=[
    {brand:'Anua',name:'Heartleaf 77% Soothing Toner',price:79.90,old:99.90,badge:'-20%',rating:4.5,reviews:120,img:'../Img/7 Rice Ceramide Hydrating Barrier Serum.png'},
    {brand:'COSRX',name:'Advanced Snail 96 Mucin Power Essence',price:89.90,old:105.90,badge:'-15%',rating:4.6,reviews:98,img:'../Img/Anua, Heartleaf Quercetinol™ Pore Deep Cleansing Foam.png'},
    {brand:'Beauty of Joseon',name:'Relief Sun: Rice + Probiotics SPF50+',price:69.90,badge:null,rating:4.7,reviews:210,img:'../Img/BEAUTY OF JOSEON RELIEF SUN  RICE + PROBIOTICS.png'},
    {brand:'iUNIK',name:'Centella Calming Gel Cream',price:89.90,old:99.90,badge:'-10%',rating:4.5,reviews:76,img:'../Img/Beauty of Joseon, Suero calmante.png'},
    {brand:'SKIN1004',name:'Madagascar Centella Ampoule',price:89.90,badge:null,rating:4.4,reviews:145,img:'../Img/CREMA COSRX ADVANCE SNAIL.png'},
  ];
  prodGrid.innerHTML=products.map(p=>`
    <div class="prod-card">
      <div class="prod-img">${p.badge?`<span class="prod-badge">${p.badge}</span>`:''}<img src="${p.img}" alt="${p.name}"></div>
      <div class="prod-body">
        <div class="prod-brand">${p.brand}</div>
        <div class="prod-name">${p.name}</div>
        <div style="font-size:11.5px;color:#c99;margin-bottom:4px;">★★★★★ (${p.reviews})</div>
        <div class="prod-price">S/ ${p.price.toFixed(2)}${p.old?`<del>S/ ${p.old.toFixed(2)}</del>`:''}</div>
      </div>
    </div>`).join('');
}

/* ---------- Reviews "database" (small local dataset, loaded progressively) ---------- */
const reviewGrid=document.getElementById('reviewGrid');
if (reviewGrid) {
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
  const reviewCountEl=document.getElementById('reviewCount');
  if (reviewCountEl) reviewCountEl.textContent=reviewDB.length;
  function loadReviews(n){
    const next=reviewDB.slice(reviewsShown,reviewsShown+n);
    next.forEach(r=>{
      const el=document.createElement('div');
      el.className='review-card';
      el.innerHTML=`<div class="review-top"><div class="avatar">${r.name[0]}</div><div><div class="review-name">${r.name}</div><div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div></div></div><p class="review-text">${r.text}</p>`;
      reviewGrid.appendChild(el);
    });
    reviewsShown+=next.length;
    const loadMoreBtn=document.getElementById('loadMoreBtn');
    if (loadMoreBtn) loadMoreBtn.style.display = reviewsShown>=reviewDB.length ? 'none':'inline-flex';
  }
  loadReviews(4);
  const loadMoreBtn=document.getElementById('loadMoreBtn');
  if (loadMoreBtn) loadMoreBtn.onclick=()=>loadReviews(4);
}
const chatPanel=document.getElementById('chatPanel');
const chatBody=document.getElementById('chatBody');
function botMsg(t){if(!chatBody)return;const d=document.createElement('div');d.className='msg bot';d.textContent=t;chatBody.appendChild(d);chatBody.scrollTop=chatBody.scrollHeight;}
function userMsg(t){if(!chatBody)return;const d=document.createElement('div');d.className='msg user';d.textContent=t;chatBody.appendChild(d);chatBody.scrollTop=chatBody.scrollHeight;}
let chatStarted=false;
function openChat(fromPrivacy){
  if(!chatPanel)return;
  chatPanel.classList.add('open');
  if(!chatStarted){
    botMsg('¡Hola! Soy el asistente de Seoul Glow 🌸 ¿En qué puedo ayudarte?');
    chatStarted=true;
  }
  if(fromPrivacy){
    botMsg('Veo que querías ver nuestra Política de Privacidad. En Seoul Glow protegemos tus datos personales y solo los usamos para procesar tus pedidos y mejorar tu experiencia. ¿Quieres que te cuente algo específico (datos, pagos, cookies)?');
  }
}
function closeChat(){if(chatPanel)chatPanel.classList.remove('open');}
function sendChat(){
  const input=document.getElementById('chatInput');
  if(!input)return;
  const val=input.value.trim();
  if(!val)return;
  userMsg(val);
  input.value='';
  setTimeout(()=>botMsg('Gracias por tu mensaje. Un asesor revisará esto — mientras tanto, ¿quieres que te muestre nuestras ofertas del día?'),600);
}
const chatInputEl=document.getElementById('chatInput');
if (chatInputEl) chatInputEl.addEventListener('keydown',e=>{if(e.key==='Enter')sendChat();});

/* ============================================================
   SOBRE NOSOTROS
   ============================================================ */
const tabBtns = document.querySelectorAll('.tab-btn');
if (tabBtns.length) {
  const targets = [...tabBtns].map(b => document.getElementById(b.dataset.target)).filter(Boolean);

  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const el = document.getElementById(btn.dataset.target);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  function setActiveTab(id){
    tabBtns.forEach(b=>b.classList.toggle('on', b.dataset.target===id));
  }

  const aboutSpy = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) setActiveTab(entry.target.id);
    });
  },{ rootMargin:'-40% 0px -50% 0px', threshold:0 });

  targets.forEach(el=>aboutSpy.observe(el));
  setActiveTab('historia');
}
/* ============================================================
   MI CUENTA
   ============================================================ */

/* ---------- Sidebar tabs ---------- */
const accountNav = document.getElementById('accountNav');
if (accountNav) {
  const navItems = accountNav.querySelectorAll('.account-nav-item[data-panel]');
  const panels = document.querySelectorAll('.account-tabpanel');

  function showAccountPanel(name){
    panels.forEach(p => p.classList.toggle('on', p.dataset.panel === name));
    navItems.forEach(b => b.classList.toggle('on', b.dataset.panel === name));
  }

  navItems.forEach(btn=>{
    btn.addEventListener('click', ()=> showAccountPanel(btn.dataset.panel));
  });
}

/* ---------- Modales (Registro / Agregar dirección) ---------- */
function openModal(id){
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}
function closeModal(modalEl){
  if (modalEl) modalEl.classList.remove('open');
}

document.querySelectorAll('[data-modal]').forEach(trigger=>{
  trigger.addEventListener('click', (e)=>{
    e.preventDefault();
    openModal(trigger.dataset.modal);
  });
});

document.querySelectorAll('.modal-overlay').forEach(overlay=>{
  overlay.addEventListener('click', (e)=>{
    if (e.target === overlay) closeModal(overlay);
  });
  const closeBtn = overlay.querySelector('[data-close-modal]');
  if (closeBtn) closeBtn.addEventListener('click', ()=> closeModal(overlay));
});

document.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
  }
});

const switchToLogin = document.getElementById('switchToLogin');
if (switchToLogin) {
  switchToLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    closeModal(document.getElementById('registerModal'));
    if (accountNav) {
      const loginBtn = accountNav.querySelector('[data-panel="login"]');
      if (loginBtn) loginBtn.click();
    }
  });
}

/* ---------- Mis favoritos (datos de ejemplo) ---------- */
const favoritesGrid = document.getElementById('favoritesGrid');
if (favoritesGrid) {
  const favorites = [
    {brand:'Anua',name:'Heartleaf 77% Soothing Toner',price:79.90,old:99.90,img:'../Img/7 Rice Ceramide Hydrating Barrier Serum.png'},
    {brand:'COSRX',name:'Advanced Snail 96 Mucin Power Essence',price:89.90,old:105.90,img:'../Img/Anua, Heartleaf Quercetinol™ Pore Deep Cleansing Foam.png'},
    {brand:'Beauty of Joseon',name:'Relief Sun: Rice + Probiotics SPF50+',price:69.90,img:'../Img/BEAUTY OF JOSEON RELIEF SUN  RICE + PROBIOTICS.png'},
    {brand:'iUNIK',name:'Centella Calming Gel Cream',price:89.90,old:99.90,img:'../Img/Beauty of Joseon, Suero calmante.png'},
  ];
  function renderFavorites(){
    favoritesGrid.innerHTML = favorites.map((p,i)=>`
      <div class="prod-card">
        <button class="prod-remove" data-idx="${i}" title="Quitar de favoritos">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.2-4.4-9.5-8.6C1 9 2.4 5.5 6 5.5c2 0 3.5 1.2 6 3 2.5-1.8 4-3 6-3 3.6 0 5 3.5 3.5 6.9C19.2 16.6 12 21 12 21z"/></svg>
        </button>
        <div class="prod-img"><img src="${p.img}" alt="${p.name}"></div>
        <div class="prod-body">
          <div class="prod-brand">${p.brand}</div>
          <div class="prod-name">${p.name}</div>
          <div class="prod-price">S/ ${p.price.toFixed(2)}${p.old?`<del>S/ ${p.old.toFixed(2)}</del>`:''}</div>
        </div>
      </div>`).join('');

    favoritesGrid.querySelectorAll('.prod-remove').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        favorites.splice(Number(btn.dataset.idx), 1);
        renderFavorites();
      });
    });
  }
  renderFavorites();
}
/* ---------- Catálogo dinámico ---------- */
const catalogGrid = document.getElementById('catalogGrid');
if (catalogGrid) {

  // "todas" en piel significa que el producto aplica a cualquier tipo de piel
  const catalogProducts = [

 {brand:'ANUA', name:'7 Rice Ceramide Hydrating Barrier Serum 50 ml', price:79.90, old:99.90, badge:'-20%', categoria:'tonicos', piel:['sensible'], destacado:5, nuevo:false, img:'../Img/7 Rice Ceramide Hydrating Barrier Serum.png'},




{brand:'SKI1004', name:'Madagascar Centella, Hyalu-Cica Brightening Toner, 7,10 fl oz (210 ml)', price:89.90, old:null, badge:null, categoria:'serums', piel:['mixta'], destacado:11, nuevo:false, img:'../Img/Madagascar Centella, Hyalu-Cica Brightening Toner.png'},
{brand:'ANUA', name:'Heartleaf 77% Soothing Toner', price:79.90, old:99.90, badge:'-20%', categoria:'tonicos', piel:['sensible'], destacado:5, nuevo:false, img:'../Img/Anua, Heartleaf Quercetinol™ Pore Deep Cleansing Foam.png'},















    {brand:'ANUA', name:'Heartleaf 77% Soothing Toner', price:79.90, old:99.90, badge:'-20%', categoria:'tonicos', piel:['sensible'], destacado:5, nuevo:false, img:'../Img/7 Rice Ceramide Hydrating Barrier Serum.png'},
    {brand:'SKI1004', name:'Madagascar Centella, Hyalu-Cica Brightening Toner, 7,10 fl oz (210 ml)', price:89.90, old:null, badge:null, categoria:'serums', piel:['mixta'], destacado:11, nuevo:false, img:'../Img/Madagascar Centella, Hyalu-Cica Brightening Toner.png'},
    {brand:'COSRX', name:'Advanced Snail 96 Mucin Power Essence', price:89.90, old:105.90, badge:'-15%', categoria:'serums', piel:['todas'], destacado:6, nuevo:false, img:'../Img/CREMA COSRX ADVANCE SNAIL.png'},
    {brand:'ISNTREE', name:'Hyaluronic Acid Airy Sun Stick SPF50+', price:69.90, old:null, badge:null, categoria:'protectores', piel:['todas'], destacado:12, nuevo:true, img:'../Img/Niacinamide 10% serum.png'}
    {brand:'COSRX', name:'Advanced Snail 96 Mucin Power Essence', price:89.90, old:105.90, badge:'-15%', categoria:'serums', piel:['todas'], destacado:6, nuevo:false, img:'../Img/Anua, Heartleaf Quercetinol™ Pore Deep Cleansing Foam.png'},
    {brand:'BEAUTY OF JOSEON', name:'Relief Sun SPF50+ Rice + Probiotics', price:69.90, old:null, badge:'NUEVO', categoria:'protectores', piel:['mixta'], destacado:2, nuevo:true, img:'../Img/BEAUTY OF JOSEON RELIEF SUN  RICE + PROBIOTICS.png'},
    {brand:'ISNTREE', name:'Centella Calming Gel Cream', price:89.90, old:99.90, badge:'-10%', categoria:'cremas', piel:['grasa'], destacado:3, nuevo:false, img:'../Img/Beauty of Joseon, Suero calmante.png'},
    -{brand:'SKI1004', name:'Madagascar Centella Ampoule', price:89.90, old:null, badge:null, categoria:'serums', piel:['sensible'], destacado:4, nuevo:true, img:'../Img/CREMA COSRX ADVANCE SNAIL.png'},
    {brand:'CERAVE', name:'Moisturizing Lotion', price:89.90, old:null, badge:null, categoria:'cremas', piel:['seca'], destacado:7, nuevo:false, img:'../Img/Dynasty Cream.png'},
    {brand:'GARNIER', name:'Super UV Invisible Serum SPF50+', price:72.90, old:null, badge:null, categoria:'protectores', piel:['grasa'], destacado:8, nuevo:false, img:'../Img/Espuma Limpiadora Madagascar Centella Poremizing Deep Cleansing Foam.png'},
    {brand:'LA ROCHE-POSAY', name:'Hyalu B5 Serum', price:129.90, old:null, badge:null, categoria:'serums', piel:['madura'], destacado:1, nuevo:false, img:'../Img/Full Fit Propolis Synergy Toner.png'},
    {brand:'NUMBUZIN', name:'Pink Collagen Gel Cream', price:69.90, old:null, badge:null, categoria:'cremas', piel:['seca'], destacado:9, nuevo:true, img:'../Img/Limpiador Facial En Gel Cosrx Advanced Snail Mucin Gel Cleanser.png'},
    {brand:'MEDIHEAL', name:'Tea Tree Care Solution Essential Mask', price:15.90, old:null, badge:null, categoria:'limpiadores', piel:['grasa'], destacado:10, nuevo:false, img:'../Img/Madagascar Centella Tone Brightening Ampolla de cápsulas.png'},
    {brand:'ISNTREE', name:'Hyaluronic Acid Airy Sun Stick SPF50+', price:69.90, old:null, badge:null, categoria:'protectores', piel:['todas'], destacado:12, nuevo:true, img:'../Img/Niacinamide 10% serum.png'}
    










  ]
  
  const priceRangeEl = document.getElementById('priceRange');
  const priceRangeMaxEl = document.getElementById('priceRangeMax');
  const sortSelectEl = document.getElementById('sortSelect');
  const resultsCountEl = document.getElementById('resultsCount');
  const applyBtn = document.getElementById('applyFiltersBtn');
  const LIMITE = 12; // siempre se muestran máximo 12 productos

  function pieles(){
    return [...document.querySelectorAll('.filtro-piel:checked')].map(c=>c.value);
  }
  function categorias(){
    return [...document.querySelectorAll('.filtro-categoria:checked')].map(c=>c.value);
  }

  function renderCard(p){
    return `
      <article class="catalog-card">
        <div class="card-image">
          ${p.badge ? `<span class="discount">${p.badge}</span>` : ''}
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div class="card-body">
          <small class="brand">${p.brand}</small>
          <h3>${p.name}</h3>
          <div class="tags"><span>${etiquetaPiel(p.piel)}</span></div>
          <div class="price-row">
            <strong>S/${p.price.toFixed(2)}</strong>
            ${p.old ? `<del>S/${p.old.toFixed(2)}</del>` : ''}
          </div>
          <button class="btn-cart">Añadir al carrito</button>
        </div>
      </article>`;
  }

  function etiquetaPiel(piel){
    const nombres = {normal:'Piel normal', grasa:'Piel grasa', mixta:'Piel mixta', sensible:'Piel sensible', madura:'Piel madura',todas:'Todo tipo de piel'};
    return piel.map(p=>nombres[p]).join(' / ');
  }

  function renderCatalog(){
    const pielSel = pieles();
    const catSel = categorias();
    const precioMax = priceRangeEl ? Number(priceRangeEl.value) : 300;

    let filtrados = catalogProducts.filter(p=>{
      const pasaPiel = pielSel.length === 0 || p.piel.includes('todas') || p.piel.some(pp => pielSel.includes(pp));
      const pasaCat = catSel.length === 0 || catSel.includes(p.categoria);
      const pasaPrecio = p.price <= precioMax;
      return pasaPiel && pasaCat && pasaPrecio;
    });

    // Orden
    const orden = sortSelectEl ? sortSelectEl.value : 'vendidos';
    if (orden === 'menor') filtrados.sort((a,b)=>a.price-b.price);
    else if (orden === 'mayor') filtrados.sort((a,b)=>b.price-a.price);
    else if (orden === 'novedades') filtrados.sort((a,b)=>(b.nuevo?1:0)-(a.nuevo?1:0));
    else filtrados.sort((a,b)=>a.destacado-b.destacado); // "más vendidos"

    const totalFiltrado = filtrados.length;
    const mostrados = filtrados.slice(0, LIMITE);

    catalogGrid.innerHTML = mostrados.map(renderCard).join('');
    if (resultsCountEl) {
      resultsCountEl.textContent = `Mostrando 1–${mostrados.length} de ${totalFiltrado} productos`;
    }
  }

  if (priceRangeEl) {
    priceRangeEl.addEventListener('input', ()=>{
      if (priceRangeMaxEl) {
        priceRangeMaxEl.textContent = priceRangeEl.value >= 300 ? 'S/300+' : `S/${priceRangeEl.value}`;
      }
    });
  }
  if (sortSelectEl) sortSelectEl.addEventListener('change', renderCatalog);
  if (applyBtn) applyBtn.addEventListener('click', renderCatalog);

  renderCatalog(); // primera carga: sin filtros, 12 productos por defecto
}