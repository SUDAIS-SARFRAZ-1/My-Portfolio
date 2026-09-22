import { GraduationCap, Briefcase, Users, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/education";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 01. ABOUT & BACKGROUND"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Depth with Practical Execution
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Focused on architecting complete software products—from database schemas and resilient APIs to deployment and continuous delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base tech-glass-card p-6 sm:p-8 rounded-3xl">
            <p>
              I am a Software Engineering graduate from the{" "}
              <strong className="text-white font-semibold">{educationData.institution}</strong> (Graduation: {educationData.graduationYear}, {educationData.grade}), with hands-on experience designing and delivering production full-stack web applications and cloud services.
            </p>
            <p>
              Currently working as an <strong className="text-indigo-400 font-semibold">AI Full Stack Developer at {profileData.company}</strong>, I combine conventional full-stack web engineering with LLM-orchestrated agent workflows, OpenAI Whisper speech processing, and automated sprint planning pipelines.
            </p>
            <p>
              My flagship system, <strong className="text-white font-semibold">MindMesh</strong>, represents this architecture in action: an AI-assisted project intelligence platform integrating meeting audio transcription, multi-agent decomposition, and dual-database hybrid storage.
            </p>
            <p>
              In parallel, I founded <strong className="text-indigo-400 font-semibold">{profileData.agency.name}</strong>, a software agency delivering end-to-end web, mobile, and cloud infrastructure through a dedicated engineering team.
            </p>

            {/* Core Verification Badges */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800">
              {[
                "Full-Stack Web & Next.js App Router",
                "Backend Architecture & RESTful APIs",
                "Hybrid Relational & Document Databases",
                "Docker Containerization & GitHub CI/CD",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Credential Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Current Position */}
            <div className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-indigo-400 uppercase">Current Role</span>
                <div className="text-base font-bold text-white">{profileData.company}</div>
                <p className="text-xs text-slate-400">{profileData.role}</p>
              </div>
            </div>

            {/* Education */}
            <div className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase">Education</span>
                <div className="text-base font-bold text-white">{educationData.degree}</div>
                <p className="text-xs text-slate-400">{educationData.institution} • {educationData.grade}</p>
              </div>
            </div>

            {/* AptiScript Agency */}
            <div className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-purple-400 uppercase">Agency Leadership</span>
                <div className="text-base font-bold text-white">{profileData.agency.name}</div>
                <p className="text-xs text-slate-400">Founder & Technical Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
