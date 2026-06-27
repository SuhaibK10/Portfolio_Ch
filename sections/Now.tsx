"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Data ─────────────────────────────────────────────────────────── */

const FOCUSES = [
  { category: "Building",      text: "Production-grade AI systems." },
  { category: "Reading",       text: "Technology, markets and business." },
  { category: "Learning",      text: "Human-AI collaboration and software evolution." },
  { category: "Thinking",      text: "Leverage, incentives and systems." },
  { category: "Experimenting", text: "New AI workflows and tools." },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const rowVariants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function Now() {
  return (
    <Section id="now">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Now" />
        </motion.div>

        {/* Focus list */}
        <motion.dl
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 max-w-2xl divide-y divide-border/30"
        >
          {FOCUSES.map((focus) => (
            <motion.div
              key={focus.category}
              variants={rowVariants}
              className="group flex flex-col gap-1.5 py-6
                         sm:flex-row sm:items-baseline sm:gap-14 md:py-7"
            >
              {/* Category label */}
              <dt
                className="w-36 shrink-0 font-mono text-[0.6875rem]
                           tracking-[0.18em] uppercase text-gold/80
                           transition-colors duration-200
                           group-hover:text-gold sm:w-40"
              >
                {focus.category}
              </dt>

              {/* Description */}
              <dd
                className="font-body text-base leading-relaxed
                           text-foreground-secondary transition-colors
                           duration-200 group-hover:text-foreground
                           md:text-[1.0625rem]"
              >
                {focus.text}
              </dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Timestamp — standard "Now" page convention */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="mt-8 font-body text-xs text-muted/60"
        >
          Updated June 2026
        </motion.p>

      </Container>
    </Section>
  );
}
