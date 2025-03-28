"use client";

import { ReactNode, useEffect, useState } from "react";
import { scroller } from "react-scroll";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();

    scroller.scrollTo(href, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -(headerHeight + 20),
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
