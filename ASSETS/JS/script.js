document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300);
  }
});