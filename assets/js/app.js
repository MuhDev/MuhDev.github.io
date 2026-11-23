const featuredIds = ["tawreedplus", "qaaf", "pocketdeck"];
const skills = [
  { label: { ar: "تطوير الجوال", en: "Mobile engineering" }, stack: "Flutter, Dart, Swift, Kotlin" },
  { label: { ar: "تصميم المنتجات", en: "Product design" }, stack: { ar: "Figma، أنظمة التصميم، النماذج التفاعلية", en: "Figma, design systems, prototyping" } },
  { label: { ar: "المعمارية والتكاملات", en: "Architecture and integrations" }, stack: "Clean Architecture, BLoC, Riverpod, Firebase, REST, HyperPay" }
];

function escapeHtml(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

function arrow() {
  return '<span class="round-arrow" aria-hidden="true"><span class="arrow arrow-inline"></span></span>';
}

function renderDeviceFrame(screen, className = "device-frame") {
  return `<span class="${className}">${screen}</span>`;
}

function renderArtwork(id) {
  const images = projectPresentation[id].artwork.map(({ image, width, height, style, device }) => {
    const imageClass = device ? "device-screen" : `work-image work-image--${style}`;
    const imageTag = `<img class="${imageClass}" src="assets/images/showcase/${image}.webp"
      width="${width}" height="${height}" alt="" loading="lazy">`;
    return device ? renderDeviceFrame(imageTag, `device-frame work-device work-device--${style}`) : imageTag;
  }).join("");

  return `<div class="work-art work-art--${id}" aria-hidden="true">${images}</div>`;
}

function renderWork() {
  const featured = document.getElementById("featured-projects");

  featured.innerHTML = featuredIds.map((id) => {
    const { name, type, summary } = projectPresentation[id];

    return `
      <article class="work-entry work-entry--${id}" data-project="${id}">
        <a class="work-link" href="${projectUrl(id)}">
          ${renderArtwork(id)}
          <div class="work-info">
            <div>
              <h3><bdi>${escapeHtml(localize(name))}</bdi></h3>
              <p class="work-type">${escapeHtml(localize(type))}</p>
              <p>${escapeHtml(localize(summary))}</p>
            </div>
            ${arrow()}
          </div>
        </a>
      </article>
    `;
  }).join("");

  const groupedIds = projectPresentation.tawreedplus.platforms;
  const archive = portfolioData.projects.filter(({ id }) => !featuredIds.includes(id) && !groupedIds.includes(id));

  document.getElementById("archive-list").innerHTML = archive.map(({ id }) => {
    const { name, type } = projectPresentation[id];
    return `
      <li>
        <a href="${projectUrl(id)}">
          <span class="archive-title"><bdi>${escapeHtml(localize(name))}</bdi></span>
          <span class="archive-meta">${escapeHtml(localize(type))}</span>
        </a>
      </li>
    `;
  }).join("");
}

function renderAbout() {
  document.getElementById("skill-list").innerHTML = skills.map(({ label, stack }) => `
    <div><dt>${escapeHtml(localize(label))}</dt><dd dir="auto">${escapeHtml(localize(stack))}</dd></div>
  `).join("");

  document.getElementById("credential-list").innerHTML = portfolioData.education.map((credential) => {
    const title = escapeHtml(localize(credential.title));
    const url = credential.link && escapeHtml(credential.link);
    return `
      <li>
        ${url ? `<a href="${url}">${title}</a>` : `<strong>${title}</strong>`}
        <small>${escapeHtml(localize(credential.issuer))} · <bdi>${credential.date}</bdi></small>
      </li>
    `;
  }).join("");
}

function findProject(id) {
  return portfolioData.projects.find((project) => project.id === id);
}

function renderProjectLinks(project) {
  return `<div class="case-links">
    ${project.links.map((link) => `
      <a class="button button-outline case-link" href="${escapeHtml(link.url)}">
        <bdi>${escapeHtml(localize(link.label))}</bdi>
      </a>
    `).join("")}
  </div>`;
}

function renderGallery(project) {
  const name = escapeHtml(localize(projectPresentation[project.id].name));
  const framed = project.layout === "phone";
  const screenshots = project.gallery.map((shot, index) => {
    const { src, label, width, height } = typeof shot === "string" ? { src: shot } : shot;
    const url = escapeHtml(src);
    const caption = label ? escapeHtml(localize(label)) : "";
    const dimensions = width && height ? ` width="${width}" height="${height}"` : "";
    const image = `<img${framed ? ' class="device-screen"' : ""} src="${url}"${dimensions} alt="" loading="lazy">`;
    const description = caption ? `${t("openScreenshot")} · ${caption}` : `${t("openScreenshot")} ${index + 1}`;

    return `<a class="shot-link${framed ? " shot-link--device" : ""}" href="${url}" aria-label="${description} · ${name}">
      ${framed ? renderDeviceFrame(image) : image}
      ${caption ? `<span class="shot-caption">${caption}</span>` : ""}
    </a>`;
  }).join("");

  const layout = framed ? " shot-grid--devices" : project.layout === "landscape" ? " shot-grid--wide" : "";
  return `<div class="shot-grid${layout}">${screenshots}</div>`;
}

function renderCaseDetail(heading, copy) {
  return `
    <section class="case-detail">
      <h2>${escapeHtml(heading)}</h2>
      <div class="case-copy">${copy}</div>
    </section>
  `;
}

function renderPlatform(project) {
  const { name, summary, platformName, platformSummary } = projectPresentation[project.id];
  const copy = `
    <p>${escapeHtml(localize(platformSummary || summary))}</p>
    <div class="case-stack" dir="auto">${escapeHtml(project.tags.join(" · "))}</div>
    ${renderProjectLinks(project)}
  `;

  return `<div class="case-platform">${renderCaseDetail(localize(platformName || name), copy)}${renderGallery(project)}</div>`;
}

function renderCaseStudy(withEntrance = false) {
  const article = document.getElementById("case-study");
  const id = new URLSearchParams(location.search).get("id");
  const project = findProject(id);
  if (!project) {
    document.title = `${t("projectMissing")} | ${t("name")}`;
    article.innerHTML = `
      <div class="case-missing">
        <h1 id="case-title">${t("projectMissing")}</h1>
        <p>${t("projectMissingBody")}</p>
      </div>
    `;
    return;
  }

  const { name, type, summary, role, overview, approach, platforms, artwork, screenshotNote } = projectPresentation[id];
  const projectName = localize(name);
  const date = project.date.replace(' - ', ' – ').replace('Present', root.lang === 'ar' ? 'الآن' : 'Present');
  document.title = `${projectName} | ${t("name")}`;
  document.querySelector('meta[name="description"]').content = localize(summary);

  const roleCopy = role ? localize(role).trim() : "";
  const overviewCopy = `<p>${escapeHtml(localize(overview || project.description))}</p>`;
  const detail = platforms
    ? platforms.map(findProject).map(renderPlatform).join("")
    : `
      ${renderCaseDetail(t("projectApproach"), `
        ${approach ? `<p>${escapeHtml(localize(approach))}</p>` : ""}
        <div class="case-stack" dir="auto">${escapeHtml(project.tags.join(" · "))}</div>
        ${renderProjectLinks(project)}
      `)}
      <section>
        <h2 class="case-shot-heading">${t("projectScreens")}</h2>
        ${screenshotNote ? `<p class="case-shot-note">${escapeHtml(localize(screenshotNote))}</p>` : ""}
        ${renderGallery(project)}
      </section>
    `;

  article.classList.toggle("is-opening", withEntrance);
  article.innerHTML = `
    <header class="case-intro">
      <h1 id="case-title"><bdi>${escapeHtml(projectName)}</bdi></h1>
      <p class="case-summary">${escapeHtml(localize(summary))}</p>
      <p class="case-meta">${escapeHtml(localize(type))} · <bdi>${escapeHtml(date)}</bdi></p>
    </header>
    ${roleCopy ? renderCaseDetail(t("projectRole"), `<p>${escapeHtml(roleCopy)}</p>`) : ""}
    ${artwork ? renderArtwork(id) : ""}
    ${renderCaseDetail(t("projectOverview"), overviewCopy)}
    ${detail}
  `;
  document.getElementById("case-end").hidden = false;
}

function observeProjectArrivals() {
  if (!("IntersectionObserver" in window)) return;

  const threshold = .14;
  const seen = new Set();
  const observer = new IntersectionObserver((entries) => {
    for (const { target, intersectionRatio } of entries) {
      if (intersectionRatio < threshold || !target.isConnected) continue;
      observer.unobserve(target);
      seen.add(target.dataset.project);
      target.classList.add("is-appearing");
    }
  }, { threshold });

  function observeUnseenProjects() {
    observer.disconnect();
    for (const entry of document.querySelectorAll(".work-entry")) {
      if (!seen.has(entry.dataset.project)) observer.observe(entry);
    }
  }

  observeUnseenProjects();
  document.addEventListener("languageChanged", observeUnseenProjects);
}

function setupContact() {
  const form = document.getElementById("contact-form");
  const copyButton = document.getElementById("copy-email");
  const copyStatus = document.getElementById("copy-status");
  const formStatus = document.getElementById("form-status");
  const submit = document.getElementById("contact-submit");
  const label = document.getElementById("submit-label");

  function showFeedback(element, message, state) {
    element.dataset.message = message;
    element.dataset.state = state;
    element.textContent = t(message);
  }

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.profile.contacts.email);
      showFeedback(copyStatus, "copied", "success");
    } catch {
      showFeedback(copyStatus, "copyError", "error");
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled) return;

    submit.disabled = true;
    label.dataset.i18n = "formSending";
    label.textContent = t("formSending");
    formStatus.textContent = "";
    delete formStatus.dataset.message;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Contact submission failed");

      form.reset();
      showFeedback(formStatus, "formSuccess", "success");
    } catch {
      showFeedback(formStatus, "formError", "error");
    } finally {
      label.dataset.i18n = "formSend";
      label.textContent = t("formSend");
      submit.disabled = false;
    }
  });

  document.addEventListener("languageChanged", () => {
    for (const status of [copyStatus, formStatus]) {
      if (status.dataset.message) status.textContent = t(status.dataset.message);
    }
  });
}

if (document.getElementById("featured-projects")) {
  renderWork();
  renderAbout();
  setupContact();
  document.addEventListener("languageChanged", () => {
    renderWork();
    renderAbout();
  });
  observeProjectArrivals();
} else {
  renderCaseStudy(true);
  document.addEventListener("languageChanged", () => renderCaseStudy());
}
