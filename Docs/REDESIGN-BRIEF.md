# JWGolf Website Redesign Brief

**Date:** 2026-04-23  
**Status:** Design Phase  
**Designer:** Mel  
**Builder:** Q  
**Reviewer:** Kieran  

---

## Goal

Redesign the JWGolf website (https://jwgolf-prototype.vercel.app) to look **cool, sophisticated, and visually compelling** — using Mel's signature design patterns and React Bits animated components.

## Current State

- Next.js 15 + Tailwind CSS + React 19
- 4 pages: Home, About, Lessons, Contact
- Dark theme (#0f0f0f) with gold (#d4af37) and green (#1b4332) accents
- Basic fade-in animations, dot-pattern overlays
- Background images are a single 1536×1024 montage (now split into 4 panels)

## Design Direction

### Theme: Premium Golf Coaching — Not a Dashboard

This is a **consumer-facing coaching brand**, not an admin panel. The design should feel:

- **Premium** — James works with European Tour pros. The site should reflect that level
- **Warm** — Golf is about sunshine, greens, and personal connection. Not cold tech
- **Resilient** — James survived 5 brain surgeries. The story should inspire, not feel corporate
- **Approachable** — Golfers of all levels should feel welcome

### Palette

**Keep the existing brand palette** but refine it:
- Primary: Deep green (#1b4332) — golf course, trust
- Accent: Gold (#d4af37) — premium, achievement
- Background: Near-black (#0f0f0f) — sophistication
- Text: Cream (#f5f5dc) — warmth over pure white

**Add subtle warmth:** Consider cream/terracotta accents for approachable sections.

### Visual Direction

**Mel's signature patterns should be adapted for a golf brand:**

1. **Hero Section** — Use the split hero panel + React Bits `Particles` or `Aurora` for subtle background motion. Not overwhelming — think "premium golf course at dawn" not "rave".

2. **Cards** — Frosted glass with green/gold glow on hover. Not holographic (too tech). Think "crystal glass on a polished desk".

3. **Buttons** — Gold gradient with subtle glow on hover. Glass secondary buttons.

4. **Typography** — Keep Inter but add a serif accent (like Playfair Display) for headings to feel more premium/golf-club.

5. **Animations** — Scroll-triggered reveals, not just fade-in. `BlurText` for hero headline. Smooth section transitions.

6. **Backgrounds** — Replace the dot patterns with something more distinctive:
   - Subtle green gradient mesh
   - Golf course texture (grass lines, fairway patterns)
   - Warm aurora for the resilience story section

### React Bits Components to Use

| Component | Where | Why |
|-----------|-------|-----|
| `Particles` | Hero section | Subtle floating particles like morning dew on a fairway |
| `BlurText` | Hero headline | Dramatic focus reveal |
| `Aurora` | Resilience story section | Warm, emotional background |
| `BounceCards` | Services grid | Playful but premium card entrance |
| `BorderGlow` | CTA buttons | Gold glow on hover |

### What NOT to Do

- ❌ Don't make it look like a SaaS dashboard
- ❌ Don't use holographic rainbows (too tech, not golf)
- ❌ Don't over-animate — golf is about calm focus
- ❌ Don't lose the existing content — it's well-written
- ❌ Don't make the navigation complex — 4 pages, keep it simple

### Image Assets

The montage has been split into 4 panels:
- `hero.png` — Hand placing ball on tee (768×512)
- `brand.png` — Golfer silhouette at sunset (768×512)
- `logo.png` — Brand mark with JW monogram (768×512)
- `services.png` — Coaching scene with text (768×512)

These should replace the banner-primary.png and be used contextually across pages.

---

## Deliverables

1. **Design Spec** — 3 concepts from Mel (safe, bold, wildcard)
2. **Implementation** — Q builds the chosen concept
3. **Deploy** — Push to Vercel for Adam to review
4. **Verify** — Lighthouse score ≥ 90, mobile responsive, all links work

---

## Success Criteria

- Adam says "this looks proper good"
- James would be proud to share the link
- A golfer browsing it would want to book a lesson within 10 seconds
- The resilience story section makes you feel something
- The services section is clear, premium, and actionable
