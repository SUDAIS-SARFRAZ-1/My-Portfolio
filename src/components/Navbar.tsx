"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, FileDown, Code2 } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "MindMesh", href: "#mindmesh" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Approach", href: "#approach" },
  { name: "AptiScript", href: "#aptiscript" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[60] -translate-y-24 focus:translate-y-0 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-lg transition-transform focus-visible:ring-2 focus-visible:ring-indigo-300"
      >
        Skip to main content
      </a>
      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-200">
      <div className="backdrop-blur-xl bg-slate-900/85 border border-white/10 shadow-xl shadow-black/50 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand & Live Status */}
        <Link
          href="#"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
          aria-label="Sheikh Sudais - Home"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-100 font-bold text-sm tracking-tight group-hover:text-indigo-400 transition-colors">
              {profileData.name}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Drawer Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={profileData.resumeUrl}
            download="Sheikh-Sudais-Resume.pdf"
            className="btn-tactile inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-md shadow-indigo-600/30 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Download Resume PDF"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile / tablet drawer toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="xl:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden mt-2 p-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "text-indigo-400 bg-white/5"
                      : "text-slate-200 hover:text-indigo-400 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={profileData.resumeUrl}
              download="Sheikh-Sudais-Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="btn-tactile w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full Resume</span>
            </a>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
