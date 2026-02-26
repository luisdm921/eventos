"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaAward,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaBriefcase,
    title: "Conferencias y Convenciones",
    description:
      "Eventos corporativos de alto nivel que impulsan el networking y el conocimiento.",
    features: [
      "Gestión integral del evento",
      "Tecnología audiovisual avanzada",
      "Logística y coordinación",
    ],
    gradient: "from-primary-500 to-primary-600",
    bgGlow: "bg-primary-500/10",
  },
  {
    icon: FaUsers,
    title: "Team Building",
    description:
      "Fortalece equipos con actividades diseñadas para mejorar la colaboración.",
    features: [
      "Dinámicas personalizadas",
      "Facilitadores expertos",
      "Medición de resultados",
    ],
    gradient: "from-accent-500 to-accent-600",
    bgGlow: "bg-accent-500/10",
  },
  {
    icon: FaChartLine,
    title: "Lanzamientos de Producto",
    description:
      "Presentaciones impactantes que generan expectativa y engagement.",
    features: [
      "Producción audiovisual",
      "Marketing experiencial",
      "Relaciones públicas",
    ],
    gradient: "from-cyan-500 to-blue-500",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: FaLightbulb,
    title: "Capacitaciones y Talleres",
    description:
      "Espacios de aprendizaje diseñados para maximizar la retención.",
    features: [
      "Espacios equipados",
      "Material didáctico",
      "Logística de participantes",
    ],
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/10",
  },
  {
    icon: FaAward,
    title: "Eventos de Reconocimiento",
    description:
      "Celebra logros y motiva a tu equipo con ceremonias memorables.",
    features: ["Galas corporativas", "Premiaciones", "Cenas de gala"],
    gradient: "from-rose-500 to-pink-500",
    bgGlow: "bg-rose-500/10",
  },
  {
    icon: FaHandshake,
    title: "Networking Empresarial",
    description: "Facilita conexiones valiosas entre profesionales y empresas.",
    features: [
      "Mixers corporativos",
      "Desayunos ejecutivos",
      "Eventos de industria",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/10",
  },
];

const Services = () => {
  const ref = useRef(null);
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
    <section
      id="servicios"
      className="py-24 bg-secondary-950 relative overflow-hidden"
    >
      {/* Background decoration — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Lo que hacemos
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Servicios que
            <span className="gradient-text"> Inspiran</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios para hacer de tu evento
            corporativo algo extraordinario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 60}ms` }}
              className={`group relative bg-secondary-900/60 md:bg-secondary-900/50 md:backdrop-blur-sm border border-white/5 p-8 rounded-2xl transition-all duration-500 hover:border-primary-500/30 hover:bg-secondary-900/80 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute -inset-1 ${service.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors group/link"
                >
                  Saber más
                  <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
