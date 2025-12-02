# Patel Motors - Automobile Parts Manufacturing Website

A modern, responsive website for Patel Motors automobile parts manufacturing company featuring 3D effects, dual theme support, and premium design.

## Features

### 🎨 Design & UI

- **Dual Theme Support**: Light and dark mode toggle
- **3D Effects**: Floating animations, rotating elements, and tilt effects
- **Glassmorphism**: Modern glass-like UI elements
- **Responsive Design**: Optimized for all devices
- **Premium Animations**: Smooth transitions and scroll animations

### 📱 Pages

- **Home Page**: Hero section with 3D animations, features showcase
- **About Us**: Company story, mission/vision, manufacturing process
- **Products**: Interactive product catalog with 3D modal views
- **Contact**: Contact form, map integration, FAQ section

### 🚗 Product Categories

- **Mahindra Bolero Parts**: Door panels, bumpers, fenders, mudguards
- **Maruti Swift Parts**: Door panels, bumpers, chassis components
- **Pickup Truck Parts**: Truck beds, bull bars, tailgates

### ⚡ Technical Features

- **Modern CSS**: CSS Grid, Flexbox, Custom Properties
- **Vanilla JavaScript**: No external dependencies
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Semantic HTML structure
- **Accessibility**: WCAG compliant design

## File Structure

```
patel-motors-website/
├── index.html              # Home page
├── about.html              # About us page
├── products.html           # Products catalog
├── contact.html            # Contact page
├── styles/
│   ├── main.css           # Main styles and theme system
│   ├── animations.css     # Animation keyframes and effects
│   ├── about.css          # About page specific styles
│   ├── products.css       # Products page specific styles
│   └── contact.css        # Contact page specific styles
├── js/
│   ├── main.js            # Core functionality and theme management
│   ├── animations.js      # Advanced animations and 3D effects
│   ├── products.js        # Product filtering and modal functionality
│   └── contact.js         # Contact form and FAQ functionality
├── assets/
│   ├── logo.png           # Company logo (placeholder)
│   ├── bolero.jpg         # Bolero vehicle image (placeholder)
│   ├── swift.jpg          # Swift vehicle image (placeholder)
│   └── pickup.jpg         # Pickup truck image (placeholder)
└── README.md              # This file
```

## Setup Instructions

### 1. Replace Placeholder Content

- Replace `[name]`, `[phone_number]`, `[email]`, `[address]` with actual company information
- Add real company logo to `assets/logo.png`
- Replace vehicle images in the `assets/` folder
- Update product prices in the products page

### 2. Customize Brand Colors

The website uses CSS custom properties for easy theming. Update the primary colors in `styles/main.css`:

```css
:root {
  --primary-color: #2dd4bf; /* Main brand color */
  --primary-dark: #0d9488; /* Darker shade */
  --accent-color: #f59e0b; /* Accent color */
}
```

### 3. Add Real Images

- Company logo: `assets/logo.png` (200x200px recommended)
- Vehicle images: `assets/bolero.jpg`, `assets/swift.jpg`, `assets/pickup.jpg` (800x600px recommended)
- Product images: Add actual product photos and update image paths in HTML

### 4. Configure Contact Information

Update contact details in all HTML files:

- Phone numbers
- Email addresses
- Physical address
- Business hours
- Social media links

### 5. Map Integration

Replace the map placeholder in `contact.html` with actual Google Maps embed:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
>
</iframe>
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Tips

1. **Optimize Images**: Compress images and use WebP format when possible
2. **Minify CSS/JS**: Minify files for production
3. **Enable Gzip**: Configure server compression
4. **CDN**: Use CDN for Font Awesome and Google Fonts

## Customization Guide

### Adding New Products

1. Add product data to `js/products.js` in the `productData` object
2. Add HTML markup in `products.html` following the existing pattern
3. Update category filters if needed

### Modifying Animations

- Edit keyframes in `styles/animations.css`
- Adjust animation triggers in `js/animations.js`
- Customize 3D effects and transitions

### Theme Customization

- Modify CSS custom properties in `styles/main.css`
- Add new theme variants by extending the theme system
- Customize glassmorphism effects

## Deployment

1. **Static Hosting**: Deploy to Netlify, Vercel, or GitHub Pages
2. **Traditional Hosting**: Upload files to any web server
3. **CDN**: Consider using a CDN for better performance

## Support

For technical support or customization requests, contact the development team.

## License

© 1990 Patel Motors. All rights reserved.
