// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fecha o menu ao clicar em um link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
