import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Premium Events - Eventos Corporativos de Alto Impacto",
  description:
    "Especialistas en organización de eventos corporativos, conferencias, team building y capacitaciones empresariales. Soluciones integrales para tu empresa con más de 15 años de experiencia y 800+ eventos exitosos.",
  keywords:
    "eventos corporativos, conferencias empresariales, team building, capacitaciones, lanzamientos de producto, eventos de negocios, networking empresarial, organización de eventos, eventos profesionales, congresos empresariales",
  authors: [{ name: "Premium Events" }],
  creator: "Premium Events",
  publisher: "Premium Events",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.premiumevents.com",
    siteName: "Premium Events",
    title: "Premium Events - Eventos Corporativos de Alto Impacto",
    description:
      "Especialistas en organización de eventos corporativos, conferencias, team building y capacitaciones empresariales. +15 años de experiencia, 800+ eventos exitosos.",
    images: [
      {
        url: "/images/al-elmes-ULHxWq8reao-unsplash.webp",
        width: 1200,
        height: 630,
        alt: "Eventos corporativos profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Events - Eventos Corporativos de Alto Impacto",
    description:
      "Especialistas en organización de eventos corporativos. +15 años de experiencia, 800+ eventos exitosos.",
    images: ["/images/al-elmes-ULHxWq8reao-unsplash.webp"],
    creator: "@premiumevents",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: "https://www.premiumevents.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Premium Events",
    description:
      "Especialistas en organización de eventos corporativos, conferencias, team building y capacitaciones empresariales.",
    url: "https://www.premiumevents.com",
    logo: "https://www.premiumevents.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52-555-123-4567",
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["es", "en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Reforma 123",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "06600",
      addressCountry: "MX",
    },
    sameAs: [
      "https://www.facebook.com/premiumevents",
      "https://www.instagram.com/premiumevents",
      "https://www.linkedin.com/company/premiumevents",
      "https://twitter.com/premiumevents",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
    },
  };

  return (
    <html lang="es">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
