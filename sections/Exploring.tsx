"use client";

import {
  Brain, Workflow, Users, TrendingUp, Activity, Network, Shield,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";

/* ─── Data ─────────────────────────────────────────────────────────── */

interface ExploreCard {
  icon:        LucideIcon;
  title:       string;
  description: string;
  gradient:    string;
  iconColor:   string;
}

const CARDS: ExploreCard[] = [
  {
    icon:        Brain,
    title:       "AI & LLMs",
    description: "Exploring intelligent systems and human-AI collaboration.",
    gradient:    "rgba(99,102,241,0.07)",
    iconColor:   "#818CF8",
  },
  {
    icon:        Workflow,
    title:       "Future of Software Development",
    description: "Understanding how AI changes engineering workflows.",
    gradient:    "rgba(139,92,246,0.06)",
    iconColor:   "#A78BFA",
  },
  {
    icon:        Users,
    title:       "Labor Transformation",
    description: "How AI changes knowledge work and leverage.",
    gradient:    "rgba(20,184,166,0.06)",
    iconColor:   "#2DD4BF",
  },
  {
    icon:        TrendingUp,
    title:       "Venture Investing",
    description: "Studying how enduring businesses are identified and scaled.",
    gradient:    "rgba(201,168,92,0.07)",
    iconColor:   "#C9A85C",
  },
  {
    icon:        Activity,
    title:       "Markets",
    description: "Equity markets, incentives and compounding.",
    gradient:    "rgba(52,211,153,0.06)",
    iconColor:   "#34D399",
  },
  {
    icon:        Network,
    title:       "Systems Thinking",
    description: "Understanding interactions between complex systems.",
    gradient:    "rgba(56,189,248,0.06)",
    iconColor:   "#38BDF8",
  },
  {
    icon:        Shield,
    title:       "Business Moats",
    description: "Competitive advantages and long-term value creation.",
    gradient:    "rgba(251,191,36,0.06)",
    iconColor:   "#FBBF24",
  },
];

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function Exploring() {
  return (
    <Section id="exploring">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading eyebrow="Currently" title="Things I'm Exploring" />
        </motion.div>

        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid list-none gap-3.5 p-0
                     sm:grid-cols-2 lg:grid-cols-3"
        >
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.li
                key={card.title}
                variants={cardVariants}
                className="flex"
              >
                <Card
                  padding="md"
                  className="group flex w-full flex-col overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradient} 0%, transparent 50%), #161B22`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="mb-5 flex h-9 w-9 shrink-0 items-center
                               justify-center rounded-lg bg-white/5
                               transition-colors duration-500
                               group-hover:bg-white/8"
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      style={{ color: card.iconColor }}
                      aria-hidden
                    />
                  </div>

                  <h3 className="font-heading text-[0.9375rem] font-semibold
                                 leading-snug text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed
                                text-foreground-secondary">
                    {card.description}
                  </p>
                </Card>
              </motion.li>
            );
          })}
        </motion.ul>

      </Container>
    </Section>
  );
}
