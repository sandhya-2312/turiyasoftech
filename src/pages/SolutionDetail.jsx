import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCardSection from "../components/ContactCardSection";
import { solutionsData } from "../data/solutionsData";
import { primaryButtonClass } from "../ui/buttonStyles";

const deliverySteps = [
  "Discovery workshop and systems assessment",
  "Solution blueprint and implementation roadmap",
  "Pilot rollout with KPI validation",
  "Scale-up and continuous optimization",
];

function SolutionDetail() {
  const { solutionId } = useParams();
  const solution = solutionsData.find((item) => item.id === solutionId);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-12 top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <Link to="/solutions" className="text-sm font-medium text-cyan-200 hover:text-cyan-100">
              ← Back to Solutions
            </Link>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {solution.tabLabel}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {solution.description}
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img src={solution.image} alt={solution.imageAlt} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Expected Impact</p>
              <p className="mt-3 text-lg leading-7 text-slate-800">{solution.impact}</p>
              <h2 className="mt-8 text-2xl font-semibold text-slate-900 sm:text-3xl">Delivery Approach</h2>
              <ol className="mt-4 space-y-3">
                {deliverySteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{step}</span>
                  </li>
                ))}
              </ol>
              <Link to="/contact" className={`${primaryButtonClass} mt-8 inline-flex px-5 py-2.5`}>
                Talk to Our Team
              </Link>
            </div>
          </div>
        </section>

        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default SolutionDetail;
