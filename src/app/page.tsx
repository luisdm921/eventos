import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import EventCTA from "@/components/sections/EventCTA";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Benefits />
      <EventCTA />
      <Testimonials />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
