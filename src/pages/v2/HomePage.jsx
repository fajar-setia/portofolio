import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../../components/V2/Home/HeroSection";
import AboutSection from "../../components/V2/Home/AboutSection";
import ProjectSection from "../../components/V2/Home/ProjectSection";
import SkillsSection from "../../components/V2/Home/SkillsSection";

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis(
      { 
        lerp: 0.05, 
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }
    );
    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.__lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen px-4 md:px-8 lg:px-12 pb-16 flex flex-col gap-20 md:gap-32 max-w-[1500px] mx-auto relative box-border">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </div>
  );
}