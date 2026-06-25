"use client";

import { motion } from "framer-motion";

/*
  Viewport  : 48 × 16 px
  Period    : 48 px  →  path draws 2 full periods (96 px) so x:[0,−48] loops seamlessly
  Wave shape: trochoidal — long flat trough, steep asymmetric rise, sharp crest, steep drop
              (C = cubic-bezier; control-point spacing creates the asymmetry)
*/

// Back swell — gentle, low amplitude (distance depth)
const BACK =
  "M0,12 C10,12 14,12 18,12 C21,12 23,8 24,7 C25,6 26,6 27,7 " +
  "C29,9 31,11 35,12 C41,12 45,12 48,12 " +
  "C58,12 62,12 66,12 C69,12 71,8 72,7 C73,6 74,6 75,7 " +
  "C77,9 79,11 83,12 C89,12 93,12 96,12 L96,16 L0,16 Z";

// Mid wave — moderate amplitude, sharper crest
const MID =
  "M0,12 C9,12 12,12 15,12 C18,12 21,5 23,3 C24,2 25,2 26,3 " +
  "C28,6 30,10 34,12 C40,12 44,12 48,12 " +
  "C57,12 60,12 63,12 C66,12 69,5 71,3 C72,2 73,2 74,3 " +
  "C76,6 78,10 82,12 C88,12 92,12 96,12 L96,16 L0,16 Z";

// Front wave — tallest, steepest front face, pointed crest
const FRONT =
  "M0,13 C7,13 10,13 13,13 C16,13 19,4 22,2 " +
  "C23,1 24.5,1 26,2 " +
  "C28,5 30,10 35,13 C41,13 45,13 48,13 " +
  "C55,13 58,13 61,13 C64,13 67,4 70,2 " +
  "C71,1 72.5,1 74,2 " +
  "C76,5 78,10 83,13 C89,13 93,13 96,13 L96,16 L0,16 Z";

// Foam — traces the FRONT crest surface as a bright stroke (no fill)
const FOAM =
  "M0,13 C7,13 10,13 13,13 C16,13 19,4 22,2 " +
  "C23,1 24.5,1 26,2 " +
  "C28,5 30,10 35,13 C41,13 45,13 48,13 " +
  "C55,13 58,13 61,13 C64,13 67,4 70,2 " +
  "C71,1 72.5,1 74,2 " +
  "C76,5 78,10 83,13 C89,13 93,13 96,13";

export function WaveLogo() {
  return (
    <svg
      width="48"
      height="16"
      viewBox="0 0 48 16"
      style={{ overflow: "hidden", display: "block" }}
      aria-hidden
    >
      {/* Deep ocean — slowest, darkest */}
      <motion.path
        d={BACK}
        fill="#155E75"
        fillOpacity={0.9}
        animate={{ x: [0, -48] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Mid water */}
      <motion.path
        d={MID}
        fill="#0E7490"
        fillOpacity={0.8}
        animate={{ x: [0, -48] }}
        transition={{ duration: 4.0, repeat: Infinity, ease: "linear" }}
      />

      {/* Surface wave — fastest, brightest */}
      <motion.path
        d={FRONT}
        fill="#0891B2"
        fillOpacity={0.7}
        animate={{ x: [0, -48] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Foam — bright stroke along the surface, synced with front wave */}
      <motion.path
        d={FOAM}
        fill="none"
        stroke="#BAE6FD"
        strokeWidth="1.1"
        strokeOpacity={0.55}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ x: [0, -48] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
