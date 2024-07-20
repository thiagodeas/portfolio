import Image from "next/image";
import { SocialMediaLink } from "./SocialMediaLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SectionHero = () => {
  return (
    <section id="inicio" className="w-full min-h-screen flex justify-around items-center mt-10">
      <div className="flex flex-col justify-center items-center ml-8">
        <p className="text-[2.8rem] font-light">Thiago Sousa</p>
        <p className="text-6xl text-medium-blue font-extrabold text-primary-blue">Software Developer</p>
        <p className="text-xl text-primary-blue opacity-45">Desenvolvedor apaixonado por tecnologia e inovação.</p>
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
        <div className="w-[600px] h-0 border-b-8 border-double border-light-coral mt-12"></div>
      </div>
          <div className="flex items-center justify-center transform rotate-3 border-[6px] rounded-md bg-light-coral border-light-coral">
            <Image
              src="/assets/profile.jpeg"
              alt="my-profile"
              width={400}
              height={400}
              className="rounded-xl border-primary-orange"
            />
          </div>
    </section>
  );
};
