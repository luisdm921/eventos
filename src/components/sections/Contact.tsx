"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
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
    // Handle form submission here
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
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Estamos listos para hacer realidad el evento de tus sueños
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Teléfono
              </h3>
              <p className="text-secondary-600">+1 (555) 123-4567</p>
              <p className="text-secondary-600">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Email
              </h3>
              <p className="text-secondary-600">info@premiumevents.com</p>
              <p className="text-secondary-600">ventas@premiumevents.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Ubicación
              </h3>
              <p className="text-secondary-600">Calle Principal 123</p>
              <p className="text-secondary-600">Ciudad, País 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-secondary-700 font-medium mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-secondary-700 font-medium mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="email@empresa.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-secondary-700 font-medium mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-secondary-700 font-medium mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Nombre de la empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="attendees"
                    className="block text-secondary-700 font-medium mb-2"
                  >
                    N° de Asistentes Estimado
                  </label>
                  <input
                    type="text"
                    id="attendees"
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ej: 50-100 personas"
                  />
                </div>

                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-secondary-700 font-medium mb-2"
                  >
                    Tipo de Evento *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="conferencia">Conferencia/Convención</option>
                    <option value="teambuilding">Team Building</option>
                    <option value="lanzamiento">Lanzamiento de Producto</option>
                    <option value="capacitacion">Capacitación/Taller</option>
                    <option value="reconocimiento">
                      Evento de Reconocimiento
                    </option>
                    <option value="networking">Networking Empresarial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-secondary-700 font-medium mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu evento..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaPaperPlane /> Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div
          className={`mt-16 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[500px]">
              {/* Mapa */}
              <div className="h-[400px] lg:h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6279471266634!2d-99.16551332471395!3d19.426778981890475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sReforma%20222%2C%20Ju%C3%A1rez%2C%20Cuauht%C3%A9moc%2C%2006600%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1706999000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* Información de ubicación */}
              <div className="p-8 lg:p-12 flex flex-col justify-center items-center bg-gradient-to-br from-primary-50 to-white min-h-[500px]">
                <div className="mb-6 text-center">
                  <div className="inline-block p-3 bg-primary-100 rounded-lg mb-4">
                    <FaMapMarkerAlt className="text-primary-600 text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                    Visítanos
                  </h3>
                  <p className="text-secondary-600 text-lg mb-6">
                    Estamos ubicados en el corazón de la ciudad, listos para
                    atenderte
                  </p>
                </div>

                <div className="space-y-6 w-full max-w-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-secondary-900 mb-1">
                        Dirección
                      </p>
                      <p className="text-secondary-600">
                        Av. Reforma 222, Piso 10
                      </p>
                      <p className="text-secondary-600">Juárez, 06600</p>
                      <p className="text-secondary-600">
                        Ciudad de México, CDMX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-primary-600 text-lg" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-secondary-900 mb-1">
                        Horario
                      </p>
                      <p className="text-secondary-600">
                        Lunes - Viernes: 9:00 - 18:00
                      </p>
                      <p className="text-secondary-600">
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir//Reforma+222,+Juárez,+Cuauhtémoc,+06600+Ciudad+de+México,+CDMX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 mt-2 w-full"
                  >
                    <FaMapMarkerAlt /> Cómo Llegar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
