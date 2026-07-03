# AI Model Setup Proposal — For James

## The Setup (£60/mo)

| Tier | Provider | Access | Cost | Role |
|------|----------|--------|------|------|
| **Primary** | OpenAI (OAuth) | GPT-4o, o3, etc. | £20/mo | Main agent — reasoning, coordination |
| **Agents** | Ollama Cloud | GLM-5.1, Kimi 2.6, + local models | £20/mo | Activity Manager + Web/Marketing agent |
| **Fallback** | DeepSeek API | DeepSeek v3 / R1 / 4 | ~£20 top-up (lasts months) | High-end fallback |

**Ongoing cost:** £40/mo + occasional DeepSeek top-up

---

## Why Three Providers?

1. **No single point of failure** — if one provider is down or rate-limited, the others pick up
2. **Right model for the job** — expensive reasoning on the main agent, capable but cheaper models for sub-agents
3. **OpenAI OAuth** — cleaner than API key management, no token top-ups, just the monthly sub
4. **Ollama gives local + cloud** — run smaller models locally on the Mac Mini for free, plus cloud access to powerful models like GLM-5.1 and Kimi 2.6
5. **DeepSeek as fallback** — incredibly cheap per-token, excellent models, only used when needed

---

## Agent → Model Mapping

| Agent | Model | Tier | Purpose |
|-------|-------|------|---------|
| **Main Agent** | GPT-4o / o3 | OpenAI OAuth | Business reasoning, coordination, client comms |
| **Activity Manager** | GLM-5.1 | Ollama Cloud | Email triage, bookings, events, calendar, daily briefing |
| **Web & Marketing** | Kimi 2.6 | Ollama Cloud | Content generation, SEO, social media, website updates |
| **Fallback (any)** | DeepSeek v3 / R1 / 4 | DeepSeek credits | Steps in when primary models are unavailable or busy |

---

## Hardware Requirements

- Mac Mini M4 (base model minimum)
- 16GB RAM recommended (24GB sweet spot for local models)
- Ollama installed locally (free — can run smaller models on-device)

---

## Cost Framing

The ongoing commitment is **£40/mo** (OpenAI + Ollama). DeepSeek is a **top-up, not a subscription** — £20 of credit lasts months because it's pay-per-token at very low rates. This is better presented as £40/mo + occasional top-up rather than a flat £60.

---

## What James Needs to Do

1. Confirm Mac Mini specs
2. Sign up for OpenAI Plus, Ollama Cloud, and add DeepSeek credits
3. Provide Microsoft 365 app password (email/calendar access)
4. Provide social media account access or API keys
5. Choose preferred messaging channel for agent interaction
6. Decide on booking system (Calendly vs enquiry form)

---

*Prepared by Adam Box — OpenClaw AI setup*
*Date: 27 April 2026*