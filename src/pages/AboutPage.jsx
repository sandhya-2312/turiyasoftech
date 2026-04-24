import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OurStory from "../components/OurStory";
import ContactCardSection from "../components/ContactCardSection";

const values = [
  {
    title: "Engineering Discipline",
    description:
      "We prioritize dependable architecture, clean implementation, and long-term maintainability.",
  },
  {
    title: "Business Clarity",
    description:
      "Every technical choice is aligned to measurable business outcomes and operational reality.",
  },
  {
    title: "Collaborative Delivery",
    description:
      "We work closely with client teams through transparent communication and iterative execution.",
  },
];

function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">About Turiya Softech</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Building reliable digital systems for modern enterprises.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              We partner with organizations to design, implement, and scale solutions across engineering,
              data, and intelligent automation.
            </p>
          </div>
        </section>

        <OurStory />

        <section className="bg-white px-4 pb-20 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">What guides our work</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
