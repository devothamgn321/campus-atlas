import React from "react";
import { createRoot } from "react-dom/client";
import { Brain, BadgeCheck, GraduationCap, LayoutDashboard, Library, Utensils, ShieldCheck, TrendingUp } from "lucide-react";
import CopilotDemo from "./components/CopilotDemo.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import "./styles.css";

const modules = [
  {
    icon: Brain,
    title: "AI Campus Copilot",
    description: "A student-facing assistant for campus services, academic planning, FAQs, and personalized guidance.",
    status: "AI Layer",
    href: "#copilot"
  },
  {
    icon: BadgeCheck,
    title: "Digital Student Identity",
    description: "Unified student profile, digital ID concept, and verifiable credential roadmap.",
    status: "Identity Layer"
  },
  {
    icon: GraduationCap,
    title: "Academic Intelligence",
    description: "Academic records, student progress visibility, degree planning, and future risk analytics.",
    status: "Analytics Layer"
  },
  {
    icon: Library,
    title: "Library Services",
    description: "Modernized discovery and service workflow layer for university libraries.",
    status: "Campus Services"
  },
  {
    icon: Utensils,
    title: "Campus Commerce",
    description: "Dining, canteen, events, printing, and future payment-enabled service marketplace.",
    status: "Commerce Layer"
  },
  {
    icon: LayoutDashboard,
    title: "Admin Intelligence Dashboard",
    description: "Operational metrics, student engagement visibility, and decision-support dashboards.",
    status: "Admin Layer",
    href: "#admin-dashboard"
  }
];

const metrics = [
  { label: "Manual workflow reduction", value: "35%" },
  { label: "AI self-service target", value: "60%" },
  { label: "Core service modules", value: "6" },
  { label: "North Star", value: "WAU" }
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <div className="brand">
            <ShieldCheck size={28} />
            <span>CampusOS</span>
          </div>
          <div className="navLinks">
            <a href="#copilot">AI Copilot Demo</a>
            <a href="#admin-dashboard">Admin Dashboard</a>
            <a href="#modules">Explore Platform</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">AI-Powered Digital Campus Operating System</p>
            <h1>One intelligent platform for modern university operations.</h1>
            <p className="heroText">
              CampusOS evolves a final-year smart campus project into a global-ready product platform
              combining digital identity, academic intelligence, campus services, AI assistance, and
              admin analytics for higher education institutions.
            </p>
            <div className="actions">
              <a href="#copilot" className="primary">Try the AI Copilot Demo</a>
              <a href="#strategy" className="secondary">Read Product Strategy</a>
            </div>
          </div>

          <div className="productCard">
            <div className="cardHeader">
              <TrendingUp size={22} />
              <span>Product Snapshot</span>
            </div>
            <h2>From student portal to campus operating layer</h2>
            <p>
              Designed for students, faculty, administrators, and university operations teams.
            </p>
            <div className="metricGrid">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className="section">
        <p className="eyebrow">Product Strategy</p>
        <h2>Why CampusOS matters</h2>
        <p className="sectionText">
          Universities are fragmented across learning systems, student portals, ID cards, dining tools,
          library systems, career platforms, and manual administrative processes. CampusOS creates a
          unified experience layer and an intelligence layer on top of these workflows.
        </p>
      </section>

      <section id="modules" className="modules">
        {modules.map((item) => {
          const Icon = item.icon;
          const Wrapper = item.href ? "a" : "article";
          return (
            <Wrapper className="moduleCard" key={item.title} href={item.href}>
              <div className="iconWrap"><Icon size={26} /></div>
              <span className="pill">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href && <span className="moduleLink">Try it live →</span>}
            </Wrapper>
          );
        })}
      </section>

      <CopilotDemo />

      <AdminDashboard />

      <section className="section roadmap">
        <p className="eyebrow">Roadmap</p>
        <h2>CampusOS 2.0 roadmap</h2>
        <div className="timeline">
          <div><strong>Phase 1</strong><span>Product refresh, modern UI, product docs, modular architecture</span></div>
          <div><strong>Phase 2</strong><span>AI copilot prototype, admin dashboard, digital identity workflows</span></div>
          <div><strong>Phase 3</strong><span>Integrations with LMS, career services, payments, and analytics</span></div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
