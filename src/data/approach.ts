export interface EngineeringPrinciple {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "end-to-end",
    title: "Build End-to-End",
    subtitle: "Complete Ownership",
    description:
      "From responsive frontend interfaces to backend APIs, database schemas, authentication boundaries, and edge deployment.",
    badge: "Full-Cycle",
  },
  {
    id: "backend-first",
    title: "Backend-First Thinking",
    subtitle: "Architecture & Integrity",
    description:
      "Prioritize clean API design, strict data modeling, relational constraints, system behavior, and long-term maintainability over quick frontend workarounds.",
    badge: "Reliability",
  },
  {
    id: "automation",
    title: "Practical Automation",
    subtitle: "Repeatable Workflows",
    description:
      "Leverage Docker containerization and GitHub Actions CI/CD to make development environments, automated testing, and deployments fully predictable.",
    badge: "DevOps",
  },
  {
    id: "ai-product",
    title: "AI as a Product Capability",
    subtitle: "Solve Real Problems",
    description:
      "Integrate AI where it genuinely solves an operational bottleneck—like speech transcription or multi-agent task breakdown—rather than adding buzzwords for vanity.",
    badge: "Practical AI",
  },
  {
    id: "continuous-learning",
    title: "Continuous Evolution",
    subtitle: "Deepening Systems Mastery",
    description:
      "Demonstrate continuous growth by architecting increasingly complex distributed applications, real-time event systems, and multi-agent topologies.",
    badge: "Growth",
  },
];
