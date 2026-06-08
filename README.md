# CampusOS — AI-Powered Digital Campus Operating System

CampusOS is an AI Product Manager portfolio case study evolved from a final-year smart campus project into a product-grade higher education concept. It explores how universities could unify student identity, academic records, campus services, AI assistance, analytics, and digital credentials into one intelligent operating layer.

This is not positioned as a claim that no one has built campus AI before. Higher education already has AI assistants, student engagement platforms, campus apps, and service automation tools. CampusOS is my case-study interpretation of the space, built to demonstrate AI PM thinking: problem framing, product strategy, RAG use-case design, evaluation, responsible AI controls, metrics, roadmap, and launch planning.

## AI Product Manager Showcase

This project is intentionally built to demonstrate AI PM skill, not only frontend implementation. It includes:

- AI product thesis and strategic wedge
- Customer segmentation and opportunity sizing
- RAG-based campus copilot use-case design
- AI evaluation plan with offline and online quality gates
- Responsible AI governance for privacy, safety, fairness, and reliability
- Experiment backlog with hypotheses, primary metrics, guardrails, samples, and decision rules
- GTM and launch sequencing from design partner pilot to platform expansion
- Admin analytics and KPI thinking tied to product outcomes
- Working React + Express prototype that visualizes the product strategy

## Product Vision

Universities operate through fragmented systems: student portals, learning systems, dining systems, library tools, ID cards, department workflows, career portals, and manual administrative processes. CampusOS brings these workflows into one connected platform.

The long-term product vision is to become a digital operating layer for higher education institutions. The portfolio goal is to show how an AI PM can move from messy operational problems to a measurable, responsible AI product strategy.

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
- AI PM operating room with strategy, opportunity sizing, use-case canvas, experiments, evals, governance, and launch plan
- Campus services hub for library, dining, registrar, and transport workflows
- Admin intelligence dashboard with adoption, workflow, and health metrics
- Product module registry with owners, maturity, KPIs, health scores, and next milestones
- Mock Express API serving platform overview, modules, metrics, services, student profile, copilot data, roadmap, and AI PM artifacts
- Product, architecture, roadmap, metrics, personas, and portfolio positioning documents

## Why This Project Exists

The original Student Link project digitized student records, library, canteen, and administrative workflows. CampusOS upgrades that foundation into a modern AI PM case study with product strategy, user personas, success metrics, roadmap, architecture, and a working prototype.

It demonstrates product thinking, engineering management, platform design, and responsible AI product execution in a higher education context.

## Market Context

CampusOS sits in an active product category. Existing higher-education products already address AI student support, campus engagement, chatbots, LMS workflows, and service automation. The purpose of this repo is not to present CampusOS as a first-of-its-kind invention. The purpose is to show how I would analyze the category and design a differentiated product concept around:

- Campus-specific RAG with answer grounding and citations
- Closed-loop service workflows, not chatbot-only support
- Student identity and credential-aware experiences
- Admin intelligence tied to adoption and operational load
- AI evaluation gates and responsible AI governance
- GTM and experiment design for a credible MVP path

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
GET /api/ai-product-strategy
```

### Production Build

```bash
npm run build
```

## Portfolio Positioning

CampusOS represents my transition from building a final-year engineering project to thinking like an AI Product Manager. The project now focuses on:

- Problem discovery
- Platform strategy
- User personas
- Product architecture
- AI-enabled workflows
- AI evaluation and responsible AI controls
- Experiment design and product decision rules
- Higher education operations
- Metrics and roadmap thinking
- GTM and launch planning
- Global scalability

## Key Portfolio Documents

- [AI PM Portfolio Case Study](docs/product/AI-PM-Portfolio-Case-Study.md)
- [AI Product Strategy](docs/product/AI-Product-Strategy.md)
- [AI Evaluation Plan](docs/product/AI-Evaluation-Plan.md)
- [Experiment Backlog](docs/product/Experiment-Backlog.md)
- [GTM Launch Plan](docs/product/GTM-Launch-Plan.md)
- [PRD](docs/product/PRD.md)
- [Metrics Framework](docs/product/Metrics.md)
- [System Architecture](docs/architecture/System-Architecture.md)

## Status

This repository is a refreshed product prototype and portfolio project. The original final-year modules serve as the historical foundation. CampusOS 2.0 defines the upgraded product direction.
