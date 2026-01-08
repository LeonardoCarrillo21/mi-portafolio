// src/data/skills.ts
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Database, 
  Terminal, 
  Smartphone 
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", icon: Layout },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Layers },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "APIs REST", icon: Globe },
    ],
  },
];