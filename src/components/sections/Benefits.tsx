"use client";

import { useRef, useEffect, useState } from "react";
import {
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaClock,
    title: "Ahorro de Tiempo",
    description:
      "Nos encargamos de toda la logística para que tu equipo se enfoque en lo importante.",
  },
  {
    icon: FaShieldAlt,
    title: "Garantía de Calidad",
    description:
      "Más de 15 años respaldando eventos corporativos exitosos para empresas líderes.",
  },
  {
    icon: FaHeadset,
    title: "Soporte 24/7",
    description:
      "Asistencia continua antes, durante y después del evento para tu tranquilidad.",
  },
  {
    icon: FaChartLine,
    title: "ROI Medible",
    description:
      "Métricas y reportes detallados del impacto y resultados de tu evento corporativo.",
  },
  {
    icon: FaUserTie,
    title: "Coordinador Dedicado",
    description:
      "Un profesional asignado exclusivamente a tu proyecto desde inicio a fin.",
  },
  {
    icon: FaTools,
    title: "Tecnología Avanzada",
    description:
      "Equipamiento audiovisual de última generación y plataformas digitales integradas.",
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
      { threshold: 0.2 },
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Somos el socio estratégico que tu empresa necesita para crear
            eventos corporativos memorables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 transition-all hover:shadow-xl group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDuration: "700ms",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors group-hover:scale-110 transform duration-300">
                <benefit.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu Próximo Evento Corporativo?
            </h3>
            <p className="text-xl mb-8 text-primary-100">
              Conversemos sobre cómo podemos hacer que tu evento sea un éxito
              rotundo
            </p>
            <a
              href="#contacto"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
