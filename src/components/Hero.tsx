"use client";

import { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Hero() {
  const [isSimulatingWave, setIsSimulatingWave] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5">
      {/* Soft Ambient Luminous Accent Spheres */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning & Identity */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>AI Full Stack Developer</span>
              </span>

              {/* Founder callout chip */}
              <a
                href="#aptiscript"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 backdrop-blur-md border border-white/10 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-colors shadow-sm"
              >
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Founder @ AptiScript Technologies →</span>
              </a>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-400 tracking-wider uppercase">
                {profileData.name} • PORTFOLIO
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Architecting Production{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                  Full-Stack Systems
                </span>{" "}
                & Multi-Agent AI.
              </h1>
            </div>

            {/* Supporting Positioning */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Software engineer currently working as an{" "}
              <strong className="text-white font-semibold">AI Full Stack Developer at Devline Solutions</strong>. 
              Focused on scalable backend APIs, database architectures, DevOps pipelines, and AI-integrated products that solve real operational bottlenecks.
            </p>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                {profileData.location}
              </span>
              <span>•</span>
              <span>BS Software Engineering (UCP Lahore)</span>
              <span>•</span>
              <span className="text-indigo-400 font-semibold">Flagship: MindMesh</span>
            </div>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profileData.resumeUrl}
                download="Sheikh-Sudais-Resume.pdf"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
                id="hero-resume-cta"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                href="#mindmesh"
                className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all"
                id="hero-projects-cta"
              >
                <span>Inspect Flagship</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="#contact"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Profile Links */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Socials:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:text-indigo-400 hover:border-indigo-500/40 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:text-indigo-400 hover:border-indigo-500/40 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Architecture Visualizer Card */}
          <div className="lg:col-span-5 relative">
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
            <div className="tech-glass-card rounded-3xl p-6 border border-white/10 shadow-2xl space-y-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
