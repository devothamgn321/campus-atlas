# CampusOS — AI-Powered Digital Campus Operating System

CampusOS is a state-of-the-art product concept evolved from a final-year smart campus project into a global-ready higher education platform. It is designed for universities that want to unify student identity, academic records, campus services, AI assistance, analytics, and digital credentials into one intelligent operating layer.

This is not positioned as a college portal. It is positioned as a product-led platform for modern universities.

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

## Completed Prototype Scope

This repository now includes a working CampusOS 2.0 prototype:

- Student command center with profile, academic progress, priority tasks, and verified credentials
- Campus Copilot preview with suggested prompts and sample assistant workflow
- Campus services hub for library, dining, registrar, and transport workflows
- Admin intelligence dashboard with adoption, workflow, and health metrics
- Product module registry with owners, maturity, KPIs, health scores, and next milestones
- Mock Express API serving platform overview, modules, metrics, services, student profile, copilot data, and roadmap
- Product, architecture, roadmap, metrics, personas, and portfolio positioning documents

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

Install all workspace dependencies from the repository root:

```bash
npm install
```

### Frontend

```bash
npm run dev:web
```

The frontend runs at:

```text
http://localhost:5173
```

### API

```bash
npm run dev:api
```

The API runs at:

```text
http://localhost:4000
```

Useful API endpoints:

```text
GET /api/overview
GET /api/modules
GET /api/metrics
GET /api/services
GET /api/student-profile
GET /api/copilot
GET /api/roadmap
```

### Production Build

```bash
npm run build
```

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
