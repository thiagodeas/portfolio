import { AboutSection } from "@/components/AboutSection";
import { SectionHero } from "@/components/SectionHero";
import { TechnologiesSection } from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <div id="inicio">
      <SectionHero />
      <AboutSection />
      <TechnologiesSection />
    </div>
  );
}
