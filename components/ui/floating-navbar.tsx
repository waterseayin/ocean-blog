"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = prevScroll;
    setPrevScroll(current);
    if (current < 50) {
      setVisible(true);
      return;
    }
    if (current > previous) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const handleClick = (link: string) => {
    const el = document.querySelector(link);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-xl",
        className,
      )}
    >
      <ul className="flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleClick(item.link)}
              className="relative rounded-full px-4 py-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};
