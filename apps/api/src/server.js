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
    kpi: "AI self-service resolution rate"
  },
  {
    id: "digital-student-identity",
    name: "Digital Student Identity",
    owner: "Registrar / IT",
    maturity: "Concept",
    kpi: "Verification time saved"
  },
  {
    id: "academic-intelligence",
    name: "Academic Intelligence",
    owner: "Academic Affairs",
    maturity: "Roadmap",
    kpi: "Student progress visibility"
  },
  {
    id: "campus-services-hub",
    name: "Campus Services Hub",
    owner: "Campus Operations",
    maturity: "MVP",
    kpi: "Completed service workflows"
  }
];

app.get("/", (request, response) => {
  response.json({
    name: "CampusOS API",
    description: "Starter API for an AI-powered digital campus operating system.",
    status: "running"
  });
});

app.get("/api/modules", (request, response) => {
  response.json({ modules });
});

app.get("/api/metrics", (request, response) => {
  response.json({
    northStarMetric: "Weekly active students completing meaningful campus workflows",
    supportingMetrics: [
      "Manual request reduction",
      "AI self-service resolution rate",
      "Student satisfaction score",
      "Admin dashboard weekly active users",
      "Service transaction completion rate"
    ]
  });
});

app.listen(port, () => {
  console.log(`CampusOS API running on http://localhost:${port}`);
});
