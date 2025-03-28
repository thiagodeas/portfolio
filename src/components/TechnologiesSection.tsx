import { FaAngular, FaAws, FaDocker, FaGitAlt, FaJava, FaLaravel, FaReact } from "react-icons/fa"
import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill, RiVuejsLine } from "react-icons/ri"
import { SiAxios, SiInsomnia, SiMongodb, SiMysql, SiPostgresql, SiPostman, SiSpringboot, SiStyledcomponents, SiTypescript } from "react-icons/si"
import { IconContainer } from "./IconContainer"
import { MdOutlinePhp } from "react-icons/md"
import { SiNestjs } from "react-icons/si";


export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex justify-center items-center gap-x-20" data-aos="zoom-in-up">
      <div className="flex flex-col items-center justify-center mt-10 max870:mt-20 w-[600px]">
        <h2 className="text-title font-semibold text-prim-text tracking-[2px] max620:text-[2.5rem] max480:text-[2rem]">Tecnologias</h2>
        <p className="text-[1.1rem] w-[700px] mb-10 text-details mt-4 text-center max720:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max400:text-[15px] max400:w-[300px]">Desenvolvi um amplo conjunto de habilidades em várias tecnologias e ferramentas ao longo da minha jornada até aqui, incluindo:
        </p>
        <div className="flex flex-row items-center justify-center gap-x-10 pb-4 border-soft-blue flex-wrap w-[900px] gap-y-10 max870:w-[600px] max620:w-[500px] max550:w-[450px] max480:w-[350px] max367:w-[300px]">
          <IconContainer>
            <IoLogoJavascript className="text-icons bg-yellow-400 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">JavaScript</p>
          </IconContainer>

          <IconContainer>
            <SiTypescript className="text-icons text-blue-600 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">TypeScript</p>
          </IconContainer>

          <IconContainer>
            <FaReact className="text-icons text-blue-400 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">React</p>
          </IconContainer>

          <IconContainer>
            <RiNextjsFill className="text-icons text-sec-text transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Next.js</p>
          </IconContainer>

          <IconContainer>
            <IoLogoNodejs className="text-icons text-green-600 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Node.js</p>
          </IconContainer>

          <IconContainer>
            <SiNestjs className="text-icons text-red-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">NestJS</p>
          </IconContainer>

          <IconContainer>
            <FaJava className="text-icons text-orange-700 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Java</p>
          </IconContainer>

          <IconContainer>
            <SiSpringboot className="text-icons text-green-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Spring Boot</p>
          </IconContainer>

          <IconContainer>
            <MdOutlinePhp className="text-icons text-purple-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">PHP</p>
          </IconContainer>

          <IconContainer>
            <FaDocker className="text-icons text-blue-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Docker</p>
          </IconContainer>

          <IconContainer>
            <SiMongodb className="text-icons text-green-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">MongoDB</p>
          </IconContainer>

          <IconContainer>
            <SiMysql className="text-icons text-prim-text transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">MySQL</p>
          </IconContainer>

          <IconContainer>
            <SiPostgresql className="text-icons text-blue-500 transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">Postgresql</p>
          </IconContainer>

          <IconContainer>
            <FaAws className="text-icons text-prim-text transition-all ease-in-out duration-500"/>
            <p className="text-details text-sm">AWS</p>
          </IconContainer>

        </div>
      </div>
    </section>
  )
}