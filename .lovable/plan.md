

# Agency Portfolio Website — Premium Dark Experience

## Overview
A world-class, handcrafted dark agency portfolio website with glassmorphism cards, custom cursor, scroll animations, and dramatic visual effects. Every section is designed to impress gym owners and local businesses.

## Global Systems
- **Design tokens**: Custom CSS variables for all colors, typography (Space Grotesk + Inter via Google Fonts), glassmorphism cards, and grain texture overlay
- **Custom cursor**: Violet circle with lerp interpolation, expands on interactive elements, disabled on mobile
- **Scroll animations**: Intersection Observer-based fade+slide-up with staggered children on every section
- **Noise texture**: Fixed SVG filter overlay across entire site

## Sections (Single Page)

1. **Sticky Navbar** — Transparent → glass on scroll, logo with pulsing violet dot, centered nav links with active scroll tracking, "Let's Talk" CTA, mobile hamburger with full-screen overlay

2. **Hero** — Full viewport, violet/teal radial glows, animated light beam, pill badge, 3-line headline with SVG wavy underline on "Customers.", dual CTAs, scroll indicator

3. **Stats + Marquee** — 3 count-up stats (3–5 days, 2+ sites, 100% satisfaction), infinite scrolling marquee ticker with violet ✦ accents

4. **Services** — 3 glassmorphism cards (Website Design, AI Lead Systems, 3–5 Day Delivery) with decorative corner glows and gradient accent line

5. **Why Us** — 2-column: left copy with differentiator lines + right pure-CSS phone mockup showing WhatsApp chat with auto-appearing messages

6. **AI Features** — 2×2 grid of feature cards (Chatbot, Smart Forms, WhatsApp Responses, Zero Follow-Up) + gradient statement bar

7. **Portfolio** — 2 full-width project cards (IronForge Gym + FitZone Pro) with CSS browser mockup frames containing live iframe embeds, floating animation, feature tags

8. **Pricing** — 3-tier cards (Starter ₹5K–10K, Growth ₹15K–25K elevated/highlighted, Scale ₹30K–50K+) with feature lists and "Not sure?" CTA bar

9. **Process** — 5-step horizontal timeline (vertical on mobile) with connected line, numbered circles, day labels

10. **Final CTA** — Dramatic violet/teal glows, diagonal lines, large headline, dual buttons, urgency text

11. **Contact** — 2-column: glassmorphism form with success state animation + WhatsApp/Email info cards with personal note

12. **Footer** — 3-column layout with quick links, contact info, copyright

## Key Interactive Elements
- WhatsApp FAB (fixed, pulsing green circle)
- Contact form with animated success state (no backend)
- Count-up stat animations on scroll
- Phone mockup with looping chat message animations
- Marquee pause on hover
- All WhatsApp links → wa.me/91XXXXXXXXXX

## File Structure
- `src/index.css` — All CSS variables, grain texture, glassmorphism utilities, animations
- `src/pages/Index.tsx` — Main page composing all sections
- `src/components/Navbar.tsx` — Sticky nav with mobile menu
- `src/components/Hero.tsx` — Hero section
- `src/components/Stats.tsx` — Stats + marquee
- `src/components/Services.tsx` — Service cards
- `src/components/WhyUs.tsx` — Why us + phone mockup
- `src/components/AIFeatures.tsx` — AI feature grid
- `src/components/Portfolio.tsx` — Project showcases with iframes
- `src/components/Pricing.tsx` — Pricing tiers
- `src/components/Process.tsx` — Timeline
- `src/components/FinalCTA.tsx` — Final call to action
- `src/components/Contact.tsx` — Form + info
- `src/components/Footer.tsx` — Footer
- `src/components/CustomCursor.tsx` — Cursor logic
- `src/components/WhatsAppFAB.tsx` — Floating button
- `src/hooks/useScrollAnimation.ts` — Intersection Observer hook
- `src/hooks/useCountUp.ts` — Number animation hook

