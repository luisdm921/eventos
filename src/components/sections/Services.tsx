"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaAward,
  FaHandshake,
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
  },
  {
    icon: FaAward,
    title: "Eventos de Reconocimiento",
    description:
      "Celebra logros y motiva a tu equipo con ceremonias memorables.",
    features: ["Galas corporativas", "Premiaciones", "Cenas de gala"],
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
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios para hacer de tu evento algo
            extraordinario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="text-3xl text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-secondary-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-secondary-700"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
