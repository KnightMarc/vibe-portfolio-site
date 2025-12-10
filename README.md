# Vibe Coded Portfolio (React + Vite + Tailwind)

A minimal, high-contrast portfolio starter for Knight Marc Xavier C. Ballao. Uses React, Vite, TailwindCSS, and is ready to deploy on Vercel. Content is placeholder—swap with your real details.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal to view the site.

## Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

1. Import this repo in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Environment: defaults are fine (no secrets needed).

## Structure

- `src/components` — page sections (Nav, Hero, About, Projects, Contact, Footer)
- `src/index.css` — Tailwind directives and base typography
- `tailwind.config.cjs` — includes the custom `violentBlue` color and font stacks

## Fonts

Poppins (headings) and Roboto (body) are loaded via `<link>` tags in `index.html`.

## Contact Form

Form uses Formspree with a placeholder endpoint: update `action` in `Contact.jsx` with your live Formspree form URL.

## Customization

- Update copy in each component.
- Replace placeholder project cards in `Projects.jsx`.
- Adjust accent color by editing `violentBlue` in `tailwind.config.cjs`.

