/* PH_IGNATOVA scripts */
const nav=document.getElementById('topnav');
if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>50));

// Mobile menu
const btn=document.getElementById('menuBtn');
const links=document.querySelector('.nav-links')||null;
if(btn){
  // Wrap nav links for mobile toggle
  const navEl=document.getElementById('topnav');
  const allLinks=[...navEl.querySelectorAll('a')];
  if(!navEl.querySelector('.nav-links')){
    const wrap=document.createElement('div');
    wrap.className='nav-links';
    allLinks.forEach(a=>wrap.appendChild(a));
    navEl.insertBefore(wrap,btn);
  }
  const nl=navEl.querySelector('.nav-links');
  btn.addEventListener('click',()=>{
    btn.classList.toggle('open');
    nl.classList.toggle('open');
    document.body.style.overflow=nl.classList.contains('open')?'hidden':'';
  });
  nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    btn.classList.remove('open');nl.classList.remove('open');document.body.style.overflow='';
  }));
}

// FAQ
document.querySelectorAll('.faq-question').forEach(b=>{
  b.addEventListener('click',()=>{
    const item=b.parentElement,open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!open)item.classList.add('open');
  });
});

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.photo-row,.package,.terms,.faq-item,.about,.about-full,.steps-section,.extras').forEach(el=>{
  el.classList.add('reveal');obs.observe(el);
});

// Photo protection
document.addEventListener('contextmenu',e=>{if(e.target.tagName==='IMG'||e.target.closest('.photo-cell')||e.target.closest('.package-photos'))e.preventDefault()});
document.querySelectorAll('img').forEach(i=>i.addEventListener('dragstart',e=>e.preventDefault()));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const h=a.getAttribute('href');if(h==='#')return;
    const t=document.querySelector(h);
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
  });
});
