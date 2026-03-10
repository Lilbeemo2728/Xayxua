
function _ct(key) {
    if (window.xayxuaI18n) return window.xayxuaI18n.t(key);
    return key;
}

// Minimal HTML escaper - prevents raw data injection into template literals
function _escHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#x27;');
}

function renderCatalog(items) {
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;
    var difficultyLabel = _ct('product.difficulty');
    var piecesLabel = _ct('product.pieces');
    var featuredTag = _ct('featured.tag');

    if (items.length === 0) {
        // Use _ct() directly so text is correct for the current language at render time.
        // data-i18n attributes are kept so applyTranslations() on language switch still works.
        grid.innerHTML = '<div class="no-products">'
            + '<h2 data-i18n="no.products.found">' + _escHtml(_ct('no.products.found')) + '</h2>'
            + '<p data-i18n="no.products.matching">' + _escHtml(_ct('no.products.matching')) + '</p>'
            + '<button class="clear-filters-btn" onclick="clearAllFilters()" data-i18n="clear.filters">'
            + _escHtml(_ct('clear.filters')) + '</button>'
            + '</div>';
    } else {
        grid.innerHTML = items.map(function(item) {
            var p = (typeof getCatalogItemTranslated === 'function') ? getCatalogItemTranslated(item) : item;
            // Guard: use first image only if the array exists and is non-empty
            var imgSrc = (p.images && p.images.length > 0) ? p.images[0] : '';
            // Guard: clamp complexity to [0, 5] to prevent RangeError in String.repeat()
            var complexity = (typeof p.complexity === 'number' && p.complexity >= 0 && p.complexity <= 5)
                ? Math.round(p.complexity) : 0;
            // Guard: type-safe price formatting - falls back to '0.00' if not a number
            var price = (typeof p.price === 'number') ? p.price.toFixed(2) : '0.00';
            var stars = '\u2605'.repeat(complexity) + '\u2606'.repeat(5 - complexity);
            var featuredHtml = p.featured
                ? '<span class="featured-tag">' + _escHtml(featuredTag) + '</span>'
                : '';
            return '<a href="product-detail.html?id=' + _escHtml(p.id) + '" class="catalog-link">'
                + '<div class="catalog-item">'
                + '<img src="' + _escHtml(imgSrc) + '" alt="' + _escHtml(p.title) + '">'
                + featuredHtml
                + '<h3>' + _escHtml(p.title) + '</h3>'
                + '<div class="product-info">'
                + '<span class="product-pieces">' + _escHtml(p.pieces) + ' ' + _escHtml(piecesLabel) + '</span>'
                + '<span class="product-category">' + _escHtml(p.category) + '</span>'
                + '</div>'
                + '<span class="product-complex">' + _escHtml(difficultyLabel) + ': ' + stars + '</span>'
                + '<span class="product-price">$' + price + '</span>'
                + '</div>'
                + '</a>';
        }).join('');
    }
}

function filterCatalog() {
    // Guard: catalogItems must be defined (catalog-data.js must load before this runs)
    if (typeof catalogItems === 'undefined' || !Array.isArray(catalogItems)) {
        console.warn('filterCatalog: catalogItems is not available');
        return;
    }
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

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('catalogGrid')) {
        attachCatalogEvents();
        filterCatalog();
        // Re-render catalog on language switch so all text updates to the new language
        window.rerenderDynamicContent = filterCatalog;
    }
});
