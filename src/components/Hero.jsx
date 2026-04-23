import heroBg from "../assets/hero-bg.png";
import { primaryButtonClass } from "../ui/buttonStyles";

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden">
      <div
        className="hero-bg-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

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
    </section>
  );
}

export default Hero;
