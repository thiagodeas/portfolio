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
      className="bg-soft-blue w-32 h-10 text-center flex items-center justify-center content-center rounded-lg hover:bg-light-blue font-semibold transition duration-700 ease-in-out">
      <Icon className="mr-2 text-xl" />
      {children}
    </a>
  )
}