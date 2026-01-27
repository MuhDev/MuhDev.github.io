// Section Loader - Dynamically loads HTML sections
(function () {
    'use strict';

    // Define sections to load in order
    const sections = [
        { file: 'sections/nav.html', target: 'nav-container' },
        { file: 'sections/hero.html', target: 'hero-container' },
        { file: 'sections/about.html', target: 'about-container' },
        { file: 'sections/projects.html', target: 'projects-container' },
        { file: 'sections/certifications.html', target: 'certifications-container' },
        { file: 'sections/skills.html', target: 'skills-container' },
        { file: 'sections/footer.html', target: 'footer-container' }
    ];

    // Load a single section
    async function loadSection(section) {
        try {
            const response = await fetch(section.file);
            if (!response.ok) {
                throw new Error(`Failed to load ${section.file}: ${response.status}`);
            }
            const html = await response.text();
            const container = document.getElementById(section.target);
            if (container) {
                container.innerHTML = html;
            } else {
                console.error(`Container #${section.target} not found`);
            }
        } catch (error) {
            console.error(`Error loading section ${section.file}:`, error);
        }
    }

    // Load all sections
    async function loadAllSections() {
        // Load sections in parallel for better performance
        await Promise.all(sections.map(section => loadSection(section)));

        // Dispatch custom event when all sections are loaded
        document.dispatchEvent(new Event('sectionsLoaded'));
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllSections);
    } else {
        loadAllSections();
    }
})();
