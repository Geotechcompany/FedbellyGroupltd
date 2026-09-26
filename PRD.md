# Fedbellygrouplimited — Product Requirements Document (Enhanced)

> **To build the site, use `SITE-BUILD-PROMPT.md` only.** This PRD is product/reference context. Brand and full build instructions are not split across files.

**Document type:** Marketing / showcase website PRD  
**Site name:** Fedbellygrouplimited  
**Version:** 1.2  
**Status:** Ready for marketing-site build only  

---

## 0. Hard scope lock

**This project delivers a public marketing website only.**

| In scope | Out of scope (do not build) |
|----------|-----------------------------|
| Public pages, brand, SEO, contact/waitlist/demo forms | Login, signup, OAuth, sessions |
| Marketing copy for platform capabilities | Client / Producer / Admin dashboards |
| Unsplash photography, scroll/parallax motion | Live DSP APIs, payouts, royalty engines |
| Request a demo / Contact / Join waitlist CTAs | Authenticated product surfaces of any kind |

Platform modules below are **services marketed on the site**, not app screens to implement.

---

## 1. Executive summary

Fedbellygrouplimited presents a producer–client collaboration and producer services story: production, distribution, rights, royalties, analytics, and project ops. The site should match the **presentation quality and IA energy** of premium music-service marketing sites (e.g. ONErpm-class public sites: hero, career-stage solutions, creator strip, global presence, resources) while using **original Fedbelly copy, brand, and positioning**.

**Deliverable of this package:** PRD + brand + master build prompt so an engineer/designer AI can build the marketing site later. **Do not build the site in this package.**

---

## 2. Problem statement (marketing narrative)

Clients hire producers across email, Drive folders, and chat. Splits live in spreadsheets. Masters miss ISRC/UPC. Claims and publishing lag release. Fedbellygrouplimited markets a single producer services platform that covers brief → session → delivery → release → rights → reporting.

The website’s job is to explain that story and convert visitors into demos, waitlist entries, or contact conversations.

---

## 3. Goals

### Business goals

- Position Fedbelly as the producer-studio operations layer (not a social network, not a generic DSP brand clone).
- Convert visitors via **Request a demo**, **Contact**, or **Join waitlist**.
- Build trust via About, Careers teaser, FAQ, Legal stubs.

### Visitor goals (marketing)

- Understand what Fedbelly does in under one scroll on Home.
- Map themselves to a career-stage solution.
- Reach a human or waitlist without creating an account.

### Success metrics (marketing site)

| Metric | Target (first 90 days) |
|--------|-------------------------|
| Homepage → primary CTA CTR | ≥ 4% |
| How it works → Contact/Demo | ≥ 3% |
| Solutions page → waitlist/demo | ≥ 3% |
| Form completion rate | ≥ 25% of form starts |
| LCP / CLS / INP | See Core Web Vitals |

---

## 4. Audiences (site visitors)

Described for messaging. **Not** authenticated roles on this website.

| Audience | Care about |
|----------|------------|
| Artists / songwriters | Clear path from session to release and money views |
| Managers / labels | Coordination, rights, reporting |
| Producers / engineers | Delivery, splits, credit, protection of work |

### Future platform roles (appendix only — not site build)

Client/Artist, Producer, Fedbelly Admin. Documented in §14 for product context. **No admin UI, no role dashboards, no login in this website.**

---

## 5. Platform capabilities (marketed services)

Expand fully in marketing pages; treat as capability stories with Unsplash visuals, not product wireframes.

1. **Digital Toolkit & Producer Collaboration Hub** — briefs, references, versioned stems/masters, review comments, approvals.
2. **Machine-Assisted Project Management** — release templates, deadline suggestions, risk flags (missing ISRC, unlocked splits, incomplete metadata).
3. **Royalty Sharing & Split Management** — contributor tables, lock states, exportable split sheets.
4. **Music Distribution Infrastructure** — DSP delivery story, ISRC/UPC/metadata, territory and street-date packaging.
5. **Rights Management & Content Protection** — Content ID / claims narrative, audit-minded protection.
6. **Publishing Administration** — PRO registration path, writer/publisher splits, sync pitching support.
7. **Music Analytics & Financial Reporting** — streams, territories, statements, project-level financial views.

---

## 6. Marketing site journeys (build these)

### 6.1 Browse → learn → contact

`Home → How it works or Capability page → Request a demo / Contact`

### 6.2 Career-stage path

`Home or Solutions → Emerging | Taking Off | Next Level → Join waitlist / Talk to us`

### 6.3 Trust path

`About → FAQ → Contact` or `Careers teaser → Contact`

### 6.4 Resources path

`Blog teaser topics → FAQ → Contact`

---

## 7. Site IA & textual wireframe flows

Nav mirrors premium music marketing IA (Business/Solutions, Who We Are, Help) with Fedbelly names:

```
Home
 ├─ How it works
 ├─ Capabilities (services marketed)
 │   ├─ Digital Toolkit / Collaboration
 │   ├─ Distribution
 │   ├─ Rights & Publishing
 │   └─ Analytics & Royalties
 ├─ Solutions by stage (Emerging | Taking Off | Next Level)
 ├─ Who we are (About)
 ├─ Careers (brief teaser)
 ├─ FAQ / Help
 ├─ Blog (index teaser only)
 ├─ Contact / Request a demo / Join waitlist
 └─ Legal (Terms | Privacy stubs)
```

**Primary header CTA:** Request a demo  
**Secondary:** Contact or Join waitlist  
**Never:** Login, Sign in, Dashboard, Admin

### Wire outline — Home

1. Full-bleed Unsplash hero + brand + one headline + one support line + CTA group (parallax layers).
2. Creator/artist portrait strip (marquee optional).
3. Capability highlights (stagger).
4. Career-stage band.
5. Global presence / trust strip.
6. Mid-page parallax photo band + CTA.
7. FAQ teaser + footer.

### Wire outline — Capability page

Hero (photo) → problem → capability blocks (stagger) → proof/process → CTA form or link to Contact.

---

## 8. Technical architecture (this website)

```
Next.js 14 App Router (SSG/SSR marketing)
  ├─ Tailwind + brand tokens
  ├─ Motion (Framer Motion or CSS scroll-driven + IntersectionObserver)
  ├─ Unsplash images (URLs or downloaded assets with attribution)
  ├─ Forms: waitlist / demo / contact
  │    → mailto, Formspree, Resend, or similar
  │    → NO auth backend
  ├─ sitemap.xml + robots.txt
  └─ Optional headless CMS later (not required for v1)
```

**Not in this build:** API gateway, OAuth, microservices, object stores for masters, DSP adapters, payout ledgers.

---

## 9. NFRs (marketing site)

| Area | Requirement |
|------|-------------|
| Privacy | Contact form privacy notice; GDPR/CCPA-minded consent copy; cookie note if analytics added |
| Security | HTTPS; no password storage (no accounts) |
| A11y | WCAG 2.2 AA target |
| Motion | Rich scroll/parallax with reduced-motion fallbacks |
| Performance | Optimize Unsplash (size, modern formats, priority on LCP hero) |

### Core Web Vitals

| Metric | Target |
|--------|--------|
| LCP | ≤ 2.5s (p75) |
| INP | ≤ 200ms (p75) |
| CLS | ≤ 0.1 |

---

## 10. Design & motion requirements (summary)

Full detail in `BRAND.md` and `SITE-BUILD-PROMPT.md`.

- Vivid accents: Coral `#FF4D6A`, Lime `#C8F542`, Cyan `#2EE6D6` (+ Amber/Magenta sparingly) on Ink/Charcoal.
- Heavy Unsplash use; themes documented in BRAND.
- Scroll reveal, stagger, ease-out; scroll-driven where appropriate.
- Parallax on Home hero + ≥1–2 mid-page bands; Solutions or Home second band minimum.
- Apple-like press/spring on UI chrome; ambient page motion richer than corporate SaaS.
- Stop-slop copy throughout.

---

## 11. SEO

- Title 50–60 chars; meta description 150–160 per page.
- One H1; canonical `https://www.fedbellygrouplimited.com/{path}` (confirm domain).
- OG/Twitter; JSON-LD Organization sitewide; FAQPage on FAQ.
- sitemap + robots for all public pages.
- Image alt patterns per BRAND.

---

## 12. Phasing

### Phase 0 — This package / marketing build target

Public showcase site from `SITE-BUILD-PROMPT.md`. Forms only. No product app.

### Future product (not this website)

Platform MVP with auth, projects, splits, distribution ops, etc. See §14. Explicitly **out of scope** here.

---

## 13. Out of scope (website)

- Login, signup, OAuth, sessions, password reset
- Admin dashboard or any authenticated UI
- Client/Producer app shells
- Real DSP APIs, Content ID APIs, payout rails
- Full attorney-grade legal prose (stubs only)
- Cloning ONErpm (or any competitor) copy or brand
- Crypto/NFT pillars

---

## 14. Appendix — Future product context (do not build)

### Future roles

Client/Artist, Producer, Fedbellygrouplimited Admin — RBAC, project invites, financial least privilege.

### Future journeys (product)

- Client hire → release  
- Producer delivery → payout  
- Admin catalog ops  

### Future NFRs (product)

OAuth 2.0, encrypted asset storage, low-latency audio player, microservices scalability, GDPR/CCPA data subject flows.

These inform marketing claims tone; they are **not** implementation tickets for the showcase site.

---

## 15. Dependencies

- `BRAND.md`
- `SITE-BUILD-PROMPT.md`
- `assets/` logos

---

## 16. Acceptance criteria (marketing site)

- [ ] Public pages only; zero Login/Admin routes
- [ ] CTAs are demo / contact / waitlist
- [ ] Full crafted copy from build prompt
- [ ] Brand-first full-bleed heroes; Unsplash per major section
- [ ] Scroll reveal + stagger; parallax on specified pages with reduced-motion off-ramp
- [ ] Vivid palette tokens applied
- [ ] SEO fields, sitemap, robots
- [ ] Original Fedbelly voice; no competitor clone language
