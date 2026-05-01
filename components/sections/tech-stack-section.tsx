"use client";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Sparkles } from "@/components/ui/sparkles";
import { techStacks, techCategories, TechStackItem } from "@/data/tech-stack";
import { motion } from "motion/react";
import { useState } from "react";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filtered = techStacks.filter(
    (t) => activeCategory === "all" || t.category === activeCategory,
  );

  const allCategories = [
    { key: "all", label: "全部" },
    ...techCategories,
  ];

  return (
    <section id="tech" className="relative bg-neutral-950 py-24">
      <Sparkles density={30} className="absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
          >
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            技术栈
          </motion.h2>
        </div>

        {/* Category filter */}
        <div className="mb-10 flex justify-center gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                activeCategory === cat.key
                  ? "bg-white text-black"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech stack grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-3 gap-3 md:grid-cols-6"
        >
          {filtered.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-xs text-neutral-400">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
