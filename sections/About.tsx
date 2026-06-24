"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Content ──────────────────────────────────────────────────────── */

const PARAGRAPHS = [
  {
    text: "Data-driven engineer passionate about extracting insights from complex datasets, designing algorithmic solutions and building production-grade systems.",
    emphasis: true,
  },
  {
    text: "Strong preference for structured thinking, rigorous documentation and understanding how things work under the hood.",
    emphasis: false,
  },
  {
    text: "Interests extend beyond technology into markets, venture investing and studying how enduring businesses are built and scaled.",
    emphasis: false,
  },
] as const;

/* ─── Motion ───────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ─── Component ────────────────────────────────────────────────────── */

export function About() {
  return (
    <Section id="about">
      <Container>
        <div
          className="grid gap-14
                     md:grid-cols-[200px_1fr] md:gap-20
                     lg:grid-cols-[240px_1fr] lg:gap-28"
        >
          {/* ── Left: label ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="md:pt-0.5"
          >
            <SectionHeading title="About" />
          </motion.div>

          {/* ── Right: paragraphs ─────────────────────────────────── */}
          <div className="space-y-8">
            {PARAGRAPHS.map(({ text, emphasis }, i) => (
              <motion.p
                key={text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.1,
                  ease: EASE,
                }}
                className={cn(
                  "font-body text-[1.0625rem] leading-[1.8]",
                  emphasis
                    ? "font-medium text-foreground"
                    : "text-foreground-secondary",
                )}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
