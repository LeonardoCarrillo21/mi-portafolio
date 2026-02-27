// src/data/skills.ts
import { code } from "framer-motion/client";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Database, 
  Terminal, 
  Smartphone, 
  Code,
  Cloud,
  CodeIcon,
  CodeSquare
} from "lucide-react";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", icon: Layout },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Layers },
      { name: "SCSS", icon: Layers },
      { name: "HTML5", icon: Code },
      { name: "Angular", icon: CodeSquare },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "APIs REST", icon: Globe },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "GCP", icon: Cloud },
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Layers },
    ],
  },
  {
    title: "Versiones y Colaboración",
    skills: [
      { name: "Git", icon: Code },
      { name: "GitHub", icon: Code },
      { name: "CI/CD", icon: Layers },
    ],
  },
];