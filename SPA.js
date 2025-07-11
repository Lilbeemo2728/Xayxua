function loadPage(url, addToHistory = true) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Page not found');
            return res.text();
        })
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

                // Nếu là trang catalog thì khởi tạo lại
                if (url.includes('Catalog.html')) {
                    attachCatalogEvents?.();
                    filterCatalog?.();
                }
            }
        })
        .catch(() => {
            document.querySelector('.main-content').innerHTML = '<h1>404 - Trang không tồn tại</h1>';
        });
}

function attachNavEvents() {
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html')) {
            link.onclick = function (e) {
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
        menuToggle.onclick = function () {
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

window.addEventListener('DOMContentLoaded', function () {
    loadHTML('#header-placeholder', 'header.html', function () {
        enableMenuToggle();
        attachNavEvents(); // Gắn lại sự kiện nav sau khi header load
    });
    loadHTML('#footer-placeholder', 'footer.html', function () {
        attachNavEvents(); // Gắn lại sự kiện nav sau khi footer load
    });

    // Tải trang chính xác khi truy cập trực tiếp
    const path = location.pathname.split('/').pop() || 'index.html';
    loadPage(path, false);
});

// Khi người dùng bấm nút quay lại/trở về
window.addEventListener('popstate', () => {
    const path = location.pathname.split('/').pop() || 'index.html';
    loadPage(path, false);
});
