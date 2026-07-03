# JWGolf Redesign — Hybrid Design Spec (Concept 1 + 3)
**Version:** 1.0  
**Designer:** Mel (Creative Director)  
**Date:** 2026-04-23  
**Approved Direction:** Hybrid — Luxury Watch × Green Journey  
**Builder:** Q  

---

## 🎯 The Vision

**Concept 1's premium surfaces** (crystal glass, serif typography, gold glow) applied through **Concept 3's architectural layout** (bento grid, scrollytelling, fairway path).

The result: A site that feels like a high-end golf magazine meets an immersive digital experience. Premium materials, but the layout tells a story.

---

## 🏗 Layout Architecture

### The Fairway Path
A subtle, animated 1px gold line that traces the scroll journey from hero → about → services → resilience story → contact. It's not a literal golf hole drawing — it's an abstract "line of flight" that guides the eye.

- **Start:** Thin gold dot at the hero (tee off)
- **Middle:** The line curves and branches through sections (fairway, hazards, approach)
- **End:** Expands into the contact form (the green)

### Bento Grid Sections
Instead of full-width horizontal bands, content lives in a **CSS Grid bento layout**:
- Varied tile sizes (1×1, 2×1, 1×2, 2×2)
- Each tile is a Crystal Glass card
- Tiles stagger-animate in on scroll
- Mobile collapses to single column

---

## 💎 Visual Language (Concept 1 Core)

### Crystal Glass Cards
```tsx
className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03]
           border border-accent-gold/20 rounded-2xl
           hover:border-accent-gold/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]
           transition-all duration-500"
```

### Typography
- **Headings:** Playfair Display (serif) — heritage, premium
- **Body:** Inter (sans) — clean, readable
- **Accents:** Small-caps tracking-wide with gold underline

### Gold Glow System
- **Static:** Subtle gold border on cards (20% opacity)
- **Hover:** Border brightens to 40%, outer glow appears
- **CTA:** Gold gradient fill with pulsing outer glow
- **Fairway Path:** Animated 1px gold line with bloom

### Background Treatment
- **Base:** Near-black (#0f0f0f)
- **Mesh gradients:** Deep green (#1b4332) radial glows at section transitions
- **No dot patterns** — replaced with subtle noise texture (SVG filter)

---

## 🎬 React Bits Components (Mapped to Sections)

| Component | Where | Effect |
|-----------|-------|--------|
| `BlurText` | Hero headline "One Clear Fix Away" | Dramatic focus-in reveal |
| `Particles` | Hero background | Slow cream particles, low density — "morning dew" |
| `Aurora` | Resilience story section | Shifting green/black — emotional depth |
| `BounceCards` | Services grid (bento tiles) | Staggered entrance on scroll |
| `BorderGlow` | CTA buttons | Gold pulse on hover |
| Custom `ScrollLine` | Fairway Path | 1px gold line that draws as you scroll |

---

## 📐 Page-by-Page Bento Layout

### HOME PAGE

**Hero (2×2 tile):**
- Full-width hero with `Particles` background
- `BlurText` headline reveal
- Split hero image (hand + ball on tee) as right-aligned overlay
- Crystal Glass CTA cards below headline
- Social proof bar becomes a 1×1 bento tile strip

**Problem/Solution (2×1 + 1×1 tiles):**
- Left tile (2×1): "Overwhelms You" with red ✕ marks in glass cards
- Right tile (1×1): "One Clear Fix" in gold-bordered glass card
- Scroll-triggered: red tiles fade out, gold tile blooms in

**Services (2×2 bento grid):**
- 4 tiles in a bento layout (not uniform grid)
- In-Person: 2×1 tile (featured)
- Online: 1×2 tile (highlighted, gold border)
- Fitting: 1×1 tile
- Playing: 1×1 tile
- `BounceCards` entrance animation

**Resilience Story (2×1 tile):**
- `Aurora` background (green shifting to black)
- Timeline milestones with `BlurText` reveals
- Background transitions from dark → green as you scroll through

**Testimonials (1×1 tiles in bento row):**
- 3 glass cards in a horizontal row
- Gold star ratings, cream quotes
- Stagger scroll reveal

**Credentials (1×1 tile strip):**
- 4 small glass tiles with gold icons
- Minimal, clean

### ABOUT PAGE

**Hero (2×2):** Brand panel image + serif headline
**Method (2×1):** Crystal Glass cards explaining the One Clear Fix
**Story (2×2):** Scrollytelling resilience journey with Aurora background
**Credentials (bento row):** PGA, Titleist, Leeds, Tour Pros

### LESSONS PAGE

**Hero (2×2):** Services panel image
**Pricing Cards (bento grid):** Each service type as a glass tile with gold pricing
**Booking CTA (2×1):** Gold glow button

### CONTACT PAGE

**Hero (2×2):** Gold gradient with glass overlay
**Contact Info (bento row):** 3 glass tiles (book, email, phone)
**Form (2×1):** Crystal Glass form fields with gold focus states
**Map/Location (1×1):** Simple embedded map

---

## 🎨 Split Image Usage

| Image | Where | Treatment |
|-------|-------|-----------|
| `hero.png` | Home hero | Right-aligned overlay, soft rounded corners |
| `brand.png` | About hero | Full-width parallax background |
| `logo.png` | Footer, favicon | Standalone brand mark |
| `services.png` | Lessons hero | Background with glass overlay |

---

## ✨ Animation Choreography

1. **Hero:** BlurText headline → Particles fade in → CTA buttons slide up
2. **Scroll:** Fairway Path draws → bento tiles stagger in (100ms delay each)
3. **Hover:** Cards bloom gold glow → buttons pulse
4. **Resilience:** Aurora shifts → timeline milestones BlurText reveal
5. **Services:** BounceCards entrance → individual tile glow on hover

---

## 📊 Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| CSS Size | < 20KB | Minimal custom CSS, Tailwind utilities |
| JS Bundle | < 150KB | Lazy-load React Bits components |
| Lighthouse Performance | ≥ 85 | Image optimization, lazy loading |
| Lighthouse Accessibility | ≥ 90 | Semantic HTML, contrast ratios |
| First Paint | < 1.5s | Hero image priority, font display swap |

---

## 🔧 Implementation Notes for Q

1. **Install React Bits components** from the shadcn registry or copy from `/Users/openclaw/.openclaw/workspace/react-bits/public/r/`
2. **Add Playfair Display** font via Next.js `next/font/google`
3. **Update globals.css** with Crystal Glass card styles, gold glow system, noise texture
4. **Create shared components:**
   - `CrystalCard` — frosted glass card with gold border
   - `FairwayPath` — scroll-triggered gold line
   - `BentoGrid` — responsive CSS grid wrapper
   - `GoldButton` — CTA with pulse glow
5. **Replace all dot-pattern SVGs** with gradient mesh backgrounds
6. **Use split images** instead of banner-primary.png
7. **Keep all existing content** — only redesign the presentation
8. **Test mobile** — bento grid collapses gracefully to single column
