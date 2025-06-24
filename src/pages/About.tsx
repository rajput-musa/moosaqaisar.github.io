import { motion } from "framer-motion";
import { useEffect } from "react";
import "react-medium-image-zoom/dist/styles.css";

import { Project as ProjectType } from "../components/ProjectCard";
import TLDR from "../components/tldr";
import AboutSection from "../components/about/AboutSec";
import WorkExperienceSection from "../components/about/WorkExperience";
import EducationSection from "../components/about/Education";
import TechnicalExpertiseSection from "../components/about/TechnicalExpertise";
import GitHubChart from "../components/Git";

const currentProjectIds = [
  "voxed",
  "illini-plan",
  "manim-video-agent",
  "illini-spots",
];

export default function About() {
  useEffect(() => {
    // Add a class to the document to ensure dark mode is respected
    document.documentElement.classList.add("color-scheme-adaptive");

    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/aidanandrews22/aidanandrews22.github.io/main/content/projects.json",
        );
        if (!response.ok) throw new Error("Failed to fetch projects");
        const allProjects = await response.json();
        /* const filteredProjects = */ allProjects.filter(
          (project: ProjectType) => currentProjectIds.includes(project.id),
        );
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
          href="/assets/MoosaQaisar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm rounded-lg border border-[color-mix(in_oklch,var(--color-primary)_10%,transparent)] hover:bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)] transition-colors"
        >
          Resume
        </a>
        <a
          href="/assets/CoverLetter.pdf"
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
      <TechnicalExpertiseSection />
    </motion.div>
  );
}
