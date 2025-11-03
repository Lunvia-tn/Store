// Configuration des webhooks
const WEBHOOK_CONFIG = {
    ORDER: 'https://discord.com/api/webhooks/1434341446130864292/zHtfdIxCYRQCPPnzIy0cfsW3Yvsef2e0JfH6egpkT_61XHnwp6I6TA_lKK5K5q4nnPCH',
    JOIN: 'https://discord.com/api/webhooks/1434341525503869028/A3y2xnpZjkKmoqLii9bBSDX3KPtd_9Jrkl5FP7nzMoAcC2zdZhjo4JHdYpTdsV58LAvt'
};

// Données des produits avec images multiples
const PRODUCTS = [
    {
        id: 'p1',
        title: 'bracelet Cartier',
        description: 'Bracelet Cartier en acier inoxydable, élégant et intemporel, parfait pour ajouter une touche de raffinement à votre style',
        price: 26.900,
        currency: 'TND',
        category: 'bracelets',
        images: [
            'https://cdn.discordapp.com/attachments/1434354432438571038/1434355721302048818/IMG_1340.jpg?ex=6908b01c&is=69075e9c&hm=8e04de61fecbcb8edf53f563c0f6cab3463191b443379b47577ef413c30ea9dc&',
            'https://cdn.discordapp.com/attachments/1434354432438571038/1434355721549385769/IMG_1339.jpg?ex=6908b01d&is=69075e9d&hm=aba47945c35ea285236daaa64d91d566c3edb86db517f554573112f9c1e7190e&'
        ],
        featured: true
    },
    {
        id: 'p2',
        title: 'pendentif tortue',
        description: 'Pendentif tortue sur collier en chaîne dorée en acier inoxydable, un bijou raffiné et symbolique qui apporte une touche d’élégance naturelle',
        price: 29.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434673225467564032/1000123435.png?ex=69092f0f&is=6907dd8f&hm=38c793d8eaa3f7f5548e7c1f5358eebab4213ccdbafab494d73602516667a995&',
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434673224804995133/IMG_20251102_233853.jpg?ex=69092f0f&is=6907dd8f&hm=df99cd75117db194adc565e2e6a03d57c939bb651a1f4ea09c610c406dc17758&'
        ],
        featured: true
    },
    {
        id: 'p3',
        title: 'Collier LIRA',
        description: 'Collier LIRA en acier inoxydable, au design moderne et raffiné, parfait pour un style chic et intemporel',
        price: 29.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434681501240266843/IMG_20251103_001128.jpg?ex=690936c4&is=6907e544&hm=deb9fbee00c58ec53ad04afdfcc5001e6d5df8e2503a70944ae490d01f71c544&',
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434681511474626640/IMG_20251103_000438.jpg?ex=690936c7&is=6907e547&hm=07cefd87010b20471624eea2ddbb2af450cca2be77ca1fc5797bb60894f35b3a&'
        ],
        featured: false
    },
    {
        id: 'p4',
        title: 'Eternal Embrace Necklace',
        description: 'Collier Eternal Embrace en acier inoxydable, symbole d’amour éternel et d’élégance intemporelle',
        price: 26.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434684959142187038/1762125869791.png?ex=690939fd&is=6907e87d&hm=058c65e17b23239b6a0830b32df886ad2244386e692d14bd43562b9ea6dca4b4&',
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434684968650674348/1762125705384.png?ex=690939ff&is=6907e87f&hm=c29421cf348a2099843ee20c7d938a6a11f9441d50bcc550ddf93ff1b8055d64&'
        ],
        featured: true
    },
    {
        id: 'p5',
        title: 'Pendentifs Poisson',
        description: 'Pendentif poisson élégant, symbole de liberté et d’harmonie, idéal pour compléter votre look avec une touche marine',
        price: 29.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434677716543602738/1000123541.png?ex=6909333e&is=6907e1be&hm=84e959352b95b2e63c263939eb3f048ef65fa69ba36090ec2f4c2f95c2692cae&',
            'https://cdn.discordapp.com/attachments/1434670153567572038/1434677705592537162/1000123560.png?ex=6909333c&is=6907e1bc&hm=9859043a594ee4033cb3ea3def03379bb1bcb15ea81e2cd066aba6508e998e77&'
        ],
        featured: false
    },
    {
        id: 'p6',
        title: 'Bubble Letter Initial Necklace',
        description: 'Collier Bubble Letter Initial en acier inoxydable, orné d’une lettre en relief et de symboles étincelants, pour un style personnalisé et tendance',
        price: 26.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://cdn.discordapp.com/attachments/1434354432438571038/1434688441555095725/1762126412478.png?ex=69093d3b&is=6907ebbb&hm=23fb13646b2ef4fb54b386a0c92a87db9ad07faf9b35e58dd2a59be9a679d62e&',
            'https://cdn.discordapp.com/attachments/1434354432438571038/1434688451709767843/1762126511954.png?ex=69093d3e&is=6907ebbe&hm=7780001a7488de7744ffd5aee9b977a639a22eafc8e8dcdd11767bf0d90fe768&'
        ],
        featured: true
    }
];

// État de l'application
let cart = JSON.parse(localStorage.getItem('lunvia_cart')) || [];
let filteredProducts = [...PRODUCTS];
let currentProductImages = {};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    sendJoinWebhook();
});

function initializeApp() {
    initializeNavigation();
    initializeParticles();
    initializeProducts();
    initializeCart();
    initializeFilters();
    initializeModals();
    updateCartCount();
    initializeScrollAnimations();
}

// Navigation et animations
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        
        particlesContainer.appendChild(particle);
    }
}

function initializeScrollAnimations() {
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

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

function scrollToCollection() {
    document.getElementById('collection').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Gestion des produits
function initializeProducts() {
    renderProducts();
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });

    // Re-initialize scroll animations for new products
    initializeScrollAnimations();
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Initialize image state for this product
    currentProductImages[product.id] = 0;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.images[0]}" alt="${product.title}" class="product-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop'">
            <div class="product-image-slider" id="slider-${product.id}">
                ${product.images.map((_, imgIndex) => 
                    `<div class="image-dot ${imgIndex === 0 ? 'active' : ''}" 
                          onclick="switchProductImage('${product.id}', ${imgIndex})"></div>`
                ).join('')}
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${product.price} ${product.currency}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    <i class="fas fa-plus"></i>
                    Ajouter
                </button>
            </div>
        </div>
    `;
    
    // Add swipe functionality for mobile
    initializeSwipe(card, product.id);
    
    return card;
}

function switchProductImage(productId, imageIndex) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const imageContainer = document.querySelector(`#slider-${product.id}`).parentElement;
    const imageElement = imageContainer.querySelector('.product-image');
    const dots = document.querySelectorAll(`#slider-${productId} .image-dot`);
    
    imageElement.style.opacity = '0';
    
    setTimeout(() => {
        imageElement.src = product.images[imageIndex];
        imageElement.style.opacity = '1';
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === imageIndex);
        });
        
        currentProductImages[productId] = imageIndex;
    }, 200);
}

function initializeSwipe(element, productId) {
    let startX = 0;
    let endX = 0;
    
    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    element.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe(productId);
    });
    
    function handleSwipe(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;
        
        const swipeDistance = endX - startX;
        const currentIndex = currentProductImages[productId];
        
        if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
            if (swipeDistance > 0 && currentIndex > 0) {
                // Swipe right - previous image
                switchProductImage(productId, currentIndex - 1);
            } else if (swipeDistance < 0 && currentIndex < product.images.length - 1) {
                // Swipe left - next image
                switchProductImage(productId, currentIndex + 1);
            }
        }
    }
}

// Filtres et tri
function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const sortFilter = document.getElementById('sortFilter');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            applyFilters();
        });
    });

    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
}

function applyFilters() {
    const activeTab = document.querySelector('.filter-tab.active');
    const sortFilter = document.getElementById('sortFilter');
    
    let filtered = [...PRODUCTS];

    // Filtre par catégorie
    if (activeTab && activeTab.dataset.filter !== 'all') {
        filtered = filtered.filter(product => product.category === activeTab.dataset.filter);
    }

    // Tri
    if (sortFilter) {
        switch (sortFilter.value) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                // Simulate new products by ID order
                filtered.sort((a, b) => b.id.localeCompare(a.id));
                break;
            case 'featured':
            default:
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
                break;
        }
    }

    filteredProducts = filtered;
    renderProducts();
}

// Gestion du panier
function initializeCart() {
    updateCartDisplay();
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedImage: product.images[0]
        });
    }

    saveCart();
    updateCartCount();
    showNotification('Produit ajouté au panier !', 'success');
    
    // Add subtle animation to cart button
    const cartBtn = document.getElementById('cartButton');
    cartBtn.classList.add('pulse');
    setTimeout(() => cartBtn.classList.remove('pulse'), 600);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
    showNotification('Produit retiré du panier', 'error');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else if (item.quantity > 99) {
        item.quantity = 99;
    } else {
        saveCart();
        updateCartCount();
        updateCartDisplay();
    }
}

function saveCart() {
    localStorage.setItem('lunvia_cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal || !cartSubtotal) return;

    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Votre panier Lunvia est vide</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Découvrez notre collection exclusive</p>
            </div>
        `;
        cartSubtotal.textContent = '0.00 TND';
        cartTotal.textContent = '0.00 TND';
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.images[0]}" alt="${item.title}" 
                     onerror="this.src='https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=80&h=80&fit=crop'">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price} ${item.currency}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                <button class="remove-item-btn" onclick="removeFromCart('${item.id}')" title="Supprimer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartSubtotal.textContent = `${subtotal.toFixed(2)} TND`;
    cartTotal.textContent = `${subtotal.toFixed(2)} TND`;
}

function updateOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    
    if (!orderItems || !orderTotal) return;

    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.quantity}x ${item.title}</span>
            <span>${itemTotal.toFixed(2)} TND</span>
        `;
        orderItems.appendChild(orderItem);
    });

    orderTotal.textContent = total.toFixed(2);
}

// Modals
function initializeModals() {
    // Modal panier
    const cartButton = document.getElementById('cartButton');
    const cartModal = document.getElementById('cartModal');
    const checkoutButton = document.getElementById('checkoutButton');

    if (cartButton && cartModal) {
        cartButton.addEventListener('click', () => {
            updateCartDisplay();
            cartModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Modal checkout
    const checkoutModal = document.getElementById('checkoutModal');
    
    if (checkoutButton && checkoutModal) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Votre panier est vide !', 'error');
                return;
            }
            updateOrderSummary();
            cartModal.style.display = 'none';
            checkoutModal.style.display = 'block';
        });
    }

    // Fermeture des modals
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Fermer en cliquant en dehors
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Formulaire de commande
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Validation en temps réel
    initializeFormValidation();
}

function initializeFormValidation() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('216')) {
                value = value.substring(3);
            }
            if (value.length > 0) {
                e.target.value = '+216 ' + value;
            }
        });
    }
}

// Validation du formulaire
function validateForm(formData) {
    const errors = {};
    
    // Validation nom complet
    if (!formData.fullName.trim()) {
        errors.fullName = 'Le nom complet est requis';
    } else if (formData.fullName.trim().length < 2) {
        errors.fullName = 'Le nom doit contenir au moins 2 caractères';
    }

    // Validation téléphone
    const phoneRegex = /^\+216\s?\d{8}$/;
    if (!formData.phone.trim()) {
        errors.phone = 'Le téléphone est requis';
    } else if (!phoneRegex.test(formData.phone.trim())) {
        errors.phone = 'Le format doit être +216 suivi de 8 chiffres';
    }

    // Validation gouvernorat
    if (!formData.state) {
        errors.state = 'Le gouvernorat est requis';
    }

    // Validation adresse
    if (!formData.address.trim()) {
        errors.address = 'L\'adresse est requise';
    } else if (formData.address.trim().length < 10) {
        errors.address = 'L\'adresse doit être plus détaillée (au moins 10 caractères)';
    }

    return errors;
}

function displayFormErrors(errors) {
    // Reset des erreurs
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
    });

    // Reset des bordures
    document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
        input.style.borderColor = '';
    });

    // Affichage des nouvelles erreurs
    Object.keys(errors).forEach(field => {
        const errorElement = document.getElementById(field + 'Error');
        const inputElement = document.getElementById(field);
        
        if (errorElement && inputElement) {
            errorElement.textContent = errors[field];
            errorElement.style.display = 'block';
            inputElement.style.borderColor = '#dc2626';
        }
    });
}

// Traitement de la commande
async function handleCheckout(event) {
    event.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        phone: document.getElementById('phone').value,
        state: document.getElementById('state').value,
        address: document.getElementById('address').value,
        comment: document.getElementById('comment').value
    };

    // Validation
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
        displayFormErrors(errors);
        return;
    }

    // Désactiver le bouton
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Traitement en cours...';

    try {
        await processOrder(formData);
        showNotification('🎉 Commande passée avec succès ! Nous vous contacterons dans les plus brefs délais.', 'success');
        
        // Reset
        cart = [];
        saveCart();
        updateCartCount();
        document.getElementById('checkoutForm').reset();
        document.getElementById('checkoutModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        
    } catch (error) {
        console.error('Erreur lors de la commande:', error);
        showNotification('❌ Erreur lors de la commande. Veuillez réessayer.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
}

async function processOrder(customerData) {
    const orderId = generateOrderId();
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Préparation des données pour Discord
    const discordData = {
        embeds: [{
            title: "🛍️ NOUVELLE COMMANDE LUNVIA",
            description: `**Commande #${orderId}** - ${new Date().toLocaleDateString('fr-FR')}`,
            color: 0x8b5fbf,
            fields: [
                {
                    name: "👤 CLIENT",
                    value: customerData.fullName,
                    inline: true
                },
                {
                    name: "📞 TÉLÉPHONE",
                    value: customerData.phone,
                    inline: true
                },
                {
                    name: "📍 GOUVERNORAT",
                    value: customerData.state,
                    inline: true
                },
                {
                    name: "🏠 ADRESSE",
                    value: customerData.address,
                    inline: false
                },
                {
                    name: "📦 ARTICLES",
                    value: cart.map(item => 
                        `• ${item.quantity}x ${item.title} - ${(item.price * item.quantity).toFixed(2)} TND`
                    ).join('\n') || 'Aucun article',
                    inline: false
                },
                {
                    name: "💰 TOTAL",
                    value: `**${orderTotal.toFixed(2)} TND**`,
                    inline: true
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Lunvia Bijoux - Système de commandes"
            }
        }]
    };

    // Ajouter un commentaire si présent
    if (customerData.comment && customerData.comment.trim()) {
        discordData.embeds[0].fields.push({
            name: "💬 NOTES",
            value: customerData.comment,
            inline: false
        });
    }

    // Envoi du webhook
    await sendWebhook(WEBHOOK_CONFIG.ORDER, discordData);
}

function generateOrderId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `LUNVIA-${timestamp}-${random}`;
}

// Webhooks
async function sendJoinWebhook() {
    const webhookData = {
        embeds: [{
            title: "👀 NOUVEAU VISITEUR LUNVIA",
            description: "Un visiteur a découvert la collection Lunvia",
            color: 0x10b981,
            fields: [
                {
                    name: "🌐 PAGE",
                    value: window.location.href,
                    inline: true
                },
                {
                    name: "🕒 HEURE",
                    value: new Date().toLocaleString('fr-FR'),
                    inline: true
                },
                {
                    name: "📱 APPAREIL",
                    value: /Mobile/.test(navigator.userAgent) ? "📱 Mobile" : "💻 Desktop",
                    inline: true
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Lunvia Bijoux - Analytics"
            }
        }]
    };

    try {
        await sendWebhook(WEBHOOK_CONFIG.JOIN, webhookData);
    } catch (error) {
        console.log('Webhook join non envoyé:', error);
    }
}

async function sendWebhook(webhookUrl, data) {
    try {
        // Vérifier si l'URL de webhook est valide
        if (!webhookUrl || webhookUrl.includes('YOUR_WEBHOOK_URL')) {
            console.log('URL de webhook non configurée. Simulation du webhook:', data);
            return { success: true, simulated: true };
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erreur webhook: ${response.status} ${response.statusText}`);
        }
        
        console.log('Webhook envoyé avec succès');
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de l\'envoi du webhook:', error);
        
        // En cas d'erreur CORS en local, on simule le succès
        if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            console.log('Simulation du webhook (erreur CORS en local):', data);
            return { success: true, simulated: true };
        }
        
        throw error;
    }
}

// Utilitaires
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(notification => {
        notification.remove();
    });

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'fas fa-check-circle' : 
                 type === 'error' ? 'fas fa-exclamation-circle' : 
                 'fas fa-info-circle';
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 5000);
}

// Add CSS for pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    .pulse {
        animation: pulse 0.6s ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(pulseStyle);

// Gestion des erreurs d'images
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop';
    }
}, true);