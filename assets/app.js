// Shared shell: nav, menu, footer, smooth scroll, page transitions, cursor, reveals.
gsap.registerPlugin(ScrollTrigger);
const PHONE = '919213648367';
const page = location.pathname.split('/').pop() || 'index.html';
const LINKS = [['index.html','Home'],['properties.html','Properties'],['areas.html','Areas'],['about.html','About'],['contact.html','Contact']];

document.body.insertAdjacentHTML('afterbegin', `
<div id="curtain"><span>The Real Estate of Vadodara</span></div>
<div id="cursor"></div>
<header class="nav"><a class="logo" href="index.html">TREV<sup>®</sup></a>
 <div class="links">${LINKS.map(([h,t])=>`<a href="${h}" class="${h===page?'on':''}">${t}</a>`).join('')}</div>
 <button class="burger" id="openMenu">Menu <i></i></button></header>
<div id="menu"><button class="close" id="closeMenu">Close ✕</button>
 <nav>${LINKS.map(([h,t],i)=>`<a href="${h}"><span>${t}</span><sup>0${i+1}</sup></a>`).join('')}</nav>
 <div class="mimg"><img src="img/gbp3.jpg" alt=""></div>
 <div class="minfo"><span>Vihav Trade Center, Bhayli</span><a href="tel:+${PHONE}">+91 92136 48367</a><span>Open 24 hours</span></div></div>`);

document.body.insertAdjacentHTML('beforeend', `
<footer class="foot"><div class="eyebrow">Ready when you are</div><br>
 <a href="contact.html" class="huge" data-view>Let's find<br>your <em>address.</em></a>
 <div class="cols">
  <div><b>Visit</b>Vihav Trade Center, near Waves Club,<br>Bhayli, Vadodara 390009</div>
  <div><b>Talk</b><a href="tel:+${PHONE}">+91 92136 48367</a><a href="https://wa.me/${PHONE}">WhatsApp</a></div>
  <div><b>Explore</b>${LINKS.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}</div>
  <div><b>Hours</b>Open 24 hours, 7 days<br><span class="gold">★★★★★</span> 5.0 on Google</div></div>
 <div class="base"><span>© 2026 The Real Estate of Vadodara</span><span>Demo by KORTIQ · Listings are illustrative</span></div></footer>
<a class="wa" href="https://wa.me/${PHONE}" aria-label="WhatsApp"><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-4-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.1z"/></svg></a>`);

// smooth scroll
const lenis = new Lenis({lerp:.09});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(t => lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);

// page transitions: curtain lifts on enter, drops before leaving
const enter = gsap.timeline();
enter.to('#curtain', {yPercent:-100, duration:1.1, ease:'expo.inOut', delay:.15});
window.PAGE_IN = enter; // pages chain their intro onto this
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a || a.target || e.metaKey || e.ctrlKey) return;
  const h = a.getAttribute('href');
  if (!h || h.startsWith('#') || h.startsWith('http') || h.startsWith('tel') ) return;
  e.preventDefault();
  gsap.timeline().set('#curtain',{yPercent:100}).to('#curtain',{yPercent:0,duration:.8,ease:'expo.inOut',onComplete:()=>location.href=h});
});
addEventListener('pageshow', e => { if (e.persisted) gsap.set('#curtain',{yPercent:-100}); });

// menu
const mtl = gsap.timeline({paused:true})
 .to('#menu',{clipPath:'inset(0 0 0% 0)',duration:.9,ease:'expo.inOut'})
 .from('#menu nav a span',{yPercent:110,stagger:.06,duration:.8,ease:'expo.out'},'-=.4')
 .from('#menu .mimg img',{scale:1.4,duration:1.2,ease:'expo.out'},'<');
openMenu.onclick = () => { mtl.play(); lenis.stop(); };
closeMenu.onclick = () => { mtl.reverse(); lenis.start(); };

// cursor
const cursorEl = document.getElementById('cursor');
const cx = gsap.quickTo(cursorEl,'x',{duration:.25}), cy = gsap.quickTo(cursorEl,'y',{duration:.25});
addEventListener('mousemove', e => { cx(e.clientX); cy(e.clientY); });
document.addEventListener('mouseover', e => {
  const v = e.target.closest('[data-view]'), l = e.target.closest('a,button,select,input');
  cursorEl.className = v ? 'view' : l ? 'big' : ''; cursorEl.textContent = v ? 'View' : '';
});

// magnetic buttons
document.addEventListener('mousemove', e => {
  const b = e.target.closest('.btn'); if (!b) return;
  const r = b.getBoundingClientRect();
  gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.3,duration:.4});
  b.onmouseleave = () => gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'});
});

// split headline helper: wraps each line-span for a rise-in
window.riseLines = (sel, tl, at) => {
  document.querySelectorAll(sel).forEach(h => {
    h.innerHTML = h.innerHTML.split('<br>').map(l => `<span class="split-line"><span>${l}</span></span>`).join('');
  });
  (tl||gsap).from(sel + ' .split-line>span', {yPercent:110, stagger:.08, duration:1.2, ease:'expo.out'}, at);
};

// generic reveals (call after pages inject content)
window.reveals = () => {
  gsap.utils.toArray('[data-reveal]').forEach(el => gsap.to(el,{opacity:1,y:0,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
  gsap.utils.toArray('.imgreveal').forEach(el => gsap.to(el,{clipPath:'inset(0% 0 0 0)',duration:1.4,ease:'expo.inOut',scrollTrigger:{trigger:el,start:'top 85%'}}));
  gsap.utils.toArray('[data-parallax]').forEach(el => gsap.fromTo(el,{yPercent:-10},{yPercent:10,ease:'none',scrollTrigger:{trigger:el.parentElement,scrub:true}}));
  gsap.utils.toArray('.marquee .track').forEach(t => {
    t.innerHTML += t.innerHTML;
    const tw = gsap.to(t,{xPercent:-50,duration:40,ease:'none',repeat:-1});
    ScrollTrigger.create({onUpdate:s => gsap.to(tw,{timeScale:s.direction*(1+Math.abs(s.getVelocity())/400),duration:.3,overwrite:true})});
  });
  document.querySelectorAll('[data-n]').forEach(el => { const o={v:0}, d=+el.dataset.d||0;
    gsap.to(o,{v:+el.dataset.n,duration:2.2,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'},onUpdate:()=>el.textContent=o.v.toFixed(d)}); });
};

window.waLink = msg => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
