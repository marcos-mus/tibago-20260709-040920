// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-menu');
let menuOpen = false;

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', function () {
    menuOpen = !menuOpen;
    mobileNav.classList.toggle('open', menuOpen);
    menuToggle.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
  });

  // Close menu on link click (for smooth UX)
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuOpen = false;
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const yOffset = -72; // header height
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// Insert current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});