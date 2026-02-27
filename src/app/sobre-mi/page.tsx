"use client";
import { Reveal } from "@/components/reveal/Reveal";
import { User, GraduationCap, Code, Coffee } from "lucide-react";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      {/* SECCIÓN PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Lado Izquierdo: Tu Foto o Ilustración */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-square rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Aquí puedes poner tu foto con <Image /> de Next.js */}
                <Image src="/imgs/MiFoto.jpeg" alt="Leonardo Carrillo" width={300} height={300} />
                
              </div>
            </div>
          </Reveal>
        </div>

        {/* Lado Derecho: Tu Historia */}
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6">Un poco sobre mí.</h1>
            <div className={`dark:text-gray-300 text-gray-600 space-y-4 text-lg leading-relaxed`}>
              <p>
                Soy un desarrollador apasionado por crear soluciones digitales que combinen
                funcionalidad con una experiencia de usuario excepcional.
              </p>
              <p>
                Me especializo en el desarrollo de Soluciones web modernas utilizando frameworks Robustos Como Angular, React o Spring Boot.
                Desarrollo software Escalable y mantenible, siempre con un enfoque en la calidad del código y la experiencia del usuario.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SECCIÓN DE DATOS EXTRA (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <Reveal>
          <div className={`dark:text-gray-300 dark:bg-white/5 dark:border-white/10 text-gray-950 bg-white/30 border-gray-300 p-6 rounded-2xl  border  h-full`}>
            <GraduationCap className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Educación</h3>
            <p className="text-gray-400 text-sm">Ingeniería en Computación / Autodidacta enfocado en desarrollo web moderno.</p>
            <div className="flex items-center gap-2 mt-4">
              <p className="text-gray-400 text-sm">Universidad Autonoma del Estado de México</p>
              <Image src="/imgs/Logo_de_la_UAEMex.svg" alt="Leonardo Carrillo" width={40} height={40} />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className={`dark:text-gray-300 dark:bg-white/5 dark:border-white/10 text-gray-950 bg-white/30 border-gray-300 p-6 rounded-2xl  border  h-full`}>
            <Code className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Filosofía</h3>
            <p className="text-gray-400 text-sm">Código limpio, escalable y siempre priorizando la accesibilidad para todos.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className={`dark:text-gray-300 dark:bg-white/5 dark:border-white/10 text-gray-950 bg-white/30 border-gray-300 p-6 rounded-2xl  border  h-full`}>
            <Coffee className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Intereses</h3>
            <p className="text-gray-400 text-sm">Entusiasta del café de especialidad, los videojuegos indie y el open source.</p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}