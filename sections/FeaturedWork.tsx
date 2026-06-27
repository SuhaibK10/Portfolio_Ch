"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

/* ─── Data ─────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    index:       "01",
    title:       "Startup Idea Evaluator",
    description: "Multi-agent AI system using CrewAI and OpenAI APIs for idea validation and business analysis.",
    tag:         "Multi-Agent AI",
    gradient:    "rgba(99,102,241,0.12)",
  },
  {
    index:       "02",
    title:       "RBIH Mule Account Detection",
    description: "Explainable machine learning system using LightGBM, XGBoost and SHAP.",
    tag:         "Explainable ML",
    gradient:    "rgba(201,168,92,0.10)",
  },
  {
    index:       "03",
    title:       "Quantum vs Classical ML Visualization",
    description: "Interactive benchmarking between quantum and classical machine learning.",
    tag:         "Research",
    gradient:    "rgba(167,139,250,0.10)",
  },
  {
    index:       "04",
    title:       "Air Pollution Intelligence Agent",
    description: "Agentic ML system for forecasting and analyzing AQI datasets.",
    tag:         "Agentic AI",
    gradient:    "rgba(20,184,166,0.09)",
  },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function FeaturedWork() {
  return (
    <Section id="work">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Projects" />
        </motion.div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2"
        >
          {PROJECTS.map((p) => (
            <motion.li key={p.title} variants={cardVariants} className="flex">
              <Card
                padding="none"
                className="group relative flex min-h-70 w-full flex-col
                           overflow-hidden md:min-h-80"
              >
                {/* Ambient gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-60
                             transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 90% -5%, ${p.gradient}, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 flex flex-1 flex-col p-7 md:p-8">

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.625rem] tracking-widest
                                     text-muted/60">
                      {p.index}
                    </span>
                    <span className="rounded-full border border-border/40
                                     px-2.5 py-0.5 font-mono text-[0.625rem]
                                     tracking-wide text-muted/70">
                      {p.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="mt-auto pt-10">
                    <h3 className="font-heading text-xl font-semibold
                                   leading-snug text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-[1.75]
                                  text-foreground-secondary">
                      {p.description}
                    </p>
                  </div>

                  {/* Arrow hint */}
                  <div
                    aria-hidden
                    className="mt-5 self-end opacity-0 transition-opacity
                               duration-300 group-hover:opacity-20"
                  >
                    <ArrowUpRight size={16} strokeWidth={1.5} />
                  </div>

                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>

      </Container>
    </Section>
  );
}
