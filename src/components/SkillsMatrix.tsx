import { skillsData } from "@/data/skills";
import { Layout, Activity, Server, Database, Layers, Terminal, Cpu } from "lucide-react";

export default function SkillsMatrix() {
  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layout className="w-4 h-4 text-indigo-400" />,
    "State & Data Fetching": <Activity className="w-4 h-4 text-cyan-400" />,
    Backend: <Server className="w-4 h-4 text-emerald-400" />,
    Databases: <Database className="w-4 h-4 text-amber-400" />,
    "ORM & Infrastructure": <Layers className="w-4 h-4 text-purple-400" />,
    "DevOps & Deployment": <Terminal className="w-4 h-4 text-cyan-400" />,
    "AI Integration": <Cpu className="w-4 h-4 text-indigo-400" />,
  };

  return (
    <section id="skills" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 04. SKILLS & CAPABILITY MAP"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Grouped by Engineering Domain
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Technologies actively engineered across production applications, backend APIs, relational models, and DevOps pipelines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <div
              key={group.category}
              className="tech-glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 shadow-sm">
                    {categoryIcons[group.category] || <Cpu className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={`${group.category}-${skill}`}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950/60 text-slate-300 border border-slate-800 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
