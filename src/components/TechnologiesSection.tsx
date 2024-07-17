import { FaGitAlt, FaJava, FaReact } from "react-icons/fa"
import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAxios, SiInsomnia, SiMysql, SiStyledcomponents, SiTypescript } from "react-icons/si"
import { IconContainer } from "./IconContainer"

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="custom-container">
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px]">Tecnologias</h2>
        <p className="text-[1.2rem] w-[700px] mt-10 text-center">Desenvolvi um amplo conjunto de habilidades em várias tecnologias e ferramentas ao longo desse tempo, que abrangem desde linguagens de programação até metodologias de desenvolvimento, incluindo:
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10 border-b-2 border-dashed pb-4 border-soft-blue flex-wrap w-[700px] gap-y-6">

        <IconContainer>
          <IoLogoJavascript className="text-icons bg-yellow-400"/>
          <p className="text-light-blue">JavaScript</p>
        </IconContainer>
        
        <IconContainer>
          <SiTypescript className="text-icons text-blue-600"/>
          <p className="text-light-blue">TypeScript</p>
        </IconContainer>

        <IconContainer>
          <FaJava className="text-icons text-orange-700"/>
          <p className="text-light-blue">Java</p>
        </IconContainer>

        <IconContainer>
          <FaReact className="text-icons text-blue-400"/>
          <p className="text-light-blue">React</p>
        </IconContainer>

        <IconContainer>
          <SiStyledcomponents className="text-icons text-pink-700"/>
          <p className="text-light-blue">Styled Components</p>
        </IconContainer>

        <IconContainer>
          <RiTailwindCssFill className="text-icons text-light-blue"/>
          <p className="text-light-blue">Tailwind</p>
        </IconContainer>

        <IconContainer>
          <RiNextjsFill className="text-icons"/>
          <p className="text-light-blue">Next.js</p>
        </IconContainer>

        <IconContainer>
          <RiTailwindCssFill className="text-icons text-light-blue"/>
          <p className="text-light-blue">Node.js</p>
        </IconContainer>

        <IconContainer>
          <SiAxios className="text-icons text-primary-blue"/>
          <p className="text-light-blue">Axios</p>
        </IconContainer>

        <IconContainer>
          <IoLogoGithub className="text-icons"/>
          <p className="text-light-blue">GitHub</p>
        </IconContainer>

        <IconContainer>
          <FaGitAlt className="text-icons text-red-600"/>
          <p className="text-light-blue">Git</p>
        </IconContainer>

        <IconContainer>
          <SiInsomnia className="text-icons text-purple-800"/>
          <p className="text-light-blue">Insomnia</p>
        </IconContainer>

        <IconContainer>
          <SiMysql className="text-icons text-blue-800"/>
          <p className="text-light-blue">MySQL</p>
        </IconContainer>
      </div>
    </section>
  )
}