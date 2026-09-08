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

const year=document.getElementById('year');
if(year) year.textContent=new Date().getFullYear();

// Use the portrait stored directly in the GitHub Pages assets folder.
const portrait=document.querySelector('.showcase-portrait img');
if(portrait){
  portrait.src='./assets/billal-hero.jpg?v=20260908-2245';
  portrait.alt='Portrait of Billal Hossain Shishir';
  portrait.onerror=()=>console.error('Portfolio portrait could not be loaded from assets/billal-hero.jpg');
}

// Replace resume-style numbers with information that is useful to recruiters.
const stats=document.querySelector('.stats');
if(stats){
  stats.innerHTML=`
    <div><strong>Problem Solving</strong><span>I enjoy breaking down complex problems and turning them into practical solutions.</span></div>
    <div><strong>Team Delivery</strong><span>Comfortable working with people, requirements, testing, feedback and clear communication.</span></div>
    <div><strong>Current Focus</strong><span>Building skills in AI, data, software and trustworthy technology for real-world impact.</span></div>`;

  const style=document.createElement('style');
  style.textContent=`
    .stats strong{display:block;font-size:1.05rem!important;color:#9b80ff;margin-bottom:8px;line-height:1.25}
    .stats span{font-size:.8rem!important;color:#9ea3b4;line-height:1.55}
  `;
  document.head.appendChild(style);
}
