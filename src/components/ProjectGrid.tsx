import Image from "next/image";
import { projectsData } from "@/data/projects";
import { ExternalLink, CheckCircle2, ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export default function ProjectGrid() {
  const otherProjects = projectsData.filter((p) => !p.isFlagship);

  const projectImages: Record<string, string> = {
    moviemania: "/images/moviemania.jpg",
    "finance-tracker": "/images/financetracker.jpg",
  };

  return (
    <section id="projects" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 03. SELECTED SOFTWARE DELIVERABLES"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Applications & Resilient APIs
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Demonstrated engineering execution across modern Next.js, MERN stack, high-performance RESTful APIs, and relational schemas.
          </p>
        </div>

        {/* Asymmetric Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {otherProjects.map((project, idx) => {
            // Give the first project (MovieMania) a prominent 7-column span, the second (Finance Tracker) a 5-column span, and third (FitVerse) full-width or balanced
            const colSpanClass =
              idx === 0
                ? "lg:col-span-7"
                : idx === 1
                ? "lg:col-span-5"
                : "lg:col-span-12";

            const hasImage = Boolean(projectImages[project.id]);
            const isWide = idx === 2;

            // Wide (full-width) cards without a screenshot get a dedicated
            // horizontal split so paragraph text keeps a comfortable reading
            // width instead of stretching across the full 12-column row.
            if (isWide) {
              return (
                <div
                  key={project.id}
                  className={`tech-glass-card rounded-3xl group overflow-hidden ${colSpanClass}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 sm:p-8">
                    {/* Identity Column */}
                    <div className="lg:col-span-2 space-y-4 lg:border-r lg:border-slate-800 lg:pr-8">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-mono font-semibold text-indigo-400 bg-indigo-950/70 px-3 py-1 rounded-md border border-indigo-500/30 w-fit">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 shadow-sm transition-all btn-tactile"
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

                      <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px] uppercase tracking-wider">
                        <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Production Microservice & Relational Core</span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                        </h3>
                        <p className="text-xs font-mono text-indigo-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/60 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights Column */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                      <span className="text-xs font-mono font-semibold text-slate-400 block mb-3">
                        Architecture Highlights:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map((f) => (
                          <div
                            key={f}
                            className="flex items-start gap-2.5 text-sm text-slate-300 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className={`tech-glass-card flex flex-col justify-between rounded-3xl group overflow-hidden ${colSpanClass}`}
              >
                <div>
                  {/* Project Visual Header */}
                  {hasImage ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
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
                            className="p-2 rounded-xl bg-slate-900/90 backdrop-blur-md text-slate-300 hover:text-white border border-white/10 shadow-sm transition-all btn-tactile"
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
                  ) : (
                    <div className="h-44 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col justify-between relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-semibold text-indigo-400 bg-indigo-950/70 px-3 py-1 rounded-md border border-indigo-500/30 w-fit">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-2">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 shadow-sm transition-all btn-tactile"
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

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                        </h3>
                        <p className="text-xs font-mono text-indigo-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      {hasImage && (
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                          {project.category}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                        Architecture Highlights:
                      </span>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 4).map((f) => (
                          <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="p-6 sm:p-7 pt-0 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-950/60 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
