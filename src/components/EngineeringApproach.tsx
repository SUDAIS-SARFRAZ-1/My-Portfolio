import { engineeringPrinciples } from "@/data/approach";
import { Layers, Server, Cpu, RefreshCw, Compass, CheckCircle2 } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function EngineeringApproach() {
  const icons: Record<string, React.ReactNode> = {
    "end-to-end": <Layers className="w-5 h-5 text-indigo-600" />,
    "backend-first": <Server className="w-5 h-5 text-emerald-600" />,
    automation: <RefreshCw className="w-5 h-5 text-cyan-600" />,
    "ai-product": <Cpu className="w-5 h-5 text-purple-600" />,
    "continuous-learning": <Compass className="w-5 h-5 text-amber-600" />,
  };

  return (
    <section id="approach" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Engineering Approach"
          title="How I Build & Architect Software"
          description="Technical principles guiding system design, API contracts, deployment predictability, and product execution."
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringPrinciples.map((principle) => (
            <RevealItem key={principle.id}>
            <SpotlightCard
              className="tech-glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                    {icons[principle.id] || <Layers className="w-5 h-5 text-indigo-600" />}
                  </div>
                  <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md">
                    {principle.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {principle.title}
                  </h3>
                  <span className="text-xs font-medium text-indigo-600 font-mono">
                    {principle.subtitle}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Production Standard</span>
              </div>
            </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
