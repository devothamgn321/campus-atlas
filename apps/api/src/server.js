import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const modules = [
  {
    id: "ai-campus-copilot",
    name: "AI Campus Copilot",
    owner: "Student Experience",
    maturity: "Prototype",
    health: 86,
    kpi: "AI self-service resolution rate",
    summary: "Answers campus FAQs, recommends services, and routes complex requests.",
    nextMilestone: "Connect searchable knowledge base and ticket handoff."
  },
  {
    id: "digital-student-identity",
    name: "Digital Student Identity",
    owner: "Registrar / IT",
    maturity: "MVP",
    health: 78,
    kpi: "Verification time saved",
    summary: "Unifies profile, campus ID, academic status, and verifiable credentials.",
    nextMilestone: "Add QR credential verification flow."
  },
  {
    id: "academic-intelligence",
    name: "Academic Intelligence",
    owner: "Academic Affairs",
    maturity: "MVP",
    health: 82,
    kpi: "Students with clear progress visibility",
    summary: "Tracks semester progress, credits, attendance, and risk signals.",
    nextMilestone: "Launch advisor alerts and degree plan suggestions."
  },
  {
    id: "campus-services-hub",
    name: "Campus Services Hub",
    owner: "Campus Operations",
    maturity: "MVP",
    health: 91,
    kpi: "Completed service workflows",
    summary: "Coordinates library, dining, transport, housing, printing, and help desk requests.",
    nextMilestone: "Add service marketplace checkout."
  },
  {
    id: "admin-intelligence",
    name: "Admin Intelligence",
    owner: "University Leadership",
    maturity: "Prototype",
    health: 74,
    kpi: "Weekly dashboard-active admins",
    summary: "Shows adoption, workflow load, response quality, and student engagement.",
    nextMilestone: "Add department benchmarking and exportable reports."
  },
  {
    id: "career-research-hub",
    name: "Career & Research Hub",
    owner: "Career Services",
    maturity: "Roadmap",
    health: 62,
    kpi: "Matched opportunities accepted",
    summary: "Matches students with internships, research projects, events, and mentors.",
    nextMilestone: "Prototype opportunity recommendation rules."
  }
];

const metrics = {
  northStarMetric: "Weekly active students completing meaningful campus workflows",
  scorecards: [
    { label: "Weekly active students", value: "18.4K", trend: "+12.8%", tone: "positive" },
    { label: "Workflow completion", value: "71%", trend: "+9.4%", tone: "positive" },
    { label: "Manual tickets avoided", value: "4.8K", trend: "+22%", tone: "positive" },
    { label: "Average resolution time", value: "2.6h", trend: "-31%", tone: "positive" }
  ],
  adoption: [
    { segment: "Identity", activeUsers: 18400, completionRate: 92 },
    { segment: "Academics", activeUsers: 13950, completionRate: 76 },
    { segment: "Services", activeUsers: 11780, completionRate: 81 },
    { segment: "Copilot", activeUsers: 9340, completionRate: 68 },
    { segment: "Career", activeUsers: 5210, completionRate: 54 }
  ],
  supportingMetrics: [
    "Manual request reduction",
    "AI self-service resolution rate",
    "Student satisfaction score",
    "Admin dashboard weekly active users",
    "Service transaction completion rate"
  ]
};

const services = [
  {
    id: "library-renewal",
    title: "Renew Library Book",
    category: "Library",
    status: "Live",
    owner: "Central Library",
    eta: "Instant",
    volume: 1280
  },
  {
    id: "canteen-order",
    title: "Pre-order Canteen Meal",
    category: "Dining",
    status: "Live",
    owner: "Campus Dining",
    eta: "15 min",
    volume: 2310
  },
  {
    id: "document-request",
    title: "Request Bonafide Certificate",
    category: "Registrar",
    status: "Live",
    owner: "Academic Office",
    eta: "4 hours",
    volume: 860
  },
  {
    id: "transport-pass",
    title: "Apply Transport Pass",
    category: "Transport",
    status: "Beta",
    owner: "Transport Desk",
    eta: "1 day",
    volume: 420
  }
];

const studentProfile = {
  id: "COS-2026-1042",
  name: "Aarav Raman",
  program: "B.Tech Computer Science",
  semester: "Semester 7",
  standing: "Good Standing",
  creditsCompleted: 136,
  creditsRequired: 160,
  attendance: 91,
  gpa: 8.7,
  pendingTasks: [
    "Verify internship offer letter",
    "Submit final-year project milestone 2",
    "Renew library book before Friday"
  ],
  credentials: [
    { name: "Digital Student ID", status: "Verified", issuer: "CampusOS Identity" },
    { name: "Semester Grade Report", status: "Issued", issuer: "Registrar" },
    { name: "Bonafide Certificate", status: "Ready", issuer: "Academic Office" }
  ]
};

const copilot = {
  status: "online",
  resolutionRate: 68,
  suggestedPrompts: [
    "Show my pending academic tasks",
    "Find library books due this week",
    "How do I request a bonafide certificate?",
    "Recommend internships matching my profile"
  ],
  sampleThread: [
    {
      role: "student",
      message: "Can I renew my library book and request my grade report?"
    },
    {
      role: "assistant",
      message:
        "Yes. Your library renewal can complete instantly. Your latest semester grade report is already issued and available under verified credentials."
    }
  ]
};

const roadmap = [
  {
    phase: "Phase 1",
    title: "Unified Campus Prototype",
    status: "Complete",
    outcomes: ["Modern web experience", "Mock API", "Product docs", "Portfolio story"]
  },
  {
    phase: "Phase 2",
    title: "Operational MVP",
    status: "In Progress",
    outcomes: ["Role-based dashboards", "Workflow forms", "Admin analytics", "Credential verifier"]
  },
  {
    phase: "Phase 3",
    title: "AI and Integrations",
    status: "Next",
    outcomes: ["RAG copilot", "LMS integrations", "Payments", "SSO"]
  }
];

app.get("/", (request, response) => {
  response.json({
    name: "CampusOS API",
    description: "Mock platform API for an AI-powered digital campus operating system.",
    status: "running",
    version: "2.0.0"
  });
});

app.get("/api/overview", (request, response) => {
  response.json({
    modules,
    metrics,
    services,
    studentProfile,
    copilot,
    roadmap
  });
});

app.get("/api/modules", (request, response) => {
  response.json({ modules });
});

app.get("/api/metrics", (request, response) => {
  response.json(metrics);
});

app.get("/api/services", (request, response) => {
  response.json({ services });
});

app.get("/api/student-profile", (request, response) => {
  response.json({ studentProfile });
});

app.get("/api/copilot", (request, response) => {
  response.json(copilot);
});

app.get("/api/roadmap", (request, response) => {
  response.json({ roadmap });
});

app.listen(port, () => {
  console.log(`CampusOS API running on http://localhost:${port}`);
});
