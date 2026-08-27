# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

No single primary user — three distinct audiences, one per business area, plus a root audience that doesn't yet know which area applies to them:

- **Kaizenith Studio**: players and indie-game followers who wishlist/follow games in development (currently Ping Pong Mate on Steam).
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

- **Studio**: Ping Pong Mate is the flagship, still in development. Wishlist CTA currently points to the Steam group as a placeholder until the real store page exists; provisional launch date September 29, 2026. Two smaller shipped prototypes (Paranormal Detector, MHAdle) make up the rest of the games catalog.
- **Works**: catalog of real SaaS products at varying maturity — Workspace is live/shipped; Enlace, Cronista, Serena, Nexa are "very advanced"; CashPilot and Zarpe are "almost ready"; Urbana is "in development" — plus a custom-development service line.
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
- Vision trust stats now show 20+ years experience and 99% satisfaction (the designer's own stated figures, carried over from prior business copy, not independently verified) alongside 14 documented projects and 100% real/no-filler work — the latter two tied directly to the 14-project portfolio above, replacing previously-shown "50+ clients" / "200+ projects" figures that weren't independently verifiable.
- Works catalog images at `public/images/proyects/`.
- Works is positioned as a development agency whose custom-dev service is the actual engagement; the SaaS catalog (Workspace, Enlace, Cronista, Serena, Nexa, CashPilot, Urbana) is presented as documented proof-of-capability, not a storefront for those specific products — future Works copy should not frame the catalog as a place to acquire/license a product directly.
- No case studies, testimonials, or client logos exist yet for Works or Studio beyond what's already in their catalogs — future work must not invent them.

## Product Principles

- Iteration > Perfection: ship fast, measure, adjust, repeat.
- Data > Opinions: every decision needs a metric.
- Small > Big: small increments, compounding results, no epic bets.
- Open > Closed: document everything, mistakes included.
- Never fabricate numbers, testimonials, or client claims — an honest placeholder beats an invented figure.

## Accessibility & Inclusion

No product-specific requirement beyond standard web practice already in place: `prefers-reduced-motion` is respected on all animations (marquee, countdown, etc.), focus-visible rings are used throughout, and markup is semantic.
