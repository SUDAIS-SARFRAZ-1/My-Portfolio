export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming languages across the stack.",
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    description: "Modern, performant, and accessible interfaces.",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "React Router"],
  },
  {
    category: "State & Data Fetching",
    description: "Predictable client and server state synchronization.",
    skills: ["Zustand", "TanStack React Query"],
  },
  {
    category: "Backend",
    description: "Robust, secure, and production-tested API architectures.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC",
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
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Prisma", "Redis", "Supabase", "Neon"],
  },
  {
    category: "DevOps & Deployment",
    description: "Repeatable containerization and continuous integration.",
    skills: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Git", "GitHub", "Vercel", "Render"],
  },
  {
    category: "AI Integration",
    description: "Product-level artificial intelligence workflows.",
    skills: [
      "OpenAI API",
      "OpenAI Whisper",
      "LLM Integration",
      "Prompt Engineering",
      "AI Agents",
      "Postman",
    ],
  },
];
