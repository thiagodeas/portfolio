import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="sobre" className="flex w-full min-h-screen items-center justify-center gap-x-20 max1070:flex-col-reverse" data-aos="zoom-in-up">
      <div className="max1070:mt-0">
      <Image
          src="/assets/profile.jpeg"
          alt="my-profile"
          width={300}
          height={300}
          className="rounded-full border-primary-orange max1060:w-[350px] max1060:h-[350px] max700:w-[300px] max700:h-[300px] max675:hidden"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-[600px] text-center gap-y-5 max675:w-[550px] max620:w-[500px] max550:w-[450px] max480:w-[400px] max425:w-[350px] max425:gap-y-2 max375:w-[300px]">
        <h2 className="text-title font-semibold text-prim-text tracking-[2px] max700:text-[2.5rem] max480:text-[2rem]">Sobre mim</h2>
        <p className="text-[1.1rem] text-details tracking-wide max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">Tenho 23 anos, sou desenvolvedor Full Stack autodidata apaixonado por tecnologia. Estou no último semestre em Análise e Desenvolvimento de Sistemas e gosto bastante de trabalhar em equipe, resolver problemas complexos e me aprimorar constantemente para entregar resultados cada vez melhores.</p>
        <p className="text-[1.1rem] text-details tracking-wide max700:text-[1rem] max700:tracking-[0px] max425:text-[15px] max400:text-[14px]">Atualmente Estagiário de Desenvolvimento de Software na Fortics Tecnologia.</p>
      </div>
    </section>                                                                                                                  
  )
}