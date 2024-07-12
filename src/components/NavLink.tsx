import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({href, children}: NavLinkProps)  => {
  return (
    <Link href={href} className="hover:font-semibold text-link">{children}</Link>
  )

}