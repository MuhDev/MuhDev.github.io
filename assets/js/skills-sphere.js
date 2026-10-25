/**
 * skills-sphere.js - Interactive 3D Fibonacci Sphere of Tech Skills
 * Reverse-engineered from pszostak.pl:
 * - Mathematical 3D Golden Spiral distribution
 * - Smooth mouse & touch drag physics with velocity damping
 * - Scroll-velocity coupling
 * - Hardware-accelerated 3D projection & depth-based grayscale/opacity
 * - Glowing brand-colored neon hover states
 * - Canvas-rendered 3D wireframe orbital sphere
 * - Category filter support
 */

class SkillsSphere {
  constructor() {
    this.container = document.getElementById('skillsSphereContainer');
    this.stage = document.getElementById('skillsSphereStage');
    this.canvas = document.getElementById('skillsWireframeCanvas');
    this.filterContainer = document.getElementById('skillsFilterNav');

    if (!this.container || !this.stage) return;

    this.skills = portfolioData.sphereSkills || [];
    this.nodes = [];
    this.activeFilter = 'all';

    // 3D Rotation State
    this.rotX = 0.2;
    this.rotY = 0.3;
    this.velX = 0;
    this.velY = 0.003;
    this.baseSpeed = 0.002;
    this.damping = 0.93;

    // Pointer Drag State
    this.isDragging = false;
    this.isHoveringNode = false;
    this.lastPointerX = 0;
    this.lastPointerY = 0;
    this.lastScrollY = window.scrollY;

    // Dimensions
    this.width = 0;
    this.height = 0;
    this.radius = 210;

    this.init();
  }

  init() {
    this.resize();
    this.buildNodes();
    this.setupListeners();
    this.setupFilters();
    this.setupMarquee();
    this.animate();
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width || 800;
    this.height = rect.height || 540;

    // Adjust radius responsively
    if (this.width < 500) {
      this.radius = Math.min(120, this.width * 0.31);
    } else if (this.width < 800) {
      this.radius = 180;
    } else {
      this.radius = 230;
    }

    if (this.canvas) {
      this.canvas.width = this.width * window.devicePixelRatio;
      this.canvas.height = this.height * window.devicePixelRatio;
      this.canvas.style.width = `${this.width}px`;
      this.canvas.style.height = `${this.height}px`;
    }
  }

  getBrandColor(skill) {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    return (isLight && skill.colorLight) ? skill.colorLight : skill.color;
  }

  buildNodes() {
    this.stage.innerHTML = '';
    this.nodes = [];
    const count = this.skills.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    this.skills.forEach((skill, i) => {
      // Fibonacci sphere coordinates
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      const brandColor = this.getBrandColor(skill);

      // Create DOM element for node
      const el = document.createElement('div');
      el.className = 'skills-3d-node';
      el.setAttribute('data-category', skill.category);
      el.style.setProperty('--brand-color', brandColor);

      // Icon markup
      let iconMarkup = '';
      if (skill.isImg) {
        iconMarkup = `<img src="${skill.icon}" alt="${skill.name}" class="node-icon-img">`;
      } else {
        iconMarkup = `<i class="${skill.icon}"></i>`;
      }

      el.innerHTML = `
        <div class="node-icon-wrap">
          ${iconMarkup}
        </div>
        <span class="node-label">${skill.name}</span>
      `;

      // Hover micro-interactions
      el.addEventListener('pointerenter', () => {
        this.isHoveringNode = true;
        el.classList.add('node-hovered');
      });

      el.addEventListener('pointerleave', () => {
        this.isHoveringNode = false;
        el.classList.remove('node-hovered');
      });

      this.stage.appendChild(el);

      this.nodes.push({
        el,
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        skill
      });
    });
  }

  setupListeners() {
    // Window Resize
    window.addEventListener('resize', () => this.resize(), { passive: true });

    // Pointer Dragging (Mouse & Touch)
    this.container.addEventListener('pointerdown', (e) => {
      this.isDragging = true;
      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
      this.container.classList.add('grabbing');
      this.container.setPointerCapture(e.pointerId);
    });

    this.container.addEventListener('pointermove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastPointerX;
      const dy = e.clientY - this.lastPointerY;

      this.velY = dx * 0.0035;
      this.velX = -dy * 0.0035;

      this.rotY += this.velY;
      this.rotX += this.velX;

      this.lastPointerX = e.clientX;
      this.lastPointerY = e.clientY;
    });

    const endDrag = (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.container.classList.remove('grabbing');
      try {
        this.container.releasePointerCapture(e.pointerId);
      } catch (err) {}
    };

    this.container.addEventListener('pointerup', endDrag);
    this.container.addEventListener('pointercancel', endDrag);

    // Scroll Velocity Coupling (from pszostak.pl)
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - this.lastScrollY;
      if (Math.abs(delta) < 140) {
        this.velY += delta * 0.0006;
      }
      this.lastScrollY = currentScroll;
    }, { passive: true });
  }

  setupFilters() {
    if (!this.filterContainer) return;

    const filterBtns = this.filterContainer.querySelectorAll('.skills-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.getAttribute('data-filter');
        this.applyFilter();
      });
    });
  }

  applyFilter() {
    this.nodes.forEach(node => {
      const match = this.activeFilter === 'all' || 
                    node.skill.category === this.activeFilter ||
                    (this.activeFilter === 'tools' && (node.skill.category === 'tools' || node.skill.category === 'arch'));
      
      if (match) {
        node.el.classList.remove('node-dimmed');
        node.el.classList.add('node-highlighted');
      } else {
        node.el.classList.remove('node-highlighted');
        node.el.classList.add('node-dimmed');
      }
    });
  }

  setupMarquee() {
    const marqueeTrack = document.getElementById('skillsMarqueeTrack');
    if (!marqueeTrack) return;

    // Double the items for seamless infinite loop
    const items = [...this.skills, ...this.skills];
    marqueeTrack.innerHTML = items.map(skill => {
      const brandColor = this.getBrandColor(skill);
      return `
        <div class="marquee-tech-pill" style="--brand-color:${brandColor}">
          ${skill.isImg 
            ? `<img src="${skill.icon}" alt="${skill.name}" class="marquee-icon-img">` 
            : `<i class="${skill.icon}"></i>`}
          <span>${skill.name}</span>
        </div>
      `;
    }).join('');
  }

  updateThemeColors() {
    this.nodes.forEach(node => {
      const brandColor = this.getBrandColor(node.skill);
      node.el.style.setProperty('--brand-color', brandColor);
    });

    const marqueeTrack = document.getElementById('skillsMarqueeTrack');
    if (marqueeTrack) {
      const pills = marqueeTrack.querySelectorAll('.marquee-tech-pill');
      pills.forEach((pill, idx) => {
        const skill = this.skills[idx % this.skills.length];
        if (skill) {
          const brandColor = this.getBrandColor(skill);
          pill.style.setProperty('--brand-color', brandColor);
        }
      });
    }

    this.drawWireframe();
  }

  drawWireframe() {
    if (!this.canvas) return;
    const ctx = this.canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
    ctx.scale(dpr, dpr);
    const cx = this.width / 2;
    const cy = this.height / 2;
    const r = this.radius * 0.98;

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // Draw subtle outer halo
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = isLight ? 'rgba(124, 58, 237, 0.12)' : 'rgba(139, 92, 246, 0.08)';
    ctx.lineWidth = isLight ? 1.5 : 1;
    ctx.stroke();

    // Draw rotating meridian rings
    const rings = 4;
    for (let i = 0; i < rings; i++) {
      const angle = (Math.PI / rings) * i + this.rotY * 0.5;
      const squish = Math.cos(angle);

      ctx.beginPath();
      ctx.ellipse(cx, cy, Math.abs(squish) * r, r, this.rotX * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = isLight ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.035)';
      ctx.lineWidth = isLight ? 1.2 : 1;
      ctx.stroke();
    }

    ctx.restore();
  }

  animate() {
    // Velocity inertia damping
    if (!this.isDragging) {
      if (this.isHoveringNode) {
        // Slow down when hovering
        this.velX *= 0.85;
        this.velY = 0.0006;
      } else {
        this.velX *= this.damping;
        this.velY = this.velY * this.damping + this.baseSpeed * (1 - this.damping);
      }

      this.rotX += this.velX;
      this.rotY += this.velY;
    }

    // Clamp X rotation to avoid flipping upside down
    this.rotX = Math.max(-0.85, Math.min(0.85, this.rotX));

    const cx = this.width / 2;
    const cy = this.height / 2;

    const cosY = Math.cos(this.rotY);
    const sinY = Math.sin(this.rotY);
    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // Update 3D nodes
    this.nodes.forEach(node => {
      // Rotation around Y
      const x1 = node.baseX * cosY - node.baseZ * sinY;
      const z1 = node.baseZ * cosY + node.baseX * sinY;

      // Rotation around X
      const y2 = node.baseY * cosX - z1 * sinX;
      const z2 = z1 * cosX + node.baseY * sinX;

      // 3D coordinates
      node.x = x1;
      node.y = y2;
      node.z = z2;

      // 2D Projection
      const screenX = cx + x1 * this.radius;
      const screenY = cy + y2 * this.radius;

      // Depth calculations (-1 = far back, +1 = closest to camera)
      const depth = (z2 + 1) / 2; // 0 to 1

      const isHovered = node.el.classList.contains('node-hovered');
      const isDimmed = node.el.classList.contains('node-dimmed');

      let scale = 0.65 + depth * 0.5; // 0.65 to 1.15
      let opacity = 0.25 + depth * 0.75; // 0.25 to 1.0
      let grayscale = Math.max(0, 1 - depth * 1.4); // Grayscale when far back

      if (isHovered) {
        scale = 1.45;
        opacity = 1.0;
        grayscale = 0;
      } else if (isDimmed) {
        opacity = 0.12;
      }

      const zIndex = isHovered ? 1000 : Math.floor(depth * 100);

      // Apply transform & filter
      node.el.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) translate(-50%, -50%) scale(${scale})`;
      node.el.style.opacity = opacity.toFixed(2);
      node.el.style.zIndex = zIndex;

      const iconWrap = node.el.querySelector('.node-icon-wrap');
      if (iconWrap && !isHovered) {
        if (isLight) {
          // In light mode: smooth desaturation, NO dark brightness filter so white cards stay pristine
          iconWrap.style.filter = `grayscale(${(grayscale * 85).toFixed(0)}%)`;
        } else {
          // In dark mode: desaturation and dimming towards dark obsidian background
          const brightnessVal = 0.55 + (1 - grayscale) * 0.45;
          iconWrap.style.filter = `grayscale(${(grayscale * 100).toFixed(0)}%) brightness(${brightnessVal.toFixed(2)})`;
        }
      } else if (iconWrap) {
        iconWrap.style.filter = 'none';
      }

      // Show label if near front or hovered
      const label = node.el.querySelector('.node-label');
      if (label) {
        if (isHovered || depth > 0.72) {
          label.style.opacity = '1';
          label.style.transform = isHovered ? 'translateY(6px) scale(1.05)' : 'translateY(0) scale(1)';
        } else {
          label.style.opacity = '0';
          label.style.transform = 'translateY(-4px) scale(0.9)';
        }
      }
    });

    // Draw background wireframe
    this.drawWireframe();

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.SkillsSphereInstance = new SkillsSphere();
});

// Re-render / update on language change
document.addEventListener('languageChanged', () => {
  if (window.SkillsSphereInstance) {
    window.SkillsSphereInstance.resize();
  }
});

// Re-render / update on theme change
document.addEventListener('themeChanged', () => {
  if (window.SkillsSphereInstance) {
    window.SkillsSphereInstance.updateThemeColors();
  }
});
