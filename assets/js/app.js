/**
 * app.js - Main Application Orchestrator
 * Dynamic rendering, Emil Kowalski micro-interactions, copy-to-clipboard toast, and Formspree AJAX.
 */

const AppRenderer = {
  renderAll() {
    this.renderHero();
    this.renderBentoCraft();
    this.renderProjects();
    this.renderSkills();
  },

  getLang() {
    return window.I18n ? window.I18n.getLang() : 'ar';
  },

  resolveImageUrl(url) {
    if (!url) return '';
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }
    return url;
  },

  renderHero() {
    const lang = this.getLang();
    const profile = portfolioData.profile;

    // Hero intro
    const introEl = document.querySelector('[data-i18n-hero-intro]');
    if (introEl) introEl.textContent = lang === 'ar' ? 'مرحباً، أنا ' : "Hi, I'm ";

    // Hero name
    const nameEl = document.querySelector('.text-shimmer');
    if (nameEl) nameEl.textContent = profile.name[lang];

    // Hero subtitle
    const subEl = document.querySelector('.hero-subtitle');
    if (subEl) subEl.textContent = profile.bio[lang];

    // Nav Logo text
    const logoText = document.querySelector('.nav-logo-text');
    if (logoText) logoText.textContent = lang === 'ar' ? 'م. العطاس' : 'M. Al-Attas';

    // Render Stats
    const statsContainer = document.getElementById('heroStatsRow');
    if (statsContainer) {
      statsContainer.innerHTML = profile.stats.map(s => `
        <div class="hero-stat-card glass-panel card-hover">
          <div class="hero-stat-value">${s.value}</div>
          <div class="hero-stat-label">${s.label[lang]}</div>
        </div>
      `).join('');
    }
  },

  renderBentoCraft() {
    const lang = this.getLang();
    const container = document.getElementById('bentoCraftGrid');
    if (!container) return;

    container.innerHTML = portfolioData.bentoCraft.map((item, idx) => {
      let sizeClass = 'bento-card-medium';
      if (item.size === 'large') sizeClass = 'bento-card-large';
      if (item.size === 'half') sizeClass = 'bento-card-half';

      return `
        <div class="bento-card ${sizeClass} glass-panel card-hover reveal-init delay-${(idx + 1) * 100}">
          <div>
            <div class="bento-icon-badge">
              <i class="${item.icon}"></i>
            </div>
            <h3 class="bento-card-title">${item.title[lang]}</h3>
            <p class="bento-card-text">${item.desc[lang]}</p>
          </div>
          <div class="bento-tag-list">
            ${item.tags.map(t => `<span class="bento-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  renderProjects() {
    const lang = this.getLang();
    const container = document.getElementById('projectsGrid');
    if (!container) return;

    container.innerHTML = portfolioData.projects.map((project, idx) => {
      const badgesHtml = project.links.map(link => {
        let iconMarkup = '<i class="fas fa-arrow-up-right-from-square"></i>';
        if (link.type === 'appstore') iconMarkup = '<img src="assets/svg/app-store.svg" alt="App Store">';
        if (link.type === 'googleplay') iconMarkup = '<img src="assets/svg/google-play.svg" alt="Google Play">';
        if (link.type === 'github') iconMarkup = '<i class="fab fa-github"></i>';
        if (link.type === 'website') iconMarkup = '<i class="fas fa-globe"></i>';
        if (link.type === 'uptodown') iconMarkup = '<img src="assets/svg/uptodown.svg" alt="Uptodown">';

        const label = (typeof link.label === 'object' && link.label !== null)
          ? (link.label[lang] || link.label.en || '')
          : link.label;

        return `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="store-badge btn-press">
            ${iconMarkup}
            <span>${label}</span>
          </a>
        `;
      }).join('');

      const isLandscape = project.layout === 'landscape';

      return `
        <article class="project-card glass-panel card-hover reveal-init delay-${(idx % 2 + 1) * 150} ${isLandscape ? 'project-card-landscape' : ''}">
          <div class="project-card-header">
            <div class="project-brand">
              <img src="${project.logo}" alt="${project.title[lang]}" class="project-logo">
              <div>
                <div class="project-title-row">
                  <h3 class="project-title">${project.title[lang]}</h3>
                  ${project.badge ? `<span class="project-badge-pill"><i class="fas fa-code-branch"></i>${project.badge[lang]}</span>` : ''}
                </div>
                <span class="project-date">${project.date}</span>
              </div>
            </div>
            <button class="btn-details btn-press" onclick="window.Modal.open('${project.id}')">
              <span>${window.I18n.t('viewDetailsBtn')}</span>
              <i class="fas fa-chevron-left" style="${lang === 'en' ? 'transform:rotate(180deg);' : ''}"></i>
            </button>
          </div>

          ${this.renderPreviewHtml(project, lang)}

          <div class="project-content">
            <p class="project-desc">${project.description[lang]}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="bento-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-actions">
              ${badgesHtml}
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  renderPreviewHtml(project, lang) {
    if (project.layout === 'landscape') {
      const previews = Array.isArray(project.preview) ? project.preview : [project.preview];
      return `
        <div class="project-preview-wrap project-landscape-wrap" id="previewWrap_${project.id}">
          <div class="project-landscape-showcase" onclick="window.Modal.open('${project.id}')" role="button" tabindex="0" title="${window.I18n.t('viewDetailsBtn')}">
            <img id="landscapeImg_${project.id}" src="${this.resolveImageUrl(previews[0])}" alt="${project.title[lang]} Showcase" class="project-landscape-img" loading="lazy">
            <div class="project-image-hover-overlay">
              <span class="preview-open-badge">
                <i class="fas fa-arrow-up-right-from-square"></i>
                <span>${window.I18n.t('viewDetailsBtn')}</span>
              </span>
            </div>
          </div>
          ${previews.length > 1 ? `
            <div class="multi-screen-indicators landscape-indicators">
              ${previews.map((src, i) => `
                <button class="multi-dot ${i === 0 ? 'active' : ''}" onclick="App.switchLandscapeScreen('${project.id}', '${this.resolveImageUrl(src)}', ${i}, event)" aria-label="Screen ${i + 1}"></button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    if (!Array.isArray(project.preview)) {
      return `
        <div class="project-preview-wrap" onclick="window.Modal.open('${project.id}')" role="button" tabindex="0" title="${window.I18n.t('viewDetailsBtn')}">
          <div class="project-image-showcase">
            <img src="${this.resolveImageUrl(project.preview)}" alt="${project.title[lang]} Preview" class="project-showcase-img" loading="lazy">
            <div class="project-image-hover-overlay">
              <span class="preview-open-badge">
                <i class="fas fa-arrow-up-right-from-square"></i>
                <span>${window.I18n.t('viewDetailsBtn')}</span>
              </span>
            </div>
          </div>
        </div>
      `;
    }

    const count = project.preview.length;

    if (count === 2) {
      return `
        <div class="project-preview-wrap project-multi-wrap project-dual-wrap" id="previewWrap_${project.id}">
          <div class="project-multi-showcase project-dual-showcase">
            <div class="multi-screen-item screen-center" onclick="window.Modal.open('${project.id}')" title="${window.I18n.t('viewDetailsBtn')}">
              <img src="${this.resolveImageUrl(project.preview[0])}" alt="${project.title[lang]} Screen 1" loading="lazy">
              <div class="project-image-hover-overlay">
                <span class="preview-open-badge">
                  <i class="fas fa-arrow-up-right-from-square"></i>
                  <span>${window.I18n.t('viewDetailsBtn')}</span>
                </span>
              </div>
            </div>
            <div class="multi-screen-item screen-right" onclick="App.switchProjectScreen('${project.id}', 1, event)" title="تبديل العرض">
              <img src="${this.resolveImageUrl(project.preview[1])}" alt="${project.title[lang]} Screen 2" loading="lazy">
            </div>
          </div>
          <div class="multi-screen-indicators">
            <button class="multi-dot active" onclick="App.switchProjectScreen('${project.id}', 0, event)" aria-label="Screen 1"></button>
            <button class="multi-dot" onclick="App.switchProjectScreen('${project.id}', 1, event)" aria-label="Screen 2"></button>
          </div>
        </div>
      `;
    }

    // 3 or more screens
    return `
      <div class="project-preview-wrap project-multi-wrap" id="previewWrap_${project.id}">
        <div class="project-multi-showcase">
          <div class="multi-screen-item screen-left" onclick="App.switchProjectScreen('${project.id}', 1, event)" title="تبديل العرض">
            <img src="${this.resolveImageUrl(project.preview[1])}" alt="${project.title[lang]} Screen 2" loading="lazy">
          </div>
          <div class="multi-screen-item screen-center" onclick="window.Modal.open('${project.id}')" title="${window.I18n.t('viewDetailsBtn')}">
            <img src="${this.resolveImageUrl(project.preview[0])}" alt="${project.title[lang]} Screen 1" loading="lazy">
            <div class="project-image-hover-overlay">
              <span class="preview-open-badge">
                <i class="fas fa-arrow-up-right-from-square"></i>
                <span>${window.I18n.t('viewDetailsBtn')}</span>
              </span>
            </div>
          </div>
          <div class="multi-screen-item screen-right" onclick="App.switchProjectScreen('${project.id}', 2, event)" title="تبديل العرض">
            <img src="${this.resolveImageUrl(project.preview[2])}" alt="${project.title[lang]} Screen 3" loading="lazy">
          </div>
        </div>
        <div class="multi-screen-indicators">
          ${project.preview.map((_, i) => `
            <button class="multi-dot ${i === 0 ? 'active' : ''}" onclick="App.switchProjectScreen('${project.id}', ${i}, event)" aria-label="Screen ${i + 1}"></button>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderSkills() {
    if (window.SkillsSphereInstance) {
      window.SkillsSphereInstance.setupMarquee();
      window.SkillsSphereInstance.applyFilter();
    }
  },

  switchProjectScreen(projectId, targetIndex, event) {
    if (event) event.stopPropagation();
    const wrap = document.getElementById(`previewWrap_${projectId}`);
    if (!wrap) return;

    const screens = wrap.querySelectorAll('.multi-screen-item');
    const dots = wrap.querySelectorAll('.multi-dot');
    if (!screens || screens.length < 2) return;

    dots.forEach(d => d.classList.remove('active'));
    if (dots[targetIndex]) dots[targetIndex].classList.add('active');

    if (screens.length === 2) {
      screens.forEach(s => s.classList.remove('screen-center', 'screen-right', 'screen-left'));
      if (targetIndex === 0) {
        screens[0].className = 'multi-screen-item screen-center';
        screens[1].className = 'multi-screen-item screen-right';
        screens[0].onclick = () => window.Modal.open(projectId);
        screens[1].onclick = (e) => this.switchProjectScreen(projectId, 1, e);
      } else {
        screens[1].className = 'multi-screen-item screen-center';
        screens[0].className = 'multi-screen-item screen-right';
        screens[1].onclick = () => window.Modal.open(projectId);
        screens[0].onclick = (e) => this.switchProjectScreen(projectId, 0, e);
      }
      return;
    }

    screens.forEach(s => s.classList.remove('screen-center', 'screen-left', 'screen-right'));
    if (targetIndex === 0) {
      screens[0].className = 'multi-screen-item screen-center';
      screens[1].className = 'multi-screen-item screen-left';
      screens[2].className = 'multi-screen-item screen-right';
      screens[0].onclick = () => window.Modal.open(projectId);
      screens[1].onclick = (e) => this.switchProjectScreen(projectId, 1, e);
      screens[2].onclick = (e) => this.switchProjectScreen(projectId, 2, e);
    } else if (targetIndex === 1) {
      screens[1].className = 'multi-screen-item screen-center';
      screens[0].className = 'multi-screen-item screen-left';
      screens[2].className = 'multi-screen-item screen-right';
      screens[1].onclick = () => window.Modal.open(projectId);
      screens[0].onclick = (e) => this.switchProjectScreen(projectId, 0, e);
      screens[2].onclick = (e) => this.switchProjectScreen(projectId, 2, e);
    } else if (targetIndex === 2) {
      screens[2].className = 'multi-screen-item screen-center';
      screens[0].className = 'multi-screen-item screen-left';
      screens[1].className = 'multi-screen-item screen-right';
      screens[2].onclick = () => window.Modal.open(projectId);
      screens[0].onclick = (e) => this.switchProjectScreen(projectId, 0, e);
      screens[1].onclick = (e) => this.switchProjectScreen(projectId, 1, e);
    }
  },

  switchLandscapeScreen(projectId, imgSrc, targetIndex, event) {
    if (event) event.stopPropagation();
    const wrap = document.getElementById(`previewWrap_${projectId}`);
    if (!wrap) return;

    const img = wrap.querySelector('.project-landscape-img');
    const dots = wrap.querySelectorAll('.multi-dot');

    if (img) {
      img.style.opacity = '0.3';
      img.style.transform = 'scale(0.985)';
      setTimeout(() => {
        img.src = imgSrc;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      }, 150);
    }

    dots.forEach((d, i) => {
      d.classList.toggle('active', i === targetIndex);
    });
  }
};

window.AppRenderer = AppRenderer;
window.App = AppRenderer;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Render
  AppRenderer.renderAll();

  // 2. Scroll Reveal Observer
  setupScrollReveal();

  // 3. Navigation Active Pill on Scroll
  setupActiveNav();

  // 4. Mobile Menu Navigation
  setupMobileMenu();

  // 5. Email Copy to Clipboard Toast
  setupEmailCopy();

  // 6. Formspree Form AJAX Submission
  setupContactForm();
});

function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));
}

// Re-observe dynamic elements after language change
document.addEventListener('languageChanged', () => {
  setupScrollReveal();
});

function setupActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fas fa-circle-check" style="color:var(--success);"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-hide');
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function setupEmailCopy() {
  const copyElements = [
    document.getElementById('copyEmailPill'),
    document.getElementById('copyEmailContact')
  ].filter(Boolean);

  copyElements.forEach(el => {
    el.addEventListener('click', () => {
      const email = portfolioData.profile.contacts.email;
      navigator.clipboard.writeText(email).then(() => {
        const msg = window.I18n ? window.I18n.t('copiedToast') : 'Email copied to clipboard!';
        showToast(msg);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    });
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    const lang = window.I18n ? window.I18n.getLang() : 'ar';

    // Loading State
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <i class="fas fa-spinner fa-spin"></i>
      <span>${window.I18n.t('formSending')}</span>
    `;
    submitBtn.style.opacity = '0.75';

    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        showToast(window.I18n.t('formSuccess'));
        form.reset();
        submitBtn.innerHTML = `
          <i class="fas fa-check"></i>
          <span>${window.I18n.t('formSuccess')}</span>
        `;
        submitBtn.style.background = 'var(--success)';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.style.opacity = '1';
        }, 3500);
      } else {
        throw new Error('Formspree response not ok');
      }
    } catch (err) {
      showToast(window.I18n.t('formError'));
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      submitBtn.style.opacity = '1';
    }
  });
}
