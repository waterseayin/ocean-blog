"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  delay = 0,
}: {
  words: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const wordsArray = words.split(" ");

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.3,
            delay: delay + idx * 0.05,
            ease: "easeOut",
          }}
          className="mr-1.5 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
