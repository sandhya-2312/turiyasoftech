function ContactCardSection() {
  return (
    <section
      id="contact-us"
      className="scroll-mt-28 bg-gradient-to-b from-cyan-50 to-white px-4 pb-20 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-300/70 bg-white shadow-2xl shadow-cyan-900/20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-44 w-44 rounded-full bg-cyan-200/60 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-blue-200/50 blur-3xl" />
          </div>

          <div className="relative grid gap-8 p-8 md:grid-cols-[1.3fr_1fr] md:p-10 lg:p-12">
            <div>
              <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                Let&apos;s Connect
              </p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Build your next industrial digital solution with us.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Share your requirements and our team will get back to you with a tailored plan,
                architecture guidance, and implementation roadmap.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:info@turiyasofttech.com"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+919500005741"
                  className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  Call Our Team
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Quick Contact
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-600">info@turiyasofttech.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="text-sm text-slate-600">+91 95000 05741</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Address</p>
                  <p className="text-sm text-slate-600">
                    Nascom CoE, Opp. Department of Marine Engineering, Andhra University,
                    Visakhapatnam, Andhra Pradesh, India 530003
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCardSection;
