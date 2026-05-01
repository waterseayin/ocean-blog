"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  title,
  description,
  header,
  icon,
  className,
  colSpan = 1,
}: {
  title: string;
  description: string;
  header?: ReactNode;
  icon?: ReactNode;
  className?: string;
  colSpan?: number;
}) => {
  const colSpanClass =
    colSpan === 2
      ? "md:col-span-2"
      : colSpan === 3
        ? "md:col-span-3"
        : "md:col-span-1";

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 p-6 transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10",
        colSpanClass,
        className,
      )}
    >
      {header && <div className="mb-4">{header}</div>}
      <div className="relative z-10">
        {icon && (
          <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-2.5 text-purple-400">
            {icon}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-400">
          {description}
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};
