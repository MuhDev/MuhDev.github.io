/**
 * i18n.js - Instant Bilingual RTL/LTR Translation Engine
 * Zero page reload, fluid typography shift, and state persistence.
 */

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferred_lang') || 'ar';
    this.dict = portfolioData.i18nDict;
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang, false);
    this.setupListeners();
  }

  setupListeners() {
    const switchBtns = document.querySelectorAll('.lang-switch-btn');
    switchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetLang = this.currentLang === 'ar' ? 'en' : 'ar';
        this.applyLanguage(targetLang, true);
      });
    });
  }

  applyLanguage(lang, triggerRerender = true) {
    this.currentLang = lang;
    localStorage.setItem('preferred_lang', lang);

    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update document title
    const docTitle = lang === 'ar'
      ? `${portfolioData.profile.name.ar} | ${portfolioData.profile.role.ar}`
      : `${portfolioData.profile.name.en} | ${portfolioData.profile.role.en}`;
    document.title = docTitle;

    // Update static translated elements
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.dict[lang] && this.dict[lang][key]) {
        el.textContent = this.dict[lang][key];
      }
    });

    // Update translated input placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (this.dict[lang] && this.dict[lang][key]) {
        el.setAttribute('placeholder', this.dict[lang][key]);
      }
    });

    // Update language switch button text
    const langLabels = document.querySelectorAll('.lang-switch-label');
    langLabels.forEach(lbl => {
      lbl.textContent = lang === 'ar' ? 'English' : 'العربية';
    });

    if (triggerRerender && window.AppRenderer) {
      window.AppRenderer.renderAll();
    }

    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  t(key) {
    return this.dict[this.currentLang]?.[key] || key;
  }

  getLang() {
    return this.currentLang;
  }
}

window.I18n = new I18nManager();
