import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "../data/solutionsData";

function DesignSolutions() {
  const [activeTab, setActiveTab] = useState(solutionsData[0].id);
  const isAgenticAiTab = activeTab === "agentic-ai";

  const activeSolution = useMemo(
    () => solutionsData.find((item) => item.id === activeTab) ?? solutionsData[0],
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
            {solutionsData.map((item) => {
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
          className="mt-7 grid gap-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-900/10 transition-all duration-500 ease-out animate-in fade-in md:h-[440px] md:grid-cols-12"
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
            <Link
              to={`/solutions/${activeSolution.id}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-slate-800/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800 transition-all duration-300 hover:translate-x-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white sm:mt-7"
            >
              Explore Now
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="group relative h-52 sm:h-64 md:col-span-8 md:h-full">
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
