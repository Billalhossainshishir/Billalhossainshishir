const menuButton=document.querySelector('.mobile-menu');
const topnav=document.querySelector('.topnav');
if(menuButton&&topnav){
  menuButton.addEventListener('click',()=>{
    const open=topnav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
}

document.querySelectorAll('.topnav a').forEach(a=>a.addEventListener('click',()=>{
  topnav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const reveals=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:.08});
reveals.forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.topnav a')];
const sectionObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>sectionObserver.observe(section));

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

// Use Billal's original supplied DataEng photo. No generated image and no replacement asset.
const portrait=document.querySelector('.portrait-shell img');
if(portrait){
  portrait.src='./assets/billal-hero.jpg?v=20260909-1328';
  portrait.alt='Billal Hossain Shishir at DataEng Australia';
  portrait.style.display='block';
  portrait.style.width='100%';
  portrait.style.height='100%';
  portrait.style.objectFit='cover';
  portrait.style.objectPosition='18% 42%';
  portrait.style.transform='scale(1.02)';
  portrait.style.opacity='1';
}
