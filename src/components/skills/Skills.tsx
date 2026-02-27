// src/components/Skills.tsx
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="sobre-mi" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold">Tecnologías</h2>
        <div className="h-[1px] flex-1 bg-white/10"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-blue-400 font-mono mb-6 uppercase tracking-widest text-sm">
              // {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name}
                  className="flex  items-center gap-3 p-4 rounded-xl border border-white/5 dark:bg-white/5 bg-white/40 hover:bg-gray-300/50 dark:hover:bg-white/10 transition-colors group"
                >
                  <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  <span className="dark:text-white text-gray-600 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}