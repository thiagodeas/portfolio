"use client";

import { ProjectCard } from "@/components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      id="projetos"
      className="w-full min-h-screen flex flex-col justify-center items-center pb-20 px-4"
      data-aos="fade-up"
    >
      <h2 className="text-title font-semibold text-prim-text tracking-[2px] text-center mt-12 p-14 max480:text-[2.5rem]">
        Projetos
      </h2>
      <div className="flex items-center justify-center gap-24 flex-wrap">
        <ProjectCard
          title="curriculum-maker"
          images={[
            { src: "/assets/curriculum-maker-p1.png", alt: "Page 1" },
            { src: "/assets/curriculum-maker-p2.png", alt: "Page 2" },
            { src: "/assets/curriculum-maker-p3.png", alt: "Page 3" },
          ]}
          description="Aplicação Full Stack que gera um currículo minimalista em PDF através dos dados do usuário."
          frontend="Front End: React, TypeScript e Styled Components."
          backend="Back End: Java, Spring Boot, Docker e JUnit."
        />

        <ProjectCard
          title="qrcode-generator"
          images={[
            { src: "/assets/qrcode-p1.png", alt: "Page 1" },
            { src: "/assets/qrcode-p2.png", alt: "Page 2" },
            { src: "/assets/qrcode-p3.png", alt: "Page 3" },
          ]}
          description="API para geração e armazenamento de QR Codes no AWS S3, aplicando conceitos de Arquitetura Hexagonal para desacoplar lógica de negócio e infraestrutura."
          backend="Back End: Java, Spring Boot, Docker e AWS SDK."
        />

        <ProjectCard
          title="realtime-chat"
          images={[
            { src: "/assets/chat-p1.png", alt: "Page 1" },
            { src: "/assets/chat-p2.png", alt: "Page 2" },
            { src: "/assets/chat-p3.png", alt: "Page 3" },
          ]}
          description="Aplicação de bate-papo em tempo real desenvolvida com Socket.io."
          frontend="Front End: React, TypeScript e Tailwind CSS."
          backend="Back End: Node + Express."
        />

        <ProjectCard
          title="e-commerce"
          images={[
            { src: "/assets/ecommerce-p1.png", alt: "Page 1" },
            { src: "/assets/ecommerce-p2.png", alt: "Page 2" },
            { src: "/assets/ecommerce-p3.png", alt: "Page 3" },
          ]}
          description="Aplicação Full Stack de um e-commerce."
          frontend="Front End: Next.js, TypeScript e shadcn/ui."
          backend="Back End: NestJS, MongoDB, Docker, Jest para testes unitários e JWT para autenticação."
        />

        <ProjectCard
          title="cygni-tasks"
          images={[
            { src: "/assets/cygni-p1.png", alt: "Page 1" },
            { src: "/assets/cygni-p2.png", alt: "Page 2" },
            { src: "/assets/cygni-p3.png", alt: "Page 3" },
          ]}
          description="Aplicação Full Stack de um gerenciador de tarefas."
          frontend="Front End: React, TypeScript e Tailwind CSS."
          backend="Back End: Java, Spring Boot, MySQL, Docker e JWT para autenticação."
        />

        <ProjectCard
          title="stock-manager"
          images={[{ src: "/assets/api-laravel.png", alt: "Page 1" }]}
          description="Sistema de gerenciamento de estoque para registro de produtos, rastreamento de inventário e geração de relatórios em PDF."
          backend="Back End: PHP, Laravel, MySQL, Docker e PHPUnit."
        />
      </div>
    </section>
  );
};
