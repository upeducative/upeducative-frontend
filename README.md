# UpEducative

Premium internship & training platform marketing site, portals, and auth flows — built as a fully static single-page React app.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build tool
- **React Router DOM** — client-side routing
- **Framer Motion** — animations
- **Lucide React** — icons
- **Tailwind CSS v4** — styling (CSS-first config, no `tailwind.config.js` needed)
- **Radix UI** (`react-tooltip`) + **sonner** — accessible tooltip & toast primitives

## Getting Started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

### Other scripts

```bash
npm run build     # Type-check and produce a production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Type-check only, no emit
```

## Project Structure

```
src/
├── main.tsx            # App entry point (mounts React, wraps BrowserRouter)
├── App.tsx              # Root component: ErrorBoundary, ThemeProvider, Toaster, router
├── index.css            # Tailwind v4 entry + design tokens (colors, radii, glass/glow utilities)
├── assets/              # Static assets imported by components (images, etc.)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ErrorBoundary.tsx
│   ├── SectionContainer.tsx
│   └── ui/               # Small reusable UI primitives (sonner Toaster, Tooltip)
├── pages/                # One file per route (Home, About, Auth, dashboards, etc.)
├── layouts/
│   └── Layout.tsx        # Shared page chrome (Navbar + Footer) used by marketing pages
├── hooks/
│   ├── useTheme.tsx      # Theme context/provider
│   └── useScrollAnimation.ts
├── utils/
│   ├── cn.ts             # clsx + tailwind-merge className helper
│   └── animations.ts     # Shared Framer Motion variants
├── constants/
│   └── routes.ts          # Single source of truth for route paths
├── styles/
│   └── scrollbar.css      # Custom scrollbar theming
└── router/
    └── AppRouter.tsx       # <Routes>/<Route> definitions
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/internships` | Internships |
| `/training` | Training |
| `/contact` | Contact |
| `/blog` | Blog |
| `/college-partnership` | College Partnership |
| `/company-partnership` | Company Partnership |
| `/login`, `/signup`, `/reset-password` | Auth |
| `/student-portal` | Student Portal |
| `/admin-dashboard` | Admin Dashboard |
| `/college-portal` | College Portal |
| `*` | 404 Not Found |

## Design System

The visual language (Deep Space Navy background `#050816`, Sky Blue accents, white primary buttons, glassmorphism) is sourced directly from the Hero Section and defined entirely in `src/index.css` as CSS custom properties, then mapped into Tailwind utilities via an `@theme inline` block — this is what makes classes like `bg-background`, `text-accent`, and `border-border` work under Tailwind v4's CSS-first configuration. Shared classes (`.glass`, `.glass-lg`, `.btn-primary`, `.btn-secondary`, `.card-premium`, `.glow-accent`) give every page — Navbar, Footer, and all routes — the same premium look as the Hero.

## Notes

- Authentication and portal pages (`/login`, `/student-portal`, etc.) currently render static, front-end-only UI. Wire them up to a real backend via `VITE_API_BASE_URL` (see `.env.example`) when ready.
- `useScrollAnimation.ts` and `utils/animations.ts` contain ready-to-use scroll/viewport hooks and Framer Motion variants that aren't wired into any page yet — reach for them when adding new animated sections.
