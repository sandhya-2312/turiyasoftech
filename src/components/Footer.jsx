import logo from "../assets/turiya-logo.png";

const quickLinks = ["About Us", "Solutions", "Industries", "Contact Us"];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 px-4 pb-7 pt-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-12 top-4 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-16 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="rounded-3xl border border-cyan-200/20 bg-white/5 p-7 shadow-[0_15px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <img src={logo} alt="Turiya logo" className="h-10 w-auto" />
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Engineering digital solutions with clarity and precision.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300/90">
                We create reliable and scalable systems for industrial and enterprise teams, focused on
                long-term business value.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">Quick Links</p>
              <ul className="mt-4 space-y-3 text-sm">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-300 transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p>info@turiyasofttech.com</p>
                <p>+91 95000 05741</p>
                <p>Visakhapatnam, India</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Turiya Softech. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
