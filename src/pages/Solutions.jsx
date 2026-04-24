import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCardSection from "../components/ContactCardSection";
import { solutionsData } from "../data/solutionsData";
import { primaryButtonClass } from "../ui/buttonStyles";

function Solutions() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-12 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-8 top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Our Solutions</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Enterprise solutions designed for measurable outcomes.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Choose a solution track to explore implementation priorities, expected impact, and
              delivery guidance aligned to your business goals.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionsData.map((solution) => (
              <article
                key={solution.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {solution.tabLabel}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{solution.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
                  <Link
                    to={`/solutions/${solution.id}`}
                    className={`${primaryButtonClass} mt-5 inline-flex w-full justify-center px-4 py-2.5`}
                  >
                    View Solution
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default Solutions;
