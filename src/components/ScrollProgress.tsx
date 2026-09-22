"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Slim gradient progress bar pinned to the top edge, tracking scroll depth. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[70] h-[2.5px] origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-400"
    />
  );
}
