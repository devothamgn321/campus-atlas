import React, { useEffect, useState } from "react";
import { Target, Wifi, WifiOff } from "lucide-react";
import { getModules, getMetrics } from "../lib/api";

// Maturity stages map to a 4-step delivery pipeline so non-technical
// reviewers can scan progress at a glance.
const MATURITY_STAGE = {
  Roadmap: 1,
  Concept: 2,
  Prototype: 3,
  MVP: 4,
  Live: 4
};

export default function AdminDashboard() {
  const [modules, setModules] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [dataSource, setDataSource] = useState("fallback");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    Promise.all([getModules(), getMetrics()]).then(([modulesResult, metricsResult]) => {
      if (!isMounted) return;
      setModules(modulesResult.data.modules);
      setMetrics(metricsResult.data);
      setDataSource(modulesResult.source === "live" && metricsResult.source === "live" ? "live" : "fallback");
      setLoaded(true);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="admin-dashboard" className="section dashboard">
      <p className="eyebrow">Admin Intelligence Dashboard</p>
      <h2>Operational view for university administrators</h2>
      <p className="sectionText">
        Pulls module status and the metrics framework from the CampusOS API
        (<code>/api/modules</code>, <code>/api/metrics</code>), with a static fallback so this
        view still renders on a hosted build with no backend running.
      </p>

      <div className="dataSourceBadge">
        {dataSource === "live" ? <Wifi size={14} /> : <WifiOff size={14} />}
        {dataSource === "live" ? "Live data from local API" : "Demo data (API not running — using bundled fallback)"}
      </div>

      {metrics && (
        <div className="northStar">
          <Target size={20} />
          <div>
            <span className="northStarLabel">North Star Metric</span>
            <strong>{metrics.northStarMetric}</strong>
          </div>
        </div>
      )}

      <div className="dashboardGrid">
        {loaded &&
          modules.map((module) => {
            const stage = MATURITY_STAGE[module.maturity] ?? 1;
            return (
              <article className="dashboardCard" key={module.id}>
                <div className="dashboardCardHeader">
                  <h3>{module.name}</h3>
                  <span className={`maturityPill maturity-${module.maturity.toLowerCase()}`}>
                    {module.maturity}
                  </span>
                </div>
                <p className="dashboardOwner">Owner: {module.owner}</p>
                <div className="progressTrack">
                  <div className="progressFill" style={{ width: `${(stage / 4) * 100}%` }} />
                </div>
                <p className="dashboardKpi">KPI: {module.kpi}</p>
              </article>
            );
          })}
      </div>

      {metrics && (
        <div className="supportingMetrics">
          <h3>Supporting metrics tracked</h3>
          <div className="metricChips">
            {metrics.supportingMetrics.map((metric) => (
              <span className="metricChip" key={metric}>{metric}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
