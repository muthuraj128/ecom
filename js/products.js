// Product Data
const products = [
  // Smartwatches
  {
    id: 1,
    name: "Ultra Smartwatch",
    price: 1999,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80"
    ],
    category: "Smartwatch",
    description: "Premium smartwatch with advanced health tracking, AMOLED display, and 7-day battery life. Features include heart rate monitoring, sleep tracking, GPS, and water resistance up to 50m."
  },
  {
    id: 2,
    name: "Sport Smartwatch",
    price: 1499,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80"
    ],
    category: "Smartwatch",
    description: "Fitness-focused smartwatch with multiple sport modes, built-in GPS, and long battery life. Perfect for athletes and fitness enthusiasts."
  },
  {
    id: 3,
    name: "Classic Smartwatch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80"
    ],
    category: "Smartwatch",
    description: "Elegant smartwatch with premium build quality, sapphire crystal display, and comprehensive health monitoring features."
  },
  
  // Analog Watches
  {
    id: 4,
    name: "Luxury Analog Watch",
    price: 3999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&q=80"
    ],
    category: "Analog watch",
    description: "Premium analog watch with automatic movement, stainless steel case, and genuine leather strap. Water resistant and scratch-proof sapphire crystal."
  },
  {
    id: 5,
    name: "Sport Chronograph",
    price: 2999,
    image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=500&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80"
    ],
    category: "Analog watch",
    description: "Sporty chronograph with precision quartz movement, tachymeter bezel, and durable construction for everyday wear."
  },
  
  // Wireless Buds
  {
    id: 6,
    name: "Pro Wireless Buds",
    price: 999,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80"
    ],
    category: "Buds",
    description: "True wireless earbuds with active noise cancellation, premium sound quality, and 24-hour battery life with charging case."
  },
  {
    id: 7,
    name: "Sport Buds",
    price: 799,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    ],
    category: "Buds",
    description: "Sweat-resistant wireless earbuds designed for workouts with secure fit, powerful bass, and touch controls."
  },
  {
    id: 8,
    name: "Premium Buds",
    price: 1299,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80"
    ],
    category: "Buds",
    description: "High-end wireless earbuds with spatial audio, adaptive EQ, and premium build quality for audiophiles."
  },
  
  // Powerbanks
  {
    id: 9,
    name: "Fast Charge Powerbank 20000mAh",
    price: 1499,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80"
    ],
    category: "Powerbank",
    description: "High-capacity powerbank with 20000mAh battery, fast charging support, and multiple USB ports for charging multiple devices."
  },
  {
    id: 10,
    name: "Slim Powerbank 10000mAh",
    price: 999,
    image: "https://images.unsplash.com/photo-1626447857058-2cf8c2e89e6d?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1626447857058-2cf8c2e89e6d?w=500&q=80"
    ],
    category: "Powerbank",
    description: "Compact and portable powerbank with 10000mAh capacity, perfect for daily use and travel."
  },
  
  // Headphones
  {
    id: 11,
    name: "Premium Headphones",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80"
    ],
    category: "Headphones",
    description: "Over-ear headphones with active noise cancellation, premium sound quality, and comfortable design for extended listening."
  },
  {
    id: 12,
    name: "Studio Headphones",
    price: 3499,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    ],
    category: "Headphones",
    description: "Professional studio-grade headphones with exceptional clarity, wide frequency response, and premium build quality."
  },
  
  // Projectors
  {
    id: 13,
    name: "HD Projector",
    price: 8999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&q=80"
    ],
    category: "Projector",
    description: "Full HD projector with 3000 lumens brightness, perfect for home theater and presentations. Supports 1080p resolution."
  },
  {
    id: 14,
    name: "4K Smart Projector",
    price: 15999,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80"
    ],
    category: "Projector",
    description: "Premium 4K projector with smart features, built-in streaming apps, and exceptional image quality for home cinema."
  },
  
  // Bluetooth Speakers
  {
    id: 15,
    name: "Portable Bluetooth Speaker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80"
    ],
    category: "Bluetooth speakers",
    description: "Waterproof portable speaker with 360-degree sound, 12-hour battery life, and powerful bass."
  },
  {
    id: 16,
    name: "Premium Sound System",
    price: 4999,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"
    ],
    category: "Bluetooth speakers",
    description: "High-end Bluetooth speaker system with premium audio quality, deep bass, and elegant design."
  },
  
  // Neckbands
  {
    id: 17,
    name: "Wireless Neckband",
    price: 899,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    ],
    category: "Neckband",
    description: "Comfortable wireless neckband with magnetic earbuds, 20-hour battery life, and fast charging support."
  },
  {
    id: 18,
    name: "Sport Neckband Pro",
    price: 1299,
    image: "https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=500&q=80"
    ],
    category: "Neckband",
    description: "Premium neckband earphones with active noise cancellation, superior sound quality, and all-day comfort."
  },
  
  // Mini Fans
  {
    id: 19,
    name: "Portable Mini Fan",
    price: 399,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
    ],
    category: "Mini fan",
    description: "Compact USB rechargeable fan with adjustable speed settings, perfect for desk or travel use."
  },
  {
    id: 20,
    name: "Desk Mini Fan",
    price: 599,
    image: "https://images.unsplash.com/photo-1631795845000-2f5c6f89c57a?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1631795845000-2f5c6f89c57a?w=500&q=80"
    ],
    category: "Mini fan",
    description: "Stylish desktop fan with quiet operation, oscillation feature, and USB-C charging."
  },
  
  // Accessories
  {
    id: 21,
    name: "Phone Stand",
    price: 299,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&q=80"
    ],
    category: "Accessories",
    description: "Adjustable phone stand with aluminum construction, perfect for desk use and video calls."
  },
  {
    id: 22,
    name: "Wireless Charger",
    price: 799,
    image: "https://images.unsplash.com/photo-1591290619762-c588f7e8e86f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1591290619762-c588f7e8e86f?w=500&q=80"
    ],
    category: "Accessories",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices, with LED indicator and safety features."
  },
  {
    id: 23,
    name: "Cable Organizer Set",
    price: 199,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80"
    ],
    category: "Accessories",
    description: "Complete cable management solution with clips, ties, and organizers for a clutter-free workspace."
  },
  
  // Shoes
  {
    id: 24,
    name: "Running Shoes Pro",
    price: 2999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80"
    ],
    category: "Shoes",
    description: "High-performance running shoes with responsive cushioning, breathable mesh upper, and durable outsole."
  },
  {
    id: 25,
    name: "Casual Sneakers",
    price: 1999,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
    ],
    category: "Shoes",
    description: "Stylish casual sneakers perfect for everyday wear, featuring comfortable fit and modern design."
  }
];

// Categories with icons
const categories = [
  {
    name: "Analog watch",
    icon: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=100&q=80"
  },
  {
    name: "Smartwatch",
    icon: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&q=80"
  },
  {
    name: "Buds",
    icon: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&q=80"
  },
  {
    name: "Powerbank",
    icon: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=100&q=80"
  },
  {
    name: "Headphones",
    icon: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80"
  },
  {
    name: "Projector",
    icon: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=100&q=80"
  },
  {
    name: "Bluetooth speakers",
    icon: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&q=80"
  },
  {
    name: "Neckband",
    icon: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&q=80"
  },
  {
    name: "Mini fan",
    icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80"
  },
  {
    name: "Accessories",
    icon: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=100&q=80"
  },
  {
    name: "Shoes",
    icon: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&q=80"
  }
];

// WhatsApp configuration
const WHATSAPP_CONFIG = {
  phoneNumber: "919876543210", // Replace with actual WhatsApp number
  getProductMessage: (product, quantity = 1) => {
    return `Hi, I want to order:\n\n${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\n\nTotal: ₹${product.price * quantity}`;
  },
  getCartMessage: (cartItems) => {
    let message = "Hi, I want to order:\n\n";
    let total = 0;
    
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      message += `${index + 1}. ${item.name}\n   ₹${item.price} x ${item.quantity} = ₹${itemTotal}\n\n`;
    });
    
    message += `Total Amount: ₹${total}`;
    return message;
  },
  getWhatsAppUrl: (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
  }
};
