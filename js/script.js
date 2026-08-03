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

// Carrossel de jogos em destaque (autoplay, com loop contínuo e infinito)
const gameTrack = document.getElementById('carouselTrack');
const gamePrev = document.getElementById('carouselPrev');
const gameNext = document.getElementById('carouselNext');

if (gameTrack && gamePrev && gameNext) {
  const originalCards = Array.from(gameTrack.children);
  const originalCount = originalCards.length;

  // Clona o conjunto original antes e depois, pra não sobrar espaço vazio
  // e permitir um loop contínuo em qualquer direção.
  const cloneSet = () => originalCards.map(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('tabindex', '-1');
    return clone;
  });

  const fragBefore = document.createDocumentFragment();
  cloneSet().forEach(c => fragBefore.appendChild(c));
  gameTrack.insertBefore(fragBefore, gameTrack.firstChild);

  const fragAfter = document.createDocumentFragment();
  cloneSet().forEach(c => fragAfter.appendChild(c));
  gameTrack.appendChild(fragAfter);

  let gameIndex = originalCount; // começa no primeiro card "real" (bloco do meio)
  let gameAutoplay;

  function gameStep() {
    const gap = parseFloat(getComputedStyle(gameTrack).gap) || 20;
    return gameTrack.children[0].offsetWidth + gap;
  }

  function applyTransform() {
    gameTrack.style.transform = `translateX(-${gameIndex * gameStep()}px)`;
  }

  // Depois que a animação termina, se estivermos num bloco clonado,
  // "teleporta" de volta pro bloco real equivalente sem transição visível.
  function normalizeIndex() {
    if (gameIndex >= originalCount * 2) {
      gameIndex -= originalCount;
    } else if (gameIndex < originalCount) {
      gameIndex += originalCount;
    } else {
      return;
    }
    gameTrack.classList.add('no-transition');
    applyTransform();
    gameTrack.offsetHeight; // força reflow
    gameTrack.classList.remove('no-transition');
  }

  gameTrack.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'transform') normalizeIndex();
  });

  function goToGame(delta) {
    gameIndex += delta;
    applyTransform();
  }

  function startGameAutoplay() {
    gameAutoplay = setInterval(() => goToGame(1), 4000);
  }

  function restartGameAutoplay() {
    clearInterval(gameAutoplay);
    startGameAutoplay();
  }

  gamePrev.addEventListener('click', () => { goToGame(-1); restartGameAutoplay(); });
  gameNext.addEventListener('click', () => { goToGame(1); restartGameAutoplay(); });

  window.addEventListener('resize', () => {
    gameTrack.classList.add('no-transition');
    applyTransform();
    gameTrack.offsetHeight;
    gameTrack.classList.remove('no-transition');
  });

  applyTransform();
  startGameAutoplay();
}

// Carrossel de avaliações (uma por vez, com autoplay)
const reviewTrack = document.getElementById('reviewTrack');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');
const reviewDots = document.querySelectorAll('.testimonial-dot');

if (reviewTrack && reviewPrev && reviewNext && reviewDots.length) {
  const totalSlides = reviewTrack.children.length;
  let currentSlide = 0;
  let autoplayTimer;

  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    reviewTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    reviewDots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => goToSlide(currentSlide + 1), 6000);
  }

  function restartAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  reviewPrev.addEventListener('click', () => { goToSlide(currentSlide - 1); restartAutoplay(); });
  reviewNext.addEventListener('click', () => { goToSlide(currentSlide + 1); restartAutoplay(); });
  reviewDots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); restartAutoplay(); });
  });

  startAutoplay();
}
