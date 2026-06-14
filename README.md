# CampusOS — A Product Management Case Study

> **Naming note:** "CampusOS" is also the name of an unrelated commercial student app (campusos.app). This repository is a personal portfolio / case-study project and is not affiliated with that product. The name is used here as a working title for the product strategy exercise below.

CampusOS is a product case study evolved from a final-year smart campus project into a global-ready higher education platform concept. It is designed for universities that want to unify student identity, academic records, campus services, AI assistance, analytics, and digital credentials into one intelligent operating layer.

This is not positioned as a college portal. It is positioned as a product-led platform for modern universities.

## 60-Second Recruiter Scan

If you have a minute, this is the fastest path through the project:

1. **Try the AI Copilot demo** — run the app (`npm run dev` in `apps/web`) and open the "AI Campus Copilot" section. It's a scripted demo (no live LLM), built to show RAG-style citations and confidence-based escalation — the UX decisions that matter for a campus AI assistant, not just the model call.
2. **Open the Admin Intelligence Dashboard** — same app, "Admin Dashboard" section. Pulls module status and the metrics framework from the Express API when running locally, with a static fallback otherwise.
3. **Read the [PRD](docs/product/PRD.md)** — problem framing, target users, MVP scope, and what's explicitly out of scope.
4. **Read the [Portfolio Story](docs/pitch/Portfolio-Story.md)** — why this project exists and what it's meant to demonstrate.
5. **Skim the [Roadmap](docs/roadmap/Roadmap.md) and [Metrics framework](docs/product/Metrics.md)** for how the project would mature toward a real product.

## What's Live vs. What's Roadmap

| Area | Status | Notes |
|---|---|---|
| Landing page & product modules | **Live** | React + Vite frontend, all 6 modules rendered |
| AI Campus Copilot demo | **Live (scripted)** | Canned Q&A with source citations + confidence-based escalation; no real LLM |
| Admin Intelligence Dashboard | **Live** | Reads module/metrics data from the Express API, falls back to bundled mock data |
| Express API (`/api/modules`, `/api/metrics`) | **Live** | Mock JSON data, CORS-enabled |
| Product docs (PRD, personas, metrics, roadmap, architecture) | **Live** | See `docs/` |
| Authentication, real student data | **Roadmap** | Phase 2 |
| Real RAG pipeline / LLM integration | **Roadmap** | Phase 3 — see [System Architecture](docs/architecture/System-Architecture.md) |
| LMS/SIS integrations, digital credentials | **Roadmap** | Phase 4 |

## Product Vision

Universities operate through fragmented systems: student portals, learning systems, dining systems, library tools, ID cards, department workflows, career portals, and manual administrative processes. CampusOS brings these workflows into one connected platform.

The long-term vision is to become the digital operating system for higher education institutions.

## Core Product Modules

1. **Digital Student Identity**
   - Unified student profile
   - Digital campus ID concept
   - Credential and document verification
   - Role-based access for students, faculty, and administrators

2. **AI Campus Copilot**
   - Student-facing AI assistant
   - Campus service discovery
   - Academic support
   - FAQ and knowledge-base retrieval concept
   - Future-ready RAG architecture

3. **Academic Intelligence**
   - Academic record management
   - Student progress visibility
   - Degree planning concept
   - Risk and engagement analytics roadmap

4. **Campus Services Hub**
   - Library workflows
   - Dining/canteen workflows
   - Events, printing, transport, housing, and other expandable services

5. **Admin Intelligence Dashboard**
   - Operational metrics
   - Service usage analytics
   - Student engagement overview
   - Decision-support layer for university administrators

6. **Digital Credentials Layer**
   - Blockchain-backed integrity model
   - IPFS-inspired decentralized document storage concept
   - Verifiable academic record roadmap

## Why This Project Exists

The original Student Link project digitized student records, library, canteen, and administrative workflows. CampusOS upgrades that foundation into a globally relevant product with product strategy, user personas, success metrics, roadmap, architecture, and a modern UI.

It demonstrates product thinking, engineering management, platform design, and AI-era higher education transformation.

## Target Users

- Students
- Faculty
- University administrators
- Student affairs teams
- Career services teams
- Campus operations teams
- University technology leaders

## North Star Metric

**Weekly Active Students completing meaningful campus workflows through CampusOS.**

## Supporting Metrics

- Reduction in manual administrative requests
- Time saved in document verification
- Student service adoption rate
- AI assistant resolution rate
- Campus service transaction volume
- Admin dashboard usage frequency
- Student satisfaction score

## Tech Stack

This starter version is built as a portfolio-grade prototype.

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Styling | CSS |
| API | Node.js, Express |
| Data | Mock JSON |
| Future Data Layer | PostgreSQL, Prisma |
| Future AI Layer | RAG, Vector DB, LLM APIs |
| Future Cloud | AWS / Azure |
| Future Integrations | Canvas, Blackboard, Workday, Google Workspace, Microsoft 365 |

## Repository Structure

```text
CampusOS/
├── apps/
│   ├── web/        # React frontend
│   └── api/        # Express API starter
├── docs/
│   ├── product/    # PRD, personas, metrics
│   ├── architecture/
│   ├── roadmap/
│   └── pitch/
└── design/
```

## How To Run

For the full experience (AI Copilot demo + Admin Dashboard with live API data), run both apps in separate terminals.

### Frontend

```bash
cd apps/web
npm install
npm run dev
```

Visit the printed local URL, then jump to the "AI Copilot Demo" or "Admin Dashboard" links in the nav.

### API

```bash
cd apps/api
npm install
npm run dev
```

Runs on `http://localhost:4000`. If this isn't running, the Admin Dashboard still works using bundled fallback data and shows a "Demo data" badge.

## Portfolio Positioning

CampusOS represents my transition from building a final-year engineering project to thinking like an Engineering Management and Product Management professional. The project now focuses on:

- Problem discovery
- Platform strategy
- User personas
- Product architecture
- AI-enabled workflows
- Higher education operations
- Metrics and roadmap thinking
- Global scalability

## Status

This repository is a refreshed product prototype and portfolio project. The original final-year modules serve as the historical foundation. CampusOS 2.0 defines the upgraded product direction.
