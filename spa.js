function loadPage(url, addToHistory = true) {
    fetch(url)
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newContent = doc.querySelector('.main-content');
            if (newContent) {
                document.querySelector('.main-content').innerHTML = newContent.innerHTML;
                if (addToHistory) {
                    history.pushState(null, '', url);
                }
                attachNavEvents();
                if (url.includes('Catalog.html')) {
                    attachCatalogEvents();
                    filterCatalog();
                }

                if (url.includes('Carting.html') && typeof attachCatEvents === 'function') {
                    setTimeout(attachCatEvents, 0);
                }

                // Re-apply translations after loading new content
                if (window.xayxuaI18n) {
                    setTimeout(function() { window.xayxuaI18n.applyTranslations(); }, 50);
                }
            }
        });
}

function attachNavEvents() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        if (href.includes('Carting.html') || href.includes('Contact.html') || href.includes('blog.html') || href.includes('moc.html')) {
            link.onclick = null;
        } else if (href.endsWith('.html')) {
            link.onclick = function(e) {
                e.preventDefault();
                loadPage(href);
            };
        }
    });
}


function enableMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.onclick = function() {
            navLinks.classList.toggle('show');
        };
    }
}

function loadHTML(selector, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback();
        });
}

window.addEventListener('DOMContentLoaded', function() {
    let loaded = 0;
    function checkAllLoaded() {
        loaded++;
        if (loaded === 2) {
            attachNavEvents();
            if (location.pathname.endsWith('Carting.html') && typeof attachCatEvents === 'function') {
                setTimeout(attachCatEvents, 0);
            }
            // Apply translations after header and footer are loaded
            if (window.xayxuaI18n) {
                // Set the language switcher to the stored value
                var switcher = document.getElementById('langSwitcher');
                if (switcher) {
                    switcher.value = window.xayxuaI18n.getCurrentLang();
                }
                window.xayxuaI18n.applyTranslations();
            }
        }
    }
    loadHTML('#header-placeholder', 'header.html', function() {
        enableMenuToggle();
        checkAllLoaded();
    });
    loadHTML('#footer-placeholder', 'footer.html', checkAllLoaded);
});

window.addEventListener('popstate', () => {
    const path = location.pathname.split('/').pop();
    loadPage(path || 'index.html', false);
});

function tryAttachCatEvents() {
    if (location.pathname.endsWith('Carting.html') && typeof attachCatEvents === 'function') {

        setTimeout(attachCatEvents, 0);
    }
}

// Re-render dynamic content when language changes
window.rerenderDynamicContent = function() {
    // Re-apply translations to static elements
    if (window.xayxuaI18n) {
        window.xayxuaI18n.applyTranslations();
    }
    // Re-render catalog grid if on catalog page
    if (document.getElementById('catalogGrid') && typeof filterCatalog === 'function') {
        filterCatalog();
    }
    // Re-render product detail if on product detail page
    if (document.getElementById('productDetail') && typeof renderProductDetail === 'function') {
        var id = (typeof getProductId === 'function') ? getProductId() : null;
        if (id) {
            var product = catalogItems.find(function(p) { return p.id === id; });
            renderProductDetail(product);
            renderRelatedProducts(id);
        }
    }
};
