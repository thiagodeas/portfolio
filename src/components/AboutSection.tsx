import Image from "next/image"
import { FaFileAlt } from "react-icons/fa"
import { SocialMediaLinkAlt } from "./SocialMediaLinkAlt"

export const AboutSection = () => {
  return (
    <section id="sobre" className="flex w-full min-h-screen items-center justify-center gap-x-20 max1070:flex-col-reverse" data-aos="zoom-in-up">
      <div className="mt-20 max1070:mt-0">
        <Image
        src="/assets/about-illustration.svg"
        alt="about-illustration"
        width={570}
        height={500}
        className="h-[500px] w-[450px] mr-6 max1070:hidden"
         />
      </div>
      <div className="flex flex-col items-center justify-center w-[600px] text-center gap-y-5 mt-14 max675:w-[550px] max620:w-[500px] max550:w-[450px] max480:w-[400px] max425:w-[350px] max425:gap-y-2 max375:w-[300px]">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] max700:text-[2.5rem] max480:text-[2rem]">Sobre mim</h2>
        <p className="text-[1.1rem] tracking-wide max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">Meu nome é Thiago De Sousa Alves, tenho 23 anos e estou cursando o terceiro semestre em Análise e Desenvolvimento de Sistemas. Sou apaixonado por tecnologia e iniciei minha trajetória na programação com Python, logo depois me aprofundando em JavaScript, onde dediquei mais de um ano ao desenvolvimento Front-End.</p>
        <p className="text-[1.1rem] tracking-wide max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">Após essa experiência focada apenas em Front-End, decidi diversificar minhas habilidades e voltei meu foco para o Back-End. Atualmente, estou aprimorando meus conhecimentos em Node e Java, buscando me tornar um profissional cada vez mais capacitado e completo no desenvolvimento de software.</p>
        <SocialMediaLinkAlt
        href="/assets/Thiago.pdf"
        icon={FaFileAlt}
        >
        <span className="max550:text-[15px]">Download CV</span>
        </SocialMediaLinkAlt>
      </div>
    </section>
  )
}