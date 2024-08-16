import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section id="contato" className="w-full min-h-screen flex justify-center items-center relative max1000:flex-col" data-aos="zoom-in-up" data-aos-duration="1500">
      <div className="mt-16 flex items-center justify-center flex-col">
        <h2 className="text-center text-title font-bold text-primary-blue pb-3 max700:text-[2.5rem] max700:mt-8 max367:text-[2rem]">Entre em contato</h2>
        <p className="text-center text-xl text-primary-blue opacity-65 pb-3 max575:text-[18px] max500:text-[1rem] max375:hidden">Sinta-se à vontade para entrar em contato comigo =)</p>
        <div className="flex flex-col justify-center items-center gap-4 border-2 border-light-coral border-dashed rounded-lg p-4 mt-4">
            <div className="flex items-center justify-center">
            <span className="text-x1 pr-2 max550:hidden">No LinkedIn: </span>
            <a href="https://www.linkedin.com/in/thiagodsousa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
              <FiLinkedin className="text-2xl" />
              <span className="text-xl">/thiagodsousa</span>
            </a>
            </div>

            <div className="flex items-center justify-center">
             <span className="text-x1 pr-2 max550:hidden">No Instagram: </span>
              <a href="https://www.instagram.com/thiagodeass/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
              <FiInstagram className="text-2xl" />
              <span className="text-xl">/thiagodeass</span>
              </a>
            </div>

            <div className="flex items-center justify-center">
            <span className="text-x1 pr-2 max550:hidden">Por Email: </span>
            <a href="mailto:sousaalvesth@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <CgMail className="text-2xl" />
            <span className="text-xl">sousaalvesth</span>
            </a>
            </div>

            <div className="flex items-center justify-center">
            <span className="text-x1 pr-2 max550:hidden">Visite meu GitHub: </span>
            <a href="https://github.com/thiagodeas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FiGithub className="text-2xl" />
            <span className="text-xl">/thiagodeas</span>
          </a>
            </div>
          <span className="max550:hidden">Ou, se preferir, me mande uma mensagem no WhatsApp: </span>
          <a href="https://api.whatsapp.com/send?phone=5585986988198&text=Oi,%20Thiago.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20de%20portf%C3%B3lio." 
          target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FaWhatsapp className="text-3xl" />
            <span className="text-xl">Vamos bater um papo!</span>
          </a>
        </div>
      </div>
        
        <Image
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Technologist%20Medium%20Skin%20Tone.png"
        alt="contact-illustration"
        height={300}
        width={350}
        className="flex items-center justify-center mt-12 ml-20 max1000:ml-0 w-[350px] h-[300px] max700:w-[300px] max700:h-[250px]"
        />
    </section>
  )
}