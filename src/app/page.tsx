// src/app/page.tsx
import ProjectCard from "@/components/proyects/ProjectCard";
import { projects } from "@/data/projects";
import Skills from "@/components/skills/Skills"; // Importar
import { Reveal } from "@/components/reveal/Reveal"; // Importamos el componente

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      {/* Sección Hero (ya la tienes) */}
      <Reveal width="100%">
      <section className="py-20 flex flex-col items-center text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6">
          Hola, soy <span className="text-blue-500">Leonardo Carrillo</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Desarrollador Full Stack apasionado por crear experiencias digitales 
          minimalistas y eficientes. Especializado en React, Next.js y Node.
        </p>
        <div className="mt-10 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Ver Proyectos
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
            Contacto
          </button>
        </div>
      </section>
      </Reveal>


      {/* SECCIÓN DE PROYECTOS */}
      <section id="proyectos" className="py-20">

        <Reveal width="100%">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Reveal width="100%" key={project.id}>
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE SKILLS */}
      <Reveal width="100%">
        <Skills />
      </Reveal>
    </main>
  );
}