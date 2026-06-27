"use client";

import Image from "next/image";
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
        <div className="flex flex-col items-center text-center">

          {/* ── Photo ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="mb-10 h-36 w-36 overflow-hidden rounded-full ring-1 ring-border/30"
          >
            <Image
              src="/avatar.jpg"
              alt="Suhaib Khan"
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* ── Heading ──────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
          >
            <SectionHeading title="About" align="center" />
          </motion.div>

          {/* ── Paragraphs ───────────────────────────────────────── */}
          <div className="mt-8 max-w-2xl space-y-8">
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
