"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

/* ─── Content ──────────────────────────────────────────────────────── */

const PRINCIPLES = [
  {
    id: "01",
    title: "AI is leverage.",
    lines: ["Tools change.", "Principles endure."],
  },
  {
    id: "02",
    title: "Understand before abstracting.",
    lines: ["Use AI aggressively.", "Know what's happening underneath."],
  },
  {
    id: "03",
    title: "Engineer for impact.",
    lines: ["Increase output.", "Reduce cost.", "Create value."],
  },
  {
    id: "04",
    title: "Document everything.",
    lines: ["Writing compounds."],
  },
  {
    id: "05",
    title: "Curiosity compounds.",
    lines: ["Technology.", "Markets.", "Businesses.", "Human systems."],
  },
] as const;

/* ─── Motion ───────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const grid = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden:   { opacity: 0, y: 22 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/* ─── Sub-component ────────────────────────────────────────────────── */

interface PrincipleCardProps {
  id: string;
  title: string;
  lines: readonly string[];
}

function PrincipleCard({ id, title, lines }: PrincipleCardProps) {
  return (
    <Card padding="lg" className="flex h-full flex-col">
      {/* Counter */}
      <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-muted/50">
        {id}
      </span>

      {/* Title */}
      <h3 className="mt-6 font-heading text-[1.0625rem] font-semibold leading-snug text-foreground">
        {title}
      </h3>

      {/* Hairline */}
      <div className="mt-5 h-px w-full bg-border/50" />

      {/* Lines */}
      <div className="mt-5 flex-1 space-y-2">
        {lines.map((line) => (
          <p
            key={line}
            className="font-body text-sm leading-relaxed text-foreground-secondary"
          >
            {line}
          </p>
        ))}
      </div>
    </Card>
  );
}

/* ─── Section ──────────────────────────────────────────────────────── */

export function Principles() {
  return (
    <Section id="principles">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Principles" />
        </motion.div>

        {/* Card grid — staggered reveal */}
        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid list-none gap-4 p-0
                     sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRINCIPLES.map((p) => (
            <motion.li key={p.id} variants={item} className="flex">
              <PrincipleCard {...p} />
            </motion.li>
          ))}
        </motion.ul>

      </Container>
    </Section>
  );
}
