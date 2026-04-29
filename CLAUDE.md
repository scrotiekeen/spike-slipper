# Spike Slipper

@AGENTS.md

## What This Is

Spike Slipper is a slip-on protective cover for track and field spike shoes. Athletes wear it over their spikes to walk on any surface — gym floors, hallways, parking lots, bleachers, turf — without damaging the spike pins, the floor, or themselves.

**Founders:** Twin brothers Evan and Alex Peterson, both competitive distance runners. Wisconsin-based. Built the product to solve a problem they personally lived with.

**Differentiation:** Two layers — a proprietary material compound plus a purpose-engineered design. Priced **$15–$40**, significantly under the **$40–$80** competitor range, with superior durability.

**Launch:** Spring 2027. Site needs to be a credible pre-launch presence now (waitlist + founder story + institutional inquiry), then activate full storefront at launch.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel (scrotiekeens-projects)
- **Commerce (post-launch):** Shopify Storefront API + Stripe checkout (same playbook as `wisco-wild`)
- **Analytics:** Vercel Analytics (pre-launch). GA4 once we have a property.
- **Email capture (waitlist):** Resend or Loops; finalize before pre-launch goes public.

## Audience & Buyer Lanes

The site has **two distinct buyer lanes** — both must be first-class, neither buried.

### 1. Direct-to-consumer (DTC)
Athletes and parents. Standard product page → size selector → add-to-cart → checkout. Multiple SKUs by size.

### 2. Institutional (PRIMARY sales channel)
Coaches, athletic directors, trainers, athletic programs. Bulk inquiry / quote request. Volume pricing tiers. Team customization (school colors, logos). This is where the money is — it cannot live three clicks deep.

## Pages (pre-launch shape)

- **Home / landing** — hero, problem statement, founder credibility, waitlist + "Teams & Programs" entry points side by side
- **Product / How it works** — what it is, how it goes on, why it doesn't damage anything
- **Durability + Safety story** — spike protection, floor protection, injury prevention; testing data when available
- **Founders' story** — twin athletes, Wisconsin, the moment they built the first prototype
- **Teams & Programs** (institutional inquiry form) — fields: school/program, role, team size, season, customization needs, contact
- **FAQ**
- **Contact**

Pre-launch home doubles the institutional CTA equally with the DTC waitlist. At full launch, swap the storefront on.

## Brand Direction

**Starting from scratch.** No logo, no colors, no type system, no photography.

**Voice:** athlete-built, durable, no-nonsense, Midwest-grounded.
**NOT:** premium-European (that's Keyena's lane). Not loud-streetwear (wrong buyer).

The look should feel like equipment, not fashion. Think: spec-sheet honesty, track-meet specificity, gym-bag practicality.

## Site Build Order

1. **Brand pass** — logo (SS monogram or wordmark), color system (sport-coded but not loud), typography (utilitarian sans + accent), spacing/grid bones.
2. **Pre-launch landing** — hero, founder story, two-lane CTA, waitlist + teams inquiry.
3. **Storefront scaffold** — product page template, size selector, cart shell (Shopify integration deferred until launch).
4. **Institutional flow polish** — quote request → backoffice / Resend; pricing-tier explainer.
5. **Content pages** — FAQ, contact, supporting durability/safety story.

## Mobile-First

Coaches and athletes will hit this on a phone after meeting Evan & Alex at a meet. Every layout and CTA placement gets designed mobile-first; desktop is the secondary read.

## Git & Deploy

- **Remote:** github.com/scrotiekeen/spike-slipper (to be created)
- **Deploy:** Vercel auto-deploy on push to main, scrotiekeens-projects scope
- **Domain:** TBD — needs to be registered. Candidates: `spikeslipper.com`, `spike-slipper.com`, `getspikeslipper.com`, `wearspikeslipper.com`. Check availability and route.
- **Git email:** `corcolt2114@gmail.com` (ALWAYS use this)

## Design Tooling Available

This project should lean on the design-system skills installed in this workspace:
- `frontend-design:frontend-design` — distinctive, production-grade interfaces
- `ui-ux-pro-max:ui-ux-pro-max` — UI/UX design intelligence (50+ styles, palettes, font pairings)
- `vercel:shadcn` — component primitives if/when needed

Design quality bar: ship something that looks like a real brand, not an AI-generic landing page. Distinctive type, considered color, real layout decisions, no stock-template feel.

## Open Items / TODO Before Launch

- Pick + register the domain
- Resend (or Loops) account for waitlist capture
- Brand assets passed back to a designer for refinement once direction is chosen
- Photography plan: prototype on athlete, multiple surfaces, in-context at a track meet
- Shopify store setup (deferred until ~Q4 2026 / pre-launch)
- Stripe account for fallback checkout
- Privacy policy + terms (institutional buyers will ask)

## Last Session

**2026-04-29 (PM-2)** — Hero now plays a 360° turntable video (Clive / Opus). Generated 8 product angles on Gemini 3 Pro Image (front-left 3/4, left profile, rear-left 3/4, rear, rear-right 3/4, right profile, front-right 3/4, frontal). Pure text-gen with a long shared prompt pinning brand details (image-conditioning was tried first but preserved pose too aggressively). Stitched with ffmpeg xfade chain — 0.6s hold + 0.4s crossfade per angle, 5.8s loop, closes back to frame 0 for seamless playback. Encoded both webm/vp9 (1.6MB) and mp4/h264 (2.2MB). Replaced hero `<Image>` with `<video autoPlay loop muted playsInline poster="/hero-spike.jpg">`. Kept scroll-driven 3D tilt, replaced Ken Burns drift with a barely-perceptible "breathe" so the two motion layers don't compete. `prefers-reduced-motion` hides the video; poster shows through. Files: `/public/hero-turntable.mp4`, `/public/hero-turntable.webm`, `/public/hero-spike.jpg` (poster).

**2026-04-29 (PM)** — Hero product shot added with motion treatment (Clive / Opus). Generated a spec-sheet hero photo via Gemini 3 Pro Image (`/public/hero-spike.jpg`, 2400px, 278KB JPG). Restructured the hero to a 7/5 split layout (text left, image right on desktop; image above text on mobile). Layered two CSS-only motion effects on the image to "sell rotation" without video: a continuous slow Ken Burns drift (16s loop) and a scroll-driven 3D `rotateY` tilt using CSS `animation-timeline: view()`. Graceful fallback for older browsers, honors `prefers-reduced-motion`. Spec-sheet trim around the frame: corner registration ticks in track orange, vertical caption rail, FIG. 01 strip. Build clean, pushed to main, deployed. *(Superseded by PM-2 turntable video.)*

**2026-04-29 (AM)** — Full brand pass + pre-launch site built and committed (Claude Sonnet 4.6). Build passes cleanly.

**What shipped:**
- Brand tokens: cinder black `#1A1917`, track orange `#E05A1B`, infield cream `#F4EFE6`, Space Grotesk (display) + Inter (body)
- Logo: wordmark with track-orange underline bar, light + dark variants
- Header: sticky with scroll blur, mobile full-screen overlay menu with animated hamburger
- Footer: cinder background, 3-column quick links, Wisconsin nod
- Home page: 7 sections — hero, problem statement, how-it-works, founders preview, durability/safety, waitlist form, institutional CTA
- /teams: hero, volume pricing tiers (3 levels), customization explainer, full inquiry form (9 fields)
- /founders: full story page with image placeholders, founder profiles
- /faq: 8 Q&As across 4 categories (launch, sizing, durability, orders)
- /contact: categorized help options + direct contact section
- API stubs: `/api/waitlist` and `/api/teams-inquiry` — log to console, return 200; ready for Resend integration

**Next steps:**
- Register domain (spikeslipper.com preferred) and configure Vercel deploy
- Set up Resend or Loops for actual waitlist capture — wire to `/api/waitlist`
- Wire teams-inquiry to Resend notification + add to a CRM
- Commission photography: prototype on athlete, multiple surfaces, track meet context
- Add `hello@spikeslipper.com` and `teams@spikeslipper.com` when domain is live (currently in contact page)
- Privacy policy + terms page (institutional buyers will ask)
- Shopify storefront scaffold (deferred to ~Q4 2026)
