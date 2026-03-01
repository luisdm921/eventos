{/*
  CONVERSION FUNNEL ORDER:
  1. Hero — Hook with pain + promise + urgent CTA
  2. Clients — Instant social proof (trust bar)
  3. Benefits — WHY choose us (ROI, savings, results)
  4. Services — WHAT we solve (framed as solutions)
  5. Testimonials — Proof that it works (social proof deep)
  6. Process — HOW easy it is (reduce friction)
  7. EventCTA — Urgency/scarcity mid-page push
  8. Gallery — Visual proof
  9. About — Credibility backup
  10. Contact — Final conversion with urgency

  A/B TEST SUGGESTIONS:
  - Hero H1: "Eventos que Multiplican Resultados" vs "Deja de Perder Tiempo Organizando Eventos"
  - Hero CTA: "Cotiza Gratis en 5 Min" vs "Recibe tu Propuesta en 48h"
  - EventCTA: "Solo 3 fechas disponibles este mes" vs "Agenda antes del viernes y ahorra 15%"
  - Contact submit: "Recibir Cotización Sin Compromiso" vs "Quiero Mi Propuesta en 48h"
  - Navbar CTA: "Cotiza Gratis" vs "Agenda tu Consulta"
*/}
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import EventCTA from "@/components/sections/EventCTA";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Benefits />
      <Services />
      <Testimonials />
      <Process />
      <EventCTA />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
