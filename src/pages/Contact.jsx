import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactDetails = [
  {
    title: "Address",
    value:
      "Nascom CoE, Opp. Department of Marine Engineering, Andhra University, Visakhapatnam, Andhra Pradesh, India 530003",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Phone",
    value: "+91 95000 05741",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2A19.78 19.78 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12.9.35 1.77.68 2.59a2 2 0 01-.45 2.11L9.1 10.53a16 16 0 006.37 6.37l1.11-1.11a2 2 0 012.11-.45c.82.33 1.69.56 2.59.68A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email",
    value: "info@turiyasoftech.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z" />
        <path d="M3 8l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Connect",
    value: "LinkedIn and WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3 7-7" />
        <path d="M21 12a9 9 0 11-6.22-8.56" />
      </svg>
    ),
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com", className: "bg-[#0A66C2] hover:bg-[#0959a8]" },
      { label: "WhatsApp", href: "https://wa.me/919500005741", className: "bg-[#25D366] hover:bg-[#1fb557]" },
    ],
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = useMemo(
    () => Object.keys(errors).length === 0 && Object.values(formData).every((value) => value.trim()),
    [errors, formData],
  );

  const validate = (values) => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^[\d+\-\s()]{8,}$/.test(values.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!values.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    setErrors(validate(updated));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-slate-50 via-white to-blue-50/40 text-slate-900">
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-100/70 via-indigo-50 to-white px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-cyan-300/35 blur-3xl" />
            <div className="absolute -right-14 top-10 h-48 w-48 rounded-full bg-indigo-300/30 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base text-slate-700 sm:text-lg">We&apos;d love to hear from you</p>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Reach us directly</h2>
              <p className="text-slate-600">
                Talk to our team for project inquiries, partnerships, or support. We usually respond within one
                business day.
              </p>

              <div className="space-y-4 pt-2">
                {contactDetails.map((detail) => (
                  <article
                    key={detail.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
                  >
                    <span className="rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 p-2 text-blue-700 shadow-sm">
                      {detail.icon}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{detail.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{detail.value}</p>
                      {detail.links && (
                        <div className="mt-3 flex items-center gap-2">
                          {detail.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className={`rounded-md px-3 py-1.5 text-xs font-semibold text-white transition ${link.className}`}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <section className="rounded-2xl border border-slate-200 bg-white/95 p-6 shadow-lg shadow-blue-100/60 sm:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-600">Fill in your details and our team will get back to you.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition duration-200 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    placeholder="Tell us about your requirements..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-sky-400 focus:outline-none focus:ring-4 focus:ring-cyan-200 disabled:cursor-not-allowed disabled:from-blue-300 disabled:to-cyan-300"
                  disabled={!isFormValid}
                >
                  Submit
                </button>
              </form>

              {isSubmitted && (
                <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  Thank you! Your message has been submitted successfully.
                </p>
              )}
            </section>
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <iframe
              title="Turiya Softech Office Location"
              src="https://maps.google.com/maps?q=Nascom%20CoE%2C%20Opp.%20Department%20of%20Marine%20Engineering%2C%20Andhra%20University%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%2C%20India%20530003&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 px-6 py-10 text-center text-white shadow-xl shadow-cyan-900/20 sm:px-10">
            <h2 className="text-2xl font-semibold">Get in touch with our team</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
              Need immediate assistance? Write to us at info@turiyasoftech.com and our support desk will help you
              quickly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
