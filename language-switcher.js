// Language Switcher - translates all elements with data-i18n attributes
(function() {
  const DEFAULT_LANG = 'vi';

  function getCurrentLang() {
    return localStorage.getItem('xayxua-lang') || DEFAULT_LANG;
  }

  function setCurrentLang(lang) {
    localStorage.setItem('xayxua-lang', lang);
  }

  function t(key) {
    const lang = getCurrentLang();
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) {
      return translations[DEFAULT_LANG][key];
    }
    return key;
  }

  function applyTranslations(root) {
    const container = root || document;

    // Translate text content
    container.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (key) {
        var val = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = val;
        } else {
          // Check if the translation contains HTML
          if (val.indexOf('<') !== -1) {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        }
      }
    });

    // Translate placeholders
    container.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.placeholder = t(key);
    });

    // Translate HTML content (innerHTML)
    container.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (key) el.innerHTML = t(key);
    });

    // Update lang switcher display
    var switcher = document.getElementById('langSwitcher');
    if (switcher) {
      switcher.value = getCurrentLang();
    }
  }

  function switchLanguage(lang) {
    setCurrentLang(lang);
    applyTranslations();
    // Re-render dynamic content if available
    if (typeof window.rerenderDynamicContent === 'function') {
      window.rerenderDynamicContent();
    }
  }

  // Expose globally
  window.xayxuaI18n = {
    t: t,
    getCurrentLang: getCurrentLang,
    setCurrentLang: setCurrentLang,
    applyTranslations: applyTranslations,
    switchLanguage: switchLanguage
  };

  // Auto-apply translations after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() { applyTranslations(); }, 100);
    });
  } else {
    setTimeout(function() { applyTranslations(); }, 100);
  }

  // Also apply after a short delay to catch dynamically loaded header/footer
  window.addEventListener('load', function() {
    setTimeout(function() { applyTranslations(); }, 300);
  });
})();
