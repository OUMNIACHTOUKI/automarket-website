
/**
 * AutoMarket - Premium Car Marketplace JavaScript
 * Main Application File
 */

// Car Data (Mock Database)
const carData = [
    {
        id: 1,
        name: "BMW X5 xDrive40i",
        brand: "bmw",
        model: "X5",
        year: 2023,
        price: 58900,
        mileage: 15000,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "3.0L TwinPower Turbo",
        color: "Alpine White",
        location: "Los Angeles, CA",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
            "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80"
        ],
        description: "Experience luxury and performance with this stunning BMW X5. Features include panoramic sunroof, premium sound system, and advanced driver assistance packages. Full BMW service history available.",
        seller: { name: "Premium Auto Gallery", phone: "(310) 555-0123", email: "sales@premiumauto.com" },
        postedDate: "2 days ago",
        featured: true
    },
    {
        id: 2,
        name: "Mercedes-Benz GLE 450",
        brand: "mercedes",
        model: "GLE",
        year: 2023,
        price: 64900,
        mileage: 8500,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "3.0L Inline-6 Turbo",
        color: "Obsidian Black",
        location: "Miami, FL",
        images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            "https://images.unsplash.com/photo-1603584173870-7b297f066106?w=800&q=80",
            "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
        ],
        description: "Exceptional Mercedes-Benz GLE 450 4MATIC with all-wheel drive, air suspension, and premium interior package. One owner, low mileage, perfect condition.",
        seller: { name: "Mercedes of Miami", phone: "(305) 555-0456", email: "info@mercedesmiami.com" },
        postedDate: "3 days ago",
        featured: true
    },
    {
        id: 3,
        name: "Tesla Model S Plaid",
        brand: "tesla",
        model: "Model S",
        year: 2023,
        price: 89900,
        mileage: 5200,
        fuelType: "electric",
        transmission: "automatic",
        engine: "Tri Motor AWD",
        color: "Pearl White",
        location: "San Francisco, CA",
        images: [
            "https://images.unsplash.com/photo-1617788139613-511f7a243144?w=800&q=80",
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
            "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
        ],
        description: "Incredible Tesla Model S Plaid with 1,020 horsepower, 0-60 in 1.99 seconds, and 396 mile range. Full Self-Driving capability included. Like new condition.",
        seller: { name: "Tesla Direct", phone: "(415) 555-0789", email: "sales@tesladirect.com" },
        postedDate: "1 day ago",
        featured: true
    },
    {
        id: 4,
        name: "Porsche 911 Carrera S",
        brand: "porsche",
        model: "911",
        year: 2022,
        price: 124900,
        mileage: 12000,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "3.0L Twin-Turbo Flat-6",
        color: "Guards Red",
        location: "New York, NY",
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
            "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
        ],
        description: "Dream car alert! Porsche 911 Carrera S in iconic Guards Red. Sport Chrono package, premium package plus, and ceramic brakes. Garage kept, pristine condition.",
        seller: { name: "Porsche Manhattan", phone: "(212) 555-1234", email: "sales@porschemanhattan.com" },
        postedDate: "5 days ago",
        featured: true
    },
    {
        id: 5,
        name: "Audi RS e-tron GT",
        brand: "audi",
        model: "e-tron GT",
        year: 2023,
        price: 104900,
        mileage: 3500,
        fuelType: "electric",
        transmission: "automatic",
        engine: "Dual Motor AWD",
        color: "Mythos Black",
        location: "Chicago, IL",
        images: [
            "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80",
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80"
        ],
        description: "The future of performance! Audi RS e-tron GT with 637 horsepower, air suspension, and Matrix LED headlights. Pristine condition with full warranty.",
        seller: { name: "Audi Chicago", phone: "(312) 555-5678", email: "sales@audichicago.com" },
        postedDate: "4 days ago",
        featured: true
    },
    {
        id: 6,
        name: "Toyota Supra GR Manual",
        brand: "toyota",
        model: "Supra",
        year: 2023,
        price: 56900,
        mileage: 7800,
        fuelType: "gasoline",
        transmission: "manual",
        engine: "3.0L Turbo Inline-6",
        color: "Nitro Yellow",
        location: "Dallas, TX",
        images: [
            "https://images.unsplash.com/photo-1605559424843-9e4c2287f38d?w=800&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80",
            "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80"
        ],
        description: "Legendary Toyota Supra with 6-speed manual transmission! Premium audio, wireless charging, and JBL sound system. Perfect sports car for enthusiasts.",
        seller: { name: "Texas Auto Sports", phone: "(214) 555-9012", email: "sales@texasautosports.com" },
        postedDate: "6 days ago",
        featured: true
    },
    {
        id: 7,
        name: "Honda Civic Type R",
        brand: "honda",
        model: "Civic",
        year: 2023,
        price: 43900,
        mileage: 6200,
        fuelType: "gasoline",
        transmission: "manual",
        engine: "2.0L Turbo VTEC",
        color: "Championship White",
        location: "Seattle, WA",
        images: [
            "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
            "https://images.unsplash.com/photo-1603584173870-7b297f06520771?w=800&q=80",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
        ],
        description: "Ultimate hot hatch! Civic Type R with limited slip differential, adaptive dampers, and record-setting Nürburgring time. Rare Championship White color.",
        seller: { name: "Pacific Honda", phone: "(206) 555-3456", email: "sales@pacifichonda.com" },
        postedDate: "1 week ago",
        featured: false
    },
    {
        id: 8,
        name: "Ford Mustang GT Premium",
        brand: "ford",
        model: "Mustang",
        year: 2022,
        price: 45900,
        mileage: 18500,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "5.0L V8 Coyote",
        color: "Grabber Blue",
        location: "Atlanta, GA",
        images: [
            "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&q=80",
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80"
        ],
        description: "American muscle at its finest! Ford Mustang GT Premium with Performance Package, Brembo brakes, and active valve exhaust. Sounds incredible!",
        seller: { name: "Southern Ford", phone: "(404) 555-7890", email: "sales@southernford.com" },
        postedDate: "3 days ago",
        featured: false
    },
    {
        id: 9,
        name: "Mercedes-AMG GT Coupe",
        brand: "mercedes",
        model: "AMG GT",
        year: 2021,
        price: 96900,
        mileage: 22000,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "4.0L Twin-Turbo V8",
        color: "Designo Diamond White",
        location: "Beverly Hills, CA",
        images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
            "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80"
        ],
        description: "Pure AMG performance! GT Coupe with handcrafted 4.0L V8, active aerodynamics, and race-tuned suspension. Stunning Designo White with red brakes.",
        seller: { name: "Beverly Hills Motors", phone: "(310) 555-2468", email: "sales@bhms.com" },
        postedDate: "2 weeks ago",
        featured: false
    },
    {
        id: 10,
        name: "BMW M4 Competition",
        brand: "bmw",
        model: "M4",
        year: 2023,
        price: 78900,
        mileage: 9500,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "3.0L Twin-Turbo Inline-6",
        color: "Isle of Man Green",
        location: "Boston, MA",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
            "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
            "https://images.unsplash.com/photo-1617788139613-511f7a243144?w=800&q=80"
        ],
        description: "Track-ready M4 Competition with xDrive, carbon fiber roof, and Executive Package. Limited Isle of Man Green - turns heads everywhere!",
        seller: { name: "Boston Performance", phone: "(617) 555-1357", email: "sales@bostonperf.com" },
        postedDate: "5 days ago",
        featured: false
    },
    {
        id: 11,
        name: "Audi RS6 Avant",
        brand: "audi",
        model: "RS6",
        year: 2023,
        price: 119900,
        mileage: 4800,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "4.0L Twin-Turbo V8",
        color: "Nardo Gray",
        location: "Denver, CO",
        images: [
            "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80",
            "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
            "https://images.unsplash.com/photo-1603584173870-7b297f06520771?w=800&q=80"
        ],
        description: "The ultimate super wagon! RS6 Avant with 591 horsepower, air suspension, and panoramic roof. Nardo Gray with black optics package.",
        seller: { name: "Denver Audi", phone: "(720) 555-9753", email: "sales@denveraudi.com" },
        postedDate: "4 days ago",
        featured: false
    },
    {
        id: 12,
        name: "Porsche Cayenne Turbo GT",
        brand: "porsche",
        model: "Cayenne",
        year: 2023,
        price: 189900,
        mileage: 3100,
        fuelType: "gasoline",
        transmission: "automatic",
        engine: "4.0L Twin-Turbo V8",
        color: "Arctic Gray",
        location: "Scottsdale, AZ",
        images: [
            "https://images.unsplash.com/photo-1600274455191-1c62238fa333?w=800&q=80",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
        ],
        description: "The fastest SUV ever! Cayenne Turbo GT with 631 horsepower, carbon fiber accents, and ceramic composite brakes. Truly in a league of its own.",
        seller: { name: "Phoenix Porsche", phone: "(480) 555-8642", email: "sales@phxporsche.com" },
        postedDate: "1 week ago",
        featured: false
    }
];

// Application State
const state = {
    currentPage: 'home',
    currentCar: null,
    favorites: JSON.parse(localStorage.getItem('automarket_favorites')) || [],
    userListings: JSON.parse(localStorage.getItem('automarket_listings')) || [],
    isLoggedIn: localStorage.getItem('automarket_logged_in') === 'true',
    userName: localStorage.getItem('automarket_user_name') || 'Guest User',
    currentFormStep: 1,
    filteredCars: [...carData]
};

// DOM Elements
const DOM = {
    header: document.getElementById('header'),
    nav: document.getElementById('nav'),
    mobileToggle: document.getElementById('mobileToggle'),
    pages: document.querySelectorAll('.page'),
    navLinks: document.querySelectorAll('.nav-link'),
    featuredCars: document.getElementById('featuredCars'),
    listingsGrid: document.getElementById('listingsGrid'),
    resultsCount: document.getElementById('resultsCount'),
    sortSelect: document.getElementById('sortSelect'),
    clearFilters: document.getElementById('clearFilters'),
    applyFilters: document.getElementById('applyFilters'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    backToListings: document.getElementById('backToListings'),
    mainCarImage: document.getElementById('mainCarImage'),
    thumbnailGrid: document.getElementById('thumbnailGrid'),
    similarCars: document.getElementById('similarCars'),
    favoriteBtn: document.getElementById('favoriteBtn'),
    sellCarForm: document.getElementById('sellCarForm'),
    prevStep: document.getElementById('prevStep'),
    nextStep: document.getElementById('nextStep'),
    imageUploadArea: document.getElementById('imageUploadArea'),
    imagePreviews: document.getElementById('imagePreviews'),
    dashboardUserName: document.getElementById('dashboardUserName'),
    myListingsTable: document.getElementById('myListingsTable'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    dashboardNavLinks: document.querySelectorAll('.dashboard-nav a'),
    dashboardTabs: document.querySelectorAll('.dashboard-tab'),
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    loginModal: document.getElementById('loginModal'),
    signupModal: document.getElementById('signupModal'),
    contactModal: document.getElementById('contactModal'),
    financeModal: document.getElementById('financeModal'),
    closeLoginModal: document.getElementById('closeLoginModal'),
    closeSignupModal: document.getElementById('closeSignupModal'),
    closeContactModal: document.getElementById('closeContactModal'),
    closeFinanceModal: document.getElementById('closeFinanceModal'),
    switchToSignup: document.getElementById('switchToSignup'),
    switchToLogin: document.getElementById('switchToLogin'),
    contactSellerBtn: document.getElementById('contactSellerBtn'),
    requestInfoBtn: document.getElementById('requestInfoBtn'),
    financeBtn: document.getElementById('financeBtn'),
    contactForm: document.getElementById('contactForm'),
    financeForm: document.getElementById('financeForm'),
    loginForm: document.getElementById('loginForm'),
    signupForm: document.getElementById('signupForm'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage')
};

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function formatMileage(mileage) {
    return new Intl.NumberFormat('en-US').format(mileage);
}

function showToast(message, type = 'success') {
    DOM.toastMessage.textContent = message;
    DOM.toast.className = 'toast show';
    DOM.toast.style.background = type === 'success' ? 'var(--success)' : 'var(--accent-red)';
    
    setTimeout(() => {
        DOM.toast.className = 'toast';
    }, 3000);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation & Routing
function navigateTo(page, data = null) {
    DOM.pages.forEach(p => p.classList.remove('active'));
    
    const targetPage = document.getElementById(page + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    state.currentPage = page;
    
    if (page === 'listings') {
        renderListings();
    } else if (page === 'home') {
        renderFeaturedCars();
    } else if (page === 'dashboard') {
        updateDashboard();
    } else if (page === 'details' && data) {
        renderCarDetails(data);
    }
    
    scrollToTop();
    DOM.nav.classList.remove('active');
    DOM.mobileToggle.classList.remove('active');
}

function initNavigation() {
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page) {
                navigateTo(page);
            }
        });
    });
    
    document.querySelectorAll('[data-page]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const page = btn.dataset.page;
            navigateTo(page);
        });
    });
    
    DOM.mobileToggle.addEventListener('click', () => {
        DOM.nav.classList.toggle('active');
        DOM.mobileToggle.classList.toggle('active');
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            DOM.header.classList.add('scrolled');
        } else {
            DOM.header.classList.remove('scrolled');
        }
    });
}

// Car Card Component
function createCarCard(car, showFavorite = true) {
    const isFavorite = state.favorites.includes(car.id);
    
    return `
        <div class="car-card" data-car-id="${car.id}">
            <div class="car-card-image">
                <img src="${car.images[0]}" alt="${car.name}" loading="lazy">
                <div class="car-card-price">${formatPrice(car.price)}</div>
                ${showFavorite ? `
                    <button class="car-card-favorite ${isFavorite ? 'active' : ''}" data-id="${car.id}">
                        <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                ` : ''}
            </div>
            <div class="car-card-content">
                <h3 class="car-card-title">${car.name}</h3>
                <div class="car-card-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${formatMileage(car.mileage)} mi</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuelType}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <div class="car-card-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${car.location}
                </div>
                <button class="btn btn-primary car-card-btn view-details" data-id="${car.id}">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Home Page
function renderFeaturedCars() {
    const featured = carData.filter(car => car.featured).slice(0, 6);
    DOM.featuredCars.innerHTML = featured.map(car => createCarCard(car)).join('');
    addCarCardListeners(DOM.featuredCars);
}

function initHomePage() {
    renderFeaturedCars();
    
    document.getElementById('searchBtn').addEventListener('click', () => {
        navigateTo('listings');
        applyFilters();
    });
    
    document.querySelectorAll('.brand-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const brand = card.dataset.brand;
            document.querySelectorAll('.filter-checkboxes input').forEach(cb => {
                cb.checked = cb.value === brand;
            });
            navigateTo('listings');
            applyFilters();
        });
    });
}

// Listings Page
function renderListings() {
    let cars = [...state.filteredCars];
    
    const sortValue = DOM.sortSelect.value;
    switch (sortValue) {
        case 'price-low':
            cars.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            cars.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            cars.sort((a, b) => b.year - a.year);
            break;
        case 'oldest':
            cars.sort((a, b) => a.year - b.year);
            break;
        default:
            cars.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    DOM.resultsCount.textContent = cars.length;
    DOM.listingsGrid.innerHTML = cars.map(car => createCarCard(car)).join('');
    addCarCardListeners(DOM.listingsGrid);
}

function applyFilters() {
    const minPrice = parseInt(DOM.minPrice.value) || 0;
    const maxPrice = parseInt(DOM.maxPrice.value) || Infinity;
    const selectedBrands = Array.from(document.querySelectorAll('.filters-sidebar input[type="checkbox"]:checked')).map(cb => cb.value);
    const yearFilter = document.getElementById('filterYear').value;
    
    state.filteredCars = carData.filter(car => {
        if (car.price < minPrice || car.price > maxPrice) return false;
        if (selectedBrands.length > 0 && !selectedBrands.includes(car.brand)) return false;
        if (yearFilter && car.year !== parseInt(yearFilter)) return false;
        return true;
    });
    
    renderListings();
    showToast('Filters applied successfully');
}

function clearFilters() {
    document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('filterYear').value = '';
    DOM.minPrice.value = '';
    DOM.maxPrice.value = '';
    state.filteredCars = [...carData];
    renderListings();
    showToast('Filters cleared');
}

function initListingsPage() {
    DOM.sortSelect.addEventListener('change', renderListings);
    DOM.applyFilters.addEventListener('click', applyFilters);
    DOM.clearFilters.addEventListener('click', clearFilters);
}

// Car Details Page
function renderCarDetails(car) {
    state.currentCar = car;
    
    DOM.mainCarImage.src = car.images[0];
    DOM.mainCarImage.alt = car.name;
    
    const badge = document.getElementById('carFeaturedBadge');
    badge.style.display = car.featured ? 'block' : 'none';
    
    DOM.thumbnailGrid.innerHTML = car.images.map((img, index) => 
        `<img src="${img}" alt="Thumbnail ${index + 1}" class="${index === 0 ? 'active' : ''}" data-index="${index}">`
    ).join('');
    
    DOM.thumbnailGrid.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            DOM.mainCarImage.src = car.images[img.dataset.index];
            DOM.thumbnailGrid.querySelectorAll('img').forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        });
    });
    
    document.getElementById('carTitle').textContent = car.name;
    document.getElementById('carPrice').textContent = formatPrice(car.price);
    document.getElementById('carLocation').textContent = car.location;
    document.getElementById('carPostedDate').textContent = car.postedDate;
    document.getElementById('carYear').textContent = car.year;
    document.getElementById('carMileage').textContent = formatMileage(car.mileage) + ' miles';
    document.getElementById('carFuel').textContent = car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1);
    document.getElementById('carTransmission').textContent = car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1);
    document.getElementById('carEngine').textContent = car.engine;
    document.getElementById('carColor').textContent = car.color;
    document.getElementById('carDescription').textContent = car.description;
    
    document.getElementById('sellerName').textContent = car.seller.name;
    document.getElementById('sellerPhone').textContent = car.seller.phone;
    document.getElementById('sellerEmail').textContent = car.seller.email;
    
    updateFavoriteButton();
    
    const similar = carData.filter(c => c.id !== car.id && c.brand === car.brand).slice(0, 3);
    if (similar.length === 0) {
        document.querySelector('.similar-cars').style.display = 'none';
    } else {
        document.querySelector('.similar-cars').style.display = 'block';
        DOM.similarCars.innerHTML = similar.map(c => createCarCard(c)).join('');
        addCarCardListeners(DOM.similarCars);
    }
}

function updateFavoriteButton() {
    const isFavorite = state.favorites.includes(state.currentCar.id);
    DOM.favoriteBtn.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> ${isFavorite ? 'Saved' : 'Save'}`;
    DOM.favoriteBtn.classList.toggle('active', isFavorite);
}

function initDetailsPage() {
    DOM.backToListings.addEventListener('click', () => {
        navigateTo('listings');
    });
    
    DOM.favoriteBtn.addEventListener('click', () => {
        const carId = state.currentCar.id;
        const index = state.favorites.indexOf(carId);
        
        if (index > -1) {
            state.favorites.splice(index, 1);
            showToast('Removed from favorites');
        } else {
            state.favorites.push(carId);
            showToast('Added to favorites');
        }
        
        localStorage.setItem('automarket_favorites', JSON.stringify(state.favorites));
        updateFavoriteButton();
    });
    
    DOM.contactSellerBtn.addEventListener('click', () => {
        openModal('contact');
    });
    
    DOM.requestInfoBtn.addEventListener('click', () => {
        openModal('contact');
    });
    
    DOM.financeBtn.addEventListener('click', () => {
        document.getElementById('financePrice').value = state.currentCar.price;
        openModal('finance');
    });
}

// Sell Your Car Page
function initSellPage() {
    DOM.imageUploadArea.addEventListener('click', () => {
        document.getElementById('carImages').click();
    });
    
    DOM.imageUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        DOM.imageUploadArea.style.borderColor = 'var(--accent-red)';
    });
    
    DOM.imageUploadArea.addEventListener('dragleave', () => {
        DOM.imageUploadArea.style.borderColor = 'var(--border)';
    });
    
    DOM.imageUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        DOM.imageUploadArea.style.borderColor = 'var(--border)';
        handleImageUpload(e.dataTransfer.files);
    });
    
    document.getElementById('carImages').addEventListener('change', (e) => {
        handleImageUpload(e.target.files);
    });
    
    DOM.prevStep.addEventListener('click', () => {
        if (state.currentFormStep > 1) {
            state.currentFormStep--;
            updateFormSteps();
        }
    });
    
    DOM.nextStep.addEventListener('click', () => {
        if (validateFormStep()) {
            if (state.currentFormStep < 5) {
                state.currentFormStep++;
                updateFormSteps();
            } else {
                submitCarListing();
            }
        }
    });
}

function handleImageUpload(files) {
    const previewContainer = DOM.imagePreviews;
    
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = document.createElement('div');
                preview.className = 'image-preview';
                preview.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <button type="button"><i class="fas fa-times"></i></button>
                `;
                previewContainer.appendChild(preview);
                
                preview.querySelector('button').addEventListener('click', () => {
                    preview.remove();
                });
            };
            reader.readAsDataURL(file);
        }
    });
}

function updateFormSteps() {
    document.querySelectorAll('.form-steps .step').forEach(step => {
        const stepNum = parseInt(step.dataset.step);
        step.classList.remove('active', 'completed');
        if (stepNum === state.currentFormStep) {
            step.classList.add('active');
        } else if (stepNum < state.currentFormStep) {
            step.classList.add('completed');
        }
    });
    
    document.querySelectorAll('.form-step').forEach(section => {
        const sectionStep = parseInt(section.dataset.step);
        section.classList.toggle('active', sectionStep === state.currentFormStep);
    });
    
    DOM.prevStep.disabled = state.currentFormStep === 1;
    DOM.nextStep.innerHTML = state.currentFormStep === 5 
        ? 'Submit <i class="fas fa-check"></i>' 
        : 'Next <i class="fas fa-arrow-right"></i>';
}

function validateFormStep() {
    const currentSection = document.querySelector(`.form-step[data-step="${state.currentFormStep}"]`);
    const requiredFields = currentSection.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = 'var(--accent-red)';
        } else {
            field.style.borderColor = 'var(--border)';
        }
    });
    
    if (!isValid) {
        showToast('Please fill in all required fields', 'error');
    }
    
    return isValid;
}

function submitCarListing() {
    const newCar = {
        id: carData.length + 1,
        name: `${document.getElementById('carBrand').value} ${document.getElementById('carModel').value}`,
        brand: document.getElementById('carBrand').value,
        model: document.getElementById('carModel').value,
        year: parseInt(document.getElementById('carYearSelect').value),
        price: parseInt(document.getElementById('carPriceInput').value),
        mileage: parseInt(document.getElementById('carMileageInput').value),
        fuelType: document.getElementById('carFuelType').value,
        transmission: document.getElementById('carTransmissionSelect').value,
        engine: document.getElementById('carEngineInput').value || 'N/A',
        color: document.getElementById('carColorInput').value,
        location: document.getElementById('carLocationInput').value,
        images: ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'],
        description: document.getElementById('carDescriptionInput').value,
        seller: {
            name: document.getElementById('sellerNameInput').value,
            phone: document.getElementById('sellerPhoneInput').value,
            email: document.getElementById('sellerEmailInput').value
        },
        postedDate: 'Just now',
        featured: false
    };
    
    state.userListings.push(newCar);
    localStorage.setItem('automarket_listings', JSON.stringify(state.userListings));
    
    showToast('Your car has been listed successfully!');
    
    DOM.sellCarForm.reset();
    DOM.imagePreviews.innerHTML = '';
    state.currentFormStep = 1;
    updateFormSteps();
    
    setTimeout(() => {
        navigateTo('dashboard');
    }, 1500);
}

// Dashboard
function updateDashboard() {
    DOM.dashboardUserName.textContent = state.userName;
    renderMyListings();
    renderFavorites();
}

function renderMyListings() {
    if (state.userListings.length === 0) {
        DOM.myListingsTable.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: var(--gray);">
                    <i class="fas fa-car" style="font-size: 40px; margin-bottom: 15px;"></i>
                    <p>You haven't listed any cars yet.</p>
                </td>
            </tr>
        `;
    } else {
        DOM.myListingsTable.innerHTML = state.userListings.map(car => `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="${car.images[0]}" alt="${car.name}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 8px;">
                        <div>
                            <strong>${car.name}</strong>
                            <br><small style="color: var(--gray);">${car.year} | ${car.location}</small>
                        </div>
                    </div>
                </td>
                <td>${formatPrice(car.price)}</td>
                <td><span class="status active">Active</span></td>
                <td>${Math.floor(Math.random() * 500) + 50}</td>
                <td>
                    <div class="action-btns">
                        <button class="edit-btn" title="Edit"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" data-id="${car.id}" title="Delete"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
        
        DOM.myListingsTable.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                state.userListings = state.userListings.filter(car => car.id !== id);
                localStorage.setItem('automarket_listings', JSON.stringify(state.userListings));
                renderMyListings();
                showToast('Listing deleted successfully');
            });
        });
    }
}

function renderFavorites() {
    const favoriteCars = carData.filter(car => state.favorites.includes(car.id));
    
    if (favoriteCars.length === 0) {
        DOM.favoritesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--gray);">
                <i class="fas fa-heart" style="font-size: 50px; margin-bottom: 20px; opacity: 0.3;"></i>
                <h3>No saved cars yet</h3>
                <p>Browse our collection and save your favorite cars!</p>
            </div>
        `;
    } else {
        DOM.favoritesGrid.innerHTML = favoriteCars.map(car => createCarCard(car)).join('');
        addCarCardListeners(DOM.favoritesGrid);
    }
}

function initDashboard() {
    DOM.dashboardNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.dataset.tab;
            
            DOM.dashboardNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            DOM.dashboardTabs.forEach(t => t.classList.remove('active'));
            document.querySelector(`.dashboard-tab[data-tab="${tab}"]`).classList.add('active');
        });
    });
    
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        state.isLoggedIn = false;
        state.userName = 'Guest User';
        localStorage.removeItem('automarket_logged_in');
        localStorage.removeItem('automarket_user_name');
        showToast('Logged out successfully');
        navigateTo('home');
    });
}

// Modals
function openModal(type) {
    switch (type) {
        case 'login':
            DOM.loginModal.classList.add('active');
            break;
        case 'signup':
            DOM.signupModal.classList.add('active');
            break;
        case 'contact':
            DOM.contactModal.classList.add('active');
            break;
        case 'finance':
            DOM.financeModal.classList.add('active');
            break;
    }
}

function closeModal(type) {
    switch (type) {
        case 'login':
            DOM.loginModal.classList.remove('active');
            break;
        case 'signup':
            DOM.signupModal.classList.remove('active');
            break;
        case 'contact':
            DOM.contactModal.classList.remove('active');
            break;
        case 'finance':
            DOM.financeModal.classList.remove('active');
            break;
    }
}

function initModals() {
    DOM.loginBtn.addEventListener('click', () => openModal('login'));
    DOM.closeLoginModal.addEventListener('click', () => closeModal('login'));
    DOM.switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('login');
        openModal('signup');
    });
    
    DOM.signupBtn.addEventListener('click', () => openModal('signup'));
    DOM.closeSignupModal.addEventListener('click', () => closeModal('signup'));
    DOM.switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('signup');
        openModal('login');
    });
    
    DOM.closeContactModal.addEventListener('click', () => closeModal('contact'));
    DOM.closeFinanceModal.addEventListener('click', () => closeModal('finance'));
    
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });
    
    DOM.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        state.isLoggedIn = true;
        state.userName = 'John Doe';
        localStorage.setItem('automarket_logged_in', 'true');
        localStorage.setItem('automarket_user_name', 'John Doe');
        closeModal('login');
        showToast('Welcome back, John!');
        updateNavAuth();
    });
    
    DOM.signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        state.isLoggedIn = true;
        state.userName = 'New User';
        localStorage.setItem('automarket_logged_in', 'true');
        localStorage.setItem('automarket_user_name', 'New User');
        closeModal('signup');
        showToast('Account created successfully!');
        updateNavAuth();
    });
    
    DOM.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal('contact');
        showToast('Message sent to seller!');
        DOM.contactForm.reset();
    });
    
    DOM.financeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const price = parseFloat(document.getElementById('financePrice').value) || 0;
        const down = parseFloat(document.getElementById('financeDown').value) || 0;
        const term = parseInt(document.getElementById('financeTerm').value);
        const rate = parseFloat(document.getElementById('financeRate').value) || 0;
        
        const principal = price - down;
        const monthlyRate = rate / 100 / 12;
        const numPayments = term;
        
        let monthlyPayment;
        if (monthlyRate === 0) {
            monthlyPayment = principal / numPayments;
        } else {
            monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
        }
        
        const totalAmount = monthlyPayment * numPayments;
        const totalInterest = totalAmount - principal;
        
        document.getElementById('monthlyPayment').textContent = formatPrice(monthlyPayment);
        document.getElementById('totalInterest').textContent = formatPrice(totalInterest);
        document.getElementById('totalAmount').textContent = formatPrice(totalAmount);
        
        document.getElementById('financeResult').style.display = 'block';
    });
}

function updateNavAuth() {
    if (state.isLoggedIn) {
        document.querySelector('.nav-auth').innerHTML = `
            <a href="#" class="nav-link" data-page="dashboard">${state.userName}</a>
        `;
    }
}

// Car Card Event Listeners
function addCarCardListeners(container) {
    container.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const carId = parseInt(btn.dataset.id);
            const car = carData.find(c => c.id === carId);
            if (car) {
                navigateTo('details', car);
            }
        });
    });
    
    container.querySelectorAll('.car-card-favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const carId = parseInt(btn.dataset.id);
            const index = state.favorites.indexOf(carId);
            
            if (index > -1) {
                state.favorites.splice(index, 1);
                btn.classList.remove('active');
                btn.innerHTML = '<i class="far fa-heart"></i>';
                showToast('Removed from favorites');
            } else {
                state.favorites.push(carId);
                btn.classList.add('active');
                btn.innerHTML = '<i class="fas fa-heart"></i>';
                showToast('Added to favorites');
            }
            
            localStorage.setItem('automarket_favorites', JSON.stringify(state.favorites));
        });
    });
    
    container.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.car-card-favorite') && !e.target.closest('.car-card-btn')) {
                const carId = parseInt(card.dataset.carId);
                const car = carData.find(c => c.id === carId);
                if (car) {
                    navigateTo('details', car);
                }
            }
        });
    });
}

// Initialize Application
function init() {
    initNavigation();
    initHomePage();
    initListingsPage();
    initDetailsPage();
    initSellPage();
    initDashboard();
    initModals();
    
    if (state.isLoggedIn) {
        updateNavAuth();
    }
    
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} AutoMarket. All rights reserved.`;
    
    console.log('AutoMarket initialized successfully!');
}

document.addEventListener('DOMContentLoaded', init);

