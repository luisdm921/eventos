"use client";

import { useRef, useState, useEffect } from "react";

const clients = [
  { name: "TechCorp", abbr: "TC" },
  { name: "Global Brands", abbr: "GB" },
  { name: "Innovatech", abbr: "IN" },
  { name: "Grupo Norte", abbr: "GN" },
  { name: "MediaPro", abbr: "MP" },
  { name: "Finanzas MX", abbr: "FX" },
  { name: "RetailMax", abbr: "RM" },
  { name: "BioHealth", abbr: "BH" },
];

const Clients = () => {
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
    <section
      ref={ref}
      className="py-16 bg-white border-y border-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <p
          className={`text-center text-sm text-secondary-400 uppercase tracking-widest font-medium mb-10 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          Estas empresas ya dejaron de organizar eventos internamente
        </p>

        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-12 animate-[marquee_30s_linear_infinite] transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Double the items for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center group"
              >
                <div className="flex items-center gap-3 px-6 py-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-300">
                  {/* Logo placeholder - geometric mark */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center group-hover:from-primary-50 group-hover:to-primary-100 transition-all">
                    <span className="text-secondary-500 font-bold text-xs group-hover:text-primary-600 transition-colors">
                      {client.abbr}
                    </span>
                  </div>
                  <span className="text-secondary-400 font-semibold text-sm whitespace-nowrap group-hover:text-secondary-700 transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
