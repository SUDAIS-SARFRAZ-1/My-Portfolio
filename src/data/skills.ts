export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Modern, performant, and accessible interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "State & Data Fetching",
    description: "Predictable client and server state synchronization.",
    skills: ["Zustand", "React Query"],
  },
  {
    category: "Backend",
    description: "Robust, secure, and production-tested API architectures.",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication (JWT)",
      "Authorization / RBAC",
      "WebSockets",
      "Webhooks",
      "OAuth",
    ],
  },
  {
    category: "Databases",
    description: "Relational integrity, flexible document stores, and caching.",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "ORM & Infrastructure",
    description: "Database modeling, migrations, and serverless backends.",
    skills: ["Prisma", "Supabase", "Neon"],
  },
  {
    category: "DevOps & Deployment",
    description: "Repeatable containerization and continuous integration.",
    skills: ["Docker", "Git", "GitHub", "GitHub Actions (CI/CD)", "Vercel", "Render"],
  },
  {
    category: "AI Integration",
    description: "Product-level artificial intelligence workflows.",
    skills: [
      "LLM APIs",
      "AI Agents",
      "Speech-to-Text",
      "OpenAI Whisper",
      "AI-Assisted Application Workflows",
    ],
  },
];
