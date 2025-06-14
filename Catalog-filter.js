

function renderCatalog(items) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    if (items.length === 0) {
        grid.innerHTML = `<div class="no-products">
            <h2>No Products Found</h2>
            <p>We couldn't find any products matching your current filters.</p>
            <button class="clear-filters-btn" onclick="clearAllFilters()">Clear Filters</button>
        </div>`;
    } else {
        grid.innerHTML = items.map(item => `
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
}

function filterCatalog() {
    const categoryChecks = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(cb => cb.value);
    const complexityChecks = Array.from(document.querySelectorAll('.complexity-checkbox:checked')).map(cb => cb.value);
    let filtered = catalogItems.filter(item =>
        (categoryChecks.length === 0 || categoryChecks.includes(item.category)) &&
        (complexityChecks.length === 0 || complexityChecks.includes(item.complexity.toString()))
    );

    // Sorting
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'featured';
    if (sortValue === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name-asc') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'name-desc') {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortValue === 'featured') {
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    renderCatalog(filtered);
}

function attachCatalogEvents() {
    document.querySelectorAll('.category-checkbox').forEach(cb =>
        cb.addEventListener('change', filterCatalog)
    );
    document.querySelectorAll('.complexity-checkbox').forEach(cb =>
        cb.addEventListener('change', filterCatalog)
    );
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.addEventListener('change', filterCatalog);
}

function clearAllFilters() {
    document.querySelectorAll('.category-checkbox, .complexity-checkbox').forEach(cb => {
        cb.checked = false;
    });
    filterCatalog();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('catalogGrid')) {
        attachCatalogEvents();
        filterCatalog();
    }
});