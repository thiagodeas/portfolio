  "use client";
  
  import { Card, CardProps } from "./Card"
  import { useEffect, useState } from "react";
  import axios from "axios";

  export const ProjectsSection = () => {
    const [repositories, setRepositories] = useState<CardProps[]>([]);

    useEffect(() => {
      const fetchRepositories = async () => {
        try {
          const response = await axios.get('https://api.github.com/users/thiagodeas/repos');
          setRepositories(response.data);
        } catch (error) {
          console.error("Houve um erro na requisição dos dados: ", error);
        }
      }
      fetchRepositories();
    }, []);

    return (
      <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4">
        <h2 className="text-title font-semibold text-medium-blue tracking-[2px] text-center pb-12">Projetos</h2>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {repositories.map((r) => (
            <Card
              key={r.name}
              name={r.name}
              description={r.description}
              html_url={r.html_url}
            />
          ))}
        </div>
      </section>
    )
  }