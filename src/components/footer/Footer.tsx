"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="border-t border-white/10 bg-black py-12 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Izquierdo: Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">¿Tienes un proyecto en mente?</h2>
            <p className="text-gray-400 max-w-sm">
              Estoy disponible para nuevas oportunidades y colaboraciones. 
              ¡Hablemos de cómo puedo ayudarte!
            </p>
          </div>

          {/* Lado Derecho: Enlaces y Redes */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-5">
              <a href="https://github.com/LeonardoCarrillo21" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-javier-carrillo-martinez-software-developer" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:carrillomartinezleonardojavier@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <a 
              href="mailto:carrillomartinezleonardojavier@gmail.com" 
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all"
            >
              Enviar correo
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} LeonardoCarrillo — Hecho con Next.js 15</p>
        </div>
      </div>
    </footer>
  );
}