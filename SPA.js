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

                // If this is the catalog page, initialize catalog
                if (url.includes('Catalog.html')) {
                    attachCatalogEvents();
                    filterCatalog();
                }

                // --- ADD THIS BLOCK ---
                if (url.includes('Carting.html') && typeof attachCatEvents === 'function') {
                    setTimeout(attachCatEvents, 0);
                }
            }
        });
}

function attachNavEvents() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        // Only intercept if NOT Carting.html
        if (href && href.endsWith('.html') && !href.includes('Carting.html')) {
            link.onclick = function(e) {
                e.preventDefault();
                loadPage(href);
            };
        } else if (href && href.includes('Carting.html')) {
            // Remove any previous SPA handler so it does a normal reload
            link.onclick = null;
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
        }
    }
    loadHTML('#header-placeholder', 'header.html', function() {
        enableMenuToggle();
        checkAllLoaded();
    });
    loadHTML('#footer-placeholder', 'footer.html', checkAllLoaded);
});

window.addEventListener('popstate', () => {
    const path = location.pathname.split('/').pop(); // lấy tên file
    loadPage(path || 'index.html', false);
});

function tryAttachCatEvents() {
    if (location.pathname.endsWith('Carting.html') && typeof attachCatEvents === 'function') {
        // Wait for DOM to update
        setTimeout(attachCatEvents, 0);
    }
}

