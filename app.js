// Configuration des webhooks
const WEBHOOK_CONFIG = {
    ORDER: 'https://discord.com/api/webhooks/1434341446130864292/zHtfdIxCYRQCPPnzIy0cfsW3Yvsef2e0JfH6egpkT_61XHnwp6I6TA_lKK5K5q4nnPCH',
    JOIN: 'https://discord.com/api/webhooks/1434341525503869028/A3y2xnpZjkKmoqLii9bBSDX3KPtd_9Jrkl5FP7nzMoAcC2zdZhjo4JHdYpTdsV58LAvt'
};

// Configuration du logo personnalisable
const SITE_CONFIG = {
    logoUrl: 'https://i.imgur.com/WTrGCTW.png'
};

// Données des villes tunisiennes par gouvernorat (étendu)
const TUNISIAN_CITIES = {
    'Tunis': ['Tunis', 'Le Bardo', 'Le Kram', 'La Goulette', 'La Marsa', 'Carthage', 'Sidi Bou Saïd', 'El Menzah', 'El Omrane'],
    'Ariana': ['Ariana', 'Ettadhamen-Mnihla', 'Raoued', 'Kalâat el-Andalous', 'Sidi Thabet', 'La Soukra'],
    'Ben Arous': ['Ben Arous', 'El Mourouj', 'Hammam Lif', 'Hammam Chott', 'Radès', 'Mégrine', 'Mohamedia', 'Fouchana', 'Ez-Zahra', 'Mornag'],
    'Manouba': ['Manouba', 'Douar Hicher', 'Oued Ellil', 'Mornaguia', 'Borj El Amri', 'Tebourba', 'El Battan', 'Jedaïda', 'Den Den'],
    'Nabeul': ['Nabeul', 'Hammamet', 'Kélibia', 'Korba', 'Menzel Temime', 'Beni Khiar', 'Dar Chaabane', 'Grombalia', 'Takelsa', 'Menzel Bouzelfa', 'Béni Khalled', 'Bou Argoub', 'El Haouaria', 'Soliman', 'Korbous', 'Azmour', 'Hammam Ghezèze', 'Daoui', 'Chaal', 'Koutine'],
    'Sousse': ['Sousse', 'Msaken', 'Akouda', 'Hammam Sousse', 'Kalaa Kebira', 'Kalaa Seghira', 'Sidi Bou Ali', 'Enfidha', 'Bouficha', 'Hergla', 'Kalâa El Mdhilla', 'Kondar'],
    'Sfax': ['Sfax', 'Sakiet Ezzit', 'Sakiet Eddaïer', 'Gremda', 'El Ain', 'Thyna', 'Agareb', 'Jebiniana', 'Mahres', 'Bir Ali Ben Khalifa', 'Skhira', 'Kerkennah', 'El Hencha', 'Menzel Chaker'],
    'Bizerte': ['Bizerte', 'Menzel Bourguiba', 'Mateur', 'Sejnane', 'Raf Raf', 'Menzel Jemil', 'El Alia', 'Ghar El Melh', 'Aousja', 'Tinja', 'Joumine', 'Zahret Medien', 'Metline', 'Ras Jebel'],
    'Monastir': ['Monastir', 'Moknine', 'Bembla', 'Ksar Hellal', 'Sahline', 'Ouerdanine', 'Zéramdine', 'Beni Hassen', 'Jemmal', 'Téboulba', 'Bekalta', 'Lamta', 'Bouhjar', 'Cherahil', 'Sidi Ben Nour'],
    'Kairouan': ['Kairouan', 'Chebika', 'Haffouz', 'Oueslatia', 'Sbikha', 'Bou Hajla', 'Hajeb El Ayoun', 'Nasrallah', 'El Alâa', 'Aïn Djeloula', 'Chaal', 'Menzel Mehiri'],
    'Gabès': ['Gabès', 'Ghannouche', 'Matmata', 'Mareth', 'Menzel Habib', 'El Hamma', 'Nouvelle Matmata', 'Métouia', 'Oudhref', 'Chenini Nahal'],
    'Gafsa': ['Gafsa', 'El Ksar', 'Métlaoui', 'Moularès', 'Redeyef', 'Sidi Aïch', 'Sned', 'Belkhir', 'Mdhilla', 'Lela'],
    'Tozeur': ['Tozeur', 'Degache', 'Nefta', 'Tamerza', 'Hezoua', 'El Hamma du Jérid'],
    'Médenine': ['Médenine', 'Ben Gardane', 'Zarzis', 'Houmt Souk', 'Midoun', 'Ajim', 'Sidi Makhlouf', 'Guelta', 'Bou Grara'],
    'Tataouine': ['Tataouine', 'Ghomrassen', 'Remada', 'Bir Lahmar', 'Dehiba', 'Smâr'],
    'Kébili': ['Kébili', 'Douz', 'Souk Lahad', 'Faouar', 'El Golâa'],
    'Siliana': ['Siliana', 'Bou Arada', 'Gaâfour', 'El Krib', 'Maktar', 'Rohia', 'Kesra', 'Bargou', 'El Aroussa'],
    'Kasserine': ['Kasserine', 'Sbeitla', 'Fériana', 'Thala', 'Haïdra', 'Jedelienne', 'El Ayoun', 'Hassi El Frid', 'Foussana', 'Thélepte'],
    'Mahdia': ['Mahdia', 'Rejiche', 'Bou Merdes', 'Ouled Chamekh', 'Chebba', 'El Jem', 'Souassi', 'Chorbane', 'Melloulèche', 'Hiboun'],
    'Zaghouan': ['Zaghouan', 'Zriba', 'Bir Mcherga', 'El Fahs', 'Nadhour'],
    'Béja': ['Béja', 'Medjez el Bab', 'Nefza', 'Téboursouk', 'Testour', 'Amdoun', 'Goubellat'],
    'Jendouba': ['Jendouba', 'Bou Salem', 'Tabarka', 'Aïn Draham', 'Fernana', 'Ghardimaou', 'Balta Bou Aouene', 'Oued Mliz'],
    'Le Kef': ['Le Kef', 'Dahmani', 'Tajerouine', 'Sakiet Sidi Youssef', 'Nebeur', 'Kalâat Khasba', 'Jerissa', 'El Ksour', 'Sers', 'Touiref']
};

// Données des produits avec images multiples
const PRODUCTS = [
    {
        id: 'p1',
        title: 'Bracelet Cartier Élégance',
        description: 'Bracelet Cartier en acier inoxydable, élégant et intemporel, parfait pour ajouter une touche de raffinement à votre style quotidien ou occasion spéciale.',
        price: 26.900,
        currency: 'TND',
        category: 'bracelets',
        images: [
            'https://i.imgur.com/T77UOud.jpeg',
            'https://i.imgur.com/UdoumtP.jpeg'
        ],
        featured: true
    },
    {
        id: 'p2',
        title: 'Pendentif Tortue Dorée',
        description: 'Pendentif tortue sur collier en chaîne dorée en acier inoxydable, un bijou raffiné et symbolique qui apporte une touche d\'élégance naturelle et spirituelle.',
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
        title: 'Collier LIRA Moderne',
        description: 'Collier LIRA en acier inoxydable, au design moderne et raffiné, parfait pour un style chic et intemporel qui s\'adapte à toutes les occasions.',
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
        title: 'Collier Eternal Embrace',
        description: 'Collier Eternal Embrace en acier inoxydable, symbole d\'amour éternel et d\'élégance intemporelle, parfait pour les moments spéciaux.',
        price: 26.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://i.imgur.com/TQIo4O9.png',
            'https://i.imgur.com/10UVMru.png'
        ],
        featured: true
    },
    {
        id: 'p5',
        title: 'Pendentif Poisson Élégant',
        description: 'Pendentif poisson élégant, symbole de liberté et d\'harmonie, idéal pour compléter votre look avec une touche marine et spirituelle unique.',
        price: 29.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://i.imgur.com/cZDRFEp.png',
            'https://i.imgur.com/BDp3p6U.png'
        ],
        featured: false
    },
    {
        id: 'p6',
        title: 'Collier Bubble Letter Initial',
        description: 'Collier Bubble Letter Initial en acier inoxydable, orné d\'une lettre en relief et de symboles étincelants, pour un style personnalisé et tendance.',
        price: 26.900,
        currency: 'TND',
        category: 'chains',
        images: [
            'https://i.imgur.com/uXVGO8k.png',
            'https://i.imgur.com/OyDozn3.png'
        ],
        featured: true
    },
    {
        id: 'p7',
        title: 'bague',
        description: 'Une bague AcierInoxydable audacieuse, mariant un pavage de cristaux étincelant avec une monture ajourée en or lumineux',
        price: 24.900,
        currency: 'TND',
        category: 'rings',
        images: [
            'https://i.imgur.com/phLKguZ.jpeg',
            'https://i.imgur.com/B85R77p.jpeg'
        ],
        featured: true
    },
    {
        id: 'p8',
        title: 'bague',
        description: 'Cette bague AcierInoxydable offre un design moderne et audacieux, où des rangs lisses dorés encadrent un anneau central entièrement pavé de cristaux.',
        price: 24.900,
        currency: 'TND',
        category: 'rings',
        images: [
            'https://i.imgur.com/9gGmyUX.jpeg',
            'https://i.imgur.com/4CScQuz.jpeg'
        ],
        featured: true
    },
    {
        id: 'p9',
        title: 'bague',
        description: 'Bague AcierInoxydable de type chevalière, au design géométrique et ajouré, rehaussée de pavés de cristaux étincelants aux angles pour un style architectural unique.',
        price: 24.900,
        currency: 'TND',
        category: 'rings',
        images: [
            'https://i.imgur.com/RXrjt9L.jpeg',
            'https://i.imgur.com/4yfHxEg.jpeg'
        ],
        featured: true
    },
    {
        id: 'p10',
        title: 'bague',
        description: 'Bague AcierInoxydable très large de type chevalière, caractérisée par sa forme bouclier et entièrement recouverte d un pavé dense de cristaux pour un éclat maximal.',
        price: 24.900,
        currency: 'TND',
        category: 'rings',
        images: [
            'https://i.imgur.com/U9Nulud.jpeg',
            'https://i.imgur.com/BriPFrJ.jpeg'
        ],
        featured: true
    }
];


// État de l'application
let cart = JSON.parse(localStorage.getItem('lunvia_cart')) || [];
let filteredProducts = [...PRODUCTS];
let currentProductImages = {};
let userCountry = 'Tunisie'; // Default country
let autoImageInterval = {};

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    detectUserCountry();
    sendJoinWebhook();
});

function initializeApp() {
    initializeLogo();
    initializeNavigation();
    initializeParticles();
    initializeProducts();
    initializeCart();
    initializeFilters();
    initializeModals();
    updateCartCount();
    initializeScrollAnimations();
    initializeCitySelector();
}

// Configuration du logo personnalisable
function initializeLogo() {
    const logoImage = document.getElementById('siteLogo');
    const footerLogo = document.querySelector('.footer-logo .logo-image');
    
    if (logoImage && SITE_CONFIG.logoUrl) {
        logoImage.src = SITE_CONFIG.logoUrl;
        logoImage.onerror = function() {
            this.src = 'https://i.imgur.com/WTrGCTW.png';
        };
    }
    
    if (footerLogo && SITE_CONFIG.logoUrl) {
        footerLogo.src = SITE_CONFIG.logoUrl;
        footerLogo.onerror = function() {
            this.src = 'https://i.imgur.com/WTrGCTW.png';
        };
    }
}

// Détection du pays de l'utilisateur
async function detectUserCountry() {
    let userCountry = 'Inconnu'; // Valeur par défaut uniquement en cas d'échec

    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        if (data && data.country_name) {
            userCountry = data.country_name; // ✅ Détecte n’importe quel pays (FR, US, DZ, etc.)
        } else {
            console.warn('Aucune donnée de pays reçue depuis ipapi.co.');
        }
    } catch (error) {
        console.error('Erreur lors de la détection du pays:', error);
    }

    console.log('Pays détecté :', userCountry);
    return userCountry;
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

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.opacity = Math.random() * 0.2 + 0.05;
        
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

    // Observe sections
    document.querySelectorAll('.section-header, .collection-controls').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
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
                 onerror="this.src='https://i.imgur.com/WTrGCTW.png'">
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
    
    // Add hover and swipe functionality
    initializeProductInteractions(card, product.id);
    
    return card;
}

function initializeProductInteractions(element, productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // Mouse hover image rotation
    let hoverInterval;
    
    element.addEventListener('mouseenter', () => {
        let currentIndex = currentProductImages[productId];
        hoverInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % product.images.length;
            switchProductImage(productId, currentIndex);
        }, 3000);
    });
    
    element.addEventListener('mouseleave', () => {
        clearInterval(hoverInterval);
    });

    // Touch swipe functionality
    initializeSwipe(element, productId);
}

function switchProductImage(productId, imageIndex) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const imageContainer = document.querySelector(`#slider-${product.id}`)?.parentElement;
    if (!imageContainer) return;
    
    const imageElement = imageContainer.querySelector('.product-image');
    const dots = document.querySelectorAll(`#slider-${productId} .image-dot`);
    
    // Smooth transition
    imageElement.style.opacity = '0';
    imageElement.style.transform = 'translateZ(20px) scale(0.95)';
    
    setTimeout(() => {
        imageElement.src = product.images[imageIndex];
        imageElement.style.opacity = '1';
        imageElement.style.transform = 'translateZ(20px) scale(1)';
        
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
    let isSwiping = false;
    
    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });
    
    element.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        endX = e.touches[0].clientX;
    });
    
    element.addEventListener('touchend', () => {
        if (!isSwiping) return;
        
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
        
        isSwiping = false;
    });
}

// Rotation automatique des images
function initializeAutoImageRotation() {
    // Clear existing intervals
    Object.values(autoImageInterval).forEach(interval => clearInterval(interval));
    autoImageInterval = {};

    // Set up auto rotation for each product
    PRODUCTS.forEach(product => {
        if (product.images.length > 1) {
            autoImageInterval[product.id] = setInterval(() => {
                const currentIndex = currentProductImages[product.id] || 0;
                const nextIndex = (currentIndex + 1) % product.images.length;
                switchProductImage(product.id, nextIndex);
            }, 5000); // Change image every 5 seconds
        }
    });
}

// Gestion des villes
function initializeCitySelector() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    if (stateSelect && citySelect) {
        stateSelect.addEventListener('change', function() {
            const selectedState = this.value;
            
            // Reset city select
            citySelect.innerHTML = '<option value="">Sélectionnez votre ville</option>';
            citySelect.disabled = !selectedState;

            if (selectedState && TUNISIAN_CITIES[selectedState]) {
                TUNISIAN_CITIES[selectedState].forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            }
        });
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

    // Validation ville
    if (!formData.city) {
        errors.city = 'La ville est requise';
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
        city: document.getElementById('city').value,
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
        showNotification('Commande confirmée avec succès ! Nous vous contacterons très bientôt pour confirmation.', 'success');
        
        // Reset
        cart = [];
        saveCart();
        updateCartCount();
        document.getElementById('checkoutForm').reset();
        document.getElementById('checkoutModal').style.display = 'none';
        document.body.style.overflow = 'auto';
        
    } catch (error) {
        console.error('Erreur lors de la commande:', error);
        showNotification('Commande confirmée avec succès ! Nous vous contacterons très bientôt pour confirmation.', 'success');
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
            title: "NOUVELLE COMMANDE LUNVIA",
            description: "**Une nouvelle commande a été passée**",
            color: 0x8b5fbf,
            thumbnail: {
                url: SITE_CONFIG.logoUrl || "https://i.imgur.com/WTrGCTW.png"
            },
            fields: [
                {
                    name: "📋 RÉCAPITULATIF DE LA COMMANDE",
                    value: "```" + cart.map(item => 
                        `${item.quantity}x ${item.title} - ${(item.price * item.quantity).toFixed(2)} TND`
                    ).join('\n') + "```",
                    inline: false
                },
                {
                    name: "💰 TOTAL COMMANDE",
                    value: `**${orderTotal.toFixed(2)} TND**`,
                    inline: true
                },
                {
                    name: "📦 NOMBRE D'ARTICLES",
                    value: `**${cart.reduce((sum, item) => sum + item.quantity, 0)}** articles`,
                    inline: true
                },
                {
                    name: "👤 INFORMATIONS CLIENT",
                    value: `**Nom:** ${customerData.fullName}\n**Téléphone:** ${customerData.phone}\n**Gouvernorat:** ${customerData.state}\n**Ville:** ${customerData.city}`,
                    inline: false
                },
                {
                    name: "📍 ADRESSE DE LIVRAISON",
                    value: `\`\`\`${customerData.address}\`\`\``,
                    inline: false
                }
            ],
            footer: {
                text: `Lunvia Bijoux • Commande #${orderId} • ${new Date().toLocaleDateString('fr-FR')}`
            },
            timestamp: new Date().toISOString()
        }]
    };

    // Ajouter un commentaire si présent
    if (customerData.comment && customerData.comment.trim()) {
        discordData.embeds[0].fields.push({
            name: "💬 NOTES DU CLIENT",
            value: `\`\`\`${customerData.comment}\`\`\``,
            inline: false
        });
    }

    // Envoi du webhook
    await sendWebhook(WEBHOOK_CONFIG.ORDER, discordData);
}

function generateOrderId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 4).toUpperCase();
    return `LV-${timestamp}-${random}`;
}

// Webhooks
async function sendJoinWebhook() {
    const webhookData = {
        embeds: [{
            title: "NOUVEAU VISITEUR",
            description: "**Un nouveau visiteur a découvert la collection Lunvia**",
            color: 0x10b981,
            thumbnail: {
                url: SITE_CONFIG.logoUrl || "https://i.imgur.com/WTrGCTW.png"
            },
            fields: [
                {
                    name: "🌍 PAYS",
                    value: `**${userCountry}**`,
                    inline: true
                },
                {
                    name: "📱 APPAREIL",
                    value: /Mobile/.test(navigator.userAgent) ? "📱 Mobile" : "💻 Desktop",
                    inline: true
                },
                {
                    name: "🕒 HEURE DE VISITE",
                    value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
                    inline: true
                },
                {
                    name: "🔗 PAGE VISITÉE",
                    value: `[Lunvia Bijoux](${window.location.href})`,
                    inline: false
                }
            ],
            footer: {
                text: "Lunvia Bijoux • Système de suivi des visiteurs"
            },
            timestamp: new Date().toISOString()
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
        console.log('Image error:', e.target.src);
        e.target.src = 'https://i.imgur.com/WTrGCTW.png';
    }
}, true);

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    Object.values(autoImageInterval).forEach(interval => clearInterval(interval));
});

const importantFunction = () => {
    console.log("Running critical code safely");
};
protect(importantFunction);

