# OpenClaw Agent Setup — JW Golf

## Overview

James is getting a Mac Mini for a dedicated OpenClaw installation. The setup is deliberately simple — two focused agents that save him real time day-to-day, not a sprawling system he ignores.

**Target:** Week of 27 April 2026 (when Mini arrives)

---

## Agent 1 — Activity Manager (Priority)

**Purpose:** Take the administrative load off James so he can focus on coaching.

### Core Capabilities
| Feature | Detail |
|---------|--------|
| **Email triage** | Monitor james@jwgolf.co.uk, categorise (booking enquiry / lesson query / spam / business), draft replies for approval |
| **Golf lesson bookings** | Auto-acknowledge incoming booking requests, add to calendar, send confirmation |
| **Event management** | Track upcoming events, reminders, handle cancellations/reschedules |
| **Calendar sync** | Maintain James's teaching schedule, flag conflicts |
| **Daily briefing** | Morning summary: bookings today, pending emails, upcoming events |

### Integration Points
- **Email:** Microsoft 365 (james@jwgolf.co.uk) — IMAP/SMTP via OpenClaw gog or native plugin
- **Calendar:** Google Calendar or Microsoft 365 calendar
- **Booking system:** Calendly or enquiry form (TBD with James)

### Success Metric
James no longer manually checks email for booking enquiries — the agent surfaces only what needs his attention.

---

## Agent 2 — Web & Socials

**Purpose:** Keep James's online presence active and current without him doing it.

### Core Capabilities
| Feature | Detail |
|---------|--------|
| **Website updates** | Update lesson prices, availability, event listings on jwgolf.co.uk |
| **Social media** | Schedule and publish posts (Instagram, Facebook, X) |
| **Content prompts** | Suggest post ideas based on season, events, coaching tips |
| **Weekly digest** | Simple report: posts published, engagement summary, what's working |

### Integration Points
- **Website:** Vercel-hosted Next.js (jwgolf-prototype.vercel.app → jwgolf.co.uk)
- **Social media:** Meta Business Suite / scheduling API
- **Content source:** James's coaching tips, seasonal offers, event photos

### Success Metric
James's socials stay active with zero effort from him. Website stays current.

---

## Infrastructure Requirements

### Mac Mini Specs (to confirm on arrival)
- macOS version
- RAM / Storage
- Network connectivity (Wi-Fi or Ethernet)
- Static IP or Tailscale for remote access

### OpenClaw Setup
- Install OpenClaw gateway
- Configure token auth
- Set up channels: Email (Microsoft 365), Discord or Telegram (for James to interact with agents)
- Configure cron jobs for scheduled tasks (daily briefing, weekly digest)
- Tailscale or similar for remote management by Adam

### Accounts Needed from James
- [ ] Microsoft 365 app password (for email/calendar access)
- [ ] Social media account access or API keys
- [ ] Calendly account (if using)
- [ ] Preferred messaging channel for agent interaction (Discord / Telegram / WhatsApp)
- [ ] Vercel deployment access (for website updates)

---

## Philosophy

- **Simple beats comprehensive.** Two agents he relies on > eight he ignores.
- **Trust before autonomy.** Start with draft-and-approve mode. Graduate to auto-action only after James is comfortable.
- **Visible value.** The Activity Manager must produce an obvious daily win — bookings handled, emails sorted — so James sees the point immediately.
- **Low maintenance.** This runs on a Mac Mini in James's house. No complex infrastructure. If it breaks, we fix it remotely.

---

## Setup Checklist (Next Week)

1. [ ] Unbox and boot Mac Mini
2. [ ] Update macOS, enable SSH, set up auto-login
3. [ ] Install Node.js, OpenClaw gateway
4. [ ] Configure gateway (token auth, channels)
5. [ ] Install and configure email plugin (Microsoft 365)
6. [ ] Create Activity Manager agent (config, skills, cron)
7. [ ] Create Web & Socials agent (config, skills, cron)
8. [ ] Test: send test email → agent triages correctly
9. [ ] Test: booking enquiry → auto-acknowledge + calendar entry
10. [ ] Test: website update via agent
11. [ ] James walkthrough: how to interact with agents, approve actions
12. [ ] Set up Tailscale for remote support
13. [ ] Document everything in this folder

---

*Created: 2026-04-25 | Author: Bee*