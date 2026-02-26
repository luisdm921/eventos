"use client";

import { useRef, useEffect, useState } from "react";
import {
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
  FaUserTie,
  FaTools,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaClock,
    title: "Ahorro de Tiempo",
    description:
      "Nos encargamos de toda la logística para que tu equipo se enfoque en lo importante.",
    stat: "40%",
    statLabel: "menos tiempo de gestión",
  },
  {
    icon: FaShieldAlt,
    title: "Garantía de Calidad",
    description:
      "Más de 15 años respaldando eventos corporativos exitosos para empresas líderes.",
    stat: "15+",
    statLabel: "años de experiencia",
  },
  {
    icon: FaHeadset,
    title: "Soporte 24/7",
    description:
      "Asistencia continua antes, durante y después del evento para tu tranquilidad.",
    stat: "24/7",
    statLabel: "disponibilidad total",
  },
  {
    icon: FaChartLine,
    title: "ROI Medible",
    description:
      "Métricas y reportes detallados del impacto y resultados de tu evento corporativo.",
    stat: "3x",
    statLabel: "retorno de inversión",
  },
  {
    icon: FaUserTie,
    title: "Coordinador Dedicado",
    description:
      "Un profesional asignado exclusivamente a tu proyecto desde inicio a fin.",
    stat: "1:1",
    statLabel: "atención personalizada",
  },
  {
    icon: FaTools,
    title: "Tecnología Avanzada",
    description:
      "Equipamiento audiovisual de última generación y plataformas digitales integradas.",
    stat: "100%",
    statLabel: "equipo de vanguardia",
  },
];

const Benefits = () => {
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

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4">
            Ventajas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            ¿Por Qué <span className="gradient-text">Elegirnos</span>?
          </h2>
          <p className="text-lg text-secondary-500 max-w-3xl mx-auto leading-relaxed">
            Somos el socio estratégico que tu empresa necesita para crear
            eventos corporativos que dejan huella
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-200 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/25">
                  <benefit.icon className="text-xl text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-secondary-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  {/* Mini stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary-500">
                      {benefit.stat}
                    </span>
                    <span className="text-xs text-secondary-400">
                      {benefit.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div
          className={`mt-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src="/images/marc-babin-aQWmCH_b3MU-unsplash.webp"
                alt="Evento corporativo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/95 via-secondary-900/90 to-primary-900/85" />
            </div>

            <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  ¿Listo para tu Próximo
                  <span className="gradient-text"> Evento Corporativo</span>?
                </h3>
                <p className="text-lg text-gray-300">
                  Conversemos sobre cómo podemos hacer que tu evento sea un
                  éxito rotundo. Primera consulta sin compromiso.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/528445841876?text=Hola%2C%20me%20interesa%20agendar%20una%20consulta%20para%20mi%20evento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105 btn-shimmer flex items-center gap-3 whitespace-nowrap"
                >
                  <FaWhatsapp className="text-xl" />
                  Agendar Consulta
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
