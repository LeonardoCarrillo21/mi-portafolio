// src/app/proyectos/page.tsx
import ProjectCard from "@/components/proyects/ProjectCard";
import { Reveal } from "@/components/reveal/Reveal";
import { getGithubRepos } from "@/data/github";
import Image from 'next/image';
// import ListaProyectos from "@/_lib/proyectos/listaproyectos";

// export default function ProyectosPage() {
export default async function ProyectosPage() {
  const repos = await getGithubRepos();
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      <Reveal width="100%">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Mis Proyectos</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Una colección de trabajos donde he aplicado mis conocimientos en 
            desarrollo web, desde aplicaciones full-stack hasta experimentos creativos.
          </p>
          <p className="text-gray-400 text-lg max-w-2xl">
            Puedes revisar los proyectos con detenimiento en Git Hub,
          </p>

          <p className="text-gray-500 text-lg max-w-2xl py-4 inline-flex items-center gap-2">
            <Image src="/imgs/robot.svg" alt="GitHub" width={20} height={20} />
            estos proyectos se agregan automaticamente desde mi cuenta de Git Hub.
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {repos.map((repo: any) => (
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
        {/* <ListaProyectos onlyDestacados={false} /> */}
      </div>
    </main>
  );
}