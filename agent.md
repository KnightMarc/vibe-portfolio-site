# Agent Notes

## Project Setup
- Stack: React + Vite + TailwindCSS; fonts via Google Fonts links (Poppins for headings, Roboto for body).
- Tailwind config: custom `violentBlue (#3A4FFF)` accent; font families `heading` and `body`.
- Entry files: `index.html` loads fonts and mounts `src/main.jsx`; `src/index.css` hosts Tailwind directives and base typography.
- Sections/components: `Navbar`, `Hero`, `About`, `Projects`, `Contact` (Formspree placeholder action), `Footer`; assembled in `App.jsx`.

## Run / Build
- Install deps: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Deployment (Vercel)
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- No env vars needed for starter; update Formspree endpoint in `src/components/Contact.jsx` when ready.

## Git
- Remote: `origin https://github.com/KnightMarc/vibe-portfolio-site.git`
- Commits so far:
  - `chore: initial commit`
  - `docs: add agent notes`
- Pending changes to commit:
  - Contact form wired to Formspree endpoint `https://formspree.io/f/manrpdya` with loading, success/error states, validation hints, and privacy note.
  - Updated hero copy to reflect BSIT/Network Administration background.
  - Updated about copy to highlight BSIT, network admin, AI-assisted dev focus.
  - Replaced `agent.mb` with `agent.md` (notes file).
- Suggested commit message for current changes: `feat: enhance contact form`

