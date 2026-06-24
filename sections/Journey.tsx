"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Data ─────────────────────────────────────────────────────────── */

const TIMELINE = [
  {
    role:        "ML Intern",
    company:     "IIT Jammu",
    description:
      "Worked on applied AI and generative AI workflows and practical machine learning systems.",
  },
  {
    role:        "Product Engineer",
    company:     "Louis Polo",
    description:
      "Built and deployed a complete e-commerce platform and internal inventory systems.",
  },
  {
    role:        "Founder",
    company:     "Weblicate",
    description: "Shipped websites and MVPs for startups and businesses.",
  },
  {
    role:        "ML and Research Head",
    company:     "Faast FinTech Club",
    description:
      "Leading research and AI initiatives at the intersection of finance and technology.",
  },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ─── Component ─────────────────────────────────────────────────────── */

export function Journey() {
  return (
    <Section id="journey">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Journey" />
        </motion.div>

        {/* Timeline ──────────────────────────────────────────────────── */}
        <div className="mt-16 max-w-2xl">
          {TIMELINE.map((entry, i) => {
            const isLast = i === TIMELINE.length - 1;

            return (
              <div key={entry.role} className="flex gap-6 md:gap-8">

                {/* ── Left: dot + connector ───────────────────────────── */}
                <div className="flex w-5 flex-shrink-0 flex-col items-center">

                  {/* Dot */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
                  >
                    {/* Ring */}
                    <div className="mt-0.5 h-2.5 w-2.5 rounded-full border border-gold/55 bg-background" />

                    {/* Active pulse — last / current entry only */}
                    {isLast && (
                      <motion.div
                        className="absolute left-0 top-0.5 h-2.5 w-2.5 rounded-full
                                   border border-gold/30"
                        animate={{ scale: [1, 2.4], opacity: [0.55, 0] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 0.8,
                        }}
                      />
                    )}
                  </motion.div>

                  {/* Connector — draws downward as entry enters viewport */}
                  {!isLast && (
                    <motion.div
                      className="mt-3 w-px flex-1 origin-top bg-border/40"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.55, delay: 0.2, ease: "linear" }}
                    />
                  )}
                </div>

                {/* ── Right: content ──────────────────────────────────── */}
                <motion.div
                  className={isLast ? "pb-2" : "pb-12 md:pb-14"}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
                >
                  {/* Company — eyebrow label */}
                  <p className="mb-2 font-mono text-[0.6875rem] tracking-[0.18em]
                                uppercase text-gold/75">
                    {entry.company}
                  </p>

                  {/* Role */}
                  <h3 className="font-heading text-lg font-semibold leading-snug
                                 text-foreground md:text-xl">
                    {entry.role}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 font-body text-sm leading-relaxed
                                text-foreground-secondary">
                    {entry.description}
                  </p>
                </motion.div>

              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
