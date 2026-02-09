"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryItems = [
  {
    type: "image",
    url: "/images/al-elmes-ULHxWq8reao-unsplash.webp",
    title: "Conferencia Empresarial",
    category: "Conferencias",
  },
  {
    type: "image",
    url: "/images/andrea-mininni-VLlkOJdzLG0-unsplash.webp",
    title: "Evento Corporativo",
    category: "Conferencias",
  },
  {
    type: "image",
    url: "/images/chuttersnap-Q_KdjKxntH8-unsplash.webp",
    title: "Team Building",
    category: "Team Building",
  },
  {
    type: "image",
    url: "/images/lee-blanchflower-1dW1vEJLlCQ-unsplash.webp",
    title: "Networking Profesional",
    category: "Networking",
  },
  {
    type: "image",
    url: "/images/marc-babin-aQWmCH_b3MU-unsplash.webp",
    title: "Capacitación Empresarial",
    category: "Capacitaciones",
  },
];

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [filter, setFilter] = useState("Todos");

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

  const categories = [
    "Todos",
    "Conferencias",
    "Team Building",
    "Lanzamientos",
    "Capacitaciones",
    "Reconocimientos",
    "Networking",
  ];

  const filteredItems =
    filter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const handleImageClick = (url: string, index: number) => {
    setSelectedImage(url);
    setSelectedIndex(index);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredItems[newIndex].url);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex =
      selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredItems[newIndex].url);
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "ArrowLeft") {
        const newIndex =
          selectedIndex > 0 ? selectedIndex - 1 : filteredItems.length - 1;
        setSelectedIndex(newIndex);
        setSelectedImage(filteredItems[newIndex].url);
      } else if (e.key === "ArrowRight") {
        const newIndex =
          selectedIndex < filteredItems.length - 1 ? selectedIndex + 1 : 0;
        setSelectedIndex(newIndex);
        setSelectedImage(filteredItems[newIndex].url);
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex, filteredItems]);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Galería de Eventos
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto mb-8">
            Explora algunos de nuestros eventos más memorables
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-200 text-secondary-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] transition-all duration-300 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onClick={() => handleImageClick(item.url, index)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón cerrar */}
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-primary-500 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          {/* Contador */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-medium">
            {selectedIndex + 1} / {filteredItems.length}
          </div>

          {/* Botón anterior */}
          <button
            className="absolute left-4 text-white text-4xl hover:text-primary-500 transition-colors z-10 p-4"
            onClick={handlePrevious}
          >
            <FaChevronLeft />
          </button>

          {/* Imagen */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={filteredItems[selectedIndex].title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {/* Título de la imagen */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">
                {filteredItems[selectedIndex].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {filteredItems[selectedIndex].category}
              </p>
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            className="absolute right-4 text-white text-4xl hover:text-primary-500 transition-colors z-10 p-4"
            onClick={handleNext}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
