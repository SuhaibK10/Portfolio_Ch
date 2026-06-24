"use client";

import { useScroll, useSpring, motion, useTransform } from "framer-motion";

/**
 * 1 px scroll-progress indicator pinned to the top of the viewport.
 * Fades in after the user begins scrolling so it stays invisible on load.
 * Gradient runs indigo → lavender → gold to unify atmosphere and brand.
 */
export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // invisible at rest, visible after ~2 % scroll
  const opacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-50 h-px origin-left"
      style={{
        scaleX,
        opacity,
        background:
          "linear-gradient(90deg, #6366F1 0%, #818CF8 40%, #A78BFA 70%, #D4AF6C 100%)",
      }}
    />
  );
}
