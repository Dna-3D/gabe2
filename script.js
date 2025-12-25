// Wedding Invitation - Gabriel & Adaoma
// Pure JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to elements as they scroll into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  document.querySelectorAll('.epistle-card, .save-date-card, .story-card, .person-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });

  // Parallax effect for floating hearts
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        const scrollY = window.scrollY;
        const hearts = document.querySelectorAll('.floating-heart');
        
        hearts.forEach((heart, index) => {
          const speed = 0.05 + (index * 0.02);
          const yOffset = scrollY * speed;
          heart.style.transform = `translateY(${-yOffset}px)`;
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add sparkle effect on card hover
  document.querySelectorAll('.save-date-card, .person-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Console message for visitors
  console.log('%c💕 Gabriel & Adaoma 💕', 'font-size: 24px; color: #d4829d; font-family: cursive;');
  console.log('%cWelcome to our wedding invitation!', 'font-size: 14px; color: #c9944a;');
});

// Create heart SVG helper
function createHeartSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`;
}
