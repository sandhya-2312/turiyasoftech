import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import JobModal from "../components/JobModal";

const benefits = [
  {
    title: "Growth Opportunities",
    description: "Build your career through mentorship, learning budgets, and meaningful project ownership.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20V10m8 10V4m8 16v-7" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    title: "Innovative Work",
    description: "Work with modern engineering stacks and solve real-world enterprise technology challenges.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 18h6m-5 3h4m-1-18v6l4 3-4 3v3H9v-3l-4-3 4-3V3h4Z" />
      </svg>
    ),
  },
  {
    title: "Collaborative Culture",
    description: "Join cross-functional teams where ideas are shared openly and outcomes are built together.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 8v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-6 8v-1a4 4 0 0 1 4-4h2" />
      </svg>
    ),
  },
  {
    title: "Global Impact",
    description: "Create products and platforms used by clients across industries and international markets.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
];

const jobs = [];

const departments = ["All", ...new Set(jobs.map((job) => job.department))];

function Careers() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesSearch =
        query.length === 0 ||
        job.title.toLowerCase().includes(query) ||
        job.summary.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query);

      return matchesDepartment && matchesSearch;
    });
  }, [searchValue, selectedDepartment]);

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Navbar />
      <main className="bg-slate-50 text-slate-900">
        <section className="relative overflow-hidden px-4 pb-24 pt-36 text-center sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_50%)]" />
          <div className="relative mx-auto max-w-4xl">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Careers</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">
              Join our team and build the future with us
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Notify Me of Future Openings
            </a>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Why Join Us</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700">{benefit.icon}</span>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Company Culture</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  We foster an environment where curiosity, ownership, and teamwork are valued. Teams work closely
                  across product, engineering, and design, with flexibility to innovate and deliver impactful
                  solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cultureImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Team culture ${index + 1}`}
                    className={`h-52 w-full rounded-2xl object-cover shadow-md ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="open-positions" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Open Positions</h2>
              {jobs.length > 0 ? (
                <p className="mt-3 text-sm text-slate-600">Search and filter opportunities by role and department.</p>
              ) : (
                <p className="mt-3 text-sm text-slate-600">We are not actively hiring at this moment.</p>
              )}
            </div>

            {jobs.length > 0 ? (
              <>
                <div className="mt-6 grid w-full gap-3 sm:grid-cols-2 lg:max-w-xl">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Search by title, location..."
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <select
                    value={selectedDepartment}
                    onChange={(event) => setSelectedDepartment(event.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    {departments.map((department) => (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} onViewDetails={handleOpenModal} />
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
                    No roles match your search right now. Try a different keyword or department.
                  </div>
                )}
              </>
            ) : (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-700 shadow-sm">
                No current openings.
              </div>
            )}
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-center shadow-xl sm:p-10">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Didn&apos;t find a role? Send us your resume</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              We are always looking for talented people. Reach out and tell us how you can contribute.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Contact HR
            </a>
          </div>
        </section>
      </main>
      <Footer />

      <JobModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Careers;
