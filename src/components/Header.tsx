import Link from "next/link"

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center h-20 bg-primary-orange text-white px-12">
      <Link href="/" >
      <span className="text-span font-extrabold tracking-[3px]">thiagodeas</span>
      </Link>
      <nav className="flex items-center gap-5 tracking-wider flex-wrap">
        <Link href="" className="hover:font-semibold text-link">Início</Link>
        <Link href="/sobre" className="hover:font-semibold text-link">Sobre mim</Link>
        <Link href="/tecnologias" className="hover:font-semibold text-link">Tecnologias</Link>
        <Link href="/projetos" className="hover:font-semibold text-link">Projetos</Link>
        <Link href="/contato" className="hover:font-semibold text-link">Contato</Link>
      </nav>
    </header>
  )
}