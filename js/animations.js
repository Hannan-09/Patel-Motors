// Advanced animations and 3D effects

// Parallax scrolling effect
function initParallax() {
  const parallaxElements = document.querySelectorAll(".floating-parts .part");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    parallaxElements.forEach((element, index) => {
      const speed = (index + 1) * 0.2;
      element.style.transform = `translateY(${rate * speed}px) rotate(${
        scrolled * 0.1
      }deg)`;
    });
  });
}

// 3D tilt effect for cards
function init3DTilt() {
  const tiltElements = document.querySelectorAll(
    ".feature-card, .category-card"
  );

  tiltElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    });
  });
}

// Floating animation for hero elements
function initFloatingAnimation() {
  const floatingElements = document.querySelectorAll(".floating-parts .part");

  floatingElements.forEach((element, index) => {
    const delay = index * 2;
    const duration = 6 + index * 2;

    element.style.animationDelay = `${delay}s`;
    element.style.animationDuration = `${duration}s`;
  });
}

// Stagger animation for grid items
function initStaggerAnimation() {
  const gridItems = document.querySelectorAll(
    ".features-grid .feature-card, .vehicle-categories .category-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
        }
      });
    },
    { threshold: 0.1 }
  );

  gridItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all 0.6s ease";
    observer.observe(item);
  });
}

// Button ripple effect
function initRippleEffect() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Magnetic effect for interactive elements
function initMagneticEffect() {
  const magneticElements = document.querySelectorAll(".btn, .social-link");

  magneticElements.forEach((element) => {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate(0, 0)";
    });
  });
}

// Initialize all animations
document.addEventListener("DOMContentLoaded", () => {
  initParallax();
  init3DTilt();
  initFloatingAnimation();
  initStaggerAnimation();
  initRippleEffect();
  initMagneticEffect();
});

// CSS for ripple effect
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Inject ripple CSS
const style = document.createElement("style");
style.textContent = rippleCSS;
document.head.appendChild(style);
