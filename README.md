# CareHub Plus

A hospital marketing site: departments, doctors, patient stories, a booking flow, and a portal mock. Built with Next.js 16, React 19, and Tailwind CSS v4.

The copy and listings live in `src/lib/data.ts`. There is no API and no database. The booking wizard, contact form, and portal screen all run in the browser.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Hero, stats, department preview, journey, testimonials |
| `/about` | Hospital story |
| `/departments` | Searchable department list, plus a page per specialty |
| `/doctors` | Doctor directory |
| `/stories` | Patient stories |
| `/faq` | Accordion of common questions |
| `/book` | Multi-step appointment wizard |
| `/contact` | Contact form |
| `/portal` | Static preview of a patient portal |

Dark mode follows the system preference and can be toggled. The choice is stored in `localStorage`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
