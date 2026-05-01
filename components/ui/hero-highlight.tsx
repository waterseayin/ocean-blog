"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "relative flex min-h-screen w-full items-center justify-center bg-black",
        containerClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-b from-blue-500/10 via-transparent to-transparent blur-3xl" />
      </div>
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      className={cn(
        "bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-[length:0%_100%] bg-no-repeat bg-left text-transparent bg-clip-text inline-block",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
