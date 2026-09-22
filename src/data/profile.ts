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
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  summary: string;
  availability: string;
}

export const profileData: Profile = {
  name: "Sudais Sarfraz",
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
  email: "sudais.sarfraz.1@gmail.com",
  phone: "+92 301-9492010",
  whatsapp: "https://wa.me/923019492010",
  github: "https://github.com/SUDAIS-SARFRAZ-1",
  linkedin: "https://www.linkedin.com/in/sudais-sarfraz/",
  resumeUrl: "/resume.pdf",
  summary:
    "Software Engineer experienced in building and deploying scalable web applications using MERN, with a strong focus on backend development, REST APIs, authentication, RBAC, databases, Docker, and CI/CD. Experienced in delivering end-to-end applications, including e-commerce and AI-integrated systems.",
  availability: "Available for Software Engineering & AI Full-Stack Roles",
};
