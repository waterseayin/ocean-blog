"use client";
import { articles } from "@/data/articles";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const typeLabels: Record<string, { label: string; color: string }> = {
  article: { label: "文章", color: "text-cyan-400 bg-cyan-500/10" },
  video: { label: "视频", color: "text-purple-400 bg-purple-500/10" },
};

export function ArticlesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="bg-neutral-950 py-24">
      <div className="mx-auto max-w-4xl px-4" ref={ref}>
        {/* Section title */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400"
          >
            Articles & Videos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            文章 · 视频
          </motion.h2>
        </div>

        {/* Timeline style list */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {articles.map((article, idx) => {
              const isLeft = idx % 2 === 0;
              const typeInfo = typeLabels[article.type];
              const formattedDate = article.date;
              const formattedViews =
                article.views > 10000
                  ? `${(article.views / 10000).toFixed(1)}w`
                  : article.views.toLocaleString();

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-start gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-purple-500 bg-neutral-950 md:left-1/2" />

                  {/* Content */}
                  <div
                    className={`ml-12 flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.04] md:ml-0 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2 md:justify-end">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${typeInfo.color}`}
                      >
                        {typeInfo.label}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {article.title}
                    </h3>
                    <p className="mb-3 text-sm text-neutral-400">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 md:justify-end">
                      <span>{article.tag}</span>
                      <span>{formattedDate}</span>
                      <span>👁 {formattedViews}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
