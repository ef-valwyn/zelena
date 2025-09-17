// Zelena Nautika interactions: parallax, reveal, responsive nav
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Responsive nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('is-open'));
    nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> nav.classList.remove('is-open')));
  }

  // Parallax backgrounds via data-bg
  const parallaxSections = document.querySelectorAll('.parallax');
  const setBg = el => {
    const src = el.getAttribute('data-bg');
    if (src) el.style.backgroundImage = `url('${src}')`;
  };
  parallaxSections.forEach(setBg);

  // Reveal-on-scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting){
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

  // Accessibility: reduce parallax motion for prefers-reduced-motion
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches){
    document.querySelectorAll('.parallax').forEach(sec=>{
      sec.style.backgroundAttachment = 'scroll';
    });
  }
})();
