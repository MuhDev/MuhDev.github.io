/**
 * modal.js - Accessible Project Case-Study Modal
 * Smooth backdrop blur, screenshot gallery, and hardware-accelerated entry.
 */

class ProjectModal {
  constructor() {
    this.overlay = document.getElementById('projectModal');
    this.dialog = document.getElementById('projectModalDialog');
    this.closeBtn = document.getElementById('projectModalClose');
    this.titleEl = document.getElementById('modalProjectTitle');
    this.logoEl = document.getElementById('modalProjectLogo');
    this.descEl = document.getElementById('modalProjectDesc');
    this.tagsEl = document.getElementById('modalProjectTags');
    this.galleryEl = document.getElementById('modalProjectGallery');
    this.actionsEl = document.getElementById('modalProjectActions');

    this.init();
  }

  init() {
    if (!this.overlay) return;

    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  open(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const lang = window.I18n ? window.I18n.getLang() : 'ar';

    // Populate modal data
    this.titleEl.textContent = project.title[lang];
    this.logoEl.src = project.logo;
    this.logoEl.alt = project.title[lang];
    this.descEl.textContent = project.description[lang];

    // Populate Tags
    this.tagsEl.innerHTML = project.tags.map(tag => `
      <span class="bento-tag">${tag}</span>
    `).join('');

    // Populate Gallery
    if (project.gallery && project.gallery.length > 0) {
      this.galleryEl.innerHTML = project.gallery.map(imgUrl => {
        const resolvedUrl = (window.App && window.App.resolveImageUrl) ? window.App.resolveImageUrl(imgUrl) : imgUrl;
        return `
          <img class="modal-gallery-img" src="${resolvedUrl}" alt="${project.title[lang]} screenshot" loading="lazy">
        `;
      }).join('');
      this.galleryEl.style.display = 'flex';
    } else {
      this.galleryEl.style.display = 'none';
    }

    // Populate Actions / Store Badges
    this.actionsEl.innerHTML = project.links.map(link => {
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
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="store-badge">
          ${iconMarkup}
          <span>${label}</span>
        </a>
      `;
    }).join('');

    // Show modal
    this.overlay.classList.add('active');
    this.dialog.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.overlay.classList.remove('active');
    this.dialog.classList.remove('active');
    document.body.style.overflow = '';
  }

  isOpen() {
    return this.overlay.classList.contains('active');
  }
}

window.Modal = new ProjectModal();
