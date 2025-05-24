"use client";

import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection = () => {
  
  return (
    <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pb-20 px-4" data-aos="fade-up">
      <h2 className="text-title font-semibold text-prim-text tracking-[2px] text-center mt-12 p-14 max480:text-[2.5rem]">
        Projetos
      </h2>
      <div className="flex items-center justify-center gap-24 flex-wrap">
        <ProjectCard
            title="e-commerce"
            images={[
              { src: "/assets/ecommerce-p1.png", alt: "Page 1"},
              { src: "/assets/ecommerce-p2.png", alt: "Page 2"},
              { src: "/assets/ecommerce-p3.png", alt: "Page 3"},
            ]}
            description="Aplicação Full Stack de um e-commerce."
            frontend="Front End: Next.js, TypeScript e shadcn/ui."
            backend="Back End: NestJS, MongoDB, Docker, Jest para testes unitários e JWT para autenticação."
        />

        <ProjectCard
            title="cygni-tasks"
            images={[
              { src: "/assets/cygni-p1.png", alt: "Page 1"},
              { src: "/assets/cygni-p2.png", alt: "Page 2"},
              { src: "/assets/cygni-p3.png", alt: "Page 3"},
            ]}
            description="Aplicação Full Stack de um gerenciador de tarefas."
            frontend="Front End: React.js, TypeScript e Tailwind CSS."
            backend="Back End: Java, Spring Boot, MySQL, Docker e JWT para autenticação."
        />

        <ProjectCard
            title="curriculum-maker"
            images={[
              { src: "/assets/curriculum-maker-p1.png", alt: "Page 1"},
              { src: "/assets/curriculum-maker-p2.png", alt: "Page 2"},
              { src: "/assets/curriculum-maker-p3.png", alt: "Page 3"},
            ]}
            description="Aplicação Full Stack que gera um currículo minimalista em PDF através dos dados do usuário."
            frontend="Front End: React, TypeScript e Styled Components."
            backend="Back End: Java, Spring Boot, Docker e JUnit."
        />

        <ProjectCard
            title="stock-manager"
            images={[
              { src: "/assets/api-laravel.png", alt: "Page 1"},
            ]}
            description="Sistema de gerenciamento de estoque para registro de produtos, rastreamento de inventário e geração de relatórios em PDF."
            frontend="Front End: React + Inteligência Artificial."
            backend="Back End: PHP, Laravel, MySQL, Docker e PHPUnit."
        />  
      </div>
    </section>
  );
};
