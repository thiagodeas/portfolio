import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SectionHero } from "@/components/SectionHero";
import { TechnologiesSection } from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <>
      <SectionHero />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
    </>
  );
}
