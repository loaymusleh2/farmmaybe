document.addEventListener('DOMContentLoaded', () => {
  // Section Headline Animation
  const animatedElements = document.querySelectorAll('.section-headline');

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, {
      rootMargin: '0px', // No margin around the viewport
      threshold: 0.1    // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Log to confirm script is loaded (optional)
  console.log("Interactive script loaded and observer initialized for section headlines.");
});
