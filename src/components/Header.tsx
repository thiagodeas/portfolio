import Link from "next/link"
import { NavLink } from "./NavLink"

export const Header = () => {
  return (
    <header className="w-full flex justify-around items-center h-20 bg-primary-orange pl-3 pr-3">
      <Link href="/" className="focus:outline-none">
      <span className="text-span font-extrabold tracking-[3px] text-white">thiagodeas</span>
      </Link>
      <nav className="flex justify-center items-center gap-5 flex-wrap">
         <NavLink href="/">Início</NavLink>
         <NavLink href="/sobre">Sobre mim</NavLink>
         <NavLink href="/tecnologias">Tecnologias</NavLink>
         <NavLink href="/projetos">Projetos</NavLink>
         <NavLink href="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}