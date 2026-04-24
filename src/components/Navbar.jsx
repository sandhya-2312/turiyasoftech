import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/turiya-logo.png";
import { primaryButtonClass } from "../ui/buttonStyles";

const navItems = [
  { label: "Home", type: "link", href: "/" },
  { label: "Company", type: "dropdown", items: ["About Us", "Blog", "Careers"] },
  { label: "Solutions", type: "dropdown", items: ["ERP", "Enterprise Application Integrations", "Data Engineering & Bussiness Intelligence", "Agentic AI", "Internet of Things", "Digital Twins"] },
  { label: "Industries", type: "link" },
  { label: "Products", type: "link" },
  { label: "Contact Us", type: "link", href: "/contact" },
];

const linkTargets = {
  Home: "/",
  "Contact Us": "/contact",
};

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const shouldUseSolidHeader = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        shouldUseSolidHeader
          ? "border-b border-cyan-300/20 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-slate-950/95 shadow-[0_10px_35px_rgba(2,6,23,0.55)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="ml-4 shrink-0 sm:ml-6">
          <img src={logo} alt="Turiya logo" className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="relative z-10 hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.type === "link" ? (
                <Link
                  to={item.href ?? linkTargets[item.label] ?? "#"}
                  className="flex items-center gap-1 border-b border-transparent pb-1 text-sm font-medium text-white/90 transition duration-300 hover:border-cyan-300/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 border-b border-transparent pb-1 text-sm font-medium text-white/90 transition duration-300 hover:border-cyan-300/80 hover:text-white">
                  {item.label}
                  {item.type === "dropdown" && (
                    <svg
                      className="h-4 w-4 text-cyan-200/90 transition duration-300 group-hover:rotate-180 group-hover:text-cyan-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              )}

              {item.type === "dropdown" && (
                <div className="pointer-events-none absolute left-1/2 top-full z-20 w-56 -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="translate-y-1 rounded-2xl border border-white/20 bg-slate-900/90 p-2.5 shadow-2xl shadow-black/45 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        to={subItem === "About Us" ? "/about" : "#"}
                        className="group/item flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-200 transition duration-200 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-cyan-400/15 hover:text-white"
                      >
                        {subItem}
                        <span className="text-cyan-200/0 transition duration-200 group-hover/item:text-cyan-200/90">+</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className={`${primaryButtonClass} px-5 py-2.5`}>
            Turiya3D
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-lg border border-white/20 p-2 text-white transition hover:border-white/40 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-4 backdrop-blur-md lg:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 shadow-lg shadow-black/20">
                {item.type === "dropdown" ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((prev) => (prev === item.label ? null : item.label))
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-white transition duration-200 hover:text-cyan-100"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition ${openMobileDropdown === item.label ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="space-y-1 px-3 pb-3">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block rounded-lg border border-transparent px-3 py-2 text-sm text-slate-200 transition duration-200 hover:border-cyan-300/40 hover:bg-gradient-to-r hover:from-blue-500/25 hover:to-cyan-400/15 hover:text-white"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href ?? linkTargets[item.label] ?? "#"}
                    className="block px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-500/20"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <button className={`${primaryButtonClass} mt-4 w-full px-5 py-3`}>
            Turiya3D
          </button>
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[2px] transition-all duration-300 ${
          shouldUseSolidHeader
            ? "bg-gradient-to-r from-transparent via-cyan-300/95 to-transparent opacity-100"
            : "bg-white/90 opacity-90"
        }`}
      />
    </header>
  );
}

export default Navbar;
