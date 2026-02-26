"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaComments,
  FaPencilRuler,
  FaCogs,
  FaGlassCheers,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaComments,
    title: "Consulta",
    description:
      "Escuchamos tus objetivos, audiencia y visión. Entendemos a fondo lo que necesitas para diseñar la estrategia perfecta.",
    accent: "from-primary-400 to-orange-500",
    detail: "Reunión sin costo",
  },
  {
    number: "02",
    icon: FaPencilRuler,
    title: "Diseño",
    description:
      "Conceptualizamos cada detalle: temática, logística, experiencia del asistente y propuesta económica a tu medida.",
    accent: "from-violet-400 to-purple-500",
    detail: "Propuesta en 48h",
  },
  {
    number: "03",
    icon: FaCogs,
    title: "Producción",
    description:
      "Nuestro equipo ejecuta toda la logística, proveedores, montaje, tecnología y coordinación en tiempo perfecto.",
    accent: "from-cyan-400 to-blue-500",
    detail: "Gestión integral",
  },
  {
    number: "04",
    icon: FaGlassCheers,
    title: "Tu Evento",
    description:
      "El gran día llega sin estrés para ti. Supervisamos cada momento para que solo disfrutes los resultados.",
    accent: "from-emerald-400 to-green-500",
    detail: "Ejecución impecable",
  },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-secondary-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Proceso
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            De la idea al <span className="gradient-text">evento perfecto</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un proceso probado en +800 eventos que garantiza resultados
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary-500/30 via-violet-500/30 to-emerald-500/30" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Step card */}
                <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.accent} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="text-white text-lg" />
                    </div>
                    <span className="text-3xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Detail tag */}
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${step.accent} bg-clip-text text-transparent border border-white/10`}
                  >
                    {step.detail}
                  </span>

                  {/* Arrow connector (not on last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-16 z-10">
                      <div className="w-6 h-6 rounded-full bg-secondary-950 border border-white/10 flex items-center justify-center">
                        <FaArrowRight className="text-[8px] text-primary-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-gray-500 text-sm">
            ¿Listo para empezar? El primer paso es una conversación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
