// Example product data


function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

function renderProductDetail(product) {
    const container = document.getElementById('productDetail');
    if (!product) {
        container.innerHTML = "<h2>Product not found.</h2>";
        return;
    }
    container.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-image">
                <img id="mainProductImg" src="${product.images[0]}" alt="${product.title}">
                <div class="product-detail-thumbs">
                    ${product.images.map((img, idx) => `
                        <img src="${img}" class="product-detail-thumb${idx === 0 ? ' selected' : ''}" data-idx="${idx}" alt="${product.title} view ${idx+1}">
                    `).join('')}
                </div>
            </div>
            <div class="product-detail-info">
                <h1>${product.title}</h1>
                <div>
                    <span class="product-category">${product.category}</span>
                    <span class="product-complex">Complexity: ${'★'.repeat(product.complexity)}${'☆'.repeat(5-product.complexity)}</span>
                    <span class="product-pieces">${product.pieces} pieces</span>
                </div>
                <div class="product-detail-price">$${product.price.toFixed(2)}</div>
                <p>${product.description}</p>
                <div class="product-detail-set">
                    <h3>Set Details:</h3>
                    <ul>
                        ${product.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-detail-actions">
                    <div class="qty-group">
                        <label for="qtyInput">Quantity:</label>
                        <button type="button" id="qtyMinus" class="qty-btn">-</button>
                        <input type="number" id="qtyInput" value="1" min="1" style="width:40px;">
                        <button type="button" id="qtyPlus" class="qty-btn">+</button>
                    </div>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="product-detail-icons">
            <span>🚚 Fast Shipping</span>
            <span>🛡️ Quality Guarantee</span>
            <span>↩️ Easy Returns</span>
        </div>
    `;

    // Thumbnail click event
    const mainImg = document.getElementById('mainProductImg');
    document.querySelectorAll('.product-detail-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImg.src = this.src;
            document.querySelectorAll('.product-detail-thumb').forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Quantity + and - functionality
    const qtyInput = document.getElementById('qtyInput');
    document.getElementById('qtyMinus').addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        if (val > 1) qtyInput.value = val - 1;
    });
    document.getElementById('qtyPlus').addEventListener('click', function() {
        let val = parseInt(qtyInput.value, 10);
        qtyInput.value = val + 1;
    });
}

function renderRelatedProducts(currentId) {
    const relatedContainer = document.getElementById('relatedProducts');
    const related = catalogItems.filter(p => p.id !== currentId).slice(0, 3);
    relatedContainer.innerHTML = related.map(item => `
        <a href="product-detail.html?id=${item.id}" class="catalog-link">
            <div class="catalog-item">
                <img src="${item.images[0]}" alt="${item.title}">
                ${item.featured ? '<span class="featured-tag">FEATURED</span>' : ''}
                <h3>${item.title}</h3>
                <div class="product-info">
                    <span class="product-pieces">${item.pieces} pieces</span>
                    <span class="product-category">${item.category}</span>
                </div>
                <span class="product-complex">Complexity: ${'★'.repeat(item.complexity)}${'☆'.repeat(5-item.complexity)}</span>
                <span class="product-price">$${item.price.toFixed(2)}</span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const id = getProductId();
    const product = catalogItems.find(p => p.id === id);
    renderProductDetail(product);
    renderRelatedProducts(id);
});