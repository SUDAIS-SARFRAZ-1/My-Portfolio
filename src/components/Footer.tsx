import Link from "next/link";
import { Code2, Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#060913]/95 py-14 text-slate-400 text-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Current Role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold">{profileData.name}</div>
              <div className="text-xs text-slate-400 font-medium">
                {profileData.role} • {profileData.location}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium">
            <Link href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-indigo-400 transition-colors">
              Experience
            </Link>
            <Link href="#mindmesh" className="hover:text-indigo-400 transition-colors">
              MindMesh
            </Link>
            <Link href="#projects" className="hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-indigo-400 transition-colors">
              Skills
            </Link>
            <Link href="#approach" className="hover:text-indigo-400 transition-colors">
              Approach
            </Link>
            <Link href="#aptiscript" className="hover:text-indigo-400 transition-colors">
              AptiScript
            </Link>
            <Link href="#contact" className="hover:text-indigo-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Resume & Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.resumeUrl}
              download="Sheikh-Sudais-Resume.pdf"
              className="btn-tactile inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="btn-tactile p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Tech Note */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            Next.js 15 App Router · TypeScript · Taste Design Dark System
          </div>
        </div>
      </div>
    </footer>
  );
}
