import Image from "next/image";
import { ContactForm } from "./ContactForm"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section id="contato" className="w-full min-h-screen flex justify-center items-center">
      <div className="mt-20 flex items-start justify-center flex-col">
        <h2 className="text-title font-bold text-primary-blue pb-3">Entre em contato</h2>
        <ContactForm />
      </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <a href="https://www.linkedin.com/in/thiagodsousa/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
              <FiLinkedin className="text-3xl" />
              <span className="text-xl">/thiagodsousa</span>
            </a>
          <a href="https://github.com/thiagodeas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FiGithub className="text-3xl" />
            <span className="text-xl">/thiagodeas</span>
          </a>
          <a href="https://www.instagram.com/thiagodeass/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2 rounded-lg p-1 hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">
            <FiInstagram className="text-3xl" />
            <span className="text-xl">/thiagodeass</span>
          </a>
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