"use client";

import { useRef, useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

const galleryItems = [
  {
    url: "/images/al-elmes-ULHxWq8reao-unsplash.webp",
    title: "Conferencia Empresarial",
    category: "Conferencias",
  },
  {
    url: "/images/andrea-mininni-VLlkOJdzLG0-unsplash.webp",
    title: "Evento Corporativo",
    category: "Conferencias",
  },
  {
    url: "/images/chuttersnap-Q_KdjKxntH8-unsplash.webp",
    title: "Team Building",
    category: "Team Building",
  },
  {
    url: "/images/lee-blanchflower-1dW1vEJLlCQ-unsplash.webp",
    title: "Networking Profesional",
    category: "Networking",
  },
  {
    url: "/images/marc-babin-aQWmCH_b3MU-unsplash.webp",
    title: "Capacitación Empresarial",
    category: "Capacitaciones",
  },
];

/*
  Layout: 2 rows, all items same height.
  Row 1: [img0 — 1col] [img1 — 1col] [img2 — 1col]
  Row 2: [img3 — 1.5col] [img4 — 1.5col]
  On mobile: single column, all same aspect ratio.
*/

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setSelectedImage(galleryItems[index].url);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const i = selectedIndex > 0 ? selectedIndex - 1 : galleryItems.length - 1;
    setSelectedIndex(i);
    setSelectedImage(galleryItems[i].url);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const i = selectedIndex < galleryItems.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(i);
    setSelectedImage(galleryItems[i].url);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowLeft") {
        const i =
          selectedIndex > 0 ? selectedIndex - 1 : galleryItems.length - 1;
        setSelectedIndex(i);
        setSelectedImage(galleryItems[i].url);
      }
      if (e.key === "ArrowRight") {
        const i =
          selectedIndex < galleryItems.length - 1 ? selectedIndex + 1 : 0;
        setSelectedIndex(i);
        setSelectedImage(galleryItems[i].url);
      }
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage, selectedIndex]);

  const GalleryCard = ({
    item,
    index,
  }: {
    item: (typeof galleryItems)[0];
    index: number;
  }) => (
    <div
      className={`relative group overflow-hidden rounded-2xl cursor-pointer h-full transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
      onClick={() => openLightbox(index)}
    >
      <img
        src={item.url}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500">
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <FaExpand className="text-white text-sm" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-500/80 backdrop-blur-sm text-white text-xs font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {item.category}
          </span>
          <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-primary-500/30 transition-all duration-500 pointer-events-none" />
    </div>
  );

  return (
    <section id="galeria" className="py-28 bg-secondary-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Momentos que <span className="gradient-text">Inspiran</span>
          </h2>
          <p className="text-lg text-secondary-400 max-w-2xl mx-auto">
            Cada imagen cuenta la historia de un evento irrepetible
          </p>
        </div>

        {/* Row 1: 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {galleryItems.slice(0, 3).map((item, index) => (
            <div key={index} className="aspect-[4/3]">
              <GalleryCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Row 2: 2 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.slice(3, 5).map((item, index) => (
            <div key={index + 3} className="aspect-[16/9]">
              <GalleryCard item={item} index={index + 3} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium tracking-wider">
            {selectedIndex + 1} / {galleryItems.length}
          </div>
          <button
            className="absolute left-4 text-white/50 hover:text-white text-3xl transition-colors z-10 p-4"
            onClick={goPrev}
          >
            <FaChevronLeft />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={galleryItems[selectedIndex].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">
                {galleryItems[selectedIndex].title}
              </h3>
              <p className="text-white/60 text-sm">
                {galleryItems[selectedIndex].category}
              </p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white/50 hover:text-white text-3xl transition-colors z-10 p-4"
            onClick={goNext}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
