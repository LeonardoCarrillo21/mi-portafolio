"use client";
import { useState, useEffect } from "react";
import { getGithubRepos } from "@/data/github";
import ProjectCard from "@/components/proyects/ProjectCard";
import { Reveal } from "@/components/reveal/Reveal";

export default function ListaProyectos(onlyDestacados: boolean = false) {
  // 1. Definimos nuestra "variable" que alimentará al componente
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 2. Alimentamos la variable una sola vez al cargar
    const fetchRepos = async () => {
      const data = await getGithubRepos(onlyDestacados);
      setProjects(data); 
    };
    fetchRepos();
  }, []);

  // 3. El componente se alimenta de 'projects' sin await
  return (
    <div>
        {projects.map((repo: any) => (
            <Reveal key={repo.id} width="100%">
                <ProjectCard 
                key={repo.id}
                title={repo.title}
                description={repo.description}
                link={repo.link}
                tags={repo.tags}
                image={repo.image}
                />
            </Reveal>
        ))}
    </div>
  );
}