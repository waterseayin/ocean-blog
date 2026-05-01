"use client";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { projects, categories } from "@/data/projects";
import { motion } from "motion/react";
import { useState } from "react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-400"
          >
            Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            项目作品
          </motion.h2>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-purple-500 text-white"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <CardHoverEffect items={filtered} />
        </motion.div>
      </div>
    </section>
  );
}
