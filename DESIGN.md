---
name: MuhDev
description: A bilingual mobile engineering and design portfolio where product screenshots lead.
colors:
  paper: "#f7f6f1"
  ink: "#20251f"
  muted: "#535950"
  line: "#d2d5c9"
  control-line: "#777f71"
  field: "#fffefa"
  action: "#243c31"
  on-action: "#fcfdf8"
  focus: "#436657"
  selection: "#dce9ad"
  selection-ink: "#17251d"
  contact: "#e9eddf"
  sage: "#dce7d8"
  sand: "#eee4d2"
  lilac: "#e6e1f0"
  hero-stage: "#123e34"
  hero-plane: "#1d5143"
  hero-text: "#f7f8f1"
  hero-muted: "#d7e7dd"
  hero-accent: "#e7edb5"
  hero-accent-ink: "#263420"
  success: "#285b39"
  error: "#9a2e2b"
  paper-dark: "#1a201c"
  ink-dark: "#f2f2e8"
  muted-dark: "#c0c8ba"
  line-dark: "#46534a"
  control-line-dark: "#8b9b8d"
  field-dark: "#242c25"
  action-dark: "#e4edb9"
  on-action-dark: "#243222"
  focus-dark: "#e4edb9"
  contact-dark: "#25352b"
  sage-dark: "#344d3c"
  sand-dark: "#4f4538"
  lilac-dark: "#3e374d"
  hero-stage-dark: "#143e32"
  hero-plane-dark: "#245241"
  success-dark: "#ace6b0"
  error-dark: "#ffc1b9"
typography:
  display:
    fontFamily: "Thmanyah Sans, system-ui, sans-serif"
    fontSize: "clamp(3.3rem, 6vw, 5.65rem)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-.038em"
  display-ar:
    fontFamily: "Thmanyah Serif Display, Thmanyah Sans, Tahoma, sans-serif"
    fontSize: "clamp(3rem, 5.9vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 1.17
    letterSpacing: "0em"
  headline:
    fontSize: "clamp(2.3rem, 4.4vw, 4.25rem)"
    fontWeight: 700
  title:
    fontSize: "clamp(1.6rem, 2.5vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Thmanyah Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-ar:
    fontFamily: "Thmanyah Sans, Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontSize: ".86rem"
    fontWeight: 700
  button:
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.25
rounded:
  surface: "1.5rem"
  surface-compact: "1.15rem"
  gallery: "1rem"
  field: ".65rem"
  pill: "2rem"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 4.5rem)"
  gallery-gap: ".9rem"
  form-gap: ".95rem"
  work-row-gap: "2.5rem"
  work-column-gap: "clamp(1.2rem, 3vw, 2.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: ".65rem 1.15rem"
    height: "2.95rem"
  button-outline:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: ".65rem 1.15rem"
    height: "2.95rem"
  button-outline-hover:
    backgroundColor: "{colors.field}"
  button-copy:
    rounded: "{rounded.pill}"
    padding: ".35rem .7rem"
    height: "2.75rem"
  button-copy-hover:
    backgroundColor: "{colors.field}"
  contact-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: ".65rem .8rem"
  site-navigation:
    textColor: "{colors.muted}"
  site-navigation-hover:
    textColor: "{colors.ink}"
  project-disclosure:
    textColor: "{colors.ink}"
    height: "3.5rem"
  lead-project:
    backgroundColor: "{colors.hero-stage}"
    textColor: "{colors.hero-text}"
    rounded: "{rounded.surface}"
  work-art-tawreedplus:
    backgroundColor: "{colors.sage}"
    rounded: "{rounded.surface}"
  work-art-qaaf:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.surface}"
  work-art-pocketdeck:
    backgroundColor: "{colors.lilac}"
    rounded: "{rounded.surface}"
  gallery-image:
    backgroundColor: "{colors.field}"
    rounded: "{rounded.gallery}"
    padding: "clamp(.45rem, 1.5vw, 1.05rem)"
  case-contact:
    backgroundColor: "{colors.contact}"
    rounded: "{rounded.surface}"
    padding: "clamp(1.15rem, 4vw, 2.75rem)"
---

# Design System: MuhDev

## Overview

**Creative North Star: "Product Showcase"**

Real product screenshots carry the portfolio. Warm paper, near-black ink, and forest green frame the work. Oversized headings and fine rules organize concise engineering descriptions in both languages.

**Key Characteristics:**

- Real product interfaces in their source direction.
- Arabic RTL and English LTR layouts with equivalent hierarchy.
- Quiet surfaces, with depth reserved for overlapping screenshots.

## Colors

Forest green anchors the filled action and the lead project stage. The hero uses a lighter green plane, ivory type and a pale yellow-green link arrow. Sage identifies TawreedPlus, sand identifies Qaaf, and lilac identifies PocketDeck.

Paper and ink establish the reading surface. Muted ink supports secondary copy, fine rules divide content, and stronger control borders define fields. Use the contact tint for the homepage contact section and case-study callout. Focus, selection, and form feedback each have dedicated colors. The `-dark` tokens correspond to dark-theme overrides in `assets/css/tokens.css`.

## Typography

Thmanyah Sans sets body text, controls, and English headings. Arabic h1 and h2 use the supplied Thmanyah Serif Display with more open leading and neutral tracking. Project titles use bold sans, and compact bold sans identifies project types. The case-study title has its own fluid scale. Keep hero descriptions within 44ch and case-study copy within 68ch.

## Layout

The shell caps at 76rem with fluid inline gutters. Use logical alignment, spacing, and inset properties so the reading order mirrors with the language. At 55rem the hero tightens and the portrait shrinks. At 45rem the navigation moves to a second row and the hero, work grid, About, Contact, and case details stack. Case galleries use auto-fit columns sized for portrait or wide screens.

## Elevation & Depth

Paper, contact areas, and controls are flat. Overlapping screenshots on colored stages carry the depth. The desktop and wide previews use the device shadow, and phone cutouts use drop shadows that follow their silhouettes.

## Shapes

Rounded stages group project artwork. Gallery links and the portrait have smaller corners, and form fields have a shallow radius. Use pills for buttons, circles for the project arrows, and fine rules for section boundaries and disclosures.

## Components

- **Actions.** Filled primary actions and outlined secondary actions use shared sizing. The copy button uses a smaller outlined pill. Hover changes the fill, and primary and outline actions press inward on activation when motion is allowed.
- **Navigation and disclosures.** Text links underline on hover. The More Projects and credentials disclosures use native details with a direction-aware chevron.
- **Project links.** The lead card pairs desktop and phone captures with a caption on the green stage. Work tiles frame screenshots in their project color, with a title, type, summary, and arrow. Hover gently lifts the leading phone when motion is allowed. Gallery links open the linked screenshot.
- **Motion.** The homepage headline leads the entrance, with the supporting copy and device previews following in overlapping beats. Case-study covers settle after the title begins to appear. Selected work reveals once a portion of each card is visible. Pointer hover lifts the device artwork, and reduced motion uses brief fades in place.
- **Contact fields.** Use visible labels, a strong border, and feedback text with success or error color. All interactive controls use a 2px focus outline offset by 4px.

## Do's and Don'ts

- **Do** keep project artwork sourced from the product itself.
- **Do** use logical CSS properties so both languages share the same layout.
- **Do** respect reduced motion for smooth scrolling, screenshot lifts, and button presses.

## Direction contract

**Thesis.** Pair a direct introduction with evidence of shipped work. Show product detail through existing screenshots and concise descriptions.

**Visual system.** Use warm paper, forest green, and product-specific color fields. Set headings and section rules with a consistent spacing rhythm.

**Visitor path.** Recognize Mohammed’s role, open a case study, inspect the work, and reach Contact from the homepage or project page.

**First viewport.** On desktop, place the introduction and actions at the reading start, with a large desktop-and-phone preview at the reading end. On mobile, keep the introduction and primary action immediately above the stacked artwork. The lead project preview links to its case study.

**Form.** User-selected product showcase with concise engineering descriptions. seed:68e1bf3a0e63d5d9

**Finish.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Image sources

Each WebP in `assets/images/showcase/` embeds its source in XMP metadata. PocketDeck uses iPhone frames on the work index and in the case-study gallery.

| Showcase image | Source |
| --- | --- |
| `tawreed-web.webp` | `assets/images/projects/tawreedplus-web-1.png` |
| `tawreed-app-1.webp` through `tawreed-app-5.webp` | Supplied TawreedPlus buyer app screenshots, `1.png` through `5.png` |
| `tawreed-driver-1.webp` through `tawreed-driver-4.webp` | Supplied TawreedPlus Driver screenshots, `driver-1.png` through `driver-4.png` |
| `tawreed-product.webp` | [TawreedPlus product detail](https://store.tawreedplus.com/en/products/3) |
| `qaaf-browse.webp` | `assets/images/projects/Qaff-1.png` |
| `qaaf-player.webp` | `assets/images/projects/Qaff-2.png` |
| `pocketdeck-deck.webp` | PocketDeck Deck view captured from the local app with sample data |
| `pocketdeck-mixer.webp` | PocketDeck Mixer view captured from the local app with sample data |
| `pocketdeck-obs.webp` | PocketDeck OBS view captured from the local app with sample data |

The inherited full-size gallery images come from the MuhDev portfolio repository. Qaaf’s gallery also uses its two showcase WebPs. The About portrait (`assets/images/about-portrait.webp`) is the first of four portraits supplied for the portfolio. The favicon and Apple touch icon use the navbar’s M. mark. The PNGs record `assets/favicon.svg` as their source.

All referenced rasters carry an embedded source record. The inherited rasters retain their original pixels.
