import { useState } from "react";

const timelineData = [
  {
    years: "2017 - 2019",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Established our core technology consulting practice for enterprise clients.",
      "Delivered foundational web and cloud projects across multiple industries.",
      "Built a multidisciplinary team focused on scalable engineering outcomes.",
    ],
  },
  {
    years: "2022 - 2023",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Expanded into data and automation programs for operations-heavy organizations.",
      "Standardized delivery frameworks to improve speed and quality consistency.",
      "Strengthened long-term partnerships through measurable business impact.",
    ],
  },
  {
    years: "2023 - 2024",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Launched advanced AI integration services for modern enterprise workflows.",
      "Scaled architecture and platform teams to support larger transformation programs.",
      "Introduced governance-first implementation patterns for secure growth.",
    ],
  },
  {
    years: "2025 - Present",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    points: [
      "Driving end-to-end digital transformation with AI, cloud, and analytics.",
      "Supporting global clients with resilient, future-ready technology platforms.",
      "Continuing to invest in innovation, quality, and enterprise trust.",
    ],
  },
];

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
    </svg>
  );
}

function OurStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineData[activeIndex];
  const progressPercent = (activeIndex / (timelineData.length - 1)) * 100;

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Our Story
        </h2>

        <div className="relative mx-auto mt-12 max-w-5xl">
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200 bg-white text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-700"
            aria-label="Previous timeline item"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200 bg-white text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-300/10 hover:text-cyan-700"
            aria-label="Next timeline item"
          >
            <ArrowRightIcon />
          </button>

          <div
            key={activeItem.years}
            className="grid items-center gap-6 rounded-3xl border border-cyan-200/60 bg-slate-50 p-5 shadow-xl shadow-slate-200/70 transition-all duration-500 ease-out md:grid-cols-2 md:p-6 lg:gap-8"
          >
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-black/40">
              <img
                src={activeItem.image}
                alt={`Turiya milestone ${activeItem.years}`}
                className="h-56 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03] md:h-[300px]"
                loading="lazy"
              />
            </div>

            <div className="max-w-md transition-opacity duration-500 ease-out">
              <p className="text-3xl font-semibold text-cyan-300 sm:text-4xl">{activeItem.years}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                {activeItem.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto pb-2">
          <div className="min-w-[720px]">
            <div className="relative h-10">
              <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-slate-200" />
              <div
                className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-cyan-300 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />

              <div className="relative flex items-center justify-between">
                {timelineData.map((item, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index <= activeIndex;

                  return (
                    <button
                      key={item.years}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="group flex w-1/4 flex-col items-center gap-3 text-center"
                    >
                      <span
                        className={`h-4 w-4 rounded-full border-2 transition ${
                          isActive
                            ? "scale-110 border-cyan-200 bg-cyan-300 shadow-[0_0_0_6px_rgba(103,232,249,0.18)]"
                            : isPassed
                              ? "border-cyan-400 bg-cyan-400"
                              : "border-slate-300 bg-white"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium tracking-wide transition sm:text-sm ${
                          isActive ? "text-cyan-700" : "text-slate-500 group-hover:text-slate-900"
                        }`}
                      >
                        {item.years}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
