# CarePoint Clinic — HTML Prototype

Static sample UI for a small clinic: reception → vitals → doctor → pharmacy/billing, plus **patient details** and **doctor history** pages.

## Open locally

1. Open `index.html` in your browser (double-click), or
2. From this folder run: `npx --yes serve .` then visit the URL shown.

## Deploy (GitHub Pages)

This folder is its **own** git repository: [clinic-prototype](https://github.com/Gopinath191005/clinic-prototype).

### 1. Push code from your PC (required)

Open PowerShell:

```powershell
cd "C:\New folder\clinic-care-prototype"
git add -A
git commit -m "Deploy clinic prototype"   # skip if nothing to commit
git push -u origin main
```

Sign in to GitHub if prompted. On the repo **Code** tab you should see `index.html` at the root.

### 2. Turn on GitHub Pages (one time)

1. Repo → **Settings** (you are here)
2. Left sidebar → **Pages** (under “Code and automation”)
3. **Build and deployment** → **Source**: **GitHub Actions**
4. After the next push, open **Actions** and wait for “Deploy to GitHub Pages” to finish (green check)

Alternative: Source **Deploy from a branch** → branch **main**, folder **/ (root)** → **Save**.

### 3. Open the site

**https://gopinath191005.github.io/clinic-prototype/**

Wait 1–3 minutes after the first successful deploy. A **404** means either code is not pushed yet or Pages is not enabled.

No build step required.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All screens (workflow, patient, doctor history, stock) |
| `styles.css` | Blue/white theme and layout |
| `app.js` | Navigation, stepper, sample interactions |
