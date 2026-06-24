"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Data ─────────────────────────────────────────────────────────── */

const LINKS = [
  {
    platform: "Email",
    display:  "gk4846@myamu.ac.in",
    href:     "mailto:gk4846@myamu.ac.in",
    external: false,
  },
  {
    platform: "GitHub",
    display:  "SuhaibK10",
    href:     "https://github.com/SuhaibK10",
    external: true,
  },
  {
    platform: "LinkedIn",
    display:  "suhaibkhan",
    href:     "https://linkedin.com/in/suhaibkhan",
    external: true,
  },
  {
    platform: "X",
    display:  "@suhaibkhan",
    href:     "https://x.com/suhaibkhan",
    external: true,
  },
] as const;

/* ─── Motion ────────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const gridVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────────── */

export function Contact() {
  return (
    <Section id="contact">
      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center"
        >
          <SectionHeading align="center" title="Let's Connect" />
          <p className="mx-auto mt-5 max-w-md font-body text-[0.9375rem]
                        leading-[1.8] text-foreground-secondary">
            Always interested in thoughtful conversations about AI, software,
            markets and building meaningful things.
          </p>
        </motion.div>

        {/* Link grid — 1 col mobile, 2 col sm, 4 col lg */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-2xl gap-1
                     grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {LINKS.map((link) => (
            <motion.a
              key={link.platform}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              aria-label={
                link.external
                  ? `${link.platform} — opens in new tab`
                  : link.platform
              }
              className="group relative flex flex-col rounded-xl p-5
                         transition-colors duration-200
                         hover:bg-white/2
                         sm:text-center"
            >
              <span className="font-mono text-[0.6875rem] tracking-[0.18em]
                               uppercase text-gold/55 transition-colors
                               duration-200 group-hover:text-gold/80">
                {link.platform}
              </span>

              <span className="mt-2 font-body text-sm text-foreground-secondary
                               transition-colors duration-200
                               group-hover:text-foreground
                               break-all sm:break-normal">
                {link.display}
              </span>

              <span
                aria-hidden
                className="absolute right-3 top-3 opacity-0 transition-opacity
                           duration-200 group-hover:opacity-20"
              >
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </span>
            </motion.a>
          ))}
        </motion.div>

      </Container>
    </Section>
  );
}
