import { IoLogoGithub } from "react-icons/io";

export interface CardProps {
  name: string;
  description: string;
  html_url: string;
  languages?: string[];
}

export const Card = ({ name, description, html_url, languages }: CardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-soft-blue w-[300px] rounded-[8px] flex flex-col items-center justify-between p-5 text-center shadow-md shadow-light-blue">
        <h3 className="font-semibold">{name}</h3>
        <p>{description}</p>
        <div className="flex items-center mt-4">
          <a href={html_url} target="_blank" rel="noreferrer noopener" className="flex items-center gap-x-3 p-[8px] rounded-[6px] hover:bg-light-blue transition-all duration-700">
            Acessar repositório: <IoLogoGithub className="w-8 h-8 cursor-pointer rounded-[4px]" />
          </a>
        </div>
      </div>
      {languages && languages.length > 0 && (
        <div className="bg-soft-blue mt-4  px-3 py-1 rounded-[4px] w-fit text-sm italic">
          Linguagens: {languages.join(", ")}
        </div>
      )}
    </div>
  );
};
