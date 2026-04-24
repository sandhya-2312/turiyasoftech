import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCardSection from "../components/ContactCardSection";

const industries = [
  {
    title: "Oil & Gas",
    description:
      "Digitize field and plant workflows with integrated visibility across upstream, midstream, and downstream operations.",
    capabilities: ["Digital Twins", "IoT Monitoring", "Predictive Maintenance"],
    gradient: "from-amber-500 to-orange-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M12 3C9.2 6 7.5 8.4 7.5 11a4.5 4.5 0 109 0C16.5 8.4 14.8 6 12 3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 14.5v4.5M9.5 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    description:
      "Improve throughput, quality, and traceability by connecting machines, data systems, and planning workflows.",
    capabilities: ["Factory Analytics", "ERP Integration", "Process Automation"],
    gradient: "from-sky-500 to-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M3 20h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M4 20V9l4 2.5V9l4 2.5V6l4 2.5V20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Process Industries",
    description:
      "Build resilient process control and reporting layers to reduce downtime and improve operational consistency.",
    capabilities: ["Data Engineering", "Operations Dashboards", "Anomaly Detection"],
    gradient: "from-violet-500 to-indigo-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="4" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="9" y="14" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 7h4M17 10v4M7 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Marine",
    description:
      "Enable vessel and fleet intelligence with connected systems for compliance, maintenance, and route optimization.",
    capabilities: ["Fleet Visibility", "Remote Diagnostics", "Asset Lifecycle Tracking"],
    gradient: "from-teal-500 to-emerald-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M3 15h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M6 15l2.5-6h7L18 15M9 9V6h4v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 18c1 .9 2 .9 3 0 .9-.9 2-.9 3 0 1 .9 2 .9 3 0 .9-.9 2-.9 3 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AEC",
    description:
      "Support architecture, engineering, and construction teams with collaborative platforms and smart project insights.",
    capabilities: ["Project Intelligence", "Digital Collaboration", "Cost Controls"],
    gradient: "from-fuchsia-500 to-rose-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M4 20h16M6 20V8l6-4 6 4v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 13h4M12 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Pharma",
    description:
      "Accelerate regulated manufacturing and quality operations with secure, validated, and scalable digital systems.",
    capabilities: ["Compliance Workflows", "Quality Analytics", "Batch Traceability"],
    gradient: "from-lime-500 to-green-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path
          d="M9 4h6M10 4v6.5a4.5 4.5 0 11-2.5 4M14 4v6.5a4.5 4.5 0 102.5 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 15.5h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const engagementModel = [
  "Discovery and current-state assessment",
  "Architecture and implementation roadmap",
  "Iterative delivery with measurable milestones",
  "Long-term optimization and support",
];

function Industries() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-12 top-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Industries We Serve</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Purpose-built solutions for complex, asset-intensive businesses.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Turiya Softech combines engineering depth, domain understanding, and modern technology to
              deliver practical digital outcomes across critical sectors.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="industry-card-enter rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    {industry.icon}
                  </div>
                  <div className={`mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                  <h2 className="mt-5 text-2xl font-semibold text-slate-900">{industry.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{industry.description}</p>
                  <ul className="mt-5 space-y-2">
                    {industry.capabilities.map((capability) => (
                      <li key={capability} className="text-sm text-slate-700">
                        <span className="mr-2 text-cyan-600">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">How We Deliver</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Execution model focused on measurable impact.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every engagement is tailored to your operational maturity and business priorities, with a
                clear path from concept to adoption.
              </p>
            </div>
            <div className="industry-panel-enter rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <ol className="space-y-4">
                {engagementModel.map((step, index) => (
                  <li
                    key={step}
                    className="industry-list-item-enter flex items-start gap-3"
                    style={{ animationDelay: `${220 + index * 80}ms` }}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default Industries;
