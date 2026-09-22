import { GraduationCap, Briefcase, Users, CheckCircle2 } from "lucide-react";
import { educationData } from "@/data/education";
import { profileData } from "@/data/profile";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="About & Background"
          title="Engineering Depth with Practical Execution"
          description="Focused on architecting complete software products—from database schemas and resilient APIs to deployment and continuous delivery."
        />

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <RevealItem className="lg:col-span-7">
          <SpotlightCard className="space-y-5 text-slate-600 leading-relaxed text-base tech-glass-card p-6 sm:p-8 rounded-3xl">
            <p>
              I am a Software Engineering graduate from the{" "}
              <strong className="text-slate-900 font-semibold">{educationData.institution}</strong> (Graduation: {educationData.graduationYear}, {educationData.grade}), with hands-on experience designing and delivering production full-stack web applications and cloud services.
            </p>
            <p>
              Currently working as an <strong className="text-indigo-600 font-semibold">AI Full Stack Developer at {profileData.company}</strong>, I combine conventional full-stack web engineering with LLM-orchestrated agent workflows, OpenAI Whisper speech processing, and automated sprint planning pipelines.
            </p>
            <p>
              My flagship system, <strong className="text-slate-900 font-semibold">MindMesh</strong>, represents this architecture in action: an AI-assisted project intelligence platform integrating meeting audio transcription, multi-agent decomposition, and dual-database hybrid storage.
            </p>
            <p>
              In parallel, I founded <strong className="text-indigo-600 font-semibold">{profileData.agency.name}</strong>, a software agency delivering end-to-end web, mobile, and cloud infrastructure through a dedicated engineering team.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200">
              {[
                "Full-Stack Web & Next.js App Router",
                "Backend Architecture & RESTful APIs",
                "Hybrid Relational & Document Databases",
                "Docker Containerization & GitHub CI/CD",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
          </RevealItem>

          {/* Quick Credential Cards Column */}
          <RevealItem className="lg:col-span-5 space-y-4">
            <SpotlightCard className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-indigo-600 uppercase">Current Role</span>
                <div className="text-base font-bold text-slate-900">{profileData.company}</div>
                <p className="text-xs text-slate-500">{profileData.role}</p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0 shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-cyan-600 uppercase">Education</span>
                <div className="text-base font-bold text-slate-900">{educationData.degree}</div>
                <p className="text-xs text-slate-500">{educationData.institution} • {educationData.grade}</p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="tech-glass-card p-5 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-purple-600 uppercase">Agency Leadership</span>
                <div className="text-base font-bold text-slate-900">{profileData.agency.name}</div>
                <p className="text-xs text-slate-500">Founder & Technical Lead</p>
              </div>
            </SpotlightCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
