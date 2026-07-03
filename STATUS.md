# JWGolf Project Status

## Stage
planning


---

## Current Status: RE-ENGAGED — JAMES BACK IN TOUCH

James has been back in touch. Project paused since late April, now slated for revisit week commencing 2 Jun 2026.

Previously proposed: 3-agent OpenClaw setup on Mac Mini, £60/mo model plan. Outstanding items (Mac Mini specs, MS365 app password, social media access, booking system preference) still pending — will reconfirm with James.

---

## Proposed Model Setup (£60/mo)

| Tier | Provider | Access | Cost | Role |
|------|----------|--------|------|------|
| **Primary** | OpenAI (OAuth) | GPT-4o, o3, etc. | £20/mo | Main agent — reasoning, coordination |
| **Agents** | Ollama Cloud | GLM-5.1, Kimi 2.6, + local models | £20/mo | Activity Manager + Web/Marketing agent |
| **Fallback** | DeepSeek API | DeepSeek v3 / R1 / 4 | ~£20 top-up (lasts months) | High-end fallback |

**Ongoing cost:** £40/mo + occasional DeepSeek top-up

### Agent → Model Mapping

| Agent | Model | Tier |
|-------|-------|------|
| **Main agent** | GPT-4o / o3 | OpenAI OAuth |
| **Activity Manager** | GLM-5.1 | Ollama Cloud |
| **Web & Marketing** | Kimi 2.6 / GLM-5.1 | Ollama Cloud |
| **Fallback (any)** | DeepSeek v3 | DeepSeek credits |

Full proposal → `Docs/MODEL-SETUP-PROPOSAL.md`

---

## Recent Progress

### 27 April 2026
- 🆕 **Model setup proposal defined** — 3-tier: OpenAI OAuth + Ollama Cloud + DeepSeek fallback
- 🆕 **Agent count revised to 3** — Main + Activity Manager + Web & Marketing
- 📝 Proposal doc created → `Docs/MODEL-SETUP-PROPOSAL.md`
- ⏳ Awaiting James: Mac Mini specs, MS365 app password, social media access

### 25 April 2026
- 🆕 **OpenClaw agent spec written** → `Docs/OPENCLAW-AGENT-SPEC.md`
- 🆕 Two-agent architecture defined: Activity Manager + Web & Socials
- ✅ James confirmed Mac Mini incoming, setup next week
- 📋 Full setup checklist created (13 steps)

### 23 April 2026
- 🔄 Mel's design spec for site redesign reviewed

### 9 April 2026
- 🔄 James has access to an older Mac mini (now confirmed: he's getting his own)

### 3 April 2026
- ✅ Full site scrape completed (51 pages, 21 blog posts)
- ✅ Domain ownership verified (UK2 - James owns it, NOT SBB)
- ✅ Email verified safe (Microsoft 365 - NOT tied to SBB)
- ✅ Content saved to `/Docs/scraped-content/`
- ✅ Email sent to James with full analysis and options
- ✅ Neo rebuilt prototype with real content: https://jwgolf-prototype.vercel.app
- ✅ Content requirements documented: `CONTENT-NEEDED-FROM-JAMES.md`

---

## OpenClaw Agent Architecture

| Agent | Purpose | Priority | Model |
|-------|---------|----------|-------|
| **Main Agent** | Business reasoning, coordination, client comms | 🔴 High | GPT-4o / o3 (OpenAI OAuth) |
| **Activity Manager** | Email triage, booking management, events, calendar, daily briefing | 🔴 High — James's main pain point | GLM-5.1 (Ollama Cloud) |
| **Web & Marketing** | Website updates, social media scheduling, weekly engagement digest | 🟡 Medium — keeps presence active | Kimi 2.6 (Ollama Cloud) |

**Fallback (any agent):** DeepSeek v3 / R1 / 4 (pay-per-token, ~£20 top-up lasts months)

**Philosophy:** Simple beats comprehensive. Trust before autonomy. Visible value fast.

Full spec → `Docs/OPENCLAW-AGENT-SPEC.md` · Model proposal → `Docs/MODEL-SETUP-PROPOSAL.md`

---

## Key Findings

### SBB Invoice Analysis
- **Amount:** £350/year
- **Services claimed:** Hosting + site builder licence + support
- **Actual value:** £0-50/year (Vercel is free, domain is ~£15/year)
- **Risk of leaving:** NONE — domain, email, content all James's

---

## Pending Items

### Awaiting James (for OpenClaw setup)
1. Mac Mini arrival and specs
2. Microsoft 365 app password (email/calendar access)
3. Social media account access or API keys
4. Preferred messaging channel for agent interaction
5. Booking system preference (Calendly vs enquiry form)

### Awaiting James (for website)
1. Ambassador status (Nike or Titleist?)
2. High-res headshot and action photos
3. Pricing confirmation
4. SBB renewal decision (was due ~9 April — status unclear)

---

## Project Files

| Path | Purpose |
|------|---------|
| `/Docs/OPENCLAW-AGENT-SPEC.md` | Full agent architecture, capabilities, setup checklist |
| `/Docs/MODEL-SETUP-PROPOSAL.md` | Model subscription proposal (OpenAI + Ollama + DeepSeek) |
| `/Docs/scraped-content/` | All scraped website content |
| `/Docs/CONTENT-SCRAPE-2026-04-03.md` | Scrape summary analysis |
| `/Docs/CONTENT-NEEDED-FROM-JAMES.md` | Content requirements list |
| `/Docs/Design/` | New logo and banners from James |
| `/Docs/Email From James 03-04-26.rtfd` | SBB invoice email |

---

## Live Prototype

**URL:** https://jwgolf-prototype.vercel.app

- New branding integrated
- Real content from scraped site
- Placeholders for James's photos
- Ready for review

---

## Next Steps

1. **Week of 27 April:** Set up Mac Mini with OpenClaw when it arrives
2. **Install Activity Manager agent** — email triage + booking management (priority)
3. **Install Web & Socials agent** — website + social scheduling
4. **James walkthrough** — teach him to interact with agents
5. **Remote access** — Tailscale for Adam to support remotely

---

## Stakeholders

- **James Whitaker** — Client, PGA Professional
- **Adam Box** — Project lead, AI coordination
- **Bee/Neo** — Development and support

---

## Activity Log
- **2026-05-30T22:14:00** - James back in touch. Project re-engaging, revisit planned week of 2 Jun 2026
- **2026-04-27T21:55:00** - Model setup proposal added (3-tier: OpenAI OAuth + Ollama Cloud + DeepSeek fallback)
- **2026-04-25T15:10:00** - OpenClaw agent spec created, STATUS updated for Mac Mini setup
- **2026-04-09T09:15:43** - Stage changed to "planning"
- **2026-04-09T09:15:24** - Stage changed to "planning"