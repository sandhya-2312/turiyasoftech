function JobCard({ job, onViewDetails }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          {job.department}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{job.type}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-slate-900">{job.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{job.summary}</p>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
        <span>{job.location}</span>
        <span>{job.experience}</span>
      </div>

      <button
        type="button"
        onClick={() => onViewDetails(job)}
        className="mt-6 inline-flex items-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
      >
        View Details
      </button>
    </article>
  );
}

export default JobCard;
