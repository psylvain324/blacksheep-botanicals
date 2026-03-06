/*
 * Black Sheep Botanicals - Home Page
 * Design: "Living Earth" — Organic Modernism meets Biophilic Design
 * Colors: Linen base, living greens, terracotta, golden amber, deep brown
 * Typography: Fraunces (display) + Outfit (body)
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WeeklySpecials from "@/components/WeeklySpecials";
import Events from "@/components/Events";
import Menu from "@/components/Menu";
import Schedule from "@/components/Schedule";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WaveDivider color="earth-cream" flip={false} />
        <WeeklySpecials />
        <WaveDivider color="earth-linen" flip={true} />
        <Events />
        <WaveDivider color="earth-cream" flip={false} />
        <Menu />
        <WaveDivider color="earth-green-dark" flip={true} />
        <Schedule />
        <WaveDivider color="earth-linen" flip={false} />
        <AboutSection />
        <WaveDivider color="earth-cream" flip={true} />
        <MapSection />
        <WaveDivider color="earth-brown" flip={false} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
