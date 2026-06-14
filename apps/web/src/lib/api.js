// Lightweight API client with graceful fallback.
//
// On localhost (npm run dev for both apps), this calls the real Express API
// at http://localhost:4000. On any other host (e.g. GitHub Pages, a static
// deploy), there is no API to call, so we fall back to bundled mock data
// that mirrors the API's response shape exactly. The UI never needs to know
// which source the data came from.

const isLocalHost =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname);

export const API_BASE = isLocalHost ? "http://localhost:4000" : null;

// Mirrors apps/api/src/server.js -> modules
export const fallbackModules = [
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

// Mirrors apps/api/src/server.js -> /api/metrics
export const fallbackMetrics = {
  northStarMetric: "Weekly active students completing meaningful campus workflows",
  supportingMetrics: [
    "Manual request reduction",
    "AI self-service resolution rate",
    "Student satisfaction score",
    "Admin dashboard weekly active users",
    "Service transaction completion rate"
  ]
};

async function fetchJson(path, fallback, timeoutMs = 1500) {
  if (!API_BASE) return { data: fallback, source: "fallback" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${API_BASE}${path}`, { signal: controller.signal });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const data = await response.json();
    return { data, source: "live" };
  } catch (error) {
    return { data: fallback, source: "fallback" };
  } finally {
    clearTimeout(timer);
  }
}

export function getModules() {
  return fetchJson("/api/modules", { modules: fallbackModules });
}

export function getMetrics() {
  return fetchJson("/api/metrics", fallbackMetrics);
}
