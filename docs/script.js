'use strict';

document.documentElement.classList.add('js');

const menuButton = document.querySelector('.mobile-menu');
const topnav = document.querySelector('.topnav');

function setMenuOpen(open) {
  topnav?.classList.toggle('open', open);
  menuButton?.setAttribute('aria-expanded', String(open));
  menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (menuButton && topnav) {
  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  topnav.addEventListener('click', event => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!topnav.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

if ('IntersectionObserver' in window) {
  const reveals = document.querySelectorAll('.reveal');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    reveals.forEach(element => {
      revealObserver.observe(element);
      element.classList.add('reveal-ready');
    });
  }

  // Only home-page section links participate; case-study navigation stays active.
  const navLinks = [...document.querySelectorAll('.topnav a[href^="#"]')];
  if (navLinks.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of navLinks) {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
  }
}
