// src/app/proyectos/page.tsx
import ProjectCard from "@/components/proyects/ProjectCard";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal/Reveal";

export default function ProyectosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      <Reveal width="100%">
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Mis Proyectos</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Una colección de trabajos donde he aplicado mis conocimientos en 
            desarrollo web, desde aplicaciones full-stack hasta experimentos creativos.
          </p>
        </header>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Reveal key={project.id} width="100%">
            {/* Aquí podrías crear una tarjeta más grande si quisieras */}
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}