# Zelena Nautika — Landing Page

Static landing page that funnels to a direct booking portal. Built to publish on **GitHub Pages**.

## Features
- Oceanic motif, pill-shaped buttons, soft gradients
- Parallax hero + section backgrounds (mobile-friendly fallback)
- Two vessel sections:
  - **Joie de Mer** — BALI 5.8 (Croatia)
  - **Joie de Vivre** — BALI 4.6 (Croatia / Caribbean)
- Lightweight, no external JS deps (Google Fonts only)
- Responsive, accessible, SEO/OpenGraph tags

## Quick Start (GitHub Pages)
1. Create a new GitHub repo, e.g. `zelena-nautika`.
2. Upload these files (keep folder structure).
3. In **Settings → Pages**, set:
   - **Source:** Deploy from a branch (e.g., `main`)
   - **Branch:** `/root` (or `/docs` if you prefer)
4. After GitHub builds, your site will be available at `https://<your-username>.github.io/zelena-nautika/`.

## Customize
- Replace placeholder images in `assets/img`:
  - `hero.jpg`, `jdm-hero.jpg`, `jdv-hero.jpg`, `bali58.jpg`, `bali46.jpg`, `og-cover.jpg`
- Update booking portal URLs in `index.html` (search for `booking.example.com`).
- Adjust copy, specs, and FAQ as needed.
- Favicon currently uses an emoji. Replace via a proper `favicon.ico` if desired.

## Local Preview
Just open `index.html` in your browser, or use a static server:
```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Notes
- Background `background-attachment: fixed` is disabled on small screens (common iOS constraint).
- If you want analytics, add your snippet before `</head>`.
