// Manufacturers Showcase functionality

class ManufacturersShowcase {
  constructor() {
    this.currentIndex = 0;
    this.cards = document.querySelectorAll(".manufacturer-card");
    this.controlBtns = document.querySelectorAll(".control-btn");
    this.indicators = document.querySelectorAll(".indicator");
    this.autoPlayInterval = null;
    this.autoPlayDelay = 4000; // 4 seconds

    this.init();
  }

  init() {
    if (this.cards.length === 0) return;

    this.setupEventListeners();
    this.startAutoPlay();
    this.updateDisplay();
  }

  setupEventListeners() {
    // Control buttons
    this.controlBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
    });

    // Indicators
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.goToSlide(index);
        this.resetAutoPlay();
      });
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.previousSlide();
        this.resetAutoPlay();
      } else if (e.key === "ArrowRight") {
        this.nextSlide();
        this.resetAutoPlay();
      }
    });

    // Touch/swipe support
    this.setupTouchEvents();

    // Pause auto-play on hover
    const showcase = document.querySelector(".manufacturers-showcase");
    if (showcase) {
      showcase.addEventListener("mouseenter", () => this.pauseAutoPlay());
      showcase.addEventListener("mouseleave", () => this.startAutoPlay());
    }
  }

  setupTouchEvents() {
    const showcase = document.querySelector(".showcase-container");
    if (!showcase) return;

    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    showcase.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    });

    showcase.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;

      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Only handle horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }
        this.resetAutoPlay();
      }
    });
  }

  goToSlide(index) {
    if (index < 0 || index >= this.cards.length) return;

    this.currentIndex = index;
    this.updateDisplay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateDisplay();
  }

  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateDisplay();
  }

  updateDisplay() {
    // Update cards
    this.cards.forEach((card, index) => {
      card.classList.remove("active", "prev", "next");

      if (index === this.currentIndex) {
        card.classList.add("active");
      } else if (
        index ===
        (this.currentIndex - 1 + this.cards.length) % this.cards.length
      ) {
        card.classList.add("prev");
      } else if (index === (this.currentIndex + 1) % this.cards.length) {
        card.classList.add("next");
      }
    });

    // Update control buttons
    this.controlBtns.forEach((btn, index) => {
      btn.classList.toggle("active", index === this.currentIndex);
    });

    // Update indicators
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });

    // Trigger custom event for analytics or other purposes
    document.dispatchEvent(
      new CustomEvent("manufacturerChanged", {
        detail: {
          index: this.currentIndex,
          manufacturer: this.cards[this.currentIndex]?.dataset.brand,
        },
      })
    );
  }

  startAutoPlay() {
    this.pauseAutoPlay(); // Clear any existing interval
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.startAutoPlay();
  }

  // Public methods for external control
  play() {
    this.startAutoPlay();
  }

  pause() {
    this.pauseAutoPlay();
  }

  getCurrentManufacturer() {
    return this.cards[this.currentIndex]?.dataset.brand;
  }

  goToManufacturer(brand) {
    const index = Array.from(this.cards).findIndex(
      (card) => card.dataset.brand === brand
    );
    if (index !== -1) {
      this.goToSlide(index);
    }
  }
}

// Initialize the showcase when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.manufacturersShowcase = new ManufacturersShowcase();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = ManufacturersShowcase;
}
