# Mohammed Al-Attas | MuhDev

A bilingual portfolio for a mobile app engineer and UI/UX designer. The homepage features TawreedPlus, Qaaf, and PocketDeck. Each project opens in a case study with screenshots and links to the product or source.

## Preview locally

Run this command from the repository root, then open [the local portfolio](http://localhost:3000/).

```sh
python -m http.server 3000
```

The site uses static HTML, CSS, and JavaScript. The language and theme controls remember preferences locally. Each case study has its own share link in English and Arabic, for example `work/tawreedplus.html` and `work/tawreedplus-ar.html`. Existing `project.html?id=…` links still forward visitors to the right case study.

## Source

- `index.html` contains the homepage and contact form.
- `project.html` is the shared case-study template and the entry point for older links.
- `work/` contains the generated case-study pages with localized share metadata. Each project uses a 1200 × 630 JPEG in `assets/images/share/`.
- `assets/js/data.js` holds the project catalog, case-study copy, and links.
- `assets/js/i18n.js` holds the Arabic and English interface copy.
- `assets/css/` contains theme tokens, typography, and layout.
- `assets/fonts/` contains the supplied Thmanyah Sans and Thmanyah Serif Display WOFF2 files.
- `assets/images/showcase/` contains optimized product screenshots for the homepage and case studies.

After editing case-study titles, summaries, or the shared template, regenerate the pages and sitemap with `node scripts/build-case-pages.cjs`. Commit the generated files with the source changes so GitHub Pages can publish them directly.

The contact form uses the existing Formspree endpoint. Visitors can also reach Mohammed by email, LinkedIn, WhatsApp, or phone.

[GitHub](https://github.com/MuhDev) · [LinkedIn](https://www.linkedin.com/in/mohammed-al-attas-09416a234/)
