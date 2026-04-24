import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCardSection from "../components/ContactCardSection";
import bidguru from "../assets/bidguru.png";
import isapp from "../assets/isapp.png";
import unibim from "../assets/unibim.png";
import { primaryButtonClass } from "../ui/buttonStyles";

const products = [
  {
    name: "Bid Guru",
    tag: "AI Procurement Platform",
    description:
      "AI-based tender and procurement workflow enhancement tool for tender drafting and bid evaluation.",
    content:
      "Bid Guru accelerates response time, improves accuracy, and increases win probability by analyzing requirements, generating compliant drafts, and scoring vendor submissions.",
    points: [
      "Covers pre-RFP and post-RFP processes",
      "Supports PO issue, delivery acceptance, and invoice payments",
      "One-stop end-to-end bid evaluation and procurement",
    ],
    gradient: "from-cyan-500 to-blue-500",
    image: bidguru,
  },
  {
    name: "ISAPP",
    tag: "Industrial Safety AI Platform",
    description:
      "An AI-based industrial safety and preventive planning platform for process industries.",
    content:
      "Integrated with an IoT gateway setup service, ISAPP analyzes real-time data and warns about asset safety risks before they become threats while supporting audit teams with clear data trails.",
    points: [
      "Real-time risk alerts from IoT-connected assets",
      "Preventive planning for safer operations",
      "Audit-ready data trails and compliance support",
    ],
    gradient: "from-violet-500 to-indigo-500",
    image: isapp,
  },
  {
    name: "Uni-BIM",
    tag: "Next-Generation BIM Platform",
    description:
      "Uni-BIM transforms complex project data into clear, actionable intelligence for AEC teams.",
    content:
      "It streamlines the full project lifecycle from 3D coordination to facility handover by centralizing collaboration, simplifying data access, and linking design intelligence directly to project outcomes.",
    points: [
      "Centralized collaboration across disciplines",
      "Lifecycle coverage from design to handover",
      "Improved project decisions with connected data insights",
    ],
    gradient: "from-emerald-500 to-teal-500",
    image: unibim,
  },
];

const capabilities = [
  "Enterprise-grade security and governance",
  "Cloud-native architecture for scale",
  "API-first design for easy integrations",
  "Actionable analytics with AI-assisted insights",
];

function Products() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-950 text-slate-100">
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-16 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute right-10 top-20 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Our Products</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Modern products engineered for high-impact business outcomes.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore our product ecosystem designed to accelerate digital transformation across
              operations, engineering, and enterprise teams.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={product.image}
                      alt={`${product.name} preview`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${product.gradient}`} />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{product.tag}</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{product.name}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                    <p className="mt-3 rounded-xl bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700">
                      {product.content}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {product.points.map((point) => (
                        <li key={point} className="text-sm text-slate-700">
                          <span className="mr-2 text-cyan-600">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <button className={`${primaryButtonClass} mt-6 w-full px-4 py-2.5`}>
                      Book Demo
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Platform Highlights
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Built on a modern, secure, and scalable foundation.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every Turiya product is crafted to integrate quickly, perform reliably, and evolve with
                your business priorities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <ul className="space-y-4">
                {capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                      ✓
                    </span>
                    <span className="text-sm leading-6 text-slate-700">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ContactCardSection />
      </main>
      <Footer />
    </>
  );
}

export default Products;
