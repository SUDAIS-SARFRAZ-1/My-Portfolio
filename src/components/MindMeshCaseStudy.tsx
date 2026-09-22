"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Database,
  Layers,
  Cpu,
  Mic,
  ArrowDown,
  Info,
  Laptop,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";

type Slide = { src: string; alt: string };

export default function MindMeshCaseStudy() {
  const mindmesh = projectsData.find((p) => p.id === "mindmesh");
  const [selectedNode, setSelectedNode] = useState<string>("backend");

  const screenshots: Slide[] = [
    { src: "/images/mindmesh-2.jpg", alt: "MindMesh project overview dashboard" },
    { src: "/images/mindmesh-3.jpg", alt: "MindMesh meeting intelligence audio upload" },
    { src: "/images/mindmesh-4.jpg", alt: "MindMesh AI document parsing pipeline" },
    { src: "/images/mindmesh-5.jpg", alt: "MindMesh generated backlog review and edit" },
    { src: "/images/mindmesh-6.jpg", alt: "MindMesh sprint planning kanban board" },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  const goToPrevSlide = () =>
    setSlideIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const goToNextSlide = () =>
    setSlideIndex((i) => (i + 1) % screenshots.length);

  if (!mindmesh) return null;

  const nodeDetails: Record<string, { title: string; subtitle: string; description: string; tech: string }> = {
    user: {
      title: "User / Engineering Team & PM",
      subtitle: "Sprint Planning & Voice Meeting Participants",
      description: "Project managers and developers speak during planning or paste raw specs into the UI. The platform ingests real-time inputs without complex form-filling.",
      tech: "Audio Streams / WebSockets",
    },
    frontend: {
      title: "Frontend Client Tier",
      subtitle: "React & Next.js App Router",
      description: "Single-page responsive dashboard providing sprint backlogs, kanban views, live meeting transcription, and collaborative ticket editing.",
      tech: "Next.js (App Router), React, Tailwind CSS, Zustand",
    },
    backend: {
      title: "Backend Services & API Layer",
      subtitle: "Node.js (Express) & FastAPI (Python)",
      description: "Handles business logic, route authorization, WebSocket broadcast channels, and coordinates communication with AI inference microservices.",
      tech: "Node.js, Express, Python FastAPI, WebSockets (Socket.io)",
    },
    postgres: {
      title: "Relational Database: PostgreSQL",
      subtitle: "Structured Sprints, Users & RBAC",
      description: "Enforces strict relational integrity, ACID transactions for milestone dependencies, role-based access control, and user session records.",
      tech: "PostgreSQL, Prisma ORM, SQL Indexes",
    },
    mongo: {
      title: "Document Database: MongoDB",
      subtitle: "Unstructured Meeting Transcripts & Agent States",
      description: "Stores variable-length speech transcripts, raw meeting recordings, dynamic LLM prompts, and intermediate agent scratchpads.",
      tech: "MongoDB, Mongoose, JSON Collections",
    },
    llm: {
      title: "AI Layer: Large Language Models",
      subtitle: "Task Decomposition & Agile Artifact Generation",
      description: "Analyzes meeting transcripts to extract consensus decisions, user stories, acceptance criteria, and formatted markdown sprint tickets.",
      tech: "OpenAI GPT Models, Structured Output Parsing",
    },
    whisper: {
      title: "Speech Intelligence: OpenAI Whisper",
      subtitle: "Voice-to-Text Transcription Pipeline",
      description: "Converts meeting audio recordings into high-accuracy text transcripts, attributing speech segments to specific agenda topics.",
      tech: "Whisper 16kHz Model, Audio Chunking",
    },
  };

  const active = nodeDetails[selectedNode] || nodeDetails["backend"];

  return (
    <section id="mindmesh" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Flagship Positioning */}
        <Reveal className="space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>FLAGSHIP TECHNICAL CASE STUDY</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                {mindmesh.title}
              </h2>
              <p className="text-lg sm:text-xl text-indigo-600 font-semibold mt-1">
                {mindmesh.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {mindmesh.repoUrl && (
                <a
                  href={mindmesh.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {mindmesh.demoUrl && (
                <a
                  href={mindmesh.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg max-w-4xl leading-relaxed pt-1">
            {mindmesh.description}
          </p>
        </Reveal>

        {/* Visual Dashboard Screen Mockup */}
        <Reveal className="mb-14 rounded-3xl p-3 sm:p-4 tech-terminal-panel overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 text-slate-400 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-300 font-medium">MindMesh Platform • Production Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400">
              <Laptop className="w-3.5 h-3.5" />
              <span>Multi-Agent Orchestrator View</span>
            </div>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mt-2 bg-slate-950 group">
            {screenshots.map((shot, idx) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                quality={100}
                className={`object-contain transition-opacity duration-500 ${
                  idx === slideIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                priority={idx === 0}
              />
            ))}

            {/* Prev / Next controls — click only, no autoplay */}
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous screenshot"
              className="btn-tactile absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-900/70 text-white border border-white/10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next screenshot"
              className="btn-tactile absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-slate-900/70 text-white border border-white/10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {screenshots.map((shot, idx) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setSlideIndex(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                  aria-current={idx === slideIndex}
                  className={`btn-tactile h-1.5 rounded-full transition-all ${
                    idx === slideIndex ? "w-5 bg-indigo-400" : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Problem & Solution Grid */}
        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <RevealItem className="p-6 sm:p-7 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
              The Operational Problem
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Fragmented Planning & Unstructured Meeting Notes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {mindmesh.problem}
            </p>
          </RevealItem>

          <RevealItem className="p-6 sm:p-7 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
              The Engineering Solution
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              AI Speech Ingestion to Structured Agile Artifacts
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {mindmesh.solution}
            </p>
          </RevealItem>
        </RevealGroup>

        {/* Interactive Architecture Flow Diagram */}
        <Reveal>
        <SpotlightCard className="p-6 sm:p-8 rounded-3xl tech-glass-card mb-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Interactive System Architecture Diagram
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Click any component to inspect technical decisions
            </span>
          </div>

          {/* Visual Architecture Flow Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Diagram Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center space-y-3 p-5 tech-terminal-panel rounded-2xl">
              {/* User / PM Box */}
              <button
                type="button"
                onClick={() => setSelectedNode("user")}
                className={`btn-tactile w-full max-w-sm py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  selectedNode === "user"
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                }`}
              >
                User / Project Manager
              </button>

              <ArrowDown className="w-4 h-4 text-slate-500" />

              {/* Frontend Box */}
              <button
                type="button"
                onClick={() => setSelectedNode("frontend")}
                className={`btn-tactile w-full max-w-sm py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  selectedNode === "frontend"
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                }`}
              >
                Frontend (React / Next.js)
              </button>

              <ArrowDown className="w-4 h-4 text-slate-500" />

              {/* Backend Box */}
              <button
                type="button"
                onClick={() => setSelectedNode("backend")}
                className={`btn-tactile w-full max-w-sm py-2.5 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  selectedNode === "backend"
                    ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                }`}
              >
                Backend & APIs (Node.js / Express / FastAPI)
              </button>

              <ArrowDown className="w-4 h-4 text-slate-500" />

              {/* Lower Tier: Databases & AI Layer */}
              <div className="grid grid-cols-3 gap-2.5 w-full max-w-md pt-1">
                <button
                  type="button"
                  onClick={() => setSelectedNode("postgres")}
                  className={`btn-tactile p-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedNode === "postgres"
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                  }`}
                >
                  <Database className="w-4 h-4 mx-auto mb-1.5" />
                  PostgreSQL
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedNode("mongo")}
                  className={`btn-tactile p-3 rounded-xl border text-xs font-semibold transition-all ${
                    selectedNode === "mongo"
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                  }`}
                >
                  <Layers className="w-4 h-4 mx-auto mb-1.5" />
                  MongoDB
                </button>

                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSelectedNode("llm")}
                    className={`btn-tactile p-2 rounded-lg border text-[11px] font-semibold transition-all ${
                      selectedNode === "llm"
                        ? "bg-indigo-600 text-white border-indigo-500"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 mx-auto mb-0.5" />
                    LLM Engine
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedNode("whisper")}
                    className={`btn-tactile p-2 rounded-lg border text-[11px] font-semibold transition-all ${
                      selectedNode === "whisper"
                        ? "bg-indigo-600 text-white border-indigo-500"
                        : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"
                    }`}
                  >
                    <Mic className="w-3.5 h-3.5 mx-auto mb-0.5" />
                    Whisper Speech
                  </button>
                </div>
              </div>
            </div>

            {/* Selected Node Details Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl tech-terminal-panel space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-400 uppercase">
                <Info className="w-4 h-4" />
                <span>Architecture Inspector</span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">{active.title}</h4>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{active.subtitle}</p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {active.description}
              </p>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 block mb-1">Key Technologies:</span>
                <span className="inline-block text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/30">
                  {active.tech}
                </span>
              </div>
            </div>
          </div>
        </SpotlightCard>
        </Reveal>

        {/* Feature Verification Checklist & Stack */}
        <Reveal>
        <SpotlightCard className="p-6 sm:p-8 rounded-3xl tech-glass-card space-y-6">
          <h3 className="text-lg font-bold text-slate-900">
            Core Technical Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mindmesh.features.map((feat) => (
              <div key={feat} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
            {mindmesh.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
