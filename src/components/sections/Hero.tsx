"use client";

import { FaPlay, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #7c2d12 0%, #1e293b 50%, #7c2d12 100%),
          repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)
        `,
      }}
    >
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-[fadeIn_0.3s_ease-out]">
          Eventos Corporativos <br />
          <span className="text-primary-400">que Impulsan tu Negocio</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-[fadeIn_0.3s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
          Soluciones integrales para conferencias, team building y eventos
          empresariales de alto impacto
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_0.3s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="#contacto"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
          >
            Solicita una Cotización
          </a>
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm transform hover:scale-105"
          >
            <FaPlay /> Ver Video
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-[fadeIn_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-[bounce_1.5s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary-500 transition-colors z-10"
            onClick={() => setShowVideo(false)}
          >
            <FaTimes />
          </button>

          <div
            className="relative w-full max-w-5xl aspect-video"
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
