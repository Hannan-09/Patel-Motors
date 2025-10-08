// Contact page functionality

// Form validation
function initFormValidation() {
  const form = document.getElementById("contactForm");
  const inputs = form.querySelectorAll("input, select, textarea");

  // Add real-time validation
  inputs.forEach((input) => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => clearError(input));
  });

  // Handle form submission
  form.addEventListener("submit", handleFormSubmit);
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.name;
  let isValid = true;
  let errorMessage = "";

  // Remove existing error state
  clearError(field);

  // Required field validation
  if (!value) {
    isValid = false;
    errorMessage = `${getFieldLabel(fieldName)} is required`;
  } else {
    // Specific field validations
    switch (fieldName) {
      case "email":
        if (!isValidEmail(value)) {
          isValid = false;
          errorMessage = "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!isValidPhone(value)) {
          isValid = false;
          errorMessage = "Please enter a valid phone number";
        }
        break;
      case "name":
        if (value.length < 2) {
          isValid = false;
          errorMessage = "Name must be at least 2 characters long";
        }
        break;
    }
  }

  if (!isValid) {
    showError(field, errorMessage);
  } else {
    showSuccess(field);
  }

  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
}

function getFieldLabel(fieldName) {
  const labels = {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    subject: "Subject",
    message: "Message",
  };
  return labels[fieldName] || fieldName;
}

function showError(field, message) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.add("error");
  formGroup.classList.remove("success");

  let errorElement = formGroup.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "error-message";
    formGroup.appendChild(errorElement);
  }
  errorElement.textContent = message;
}

function showSuccess(field) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}

function clearError(field) {
  const formGroup = field.closest(".form-group");
  formGroup.classList.remove("error", "success");
}

function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const inputs = form.querySelectorAll("input, select, textarea");
  let isFormValid = true;

  // Validate all fields
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    submitForm(form);
  } else {
    // Focus on first error field
    const firstError = form.querySelector(
      ".form-group.error input, .form-group.error select, .form-group.error textarea"
    );
    if (firstError) {
      firstError.focus();
    }
  }
}

function submitForm(form) {
  const submitBtn = form.querySelector(".submit-btn");
  const originalText = submitBtn.querySelector(".btn-text").textContent;

  // Show loading state
  submitBtn.classList.add("loading");
  submitBtn.querySelector(".btn-text").textContent = "Sending...";

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Reset loading state
    submitBtn.classList.remove("loading");
    submitBtn.querySelector(".btn-text").textContent = originalText;

    // Show success message
    showSuccessMessage();

    // Reset form
    form.reset();

    // Clear all validation states
    const formGroups = form.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      group.classList.remove("error", "success");
    });
  }, 2000);
}

function showSuccessMessage() {
  // Create success notification
  const notification = document.createElement("div");
  notification.className = "success-notification";
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>Message sent successfully! We'll get back to you soon.</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
    `;

  document.body.appendChild(notification);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// FAQ functionality
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other FAQ items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Animation on scroll
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".contact-card, .faq-item, .map-container"
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

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.6s ease";
    observer.observe(element);
  });
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initFAQ();
  initSmoothScrolling();
  initScrollAnimations();
});

// Add CSS for animations
const animationCSS = `
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOutRight {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(100px);
    }
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.notification-content i {
    font-size: 1.2rem;
}
`;

// Inject animation CSS
const style = document.createElement("style");
style.textContent = animationCSS;
document.head.appendChild(style);
