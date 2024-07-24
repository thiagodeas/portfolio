import { ReactNode } from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: React.ElementType;
  children: ReactNode;
}

export const SocialMediaLinkAlt = ({href, icon: Icon, children}: SocialMediaLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-med-gray w-48 h-10 text-center text-xl flex items-center justify-center content-center rounded-lg hover:bg-light-coral hover:scale-105 font-semibold transition duration-700 ease-in-out max550:w-40 max550:h-8">
      <Icon className="mr-2 text-xl max550:text-[1rem]" />
      {children}
    </a>
  )
}