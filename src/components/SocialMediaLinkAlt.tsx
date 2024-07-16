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
      className="bg-soft-blue w-48 h-10 text-center text-xl flex items-center justify-center content-center rounded-lg hover:bg-light-blue font-semibold transition duration-700 ease-in-out">
      <Icon className="mr-2 text-xl" />
      {children}
    </a>
  )
}