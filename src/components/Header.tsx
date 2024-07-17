import { NavLink } from "./NavLink"

export const Header = () => {
  return (
    <header className="w-full flex justify-around items-center h-20 bg-light-blue pl-3 pr-3 fixed top-0 left-0 z-50">
      <NavLink href="inicio">
      <span className="text-span font-extrabold tracking-[3px] text-white hover:text-soft-blue transition duration-500 ease-in-out no-underline focus:outline-none">&lt;thiagodeas /&gt;</span>
      </NavLink>
      <nav className="flex justify-center items-center gap-7 flex-wrap">
         <NavLink href="inicio">Início</NavLink>
         <NavLink href="sobre">Sobre mim</NavLink>
         <NavLink href="tecnologias">Tecnologias</NavLink>
         <NavLink href="projects">Projetos</NavLink>
         <NavLink href="contact">Contato</NavLink>
      </nav>
    </header>
  )
}