import { skillsData } from "@/data/skills";
import { Layout, Activity, Server, Database, Layers, Terminal, Cpu } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function SkillsMatrix() {
  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layout className="w-4 h-4 text-indigo-600" />,
    "State & Data Fetching": <Activity className="w-4 h-4 text-cyan-600" />,
    Backend: <Server className="w-4 h-4 text-emerald-600" />,
    Databases: <Database className="w-4 h-4 text-amber-600" />,
    "ORM & Infrastructure": <Layers className="w-4 h-4 text-purple-600" />,
    "DevOps & Deployment": <Terminal className="w-4 h-4 text-cyan-600" />,
    "AI Integration": <Cpu className="w-4 h-4 text-indigo-600" />,
  };

  return (
    <section id="skills" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Skills & Capability Map"
          title="Grouped by Engineering Domain"
          description="Technologies actively engineered across production applications, backend APIs, relational models, and DevOps pipelines."
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <RevealItem key={group.category}>
            <SpotlightCard
              className="tech-glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.category}-${skill}`}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-700 hover:scale-105 transition-all shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
