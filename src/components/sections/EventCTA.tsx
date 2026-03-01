"use client";

import { useRef, useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const EventCTA = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[50vh] min-h-[400px] overflow-hidden"
    >
      {/* Full-width background image */}
      <img
        src="/images/chuttersnap-Q_KdjKxntH8-unsplash.webp"
        alt="Evento corporativo en vivo"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-secondary-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/80 via-transparent to-secondary-950/80" />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
        }`}
      >
        <p className="text-primary-400 font-semibold text-sm uppercase tracking-widest mb-4">
          Disponibilidad limitada
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
          Solo <span className="gradient-text">3 fechas disponibles</span> este mes
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl">
          Nuestro equipo trabaja máximo 4 eventos simultáneos para garantizar calidad.
          Reserva ahora y asegura tu fecha antes de que se agote.
        </p>
        <a
          href="https://wa.me/528445841876?text=Hola%2C%20quiero%20reservar%20fecha%20para%20mi%20evento%20corporativo"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105 btn-shimmer flex items-center gap-3"
        >
          <FaWhatsapp className="text-xl" />
          Reserva Tu Fecha Ahora
        </a>
      </div>
    </section>
  );
};

export default EventCTA;
