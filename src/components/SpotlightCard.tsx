"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  tiltStrength?: number;
}

/**
 * Drop-in wrapper for `.tech-glass-card` blocks that adds a cursor-tracking
 * radial glow plus a real 3D perspective tilt, matching the depth-on-hover
 * pattern used across modern dev-tool UIs (Linear, Raycast, Stripe docs).
 */
export default function SpotlightCard({ children, className = "", tiltStrength = 10 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltStrength, -tiltStrength]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltStrength, tiltStrength]), springConfig);
  const scale = useSpring(1, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    glowX.set(x * 100);
    glowY.set(y * 100);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    scale.set(shouldReduceMotion ? 1 : 1.015);
  };

  const handleMouseLeave = () => {
    glowOpacity.set(0);
    scale.set(1);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        shouldReduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              scale,
              transformPerspective: 1000,
              transformStyle: "preserve-3d",
            }
      }
      className={`relative isolate ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-[inherit]"
        style={{
          opacity: glowOpacity,
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(380px circle at ${x}% ${y}%, rgba(79, 70, 229, 0.14), rgba(6, 182, 212, 0.05) 42%, transparent 68%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}
