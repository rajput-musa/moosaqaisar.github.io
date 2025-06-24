import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";

import resumePdf from "/assets/PDF/MoosaQaisar.pdf";
import coverLetterPdf from "/assets/PDF/CoverLetter.pdf";

import { Project as ProjectType } from "../components/ProjectCard";
import TLDR from "../components/tldr";
import AboutSection from "../components/about/AboutSec";
import WorkExperienceSection from "../components/about/WorkExperience";
import EducationSection from "../components/about/Education";
import TechnicalExpertiseSection from "../components/about/TechnicalExpertise";
import GitHubChart from "../components/Git";
import ProjectCard from "../components/ProjectCard";

const currentProjectIds = [
  "echo-chamber",
  "lingo-v-lingo",
  "campus-navigation-system",
  "val-reverie",
];

const CurrentProjectsSection = ({ projects }: { projects: ProjectType[] }) => (
  <section>
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Current Projects</h2>
      <a
        href="/projects"
        className="px-4 py-2 text-sm rounded-lg border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] hover:bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)] transition-colors"
      >
        View all →
      </a>
    </div>
    <p className="text-lg mb-8">
      Building meaningful projects is how I translate my ideas into reality. Each
      project represents a problem I found worth solving or a question I wanted
      to explore. These featured projects showcase my current focus on creating
      practical tools that help people learn, work, and research more
      effectively.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default function About() {
  const [currentProjects, setCurrentProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    // Add a class to the document to ensure dark mode is respected
    document.documentElement.classList.add("color-scheme-adaptive");

    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}projects.json`,
        );
        if (!response.ok) throw new Error("Failed to fetch projects");
        const allProjects = await response.json();
        const filteredProjects = allProjects.filter((project: ProjectType) =>
          currentProjectIds.includes(project.id),
        );
        setCurrentProjects(filteredProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();

    // Cleanup function
    return () => {
      document.documentElement.classList.remove("color-scheme-adaptive");
    };
  }, []);

  const ImportantDocuments = () => (
    <div className="mt-8 mb-8 pb-6 border-b border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
      <h3 className="text-lg font-semibold mb-4">Important Documents</h3>
      <div className="flex flex-wrap gap-3">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm rounded-lg border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] hover:bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)] transition-colors"
        >
          Resume
        </a>
        <a
          href={coverLetterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm rounded-lg border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] hover:bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)] transition-colors"
        >
          Cover Letter
        </a>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto space-y-16 pb-12"
    >
      <TLDR />
      <GitHubChart username="rajput-musa" />
      <ImportantDocuments />
      <AboutSection />
      <WorkExperienceSection />
      <EducationSection />
      {currentProjects.length > 0 && (
        <CurrentProjectsSection projects={currentProjects} />
      )}
      <TechnicalExpertiseSection />
    </motion.div>
  );
}
