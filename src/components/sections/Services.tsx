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
    title: "Conferencias que Generan Negocios",
    description:
      "Deja de organizar conferencias que nadie recuerda. Creamos eventos donde tus asistentes hacen contactos reales y cierran tratos.",
    features: [
      "Networking estratégico con ROI medible",
      "Tecnología audiovisual que impresiona",
      "Tú no mueves un dedo: gestión 100% integral",
    ],
    gradient: "from-primary-500 to-primary-600",
    bgGlow: "bg-primary-500/10",
  },
  {
    icon: FaUsers,
    title: "Team Building que Sí Funciona",
    description:
      "Olvida las dinámicas aburridas. Diseñamos experiencias que realmente mejoran la colaboración y se notan en la productividad.",
    features: [
      "Actividades con impacto medible",
      "Facilitadores expertos en equipos",
      "Reportes de resultados post-evento",
    ],
    gradient: "from-accent-500 to-accent-600",
    bgGlow: "bg-accent-500/10",
  },
  {
    icon: FaChartLine,
    title: "Lanzamientos que Venden",
    description:
      "Tu producto merece un debut que genere ventas, no solo aplausos. Creamos la expectativa que convierte asistentes en compradores.",
    features: [
      "Producción audiovisual cinematográfica",
      "Marketing experiencial que convierte",
      "Cobertura mediática incluida",
    ],
    gradient: "from-cyan-500 to-blue-500",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: FaLightbulb,
    title: "Capacitaciones que Retienen",
    description:
      "El 80% de lo aprendido en talleres genéricos se olvida en una semana. Los nuestros están diseñados para que el conocimiento se quede.",
    features: [
      "Espacios equipados para el aprendizaje",
      "Metodologías de retención comprobadas",
      "Materiales listos para tu equipo",
    ],
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/10",
  },
  {
    icon: FaAward,
    title: "Premiaciones que Motivan de Verdad",
    description:
      "Una gala bien hecha retiene talento mejor que un aumento. Creamos ceremonias que hacen que tu equipo se sienta valorado.",
    features: ["Galas corporativas de primer nivel", "Premiaciones con impacto emocional", "Cenas de gala memorables"],
    gradient: "from-rose-500 to-pink-500",
    bgGlow: "bg-rose-500/10",
  },
  {
    icon: FaHandshake,
    title: "Networking que Cierra Deals",
    description:
      "Conectar a las personas correctas en el momento correcto. Nuestros eventos generan las relaciones que tu negocio necesita.",
    features: [
      "Mixers diseñados para cerrar negocios",
      "Desayunos ejecutivos de alto nivel",
      "Eventos de industria con decisores",
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
            Soluciones que generan resultados
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cada Evento Resuelve
            <span className="gradient-text"> un Problema Real</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No vendemos “eventos bonitos”. Diseñamos experiencias corporativas con objetivos claros: más ventas, mejores equipos, mayor retención de talento.
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
                  href="https://wa.me/528445841876?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors group/link"
                >
                  Cotizar este servicio
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
