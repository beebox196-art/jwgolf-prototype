# JWGolf Re-Engagement Briefing — Week of 2 June 2026

## Where We Left Off

- **Last contact:** 27 April 2026 — model setup proposal sent to James (£40/mo + DeepSeek top-up)
- **Project status:** Paused since late April, James now back in touch
- **Live prototype:** https://jwgolf-prototype.vercel.app (still live)
- **Site scrape:** 51 pages + 21 blog posts archived in `/Docs/scraped-content/`

## What's Been Proposed (Awaiting James's Go-Ahead)

### 3-Agent OpenClaw Setup on James's Mac Mini

| Agent | Purpose | Model |
|-------|---------|-------|
| **Main Agent** | Business reasoning, coordination, client comms | GPT-4o / o3 (OpenAI OAuth, £20/mo) |
| **Activity Manager** | Email triage, bookings, calendar, daily briefing | GLM-5.1 (Ollama Cloud, £20/mo) |
| **Web & Marketing** | Website updates, social scheduling, weekly digest | Kimi 2.6 (Ollama Cloud, included) |

**Ongoing cost: £40/mo** + occasional DeepSeek top-up (~£20 lasts months)

## What's Still Outstanding

### Critical Path (need these before setup)
1. **Mac Mini specs** — Has it arrived? M4 base? RAM/storage?
2. **Microsoft 365 app password** — For james@jwgolf.co.uk email/calendar access
3. **Social media access** — Instagram, Facebook, X (accounts or API keys)
4. **Booking system preference** — Calendly vs enquiry form vs phone-only

### Still Needed (for website finalisation)
5. **Ambassador status** — Nike or Titleist? (site had conflicting info)
6. **High-res headshot + action photos** — For prototype replacement
7. **Pricing confirmation** — Are the scraped prices still current?
8. **SBB renewal decision** — Invoice was due 9 April, did they renew or cancel?

## Suggested Re-Engagement Flow

### Week of 2 June
1. **Mon/Tue:** Send James a friendly check-in with 3 quick questions:
   - "Has the Mac Mini arrived yet?"
   - "Are you still keen to go ahead with the AI setup?"
   - "What's your current booking system preference?"
   
2. **Once confirmed:** 
   - Walk through Mac Mini setup (SSH, OpenClaw install, Tailscale)
   - Set up Activity Manager first (email triage + bookings = visible value fast)
   - Then Web & Marketing agent
   - Walkthrough: teach James to interact with agents

### Parallel (if James wants to move on website too)
- Finalise brand questions (ambassador status, name, tagline)
- Collect photos
- Decide: migrate prototype to jwgolf.co.uk now or later?

## Files to Reference

| File | Purpose |
|------|---------|
| `Docs/OPENCLAW-AGENT-SPEC.md` | Full agent architecture + 13-step setup checklist |
| `Docs/MODEL-SETUP-PROPOSAL.md` | Model proposal with cost breakdown for James |
| `Docs/CONTENT-NEEDED-FROM-JAMES.md` | 20+ content questions (most still unanswered) |
| `STATUS.md` | Current project state |

## Key Insight

**Activity Manager should be installed FIRST.** Email/booking triage is James's stated main pain point. That's the agent that proves value immediately. Web & Marketing is nice-to-have in comparison. Start there, earn trust, then expand.

---
*Prepared by Bee — 30 May 2026*
