import Image from "next/image"

export const AboutSection = () => {
  return (
    <section className="flex w-full min-h-screen items-center justify-around">
      <div>
        <Image
        src="/assets/about.svg"
        alt="about-me-illustration"
        width={600}
        height={500}
         />
      </div>
      <div className=" flex flex-col items-center justify-center w-[600px] text-center gap-y-16">
        <h2 className="text-4xl font-semibold">Um pouco sobre mim</h2>
        <p className="text-[1.1rem] tracking-wide">Meu nome é Thiago De Sousa Alves, tenho 22 anos, atualmente estou cursando o terceiro semestre em Análise e Desenvolvimento de Sistemas e sou um apaixonado por tecnologia que decidiu seguir no caminho da programação. Meu primeiro contato com programação foi com Python e logo em seguida conheci o JavaScript, onde aprofundei meus estudos, passando mais de um ano focado no Front-End. <br />
        Após esse tempo me desenvolvendo no Front, resolvi investir uma maior parte do meu tempo para finalmente conhecer o Back-End. Desde então, sigo me aprimorando em Node e Java, com o intuito de me tornar um profissional cada vez mais capacitado.</p>
      </div>
    </section>
  )
}