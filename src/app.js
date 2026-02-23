/**
 * BEUShareBox - Ürün Paylaşım Platformu
 * Vanilla JavaScript Mantığı
 */

// Uygulama Durumu (State)
let products = JSON.parse(localStorage.getItem('beu_products')) || [];

// DOM Elemanları
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const totalProductsCount = document.getElementById('totalProducts');
const totalLikesCount = document.getElementById('totalLikes');
const emptyState = document.getElementById('emptyState');

// Başlangıç Çalıştırması
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateStats();
});

// Ürün Ekleme
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const imageUrl = document.getElementById('imageUrl').value || `https://picsum.photos/seed/${Date.now()}/400/300`;

    if (!title || !description || !price || !category) {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }

    const newProduct = {
        id: Date.now(),
        title,
        description,
        price: parseFloat(price),
        category,
        imageUrl,
        likes: 0,
        comments: [],
        createdAt: new Date().toISOString()
    };

    products.push(newProduct);
    saveAndRender();
    productForm.reset();
});

// Ürünleri Listeleme
function renderProducts(productsToRender) {
    productList.innerHTML = '';

    if (productsToRender.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        productsToRender.forEach(product => {
            const article = document.createElement('article');
            article.className = 'product-card';
            article.innerHTML = `
                <div class="product-image">
                    <img src="${product.imageUrl}" alt="${product.title}" referrerPolicy="no-referrer">
                    <span class="category-badge">${product.category}</span>
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <div class="price-tag">${product.price} TL</div>
                </div>
                <div class="product-actions">
                    <button onclick="likeProduct(${product.id})" class="like-btn">
                        ❤️ Beğen (${product.likes})
                    </button>
                    <button onclick="deleteProduct(${product.id})" class="delete-btn">
                        🗑️ Sil
                    </button>
                </div>
                <div class="comment-section">
                    <h4>Yorumlar (${product.comments.length})</h4>
                    <ul class="comment-list">
                        ${product.comments.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                    <form onsubmit="addComment(event, ${product.id})" class="comment-form">
                        <input type="text" placeholder="Yorum yaz..." required>
                        <button type="submit">Gönder</button>
                    </form>
                </div>
            `;
            productList.appendChild(article);
        });
    }
}

// Beğeni Artırma
window.likeProduct = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        product.likes++;
        saveAndRender();
    }
};

// Ürün Silme
window.deleteProduct = (id) => {
    if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
        products = products.filter(p => p.id !== id);
        saveAndRender();
    }
};

// Yorum Ekleme
window.addComment = (e, id) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const comment = input.value.trim();
    
    if (comment) {
        const product = products.find(p => p.id === id);
        if (product) {
            product.comments.push(comment);
            saveAndRender();
        }
    }
};

// Filtreleme (Kategori)
categoryFilter.addEventListener('change', () => {
    filterAndSearch();
});

// Arama
searchInput.addEventListener('input', () => {
    filterAndSearch();
});

function filterAndSearch() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    let filtered = products;

    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    renderProducts(filtered);
}

// İstatistikleri Güncelle
function updateStats() {
    totalProductsCount.textContent = products.length;
    const totalLikes = products.reduce((sum, p) => sum + p.likes, 0);
    totalLikesCount.textContent = totalLikes;
}

// Veriyi Kaydet ve Yeniden Çiz
function saveAndRender() {
    localStorage.setItem('beu_products', JSON.stringify(products));
    renderProducts(products);
    updateStats();
}
