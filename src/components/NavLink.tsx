"use client";

import { ReactNode } from "react";
import { scroller } from 'react-scroll';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    scroller.scrollTo(href, {
      duration: 700, // Tempo de rolagem em milissegundos
      smooth: true,
      offset: -270, // Ajuste o deslocamento conforme necessário
    });
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleScroll}
      className="flex font-semibold text-link text-white hover:text-light-coral transition duration-700 ease-in-out no-underline focus:outline-none tracking-widest max715:text-[1rem] max375:text-[13px]"
    >
      {children}
    </a>
  );
};
