"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  FileDown,
  ArrowRight,
  Mail,
  Building2,
  MapPin,
  Sparkles,
  Cpu,
  Database,
  Mic,
  Volume2,
  Play,
  Zap,
  ChevronDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import SpotlightCard from "@/components/SpotlightCard";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const buildTargets = [
  "multi-agent AI pipelines",
  "resilient REST APIs",
  "production Next.js apps",
  "hybrid database architectures",
];

function BuildingLine() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % buildTargets.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 font-mono text-sm text-slate-500">
      <span className="text-emerald-600">$</span>
      <span>currently building</span>
      <span className="relative inline-flex h-5 min-w-[15ch] items-center overflow-hidden text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={buildTargets[index]}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="absolute left-0 whitespace-nowrap font-semibold text-indigo-600"
          >
            {buildTargets[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="inline-block h-4 w-[2px] animate-pulse bg-indigo-600" />
    </div>
  );
}

export default function Hero() {
  const [isSimulatingWave, setIsSimulatingWave] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09, delayChildren: 0.05 } },
  };

  const item: Variants = {
    hidden: shouldReduceMotion ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-slate-200">
      {/* Soft Ambient Luminous Accent Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning & Identity */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status Badges */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>AI Full Stack Developer</span>
              </span>

              {/* Founder callout chip */}
              <a
                href="#aptiscript"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 hover:text-indigo-700 hover:border-indigo-300 transition-colors shadow-sm"
              >
                <Building2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Founder @ AptiScript Technologies →</span>
              </a>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={item} className="space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-600 tracking-wider uppercase">
                {profileData.name} • PORTFOLIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Architecting Production{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-[length:200%_auto] animate-[techShimmer_6s_linear_infinite]">
                  Full-Stack Systems
                </span>{" "}
                & Multi-Agent AI.
              </h1>
              <BuildingLine />
            </motion.div>

            {/* Supporting Positioning */}
            <motion.p variants={item} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Software engineer currently working as an{" "}
              <strong className="text-slate-900 font-semibold">AI Full Stack Developer at Devline Solutions</strong>.
              Focused on scalable backend APIs, database architectures, DevOps pipelines, and AI-integrated products that solve real operational bottlenecks.
            </motion.p>

            {/* Meta tags */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                {profileData.location}
              </span>
              <span>•</span>
              <span>BS Software Engineering (UCP Lahore)</span>
              <span>•</span>
              <span className="text-indigo-600 font-semibold">Flagship: MindMesh</span>
            </motion.div>

            {/* Core Action CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profileData.resumeUrl}
                download="Sheikh-Sudais-Resume.pdf"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/30 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
                id="hero-resume-cta"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#mindmesh"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl shadow-sm transition-all"
                id="hero-projects-cta"
              >
                <span>Inspect Flagship</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="#contact"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </motion.div>

            {/* Social Profile Links */}
            <motion.div variants={item} className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Socials:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 hover:text-indigo-600 hover:border-indigo-300 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Tech Interactive Architecture Visualizer Card */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            {/* Floating Tech Micro-Badges */}
            <div className="absolute -top-4 -left-4 z-20 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-2.5 animate-float-slow">
              <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-200">Next.js 15 App Router</div>
                <div className="text-[9px] font-mono text-emerald-400 font-semibold">Sub-2s First Paint</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 z-20 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-2.5 animate-float-slow" style={{ animationDelay: "2s" }}>
              <div className="w-7 h-7 rounded-lg bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-200">MindMesh Engine</div>
                <div className="text-[9px] font-mono text-indigo-400 font-semibold">4 Autonomous Agents</div>
              </div>
            </div>

            {/* Central Interactive Tech Card */}
            <SpotlightCard className="tech-terminal-panel rounded-3xl p-6 shadow-2xl space-y-5" tiltStrength={6}>
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono font-semibold text-slate-400">
                    system-architecture://mindmesh
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded-md border border-indigo-500/30">
                  LIVE PIPELINE
                </span>
              </div>

              {/* Visual Interactive Pipeline Nodes */}
              <div className="space-y-3">
                {/* Node 1: Input & Whisper Audio */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">Meeting Audio Stream</div>
                      <div className="text-[10px] font-mono text-slate-400">Whisper 16kHz Speech Ingestion</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsSimulatingWave(!isSimulatingWave)}
                    type="button"
                    className="btn-tactile inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 rounded-lg shadow-sm transition-colors"
                  >
                    {isSimulatingWave ? <Volume2 className="w-3 h-3 text-emerald-400" /> : <Play className="w-3 h-3 text-indigo-400" />}
                    <span>{isSimulatingWave ? "Streaming" : "Simulate"}</span>
                  </button>
                </div>

                {/* Simulated Audio Waveform */}
                <div className="h-8 flex items-center justify-between gap-1 px-3 py-1.5 bg-slate-950/40 rounded-xl border border-slate-800/50">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 70, 35, 85, 60, 40].map((val, idx) => (
                    <div
                      key={idx}
                      className={`w-1 rounded-full transition-all duration-200 ${
                        isSimulatingWave ? "bg-indigo-400 animate-pulse" : "bg-slate-700"
                      }`}
                      style={{ height: isSimulatingWave ? `${Math.max(25, (val + idx * 6) % 100)}%` : "30%" }}
                    />
                  ))}
                </div>

                {/* Node 2: Multi-Agent Router */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">Multi-Agent Event Bus</div>
                      <div className="text-[10px] font-mono text-slate-400">Sprint Decomposer & Task Engine</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Active
                  </span>
                </div>

                {/* Node 3: Hybrid Persistence */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-200">Hybrid Persistence Layer</div>
                      <div className="text-[10px] font-mono text-slate-400">MongoDB (State) + PostgreSQL (ACID)</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                    Synced
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
