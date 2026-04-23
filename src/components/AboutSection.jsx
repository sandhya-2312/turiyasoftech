function AboutSection() {
  const highlights = [
    { value: "10+", label: "Years of Expertise" },
    { value: "50+", label: "Projects Delivered" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:pl-6">
        <div>
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            About Turiya
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Modern enterprise technology, built for impact.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            We partner with organizations to build intelligent digital ecosystems across industrial,
            enterprise, and data-driven environments. Our focus is clear execution, scalable architecture,
            and measurable business outcomes.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.label}
                className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40"
              >
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>

          <a
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-cyan-500/25"
          >
            Learn More
          </a>
        </div>

        <div className="relative lg:pl-4">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Team discussing enterprise digital strategy"
              className="h-full min-h-[320px] w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-slate-800/5 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">Outcome Driven</p>
              <p className="mt-1 text-sm text-slate-700">Scalable systems, measurable value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
