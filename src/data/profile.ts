export interface Profile {
  name: string;
  role: string;
  subRole: string;
  company: string;
  agency: {
    name: string;
    tagline: string;
    description: string;
    url: string;
  };
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  summary: string;
  availability: string;
}

export const profileData: Profile = {
  name: "Sheikh Sudais",
  role: "AI Full Stack Developer",
  subRole: "Software Engineer • Full-Stack & Backend Systems",
  company: "Devline Solutions",
  agency: {
    name: "AptiScript Technologies",
    tagline: "Building Next Generation Software.",
    description: "Software development company delivering full-cycle web, mobile, backend systems, and AI-integrated applications through a team-based model.",
    url: "https://aptiscript.com",
  },
  location: "Lahore, Pakistan",
  email: "contact.sudais1@gmail.com",
  github: "https://github.com/Sudais-Sarfraz",
  linkedin: "https://linkedin.com/in/sheikh-sudais",
  resumeUrl: "/resume.pdf",
  summary:
    "Software engineer focused on building production-oriented full-stack applications, backend systems, DevOps workflows, and AI-integrated products. Currently working as an AI Full Stack Developer at Devline Solutions, while building AptiScript Technologies.",
  availability: "Available for Software Engineering & AI Full-Stack Roles",
};
