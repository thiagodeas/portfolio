"use client";

import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({href, children}: NavLinkProps)  => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(href);

    if(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <a href={`#${href}`} onClick={handleScroll} className="font-semibold text-link text-white hover:text-soft-blue transition duration-700 ease-in-out no-underline focus:outline-none">{children}
    </a>
  )

}