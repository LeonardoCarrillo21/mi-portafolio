// src/components/ProjectCard.tsx
'use client';
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}
import { useState, useEffect } from "react";
// import Image from 'next/image';

export default function ProjectCard({ title, description, tags, link, image }: ProjectProps) {
  console.log(image);
  const [mounted, setMounted] = useState(false);

  const [imgSrc, setImgSrc] = useState(image);
  const fallbackImage = "/imgs/default-project.jpg";

  // Evita errores de hidratación esperando a que el componente se monte
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className={`group relative rounded-2xl border border-white/10 dark:bg-white/5 bg-gray-100 p-6 transition-all hover:bg-white/10 hover:border-blue-500/50`}>

      {/* <Image //necesita next.config.js para imagenes externas
        src={imgSrc} 
        alt={title} 
        width={300} 
        height={200} 
        className="w-full h-48 object-cover rounded-t-xl" 
        onError={()=> setImgSrc(fallbackImage)}/> */}
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-full h-48 object-cover rounded-t-xl" 
        onError={()=> setImgSrc(fallbackImage)}/>

      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <a 
        href={link} 
        target="_blank" 
        className={`text-sm font-semibold inline-flex items-center gap-1 dark:text-white text-black hover:underline`}
      >
        Ver proyecto 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </a>
    </div>
  );
}