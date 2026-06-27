"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Data ─────────────────────────────────────────────────────────── */

const PAPERS = [
  {
    title:  "Autonomous AI Agent for Analyzing Air Pollution Data",
    venue:  null,
    bullets: [
      "Built an end-to-end agentic ML system for data ingestion, forecasting, classification, and clustering on large-scale AQI datasets.",
    ],
    links: [
      { label: "Certificate", href: "#" },
    ],
  },
  {
    title:  "Quantum vs Classical ML Benchmarking on NSE Data",
    venue:  "Presented at Indo Quantum Summit",
    bullets: [
      "Benchmarked quantum kernel methods (QSVM) against classical ML models (SVM, k-NN, Logistic Regression) for portfolio optimization on real NSE market data under a 4-qubit hardware constraint.",
    ],
    links: [
      { label: "GitHub", href: "#" },
    ],
  },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ─── Component ─────────────────────────────────────────────────────── */

export function Research() {
  return (
    <Section id="research">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Research Papers" />
        </motion.div>

        {/* Cards */}
        <div className="mt-14 max-w-2xl space-y-6">
          {PAPERS.map((paper, i) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="rounded-xl border border-white/8 bg-card/60
                         px-6 py-5 backdrop-blur-sm"
            >
              {/* Icon + title */}
              <div className="mb-3 flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center
                                 justify-center rounded-lg bg-gold/10">
                  <BookOpen size={15} className="text-gold" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold
                                 leading-snug text-foreground md:text-lg">
                    {paper.title}
                  </h3>
                  {paper.venue && (
                    <p className="mt-1 font-mono text-[0.6875rem] tracking-[0.12em]
                                  uppercase text-gold/70">
                      {paper.venue}
                    </p>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <ul className="mb-4 space-y-1.5">
                {paper.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-gold/50" />
                    <span className="font-body text-sm leading-relaxed
                                     text-foreground-secondary">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {paper.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[0.6875rem]
                               tracking-[0.12em] uppercase text-muted/60
                               hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={11} className="opacity-50" />
                  </a>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
