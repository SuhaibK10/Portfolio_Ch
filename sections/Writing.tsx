"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ARTICLES } from "@/lib/articles";

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function Writing() {
  return (
    <Section id="writing">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading eyebrow="From the desk" title="Writing" />
        </motion.div>

        {/* Article list */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 list-none p-0"
        >
          {ARTICLES.map((article, i) => (
            <motion.li key={article.slug} variants={itemVariants}>

              {/* Divider above each entry (skip for first) */}
              {i > 0 && (
                <div className="h-px w-full bg-border/30" />
              )}

              {/* Article row */}
              <Link
                href={`/writing/${article.slug}`}
                className="group flex items-start justify-between gap-8
                           py-8 md:py-9"
              >
                {/* Left: title + excerpt */}
                <div className="min-w-0 flex-1">
                  <h3
                    className="font-heading text-lg font-semibold leading-snug
                               text-foreground transition-colors duration-200
                               group-hover:text-foreground md:text-xl"
                  >
                    {/* Underline slides in on hover */}
                    <span
                      className="bg-gradient-to-r from-foreground to-foreground
                                 bg-[length:0%_1px] bg-left-bottom bg-no-repeat
                                 pb-px transition-[background-size] duration-300
                                 group-hover:bg-[length:100%_1px]"
                    >
                      {article.title}
                    </span>
                  </h3>
                  <p
                    className="mt-2.5 max-w-[52rem] font-body text-sm leading-[1.75]
                               text-foreground-secondary md:text-[0.9375rem]"
                  >
                    {article.excerpt}
                  </p>
                  <p className="mt-3.5 font-body text-xs text-muted/50">
                    {article.readingTime}&ensp;·&ensp;{article.publishedAt}
                  </p>
                </div>

                {/* Right: arrow indicator */}
                <div
                  className="mt-0.5 shrink-0 opacity-0 transition-all duration-300
                             group-hover:translate-x-0.5 group-hover:opacity-40"
                >
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </Link>

            </motion.li>
          ))}
        </motion.ul>

      </Container>
    </Section>
  );
}
