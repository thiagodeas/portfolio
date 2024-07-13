import Image from "next/image"
import {SocialMediaLink} from "./SocialMediaLink"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SectionHero = ()=>{
  return (
    <section className="w-full flex justify-around items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[2.8rem] font-light">Thiago Sousa</h3>
        <h2 className="text-6xl text-primary-orange font-extrabold">Software Developer</h2>
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
      <div>
        <Image
        src="/assets/profile.jpeg"
        alt="my-profile"
        width={400}
        height={400}
        className="rounded-[12px] mt-20"
        />
      </div>
    </section>
  )
} 