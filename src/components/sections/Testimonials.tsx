"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "María González",
    role: "Directora de RRHH",
    company: "TechCorp México",
    text: "El team building que organizaron transformó la dinámica de nuestro equipo. La atención al detalle y la creatividad superaron todas nuestras expectativas. Fue una experiencia que nuestro equipo sigue comentando.",
    rating: 5,
    initials: "MG",
    accent: "from-primary-400 to-orange-500",
    highlight: "Transformó la dinámica de nuestro equipo",
  },
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "Innovatech Solutions",
    text: "Nuestra convención anual fue impecable. Desde la logística hasta el cierre, todo fluyó perfectamente. Sin duda, los mejores en eventos corporativos que hemos contratado en 10 años.",
    rating: 5,
    initials: "CM",
    accent: "from-violet-400 to-purple-600",
    highlight: "Sin duda, los mejores en eventos corporativos",
  },
  {
    name: "Ana Lucía Ramírez",
    role: "VP Marketing",
    company: "Global Brands",
    text: "El lanzamiento de producto que diseñaron generó un impacto mediático increíble. ROI 3x superior al esperado. Profesionalismo de primer nivel que se nota en cada detalle.",
    rating: 5,
    initials: "AL",
    accent: "from-cyan-400 to-blue-500",
    highlight: "ROI 3x superior al esperado",
  },
  {
    name: "Roberto Torres",
    role: "Director General",
    company: "Grupo Industrial Norte",
    text: "Llevamos 5 años trabajando con Premium Events para todos nuestros eventos corporativos. La consistencia en calidad y la innovación constante es lo que más valoramos de esta relación.",
    rating: 5,
    initials: "RT",
    accent: "from-emerald-400 to-green-600",
    highlight: "5 años de consistencia en calidad",
  },
];

const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goPrev = () =>
    goTo(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  const goNext = () => goTo((activeIndex + 1) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <section className="py-28 bg-secondary-950 relative overflow-hidden">
      {/* Animated background — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary-500/[0.07] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-violet-500/[0.07] rounded-full blur-[100px] animate-float-slow" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Clientes que
            <span className="gradient-text"> confían</span> en nosotros
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            +300 empresas ya vivieron la experiencia Premium Events
          </p>
        </div>

        {/* Featured Testimonial - Cinematic Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`relative transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Main card */}
            <div className="relative bg-white/[0.06] md:bg-white/[0.04] md:backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden group">
              {/* Gradient accent line at top */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${current.accent} opacity-60`}
              />

              {/* Large decorative quote */}
              <div className="absolute -top-4 -left-4 md:top-4 md:left-8 opacity-[0.04]">
                <FaQuoteLeft className="text-[120px] md:text-[180px] text-white" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="text-accent-400 text-lg" />
                  ))}
                </div>

                {/* Highlight phrase */}
                <p
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${current.accent} font-bold text-lg md:text-xl mb-6 tracking-tight`}
                >
                  &ldquo;{current.highlight}&rdquo;
                </p>

                {/* Full quote */}
                <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl font-light">
                  {current.text}
                </p>

                {/* Author row */}
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar with gradient ring */}
                    <div
                      className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${current.accent} p-[2px]`}
                    >
                      <div className="w-full h-full rounded-full bg-secondary-900 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {current.initials}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">
                        {current.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {current.role} ·{" "}
                        <span className="text-gray-400">{current.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={goPrev}
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
                      aria-label="Anterior"
                    >
                      <FaChevronLeft className="text-sm" />
                    </button>
                    <button
                      onClick={goNext}
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
                      aria-label="Siguiente"
                    >
                      <FaChevronRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots + auto-play indicator */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className="relative group/dot"
                  aria-label={`Ir a testimonio ${index + 1}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "w-10 bg-primary-500"
                        : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                  {/* Auto-play fill animation */}
                  {index === activeIndex && isAutoPlaying && (
                    <div className="absolute inset-0 h-1.5 bg-primary-300/50 rounded-full animate-[shrinkWidth_5s_linear]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mini cards row */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {testimonials.map((t, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white/[0.08] border-primary-500/30 shadow-lg shadow-primary-500/5"
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-[10px] font-bold">
                      {t.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-xs font-semibold truncate ${index === activeIndex ? "text-white" : "text-gray-400"}`}
                    >
                      {t.name}
                    </p>
                    <p className="text-[10px] text-gray-600 truncate">
                      {t.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-[8px] ${index === activeIndex ? "text-accent-400" : "text-gray-600"}`}
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* Trust bar */}
          <div
            className={`mt-14 flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-[9px] font-bold text-white border-2 border-secondary-950`}
                  >
                    {t.initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} className="text-accent-400 text-xs" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
                <p className="text-gray-500 text-xs">
                  de 300+ reseñas verificadas
                </p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <div className="text-center">
              <p className="text-white font-bold text-2xl">98%</p>
              <p className="text-gray-500 text-xs">clientes repiten</p>
            </div>

            <div className="h-8 w-px bg-white/10 hidden md:block" />

            <div className="text-center">
              <p className="text-white font-bold text-2xl">800+</p>
              <p className="text-gray-500 text-xs">eventos exitosos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
