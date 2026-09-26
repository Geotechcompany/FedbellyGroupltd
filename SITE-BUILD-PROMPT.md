# Fedbellygrouplimited: Master Site Build Prompt

**Paste this entire file into a Cursor / IDE coding agent and run to completion.**

This is the **only** build brief. Brand, copy, motion, SEO, and execution rules live here. Do not wait for other docs.

---

## 0. Role, goal, and hard rules

**Role:** Senior frontend engineer shipping a production-ready marketing website.

**Goal:** Build the complete Fedbellygrouplimited showcase site in one pass. Finish every route, every section of copy below, images, motion, SEO, and forms. Do not stop at a scaffold. Do not leave stubs.

**Site:** Public marketing / showcase only. Presentation quality inspired by premium music-service sites (structure/energy like onerpm.com). Original Fedbelly content, brand, and positioning. Producer-client collaboration platform story.

### Hard rules

1. Showcase only. **No Login. No Sign up. No Admin. No authenticated app UI. No OAuth. No dashboards.**
2. CTAs: **Request a demo**, **Contact**, **Join waitlist**, **Talk to us** only.
3. Put every line of page copy from this doc on the live pages. No Lorem. No empty sections. No "coming soon" pages.
4. No TODOs, placeholders, or half-finished components in the final tree.
5. `npm run build` must succeed before you claim done.
6. Copy voice: active, specific, no AI slop (ban filler and buzzwords; see Voice section). No em dashes.
7. Complete each build-order step before the next. Do not claim done until Definition of Done is green.

### Definition of Done

- [ ] All routes listed below exist and render with full copy from this file
- [ ] **SiteLoader** (Uiverse.io by SelfMadeSystem YOU stroke SVG) ships as full-viewport overlay on initial load; HTML + CSS from § Site Loader implemented (scoped); min display ~600ms, max ~2s, then fade out when fonts + hero ready; reduced-motion shows static mark; not a placeholder spinner
- [ ] Unsplash images wired per section map; width/height or aspect set; alt text on every image
- [ ] Motion: scroll reveal, stagger, parallax on specified sections; `prefers-reduced-motion` fallbacks
- [ ] Responsive at 375, 768, 1024, 1440
- [ ] SEO: unique title + meta description, OG, Twitter, canonical, JSON-LD Organization (FAQPage on FAQ), `sitemap.xml`, `robots.txt`
- [ ] Forms: contact, demo, waitlist accept submit (Formspree, Resend, or Next.js route handler that stores/emails; show success state)
- [ ] Logos from `assets/` in nav + favicon
- [ ] No broken internal links; no placeholder text; no empty sections; no Login/Admin/auth UI
- [ ] `npm run build` exits 0

---

## 1. Sequential build order

Complete each step fully before moving on. Do not skip ahead and leave stubs.

1. **Scaffold** : Next.js 14 App Router, TypeScript, Tailwind, fonts, CSS brand tokens, copy logos from `assets/` into `public/brand/`
2. **Global layout** : sticky nav, footer, mobile drawer, skip link (showcase CTAs only)
3. **All pages** : Home first (parallax hero + mid-page band), then every remaining route with full copy and images from this file
4. **Motion system** : shared Reveal / Stagger / Parallax; `prefers-reduced-motion` paths
5. **SEO** : metadata API, OG/Twitter, JSON-LD, `sitemap.ts`, `robots.txt`
6. **Forms** : contact, demo, waitlist with validation + success/error UI
7. **SiteLoader** : implement verbatim Uiverse loader (§ Site Loader) in root layout; overlay timing; fade-out; reduced-motion static mark; scope CSS
8. **QA** : responsive at 375 / 768 / 1024 / 1440; focus states; link audit; loader timing; no Login strings
9. **Verify** : `npm run build` exits 0; fix until green

---

## 2. Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 App Router, TypeScript |
| Style | Tailwind CSS + CSS variables for brand tokens |
| Fonts | `next/font`: Fraunces (display) + Satoshi or General Sans via local/CDN; fallback: `next/font/google` **Instrument Serif** + **DM Sans** if Satoshi unavailable. Do not use Inter/Roboto/Arial as primary |
| Motion | Framer Motion and/or CSS scroll-driven + IntersectionObserver |
| Images | `next/image` with Unsplash URLs (or downloaded files in `public/images` with attribution comments) |
| Forms | Prefer `app/api/contact/route.ts` + env email, or Formspree endpoint |
| Deploy target | Static-friendly Vercel or Node server; SSG where possible |

### Env vars (optional)

```
NEXT_PUBLIC_SITE_URL=https://www.fedbellygrouplimited.com
CONTACT_FORM_ENDPOINT= # Formspree or similar
RESEND_API_KEY= # if using Resend
CONTACT_TO_EMAIL=ops@fedbellygrouplimited.com
```

If no keys: implement API route that validates and returns 200 with logged payload in dev, and a clear success message in UI. Still "works" for demo.

### Project location

Build the site inside this folder (or a `web/` subfolder):

`C:\xampp\htdocs\GEOTECH COMPANY PROJECTS\COMPLETED\Fedbellygrouplimited`

Existing logos: `assets/logo-mark.png`, `assets/logo-wordmark-dark.png`, `assets/logo-wordmark-light.png`. Copy to `public/brand/`.

### File / folder tree to create

```
Fedbellygrouplimited/
 assets/ # source logos (already present)
 public/
 brand/
 logo-mark.png
 logo-wordmark-dark.png
 logo-wordmark-light.png
 favicon.ico # generate from mark
 robots.txt
 app/
 layout.tsx
 page.tsx # Home
 globals.css
 sitemap.ts
 how-it-works/page.tsx
 toolkit/page.tsx
 distribution/page.tsx
 rights-publishing/page.tsx
 analytics-royalties/page.tsx
 solutions/page.tsx
 solutions/emerging/page.tsx
 solutions/taking-off/page.tsx
 solutions/next-level/page.tsx
 about/page.tsx
 careers/page.tsx
 faq/page.tsx
 contact/page.tsx
 request-demo/page.tsx
 waitlist/page.tsx
 blog/page.tsx
 legal/terms/page.tsx
 legal/privacy/page.tsx
 api/contact/route.ts
 components/
 layout/SiteHeader.tsx
 layout/SiteFooter.tsx
 layout/MobileNav.tsx
 layout/SiteLoader.tsx
 layout/loader.css
 ui/Button.tsx
 ui/Section.tsx
 motion/Reveal.tsx
 motion/Stagger.tsx
 motion/Parallax.tsx
 media/UnsplashImage.tsx
 forms/InquiryForm.tsx
 seo/JsonLd.tsx
 home/...
 lib/
 brand.ts
 unsplash.ts
 seo.ts
 copy/ # optional: typed copy modules per page
 README.md
 SITE-BUILD-PROMPT.md # this file
```

---

## 3. Brand system (complete)

### Brand line

Fedbellygrouplimited markets a producer services platform: production delivery, distribution, rights, royalties, and project ops for artists, songwriters, managers, labels, and producers. This site is public marketing only.

### Voice

Precise. Studio-floor credible. Energetic visuals; clear copy.

- Active voice. Specific claims. Mix short and long sentences.
- Name the tool, handoff, file, split, report.
- Ban filler, buzzwords, throat-clearing openers, and em dashes. Prefer concrete studio verbs.
- Prefer: deliver, assign, register, split, claim, report, release, protect.
- CTAs: Request a demo, Contact, Join waitlist, Talk to us. Never Login or Sign in.

| Weak | Use |
|------|-----|
| Vague creative-journey slogan | Hire a producer, track the session, ship the masters |
| Vague career-unlock slogan | Move from brief to DSP delivery with one team |
| Empty superlative analytics claim | Stream, territory, and revenue views by release |

### Visual direction

Dark-mode premium tech (black / white / mint), music-producer energy. Full-bleed heroes, one job per section, brand-first first viewport. Structure may echo ONErpm-class public sites; never copy their text, logos, or colors. Logo language inspired by high-contrast tech lockups (black ground, mint mark, split wordmark); mark and name are original Fedbelly.

Avoid: purple-on-white AI look, warm cream + terracotta lifestyle look, dense broadsheet newspaper layouts.

### Color palette

| Token | Hex | Role |
|-------|-----|------|
| Ink / Black | `#0B0C10` | Primary background (logo grounds use pure `#000000`) |
| Charcoal | `#161821` | Elevated surfaces |
| Graphite | `#2E3340` | Borders, inputs |
| Mist | `#9AA0AE` | Secondary text |
| Ivory | `#F4F2EC` | Primary text on dark |
| Soft White | `#FBFAF7` | Light FAQ/legal surfaces; light wordmark ground |
| Mint | `#98FFD8` | **Primary brand accent**: logo mark, "belly" wordmark half, CTAs, focus, links |
| Mint Deep | `#0D9B7A` | Mint on light backgrounds when `#98FFD8` fails contrast |
| Lime | `#C8F542` | Taking Off stage |
| Cyan | `#2EE6D6` | Next Level stage; loader tertiary |
| Amber | `#FFB020` | Emerging stage; sparse badges |
| Coral | `#FF4D6A` | Sparse marquee / loader accent only (not primary CTA) |
| Magenta | `#E83E8C` | Rare loader / marquee accent |

Rules: neutrals ~70% of surface. Hero = Ink + Ivory + Mint (max). Career stages: Emerging = Amber, Taking Off = Lime, Next Level = Cyan. **Mint = global primary CTA and focus ring.** Do not theme the site in purple. Do not use competitor logos or names.

CSS variables example:

```css
:root {
 --ink: #0B0C10;
 --black: #000000;
 --charcoal: #161821;
 --graphite: #2E3340;
 --mist: #9AA0AE;
 --ivory: #F4F2EC;
 --soft-white: #FBFAF7;
 --mint: #98FFD8;
 --mint-deep: #0D9B7A;
 --lime: #C8F542;
 --cyan: #2EE6D6;
 --amber: #FFB020;
 --coral: #FF4D6A;
 --magenta: #E83E8C;
}
```

### Typography

| Role | Font | Notes |
|------|------|-------|
| Display H1-H2 | Fraunces or Instrument Serif | Optical sizing; tracking −0.02em to −0.04em at large sizes |
| Body / UI / wordmark feel | Satoshi, General Sans, or DM Sans | Geometric sans; +0.01em to +0.02em below 14px |
| Mono | JetBrains Mono or IBM Plex Mono | Metadata diagrams only |

### Logo

Source files (copy into `public/brand/`):

| File | Use |
|------|-----|
| `assets/logo-mark.png` | Geometric slanted **F** mark, Mint `#98FFD8` on black; favicon + reduced-motion loader |
| `assets/logo-wordmark-dark.png` | Full lockup on black: mint F mark + **Fed** white + **belly** mint |
| `assets/logo-wordmark-light.png` | Light-surface lockup: charcoal/mint mark + **Fed** charcoal + **belly** mint/teal |

**Lockup rules**

- Primary nav on dark: `logo-wordmark-dark.png` (or mark + CSS text "Fed" Ivory / "belly" Mint).
- Light sections / Soft White pages: `logo-wordmark-light.png`.
- Short name in UI: **Fedbelly**. Full legal name **Fedbellygrouplimited** in footer/SEO/Organization JSON-LD.
- Gap mark→wordmark ≈ 0.5× mark width. Clear space = height of F. Min mark 24px.
- Keep upright. No stretch, glow, rainbow fills, music-note mashups, or competitor-style hourglass/X marks.
- Optional Mint underline under the wordmark on hover/focus of home link.

Favicon: crop/derive from `logo-mark.png`.

### Materials

Sticky nav: `backdrop-filter: blur(20px)` over `rgba(11,12,16,0.72)`. Dividers: Graphite 40-60% opacity. Animate with transform and opacity only.

### Motion vocabulary (implement these)

| Term | Spec |
|------|------|
| Press / tap feedback | Scale 0.97-0.98 on pointer down; spring back |
| Spring | Critically damped; interruptible on chrome |
| Scroll reveal | Opacity + 16-24px Y; once per element; ease-out |
| Stagger | 50-70ms between siblings; max 8 |
| Scroll-driven animation | Optional progress fades; fallback to intersection |
| Ease-out | Default for reveals |
| Parallax | Hero bg slower than type/CTA; mid-page photo bands |
| Crossfade | When reduced-motion kills parallax |
| Origin-aware menus | Desktop dropdowns from trigger |
| Marquee | Creator strip; pause on hover |
| Rubber-banding | Mobile nav drawer |

Reduced motion: disable parallax and marquee motion; static image + brief crossfade OK.

### Breakpoints

| Name | Width |
|------|-------|
| Mobile | 375 |
| Tablet | 768 |
| Desktop | 1024 |
| Wide | 1440 |

Mobile-first. Mobile nav: full-height drawer, rubber-banding optional, focus trap, Esc close.

### Layout rules

- First viewport: one composition. Brand-first. Full-bleed hero plane.
- Hero budget: brand, one headline, one supporting sentence, one CTA group, one dominant image. No cards in hero. No floating badges on hero media.
- Cards only for interactive containers (forms, FAQ accordion). Elsewhere: open sections, photo bands, typography.
- One job per section.

---

## 4. Unsplash image map

Use `https://images.unsplash.com/` or search Unsplash and pin photo IDs in `lib/unsplash.ts`. Prefer diverse casts. Scrim Ink gradients for text.

| Key | Search query | Typical use |
|-----|--------------|-------------|
| studio-session | recording studio session musicians producer | Home hero, toolkit |
| mixing-desk | mixing console faders studio close-up | How it works, toolkit |
| headphones | studio headphones over-ear dark | Analytics mid |
| live-stage | live concert stage lights crowd silhouette | Solutions Next Level, Home band |
| vinyl | vinyl record turntable close-up | About, blog |
| city-night | city night skyline neon rain | Home parallax band 2 |
| collaboration | creative collaboration laptop music table | Solutions Emerging |
| waveform-photo | audio waveform on screen photography | Distribution |
| control-room | music control room glass booth | Rights, How it works |
| artist-portrait | musician portrait moody stage light | Creator strip |

Alt pattern: `{Subject} : {page context for Fedbelly}`.

Example URL shape (replace IDs after you pick real photos):

`https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=2400&q=80`

Document final IDs in `lib/unsplash.ts` comments.

### Parallax assignment

| Page | Parallax |
|------|----------|
| Home | Hero layers + mid-page city-night band + optional live-stage band |
| Solutions (index or Next Level) | One mid-page live-stage or city-night band |
| Distribution | Optional waveform-photo subtle parallax |
| All others | Scroll reveal + stagger; no parallax required |

---

## 5. Navigation and footer

### Primary nav

Home | How it works | Capabilities (dropdown: Toolkit, Distribution, Rights & Publishing, Analytics & Royalties) | Solutions | Who we are | FAQ | Blog

Header CTA (Mint fill, Ink text): Request a demo  
Secondary text link: Contact

No Login. No Sign in.

### Mobile nav

Hamburger → drawer. Same links + Request a demo + Join waitlist. Close on route change.

### Footer

Columns:

1. Capabilities (four links)
2. Solutions (Emerging, Taking Off, Next Level)
3. Company (About, Careers, FAQ, Blog, Contact)
4. Legal (Terms, Privacy)

Bottom: logo mark + "Fedbellygrouplimited" + © year. Short line: "Producer services for artists, managers, labels, and producers."

---

## 6. Site loader (required, not optional)

**Credit in code comment:** `From Uiverse.io by SelfMadeSystem`

Ship a full-page site loader on first visit / initial app load (optional: brief overlay on client route transitions). This is **Definition of Done**. Do not substitute a CSS ring spinner or "Loading…".

### Behavior

1. Component: `components/layout/SiteLoader.tsx` (alias name `YouLoader` OK if you prefer).
2. Full-viewport fixed overlay: background Ink `#0B0C10` or pure black; loader centered; `z-index` above header/content (e.g. 9999); `pointer-events: none` after dismiss starts.
3. Show on first paint / initial hydration until fonts + hero LCP image are ready. Enforce **min ~600ms**, **max ~2s**, then fade out (opacity crossfade **300–400ms**). Remove from DOM or `aria-hidden` + `inert` after fade.
4. Wire in `app/layout.tsx` so every public route gets it on cold load.
5. `prefers-reduced-motion: reduce` → hide animated SVG strokes; show static `logo-mark.png` centered instead; still dismiss the overlay on the same timing rules.
6. Must be fully built. Not polish-later.

### CSS scoping (avoid Tailwind collisions)

Tailwind utilities `.absolute`, `.inline-block`, `.w-2` will collide if loader CSS is global and unscoped.

**Required approach (pick one):**

- **A (preferred):** Put Uiverse rules in `components/layout/loader.css` imported only by `SiteLoader`. Prefix every loader class with `fb-loader-` in both HTML and CSS (e.g. `.fb-loader-absolute`, `.fb-loader`, `.fb-loader-dash`). Keep path geometry and keyframes identical.
- **B:** Wrap markup in `.fb-site-loader` and nest/duplicate Uiverse selectors under that wrapper without relying on bare `.absolute` / `.w-2` at the document root.

Do not let loader CSS break layout utilities elsewhere.

### Gradient colors (prefer brand remap)

Keep path `d` attributes, `pathLength`, structure, and animations identical. **Prefer remapping** gradient `stop-color` values to Fedbelly accents from this prompt:

| Gradient id | Original stops | Prefer brand remap |
|-------------|----------------|--------------------|
| `#b` (Y stroke) | `#973BED` → `#007CFF` | `#FF4D6A` (Coral) → `#2EE6D6` (Cyan) |
| `#c` (O spin) | `#FFC800` → `#F0F` | `#FFB020` (Amber) → `#E83E8C` (Magenta) |
| `#d` (U stroke) | `#00E0ED` → `#00DA72` | `#2EE6D6` (Cyan) → `#C8F542` (Lime) |

Original Uiverse stop-colors remain acceptable only if remapping breaks visual balance; default to brand remap for cohesion.

### Loader HTML (implement completely)

Use this structure. If using approach A, rename classes with `fb-loader-` prefix consistently. Credit comment required.

```html
<!-- From Uiverse.io by SelfMadeSystem -->
<div class="loader">
  <svg height="0" width="0" viewBox="0 0 64 64" class="absolute">
    <defs class="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
        <stop class="s-xJBuHA073rTt" stop-color="#FF4D6A"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#2EE6D6" offset="1"></stop>
      </linearGradient>
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
        <stop class="s-xJBuHA073rTt" stop-color="#FFB020"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#E83E8C" offset="1"></stop>
        <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform"></animateTransform>
      </linearGradient>
      <linearGradient class="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
        <stop class="s-xJBuHA073rTt" stop-color="#2EE6D6"></stop>
        <stop class="s-xJBuHA073rTt" stop-color="#C8F542" offset="1"></stop>
      </linearGradient>
    </defs>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#b)" d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z" class="dash" id="y" pathLength="360"></path>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style="--rotation-duration:0ms; --rotation-direction:normal;" viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="10" stroke="url(#c)" d="M 32 32
        m 0 -27
        a 27 27 0 1 1 0 54
        a 27 27 0 1 1 0 -54" class="spin" id="o" pathLength="360"></path>
  </svg>
  <div class="w-2"></div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" style="--rotation-duration:0ms; --rotation-direction:normal;" viewBox="0 0 64 64" height="64" width="64" class="inline-block">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="url(#d)" d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z" class="dash" id="u" pathLength="360"></path>
  </svg>
</div>
```

### Loader CSS (verbatim animation; scope/prefix as above)

```css
/* From Uiverse.io by SelfMadeSystem */
.absolute { position: absolute; }
.inline-block { display: inline-block; }
.loader { display: flex; margin: 0.25em 0; }
.w-2 { width: 0.5em; }
.dash {
  animation: dashArray 2s ease-in-out infinite,
    dashOffset 2s linear infinite;
}
.spin {
  animation: spinDashArray 2s ease-in-out infinite,
    spin 8s ease-in-out infinite,
    dashOffset 2s linear infinite;
  transform-origin: center;
}
@keyframes dashArray {
  0% { stroke-dasharray: 0 1 359 0; }
  50% { stroke-dasharray: 0 359 1 0; }
  100% { stroke-dasharray: 359 1 0 0; }
}
@keyframes spinDashArray {
  0% { stroke-dasharray: 270 90; }
  50% { stroke-dasharray: 0 360; }
  100% { stroke-dasharray: 270 90; }
}
@keyframes dashOffset {
  0% { stroke-dashoffset: 365; }
  100% { stroke-dashoffset: 5; }
}
@keyframes spin {
  0% { rotate: 0deg; }
  12.5%, 25% { rotate: 270deg; }
  37.5%, 50% { rotate: 540deg; }
  62.5%, 75% { rotate: 810deg; }
  87.5%, 100% { rotate: 1080deg; }
}
```

Also add overlay chrome in the same scoped file (not from Uiverse; required for full-page behavior):

```css
.fb-site-loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0B0C10;
  transition: opacity 350ms ease-out;
}
.fb-site-loader-overlay.is-exiting {
  opacity: 0;
  pointer-events: none;
}
```

### Acceptance checks for SiteLoader

- [ ] Animated YOU-style strokes visible on first load (unless reduced-motion)
- [ ] Overlay covers viewport; content not clickable underneath until dismissed
- [ ] Dismisses between 600ms and 2s + 300–400ms fade
- [ ] Reduced-motion: static logo mark; overlay still dismisses
- [ ] No Tailwind utility breakage from `.absolute` / `.w-2`
- [ ] Comment credits Uiverse.io / SelfMadeSystem

---

## 7. Component inventory (acceptance)

| Component | Must |
|-----------|------|
| SiteLoader | Full-viewport Uiverse loader; timing; reduced-motion; scoped CSS; required |
| SiteHeader | Sticky, blur, logo, nav, CTA, mobile trigger |
| MobileNav | Drawer, a11y, all links |
| SiteFooter | Four columns + legal |
| Button | Primary Coral, secondary outline Ivory, press feedback |
| Reveal | Scroll reveal once; reduced-motion = instant |
| Stagger | Children delay; used on feature lists |
| Parallax | Speed prop; disabled under reduced-motion |
| UnsplashImage | next/image, sizes, alt required |
| InquiryForm | name, email, role select, message, intent (demo/contact/waitlist); validate; submit; success |
| JsonLd | Organization (+ FAQPage on FAQ) |
| Accordion | FAQ; keyboard operable |
| StageCard | Link block for career stages (interactive → card OK) |
| CreatorStrip | Portrait marquee or static row |
| SectionHero | Brand/H1/support/CTAs on full-bleed photo |

---

## 8. Routes and full page copy

Use exact headlines/body below. Wire meta as specified.

Canonical base: `https://www.fedbellygrouplimited.com` (override with `NEXT_PUBLIC_SITE_URL`).

---

### 7.1 Home `/`

**Meta title:** Fedbellygrouplimited | Producer Services Platform 
**Meta description:** Production, distribution, rights, royalties, and project ops for artists, producers, managers, and labels. Request a demo. 
**H1:** From session to street date, in one producer services stack 
**Hero support:** Briefs, deliveries, splits, DSP packaging, claims, and reporting for client and producer teams. 
**Hero CTAs:** Request a demo | Join waitlist 
**Unsplash:** studio-session (hero parallax bg) 
**Motion:** Parallax hero; scroll reveal on sections; stagger capability row; marquee strip; mid-page parallax city-night

**Creator strip label:** Artists, producers, and managers already in conversation with Fedbelly

**Section: What you get** 
**H2:** Seven capabilities. One handoff story. 
**Body:** Fedbellygrouplimited markets a producer services platform that covers collaboration, project timing, splits, distribution, rights, publishing admin, and financial reporting. You work with producers and clients in the open, then package masters for stores without rebuilding the catalog in a new tool every week.

**Capability blurbs (stagger):**

1. **Collaboration Hub** : Shared briefs, references, versioned stems and masters, review notes, approvals. 
2. **Project Management** : Release templates, deadline cues, flags for missing ISRC, unlocked splits, thin metadata. 
3. **Royalty Splits** : Contributor tables, lock states, exportable split sheets. 
4. **Distribution** : DSP delivery packaging, territories, street dates, ISRC/UPC, artwork checks. 
5. **Rights Protection** : Content ID and claims workflows with an audit trail mindset. 
6. **Publishing Admin** : PRO registration paths, writer splits, sync pitch support. 
7. **Analytics & Reporting** : Streams, territories, statements, project-level money views.

**Section: Career stages** 
**H2:** Pick the lane that matches your catalog 
**Links:** Emerging (Amber) | Taking Off (Lime) | Next Level (Cyan) 
**Support:** Same platform story. Different operating weight.

**Parallax band** 
**H2:** Built for rooms where the clock is loud 
**Body:** Control rooms, label offices, late-night stems. Fedbelly keeps the paperwork next to the music. 
**CTA:** Talk to us 
**Unsplash:** city-night

**Presence strip** 
**H2:** Catalog work across cities 
**Body:** Teams coordinate releases across territories with one metadata and split source of truth. 
**Unsplash accents:** live-stage thumbs

**FAQ teaser** 
Three questions linking to `/faq` (use Q1, Q3, Q5 from FAQ).

**Closing CTA** 
**H2:** Ready to walk a release through Fedbelly? 
**CTAs:** Request a demo | Contact

---

### 7.2 How it works `/how-it-works`

**Meta title:** How Fedbelly Works | Brief to Release 
**Meta description:** See how clients and producers move from brief to approved masters, locked splits, DSP packaging, and reporting. 
**H1:** How a release moves through Fedbelly 
**Support:** Four stages. Humans approve. Automation flags gaps. 
**Unsplash:** control-room hero; mixing-desk mid 
**Motion:** Scroll reveal + stagger on steps

**Steps:**

1. **Brief** : Client sets goals, references, and street-date targets. Producer accepts scope. 
2. **Deliver** : Versions land in the project. Comments stick to the file that matters. Approvals move Draft → In review → Approved → Locked. 
3. **Package** : Splits lock at 100%. ISRC/UPC and metadata complete. Distribution job packages for DSPs. 
4. **Report** : Streams and statements surface by release. Claims and publishing tasks stay attached to the asset.

**H2:** Who touches what 
**Body:** Clients approve creative and commercial locks. Producers own delivery quality. Fedbelly ops (on the future product) QA catalog and delivery queues. This marketing site explains the model; you request access via demo or waitlist.

**CTA:** Request a demo

---

### 7.3 Digital Toolkit `/toolkit`

**Meta title:** Producer Collaboration Hub | Fedbelly Toolkit 
**Meta description:** Shared briefs, stem versions, review notes, and approvals for producer and client teams. 
**H1:** Collaboration Hub 
**Support:** One project room for briefs, references, stems, masters, and sign-off. 
**Unsplash:** studio-session, mixing-desk, collaboration 
**Motion:** Stagger feature grid; scroll reveal

**Features:**

- **Briefs & references** : Written scope, audio refs, mood notes in one place. 
- **Versioned assets** : Stem and master history without chat-scroll archaeology. 
- **Review threads** : Comments tied to files and versions. 
- **Approval states** : Clear status so nobody ships a draft by accident. 
- **Participants** : Client, producer, and invited managers on the same project.

**H2:** Less Drive-folder chaos 
**Body:** When the master is Approved and Locked, distribution and split steps inherit that truth. You stop mailing "final_final_v7".

**CTA:** Join waitlist | Request a demo

---

### 7.4 Distribution `/distribution`

**Meta title:** Music Distribution Infrastructure | Fedbelly 
**Meta description:** DSP delivery packaging with ISRC, UPC, metadata, territories, and street-date controls. 
**H1:** Distribution infrastructure 
**Support:** Package audio, art, and metadata for store delivery with a clear job status story. 
**Unsplash:** waveform-photo hero; vinyl mid 
**Motion:** Scroll reveal; optional subtle parallax on waveform band

**Blocks:**

- Store and territory selection 
- Street date and timing 
- Audio and artwork checks 
- ISRC / UPC assignment 
- Metadata packaging 
- Delivery status and update / takedown requests 

**H2:** Metadata is the release 
**Body:** Wrong language flags, missing writers, or soft artwork kill street dates. Fedbelly treats checklist completion as part of the release, not an afterthought email.

**CTA:** Request a demo

---

### 7.5 Rights & Publishing `/rights-publishing`

**Meta title:** Rights & Publishing Admin | Fedbelly 
**Meta description:** Content protection, claims workflows, PRO registration paths, and sync pitching support. 
**H1:** Rights and publishing 
**Support:** Protect recordings, register works, and stage sync pitches without losing the paper trail. 
**Unsplash:** control-room, vinyl 
**Motion:** Stagger two columns (Rights | Publishing)

**Rights:**

- Fingerprint / Content ID registration where available 
- Claim intake and dispute notes 
- Partner whitelist mindset 
- Asset-level audit trail 

**Publishing:**

- Work registration assistance 
- PRO / CMO path guidance 
- Writer and publisher splits 
- Sync pitch packs and status 

**Note (footer of section):** Fedbelly supports administration workflows. Counsel still owns legal advice.

**CTA:** Talk to us

---

### 7.6 Analytics & Royalties `/analytics-royalties`

**Meta title:** Analytics & Royalty Splits | Fedbelly 
**Meta description:** Lock contributor splits, then read streams, territories, and statements by release. 
**H1:** Splits, analytics, and statements 
**Support:** Money views that match the people who made the record. 
**Unsplash:** headphones, waveform-photo 
**Motion:** Scroll reveal; stagger metric blurbs

**Split management:**

- Contributor role and percentage 
- Lock when sums hit 100% 
- Change history 
- Exportable split sheets 

**Analytics & reporting:**

- Streams and downloads by territory and platform (where feeds exist) 
- Revenue summaries 
- Statement export 
- Project-level financial views for client and producer scopes 

**CTA:** Request a demo | Join waitlist

---

### 7.7 Solutions index `/solutions`

**Meta title:** Solutions by Career Stage | Fedbelly 
**Meta description:** Fedbelly for Emerging artists, Taking Off catalogs, and Next Level label operations. 
**H1:** Solutions by career stage 
**Support:** Same producer services story. Different operating weight. 
**Unsplash:** live-stage hero 
**Motion:** Stagger three stage cards; parallax mid-band optional

**Cards:**

- **Emerging** (Amber) : First serious releases, tight teams, clear checklists. → `/solutions/emerging` 
- **Taking Off** (Lime) : Multi-release calendars, more collaborators, sharper split discipline. → `/solutions/taking-off` 
- **Next Level** (Cyan) : Label-scale coordination, rights load, reporting depth. → `/solutions/next-level` 

**CTA:** Contact

---

### 7.8 Emerging `/solutions/emerging`

**Meta title:** Emerging Artists | Fedbelly Solutions 
**Meta description:** First releases with producer collaboration, clean splits, and DSP packaging help. 
**H1:** Emerging 
**Support:** You are shipping early catalog with a small circle. You need clarity more than ceremony. 
**Accent:** Amber 
**Unsplash:** collaboration, studio-session

**Body:** Start with the Collaboration Hub and split sheets. Add distribution packaging when the master locks. Skip tool sprawl.

**Fits if you:**

- Release singles or a short EP this year 
- Work with one primary producer 
- Need ISRC/UPC and store delivery without a full label staff 

**CTA:** Join waitlist

---

### 7.9 Taking Off `/solutions/taking-off`

**Meta title:** Taking Off Catalogs | Fedbelly Solutions 
**Meta description:** Multi-release calendars, collaborator splits, and rights workflows for growing teams. 
**H1:** Taking Off 
**Support:** More rooms, more features, more names on the split. Timing and locks matter. 
**Accent:** Lime 
**Unsplash:** mixing-desk, live-stage

**Body:** Project templates and risk flags keep street dates honest. Split locks before packaging. Claims and publishing tasks attach to the asset so managers stop hunting email.

**Fits if you:**

- Run overlapping singles and EPs 
- Coordinate managers plus multiple producers 
- Need reporting that matches collaborator shares 

**CTA:** Request a demo

---

### 7.10 Next Level `/solutions/next-level`

**Meta title:** Next Level Operations | Fedbelly Solutions 
**Meta description:** Label-scale producer ops, rights load, distribution queues, and financial reporting. 
**H1:** Next Level 
**Support:** Catalog volume and partner complexity. You need ops discipline without losing studio speed. 
**Accent:** Cyan 
**Unsplash:** live-stage, city-night 
**Motion:** Include one parallax photo band

**Body:** Distribution job status, rights audit trails, publishing admin, and statement exports sit beside producer delivery. Career-stage messaging stays Fedbelly-specific: producer-client ops at label weight.

**Fits if you:**

- Operate as a label or multi-artist management company 
- Hold heavy rights and publishing traffic 
- Need cross-territory reporting and clear escalation paths 

**CTA:** Request a demo | Talk to us

---

### 7.11 About `/about`

**Meta title:** Who We Are | Fedbellygrouplimited 
**Meta description:** Fedbellygrouplimited builds producer services for client and producer teams. Meet the focus. 
**H1:** Who we are 
**Support:** A producer services company. Studio-credible. Ops-serious. 
**Unsplash:** vinyl, control-room

**Body:** Fedbellygrouplimited exists because releases stall in inboxes. We market a platform where briefs, deliveries, splits, distribution packaging, rights, publishing admin, and reporting share one story. We speak to artists, songwriters, managers, labels, and producers in plain studio language.

**H2:** What we optimize for 
**Body:** Clear approvals. Locked ownership math. Store-ready metadata. Traceable claims. Numbers that match the people on the session.

**H2:** How we work with you 
**Body:** Start with a demo or waitlist conversation. We learn your release calendar and collaborator map, then show how Fedbelly capabilities fit. No account wall on this website.

**CTA:** Contact | Request a demo

---

### 7.12 Careers `/careers`

**Meta title:** Careers | Fedbellygrouplimited 
**Meta description:** Brief careers teaser for Fedbellygrouplimited. Reach out if you build music ops tools. 
**H1:** Careers 
**Support:** We hire people who respect sessions and schedules. 
**Unsplash:** collaboration

**Body:** Fedbellygrouplimited is building producer services for real release pressure. If you design product, engineer delivery systems, or run catalog ops, tell us what you ship.

**Open posture:** We post roles as they open. Until then, send a short note and links to work.

**CTA:** Contact (prefill intent: careers)

---

### 7.13 FAQ `/faq`

**Meta title:** FAQ & Help | Fedbellygrouplimited 
**Meta description:** Answers about Fedbelly producer services, demos, waitlist, distribution, splits, and rights. 
**H1:** FAQ 
**Support:** Straight answers. Still stuck? Contact us. 
**Unsplash:** none required; Soft White/Ink readable layout OK 
**JSON-LD:** FAQPage with these Q&As

**Q1. Is this website the product app?** 
No. This is a marketing site. Request a demo or join the waitlist to talk about access.

**Q2. Do I create an account here?** 
No. There is no login on this site. Use Contact, Request a demo, or Join waitlist.

**Q3. Who is Fedbelly for?** 
Artists, songwriters, managers, labels, and producers who need collaboration, splits, distribution packaging, rights, publishing admin, and reporting in one producer services story.

**Q4. Does Fedbelly replace my distributor today if I only browse the site?** 
The site explains distribution capabilities. Live delivery starts after an onboarding conversation, not through a self-serve login here.

**Q5. How do splits work?** 
Contributor tables capture role and percentage. Releases should lock at 100% before packaging. Sheets export for records.

**Q6. Can producers and clients share one project?** 
Yes. That is the Collaboration Hub pitch: shared briefs, files, reviews, and approvals.

**Q7. What about Content ID and claims?** 
Fedbelly markets rights workflows for registration, claim intake, and audit-minded notes. Details depend on active service agreements.

**Q8. Do you handle publishing?** 
Publishing administration support covers PRO paths, writer splits, and sync pitch help. Legal counsel remains separate.

**Q9. How do I get updates?** 
Join waitlist or Contact. We reply with next steps.

**Q10. Where are Terms and Privacy?** 
See Legal in the footer.

**CTA:** Contact | Request a demo

---

### 7.14 Contact `/contact`

**Meta title:** Contact Fedbellygrouplimited 
**Meta description:** Contact Fedbelly for producer services questions, partnerships, and careers notes. 
**H1:** Contact 
**Support:** Tell us who you are and what release problem you want solved. 
**Form intent:** contact 
**Fields:** Name, Email, Role (Artist / Producer / Manager / Label / Other), Message 
**Success:** "Thanks. We received your note and will reply soon." 
**CTA button:** Send message

---

### 7.15 Request a demo `/request-demo`

**Meta title:** Request a Demo | Fedbelly 
**Meta description:** Book a Fedbelly walkthrough of collaboration, splits, distribution, rights, and reporting. 
**H1:** Request a demo 
**Support:** Thirty focused minutes on your catalog shape and collaborator map. 
**Form intent:** demo 
**Fields:** Name, Email, Company/Act, Role, Catalog size (select), What you want to see, Message 
**Success:** "Demo request received. We will propose times by email." 
**Button:** Request a demo

---

### 7.16 Join waitlist `/waitlist`

**Meta title:** Join the Waitlist | Fedbelly 
**Meta description:** Join the Fedbelly waitlist for producer services platform updates. 
**H1:** Join the waitlist 
**Support:** Early updates on access windows for client and producer teams. 
**Form intent:** waitlist 
**Fields:** Name, Email, Role, Primary need (Collaboration / Distribution / Rights / Reporting) 
**Success:** "You are on the list. We will email when a window opens." 
**Button:** Join waitlist

---

### 7.17 Blog index `/blog`

**Meta title:** Notes & Resources | Fedbelly Blog 
**Meta description:** Topics on producer collaboration, splits, metadata, and release ops from Fedbelly. 
**H1:** Notes from the ops floor 
**Support:** Short reads for people who ship releases. Full CMS later; three teasers now.

**Post teasers (titles + excerpts only):**

1. **Lock the split before you book the street date** 
 Why 97% sheets stall packaging, and how contributor locks save the week.

2. **ISRC, UPC, and the metadata misses that kill delivery** 
 A practical checklist producers and managers can run before DSP handoff.

3. **Claims without the inbox archaeology** 
 Keep dispute notes on the asset so the next manager inherits context.

Each teaser: title, 2-sentence excerpt, "Full article soon" label (this is a teaser index, not empty). Optional Unsplash thumb: vinyl / waveform-photo / control-room.

**CTA:** Join waitlist for new notes

---

### 7.18 Terms `/legal/terms`

**Meta title:** Terms of Use | Fedbellygrouplimited 
**Meta description:** Summary terms for the Fedbellygrouplimited marketing website. 
**H1:** Terms of use (summary) 
**Sections (summary stubs, not attorney prose):**

1. **About this site** : Marketing information about Fedbelly services. 
2. **No account on this site** : Browsing does not create a product account. 
3. **Accuracy** : We aim for correct descriptions; capabilities may evolve. 
4. **Acceptable use** : No scraping abuse, no injection attacks against forms. 
5. **Contact** : Questions via the Contact page. 
6. **Governing overview** : Full counsel-drafted terms replace this stub before contractual onboarding.

**Footer note:** Summary only. Request counsel-reviewed terms before commercial agreements.

---

### 7.19 Privacy `/legal/privacy`

**Meta title:** Privacy Summary | Fedbellygrouplimited 
**Meta description:** How the Fedbelly marketing site handles contact and waitlist form data. 
**H1:** Privacy (summary) 
**Sections:**

1. **Data you send** : Name, email, role, message via forms. 
2. **Why we collect it** : Reply to inquiries, demos, waitlist updates. 
3. **Storage** : Processed by our form provider or email pipeline; retain only as needed for follow-up. 
4. **Sharing** : No sale of form data. Processors act under our instruction. 
5. **Your requests** : Access or deletion requests via Contact (GDPR/CCPA-minded). 
6. **Cookies** : If analytics added, disclose and offer basic consent note. 
7. **Updates** : We revise this summary as practices change.

**CTA:** Contact for privacy requests

---

## 9. SEO checklist (every page)

- Unique `<title>` 50-60 chars (use titles above; trim carefully if needed)
- Meta description 150-160 chars
- Single H1 matching page intent
- Canonical URL per route
- Open Graph: title, description, image (default OG from studio-session crop), type website
- Twitter card: summary_large_image
- JSON-LD Organization in root layout:

```json
{
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "Fedbellygrouplimited",
 "url": "https://www.fedbellygrouplimited.com",
 "logo": "https://www.fedbellygrouplimited.com/brand/logo-mark.png"
}
```

- FAQPage JSON-LD on `/faq`
- `app/sitemap.ts` includes all public routes
- `robots.txt` allow all public pages; disallow `/api/`

Core Web Vitals targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Priority-load home hero image. Size Unsplash requests.

---

## 10. Accessibility

- Skip to content link
- Focus visible (Coral ring)
- Color contrast Ivory on Ink; do not put Lime text on Ivory without checking contrast
- Accordion and drawer keyboard support
- Form errors announced
- Respect `prefers-reduced-motion`

---

## 11. Out of scope (do not build)

- Login, signup, OAuth, sessions, password reset
- Admin dashboard or any authenticated UI
- Client / Producer app shells
- Real DSP APIs, payout APIs, Content ID APIs
- Live royalty ledgers
- Native mobile apps
- Cloning ONErpm copy, brand, or assets
- Crypto / NFT product pillars
- Attorney-final legal prose (stubs above are enough)

Platform capabilities are **marketing descriptions**. Do not implement app workflows.

---

## 12. Final verification script

Before claiming done, run:

```bash
npm run build
```

Manual pass:

1. Cold-load Home: SiteLoader overlay appears, YOU strokes animate (or static mark if reduced-motion), then fade out within max timing
2. Click every nav and footer link
3. Submit each form once; confirm success UI
4. Toggle reduced-motion (OS or DevTools): parallax off; loader uses static logo mark
5. Resize 375 / 768 / 1024 / 1440
6. Confirm no "Login" string in the repo UI
7. Confirm logos render; favicon present

Ship only when Definition of Done is complete.

---

## 13. Agent closing message

When finished, report: routes shipped, form method used, Unsplash photo IDs chosen, SiteLoader confirm (scoped CSS + brand gradient remap), and `npm run build` result. Do not leave follow-up TODOs for core scope.
