import Link from "next/link"
import { NavLink } from "./NavLink"

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center h-20 bg-primary-orange px-12">
      <Link href="/" >
      <span className="text-span font-extrabold tracking-[3px] text-white">thiagodeas</span>
      </Link>
      <nav className="flex items-center gap-5 tracking-wider flex-wrap">
         <NavLink href="/">Início</NavLink>
         <NavLink href="/sobre">Sobre mim</NavLink>
         <NavLink href="/tecnologias">Tecnologias</NavLink>
         <NavLink href="/projetos">Projetos</NavLink>
         <NavLink href="/contato">Contato</NavLink>
      </nav>
    </header>
  )
}