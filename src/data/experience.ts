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
    role: "AI Full Stack Developer",
    period: "2024 — Present",
    location: "Lahore, Pakistan",
    isCurrent: true,
    type: "Full-Time Role",
    summary:
      "Developing production full-stack web applications, architecting backend REST APIs, and integrating practical AI/LLM functionality into client-facing platforms.",
    responsibilities: [
      "Develop end-to-end web applications with Next.js (App Router), React, and TypeScript.",
      "Design and maintain scalable Node.js/Express backend APIs, database schemas, and data pipelines.",
      "Integrate Large Language Model (LLM) workflows and OpenAI Whisper speech-to-text into business applications.",
      "Implement secure authentication, role-based access control (RBAC), and session management.",
      "Configure Docker containers and GitHub Actions CI/CD pipelines for automated testing and deployment.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "AI / LLMs", "Docker"],
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
