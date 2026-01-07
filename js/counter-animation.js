// Counter Animation on Scroll
function animateCounter(element, target, duration = 2000, suffix = "") {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 16);
}

// Intersection Observer for triggering animation on scroll
function initCounterAnimation() {
  const stats = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          stats.forEach((stat) => {
            const text = stat.textContent;
            const number = parseInt(text.replace(/\D/g, ""));
            const suffix = text.replace(/[0-9]/g, "");

            animateCounter(stat, number, 2000, suffix);
          });
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  // Observe the stats container
  const statsContainer = document.querySelector(".story-stats");
  if (statsContainer) {
    observer.observe(statsContainer);
  }
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCounterAnimation);
} else {
  initCounterAnimation();
}
