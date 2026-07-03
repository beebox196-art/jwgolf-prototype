# JWGolf.co.uk Content Scrape
**Date:** 3 April 2026
**Source:** https://jwgolf.co.uk (WordPress + Breakdance)

---

## Domain Info
- **Registrar:** UK2 Limited (NOT SBB - James owns this independently)
- **Expires:** 09-Apr-2027
- **Status:** ACTIVE, James has full control

---

## Site Structure (51 pages found)

### Core Pages (to preserve)
| Page | URL | Status |
|------|-----|--------|
| Homepage | / | ✅ Active |
| About | /about/ | ✅ Active |
| Online Lessons | /online-golf-lessons/ | ✅ Active |
| Golf Lessons Leeds | /golf-lessons-in-leeds/ | ✅ Active |
| Custom Fitting Leeds | /custom-fitting-in-leeds/ | ✅ Active |
| Pricing | /pricing/ | ✅ Active |
| Golf Lesson (general) | /golf-lesson/ | ✅ Active |

### SEO Location Pages (51 total)
James has created location-targeted pages for SEO:
- online-golf-lessons-in-sheffield/
- online-golf-lessons-in-manchester/
- online-golf-lessons-in-leeds/
- online-golf-lessons-in-america/
- online-golf-lessons-in-england/
- online-golf-lessons-in-europe/
- online-golf-lessons-in-ireland/
- online-golf-lessons-scotland/
- online-golf-lessons-uk/
- online-golf-lessons-in-wales/
- online-golf-lesson-yorkshire/

### Blog Posts (21 found)
- golf-lessons-blog/, golf-lessons-blog-2/
- golf-swing-analysis/, scottie-and-rory/, golf-tip-from-scottie/
- golf-practice-tips/, golf-goals/, golf-practice-habits/
- golf-swing/, golf-is-hard/, hit-more-fairways/
- practice-with-purpose/, reliable-golf-shot/
- whats-in-your-golf-bag/, why-custom-fit-blog/
- golf-goals-blog/, inside-a-golf-lesson-blog/
- swing-faults-blog/, play-better-golf/
- ryder-cup-mindset/, short-game-coaching/
- advanced-golf-coaching/, pga-golf-coach/

---

## Key Content Extracted

### Homepage Hero
"Welcome to J Whitaker Academy - Elevate Your Golf Game"

### About Page
- PGA Professional, University of Birmingham graduate
- Leeds and District Head Coach
- Nike Golf Ambassador
- 50+ European Tour Pros fitted
- Coached at The Belfry, set up PGA Academy at Oulton Hall
- Head Pro at Moor Allerton and Howley Hall
- Written for Today's Golfer, National Club Golfer, Golfshake.com

### Pricing (IMPORTANT)
- **Individual Tuition:** £50/hr
- **Half Hour Tuition:** £25
- **3 hrs or 6 x 1/2 hour:** £120
- **10 hrs tuition:** £360
- **Custom Fitting:** FREE (needs clarification - "Free per custom fitting")
- **Playing Lesson:** £120
- **Online Coaching:** £50/lesson
- Group bookings available

### Services Described
1. **One-to-One Coaching** - Trackman technology, personalised
2. **Small Group Coaching** - Fun, supportive environment
3. **Online Coaching** - 48hr turnaround, video analysis
4. **Playing Lessons** - Course management
5. **Custom Fitting** - Trackman-powered, all clubs

### Technology Mentioned
- **Trackman** - Swing analysis, ball flight data
- **Platform Golf Green** - Putting analysis, green reading

### Testimonials (3 on site)
1. "James is a fantastic coach. My game has greatly improved... fantastic technical knowledge of the game."
2. "As a beginner... guided me in terms of my swing and approach play... highly recommend."
3. "A fantastic golf coach who has a fantastic ability to observe and provide solutions that do improve your game."

### Contact Info
- **Email:** james@jwgolf.co.uk
- **Phone:** 07810 647976

---

## Features That Could Catch Us Out

### 1. Contact Form
- Breakdance/WordPress form - we'd need a replacement
- Options: Formspree, Netlify Forms, custom API route
- Need to know where submissions go (email? database?)

### 2. Email @jwgolf.co.uk
- James uses james@jwgolf.co.uk
- If we switch hosting, we MUST preserve email DNS
- Need to check where email is hosted (likely UK2 or separate provider)

### 3. SEO Location Pages
- 51 pages total, many are SEO-targeted location pages
- Redirect strategy needed if we consolidate
- Or replicate if they're driving traffic

### 4. Blog Content
- 21+ blog posts with golf tips and content
- James may want these preserved
- We can scrape and recreate as static pages or blog

### 5. Booking System
- "Book A Session" forms on every page
- Currently just enquiry forms (no live booking calendar)
- We could integrate Calendly or similar

### 6. Branding Discrepancies
- Current site: "J Whitaker Academy", "JW Golf", "James Whitaker Golf"
- New prototype: "JW Golf" with swoosh logo
- Need brand consistency decision

### 7. Nike vs Titleist
- About page says "Nike Golf Ambassador"
- Homepage/other pages say "Titleist Team Ambassador"
- Need to clarify current status

---

## Images
- Need to scrape/download any original images
- Current site uses stock + personal photos
- We have new logo (animated swoosh) and banners from James

---

## What SBB Controls
- WordPress backend (no access for James)
- Hosting on their servers
- "Site builder licence" (proprietary, can't export)
- Possibly the theme/Breakdance setup

## What James Controls
- Domain (UK2) ✅
- Email (james@jwgolf.co.uk) - need to verify DNS
- All content (we've scraped it)

---

## Recommended Migration Path

1. **Keep domain with UK2** - no transfer needed
2. **Verify email DNS** - ensure james@jwgolf.co.uk keeps working
3. **Deploy new site to Vercel** - free hosting
4. **Point domain to Vercel** - update nameservers or A records
5. **Create redirects** - for old URLs to preserve SEO
6. **Integrate booking** - Calendly or form backend
7. **Preserve email** - critical business function

---

## Questions for James
1. Do you use james@jwgolf.co.uk email? Where is it hosted?
2. Do you want the blog posts preserved?
3. Do you want the location-specific SEO pages?
4. Are you currently Nike Ambassador or Titleist Ambassador? (site has both)
5. Any images on the current site you don't have copies of?