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