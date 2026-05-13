import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollDirectionButton() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (showScrollUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const pageBottom =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: pageBottom, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/40 blur-md" />
      <button
        type="button"
        onClick={handleClick}
        aria-label={showScrollUp ? "Scroll to top" : "Scroll to bottom"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 text-3xl font-bold text-white shadow-[0_10px_28px_rgba(14,165,233,0.45)] backdrop-blur-sm transition duration-300 hover:scale-105 hover:shadow-[0_14px_34px_rgba(56,189,248,0.55)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-0 active:scale-95"
      >
        <span className="drop-shadow-md">{showScrollUp ? "\u2191" : "\u2193"}</span>
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ScrollDirectionButton />
    </>
  );
}

export default App;
