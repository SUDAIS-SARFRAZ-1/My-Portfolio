export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  type: "Full-Time Role" | "Agency & Leadership";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    company: "Devline Solutions",
    role: "Full Stack Intern",
    period: "Present",
    location: "Lahore, Pakistan",
    isCurrent: true,
    type: "Full-Time Role",
    summary:
      "Completed a full-stack development roadmap covering React, Node.js, Express.js, REST APIs, SQL, databases, authentication, RBAC, state management, and DevOps, then shipped a complete e-commerce application end-to-end.",
    responsibilities: [
      "Completed a full-stack development roadmap covering React, Node.js, Express.js, REST APIs, SQL, databases, authentication, RBAC, state management, and DevOps.",
      "Developed a complete e-commerce application with customer interface, admin dashboard, authentication, RBAC, cart, and payment checkout.",
      "Implemented Zustand for client-side state management and TanStack React Query for API caching, mutations, loading, error handling, and server-state synchronization.",
      "Built backend APIs using Node.js, Express.js, and REST architecture with authentication and role-based authorization.",
      "Applied Git/GitHub workflows and development practices throughout project implementation.",
    ],
    technologies: ["React", "Node.js", "Express.js", "REST APIs", "SQL", "JWT", "RBAC", "Zustand", "TanStack React Query", "Git / GitHub"],
  },
  {
    company: "AptiScript Technologies",
    role: "Founder & Lead Developer",
    period: "2023 — Present",
    location: "Lahore, Pakistan",
    isCurrent: true,
    type: "Agency & Leadership",
    summary:
      "Steering a software house delivering full-cycle web applications, mobile platforms, backend systems, and DevOps infrastructure through a team-based model.",
    responsibilities: [
      "Oversee software architecture, technical discovery, and delivery milestones across client engagements.",
      "Coordinate development squads across frontend, backend, database engineering, and QA.",
      "Architect repeatable deployment workflows leveraging Docker, GitHub Actions, and cloud hosting platforms.",
      "Work closely with clients to translate business requirements into clean, scalable technical roadmaps.",
    ],
    technologies: ["System Architecture", "Node.js", "Next.js", "PostgreSQL", "APIs & Webhooks", "Docker", "CI/CD"],
  },
];
