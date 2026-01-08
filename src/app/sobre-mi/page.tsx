"use client";
import { Reveal } from "@/components/reveal/Reveal";
import { User, GraduationCap, Code, Coffee } from "lucide-react";
import Image from 'next/image';
export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 pt-32 pb-20">
      {/* SECCIÓN PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Lado Izquierdo: Tu Foto o Ilustración */}
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Aquí puedes poner tu foto con <Image /> de Next.js */}
                <Image src="/imgs/leonardo.jpeg" alt="Leonardo Carrillo" width={300} height={300} className="rounded-full" />
                
              </div>
            </div>
          </Reveal>
        </div>

        {/* Lado Derecho: Tu Historia */}
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="text-5xl font-bold mb-6">Un poco sobre mí.</h1>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Soy un desarrollador apasionado por crear soluciones digitales que combinen
                funcionalidad con una experiencia de usuario excepcional. Mi viaje en el 
                código comenzó hace [X] años.
              </p>
              <p>
                Me especializo en el ecosistema de **JavaScript/TypeScript**, enfocado en 
                **React** y **Next.js**. Me encanta enfrentar retos técnicos y aprender 
                nuevas tecnologías constantemente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SECCIÓN DE DATOS EXTRA (Bento Grid Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <Reveal>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
            <GraduationCap className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Educación</h3>
            <p className="text-gray-400 text-sm">Ingeniería en Sistemas / Autodidacta enfocado en desarrollo web moderno.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
            <Code className="text-purple-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Filosofía</h3>
            <p className="text-gray-400 text-sm">Código limpio, escalable y siempre priorizando la accesibilidad para todos.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
            <Coffee className="text-orange-400 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Intereses</h3>
            <p className="text-gray-400 text-sm">Entusiasta del café de especialidad, los videojuegos indie y el open source.</p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}