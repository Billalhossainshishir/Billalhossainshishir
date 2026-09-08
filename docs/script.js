const menuButton=document.querySelector('.mobile-menu');
const topnav=document.querySelector('.topnav');
if(menuButton){menuButton.addEventListener('click',()=>{const open=topnav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});}

document.querySelectorAll('.topnav a').forEach(a=>a.addEventListener('click',()=>{topnav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const reveals=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}})},{threshold:.10});
reveals.forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.topnav a,.side-dock a')];
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}})},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>sectionObserver.observe(section));

document.getElementById('year').textContent=new Date().getFullYear();
