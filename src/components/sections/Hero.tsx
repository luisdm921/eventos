"use client";

import {
  FaPlay,
  FaTimes,
  FaCalendarAlt,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const stats = [
  { number: "800+", label: "Eventos Sin Estrés" },
  { number: "3x", label: "ROI Promedio" },
  { number: "98%", label: "Clientes Repiten" },
];

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/al-elmes-ULHxWq8reao-unsplash.webp"
          alt="Evento corporativo"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-950/90 via-secondary-900/80 to-primary-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements — hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto pt-20 pb-28">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-white/15 md:bg-white/10 md:backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 transition-all duration-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-primary-200 text-sm font-medium tracking-wide">
            +800 Eventos Corporativos Exitosos — 0 Dolores de Cabeza
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] transition-all duration-400 delay-75 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Deja de Perder Tiempo
          <br />
          <span className="gradient-text">Organizando Eventos</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-400 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          Nosotros nos encargamos de <strong className="text-white">toda la logística, producción y coordinación</strong> de tu evento corporativo.
          Tú solo llegas, disfrutas los resultados y te llevas el crédito.
          Propuesta personalizada en 48 horas.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-400 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <a
            href="https://wa.me/528445841876?text=Hola%2C%20me%20interesa%20agendar%20un%20evento%20corporativo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105 btn-shimmer flex items-center gap-3"
          >
            <FaWhatsapp className="text-xl" />
            Cotiza Gratis en 5 Min
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <button
            onClick={() => setShowVideo(true)}
            className="group flex items-center gap-3 bg-white/15 md:bg-white/10 hover:bg-white/20 md:backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
              <FaPlay className="text-sm ml-0.5" />
            </span>
            Ver Eventos Reales
          </button>
        </div>

        {/* Floating Stats */}
        <div
          className={`flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-400 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass rounded-2xl px-6 py-4 min-w-[140px] hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-[fadeIn_0.5s_ease-out_1s] opacity-0 [animation-fill-mode:forwards]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 animate-[bounce_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-primary-400 transition-colors z-10 bg-white/10 rounded-full p-3 hover:bg-white/20"
            onClick={() => setShowVideo(false)}
          >
            <FaTimes />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full rounded-2xl shadow-2xl"
              controls
              autoPlay
              preload="metadata"
            >
              <source src="/videos/corporate-video.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
