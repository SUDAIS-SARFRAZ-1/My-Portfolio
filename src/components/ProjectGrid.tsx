import Image from "next/image";
import { projectsData } from "@/data/projects";
import { ExternalLink, CheckCircle2, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectGrid() {
  const otherProjects = projectsData.filter((p) => !p.isFlagship);

  const projectImages: Record<string, string> = {
    moviemania: "/images/moviemania.jpg",
    "finance-tracker": "/images/financetracker.jpg",
  };

  return (
    <section id="projects" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Selected Software Deliverables"
          title="Production Applications & Resilient APIs"
          description="Demonstrated engineering execution across modern Next.js, MERN stack, high-performance RESTful APIs, and relational schemas."
        />

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {otherProjects.map((project, idx) => {
            const colSpanClass =
              idx === 0
                ? "lg:col-span-7"
                : idx === 1
                ? "lg:col-span-5"
                : "lg:col-span-12";

            const hasImage = Boolean(projectImages[project.id]);
            const isWide = idx === 2;

            if (isWide) {
              return (
                <RevealItem key={project.id} className={colSpanClass}>
                <SpotlightCard
                  className={`tech-glass-card rounded-3xl group overflow-hidden`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 sm:p-8">
                    {/* Identity Column */}
                    <div className="lg:col-span-2 space-y-4 lg:border-r lg:border-slate-200 lg:pr-8">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md border border-indigo-200 w-fit">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition-all btn-tactile"
                              aria-label={`${project.title} GitHub`}
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition-all btn-tactile"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                        <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Production Microservice & Relational Core</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" />
                        </h3>
                        <p className="text-xs font-mono text-indigo-600 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-3 border-t border-slate-200 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 text-slate-600 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights Column */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                      <span className="text-xs font-mono font-semibold text-slate-500 block mb-3">
                        Architecture Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-slate-600 p-3 rounded-xl bg-slate-50 border border-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
                </RevealItem>
              );
            }

            return (
              <RevealItem key={project.id} className={colSpanClass}>
              <SpotlightCard
                className={`tech-glass-card flex flex-col justify-between rounded-3xl group overflow-hidden`}
              >
                <div>
                  {hasImage ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-200">
                      <Image
                        src={projectImages[project.id]}
                        alt={`${project.title} Preview Screen`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm transition-all btn-tactile"
                            aria-label={`${project.title} GitHub`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/30 transition-all btn-tactile"
                            aria-label={`${project.title} Live Demo`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="h-44 w-full tech-terminal-panel p-6 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-md border border-indigo-500/30 w-fit">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white border border-white/10 shadow-sm transition-all btn-tactile"
                              aria-label={`${project.title} GitHub`}
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all btn-tactile"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                        <Terminal className="w-4 h-4 text-indigo-400" />
                        <span>Production Microservice & Relational Core</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600" />
                        </h3>
                        <p className="text-xs font-mono text-indigo-600 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      {hasImage && (
                        <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="pt-3 border-t border-slate-200 space-y-2">
                      <span className="text-xs font-mono font-semibold text-slate-500 block mb-1">
                        Architecture Highlights:
                      </span>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-50 text-slate-600 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
