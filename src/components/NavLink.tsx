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
      duration: 700,
      smooth: true,
      offset: -270,
    });
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleScroll}
      className="flex font-semibold text-link text-prim-text hover:text-details transition duration-500 ease-in-out no-underline focus:outline-none tracking-widest max715:text-[1rem] max375:text-[13px]"
    >
      {children}
    </a>
  );
};
