# Fedbellygrouplimited

Public marketing website for Fedbellygrouplimited: producer services platform (collaboration, distribution, rights, royalties, project ops).

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS + brand CSS variables
- Framer Motion (scroll reveal, stagger, parallax)
- `next/font`: Instrument Serif + DM Sans + JetBrains Mono

## Local preview

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build:

```bash
npm run build
npm start
```

XAMPP note: this is a Node/Next.js app. Run it with `npm run dev` or `npm start`, not as Apache PHP from the htdocs path. The project folder can live under XAMPP for organization.

## Deploy

Netlify: connect this GitHub repo; build settings are in `netlify.toml` (`@netlify/plugin-nextjs`, Node 20). Set any form/env vars in the Netlify UI if needed.

## Forms

`POST /api/contact` validates and accepts contact and careers inquiries.

- Without env keys: logs payload in the server console and returns success (demo mode).
- Optional: set `CONTACT_FORM_ENDPOINT` (Formspree or similar) to forward submissions.
- Optional: `NEXT_PUBLIC_SITE_URL`, `CONTACT_TO_EMAIL`, `RESEND_API_KEY`.

## Brand assets

Logos live in `assets/` and are copied to `public/brand/` for the site.

## Site loader

Full-viewport Uiverse.io YOU stroke loader (SelfMadeSystem), brand-remapped gradients, scoped CSS under `fb-loader-*`.
