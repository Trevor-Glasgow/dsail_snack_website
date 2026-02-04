# D'Sail Snacks — Landing Page

A React + TypeScript landing page for D'Sail Snacks, built with Vite and Tailwind CSS, designed to be hosted on **GitHub Pages**.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** for build and dev server
- **Tailwind CSS** for styling
- **HTML5** + **CSS** (Tailwind)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The app is configured to use the GitHub Pages base path (`/dsail_snack_website/`), so local dev may show that path in the URL depending on your setup.

## Build for production

```bash
npm run build
```

Output is in the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Push to trigger deployment**
   - Push to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` will build the site and deploy it to GitHub Pages.

3. **View the site**
   - After the first successful run, the site will be at:  
     `https://<your-username>.github.io/dsail_snack_website/`

## Project structure

```
├── index.html          # Entry HTML
├── src/
│   ├── main.tsx        # React entry
│   ├── App.tsx         # Landing page (Hero, Products, About, CTA)
│   ├── index.css       # Tailwind directives + base styles
│   └── vite-env.d.ts
├── public/
│   └── favicon.svg
├── vite.config.ts      # Vite config (base path for GitHub Pages)
├── tailwind.config.js  # Tailwind + custom theme (snack colors, fonts)
└── package.json
```

## Customization

- **Brand colors** and **fonts** are defined in `tailwind.config.js` under `theme.extend` (e.g. `snack-amber`, `snack-brown`, `snack-cream`, `snack-olive`).
- **Content** (headline, products, about, contact) is in `src/App.tsx`. Edit that file to change copy and structure.
