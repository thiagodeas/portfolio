import { FaGitAlt, FaJava, FaReact } from "react-icons/fa"
import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAxios, SiInsomnia, SiMysql, SiStyledcomponents, SiTypescript } from "react-icons/si"
import { IconContainer } from "./IconContainer"

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex justify-center items-center gap-x-20">
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px] mt-8">Tecnologias</h2>
        <p className="text-[1.1rem] w-[700px] mb-10 mt-4 text-center">Desenvolvi um amplo conjunto de habilidades em várias tecnologias e ferramentas ao longo desse tempo, que abrangem desde linguagens de programação até metodologias de desenvolvimento, incluindo:
        </p>
        <div className="flex flex-row items-center justify-center gap-x-10 border-b-2 border-dashed pb-4 border-soft-blue flex-wrap w-[900px] gap-y-10">
          <IconContainer>
            <IoLogoJavascript className="text-icons bg-yellow-400 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">JavaScript</p>
          </IconContainer>

          <IconContainer>
            <SiTypescript className="text-icons text-blue-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">TypeScript</p>
          </IconContainer>

          <IconContainer>
            <FaJava className="text-icons text-orange-700 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Java</p>
          </IconContainer>

          <IconContainer>
            <FaReact className="text-icons text-blue-400 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">React</p>
          </IconContainer>

          <IconContainer>
            <SiStyledcomponents className="text-icons text-pink-700 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Styled Components</p>
          </IconContainer>

          <IconContainer>
            <RiTailwindCssFill className="text-icons text-turq-blue transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Tailwind</p>
          </IconContainer>

          <IconContainer>
            <RiNextjsFill className="text-icons transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Next.js</p>
          </IconContainer>

          <IconContainer>
            <IoLogoNodejs className="text-icons text-green-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Node.js</p>
          </IconContainer>

          <IconContainer>
            <SiAxios className="text-icons text-primary-blue transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Axios</p>
          </IconContainer>

          <IconContainer>
            <IoLogoGithub className="text-icons transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">GitHub</p>
          </IconContainer>

          <IconContainer>
            <FaGitAlt className="text-icons text-red-600 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Git</p>
          </IconContainer>

          <IconContainer>
            <SiInsomnia className="text-icons text-purple-800 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">Insomnia</p>
          </IconContainer>

          <IconContainer>
            <SiMysql className="text-icons text-blue-800 transition-all ease-in-out duration-500"/>
            <p className="text-primary-blue text-sm">MySQL</p>
          </IconContainer>
        </div>
      </div>
    </section>
  )
}