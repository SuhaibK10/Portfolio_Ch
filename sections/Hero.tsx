"use client";

import { motion } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

/* ─── Content ─────────────────────────────────────────────────────── */

const ROLES = ["Engineer", "Builder", "Systems Thinker"] as const;

const DESCRIPTION = [
  "Exploring how AI is changing software, work and leverage.",
  "Building systems, products and ideas with AI.",
  "Interested in intelligence, software, markets and enduring businesses.",
] as const;

const MANIFESTO = [
  "Think.", "Write.", "Engineer.", "Code.",
  "Build.", "Document.", "Deploy.", "Repeat.",
] as const;

/* ─── Motion ──────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function fadeUp(delay: number, distance = 16, duration = 0.72) {
  return {
    initial:    { opacity: 0, y: distance },
    animate:    { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  } as const;
}

/* ─── Component ───────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col"
    >

      {/* ── Centered block ─────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col items-center justify-center
                      px-6 py-24 text-center">
        <Container size="lg">

          {/* Name */}
          <motion.h1
            {...fadeUp(0.1, 20, 0.85)}
            className="font-heading text-6xl font-bold tracking-tighter
                       leading-[1.04] text-foreground
                       sm:text-7xl lg:text-[5.5rem]"
          >
            SUHAIB KHAN
          </motion.h1>

          {/* Roles */}
          <motion.p
            {...fadeUp(0.3)}
            className="mt-5 font-mono text-[0.6875rem] uppercase
                       tracking-[0.22em] text-muted/70
                       sm:text-[0.75rem]"
          >
            {ROLES.join("  ·  ")}
          </motion.p>

          {/* Rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.46, ease: EASE }}
            aria-hidden
            className="mx-auto mt-10 h-px w-8 origin-center bg-border/60"
          />

          {/* Description */}
          <div className="mx-auto mt-10 max-w-[36rem] space-y-4">
            {DESCRIPTION.map((line, i) => (
              <motion.p
                key={line}
                {...fadeUp(0.56 + i * 0.1)}
                className="font-body text-[0.9375rem] leading-[1.75]
                           text-foreground-secondary"
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.92)}
            className="mt-11 flex flex-wrap items-center justify-center gap-3"
          >
            <Button variant="secondary" size="md" aria-label="View resume">
              <FileText size={13} strokeWidth={1.75} />
              Resume
            </Button>

            <Button
              variant="ghost"
              size="md"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GitHubIcon size={14} />
              GitHub
              <ArrowUpRight size={11} className="opacity-35" />
            </Button>

            <Button
              variant="ghost"
              size="md"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <LinkedInIcon size={14} />
              LinkedIn
              <ArrowUpRight size={11} className="opacity-35" />
            </Button>
          </motion.div>

        </Container>
      </div>

      {/* ── Manifesto strip ────────────────────────────────────────── */}
      <div className="px-6 pb-14" aria-hidden>
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mb-7 h-px w-full bg-border/20"
          />
          <div className="flex flex-wrap items-center justify-center
                          gap-x-5 gap-y-2">
            {MANIFESTO.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 1.22 + i * 0.06, ease: EASE }}
                className="font-mono text-[0.625rem] tracking-widest text-muted/30"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </Container>
      </div>

    </section>
  );
}
