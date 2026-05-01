import { ReactNode } from "react";

export interface TechStackItem {
  name: string;
  icon: string;
  category: string;
}

export const techStacks: TechStackItem[] = [
  // Frontend
  { name: "React", icon: "⚛️", category: "frontend" },
  { name: "Next.js", icon: "▲", category: "frontend" },
  { name: "TypeScript", icon: "🔷", category: "frontend" },
  { name: "Vue", icon: "💚", category: "frontend" },
  { name: "TailwindCSS", icon: "🎨", category: "frontend" },
  { name: "Framer Motion", icon: "🎬", category: "frontend" },
  // Backend
  { name: "Go", icon: "🔵", category: "backend" },
  { name: "Node.js", icon: "🟢", category: "backend" },
  { name: "Python", icon: "🐍", category: "backend" },
  { name: "PostgreSQL", icon: "🐘", category: "backend" },
  { name: "Redis", icon: "🔺", category: "backend" },
  { name: "Docker", icon: "🐳", category: "backend" },
  // Tools
  { name: "Git", icon: "📦", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Linux", icon: "🐧", category: "tools" },
  { name: "Figma", icon: "🎯", category: "tools" },
  { name: "Kubernetes", icon: "☸️", category: "tools" },
  { name: "GitHub Actions", icon: "⚡", category: "tools" },
];

export const techCategories = [
  { key: "frontend", label: "前端" },
  { key: "backend", label: "后端" },
  { key: "tools", label: "工具" },
];
