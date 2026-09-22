"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
  layer: number; // 1 = foreground, 0.5 = background for parallax
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function InteractiveTechBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const shockwavesRef = useRef<{ x: number; y: number; radius: number; maxRadius: number; alpha: number }[]>([]);
  const scrollOffsetRef = useRef(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  // Dynamic ambient sphere shifts based on scroll position
  const orb1Y = useTransform(smoothProgress, [0, 1], [0, 450]);
  const orb2Y = useTransform(smoothProgress, [0, 1], [0, -350]);
  const orb3Y = useTransform(smoothProgress, [0, 1], [-50, 200]);

  // Spotlight tracking state for cursor illumination
  const [spotlightPos, setSpotlightPos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Respect reduced-motion preference: skip the particle simulation,
    // cursor-tracking spotlight, and click shockwaves entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let isRunning = true;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Palette of neural synaptic colors, tuned for a light backdrop
    const nodeColors = [
      { fill: "#6366f1", glow: "rgba(99, 102, 241, 0.35)" }, // Indigo
      { fill: "#0891b2", glow: "rgba(8, 145, 178, 0.3)" },   // Cyan
      { fill: "#7c3aed", glow: "rgba(124, 58, 237, 0.28)" }, // Violet
      { fill: "#059669", glow: "rgba(5, 150, 105, 0.28)" },  // Emerald
    ];

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const initNodes = () => {
      // Responsive node density: fewer nodes on mobile to keep 60+ FPS
      const isMobile = width < 768;
      const count = isMobile ? 36 : Math.min(85, Math.floor((width * height) / 18000));
      nodes = [];
      pulses = [];

      for (let i = 0; i < count; i++) {
        const palette = nodeColors[Math.floor(Math.random() * nodeColors.length)];
        const layer = 0.4 + Math.random() * 0.6; // depth factor
        const baseRadius = (1.2 + Math.random() * 1.8) * layer;

        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45 * layer,
          vy: (Math.random() - 0.5) * 0.45 * layer,
          baseRadius,
          radius: baseRadius,
          color: palette.fill,
          glowColor: palette.glow,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          layer,
        });
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initNodes();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
      setSpotlightPos({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
      setIsHovered(false);
    };

    const handleClick = (e: MouseEvent) => {
      // Emit a neural ripple shockwave on click
      shockwavesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 180,
        alpha: 0.8,
      });

      // Scatter and energize nearby nodes
      for (const node of nodes) {
        const dx = node.x - e.clientX;
        const dy = node.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200;
          node.vx += (dx / dist) * force * 3;
          node.vy += (dy / dist) * force * 3;
        }
      }
    };

    const handleScroll = () => {
      scrollOffsetRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Pause canvas execution when tab is inactive to save battery
    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const connectionDistance = width < 768 ? 95 : 125;
    const mouseRadius = 160;

    const render = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const shockwaves = shockwavesRef.current;

      // 1. Update and render shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 4.5;
        sw.alpha *= 0.94;

        if (sw.alpha < 0.03 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79, 70, 229, ${sw.alpha * 0.3})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = "#0891b2";
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Pulsing breathing effect
        node.pulsePhase += node.pulseSpeed;
        node.radius = node.baseRadius + Math.sin(node.pulsePhase) * 0.5;

        // Position update
        node.x += node.vx;
        node.y += node.vy;

        // Friction dampening
        node.vx *= 0.992;
        node.vy *= 0.992;

        // Gentle ambient drift restitution
        if (Math.abs(node.vx) < 0.1) node.vx += (Math.random() - 0.5) * 0.05 * node.layer;
        if (Math.abs(node.vy) < 0.1) node.vy += (Math.random() - 0.5) * 0.05 * node.layer;

        // Screen boundary wraparound
        if (node.x < -20) node.x = width + 20;
        else if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        else if (node.y > height + 20) node.y = -20;

        // Mouse interactive deflection & attraction
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseRadius && dist > 0) {
            const angle = Math.atan2(dy, dx);
            // Repel if very close, gentle orbital attraction at edge
            const force = (mouseRadius - dist) / mouseRadius;
            node.vx += Math.cos(angle) * force * 0.15 * node.layer;
            node.vy += Math.sin(angle) * force * 0.15 * node.layer;
          }
        }
      }

      // 3. Connect nodes with synaptic lines
      const activeConnections: { i: number; j: number; dist: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;

          // Quick bounding box check prior to hypot
          if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.16 * Math.min(nodeA.layer, nodeB.layer);

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            activeConnections.push({ i, j, dist });
          }
        }

        // Draw line from node to cursor if within range
        if (mouse.active) {
          const dx = nodeA.x - mouse.x;
          const dy = nodeA.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(8, 145, 178, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // 4. Spawn & update neural signal pulses along active connections
      if (Math.random() < 0.08 && activeConnections.length > 0 && pulses.length < 18) {
        const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
        pulses.push({
          fromNode: conn.i,
          toNode: conn.j,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: Math.random() > 0.5 ? "#0891b2" : "#6366f1",
        });
      }

      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nodeFrom = nodes[pulse.fromNode];
        const nodeTo = nodes[pulse.toNode];

        if (!nodeFrom || !nodeTo) {
          pulses.splice(p, 1);
          continue;
        }

        const px = nodeFrom.x + (nodeTo.x - nodeFrom.x) * pulse.progress;
        const py = nodeFrom.y + (nodeTo.y - nodeFrom.y) * pulse.progress;
        const pulseAlpha = Math.sin(pulse.progress * Math.PI);

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowColor = pulse.color;
        ctx.shadowBlur = 8;
        ctx.globalAlpha = pulseAlpha * 0.85;
        ctx.fill();
        ctx.restore();
      }

      // 5. Draw node circles with individual glow
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, node.radius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = node.radius * 3.5;
        ctx.globalAlpha = 0.55 + Math.sin(node.pulsePhase) * 0.25;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
    >
      {/* 1. Soft Light Canvas Base */}
      <div className="absolute inset-0 bg-[#f6f7fb]" />

      {/* 2. Dynamic Ambient Aurora Spheres (Slow floating glows) */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full blur-[140px] bg-indigo-400/15 pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute top-1/3 -right-48 w-[720px] h-[720px] rounded-full blur-[160px] bg-cyan-400/12 pointer-events-none"
      />
      <motion.div
        style={{ y: orb3Y }}
        className="absolute bottom-20 left-1/4 w-[650px] h-[650px] rounded-full blur-[150px] bg-purple-400/12 pointer-events-none"
      />

      {/* 3. Subtle Cybernetic Coordinate Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* 4. Interactive Neural Constellation & Particle Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
      />

      {/* 5. Smooth Cursor Illumination Spotlight */}
      <motion.div
        animate={{
          x: spotlightPos.x - 300,
          y: spotlightPos.y - 300,
          opacity: isHovered ? 0.25 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 220, mass: 0.4 }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-radial from-indigo-400/25 via-cyan-300/10 to-transparent"
      />

      {/* 6. Soft Vignette for High Content Contrast */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#f6f7fb]/70 pointer-events-none" />
    </div>
  );
}
