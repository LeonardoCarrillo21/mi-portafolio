"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"; // Importamos el ojo
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Navbar() {
  const { resolvedTheme, setTheme   } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  // Evita errores de hidratación esperando a que el componente se monte
  useEffect(() => {

    setMounted(true);

    // Función que detecta el movimiento del scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md"
    >
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ?`border-b border-gray-200 dark:border-white/10 dark:bg-black/70bg-white/70 backdrop-blur-md`  
          : " bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <Link href="/">Leonardo Carrillo</Link>
        </span>
        <div className="flex items-center gap-8">
        <div className={`flex gap-8 text-sm font-medium dark:text-gray-400text-gray-600`}>
          <Link href="/proyectos" className= {`hover:dark:text-white hover:text-black transition-colors hover:underline`}>Proyectos</Link>
          <Link href="/sobre-mi" className={`hover:dark:text-white hover:text-black transition-colors hover:underline`}>Sobre mí</Link>
          <Link href="/contacto" className={`hover:dark:text-white hover:text-black transition-colors hover:underline`}>Contacto</Link>
        </div>
        {/* BOTÓN DEL sol */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-gray-800 dark:text-white"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              resolvedTheme === "dark" ? <Moon size={22} className="text-gray-400" /> : <Sun size={22} className="text-amber-100" />
            ) : (
              <div className="w-22 h-22" /> // Un espacio vacío del mismo tamaño mientras carga
            )}
          </button>
        </div>
      </div>
    </nav>
    </motion.nav>
  );
}