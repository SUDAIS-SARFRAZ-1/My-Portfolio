"use client";

import { useState } from "react";
import { Layers, ShieldCheck, Cpu, Rocket, CheckCircle2 } from "lucide-react";

export default function EngineeringStatusMockup() {
  const [isDeploying, setIsDeploying] = useState(false);

  return (
    <div className="w-full h-full bg-slate-950 p-4 sm:p-6 flex flex-col justify-center gap-4">
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono font-semibold text-slate-400">
            engineer://sudais-sarfraz
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          AVAILABLE
        </span>
      </div>

      {/* Capability Rows */}
      <div className="space-y-3">
        {/* Row 1: Full-Stack Deployment (interactive) */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Full-Stack Deployment</div>
              <div className="text-[10px] font-mono text-slate-400">Next.js Build & CI/CD Pipeline</div>
            </div>
          </div>
          <button
            onClick={() => setIsDeploying(!isDeploying)}
            type="button"
            className="btn-tactile inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-indigo-500/30 rounded-lg shadow-sm transition-colors"
          >
            {isDeploying ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <Cpu className="w-3 h-3 text-indigo-400" />}
            <span>{isDeploying ? "Deployed" : "Deploy"}</span>
          </button>
        </div>

        {/* Simulated Build Progress Bar */}
        <div className="h-2.5 w-full bg-slate-950/60 rounded-full border border-slate-800/50 overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all ${
              isDeploying ? "w-full duration-[1400ms]" : "w-[6%] duration-300"
            }`}
          />
        </div>

        {/* Row 2: Backend Architecture */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Backend Architecture</div>
              <div className="text-[10px] font-mono text-slate-400">REST APIs, JWT Auth & RBAC</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
            Secured
          </span>
        </div>

        {/* Row 3: Multi-Agent AI Systems */}
        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-200">Multi-Agent AI Systems</div>
              <div className="text-[10px] font-mono text-slate-400">LLM Orchestration & Whisper STT</div>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
