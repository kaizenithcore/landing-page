# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

No single primary user — three distinct audiences, one per business area, plus a root audience that doesn't yet know which area applies to them:

- **Kaizenith Studio**: players and indie-game followers who follow small games built in public (Señal, MHAdle, jam games on itch.io). Ping Pong Mate's Steam wishlist audience is paused with the game.
- **Kaizenith Works**: businesses and public administrations that need SaaS products or custom software development.
- **Kaizenith Vision**: local businesses and organizations that need brand identity, graphic design, or marketing.
- **Root (kaizenith.es)**: visitors who land without knowing which area applies to them, or who want a general overview/contact.

## Product Purpose

Kaizenith is a group of independent business areas (Studio, Works, Vision) run under one shared method. The root site presents the three areas and routes visitors to the right one, or captures general inquiries that don't fit a specific area.

## Positioning

The same Kaizen method — short cycles, measured decisions, build-in-public transparency — applied consistently across three different business areas (games, software, design), rather than one. Self-funded, no investors.

## Operating Context

- Next.js app with 4 top-level surfaces: `/` (root), `/studio`, `/works`, `/design` (branded "Kaizenith Vision"), plus shared legal/support pages (`/privacy`, `/cookies`, `/support`, `/soporte`).
- Bilingual (ES/EN) via a locale context; Spanish is the default.
- User-controlled light/dark theme toggle, persisted.
- Unified contact form (email + message, area-tagged) on all 4 surfaces, submitting to `/api/contact`, sent via Resend from `contacto@notifications.kaizenith.es` to `hola@kaizenith.es`.

## Capabilities and Constraints

- **Studio**: Ping Pong Mate is back as the flagship and is announced in the hero and roadmap (decision 2026-10-28, following the Workspace project): Steam "Coming soon" page targeted for Nov 2026 (task due 2026-11-20), demo Dec 2026, possible Next Fest Feb 2027 (all stated as targets, not promises). No wishlist CTA or Steam link until the page is public: flip `PING_PONG_MATE_STEAM_LIVE` in `lib/project-visibility.ts` (and update studio.hero.trust, gameRoadmap and ctaBanner copy). `SHOW_PING_PONG_MATE` hides it entirely. Also shown: Señal (formerly Paranormal Detector, in development, not yet deployed) and MHAdle (live at mhadle.kaizenith.es, static site) as own projects, 8 finished jam games on itch.io, and a note that more projects are in development (Autoforge, Tiny RTS deliberately unnamed). The hero trailer asset is still the old one with outdated dates (Workspace task to fix by 2026-11-06).
- **Works**: visible catalog is Kaizenith Workspace (production, v0.3.2), Entrelazo (production at entrelazo.kaizenith.es: local-first editor for writing video game narrative, branching dialogue, export to Ink/Yarn Spinner/JSON, free demo, provisional name) and Armazón (very advanced: multi-tenant Supabase backend, 16 packages, own landing and demos; demos paused because its Supabase project is paused, no sales system yet; no public link on the site). Hidden, not deleted: Enlace and Cronista (paused: public-administration requirements), Serena and Pet Care Pocket (ready for first customers, none sought), Nexa, Urbana (stopped mid-development), CashPilot (paused), Zarpe (ready, paused over legal doubts about demos; demos need rewriting without real data before reactivating). Visibility lives in `lib/project-visibility.ts`; the Works/Root project counters derive from it. New projects use an icon until real captures exist. Custom-development service line stays.
- **Vision**: real portfolio of 14 delivered client projects (real client names, real images) and a confirmed pricing structure (3 identity tiers + à la carte catalog). "Vision" is the current working name (renamed from "Ink" on 2026-08-27), not yet finalized.
- No fabricated stats, testimonials, or client claims anywhere on the site. Numbers shown are either sourced from real project data or intentionally left as honest placeholders ("coming soon", "price on request").
- Email sending requires `RESEND_API_KEY` in the environment; without it, the contact form still accepts submissions and logs server-side, but sends no email (graceful degradation, same pattern as the existing Mailchimp signup integration).

## Brand Commitments

- Name: Kaizenith, from Kaizen (continuous improvement) + Zenith (highest point).
- Sub-brands: Kaizenith Studio, Kaizenith Works, Kaizenith Vision (name provisional, pending a final decision).
- Fixed across all 4 surfaces: single accent color (`--primary: #854CAD`) and pill-shaped buttons. Typography scale, density, and section rhythm are free to diverge per area.
- Contact: hola@kaizenith.es (general), soporte@kaizenith.es (support).

## Evidence on Hand

- Vision portfolio: 14 real projects with real client names and images at `public/images/portfolio/` — Seis Sentidos, AEDA, Mar de Posibilidades, Babilonia World, Maymol, Gráficas Illescas, Zenkyu, Estudio Carlos Sotomayor, Ayuntamiento de Griñón, Anthique, Reiki Mille Grazie, Danzante, Distrito de Moratalaz, Teresa de la Rosa.
- Vision trust stats now show 20+ years experience (the designer's own stated figure, not independently verified), alongside 14 documented projects and 100% real/no-filler work. The earlier "100% / 99% satisfaction" and a proposed "2+ active clients" figure are both removed (the first was invented, the second dropped by choice) — the latter two tied directly to the 14-project portfolio above, replacing previously-shown "50+ clients" / "200+ projects" figures that weren't independently verifiable.
- Works catalog images at `public/images/proyects/`.
- **Works offer (Oct 2026): two closed tracks.** (1) Custom software for mid-sized companies, starting with a fixed-scope discovery. (2) "Digital care" for small businesses and freelancers: three separately hireable services: presence (website, domain, hosting), maintenance (updates, security, backups, minor changes), automations (forms, notifications, bookings, repetitive tasks). Copy promises scope and price agreed in writing before starting; no public prices yet. Public administration is no longer a stated target.
- Works is positioned as a development agency whose custom-dev service is the actual engagement; the SaaS catalog (Workspace, Entrelazo, Armazón) is presented as documented proof-of-capability, not a storefront for those specific products — future Works copy should not frame the catalog as a place to acquire/license a product directly.
- No case studies, testimonials, or client logos exist yet for Works or Studio beyond what's already in their catalogs — future work must not invent them.

## Product Principles

- Iteration > Perfection: ship fast, measure, adjust, repeat.
- Data > Opinions: every decision needs a metric.
- Small > Big: small increments, compounding results, no epic bets.
- Open > Closed: document everything, mistakes included.
- Never fabricate numbers, testimonials, or client claims — an honest placeholder beats an invented figure.

## Accessibility & Inclusion

No product-specific requirement beyond standard web practice already in place: `prefers-reduced-motion` is respected on all animations (marquee, countdown, etc.), focus-visible rings are used throughout, and markup is semantic.
