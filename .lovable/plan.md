## 1. Fix section background alternation

After hiding Pricing, AIFeatures and others, several adjacent sections now share the same `--bg-secondary` color (WhyUs → Portfolio → Process → FAQ → Contact all secondary). Re-alternate so the rhythm reads cleanly in **both dark and light** modes.

New pattern (top → bottom):

| Section | Background |
|---|---|
| Hero | primary |
| Stats | secondary |
| Solutions | primary |
| WhyUs | secondary |
| Portfolio | **primary** (was secondary) |
| Process | secondary |
| FAQ | **primary** (was secondary) |
| Contact | secondary |

Edit the inline `background: 'hsl(var(--bg-...))'` on `Portfolio.tsx` (section wrapper) and `FAQ.tsx`. Verify in both themes.

## 2. Splash / intro screen with logo + tagline

Add a full-screen intro overlay shown once per session that fades out into the site:

- New component `src/components/SplashScreen.tsx`.
- Pure black background (matches reference).
- Centered Vichaar Co logo (`vichaar-logo-transparent.png`) with tagline `WHERE IDEAS MEET TECHNOLOGY` in small gold tracked caps below it.
- Subtle fade-in (logo) → 1.2s hold → fade-out + slight scale (whole overlay) using CSS keyframes.
- Mounted in `Index.tsx`, controlled by state; sets `sessionStorage` flag so it only shows once per browser session (skip on internal navigation/refresh-spam).
- `pointer-events: none` after fade so it never blocks clicks.
- Respects `prefers-reduced-motion` (instant hide).

## 3. Fix footer links

`src/components/Footer.tsx` currently has duplicate `Process` and is missing `Pricing`-removal cleanup. Replace the `navLinks` array with the correct, deduped set:

```
Work       → #portfolio
Services   → #solutions
Process    → #process
FAQ        → #faq
Contact    → #contact
```

Note: the Solutions section uses `id="solutions"` but the nav reads "Services" — keep the label "Services" and point href to `#solutions` so it actually scrolls.

## 4. SEO improvements (minimal, no city mention)

Update `index.html` head + add structured data:

- **Title**: `Vichaar Co — Web Design & Development Studio`
- **Meta description**: "Vichaar Co builds fast, conversion-focused websites for businesses. Custom design, development & SEO — delivered in 5–7 days."
- **Canonical**: `<link rel="canonical" href="https://vichaar-co.lovable.app/" />`
- **Keywords-relevant og/twitter** title + description matching above.
- **JSON-LD Organization schema** (name, url, logo, contact, sameAs links if available).
- **JSON-LD WebSite schema** with name + url.
- Add `lang="en-IN"` on `<html>`.
- Update `public/robots.txt` with Sitemap directive and create `public/sitemap.xml` with the single `/` route.
- Ensure Hero `<h1>` is the only H1 (quick audit; adjust if duplicate found).

## Technical details

- Files edited: `src/components/Portfolio.tsx`, `src/components/FAQ.tsx`, `src/components/Footer.tsx`, `src/pages/Index.tsx`, `index.html`, `public/robots.txt`.
- Files created: `src/components/SplashScreen.tsx`, `public/sitemap.xml`.
- No new dependencies. Pure CSS animations only (per project memory).
- All colors via existing semantic tokens — no new color values.
