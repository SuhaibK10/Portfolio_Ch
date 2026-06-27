"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

/* ─── Data ─────────────────────────────────────────────────────────── */

const INTERESTS = [
  { title: "AI",               description: "Intelligence and its implications." },
  { title: "Investing",        description: "Value, patience and compounding." },
  { title: "Markets",          description: "Price discovery and incentives." },
  { title: "Research",         description: "Rigor and curiosity." },
  { title: "Startups",         description: "Building and betting." },
  { title: "Writing",          description: "Clarity and leverage." },
  { title: "Coffee",           description: "The ritual of focus." },
  { title: "Systems Thinking", description: "Emergent behavior and feedback loops." },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function BeyondCode() {
  return (
    <Section id="beyond">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading title="Beyond Code" />
        </motion.div>

        {/* Card grid */}
        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid list-none gap-4 p-0
                     sm:grid-cols-2 lg:grid-cols-4"
        >
          {INTERESTS.map((item) => (
            <motion.li key={item.title} variants={cardVariants} className="flex">
              <Card
                padding="none"
                className="group flex min-h-[152px] w-full flex-col
                           justify-between p-6 md:min-h-[164px]"
              >
                {/* Top rule — tints gold on hover, the only accent */}
                <div
                  className="h-px w-5 bg-border/50 transition-colors
                             duration-500 group-hover:bg-gold/35"
                />

                {/* Title + descriptor — anchored to bottom */}
                <div>
                  <h3
                    className="font-heading text-[1.0625rem] font-semibold
                               leading-snug text-foreground"
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-1.5 font-body text-xs leading-relaxed
                               text-muted/70 transition-colors duration-300
                               group-hover:text-muted/85"
                  >
                    {item.description}
                  </p>
                </div>

              </Card>
            </motion.li>
          ))}
        </motion.ul>

      </Container>
    </Section>
  );
}
