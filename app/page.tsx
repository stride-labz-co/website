import BottomBlur from "@/components/bottom-blur";
import AboutSection from "@/components/home/about-section";
import ContactSection from "@/components/home/contact";
import HeroSection from "@/components/home/hero-section";
import Numbers from "@/components/home/numbers";
import ProjectSection from "@/components/home/project-section";
import ServicesSection from "@/components/home/services-section";
import LenisScroller from "@/components/lenis";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <LenisScroller />
      <BottomBlur />
      <Nav />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <Numbers />
      <ContactSection />
    </>
  );
}
