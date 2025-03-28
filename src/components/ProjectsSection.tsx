"use client";

import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection = () => {
  
  return (
    <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pb-20 px-4" data-aos="zoom-in-up">
      <h2 className="text-title font-semibold text-prim-text tracking-[2px] text-center p-14 max400:text-[2.5rem]">
        Projetos
      </h2>

      <div className="flex items-center justify-center gap-x-24">
        <ProjectCard
            title="e-commerce"
            images={[
              { src: "/assets/ecommerce-p1.png", alt: "Page 1"},
              { src: "/assets/ecommerce-p2.png", alt: "Page 2"},
              { src: "/assets/ecommerce-p3.png", alt: "Page 3"},
            ]}
            description="Aplicação FullStack de um e-commerce."
            frontend="Front End: Next.js, TypeScript e shadcn/ui."
            backend="Back End: NestJS, MongoDB, Docker e Jest para testes unitários."
        />

        <ProjectCard
            title="cygni-tasks"
            images={[
              { src: "/assets/cygni-p1.png", alt: "Page 1"},
              { src: "/assets/cygni-p2.png", alt: "Page 2"},
              { src: "/assets/cygni-p3.png", alt: "Page 3"},
            ]}
            description="Aplicação FullStack de um gerenciador de tarefas."
            frontend="Front End: React.js, TypeScript e Tailwind CSS."
            backend="Back End: Java, Spring Boot, MySQL e Docker."
        />
      </div>
      
      
    </section>
  );
};
