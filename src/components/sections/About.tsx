"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaAward,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  { icon: FaBuilding, number: "300+", label: "Empresas Atendidas" },
  { icon: FaChartLine, number: "800+", label: "Eventos Corporativos" },
  { icon: FaAward, number: "15+", label: "Años de Experiencia" },
  { icon: FaCheckCircle, number: "98%", label: "Satisfacción Cliente" },
];

const About = () => {
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
      id="nosotros"
      className="py-24 bg-secondary-950 text-white relative overflow-hidden"
    >
      {/* Decorative blur circles — hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={`transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
          >
            <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
              Por qué existimos
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Nacimos para <span className="gradient-text">Quitarte el Estrés</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Sabemos que organizar un evento corporativo internamente es una pesadilla:
              semanas de coordinación, proveedores impredecibles, presupuestos que se disparan
              y el riesgo de que algo salga mal frente a tu jefe.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Por eso creamos Premium Events: para que tú —el profesional de RRHH,
              marketing o dirección— puedas delegar TODO y presentar un evento impecable
              sin perder noches de sueño. Con 15+ años y 800+ eventos, tu reputación está en
              buenas manos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    0 Eventos Fallidos
                  </h4>
                  <p className="text-gray-400">
                    800+ eventos ejecutados sin un solo fallo crítico
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Equipo de Élite
                  </h4>
                  <p className="text-gray-400">
                    Coordinadores, productores y creativos top
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Tu Evento = Nuestra Prioridad
                  </h4>
                  <p className="text-gray-400">
                    Máximo 4 eventos simultáneos para darte 100%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-500 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${150 + index * 60}ms` }}
                className={`bg-white/[0.07] md:bg-white/5 md:backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:border-primary-500/30 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <stat.icon className="text-5xl text-primary-400 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
