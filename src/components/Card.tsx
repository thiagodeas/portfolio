import { IoLogoGithub } from "react-icons/io"

interface CardProps {
  name: string;
  description: string;
  html_url: string;
}

export const Card = ({ name, description, html_url } : CardProps) => {
  return (
    <div 
    className="bg-soft-blue w-[400px] h-[300px] rounded-[8px] flex flex-col items-center justify-between p-5 text-center shadow-md shadow-medium-blue"
    >
      <h3 className="font-semibold">{name}</h3>
      <p>{description}</p>
      <div className="flex items-center justify-center self-end">
        <a href={html_url} target="_blank noreferrer noopener"><IoLogoGithub className="w-10 h-10 cursor-pointer rounded-[4px] hover:bg-primary-blue hover:p-[2px] transition-all duration-700" /></a>
      </div>
    </div>
  )
}