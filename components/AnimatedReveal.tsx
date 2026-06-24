"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  /** pixels off-screen before animation begins */
  distance?: number;
  /** viewport margin before triggering */
  threshold?: string;
}

const directionOffset: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 24 },
  down:  { y: -24 },
  left:  { x: 24 },
  right: { x: -24 },
  none:  {},
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance,
  threshold = "-80px",
}: AnimatedRevealProps) {
  const offset = distance
    ? direction === "up" || direction === "down"
      ? { y: direction === "up" ? distance : -distance }
      : { x: direction === "left" ? distance : -distance }
    : directionOffset[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: threshold }}
    >
      {children}
    </motion.div>
  );
}
