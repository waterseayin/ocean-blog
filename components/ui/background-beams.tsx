"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {/* Vertical beam 1 */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 left-1/4 h-full w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
      />
      {/* Vertical beam 2 */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-40 right-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent"
      />
      {/* Horizontal beam 1 */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-1/3 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
      />
      {/* Diagonal beam */}
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], rotate: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-1/2 top-0 h-full w-[1px] origin-top bg-gradient-to-b from-transparent via-purple-400/30 to-transparent rotate-12"
      />
      {/* Glow orbs */}
      <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-cyan-500/10 blur-[100px]" />
    </div>
  );
};
