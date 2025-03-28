"use client";

import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection = () => {
  
  return (
    <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pb-20 px-4" data-aos="fade-up">
      <h2 className="text-title font-semibold text-prim-text tracking-[2px] text-center mt-12 p-14 max400:text-[2.5rem]">
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
            backend="Back End: Java e Spring Boot."
        />

        <ProjectCard
            title="login-page"
            images={[
              { src: "/assets/login-page-p1.png", alt: "Page 1"},
              { src: "/assets/login-page-p2.png", alt: "Page 2"},
            ]}
            description="Aplicação FullStack de uma página de Login com autenticação."
            frontend="Front End: TypeScript, Angular e SCSS."
            backend="Back End: Java, Spring Boot, PostgreSQL e JWT para autenticação."
        />  
      </div>
    </section>
  );
};
