import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section id="contato" className="w-full min-h-screen flex justify-center items-center">
      <div className="mt-20 flex items-start justify-center flex-col">
        <h2 className="text-title font-bold text-primary-blue pb-3">Entre em contato</h2>
        <p className="text-xl text-primary-blue opacity-65">Sinta-se à vontade para entrar em contato comigo =)</p>

        <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center">
            <span className="text-x1 text-primary-blue opacity-75">No LinkedIn: </span>
            <a href="https://www.linkedin.com/in/thiagodsousa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
              <FiLinkedin className="text-3xl" />
              <span className="text-xl">/thiagodsousa</span>
            </a>
            </div>

            <div className="flex items-center justify-center">
             <span className="text-x1 text-primary-blue opacity-75">No Instagram: </span>
              <a href="https://www.instagram.com/thiagodeass/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
              <FiInstagram className="text-3xl" />
              <span className="text-xl">/thiagodeass</span>
              </a>
            </div>

            <div className="flex items-center justify-center">
            <span className="text-x1 text-primary-blue opacity-75">Por Email: </span>
            <a href="mailto:sousaalvesth@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <CgMail className="text-3xl" />
            <span className="text-xl">sousaalvesth</span>
            </a>
            </div>

            <div className="flex items-center justify-center">
            <span className="text-x1 text-primary-blue opacity-75">Visite meu GitHub: </span>
            <a href="https://github.com/thiagodeas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FiGithub className="text-3xl" />
            <span className="text-xl">/thiagodeas</span>
          </a>
              
            </div>

            
          
         
         
          <span>Ou, se preferir, me mande uma mensagem no WhatsApp: </span>
          <a href="https://api.whatsapp.com/send?phone=5585986988198&text=Oi,%20Thiago.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20de%20portf%C3%B3lio." 
          target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FaWhatsapp className="text-3xl" />
            <span className="text-xl">Vamos conversar!</span>
          </a>
        </div>
      </div>
        
        <Image
        src="/assets/contact-illustration.svg"
        alt="contact-illustration"
        height={300}
        width={350}
        className="flex items-center justify-center mt-12 ml-16"
        />
    </section>
  )
}