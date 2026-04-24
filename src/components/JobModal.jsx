import { useEffect } from "react";

function JobModal({ job, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !job) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{job.department}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{job.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close job details"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <div className="mt-5 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-3">
          <p>
            <span className="font-semibold text-slate-900">Type:</span> {job.type}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Experience:</span> {job.experience}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600">{job.description}</p>

        <div className="mt-5">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Key Responsibilities</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Apply Now
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobModal;
