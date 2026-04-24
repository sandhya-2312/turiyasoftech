import { useEffect, useState } from "react";
import heroBg from "../assets/hero-bg.png";
import heroAiHandshake from "../assets/hero-ai-handshake.png";
import heroAiNeon from "../assets/hero-ai-neon.png";
import { primaryButtonClass } from "../ui/buttonStyles";

function Hero() {
  const slides = [
    { image: heroBg, position: "center", filter: "brightness(0.95)" },
    { image: heroAiHandshake, position: "center", filter: "brightness(0.84) saturate(1.1)" },
    { image: heroAiNeon, position: "center", filter: "brightness(0.82) saturate(1.1)" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={`${slide.image}-${slide.position}`}
          className={`hero-bg-zoom absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.position,
            filter: slide.filter,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-900/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Building the Future of Industrial intelligence
          </h1>

          <button className={`${primaryButtonClass} mt-8 px-7 py-3`}>
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={`indicator-${slide.position}-${index}`}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-8 rounded-full transition-all duration-300 ${
              index === activeSlide ? "bg-cyan-300" : "bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
