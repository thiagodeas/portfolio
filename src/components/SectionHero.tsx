import Image from "next/image"
import {SocialMediaLink} from "./SocialMediaLink"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SectionHero = ()=>{
  return (
    <section className="w-full min-h-screen flex justify-around items-center">
      <div className="flex flex-col justify-center items-center mb-8 ml-8">
        <p className="text-[2.8rem] font-light">Thiago Sousa</p>
        <p className="text-6xl text-primary-blue font-extrabold text-cstm-1022px">Software Developer</p>
        <p></p>
        <div className="flex items-center justify-center gap-24 pt-8 text-center">
          <SocialMediaLink
            href="https://github.com/thiagodeas"
            icon={FaGithub}>
            GitHub
          </SocialMediaLink>
          <SocialMediaLink 
            href="https://www.linkedin.com/in/thiagodsousa/" 
            icon={FaLinkedin}>
            LinkedIn
          </SocialMediaLink>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 transform rotate-3">
        <Image
        src="/assets/profile.jpeg"
        alt="my-profile"
        width={400}
        height={400}
        className="rounded-[15px] border-primary-orange"
        />
      </div>
    </section>
  )
} 