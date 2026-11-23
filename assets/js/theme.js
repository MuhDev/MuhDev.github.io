const PortfolioPreferences = {
  read(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },

  write(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // The controls still work when storage is unavailable.
    }
  }
};

const root = document.documentElement;
const urlLanguage = new URL(location.href).searchParams.get("lang");
const savedLanguage = PortfolioPreferences.read("preferred_lang");
const isSupportedLanguage = (language) => language === "ar" || language === "en";

if (!root.dataset.caseId) {
  root.lang = isSupportedLanguage(urlLanguage)
    ? urlLanguage
    : isSupportedLanguage(savedLanguage) ? savedLanguage : "ar";
}
root.dir = root.lang === "ar" ? "rtl" : "ltr";
root.dataset.theme = PortfolioPreferences.read("preferred_theme") === "dark" ? "dark" : "light";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-theme-toggle]");
  const updateToggle = () => toggle.setAttribute("aria-pressed", String(root.dataset.theme === "dark"));

  updateToggle();
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    PortfolioPreferences.write("preferred_theme", root.dataset.theme);
    updateToggle();
  });
});
