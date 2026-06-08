import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpenCheck,
  Brain,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardList,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  Library,
  MessageSquareText,
  MonitorCheck,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Utensils,
  WalletCards
} from "lucide-react";
import "./styles.css";

const API_URL = "http://localhost:4000/api/overview";

const iconMap = {
  "ai-campus-copilot": Brain,
  "digital-student-identity": BadgeCheck,
  "academic-intelligence": GraduationCap,
  "campus-services-hub": Library,
  "admin-intelligence": LayoutDashboard,
  "career-research-hub": BriefcaseBusiness
};

const fallbackOverview = {
  modules: [
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
  ],
  metrics: {
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
    ]
  },
  services: [
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
  ],
  studentProfile: {
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
  },
  copilot: {
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
  },
  roadmap: [
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
  ]
};

const navItems = [
  { id: "command", label: "Command", icon: MonitorCheck },
  { id: "student", label: "Student", icon: GraduationCap },
  { id: "services", label: "Services", icon: Building2 },
  { id: "admin", label: "Admin", icon: BarChart3 },
  { id: "roadmap", label: "Roadmap", icon: ClipboardList }
];

const quickActions = [
  { label: "Verify credential", icon: BadgeCheck, tone: "mint" },
  { label: "Ask Copilot", icon: MessageSquareText, tone: "blue" },
  { label: "Pay campus dues", icon: CreditCard, tone: "gold" },
  { label: "Open service desk", icon: CircleHelp, tone: "coral" }
];

const serviceIcons = {
  Library,
  Dining: Utensils,
  Registrar: WalletCards,
  Transport: Building2
};

function useOverview() {
  const [overview, setOverview] = useState(fallbackOverview);
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    let cancelled = false;

    async function loadOverview() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();

        if (!cancelled) {
          setOverview(data);
          setApiStatus("connected");
        }
      } catch (error) {
        if (!cancelled) {
          setOverview(fallbackOverview);
          setApiStatus("offline");
        }
      }
    }

    loadOverview();

    return () => {
      cancelled = true;
    };
  }, []);

  return { overview, apiStatus };
}

function App() {
  const { overview, apiStatus } = useOverview();
  const [activeView, setActiveView] = useState("command");
  const [query, setQuery] = useState("");

  const filteredModules = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return overview.modules;
    }

    return overview.modules.filter((module) =>
      [module.name, module.owner, module.maturity, module.kpi]
        .join(" ")
        .toLowerCase()
        .includes(search)
    );
  }, [overview.modules, query]);

  return (
    <main className="appShell">
      <aside className="sidebar" aria-label="CampusOS navigation">
        <div className="brandLockup">
          <div className="brandMark">
            <ShieldCheck size={24} />
          </div>
          <div>
            <strong>CampusOS</strong>
            <span>Campus operating layer</span>
          </div>
        </div>

        <nav className="navStack">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activeView === item.id ? "navItem active" : "navItem"}
                key={item.id}
                onClick={() => setActiveView(item.id)}
                type="button"
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebarFooter">
          <span className={`statusDot ${apiStatus}`} />
          <div>
            <strong>{apiStatus === "connected" ? "API connected" : "Demo data active"}</strong>
            <span>localhost:4000</span>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="searchBox">
            <Search size={18} />
            <input
              aria-label="Search modules"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search modules, owners, KPIs"
              value={query}
            />
          </div>

          <div className="topbarActions">
            <button className="iconButton" title="Refresh data" type="button">
              <RefreshCw size={18} />
            </button>
            <button className="iconButton" title="Notifications" type="button">
              <Bell size={18} />
            </button>
            <div className="profileChip">
              <span>AR</span>
              <div>
                <strong>{overview.studentProfile.name}</strong>
                <small>{overview.studentProfile.program}</small>
              </div>
            </div>
          </div>
        </header>

        <section className="heroPanel" id="command">
          <div className="heroCopy">
            <div className="eyebrow">
              <Sparkles size={16} />
              AI-powered smart campus OS
            </div>
            <h1>Run student identity, academics, services, and campus intelligence in one place.</h1>
            <p>
              CampusOS converts a final-year smart campus idea into a product-grade operating system
              for universities, with student workflows, service operations, admin analytics, and a
              future-ready AI copilot layer.
            </p>
            <div className="heroActions">
              <button onClick={() => setActiveView("student")} type="button">
                Open Student Command Center
                <ChevronRight size={17} />
              </button>
              <button className="secondaryAction" onClick={() => setActiveView("admin")} type="button">
                View Admin Intelligence
              </button>
            </div>
          </div>

          <div className="campusMap" aria-label="CampusOS workflow map">
            <div className="mapHeader">
              <span>Live Workflow Map</span>
              <strong>CampusOS 2.0</strong>
            </div>
            <div className="mapGrid">
              <span className="mapNode identity">Identity</span>
              <span className="mapNode academics">Academics</span>
              <span className="mapNode services">Services</span>
              <span className="mapNode ai">Copilot</span>
              <span className="mapNode admin">Admin</span>
            </div>
          </div>
        </section>

        <section className="scoreGrid" aria-label="CampusOS scorecards">
          {overview.metrics.scorecards.map((metric) => (
            <article className="scoreCard" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.trend} vs last month</small>
            </article>
          ))}
        </section>

        <section className={activeView === "command" ? "viewSection" : "viewSection mutedSection"}>
          <SectionHeader
            eyebrow="Platform Modules"
            title="Six connected product layers"
            copy="Each module has a clear owner, KPI, maturity state, and next build milestone."
          />
          <div className="moduleGrid">
            {filteredModules.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </section>

        <section className={activeView === "student" ? "viewSection highlighted" : "viewSection"} id="student">
          <SectionHeader
            eyebrow="Student Command Center"
            title="Identity, progress, tasks, and credentials"
            copy="A single student workspace for academic visibility and everyday campus actions."
          />
          <div className="studentGrid">
            <StudentProfile profile={overview.studentProfile} />
            <CopilotPanel copilot={overview.copilot} />
          </div>
        </section>

        <section className={activeView === "services" ? "viewSection highlighted" : "viewSection"} id="services">
          <SectionHeader
            eyebrow="Campus Services Hub"
            title="Operational workflows students can complete"
            copy="Library, dining, registrar, transport, and service desk flows are modeled as measurable product workflows."
          />
          <div className="quickActions">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button className={`actionTile ${action.tone}`} key={action.label} type="button">
                  <Icon size={20} />
                  <span>{action.label}</span>
                </button>
              );
            })}
          </div>
          <div className="serviceTable">
            {overview.services.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className={activeView === "admin" ? "viewSection highlighted" : "viewSection"} id="admin">
          <SectionHeader
            eyebrow="Admin Intelligence"
            title="Adoption and workflow health"
            copy={overview.metrics.northStarMetric}
          />
          <div className="analyticsGrid">
            <div className="analyticsPanel">
              <div className="panelLabel">
                <BarChart3 size={18} />
                Module adoption
              </div>
              <div className="barStack">
                {overview.metrics.adoption.map((item) => (
                  <div className="barRow" key={item.segment}>
                    <span>{item.segment}</span>
                    <div className="barTrack">
                      <div style={{ width: `${item.completionRate}%` }} />
                    </div>
                    <strong>{item.completionRate}%</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="analyticsPanel">
              <div className="panelLabel">
                <BookOpenCheck size={18} />
                Leadership readout
              </div>
              <ul className="insightList">
                <li>Identity and services are ready for MVP workflow demos.</li>
                <li>Copilot resolution is strong enough for a RAG prototype milestone.</li>
                <li>Career matching is the clearest Phase 3 portfolio extension.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={activeView === "roadmap" ? "viewSection highlighted" : "viewSection"} id="roadmap">
          <SectionHeader
            eyebrow="Execution Roadmap"
            title="From portfolio prototype to scalable platform"
            copy="The roadmap links product strategy, engineering milestones, and future integrations."
          />
          <div className="roadmapGrid">
            {overview.roadmap.map((item) => (
              <article className="roadmapCard" key={item.phase}>
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <strong>{item.status}</strong>
                <ul>
                  {item.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="sectionHeader">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function ModuleCard({ module }) {
  const Icon = iconMap[module.id] || LayoutDashboard;

  return (
    <article className="moduleCard">
      <div className="moduleTopline">
        <div className="moduleIcon">
          <Icon size={23} />
        </div>
        <span>{module.maturity}</span>
      </div>
      <h3>{module.name}</h3>
      <p>{module.summary}</p>
      <div className="healthRow">
        <span>Health</span>
        <div className="healthTrack">
          <div style={{ width: `${module.health}%` }} />
        </div>
        <strong>{module.health}</strong>
      </div>
      <dl>
        <div>
          <dt>Owner</dt>
          <dd>{module.owner}</dd>
        </div>
        <div>
          <dt>KPI</dt>
          <dd>{module.kpi}</dd>
        </div>
      </dl>
      <small>{module.nextMilestone}</small>
    </article>
  );
}

function StudentProfile({ profile }) {
  const creditProgress = Math.round((profile.creditsCompleted / profile.creditsRequired) * 100);

  return (
    <article className="studentPanel">
      <div className="studentIdentity">
        <div className="studentAvatar">AR</div>
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.id}</p>
        </div>
      </div>

      <div className="academicStats">
        <Stat label="Program" value={profile.program} />
        <Stat label="Semester" value={profile.semester} />
        <Stat label="GPA" value={profile.gpa} />
        <Stat label="Attendance" value={`${profile.attendance}%`} />
      </div>

      <div className="progressBlock">
        <div>
          <span>Degree progress</span>
          <strong>{creditProgress}%</strong>
        </div>
        <div className="progressTrack">
          <div style={{ width: `${creditProgress}%` }} />
        </div>
        <small>
          {profile.creditsCompleted} of {profile.creditsRequired} credits completed
        </small>
      </div>

      <div className="taskList">
        <h4>Priority tasks</h4>
        {profile.pendingTasks.map((task) => (
          <div className="taskItem" key={task}>
            <CheckCircle2 size={17} />
            <span>{task}</span>
          </div>
        ))}
      </div>

      <div className="credentialList">
        <h4>Verified credentials</h4>
        {profile.credentials.map((credential) => (
          <div className="credentialItem" key={credential.name}>
            <BadgeCheck size={17} />
            <div>
              <strong>{credential.name}</strong>
              <span>
                {credential.status} by {credential.issuer}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function CopilotPanel({ copilot }) {
  return (
    <article className="copilotPanel">
      <div className="panelLabel">
        <Brain size={18} />
        Campus Copilot
      </div>
      <div className="copilotStatus">
        <strong>{copilot.resolutionRate}%</strong>
        <span>self-service resolution target</span>
      </div>
      <div className="chatThread">
        {copilot.sampleThread.map((message) => (
          <div className={`chatBubble ${message.role}`} key={`${message.role}-${message.message}`}>
            {message.message}
          </div>
        ))}
      </div>
      <div className="promptGrid">
        {copilot.suggestedPrompts.map((prompt) => (
          <button key={prompt} type="button">
            {prompt}
          </button>
        ))}
      </div>
    </article>
  );
}

function ServiceRow({ service }) {
  const Icon = serviceIcons[service.category] || Building2;

  return (
    <article className="serviceRow">
      <div className="serviceMain">
        <div className="serviceIcon">
          <Icon size={19} />
        </div>
        <div>
          <h3>{service.title}</h3>
          <span>
            {service.category} - {service.owner}
          </span>
        </div>
      </div>
      <div className="serviceMeta">
        <span className={service.status === "Live" ? "livePill" : "betaPill"}>{service.status}</span>
        <strong>{service.eta}</strong>
        <small>{service.volume.toLocaleString()} monthly uses</small>
      </div>
    </article>
  );
}

function Stat({ label, value }) {
  return (
    <div className="statBox">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
