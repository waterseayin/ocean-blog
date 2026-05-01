"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { profile } from "@/data/profile";
import { motion } from "motion/react";

const socialIcons: Record<string, string> = {
  github: "GH",
  bilibili: "BL",
  juejin: "JJ",
  zhihu: "ZH",
  wechat: "WX",
};

export function HeroSection() {
  return (
    <HeroHighlight containerClassName="min-h-screen" id="hero">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900 text-4xl font-bold text-white">
              🐟
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        {/* Title with highlight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-xl text-neutral-400 md:text-2xl"
        >
          <Highlight className="text-lg md:text-2xl">
            {profile.title}
          </Highlight>
        </motion.p>

        {/* Bio with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <TypewriterEffect
            words={[
              { text: profile.bio, className: "text-base md:text-lg text-neutral-300" },
            ]}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {profile.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 backdrop-blur transition-all hover:border-purple-500/50 hover:text-white hover:bg-purple-500/10"
              title={link.name}
            >
              {socialIcons[link.icon] || link.name[0]}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto h-10 w-6 rounded-full border border-white/10"
          >
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
