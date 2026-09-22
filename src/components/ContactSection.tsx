"use client";

import { useState } from "react";
import { Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
            {"// 06. GET IN TOUCH"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Collaboration Inquiries
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            Reach out for full-time engineering roles, high-impact AI Full Stack contract opportunities, or team deliverables via AptiScript Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="tech-glass-card p-6 sm:p-7 rounded-3xl space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-indigo-400 uppercase">
                  Direct Channels
                </span>
                <h3 className="text-xl font-bold text-white">
                  Let&apos;s Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  I respond to serious engineering inquiries promptly.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-300">Email Address:</span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-200 truncate font-medium">
                      {profileData.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="btn-tactile p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-emerald-400 font-mono font-medium">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Timezone Details */}
              <div className="pt-3 border-t border-slate-800 space-y-2.5 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{profileData.location} (PKT / UTC+5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>Open to global remote and hybrid arrangements</span>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 transition-colors shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl tech-glass-card">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the details below to start a technical conversation.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
