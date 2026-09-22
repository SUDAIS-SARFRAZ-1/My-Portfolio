"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  intent: z.enum(["job", "freelance", "aptiscript", "collaboration", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  hp_website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    intent: "job",
    message: "",
    hp_website: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setResponseMsg("");

    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          intent: "job",
          message: "",
          hp_website: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error occurred. Please try again or email me directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Spam Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_website">Website URL</label>
        <input
          id="hp_website"
          type="text"
          name="hp_website"
          value={formData.hp_website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
            Your Name <span className="text-indigo-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 text-white placeholder:text-slate-500 text-sm border transition-colors ${
              errors.name ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            } focus-visible:outline-none`}
          />
          {errors.name && <p className="text-xs text-rose-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
            Your Email <span className="text-indigo-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@example.com"
            className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 text-white placeholder:text-slate-500 text-sm border transition-colors ${
              errors.email ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            } focus-visible:outline-none`}
          />
          {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
        </div>
      </div>

      {/* Inquiry Type */}
      <div className="space-y-1.5">
        <label htmlFor="contact-intent" className="block text-xs font-semibold text-slate-300">
          Inquiry Type (Optional)
        </label>
        <select
          id="contact-intent"
          name="intent"
          value={formData.intent}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 text-slate-200 text-sm border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus-visible:outline-none"
        >
          <option value="job" className="bg-slate-900 text-white">Job Opportunity (Full-Time / Contract)</option>
          <option value="freelance" className="bg-slate-900 text-white">Freelance Project</option>
          <option value="aptiscript" className="bg-slate-900 text-white">AptiScript Inquiry (Team Software Development)</option>
          <option value="collaboration" className="bg-slate-900 text-white">Collaboration / Open Source</option>
          <option value="other" className="bg-slate-900 text-white">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
          Message <span className="text-indigo-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share details about your team, role, or project..."
          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 text-white placeholder:text-slate-500 text-sm border transition-colors resize-y ${
            errors.message ? "border-rose-500 bg-rose-950/20" : "border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          } focus-visible:outline-none`}
        />
        {errors.message && <p className="text-xs text-rose-400">{errors.message}</p>}
      </div>

      {/* Feedback status messages */}
      {status === "success" && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>{responseMsg}</span>
        </div>
      )}

      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{responseMsg}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-lg shadow-indigo-600/30 transition-all focus-visible:ring-2 focus-visible:ring-indigo-400"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
