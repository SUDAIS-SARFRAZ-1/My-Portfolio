export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  isFlagship: boolean;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "mindmesh",
    title: "MindMesh",
    subtitle: "AI-Assisted Project Planning & Intelligence System",
    category: "AI & Full-Stack Flagship",
    type: "Full-Stack AI Project Planning Platform",
    isFlagship: true,
    description:
      "A project planning platform that transforms raw project requirements and voice meeting discussions into structured agile project artifacts, epics, sprint tasks, and stakeholder updates.",
    problem:
      "Engineering teams lose critical time deciphering unstructured meeting notes, coordinating action items across disconnected tools, and manually drafting sprint backlogs.",
    solution:
      "MindMesh automates requirement extraction and meeting intelligence using an AI pipeline that transcribes voice via Whisper, extracts consensus decisions via LLMs, and populates structured sprint deliverables into Jira and GitHub.",
    features: [
      "Requirement Understanding & Decomposition",
      "Meeting Intelligence with OpenAI Whisper",
      "Automated Sprint & Agile Artifact Generation",
      "Hybrid Persistence: MongoDB for AI memory + PostgreSQL for sprint integrity",
      "Real-time event updates via WebSockets (Socket.io)",
      "Role-Based Access Control (RBAC) & JWT Security",
    ],
    techStack: [
      "React / Next.js",
      "Node.js / Express",
      "FastAPI (Python)",
      "OpenAI LLM",
      "Whisper (Speech-to-Text)",
      "PostgreSQL",
      "MongoDB",
      "WebSockets",
      "Docker",
      "CI/CD",
    ],
    demoUrl: "https://mindmesh.dev",
    repoUrl: "https://github.com/Sudais-Sarfraz/MindMesh",
  },
  {
    id: "moviemania",
    title: "MovieMania",
    subtitle: "Full-Stack Movie Discovery & Watchlist Platform",
    category: "Full-Stack Web App",
    type: "Full-Stack Entertainment Discovery App",
    isFlagship: false,
    description:
      "A complete movie and TV discovery application featuring instant search, live trailers, comprehensive cast information, and authenticated watchlist curation.",
    problem:
      "Users face friction finding reliable streaming info and saving watchlist recommendations across fragmented entertainment databases.",
    solution:
      "Built an optimized single-page interface integrated with TMDB REST APIs, JWT authentication, and MongoDB persistence for personalized watchlists and user ratings.",
    features: [
      "Movie & TV discovery with category filtering",
      "Sub-second search & browsing across TMDB catalog",
      "Detailed film overviews, trailers, and cast credits",
      "Authenticated user watchlists with JWT sessions",
      "Responsive UI built with React & Tailwind CSS",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "TMDB API", "Vercel", "Render"],
    demoUrl: "https://moviemania-showcase.vercel.app",
    repoUrl: "https://github.com/Sudais-Sarfraz/MovieMania",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker API",
    subtitle: "Personal Finance & Expense Ledger REST API",
    category: "Backend & REST APIs",
    type: "Personal Finance REST API",
    isFlagship: false,
    description:
      "A secure personal finance API built with Node.js and Express to record multi-currency transactions, manage monthly savings goals, and track initial balances.",
    problem:
      "Personal budgeting applications demand strict input validation, reliable balance calculation, and secure route protection to prevent financial record leakage.",
    solution:
      "Architected a robust Express/MongoDB REST API featuring JWT authentication, protected endpoints, atomic expense calculation, and financial goal tracking.",
    features: [
      "Secure user authentication with JWT tokens",
      "Expense tracking and categorization endpoints",
      "Financial savings goal tracking with status alerts",
      "Initial balance reconciliation and ledger queries",
      "Strict route authorization and input validation",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "REST API", "HTML/CSS/JavaScript"],
    repoUrl: "https://github.com/Sudais-Sarfraz/Finance-Tracker-API",
  },
  {
    id: "fitverse",
    title: "FitVerse",
    subtitle: "Athletic Gear & E-Commerce Affiliate Platform",
    category: "E-Commerce & Frontend",
    type: "E-Commerce / Affiliate Platform",
    isFlagship: false,
    description:
      "A responsive storefront designed for athletic apparel and fitness accessories, optimized for product browsing speed, high conversion, and clean navigation.",
    problem:
      "High bounce rates in e-commerce often result from cluttered navigation, slow catalog rendering, and poor mobile checkout flows.",
    solution:
      "Developed a clean, fast-loading storefront with category filtering, responsive product viewports, and streamlined affiliate conversion paths.",
    features: [
      "Dynamic athletic catalog and category filtering",
      "High-speed image delivery and mobile-first responsiveness",
      "Product showcase with specifications and variant views",
      "Optimized affiliate tracking pathways",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Zustand", "Responsive UI"],
    demoUrl: "https://fitverse-store.vercel.app",
    repoUrl: "https://github.com/Sudais-Sarfraz/FitVerse",
  },
];
