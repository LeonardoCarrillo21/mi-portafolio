// src/app/page.tsx
"use client";
// import ProjectCard from "@/components/proyects/ProjectCard";
import Skills from "@/components/skills/Skills"; // Importar el componente Skills
import { Reveal } from "@/components/reveal/Reveal"; // Importamos el componente

import Link from 'next/link';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default  function Home() {
const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
          <Link href="/proyectos" className={`${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black'} px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition`}>
            Ver Proyectos
          </Link>
          <Link href="/contacto" className={`${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black'} px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition`}>
            Contacto
          </Link>
        </div>
      </section>
      </Reveal>


      {/* SECCIÓN DE PROYECTOS */}
      {/* {repos && repos.length > 0 && (
      <section id="proyectos" className="py-20">

        <Reveal width="100%">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section> )} */}

      {/* SECCIÓN DE SKILLS */}
      <Reveal width="100%">
        <Skills />
      </Reveal>
    </main>
  );
}