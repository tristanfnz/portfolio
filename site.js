/* ============ MOBILE NAV ============ */
(function(){
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if(!hamburger || !mobileNav) return;

  function openMenu(){
    mobileNav.style.display='flex';
    requestAnimationFrame(()=>requestAnimationFrame(()=>mobileNav.classList.add('is-open')));
    hamburger.classList.add('is-open');
    document.body.style.overflow='hidden';
  }
  function closeMenu(){
    mobileNav.classList.remove('is-open');
    hamburger.classList.remove('is-open');
    document.body.style.overflow='';
    setTimeout(()=>{mobileNav.style.display='none';},300);
  }
  hamburger.addEventListener('click',()=>mobileNav.classList.contains('is-open')?closeMenu():openMenu());
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
})();

/* ============ REVEAL ON SCROLL ============ */
(function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('is-visible'); observer.unobserve(e.target); }
    });
  },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();

/* ============ ANIMATED STAT COUNTERS ============ */
(function(){
  const counters = document.querySelectorAll('.stat-row .num');
  if(!counters.length) return;
  const countObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const el = entry.target;
        const raw = el.textContent.trim();
        const match = raw.match(/^([^\d]*)(\d+(\.\d+)?)(.*)$/);
        if(match){
          const prefix=match[1], target=parseFloat(match[2]), decimals=match[3]?match[3].length-1:0, suffix=match[4];
          const dur=1200, start=performance.now();
          function tick(now){
            const p=Math.min((now-start)/dur,1);
            const cur=target*p;
            el.textContent=prefix+cur.toFixed(decimals)+suffix;
            if(p<1) requestAnimationFrame(tick); else el.textContent=prefix+target.toFixed(decimals)+suffix;
          }
          requestAnimationFrame(tick);
        }
        countObserver.unobserve(el);
      }
    });
  },{threshold:0.4});
  counters.forEach(c=>countObserver.observe(c));
})();

/* ============ LIGHTBOX ============ */
(function(){
  const imgs = document.querySelectorAll('.lightbox-img');
  if(!imgs.length) return;

  const groups = {};
  imgs.forEach(img=>{
    const g = img.dataset.group || 'default';
    if(!groups[g]) groups[g] = [];
    groups[g].push(img);
  });

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close">&#10005;</button>
    <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8592;</button>
    <img src="" alt="">
    <button class="lightbox-nav lightbox-next" aria-label="Next">&#8594;</button>
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('img');
  const captionEl = overlay.querySelector('.lightbox-caption');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');
  const closeBtn = overlay.querySelector('.lightbox-close');

  let currentGroup = [], currentIndex = 0;

  function show(){
    const img = currentGroup[currentIndex];
    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    captionEl.textContent = img.alt || '';
    const multi = currentGroup.length > 1;
    prevBtn.style.display = multi ? 'flex' : 'none';
    nextBtn.style.display = multi ? 'flex' : 'none';
  }
  function openAt(groupKey, index){
    currentGroup = groups[groupKey];
    currentIndex = index;
    show();
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  function next(){ currentIndex = (currentIndex+1) % currentGroup.length; show(); }
  function prev(){ currentIndex = (currentIndex-1+currentGroup.length) % currentGroup.length; show(); }

  imgs.forEach(img=>{
    img.addEventListener('click', ()=>{
      const g = img.dataset.group || 'default';
      const idx = groups[g].indexOf(img);
      openAt(g, idx);
    });
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) close(); });
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  document.addEventListener('keydown', (e)=>{
    if(!overlay.classList.contains('is-open')) return;
    if(e.key === 'Escape') close();
    if(e.key === 'ArrowRight') next();
    if(e.key === 'ArrowLeft') prev();
  });
})();
