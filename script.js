let currentCategory = 'all';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 1;
const productsPerPage = 12;
let filteredProducts = productsData; // Add this line at the top

function initializeProducts() {
    currentPage = 1;
    displayProducts(productsData);
    createCategoryFilters();
}

// Create category filter buttons
function createCategoryFilters() {
    const shopSection = document.querySelector('.shop-section');
    if (shopSection.querySelector('.category-filters')) return; // Prevent duplicates

    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filters';

    const categories = ['all', ...new Set(productsData.map(product => product.category))];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-btn';
        let displayName = category.charAt(0).toUpperCase() + category.slice(1);
        if (category === "men's clothing") displayName = "Men's";
        else if (category === "women's clothing") displayName = "Women's";
        else if (category === "jewelery") displayName = "Jewelry";
        button.textContent = displayName;
        button.dataset.category = category;
        if (category === 'all') button.classList.add('active');
        button.addEventListener('click', () => filterByCategory(category));
        filterContainer.appendChild(button);
    });

    shopSection.insertBefore(filterContainer, shopSection.firstChild);
}

// Filter products by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    filteredProducts = category === 'all'
        ? productsData
        : productsData.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display products with pagination
function displayProducts(products) {
    const shopSection = document.querySelector('.shop-section');

    // Animation: fade out
    shopSection.classList.add('fade-out');
    setTimeout(() => {
        // Remove old boxes and pagination after fade out
        shopSection.querySelectorAll('.box').forEach(box => box.remove());
        const existingPagination = shopSection.querySelector('.pagination-controls');
        if (existingPagination) existingPagination.remove();

        const totalPages = Math.ceil(products.length / productsPerPage);
        const startIdx = (currentPage - 1) * productsPerPage;
        const productsToShow = products.slice(startIdx, startIdx + productsPerPage);

        if (productsToShow.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = '<p>No products found in this category.</p>';
            shopSection.appendChild(noProducts);
        } else {
            productsToShow.forEach(product => {
                const productBox = createProductBox(product);
                shopSection.appendChild(productBox);
            });
        }

        if (totalPages > 1) {
            const pagination = document.createElement('div');
            pagination.className = 'pagination-controls';
            pagination.style.display = 'flex';
            pagination.style.justifyContent = 'center';
            pagination.style.gap = '8px';
            pagination.style.margin = '24px 0';

            // Prev button
            const prevBtn = document.createElement('button');
            prevBtn.textContent = 'Prev';
            prevBtn.disabled = currentPage === 1;
            prevBtn.style.padding = '6px 14px';
            prevBtn.style.borderRadius = '4px';
            prevBtn.style.border = '1px solid #ccc';
            prevBtn.style.cursor = 'pointer';
            prevBtn.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    displayProducts(filteredProducts);
                }
            });
            pagination.appendChild(prevBtn);

            // Page numbers
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.textContent = i;
                pageBtn.disabled = i === currentPage;
                pageBtn.style.padding = '6px 12px';
                pageBtn.style.borderRadius = '4px';
                pageBtn.style.border = '1px solid #ccc';
                pageBtn.style.cursor = 'pointer';
                if (i === currentPage) {
                    pageBtn.style.background = '#febd68';
                    pageBtn.style.color = '#111';
                    pageBtn.style.fontWeight = 'bold';
                }
                pageBtn.addEventListener('click', () => {
                    currentPage = i;
                    displayProducts(filteredProducts);
                });
                pagination.appendChild(pageBtn);
            }

            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.textContent = 'Next';
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.style.padding = '6px 14px';
            nextBtn.style.borderRadius = '4px';
            nextBtn.style.border = '1px solid #ccc';
            nextBtn.style.cursor = 'pointer';
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    displayProducts(filteredProducts);
                }
            });
            pagination.appendChild(nextBtn);

            shopSection.appendChild(pagination);
        }

        // Animation: fade in
        shopSection.classList.remove('fade-out');
        shopSection.classList.add('fade-in');
        setTimeout(() => {
            shopSection.classList.remove('fade-in');
        }, 300);
    }, 300);
}

// Update Cart Count in Navbar
function updateCartCount() {
    let cartCountElem = document.querySelector('.nav-cart-count');
    if (!cartCountElem) {
        const cartDiv = document.querySelector('.nav-cart');
        cartCountElem = document.createElement('span');
        cartCountElem.className = 'nav-cart-count';
        cartCountElem.style.marginLeft = '6px';
        cartCountElem.style.background = '#febd68';
        cartCountElem.style.color = '#111';
        cartCountElem.style.fontWeight = 'bold';
        cartCountElem.style.padding = '2px 7px';
        cartCountElem.style.borderRadius = '50%';
        cartDiv.appendChild(cartCountElem);
    }
    cartCountElem.textContent = cart.length;
}

// Add to Cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('Added to cart!');
}

// Show Cart Modal
function showCartModal() {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    if (cart.length === 0) {
        modalBody.innerHTML = `<h2>Your Cart</h2><p>Your cart is empty.</p>`;
    } else {
        modalBody.innerHTML = `
            <h2>Your Cart</h2>
            <ul style="list-style:none;padding:0;">
                ${cart.map((item, idx) => `
                    <li style="margin-bottom:15px;border-bottom:1px solid #eee;padding-bottom:10px;">
                        <img src="${item.image}" alt="${item.title}" style="height:40px;width:40px;object-fit:contain;vertical-align:middle;">
                        <span style="margin-left:10px;">${item.title}</span>
                        <span style="float:right;">$${item.price}</span>
                        <button style="margin-left:15px;padding:2px 8px;" onclick="removeFromCart(${idx})">Remove</button>
                    </li>
                `).join('')}
            </ul>
            <p><strong>Total: $${cart.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)}</strong></p>
        `;
    }
    modal.style.display = 'flex';
}

// Remove from Cart
window.removeFromCart = function(idx) {
    cart.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCartModal();
}

// Create Product Box
function createProductBox(product) {
    const box = document.createElement('div');
    box.className = 'box';
    const truncatedTitle = product.title.length > 25 ? product.title.substring(0, 25) + '...' : product.title;
    const truncatedDescription = product.description.length > 60 ? product.description.substring(0, 60) + '...' : product.description;
    box.innerHTML = `
        <div class="box-content">
            <h2>${truncatedTitle}</h2>
            <p class="product-description">${truncatedDescription}</p>
            <div class="box-img" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <p class="product-price">$${product.price}</p>
                <p class="product-rating">⭐ ${product.rating.rate} (${product.rating.count})</p>
                <p class="product-category">${product.category}</p>
                <div style="display:flex;gap:10px;align-items:center;">
                    <button class="add-to-cart-btn" style="padding:6px 14px;background:#febd68;border:none;border-radius:4px;cursor:pointer;font-weight:bold;">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
    // Open modal when clicking the box (except on Add to Cart)
    box.addEventListener('click', function(e) {
        if (!e.target.classList.contains('add-to-cart-btn')) {
            openProductModal(product);
        }
    });
    box.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.2s ease';
    });
    box.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    box.querySelector('.add-to-cart-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        addToCart(product);
    });
    return box;
}

// Product Modal
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" style="max-width:100%;height:200px;object-fit:contain;display:block;margin:10px auto;">
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Rating:</strong> ⭐ ${product.rating.rate} (${product.rating.count})</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Description:</strong> ${product.description}</p>
    `;
    modal.style.display = 'flex';
}

// Modal close event
document.addEventListener('DOMContentLoaded', function() {
    // Init products and cart count
    initializeProducts();
    updateCartCount();

    // Modal close
    const modal = document.getElementById('product-modal');
    const closeBtn = document.querySelector('.close-modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            modal.style.display = 'none';
        }
    });

    // Cart icon click
    const cartDiv = document.querySelector('.nav-cart');
    if (cartDiv) {
        cartDiv.style.cursor = 'pointer';
        cartDiv.addEventListener('click', function(e) {
            e.preventDefault();
            showCartModal();
        });
    }

    // Footer "Back to Top"
    document.querySelector('.foot-panel1').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

