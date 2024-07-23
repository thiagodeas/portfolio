import { NavLink } from "./NavLink"

export const Header = () => {
  return (
    <header className="w-full flex justify-around items-center h-20 pl-3 pr-3 fixed top-0 left-0 z-50 bg-primary-blue">
      <NavLink href="inicio">
      <span className="text-[2.2rem] font-extrabold tracking-widest no-underline focus:outline-none">&lt; TS /&gt;</span>
      </NavLink>
      <nav className="flex justify-center items-center gap-7 flex-wrap">
         <NavLink href="inicio">Início</NavLink>
         <NavLink href="sobre">Sobre mim</NavLink>
         <NavLink href="tecnologias">Tecnologias</NavLink>
         <NavLink href="projetos">Projetos</NavLink>
         <NavLink href="contato">Contato</NavLink>
      </nav>
    </header>
  )
}