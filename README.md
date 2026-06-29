# CampusOS

**AI Product Management Case Study — AI-Native Operating System for Higher Education**

CampusOS is an AI PM case study exploring how I would define, design, evaluate, and launch an AI-native campus operating system inside a real university environment. It demonstrates product strategy, RAG system design, evaluation frameworks, and go-to-market thinking — not just code.

🔗 **[Live Demo →](https://campus-atlas-demo.vercel.app/)**
📄 **[Product Strategy →](#product-strategy--pm-thinking)**
🧠 **[AI Architecture →](#ai-architecture)**
📊 **[Evaluation Framework →](#evaluation-framework)**

---

## The Problem

Universities run on 15+ disconnected systems. Students waste hours navigating registrar portals, library sites, dining apps, housing request forms, and financial aid pages — each with its own login, its own interface, and its own support queue.

**Fragmented access.** A student asking "How do I defer a course?" might need to visit the registrar site, the academic advising portal, and their department page — and still end up emailing a human.

**Overwhelmed admin teams.** University staff receive thousands of repetitive support tickets every semester. Most could be resolved instantly if the right information were surfaced at the right moment.

**No intelligence layer.** Existing campus apps don't learn, don't reason, and don't connect. A student moving from housing to dining to financial aid starts from zero every time.

---

## Target Users

| Persona | Role | Core Need | Pain |
|---|---|---|---|
| **Undergraduate Student** | Navigates university systems daily | Instant, trustworthy answers to "how do I...?" questions | Spends 20-40 min per task navigating 5+ portals |
| **Graduate Student** | Complex admin needs (visa, stipends, research) | Accurate policy answers with citations | High stakes errors from misunderstood policies |
| **University Admin Staff** | Handles student inquiries | Reduce repetitive ticket volume | ~60% of tickets are answerable from existing documents |
| **Department Head / Registrar** | Accountable for student service quality | Visibility into what students are asking | No analytics on where students get stuck |

---

## The Product Solution

CampusOS replaces the fragmented campus experience with a single AI-native command center. The core insight: **universities are not unintelligent — their intelligence is inaccessible.**

**MVP — AI Copilot**
Student asks a question in natural language. Copilot retrieves the relevant passage from official university documents, generates a grounded answer with citations, and routes to a human when confidence is low.

**Phase 2 — Student Command Center**
Unified dashboard: upcoming deadlines, pending tasks, personalized alerts across registrar, housing, dining, and library.

**Phase 3 — Services Hub**
Integrated service actions: course registration, dining plan changes, library holds, housing maintenance requests — all from a single interface.

**Phase 4 — Admin Intelligence Layer**
Analytics dashboard showing what students are asking, where the copilot escalates, and where the knowledge base has gaps.

---

## Core Product Features

### 1. AI Copilot (RAG-Based)
Students ask questions in natural language. The copilot retrieves relevant passages from official university documents, generates a grounded response, and surfaces the source so students can verify.

**PM decision:** Chose citation-first UX over conversational fluency. Students in high-stakes situations (financial aid, visa deadlines, course withdrawal) need to trust the answer, not just receive it. Showing the source passage builds trust and reduces the "but the chatbot told me" escalation problem.

### 2. Confidence-Gated Escalation
When retrieval returns low-confidence results, the copilot does not hallucinate — it says "I'm not certain about this, here's who to contact" and routes to the appropriate office.

**PM decision:** Escalation over hallucination is a non-negotiable product principle. A confident wrong answer in an educational context has real consequences for students. The system earns trust by knowing its limits.

### 3. Groundedness Evaluation
Every copilot response is scored against the source passages for factual grounding. Responses are flagged if they contain claims not supported by the retrieved context.

**PM decision:** Built evaluation into the product loop, not as an afterthought. Without groundedness scoring, there is no way to know if the model is drifting from policy.

### 4. Escalation Queue (Human-in-the-Loop)
Low-confidence queries route to a structured escalation queue visible to admin staff. Each escalation includes the student question, the retrieved context, and the confidence score — so staff can respond faster with full context.

**PM decision:** Designed the escalation interface for the admin, not just the student. If staff can see what the AI tried to do and why it gave up, their response is faster and the interaction log improves the model.

### 5. Admin Analytics Dashboard (Phase 2)
Shows query volume by topic, escalation rates by department, most-retrieved documents, and knowledge gaps. Turns the copilot into a continuous audit of where university systems are failing students.

---

## AI Architecture

```
Student Query (Natural Language)
        |
        v
Query Processing
  Intent classification + entity extraction
        |
        v
Vector Retrieval (RAG)
  Semantic search over university document embeddings
  Top-K relevant passages + confidence scores
        |
        v
Threshold Router
  High confidence  → LLM synthesis
  Low confidence   → Escalation queue
        |
        v
Response Generation
  LLM synthesizes grounded answer with citation
  Groundedness score computed
        |
        v
Human Review (HITL)
  Admin sees: question + context + confidence + escalation reason
  Decision logged → corpus improvement feedback loop
```

**Key AI product decisions:**

- **University-specific corpus over general knowledge** — LLMs know how universities generally work. CampusOS needs to know how this university works. Institution-specific RAG is the product moat.
- **Citations are a UX requirement, not a technical nicety** — In an institutional context, every answer shows its source.
- **Confidence threshold is a product policy decision** — The right threshold is a risk tolerance decision made by the university, not a hardcoded model constant.
- **Escalation logs as training data** — Every human resolution is a high-quality labeled example for improving the pipeline.

---

## Product Strategy & PM Thinking

### Problem Framing

The insight that shaped the MVP: **the problem is not that universities lack information — it is that students cannot retrieve it.** The product is not content creation; it is intelligent retrieval.

### Customer Wedge

Start with the **Registrar** as the institutional buyer. They own the most-queried information, have the clearest ticket volume problem, and feel the most pain when students get wrong answers.

### Prioritization

| Feature | Priority | Rationale |
|---|---|---|
| RAG Copilot (core) | P0 | The product without this is a website |
| Citation UI | P0 | Without citations, institutional trust fails |
| Confidence-gated escalation | P0 | Without this, hallucinations damage trust |
| Groundedness eval | P0 | Without this, we cannot know if the product is working |
| Admin escalation queue | P1 | Needed for HITL loop and staff adoption |
| Student Command Center | P2 | High value but dependent on copilot trust |
| Services Hub | P3 | Requires deep API integrations |

### Go-To-Market

**Target buyer:** VP of Student Affairs or VP of Enrollment Management.

**Pilot structure:** Single university, one department (Registrar), 90-day pilot. Success criteria defined upfront with the buyer.

**Expansion motion:** Registrar success → Housing, Financial Aid, Library. Same platform, new corpus per department.

**Pricing:** Per-institution SaaS, tiered by enrollment size. Annual contract.

---

## Evaluation Framework

### Why evaluation is a PM responsibility

In a university context, a wrong answer has real consequences — a student misses a deadline, files the wrong form, violates their visa status. The PM must own the definition of "good enough" before launch.

### Metrics

| Metric | Target | Why It Matters |
|---|---|---|
| **Groundedness Rate** | >= 90% | Responses must be traceable to source documents |
| **Escalation Precision** | >= 80% | Escalations should be genuinely ambiguous |
| **Ticket Deflection Rate** | >= 30% in 90-day pilot | Primary business outcome for institutional buyer |
| **Student Resolution Time** | < 60 seconds | vs. current avg 2+ days for email responses |
| **False Confidence Rate** | < 5% | High-confidence answers that are factually wrong |
| **Corpus Coverage** | > 85% of top-100 queries | Before launch; measure weekly after |

---

## Roadmap

| Phase | Features | Success Criteria |
|---|---|---|
| **MVP** | RAG Copilot, citation UI, escalation, groundedness eval | 90% groundedness; working pilot at 1 department |
| **Phase 2** | Student Command Center, multi-department corpus, admin analytics | 30% ticket deflection; 3+ departments live |
| **Phase 3** | Services Hub, API integrations with campus systems | Students can complete tasks, not just get answers |
| **Phase 4** | Multi-institution deployment, shared corpus tooling | 5+ institutions |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| RAG Pipeline | LangChain / LlamaIndex |
| Vector Store | Pinecone / ChromaDB |
| LLM | OpenAI GPT-4o (structured output) |
| Document Ingestion | PyPDF2, Unstructured.io |
| Eval Framework | RAGAS (groundedness, answer relevance, context precision) |
| Hosting | Vercel (frontend) + Railway (backend) |

---

## Run Locally

```bash
git clone https://github.com/devothamgn321/campus-atlas.git
cd campus-atlas
npm install
npm run dev
```

Backend (RAG pipeline):
```bash
cd backend
pip install -r requirements.txt
python ingest.py
python app.py
```

---

## About

**Devothama GN (Ruby)**
AI Product Manager | Platform Products | JHU Engineering Management
Ex-Mercedes-Benz ADAS | TEDxJHU Speaker

[Portfolio](https://devothamagn.netlify.app) · [LinkedIn](https://linkedin.com/in/devothamagn) · [GitHub](https://github.com/devothamgn321)

---

*CampusOS is an AI Product Management case study for a higher-education operating system, showing how I would define, design, evaluate, and launch an AI-native product inside a real university environment.*
