import { profileData } from "@/data/profile";
import { Building2, ExternalLink, ArrowRight } from "lucide-react";

export default function AptiScriptCallout() {
  const services = [
    "Web Application Development",
    "Mobile App Development",
    "Backend Systems & APIs",
    "E-Commerce Solutions",
    "Business Applications",
    "DevOps & Cloud Pipelines",
    "AI-Integrated Workflows",
  ];

  return (
    <section id="aptiscript" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 tech-glass-card border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle luminous corner accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-950/70 border border-indigo-500/30 text-indigo-300">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>FOUNDER & TECHNICAL DIRECTOR</span>
                </span>
                <span className="text-xs font-mono font-medium text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                  Software House & Agency
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {profileData.agency.name}
                </h3>
                <p className="text-lg sm:text-xl font-medium text-indigo-400 font-mono">
                  &ldquo;{profileData.agency.tagline}&rdquo;
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                {profileData.agency.description}
              </p>

              {/* Clear Distinction between Individual vs Agency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    Hire Sheikh Sudais (Solo)
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    For high-impact AI Full Stack, backend architecture, multi-agent systems, or full-time roles.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
                  <span className="text-xs font-mono font-bold text-indigo-300 uppercase">
                    Hire AptiScript (Team)
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    For end-to-end client deliverables requiring a full team: UI/UX designers, mobile devs, and cloud engineers.
                  </p>
                </div>
              </div>

              {/* Service tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Agency Capabilities:
                </span>
                <div className="flex flex-wrap gap-2">
                  {services.map((svc) => (
                    <span
                      key={svc}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-950/60 text-slate-300 border border-slate-800"
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right CTA Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-950/80 border border-white/10 shadow-lg flex flex-col gap-3.5">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider text-center">
                Explore The Agency
              </span>

              <a
                href={profileData.agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>Visit AptiScript Technologies</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-tactile inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              >
                <span>Inquire for Software Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
