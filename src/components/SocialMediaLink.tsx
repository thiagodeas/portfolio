import { ReactNode } from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ElementType;
  children: ReactNode;
}

export const SocialMediaLink = ({href, icon: Icon, children}: SocialMediaLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-med-gray w-40 h-10 text-center text-xl flex items-center justify-center content-center rounded-lg hover:bg-light-coral hover:scale-105 font-semibold transition-all duration-700 ease-in-out max520:w-32 max520:h-8 max520:text-[1.1rem] max400:text-[14px] max400:w-28 max400:h-6">
      <Icon className="mr-2 text-xl" />
      {children}
    </a>
  )
}