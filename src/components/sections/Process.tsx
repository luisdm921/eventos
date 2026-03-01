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
    title: "Cuéntanos tu Idea",
    description:
      "Una llamada de 15 minutos es todo lo que necesitamos. Tú nos dices qué quieres lograr, nosotros te decimos cómo hacerlo realidad.",
    accent: "from-primary-400 to-orange-500",
    detail: "Gratis y sin compromiso",
  },
  {
    number: "02",
    icon: FaPencilRuler,
    title: "Recibe tu Propuesta",
    description:
      "En 48 horas tienes una propuesta completa: concepto, logística, experiencia del asistente y presupuesto transparente. Sin sorpresas.",
    accent: "from-violet-400 to-purple-500",
    detail: "Propuesta en 48h",
  },
  {
    number: "03",
    icon: FaCogs,
    title: "Nosotros Hacemos Todo",
    description:
      "Proveedores, montaje, tecnología, coordinación… todo corre por nuestra cuenta. Tú solo apruebas y nosotros ejecutamos.",
    accent: "from-cyan-400 to-blue-500",
    detail: "0 estrés para ti",
  },
  {
    number: "04",
    icon: FaGlassCheers,
    title: "Disfruta los Resultados",
    description:
      "Llega, disfruta y llévate el crédito. Tu equipo y directivos quedarán impresionados. Nosotros nos encargamos de cada detalle.",
    accent: "from-emerald-400 to-green-500",
    detail: "Tú te llevas el crédito",
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
      {/* Background — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Así de fácil
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            De tu idea a un <span className="gradient-text">evento impecable</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            4 pasos simples. Tú pones la visión, nosotros ponemos los 15 años de experiencia. Sin complicaciones.
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
                className={`relative transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Step card */}
                <div className="group relative bg-white/[0.04] md:bg-white/[0.03] md:backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 h-full">
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
          className={`text-center mt-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <p className="text-gray-400 text-sm mb-4">
            ¿Listo para empezar? El primer paso es una conversación de 15 minutos.
          </p>
          <a
            href="https://wa.me/528445841876?text=Hola%2C%20quiero%20agendar%20una%20consulta%20gratuita%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-105"
          >
            <FaArrowRight className="text-xs" />
            Agenda tu Consulta Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
