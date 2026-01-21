# Shree Gadgets - E-commerce Catalogue Website

A professional, mobile-responsive e-commerce catalogue website built with HTML, CSS, and JavaScript. Features dynamic product rendering, shopping cart functionality with localStorage, and WhatsApp integration for order placement.

## Features

✨ **Dynamic Product Rendering**
- Single card template with JavaScript-powered generation
- Products organized by categories
- Smooth animations and transitions

🛒 **Shopping Cart**
- Add to cart functionality
- Persistent cart using localStorage
- Quantity management
- Remove items
- Real-time cart badge updates

📱 **WhatsApp Integration**
- Buy now from product pages
- Checkout from cart with all items
- Pre-filled messages with product details

🎨 **Modern Design**
- Professional and attractive UI
- Smooth hover effects and animations
- Card-based layout with shadows
- Premium color scheme

📱 **Fully Responsive**
- Mobile-first design
- Tablet and desktop optimized
- Bottom navigation for mobile
- Hamburger menu for mobile

## Project Structure

```
ecat/
├── index.html          # Homepage with categories and products
├── product.html        # Product detail page
├── cart.html           # Shopping cart page
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   ├── products.js     # Product data and WhatsApp config
│   ├── main.js         # Homepage logic and cart management
│   ├── product.js      # Product detail page logic
│   └── cart.js         # Cart page logic
└── README.md           # This file
```

## Setup Instructions

1. **Update WhatsApp Number**
   - Open `js/products.js`
   - Find `WHATSAPP_CONFIG` object
   - Replace `phoneNumber: "919876543210"` with your WhatsApp number (include country code)

2. **Add Your Products**
   - Open `js/products.js`
   - Edit the `products` array
   - Each product should have:
     - `id`: Unique identifier
     - `name`: Product name
     - `price`: Price in rupees
     - `image`: Main product image URL
     - `images`: Array of image URLs for gallery
     - `category`: Category name
     - `description`: Product description

3. **Customize Categories**
   - Edit the `categories` array in `js/products.js`
   - Each category needs:
     - `name`: Category name (must match product categories)
     - `icon`: Category icon image URL

4. **Run the Website**
   - Simply open `index.html` in a web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

## How It Works

### Dynamic Product Cards
Products are rendered dynamically from the `products` array in `products.js`. The `createProductCard()` function generates HTML for each product, ensuring consistency and easy maintenance.

### Shopping Cart
- Cart data is stored in `localStorage` under the key `ecat_cart`
- Cart persists across page refreshes
- Cart badge shows total item count
- Cart manager handles all cart operations

### WhatsApp Integration
When users click "Buy Now" or "Checkout":
1. Product/cart details are formatted into a message
2. Message is URL-encoded
3. WhatsApp Web/App opens with pre-filled message
4. Customer can send the order directly

### Responsive Design
- **Desktop (>1024px)**: Full navigation, multi-column grid
- **Tablet (768px-1024px)**: Adjusted grid, simplified layout
- **Mobile (<768px)**: Bottom navigation, 2-column grid, hamburger menu

## Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --primary-color: #0066CC;
  --secondary-color: #FF6B35;
  --background: #F5F5F5;
  /* ... more variables */
}
```

### Fonts
The website uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in HTML files
2. Update `--font-family` in CSS

### Layout
Adjust grid columns in `css/style.css`:
```css
.product-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight (no external dependencies)
- Fast page loads
- Optimized images (use CDN or compressed images)
- Smooth animations with CSS transitions

## Future Enhancements

- Product search functionality (already implemented)
- Product filtering by category
- Wishlist feature
- Product reviews
- Image zoom on product page
- Multiple image carousel

## License

Free to use for personal and commercial projects.

## Support

For questions or issues, contact via WhatsApp using the floating button on the website.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
