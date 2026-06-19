# WDD 331R Practice Site
**Student:** Laurin Vasquez
**Semester:** Spring 2026
**Live Site:** [View Site](https://laulinvasquez.github.io/wdd331-practice-site/)
## About
This repository contains my practice and assignment work for WDD 331R: Advanced CSS.  
The project explores modern CSS architecture and frontend workflows including:

- Design tokens with custom properties
- Cascade layers
- Native CSS nesting
- Modern selectors like `:is()`, `:where()`, and `:not()`
- Responsive layouts with Grid and Flexbox
- PostCSS build tooling
- Automated deployment with GitHub Actions

The site deploys automatically to GitHub Pages whenever changes are pushed to the `main` branch.

---

# Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy-website.yml
│
├── css/
│   ├── base/
│   ├── components/
│   ├── layout/
│   ├── utilities/
│   ├── tokens/
│   └── main.css
│
├── dist/
│   └── styles.css
│
├── unit-1/
├── unit-2/
│
├── package.json
├── postcss.config.js
└── README.md
```

---

# CSS Architecture

The project uses a layered CSS architecture:

- `tokens` → design tokens and custom properties
- `base` → element-level styles
- `layout` → structural layout rules
- `components` → reusable UI components
- `utilities` → single-purpose helper classes

Cascade layers are used to control style precedence without relying on high specificity.

## 🔤 Web Font Choice

This project uses a deliberate two-font strategy:

- **Poppins (Google Fonts)** for headings
- **System font stack** for body text

This separation creates a clear typographic hierarchy while keeping body text fast and highly readable.

### Font Loading Strategy

Poppins is loaded from Google Fonts with performance optimizations:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```
# Build Tool

This project uses:

- PostCSS
- postcss-nesting
- Autoprefixer

PostCSS compiles modern CSS features into optimized browser-ready CSS.

## Pages
- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layared and components](unit-2/layered-components/index.html)
- [@scope](unit-2/sandbox/index.html)
- [Postcss practice](unit-2/postcss-demo/index.html)
- [Sandbox](unit-2/sandbox/index.html)
- [shadows](unit-3/shadows/index.html)
- [visual effects](unit-3/visual-effects/index.html)
- [Grid-areas-lines](unit-4/index.html)
- [Grid-layouts](unit-4/grid-layouts/editorial.html)
- [Grid-layouts part 2](unit-4/grid-layouts/cards.html)