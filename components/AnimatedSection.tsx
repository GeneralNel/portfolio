"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionOffset[direction].y,
        x: directionOffset[direction].x,
        rotateX: direction === "up" || direction === "down" ? 8 : 0,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0, rotateX: 0 }
          : {
              opacity: 0,
              y: directionOffset[direction].y,
              x: directionOffset[direction].x,
              rotateX: direction === "up" || direction === "down" ? 8 : 0,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      style={{ perspective: "1200px" }}
    >
      {children}
    </motion.div>
  );
}
