// Gallery and mobile menu. Nothing else needs JavaScript.
(() => {
  const stage = document.getElementById('stage');
  const thumbs = document.querySelectorAll('.thumbs button');
  thumbs.forEach((b) => b.addEventListener('click', () => {
    stage.src = b.dataset.src;
    stage.alt = b.dataset.alt;
    thumbs.forEach((t) => t.setAttribute('aria-current', 'false'));
    b.setAttribute('aria-current', 'true');
  }));

  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('nav');
  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
})();
