"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { profile } from "@/data/profile";
import { stats } from "@/data/articles";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const statItems = [
  { label: "技术文章", value: String(stats.articles), suffix: "+" },
  { label: "视频教程", value: String(stats.videos), suffix: "+" },
  { label: "全网粉丝", value: "10w", suffix: "+" },
  { label: "累计阅读", value: "500w", suffix: "+" },
];

function CountUp({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-white md:text-4xl"
    >
      {value}
      <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
        {suffix}
      </span>
    </motion.span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-black py-24">
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm font-medium uppercase tracking-widest text-purple-400"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-white md:text-5xl"
          >
            关于我
          </motion.h2>
          <TextGenerateEffect
            words="一个热爱技术的程序员，喜欢用代码创造有趣的东西。从大学开始自学编程，走过无数弯路，现在想把经验分享给更多人。"
            className="justify-center text-neutral-400"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {statItems.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur"
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-4 text-center text-sm text-neutral-400 md:grid-cols-3"
        >
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <span className="text-purple-400">📧</span> {profile.contact.email}
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <span className="text-purple-400">💬</span> 微信：{profile.contact.wechat}
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
            <span className="text-purple-400">📍</span> {profile.contact.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
