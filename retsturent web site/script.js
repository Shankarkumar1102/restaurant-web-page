// Restaurant data with real food images
const restaurantData = {
    restaurant: {
        name: "Bella Vista Restaurant",
        tagline: "Authentic Italian Cuisine"
    },
    menu: {
        appetizers: [
            {id: 1, name: "Bruschetta Trio", description: "Three slices of toasted bread with tomato, olive and cheese toppings", price: 899, image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 2, name: "Calamari Rings", description: "Golden fried squid rings with marinara sauce", price: 1199, image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 3, name: "Caesar Salad", description: "Crisp romaine lettuce with parmesan and croutons", price: 799, image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 4, name: "Antipasto Platter", description: "Selection of cured meats, cheeses and vegetables", price: 1399, image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
        ],
        mains: [
            {id: 5, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella and basil", price: 1299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 6, name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, bacon and black pepper", price: 1599, image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 7, name: "Grilled Salmon", description: "Fresh salmon with lemon herb butter and vegetables", price: 1899, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 8, name: "Chicken Parmigiana", description: "Breaded chicken breast with tomato sauce and mozzarella", price: 1699, image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 9, name: "chicken Ribeye Steak", description: "12oz grilled ribeye with garlic mashed potatoes", price: 2499, image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
        ],
        desserts: [
            {id: 10, name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 699, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 11, name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center and vanilla ice cream", price: 799, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 12, name: "Panna Cotta", description: "Silky vanilla custard with berry compote", price: 599, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 13, name: "Gelato Selection", description: "Three scoops of artisanal Italian gelato", price: 499, image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
        ],
        beverages: [
            {id: 14, name: "Italian Soda", description: "Sparkling water with fruit syrup", price: 299, image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 15, name: "Fresh Orange Juice", description: "Squeezed daily from Valencia oranges", price: 399, image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 16, name: "House Wine", description: "Red or white wine by the glass", price: 699, image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 17, name: "Espresso", description: "Traditional Italian espresso", price: 299, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"},
            {id: 18, name: "San Pellegrino", description: "Sparkling mineral water", price: 199, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
        ]
    },
    settings: {
        taxRate: 0.08,
        currency: "₹"
    }
};

// Application state
let currentCategory = 'all';
let cart = [];
let searchTerm = '';

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const placeOrderBtn = document.getElementById('placeOrder');
const searchInput = document.getElementById('searchInput');
const confirmationModal = document.getElementById('confirmationModal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderMenu();
    setupEventListeners();
    updateCartUI();
});

// Setup event listeners
function setupEventListeners() {
    // Category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderMenu();
        });
    });

    // Cart functionality
    cartBtn.addEventListener('click', () => toggleCart());
    cartOverlay.addEventListener('click', () => toggleCart());
    closeCart.addEventListener('click', () => toggleCart());
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderMenu();
    });

    // Place order
    placeOrderBtn.addEventListener('click', handlePlaceOrder);
}

// Get all menu items as a flat array
function getAllMenuItems() {
    return Object.values(restaurantData.menu).flat();
}

// Filter menu items based on category and search
function getFilteredMenuItems() {
    let items = getAllMenuItems();
    
    // Filter by category
    if (currentCategory !== 'all') {
        items = restaurantData.menu[currentCategory] || [];
    }
    
    // Filter by search term
    if (searchTerm) {
        items = items.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    return items;
}

// Format price with Indian Rupee symbol
function formatPrice(price) {
    return `₹${price.toFixed(2)}`;
}

// Format price for Indian currency (no decimals for whole numbers)
function formatIndianPrice(price) {
    if (price % 1 === 0) {
        return `₹${price}`;
    } else {
        return `₹${price.toFixed(2)}`;
    }
}

// Render menu items with real images
function renderMenu() {
    const items = getFilteredMenuItems();
    
    if (items.length === 0) {
        menuGrid.innerHTML = '<div class="no-results">No items found</div>';
        return;
    }
    
    menuGrid.innerHTML = items.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <div class="item-image-container">
                <img src="${item.image}" alt="${item.name}" class="item-image" loading="lazy">
            </div>
            <div class="item-name">${item.name}</div>
            <div class="item-description">${item.description}</div>
            <div class="item-footer">
                <div class="item-price">${formatIndianPrice(item.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add item to cart
function addToCart(itemId) {
    const item = getAllMenuItems().find(item => item.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    
    // Show brief feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = '#28a745';
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1000);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

// Update item quantity
function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
}

// Calculate cart totals
function calculateTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = subtotal * restaurantData.settings.taxRate;
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatIndianPrice(item.price)} each</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }
    
    // Update totals with Indian Rupee formatting
    const { subtotal, tax, total } = calculateTotals();
    subtotalEl.textContent = formatPrice(subtotal);
    taxEl.textContent = formatPrice(tax);
    totalEl.textContent = formatPrice(total);
    
    // Enable/disable place order button
    placeOrderBtn.disabled = cart.length === 0;
}

// Toggle cart visibility
function toggleCart() {
    cartSidebar.classList.toggle('hidden');
}

// Handle place order
function handlePlaceOrder() {
    const customerName = document.getElementById('customerName').value.trim();
    const tableNumber = document.getElementById('tableNumber').value;
    const specialInstructions = document.getElementById('specialInstructions').value.trim();
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    
    // Validation
    if (!customerName) {
        alert('Please enter your name');
        return;
    }
    
    if (!tableNumber) {
        alert('Please select a table or takeout option');
        return;
    }
    
    // Create order
    const order = {
        customerName,
        tableNumber,
        orderType,
        specialInstructions,
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.price * item.quantity
        })),
        ...calculateTotals(),
        timestamp: new Date().toLocaleString()
    };
    
    // Show confirmation
    showOrderConfirmation(order);
    
    // Clear cart
    cart = [];
    updateCartUI();
    toggleCart();
    
    // Reset form
    document.getElementById('customerName').value = '';
    document.getElementById('tableNumber').value = '';
    document.getElementById('specialInstructions').value = '';
    document.querySelector('input[name="orderType"][value="dine-in"]').checked = true;
}

// Show order confirmation
function showOrderConfirmation(order) {
    const confirmationDetails = document.getElementById('confirmationDetails');
    
    confirmationDetails.innerHTML = `
        <div class="order-summary">
            <p><strong>Order #:</strong> ${Math.floor(Math.random() * 10000)}</p>
            <p><strong>Customer:</strong> ${order.customerName}</p>
            <p><strong>Table:</strong> ${order.tableNumber}</p>
            <p><strong>Order Type:</strong> ${order.orderType}</p>
            <p><strong>Total:</strong> ${formatPrice(order.total)}</p>
            <p><strong>Estimated Time:</strong> 20-25 minutes</p>
            ${order.specialInstructions ? `<p><strong>Special Instructions:</strong> ${order.specialInstructions}</p>` : ''}
        </div>
    `;
    
    confirmationModal.classList.remove('hidden');
}

// Close modal
function closeModal() {
    confirmationModal.classList.add('hidden');
}

// Prevent modal from closing when clicking inside content
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close modal when clicking outside
confirmationModal.addEventListener('click', closeModal);
