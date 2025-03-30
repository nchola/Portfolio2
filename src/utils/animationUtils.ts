
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, { 
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  });

  // Observe all section elements
  document.querySelectorAll('.portfolio-section').forEach(section => {
    observer.observe(section);
  });
};
