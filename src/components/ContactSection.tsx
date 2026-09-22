"use client";

import { useState } from "react";
import { Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { profileData } from "@/data/profile";
import ContactForm from "./ContactForm";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import SectionHeading from "@/components/SectionHeading";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Get In Touch"
          title="Contact & Collaboration Inquiries"
          description="Reach out for full-time engineering roles, high-impact AI Full Stack contract opportunities, or team deliverables via AptiScript Technologies."
        />

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Channels Column */}
          <RevealItem className="lg:col-span-5 space-y-5">
            <SpotlightCard className="tech-glass-card p-6 sm:p-7 rounded-3xl space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-indigo-600 uppercase">
                  Direct Channels
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Let&apos;s Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  I respond to serious engineering inquiries promptly.
                </p>
              </div>

              {/* Copy Email Box */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-600">Email Address:</span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-700 truncate font-medium">
                      {profileData.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="btn-tactile p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-emerald-600 font-mono font-medium">
                    ✓ Copied to clipboard!
                  </p>
                )}
              </div>

              {/* Location & Timezone Details */}
              <div className="pt-3 border-t border-slate-200 space-y-2.5 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{profileData.location} (PKT / UTC+5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Open to global remote and hybrid arrangements</span>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
                >
                  <GithubIcon className="w-4 h-4 text-slate-500" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </SpotlightCard>
          </RevealItem>

          {/* Form Column */}
          <RevealItem className="lg:col-span-7">
          <SpotlightCard className="p-6 sm:p-8 rounded-3xl tech-glass-card">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill out the details below to start a technical conversation.
            </p>
            <ContactForm />
          </SpotlightCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
