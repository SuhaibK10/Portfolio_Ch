"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Terminal, Flame, Zap, Users, Network,
  Package, GitBranch, Lock, Database, Cpu,
  Coffee, Brain, Send, Smile,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

/* ─── Custom SVG Brand Icons ────────────────────────────────────── */

function ReactIcon() {
  return (
    <svg viewBox="0 0 100 100" width="18" height="18" fill="none" aria-hidden>
      <circle cx="50" cy="50" r="10" fill="#61DAFB" />
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="6" />
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="6" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="46" ry="17" stroke="#61DAFB" strokeWidth="6" transform="rotate(120 50 50)" />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" fill="#fff" />
      <path d="M9 7.5v9L18 7.5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="7.5" x2="15" y2="16.5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path d="M12 2C9 2 7 3.5 7 6v2h5v1H5.5C3.5 9 2 10.8 2 13s1.7 4 3.5 4H7v-2.5C7 12.5 8.5 11 11 11h2c2 0 4-1.5 4-4V6C17 3.5 15 2 12 2z" fill="#3776AB" />
      <circle cx="10.5" cy="5" r="1" fill="white" />
      <path d="M12 22c3 0 5-1.5 5-4v-2h-5v-1h6.5c2 0 3.5-1.8 3.5-4s-1.7-4-3.5-4H17v2.5C17 11.5 15.5 13 13 13h-2c-2 0-4 1.5-4 4V18c0 2.5 2 4 5 4z" fill="#FFD43B" />
      <circle cx="13.5" cy="19" r="1" fill="white" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <rect width="24" height="24" rx="2" fill="#F7DF1E" />
      <path d="M7 17.5c.5.8 1.1 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6L8.6 16c-1.6-.7-2.7-1.6-2.7-3.4 0-1.7 1.3-3 3.3-3 1.4 0 2.4.5 3.1 1.8L10.6 13c-.4-.7-.8-1-1.4-1-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.5.2c1.9.8 3 1.7 3 3.5 0 2-1.6 3.2-3.7 3.2-2.1 0-3.4-1-4-2.4L7 17.5z" fill="#000" />
      <path d="M15 17.2c.4.7.9 1.2 1.8 1.2.7 0 1.2-.4 1.2-1.8V10h2v6.7c0 3-1.7 4.3-4.2 4.3-2.2 0-3.5-1.2-4.2-2.6l2.4-1.2z" fill="#000" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <path d="M4 10c.8-3.2 2.8-4.8 6-4.8 4.8 0 5.4 3.6 8.2 4.2 1.9.4 3.6-.4 5.2-2.4-.8 3.2-2.8 4.8-6 4.8-4.8 0-5.4-3.6-8.2-4.2-1.9-.4-3.6.4-5.2 2.4z" fill="#06B6D4" />
      <path d="M2 16c.8-3.2 2.8-4.8 6-4.8 4.8 0 5.4 3.6 8.2 4.2 1.9.4 3.6-.4 5.2-2.4-.8 3.2-2.8 4.8-6 4.8-4.8 0-5.4-3.6-8.2-4.2-1.9-.4-3.6.4-5.2 2.4z" fill="#06B6D4" />
    </svg>
  );
}

function DockerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      {[
        [2, 9], [6, 9], [10, 9],
        [6, 6], [10, 6],
        [10, 3],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3.2" height="2.2" rx="0.4" fill="#2496ED" />
      ))}
      <path d="M2.5 13c-.5 2.5 1.3 4.5 4 4.5h9c3 0 5.5-2 5.5-4.5 0 0-1-.5-2.5-.5-1 0-2 .3-2.5.8-.3-2-1.8-3.3-4-3.3-.4 0-.8.1-1 .1" stroke="#2496ED" strokeWidth="1.2" fill="none" />
      <path d="M19 9.5c0 0 .5-1.5 2-1.5" stroke="#2496ED" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MongoDBIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
      <path d="M12 2C9.5 2 7 5.5 7 9.5c0 4.5 3.5 7 5 12.5.1.4.4.4.5 0C14 16.5 17 14 17 9.5 17 5.5 14.5 2 12 2z" fill="#47A248" />
      <line x1="12" y1="18" x2="12" y2="22" stroke="#47A248" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <polygon points="12,2 22,22 2,22" fill="white" />
    </svg>
  );
}

function SupabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <path d="M13.5 2L3 14h8l-1 8 11-12h-8l.5-8z" fill="#3ECF8E" />
    </svg>
  );
}

function HuggingFaceIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="#FFD21E" />
      <path d="M8 13c.5 2 1.8 3 4 3s3.5-1 4-3" stroke="#333" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <circle cx="9" cy="10" r="1.2" fill="#333" />
      <circle cx="15" cy="10" r="1.2" fill="#333" />
      <path d="M7 8c0-1 .7-2 2-2M17 8c0-1-.7-2-2-2" stroke="#333" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Skill data ────────────────────────────────────────────────── */

interface Skill {
  name:  string;
  icon:  ReactNode;
  color: string;
}

interface Category {
  label:  string;
  skills: Skill[];
}

const L = (Icon: React.ElementType, color: string) => (
  <Icon size={18} color={color} strokeWidth={1.6} aria-hidden />
);

const CATEGORIES: Category[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python",          icon: <PythonIcon />,           color: "#3776AB" },
      { name: "JavaScript",      icon: <JavaScriptIcon />,       color: "#F7DF1E" },
      { name: "Java",            icon: L(Coffee, "#ED8B00"),     color: "#ED8B00" },
      { name: "C",               icon: L(Cpu, "#A8B9CC"),        color: "#A8B9CC" },
      { name: "Shell",           icon: L(Terminal, "#89E051"),   color: "#89E051" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React",           icon: <ReactIcon />,            color: "#61DAFB" },
      { name: "Next.js",         icon: <NextJsIcon />,           color: "#ffffff" },
      { name: "Tailwind CSS",    icon: <TailwindIcon />,         color: "#06B6D4" },
      { name: "PyTorch",         icon: L(Flame, "#EE4C2C"),      color: "#EE4C2C" },
      { name: "Scikit-learn",    icon: L(Brain, "#F7931E"),      color: "#F7931E" },
      { name: "Hugging Face",    icon: <HuggingFaceIcon />,      color: "#FFD21E" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL",           icon: L(Database, "#4479A1"),   color: "#4479A1" },
      { name: "PostgreSQL",      icon: L(Database, "#336791"),   color: "#336791" },
      { name: "MongoDB",         icon: <MongoDBIcon />,          color: "#47A248" },
      { name: "Supabase",        icon: <SupabaseIcon />,         color: "#3ECF8E" },
    ],
  },
  {
    label: "AI & Automation",
    skills: [
      { name: "CrewAI",          icon: L(Users, "#7C3AED"),      color: "#7C3AED" },
      { name: "n8n",             icon: L(Network, "#EA4B71"),    color: "#EA4B71" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Docker",          icon: <DockerIcon />,           color: "#2496ED" },
      { name: "Git",             icon: L(GitBranch, "#F05032"),  color: "#F05032" },
      { name: "GitHub",          icon: <GitHubIcon size={18} className="text-white" />, color: "#ffffff" },
      { name: "Postman",         icon: L(Send, "#FF6C37"),       color: "#FF6C37" },
      { name: "Vercel",          icon: <VercelIcon />,           color: "#ffffff" },
      { name: "Clerk",           icon: L(Lock, "#6C47FF"),       color: "#6C47FF" },
    ],
  },
  {
    label: "Others",
    skills: [
      { name: "MPI",             icon: L(Cpu, "#8A9BB0"),        color: "#8A9BB0" },
      { name: "OpenMP",          icon: L(Cpu, "#8A9BB0"),        color: "#8A9BB0" },
    ],
  },
];

/* ─── Motion ────────────────────────────────────────────────────── */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const chipVariants = {
  hidden:  { opacity: 0, scale: 0.9, y: 8 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { duration: 0.4, ease: EASE } },
};

/* ─── Component ─────────────────────────────────────────────────── */

export function Skills() {
  return (
    <Section id="skills">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <SectionHeading
            eyebrow="Stack"
            title="Skills & Technologies"
            description="Tools and technologies I work with across languages, frameworks, databases, and infrastructure."
          />
        </motion.div>

        <div className="mt-14 space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>

              {/* Category label */}
              <p className="mb-4 font-mono text-[0.625rem] tracking-[0.22em]
                            uppercase text-muted/40">
                {cat.label}
              </p>

              {/* Skill chips */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-wrap gap-2.5"
              >
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={chipVariants}
                    className="group flex items-center gap-2 rounded-lg
                               border border-white/6 bg-card/60
                               px-3 py-2 backdrop-blur-sm
                               transition-all duration-200
                               hover:border-white/14 hover:bg-card"
                    style={{ "--skill-color": skill.color } as React.CSSProperties}
                  >
                    {/* Icon */}
                    <span className="flex shrink-0 items-center justify-center
                                     h-[18px] w-[18px]">
                      {skill.icon}
                    </span>

                    {/* Name */}
                    <span className="font-body text-[0.8125rem] leading-none
                                     text-foreground-secondary
                                     transition-colors duration-200
                                     group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
