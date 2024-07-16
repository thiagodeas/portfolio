import Image from "next/image"
import { FaFileAlt } from "react-icons/fa"
import { SocialMediaLinkAlt } from "./SocialMediaLinkAlt"

export const AboutSection = () => {
  return (
    <section id="sobre" className="flex w-full min-h-screen items-center justify-around">
      <div className="mt-20">
        <Image
        src="/assets/about.svg"
        alt="about-me-illustration"
        width={570}
        height={500}
         />
      </div>
      <div className="flex flex-col items-center justify-center w-[600px] text-center gap-y-5 pl-4 mt-14">
        <h2 className="text-title font-semibold text-light-blue tracking-[2px]">Sobre mim</h2>
        <p className="text-[1.1rem] tracking-wide">Meu nome é Thiago De Sousa Alves, tenho 22 anos e estou cursando o terceiro semestre em Análise e Desenvolvimento de Sistemas. Sou apaixonado por tecnologia e iniciei minha trajetória na programação com Python, logo depois me aprofundando em JavaScript, onde dediquei mais de um ano ao desenvolvimento Front-End.</p>
        <p className="text-[1.1rem] tracking-wide">Após essa experiência focada apenas em Front-End, decidi diversificar minhas habilidades e voltei meu foco para o Back-End. Atualmente, estou aprimorando meus conhecimentos em Node e Java, buscando me tornar um profissional cada vez mais capacitado e completo no desenvolvimento de software.</p>
        <SocialMediaLinkAlt
        href="/assets/Thiago.pdf"
        icon={FaFileAlt}
        >
        Download CV
        </SocialMediaLinkAlt>
      </div>
    </section>
  )
}