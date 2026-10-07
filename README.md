# CarePoint Clinic — HTML Prototype

Static sample UI for a small clinic: reception → vitals → doctor → pharmacy/billing, plus **patient details** and **doctor history** pages.

## Open locally

1. Open `index.html` in your browser (double-click), or
2. From this folder run: `npx --yes serve .` then visit the URL shown.

## Deploy (GitHub Pages)

This folder is its **own** git repository: [clinic-prototype](https://github.com/Gopinath191005/clinic-prototype).

After push, enable Pages once:

1. Open the repo on GitHub → **Settings** → **Pages**
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: **main**, folder **/ (root)** → **Save**

Live site (after Pages is enabled): **https://gopinath191005.github.io/clinic-prototype/**

No build step required.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All screens (workflow, patient, doctor history, stock) |
| `styles.css` | Blue/white theme and layout |
| `app.js` | Navigation, stepper, sample interactions |
