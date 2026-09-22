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
      "Led backend development on MindMesh, designing REST APIs, JWT authentication, RBAC, multi-project management, and WebSocket notifications, with 4 AI agents automating requirement extraction and meeting intelligence: transcribing voice via Whisper, extracting consensus decisions via LLMs, and populating structured sprint deliverables into Jira and GitHub.",
    features: [
      "Led backend development integrating LLMs and OpenAI Whisper",
      "REST APIs, JWT authentication, RBAC, and multi-project management",
      "4 AI agents for project management, outreach, meeting intelligence, and analytics",
      "Meeting recordings converted into transcriptions, summaries, tasks, and sprint planning artifacts",
      "Hybrid Persistence: MongoDB for AI memory + PostgreSQL for sprint integrity",
      "Real-time event updates via WebSockets (Socket.io)",
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
    repoUrl: "https://github.com/SUDAIS-SARFRAZ-1/MindMesh",
  },
  {
    id: "organicstore",
    title: "Organic Store E-Commerce",
    subtitle: "Full-Stack Organic Grocery E-Commerce Platform",
    category: "Full-Stack Web App",
    type: "Full-Stack E-Commerce Platform",
    isFlagship: false,
    description:
      "A complete organic grocery shopping platform featuring a modern customer storefront, secure authentication, product management, shopping cart functionality, and an administrative dashboard for managing e-commerce operations.",
    problem:
      "Organic grocery shoppers need reliable category filtering, fast search, and a trustworthy checkout flow, while store operators need a single dashboard to manage products, orders, and users without friction.",
    solution:
      "Built a RESTful Node.js/Express/MongoDB backend paired with a React storefront using Zustand for global state and TanStack React Query for API caching, mutations, and server-state synchronization, backed by JWT auth with role-based access control.",
    features: [
      "Product browsing with category filtering and search",
      "Organic grocery catalog with detailed product information",
      "Secure authentication with JWT and role-based access control (RBAC)",
      "Shopping cart management and checkout workflow",
      "Payment checkout integration",
      "Order management and purchase tracking",
      "Customer account management",
      "Admin dashboard for product, order, and user management",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Zustand",
      "TanStack React Query",
      "REST API",
    ],
    demoUrl: "https://organic-store-liart.vercel.app/",
    repoUrl: "https://github.com/SUDAIS-SARFRAZ-1/OrganicStore",
  },
  {
    id: "moviemania",
    title: "MovieMania",
    subtitle: "Full-Stack Movie Discovery & Watchlist Platform",
    category: "Full-Stack Web App",
    type: "Full-Stack Entertainment Discovery App",
    isFlagship: false,
    description:
      "A complete movie and TV discovery application featuring instant search, category-based browsing, detailed entertainment information, trailers, and authenticated watchlist management powered by the TMDB API.",
    problem:
      "Users face friction finding reliable streaming info and saving watchlist recommendations across fragmented entertainment databases.",
    solution:
      "Built an optimized React interface integrated with the TMDB REST API, JWT authentication, and MongoDB-backed watchlist CRUD, deployed with a Vercel frontend and Render backend.",
    features: [
      "Movie and TV discovery with category filtering",
      "Instant movie and TV search powered by the TMDB API",
      "Detailed movie and TV show pages with overviews and trailers",
      "Comprehensive cast and production company information",
      "TV show seasons and episode details",
      "JWT-based user authentication and authorization",
      "Personalized watchlist creation and management",
      "MongoDB-backed watchlist CRUD operations",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "TMDB API", "Vercel", "Render"],
    demoUrl: "https://movie-mania-roan.vercel.app/home",
    repoUrl: "https://github.com/SUDAIS-SARFRAZ-1/MovieMania",
  },
];
