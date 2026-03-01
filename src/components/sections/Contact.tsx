"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    attendees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const contactCards = [
    {
      icon: FaPhone,
      title: "Llámanos",
      lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "tel:+15551234567",
      actionLabel: "Llamar ahora",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      lines: ["info@premiumevents.com", "ventas@premiumevents.com"],
      action: "mailto:info@premiumevents.com",
      actionLabel: "Enviar email",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      lines: ["Respuesta inmediata", "Lun - Sáb: 9:00 - 20:00"],
      action: "https://wa.me/528445841876",
      actionLabel: "Escribir ahora",
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-secondary-950 relative overflow-hidden"
    >
      {/* Background decorations — hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Empieza hoy
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tu Próximo Evento Exitoso
            <span className="gradient-text"> Empieza Aquí</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Completa el formulario y recibe una propuesta personalizada en menos de 48 horas. Sin compromiso, sin letra chica.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "50ms" }}
        >
          {contactCards.map((card, index) => (
            <a
              key={index}
              href={card.action}
              target={card.action.startsWith("http") ? "_blank" : undefined}
              rel={
                card.action.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group bg-white/[0.07] md:bg-white/5 md:backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
              >
                <card.icon className="text-xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{card.title}</h3>
              {card.lines.map((line, i) => (
                <p key={i} className="text-gray-400 text-sm">
                  {line}
                </p>
              ))}
              <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium mt-3 group-hover:text-primary-300 transition-colors">
                {card.actionLabel}
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left - Map & Location */}
          <div
            className={`lg:col-span-2 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="bg-white/[0.07] md:bg-white/5 md:backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Map */}
              <div className="flex-1 min-h-[250px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6279471266634!2d-99.16551332471395!3d19.426778981890475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sReforma%20222%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1706999000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              {/* Location info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      Av. Reforma 222, Piso 10
                    </p>
                    <p className="text-gray-400 text-sm">
                      Juárez, 06600 — CDMX
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      Horario de Atención
                    </p>
                    <p className="text-gray-400 text-sm">
                      Lun - Vie: 9:00 - 18:00
                    </p>
                    <p className="text-gray-400 text-sm">Sáb: 10:00 - 14:00</p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Reforma+222,+Juárez,+Cuauhtémoc,+06600+Ciudad+de+México,+CDMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium py-3 px-5 rounded-xl transition-all text-sm border border-white/10 hover:border-primary-500/30 w-full"
                >
                  <FaMapMarkerAlt className="text-primary-400" /> Cómo Llegar
                </a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.07] md:bg-white/5 md:backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Recibe tu Cotización en 48h
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Solo necesitamos 2 minutos de tu tiempo. Nosotros hacemos el resto.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Nombre del Contacto *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none"
                    placeholder="Nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none"
                    placeholder="email@empresa.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none"
                    placeholder="+52 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none"
                    placeholder="Nombre de la empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none appearance-none"
                  >
                    <option value="" className="bg-secondary-900">
                      Selecciona una opción
                    </option>
                    <option value="conferencia" className="bg-secondary-900">
                      Conferencia/Convención
                    </option>
                    <option value="teambuilding" className="bg-secondary-900">
                      Team Building
                    </option>
                    <option value="lanzamiento" className="bg-secondary-900">
                      Lanzamiento de Producto
                    </option>
                    <option value="capacitacion" className="bg-secondary-900">
                      Capacitación/Taller
                    </option>
                    <option value="reconocimiento" className="bg-secondary-900">
                      Evento de Reconocimiento
                    </option>
                    <option value="networking" className="bg-secondary-900">
                      Networking Empresarial
                    </option>
                    <option value="otro" className="bg-secondary-900">
                      Otro
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="attendees"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    N° de Asistentes Estimado
                  </label>
                  <input
                    type="text"
                    id="attendees"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all outline-none"
                    placeholder="Ej: 50-100 personas"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Cuéntanos sobre tu evento *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/10 transition-all resize-none outline-none"
                  placeholder="Describe tu evento ideal, fecha tentativa, objetivos..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] flex items-center justify-center gap-3 text-lg btn-shimmer"
              >
                <FaPaperPlane /> Recibir Mi Propuesta Gratis
              </button>
              <p className="text-gray-500 text-xs text-center mt-3">
                ✅ Respuesta garantizada en menos de 48h — Sin compromiso, sin spam
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
