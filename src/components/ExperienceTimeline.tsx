import { experienceData } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 02. EXPERIENCE"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work History & Engineering Impact
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Verified responsibilities and hands-on software development across enterprise full-stack systems and technical leadership.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="tech-glass-card p-6 sm:p-8 rounded-3xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-indigo-400 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-3 sm:gap-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Core Responsibilities & Deliverables:
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950/60 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
