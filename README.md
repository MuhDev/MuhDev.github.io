# Mohammed Al-Attas | MuhDev

A bilingual portfolio for a mobile app engineer and UI/UX designer. The homepage features TawreedPlus, Qaaf, and PocketDeck. Each project opens in a case study with screenshots and links to the product or source.

## Preview locally

Run this command from the repository root, then open [the local portfolio](http://localhost:3000/).

```sh
python -m http.server 3000
```

The site uses static HTML, CSS, and JavaScript. The language and theme controls remember preferences locally. A project URL includes its language, for example `project.html?id=tawreedplus&lang=ar`.

## Source

- `index.html` contains the homepage and contact form.
- `project.html` is the shared case-study page.
- `assets/js/data.js` holds the project catalog, case-study copy, and links.
- `assets/js/i18n.js` holds the Arabic and English interface copy.
- `assets/css/` contains theme tokens, typography, and layout.
- `assets/fonts/` contains the supplied Thmanyah Sans and Thmanyah Serif Display WOFF2 files.
- `assets/images/showcase/` contains optimized product screenshots for the homepage and case studies.

The contact form uses the existing Formspree endpoint. Visitors can also reach Mohammed by email, LinkedIn, WhatsApp, or phone.

[GitHub](https://github.com/MuhDev) · [LinkedIn](https://www.linkedin.com/in/mohammed-al-attas-09416a234/)
