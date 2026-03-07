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
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider color="earth-cream" />
        <WeeklySpecials />
        <SectionDivider color="earth-linen" />
        <Events />
        <SectionDivider color="earth-cream" />
        <Menu />
        <SectionDivider color="earth-green-dark" />
        <Schedule />
        <SectionDivider color="earth-linen" />
        <AboutSection />
        <SectionDivider color="earth-cream" />
        <MapSection />
        <SectionDivider color="earth-brown" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
