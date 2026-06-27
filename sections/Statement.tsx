"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const LINES = [
  "Thinking about intelligence,",
  "and Engineering Systems that matter.",
] as const;

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const wrapperVariants = {
  hidden:   {},
  visible:  { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const lineVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: EASE } },
};

export function Statement() {
  return (
    <section
      aria-label="Statement"
      className="relative flex min-h-[70vh] items-center
                 justify-center overflow-hidden py-20"
    >
      {/* Single centered glow — one source of light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <Container size="lg">
        <motion.h2
          variants={wrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="mx-auto text-center font-heading font-semibold
                     leading-[1.2] tracking-[-0.022em] text-foreground
                     text-[clamp(1.75rem,3.6vw,3.25rem)]"
        >
          {LINES.map((line) => (
            <motion.span key={line} variants={lineVariants} className="block">
              {line}
            </motion.span>
          ))}
        </motion.h2>
      </Container>
    </section>
  );
}
