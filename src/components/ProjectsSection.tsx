"use client";

import { Card, CardProps } from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProjectsSection = () => {
  const [repositories, setRepositories] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/thiagodeas/repos');
        const repos = response.data;

          const reposWithLanguages = await Promise.all(repos.map(async (repo : CardProps)  => {
          const languagesResponse = await axios.get(`https://api.github.com/repos/thiagodeas/${repo.name}/languages`);
          return {
            ...repo,
            languages: Object.keys(languagesResponse.data)
          };
        }));

        setRepositories(reposWithLanguages);
        setLoading(false);

      } catch (error) {
        console.error("Houve um erro na requisição dos dados: ", error);
      }
    };
    fetchRepositories();
  }, []);

  return (
    <section id="projetos" className="w-full min-h-screen flex flex-col justify-center items-center pt-36 pb-20 px-4">
      <h2 className="text-title font-semibold text-medium-blue tracking-[2px] text-center pb-12">Projetos</h2>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {loading && <p>Carregando projetos...</p>}
        {repositories && repositories.length > 0 ? 
        (repositories.map((r) => (
          <Card
            key={r.name}
            name={r.name}
            description={r.description}
            html_url={r.html_url}
            languages={r.languages}
          />
        )))
        : null}
      </div>
    </section>
  );
};
