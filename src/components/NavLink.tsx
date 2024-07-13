import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({href, children}: NavLinkProps)  => {
  return (
    <Link href={href} className="font-semibold text-link text-white hover:text-primary-gray transition duration-500 ease-in-out">{children}</Link>
  )

}