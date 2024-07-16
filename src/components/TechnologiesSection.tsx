import { FaGitAlt, FaJava, FaReact } from "react-icons/fa"
import { IoLogoGithub, IoLogoJavascript, IoLogoNodejs } from "react-icons/io"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAxios, SiInsomnia, SiMysql, SiStyledcomponents, SiTypescript } from "react-icons/si"

export const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex flex-col justify-center items-center gap-y-20">
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-title font-semibold text-primary-blue tracking-[2px]">Tecnologias</h2>
        <p className="text-[1.2rem] w-[700px] mt-10 text-center">Desenvolvi um amplo conjunto de habilidades em várias tecnologias e ferramentas ao longo desse tempo, que abrangem desde linguagens de programação até metodologias de desenvolvimento, incluindo:
        </p>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-10 border-b-2 border-dashed pb-2 border-soft-blue">
        <IoLogoJavascript className="text-icons bg-yellow-400"/>
        <SiTypescript className="text-icons text-blue-600"/>
        <FaJava className="text-icons text-orange-700"/>
        <FaReact className="text-icons text-blue-400"/>
        <SiStyledcomponents className="text-icons text-pink-700"/>
        <RiTailwindCssFill className="text-icons text-light-blue"/>
        <RiNextjsFill className="text-icons"/>
        <IoLogoNodejs className="text-icons bg-green-500 rounded-[3px] text-gray-100"/>
        <SiAxios className="text-icons text-primary-blue"/>
        <IoLogoGithub className="text-icons"/>
        <FaGitAlt className="text-icons text-red-600"/>
        <SiInsomnia className="text-icons text-purple-800"/>
        <SiMysql className="text-icons text-blue-800"/>
      </div>
    </section>
  )
}