import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import MindMeshCaseStudy from "@/components/MindMeshCaseStudy";
import ProjectGrid from "@/components/ProjectGrid";
import SkillsMatrix from "@/components/SkillsMatrix";
import EngineeringApproach from "@/components/EngineeringApproach";
import AptiScriptCallout from "@/components/AptiScriptCallout";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveTechBackground from "@/components/InteractiveTechBackground";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 flex flex-col antialiased relative">
      <InteractiveTechBackground />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1 relative z-10">
        <Hero />
        <About />
        <ExperienceTimeline />
        <MindMeshCaseStudy />
        <ProjectGrid />
        <SkillsMatrix />
        <EngineeringApproach />
        <AptiScriptCallout />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
