import { experienceData } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Work History & Engineering Impact"
          description="Verified responsibilities and hands-on software development across enterprise full-stack systems and technical leadership."
        />

        <RevealGroup className="space-y-8 max-w-4xl">
          {experienceData.map((exp) => (
            <RevealItem key={exp.company}>
            <SpotlightCard
              className="tech-glass-card p-6 sm:p-8 rounded-3xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-indigo-600 mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-500 gap-3 sm:gap-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {exp.summary}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Core Responsibilities & Deliverables:
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
