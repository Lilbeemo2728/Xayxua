
function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

function _t(key) {
    if (window.xayxuaI18n) return window.xayxuaI18n.t(key);
    return key;
}

function renderProductDetail(product) {
    const container = document.getElementById('productDetail');
    if (!product) {
        container.innerHTML = "<h2>" + _t('product.notfound') + "</h2>";
        return;
    }
    var p = (typeof getCatalogItemTranslated === 'function') ? getCatalogItemTranslated(product) : product;
    var difficultyLabel = _t('product.difficulty');
    var piecesLabel = _t('product.pieces');
    var detailsLabel = _t('product.details');
    var qtyLabel = _t('product.qty');
    var notForSale = _t('product.notforsale');
    var featuredTag = _t('featured.tag');

    container.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-detail-image">
                <img id="mainProductImg" src="${p.images[0]}" alt="${p.title}">
                <div class="product-detail-thumbs">
                    ${p.images.map((img, idx) => `
                        <img src="${img}" class="product-detail-thumb${idx === 0 ? ' selected' : ''}" data-idx="${idx}" alt="${p.title} view ${idx+1}">
                    `).join('')}
                </div>
            </div>
            <div class="product-detail-info">
                <h1>${p.title}</h1>
                <div>
                    <span class="product-category">${p.category}</span>
                    <span class="product-complex">${difficultyLabel}: ${'★'.repeat(p.complexity)}${'☆'.repeat(5-p.complexity)}</span>
                    <span class="product-pieces">${p.pieces} ${piecesLabel}</span>
                </div>
                <div class="product-detail-price">$${p.price.toFixed(2)}</div>
                <p>${p.description}</p>
                <div class="product-detail-set">
                    <h3>${detailsLabel}</h3>
                    <ul>
                        ${p.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-detail-actions">
                    <div class="qty-group">
                        <label for="qtyInput">${qtyLabel}</label>
                        <button type="button" id="qtyMinus" class="qty-btn">-</button>
                        <input type="number" id="qtyInput" value="1" min="1" style="width:40px;">
                        <button type="button" id="qtyPlus" class="qty-btn">+</button>
                    </div>
                    <button class="add-to-cart-btn">${notForSale}</button>
                </div>
            </div>
        </div>

    `;
    const mainImg = document.getElementById('mainProductImg');
    document.querySelectorAll('.product-detail-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            mainImg.src = this.src;
            document.querySelectorAll('.product-detail-thumb').forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
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
    var difficultyLabel = _t('product.difficulty');
    var piecesLabel = _t('product.pieces');
    var featuredTag = _t('featured.tag');

    relatedContainer.innerHTML = related.map(item => {
        var p = (typeof getCatalogItemTranslated === 'function') ? getCatalogItemTranslated(item) : item;
        return `
        <a href="product-detail.html?id=${p.id}" class="catalog-link">
            <div class="catalog-item">
                <img src="${p.images[0]}" alt="${p.title}">
                ${p.featured ? '<span class="featured-tag">' + featuredTag + '</span>' : ''}
                <h3>${p.title}</h3>
                <div class="product-info">
                    <span class="product-pieces">${p.pieces} ${piecesLabel}</span>
                    <span class="product-category">${p.category}</span>
                </div>
                <span class="product-complex">${difficultyLabel}: ${'★'.repeat(p.complexity)}${'☆'.repeat(5-p.complexity)}</span>
                <span class="product-price">$${p.price.toFixed(2)}</span>
            </div>
        </a>
    `}).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    const id = getProductId();
    const product = catalogItems.find(p => p.id === id);
    renderProductDetail(product);
    renderRelatedProducts(id);
});
