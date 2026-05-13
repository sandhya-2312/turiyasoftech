import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Oil & Gas",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Process",
    image:
      "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Marine",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AEC",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pharma",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
  },
];

function IndustriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, industries.length - visibleCards),
    [visibleCards]
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (maxIndex === 0) return undefined;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 via-blue-50 to-cyan-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">Industry Segments We Serve</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Solving Industry&apos;s Most Pressing Challenges
        </h2>
        <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400" />

        <div className="relative mt-8">
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100 bg-white/95 text-slate-700 shadow-lg transition hover:-translate-y-1/2 hover:bg-cyan-50"
            aria-label="Previous industries"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {industries.map((industry) => (
                <article
                  key={industry.title}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <Link
                    to="/industries"
                    className="group block overflow-hidden rounded-xl border border-blue-100/70 bg-[#1f80cc] shadow-md shadow-blue-900/10 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/15"
                  >
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="bg-gradient-to-r from-lime-300 to-emerald-300 px-4 py-3">
                      <h3 className="text-2xl font-semibold text-slate-900">{industry.title}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-100 bg-white/95 text-slate-700 shadow-lg transition hover:-translate-y-1/2 hover:bg-cyan-50"
            aria-label="Next industries"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {maxIndex > 0 ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition ${
                  currentIndex === index
                    ? "w-7 bg-gradient-to-r from-blue-600 to-cyan-500"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default IndustriesSection;
