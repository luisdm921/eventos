import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-500">Premium</span> Events
            </h3>
            <p className="text-secondary-300 mb-4">
              Creando experiencias inolvidables para tus momentos más
              especiales.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-primary-500 transition-colors"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-secondary-300 hover:text-primary-500 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-secondary-300">Conferencias</li>
              <li className="text-secondary-300">Team Building</li>
              <li className="text-secondary-300">Lanzamientos</li>
              <li className="text-secondary-300">Capacitaciones</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-secondary-300">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>Calle Principal 123, Ciudad, País</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-secondary-300">
                <FaEnvelope />
                <span>info@premiumevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>
            &copy; {currentYear} Premium Events. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
