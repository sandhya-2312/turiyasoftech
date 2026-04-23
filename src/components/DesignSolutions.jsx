import { useMemo, useState } from "react";

const SOLUTIONS_DATA = [
  {
    id: "frontend-engineering",
    tabLabel: "ERP",
    title: "Unified ERP platforms for finance, operations, and supply chain visibility",
    description:
      "Streamline cross-functional workflows with ERP implementation, module customization, and process automation tailored to enterprise-scale operations.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Analytics dashboard representing ERP operations management",
    impact: "Centralized business data improves decision speed and operational control.",
  },
  {
    id: "basic-engineering",
    tabLabel: "Enterprise Application Integrations",
    title: "Secure integrations across enterprise apps, APIs, and core platforms",
    description:
      "Connect CRM, ERP, HRMS, and legacy systems into one reliable digital ecosystem with resilient API architecture and event-driven integration flows.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Connected digital network visualization for enterprise integrations",
    impact: "Connected systems remove silos and improve end-to-end process continuity.",
  },
  {
    id: "detailed-engineering",
    tabLabel: "Data Engineering & Bussiness Intelligence",
    title: "Scalable data pipelines and BI dashboards for measurable business insights",
    description:
      "Build modern data platforms that transform raw enterprise data into trusted, actionable insights through warehousing, modeling, and visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Business intelligence dashboard with data visualization charts",
    impact: "Reliable analytics empower faster decisions and predictable growth outcomes.",
  },
  {
    id: "procurement-support",
    tabLabel: "Agentic AI",
    title: "Agentic AI solutions that automate decisions and intelligent workflows",
    description:
      "Deploy AI agents that reason, plan, and execute business tasks with human oversight across support, operations, and enterprise knowledge systems.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Futuristic AI interface representing intelligent autonomous agents",
    impact: "AI-driven automation reduces manual effort and boosts service responsiveness.",
  },
  {
    id: "project-controls",
    tabLabel: "Internet of Things",
    title: "IoT ecosystems for real-time monitoring, control, and predictive actions",
    description:
      "Design sensor-connected solutions for plants, assets, and facilities to capture real-time telemetry and drive predictive maintenance strategies.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Connected circuit board symbolizing IoT and edge devices",
    impact: "Live device intelligence improves uptime, safety, and operational efficiency.",
  },
  {
    id: "commissioning-support",
    tabLabel: "Digital Twins",
    title: "Digital twins for simulation, optimization, and performance forecasting",
    description:
      "Create virtual replicas of assets and processes to simulate scenarios, optimize operations, and reduce risk before real-world deployment.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "3D digital model visualization representing digital twin technology",
    impact: "Simulation-led planning minimizes downtime and improves lifecycle performance.",
  },
];

function DesignSolutions() {
  const [activeTab, setActiveTab] = useState(SOLUTIONS_DATA[0].id);
  const isAgenticAiTab = activeTab === "procurement-support";

  const activeSolution = useMemo(
    () => SOLUTIONS_DATA.find((item) => item.id === activeTab) ?? SOLUTIONS_DATA[0],
    [activeTab],
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-200/55 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_40%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Our Engineering Expertise
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">Solutions</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover our core solution pillars designed to modernize operations, improve decision-making,
            and deliver scalable business outcomes through technology.
          </p>
        </div>

        <div className="mt-10 border-b border-slate-200/80">
          <div className="grid grid-cols-6 gap-1 pb-2">
            {SOLUTIONS_DATA.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`group relative min-w-0 rounded-t-lg px-2 py-2 text-[11px] leading-snug transition-all duration-300 sm:px-2.5 sm:text-xs lg:text-sm ${
                    isActive
                      ? "bg-blue-50/70 font-semibold text-blue-700"
                      : "font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                  title={item.tabLabel}
                >
                  <span className="block truncate">{item.tabLabel}</span>
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activeSolution.id}
          className="mt-7 grid h-[300px] gap-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 transition-all duration-500 ease-out animate-in fade-in md:h-[440px] md:grid-cols-12"
        >
          <div className="relative z-10 bg-sky-100 p-5 sm:p-6 md:col-span-4 md:h-full md:p-7">
            <div className="absolute -top-12 -right-10 h-32 w-32 rounded-full bg-sky-200/80 blur-xl" />
            <div className="absolute bottom-0 right-0 hidden h-24 w-24 bg-white [clip-path:polygon(100%_0,0_100%,100%_100%)] md:block" />

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700/90">Key Solution</p>
            <p className="mt-3 text-base leading-6 text-slate-700 sm:text-lg">
              {activeSolution.description}
            </p>
            <p className="mt-4 text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
              {activeSolution.title}
            </p>
            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-slate-800/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 transition-all duration-300 hover:translate-x-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              Explore Now
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="group relative h-[300px] md:col-span-8 md:h-full">
            <img
              src={activeSolution.image}
              alt={activeSolution.imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 ${
                isAgenticAiTab
                  ? "bg-gradient-to-t from-indigo-950/70 via-indigo-900/30 to-transparent"
                  : "bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"
              }`}
            />
            <div
              className={`absolute left-4 right-4 z-20 rounded-xl border px-3 py-2 backdrop-blur-md sm:left-6 sm:right-auto ${
                isAgenticAiTab
                  ? "bottom-10 border-cyan-200/50 bg-indigo-950/65 shadow-xl shadow-indigo-900/50 sm:bottom-12 sm:max-w-md sm:px-4 sm:py-3"
                  : "bottom-14 border-white/35 bg-white/10 sm:bottom-16 sm:max-w-sm"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                  isAgenticAiTab ? "text-cyan-200" : "text-cyan-100"
                }`}
              >
                Engineering Impact
              </p>
              <p className={`mt-1 ${isAgenticAiTab ? "text-sm text-slate-100" : "text-xs text-slate-100 sm:text-sm"}`}>
                {activeSolution.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignSolutions;
