"use client";

import { MotionConfig } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Wraps the tree with MotionConfig so that Framer Motion automatically
 * respects the user's OS-level prefers-reduced-motion preference.
 * Without this, JS-driven animations play regardless of the system setting.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
