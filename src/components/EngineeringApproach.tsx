import { engineeringPrinciples } from "@/data/approach";
import { Layers, Server, Cpu, RefreshCw, Compass, CheckCircle2 } from "lucide-react";

export default function EngineeringApproach() {
  const icons: Record<string, React.ReactNode> = {
    "end-to-end": <Layers className="w-5 h-5 text-indigo-400" />,
    "backend-first": <Server className="w-5 h-5 text-emerald-400" />,
    automation: <RefreshCw className="w-5 h-5 text-cyan-400" />,
    "ai-product": <Cpu className="w-5 h-5 text-purple-400" />,
    "continuous-learning": <Compass className="w-5 h-5 text-amber-400" />,
  };

  return (
    <section id="approach" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 05. ENGINEERING APPROACH"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build & Architect Software
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Technical principles guiding system design, API contracts, deployment predictability, and product execution.
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.id}
              className="tech-glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-sm">
                    {icons[principle.id] || <Layers className="w-5 h-5 text-indigo-400" />}
                  </div>
                  <span className="text-xs font-mono font-semibold text-indigo-300 bg-indigo-950/70 border border-indigo-500/30 px-2.5 py-0.5 rounded-md">
                    {principle.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {principle.title}
                  </h3>
                  <span className="text-xs font-medium text-indigo-400 font-mono">
                    {principle.subtitle}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
