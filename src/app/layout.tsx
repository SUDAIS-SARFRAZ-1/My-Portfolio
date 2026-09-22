import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sudais Sarfraz | AI Full Stack Developer & Founder",
  description:
    "Personal portfolio of Sudais Sarfraz — AI Full Stack Developer at Devline Solutions and Founder of AptiScript Technologies. Building multi-agent systems, Next.js applications, and resilient cloud backends.",
  keywords: [
    "Sudais Sarfraz",
    "AI Full Stack Developer",
    "MERN Developer Lahore",
    "Multi-Agent AI Systems",
    "Next.js Developer",
    "Devline Solutions",
    "AptiScript Technologies",
    "MindMesh",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: "Sudais Sarfraz" }],
  creator: "Sudais Sarfraz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sheikhsudais.dev",
    title: "Sudais Sarfraz | AI Full Stack Developer & Founder",
    description:
      "Explore the portfolio of Sudais Sarfraz — AI Full Stack Developer & Founder of AptiScript Technologies. Flagship multi-agent architecture, enterprise MERN, and production AI.",
    siteName: "Sudais Sarfraz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudais Sarfraz | AI Full Stack Developer & Founder",
    description:
      "AI Full Stack Developer & Founder of AptiScript Technologies. Specialized in multi-agent orchestration and high-scale web engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sudais Sarfraz",
  jobTitle: "AI Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Devline Solutions",
  },
  founder: {
    "@type": "Organization",
    name: "AptiScript Technologies",
    url: "https://aptiscript.com",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Central Punjab",
  },
  url: "https://sheikhsudais.dev",
  sameAs: [
    "https://github.com/SUDAIS-SARFRAZ-1",
    "https://www.linkedin.com/in/sudais-sarfraz/",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Multi-Agent Systems",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "OpenAI Whisper",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f6f7fb] text-[#0f172a] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
