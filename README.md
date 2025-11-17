![Cyber grid hero](./public/assets/evo.png)

# Mohammed Essam El Din — Cyber Portfolio

Production-ready, dark-only personal portfolio built with React 18+, Vite, TailwindCSS, React Router v6, and Framer Motion. The experience leans into a cyber-security aesthetic with neon accents, glitch transitions, and accessible components.

## Quick Vite Bootstrap Reference

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm run dev
```

Prefer a different package manager? Replace the last two commands with `pnpm install && pnpm dev` or `yarn install && yarn dev`.

## Getting Started (This Repo)

1. Clone the repo and install dependencies:
	```bash
	npm install
	```
2. Start the development server:
	```bash
	npm run dev
	```
3. Build for production when you are ready to ship:
	```bash
	npm run build
	```
4. Preview the production build locally:
	```bash
	npm run preview
	```

## Tech Stack

- React 19 with React Router v6 for multi-page navigation
- Vite for lightning-fast builds and HMR
- TailwindCSS 3 with custom neon palette and cyber grid backgrounds
- Framer Motion for page transitions, hover states, modal, and navbar animations

## Folder Highlights

- `src/pages` — Home, About, Projects, and Contact screens with motion transitions
- `src/components` — Navbar with compact variant, Stats dashboard, Project cards/modals, and resume button
- `src/data/projects.js` — Project entries consumed by preview and modal grids (update images in `public/assets` to refresh visuals)
- `src/components/custom` — Drop zone for future “React Bits” style widgets

## Resume / Download Button

- `DownloadResumeButton` references `/mnt/data/Main CV.docx` so the bundled app always points to your exported CV.
- When deploying, replace the file path with a URL hosted alongside your site or place the document inside `public/` and update the constant in `src/components/DownloadResumeButton.jsx`.

## Accessibility & Notes

- Semantic landmarks, keyboard focus styles, lazy-loaded imagery, and reduced-motion friendly transitions are in place.
- Placeholder PNGs live in `public/assets`. Swap them with high-fidelity captures without changing their names to keep the data file intact.
