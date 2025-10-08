// Products Catalog Functionality

// All products data
const allProducts = [
  // Bolero Products
  {
    id: "bolero-door",
    name: "Door Panel",
    description: "High-quality door panels with perfect fit and finish",
    category: "bolero",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Perfect OEM fit for Mahindra Bolero",
      "High-strength steel construction",
      "Weather-resistant coating",
      "Easy bolt-on installation",
      "Includes door handle mounting points",
    ],
  },
  {
    id: "bolero-bumper",
    name: "Front Bumper",
    description: "Durable front bumper designed for maximum protection",
    category: "bolero",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Impact-resistant ABS plastic",
      "Integrated fog light mounts",
      "Crash-tested design",
      "UV-resistant finish",
      "Professional installation recommended",
    ],
  },
  {
    id: "bolero-fender",
    name: "Fender",
    description: "Premium quality fenders for enhanced vehicle protection",
    category: "bolero",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Precision-molded for perfect fit",
      "Corrosion-resistant material",
      "Lightweight yet durable",
      "Factory color-matched finish",
      "Anti-rust treatment included",
    ],
  },
  {
    id: "bolero-mudguard",
    name: "Mudguard",
    description: "Heavy-duty mudguards for all-terrain protection",
    category: "bolero",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Heavy-duty rubber construction",
      "Flexible design for all terrains",
      "Easy clip-on installation",
      "Reduces mud and debris splash",
      "Long-lasting durability",
    ],
  },

  // Swift Products
  {
    id: "swift-door",
    name: "Door Panel",
    description: "Precision-engineered door panels for perfect fit",
    category: "swift",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Lightweight aluminum construction",
      "Perfect aerodynamic design",
      "Sound dampening properties",
      "Integrated window mechanisms",
      "Factory-grade quality finish",
    ],
  },
  {
    id: "swift-bumper",
    name: "Rear Bumper",
    description: "Stylish and durable rear bumper assembly",
    category: "swift",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Aerodynamic design for fuel efficiency",
      "Integrated reflector mounts",
      "Impact-absorbing foam core",
      "Perfect color matching available",
      "Easy replacement process",
    ],
  },
  {
    id: "swift-chassis",
    name: "Chassis Components",
    description: "High-strength chassis parts for structural integrity",
    category: "swift",
    partType: "engine",
    image: "assets/bolero.png",
    features: [
      "High-tensile steel construction",
      "Precision welding joints",
      "Enhanced structural rigidity",
      "Stress-tested for safety",
      "OEM specification compliance",
    ],
  },

  // Pickup Products
  {
    id: "pickup-bed",
    name: "Truck Bed",
    description: "Heavy-duty truck bed for maximum cargo capacity",
    category: "pickup",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Heavy-gauge steel construction",
      "Anti-slip bed liner included",
      "Reinforced corner design",
      "Drainage system integrated",
      "Commercial-grade durability",
    ],
  },
  {
    id: "pickup-guard",
    name: "Bull Bar",
    description: "Heavy-duty bull bar for enhanced front protection",
    category: "pickup",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Heavy-duty steel tube construction",
      "Powder-coated finish",
      "Integrated mounting brackets",
      "Crash-tested design",
      "Professional installation included",
    ],
  },
  {
    id: "pickup-tailgate",
    name: "Tailgate",
    description: "Robust tailgate assembly with smooth operation",
    category: "pickup",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Heavy-duty hinge system",
      "Smooth operation mechanism",
      "Integrated locking system",
      "Weather-sealed design",
      "Easy maintenance access",
    ],
  },

  // Tata Products
  {
    id: "tata-cabin",
    name: "Driver Cabin",
    description: "Complete driver cabin assembly for commercial vehicles",
    category: "tata",
    partType: "body",
    image: "assets/bolero.png",
    features: [
      "Ergonomic driver seating",
      "Enhanced visibility design",
      "Noise reduction insulation",
      "Climate control ready",
      "Safety compliance certified",
    ],
  },
  {
    id: "tata-chassis",
    name: "Heavy Duty Chassis",
    description: "Reinforced chassis for heavy commercial applications",
    category: "tata",
    partType: "engine",
    image: "assets/bolero.png",
    features: [
      "Ultra-high strength steel",
      "Reinforced load-bearing points",
      "Corrosion-resistant coating",
      "Heavy-duty suspension mounts",
      "Commercial vehicle certified",
    ],
  },

  // Hyundai Products
  {
    id: "hyundai-door",
    name: "Door Assembly",
    description: "Modern door assembly with integrated electronics",
    category: "hyundai",
    partType: "electrical",
    image: "assets/bolero.png",
    features: [
      "Integrated electronic systems",
      "Smart key compatibility",
      "Power window mechanisms",
      "Advanced safety features",
      "Modern aesthetic design",
    ],
  },
  {
    id: "hyundai-bumper",
    name: "Smart Bumper",
    description: "Advanced bumper with sensor integration",
    category: "hyundai",
    partType: "electrical",
    image: "assets/bolero.png",
    features: [
      "Integrated parking sensors",
      "Camera mounting points",
      "Smart collision detection",
      "LED light integration",
      "Advanced driver assistance ready",
    ],
  },
];

// Product data for modal (keeping existing structure for compatibility)
const productData = {};
allProducts.forEach((product) => {
  productData[product.id] = {
    title: product.name,
    description: product.description,
    image: product.image,
    features: product.features,
  };
});

// Current filtered products
let filteredProducts = [...allProducts];

// Catalog functionality
function initCatalogFilters() {
  const categoryCheckboxes = document.querySelectorAll("input[data-category]");
  const searchInput = document.getElementById("product-search");
  const applyFilterBtn = document.querySelector(".apply-filter-btn");
  const clearFilterBtn = document.querySelector(".clear-filter-btn");

  // Initialize with all products
  loadAllProducts();

  // Category filter change (real-time)
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      updateActiveFilters();
      filterProducts();
    });
  });

  // Search functionality (real-time with debounce)
  if (searchInput) {
    searchInput.addEventListener(
      "input",
      debounce(() => {
        console.log("Search triggered:", searchInput.value);
        filterProducts();
      }, 300)
    );
  }

  // Apply filters button
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener("click", () => {
      filterProducts();
    });
  }

  // Clear filters button
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener("click", () => {
      clearAllFilters();
    });
  }
}

function loadAllProducts() {
  const productsGrid = document.getElementById("products-grid");
  displayProducts(allProducts, productsGrid);
}

function filterProducts() {
  console.log("filterProducts called");
  const categoryCheckboxes = document.querySelectorAll(
    "input[data-category]:checked"
  );
  const searchInput = document.getElementById("product-search");
  const productsGrid = document.getElementById("products-grid");

  let filtered = [...allProducts];
  console.log("Starting with", filtered.length, "products");

  // Filter by categories
  if (categoryCheckboxes.length > 0) {
    const selectedCategories = Array.from(categoryCheckboxes).map(
      (cb) => cb.dataset.category
    );
    console.log("Selected categories:", selectedCategories);
    filtered = filtered.filter((product) =>
      selectedCategories.includes(product.category)
    );
    console.log("After category filter:", filtered.length, "products");
  }

  // Filter by search
  if (searchInput) {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Keep products in original order (no sorting since dropdown was removed)
  filteredProducts = filtered;
  displayProducts(filtered, productsGrid);
}

function displayProducts(products, gridElement) {
  // Show loading state
  gridElement.classList.add("loading");
  gridElement.innerHTML = "";

  setTimeout(() => {
    if (products.length === 0) {
      gridElement.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
    } else {
      const productsHTML = products
        .map(
          (product) => `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="image-fallback" style="display: none;">
                            <i class="fas fa-image"></i>
                        </div>
                        <div class="product-overlay">
                            <button class="view-btn" onclick="openProductModal('${product.id}')">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            `
        )
        .join("");

      gridElement.innerHTML = productsHTML;
    }

    gridElement.classList.remove("loading");

    // Animate cards in
    const cards = gridElement.querySelectorAll(".product-card");
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.transition = "all 0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 50);
    });
  }, 300);
}

function updateActiveFilters() {
  const activeFiltersContainer = document.getElementById("active-filters");
  const categoryCheckboxes = document.querySelectorAll(
    "input[data-category]:checked"
  );

  let filtersHTML = "";

  // Add category filters
  categoryCheckboxes.forEach((checkbox) => {
    const categoryName =
      checkbox.nextElementSibling.nextElementSibling.textContent.split(" (")[0];
    filtersHTML += `
            <div class="filter-tag">
                ${categoryName}
                <span class="remove-filter" onclick="removeFilter('category', '${checkbox.dataset.category}')">×</span>
            </div>
        `;
  });

  if (activeFiltersContainer) {
    activeFiltersContainer.innerHTML = filtersHTML;
  }
}

function removeFilter(type, value) {
  const checkbox = document.querySelector(`input[data-${type}="${value}"]`);
  if (checkbox) {
    checkbox.checked = false;
    updateActiveFilters();
    filterProducts();
  }
}

function clearAllFilters() {
  // Clear all checkboxes
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));

  // Clear search
  const searchInput = document.getElementById("product-search");
  if (searchInput) {
    searchInput.value = "";
  }

  // Clear active filters
  const activeFiltersContainer = document.getElementById("active-filters");
  if (activeFiltersContainer) {
    activeFiltersContainer.innerHTML = "";
  }

  // Show all products
  loadAllProducts();
}

// Product modal functionality
function openProductModal(productId) {
  const modal = document.getElementById("productModal");
  const product = productData[productId];

  if (product) {
    // Update modal content
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalDescription").textContent =
      product.description;

    // Update modal image
    const modalImage = document.getElementById("modalImage");
    const modalImageFallback = document.getElementById("modalImageFallback");

    modalImage.src = product.image;
    modalImage.alt = product.title;
    modalImage.style.display = "block";
    modalImageFallback.style.display = "none";

    // Handle image load error
    modalImage.onerror = function () {
      this.style.display = "none";
      modalImageFallback.style.display = "flex";
    };

    // Update features list
    const featuresList = document.getElementById("modalFeatures");
    featuresList.innerHTML = "";
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Show modal with animation
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Add click outside to close
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Keyboard navigation for modal
function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("productModal");

    if (modal.style.display === "block" && e.key === "Escape") {
      closeProductModal();
    }
  });
}

// Initialize all functionality
document.addEventListener("DOMContentLoaded", () => {
  initCatalogFilters();
  initKeyboardNavigation();
});

// Export functions for global use
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.removeFilter = removeFilter;
