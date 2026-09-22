export interface Education {
  institution: string;
  degree: string;
  graduationYear: string;
  grade: string;
  location: string;
  focusAreas: string[];
  capstone: {
    title: string;
    description: string;
  };
}

export const educationData: Education = {
  institution: "University of Central Punjab (UCP)",
  degree: "Bachelor of Science in Software Engineering (BSSE)",
  graduationYear: "2026",
  grade: "CGPA 3.21 / 4.0",
  location: "Lahore, Pakistan",
  focusAreas: [
    "Software Architecture & API Design",
    "Distributed Systems & Database Engineering",
    "Data Structures & Algorithms",
    "Full-Stack Web & Backend Engineering",
    "Artificial Intelligence & Machine Learning",
  ],
  capstone: {
    title: "MindMesh — AI-Assisted Project Planning System",
    description: "Final Year Project capstone transforming requirements and meeting intelligence into structured agile deliverables.",
  },
};
