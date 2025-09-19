document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('section, .card-fun, .speech-bubble');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -10%' });

  targets.forEach(el => {
    el.classList.add('will-animate');
    observer.observe(el);
  });
});
