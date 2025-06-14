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
            }
        });
}

function attachNavEvents() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html')) {
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
    loadHTML('#header-placeholder', 'header.html', function() {
        enableMenuToggle();
        attachNavEvents(); // Attach SPA nav to header links
    });
    loadHTML('#footer-placeholder', 'footer.html', function() {
        attachNavEvents(); // Attach SPA nav to footer links
    });
    // Do NOT call attachNavEvents() globally here!
});

window.addEventListener('popstate', () => {
    loadPage(location.pathname, false);
});
