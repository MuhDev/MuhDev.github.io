/**
 * theme.js - Obsidian Dark / Light Theme Controller
 * Defaults to Dark Obsidian, remembers preference.
 */

class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('preferred_theme') || 'dark';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupListeners();
  }

  setupListeners() {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(targetTheme);
      });
    });
  }

  applyTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('preferred_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    // Update icons
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      if (theme === 'dark') {
        icon.className = 'fas fa-sun theme-toggle-icon';
        icon.setAttribute('aria-label', 'Switch to light mode');
      } else {
        icon.className = 'fas fa-moon theme-toggle-icon';
        icon.setAttribute('aria-label', 'Switch to dark mode');
      }
    });

    document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  getTheme() {
    return this.currentTheme;
  }
}

window.Theme = new ThemeManager();
