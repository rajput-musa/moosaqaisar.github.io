import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  details?: {
    summary: string;
    sections: {
      title: string;
      list: string[];
      isOrdered: boolean;
    }[];
  };
  links: {
    github?: string;
    live?: string;
  };
  tags: string[];
}

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}projects.json`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundProject = Array.isArray(data)
          ? data.find((p: Project) => p.id === projectId)
          : null;
        setProject(foundProject);
      } catch (error) {
        console.error("Error fetching project:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch project",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg">Loading project...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[50vh] space-y-4">
        <p className="text-lg text-red-500">Error: {error}</p>
        <p className="text-sm">Please try refreshing the page</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-lg">Project not found</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div>
        <Link to="/projects" className="text-blue-400 hover:underline mb-4 block">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-sm rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              <i className="fab fa-github mr-2"></i>GitHub
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              <i className="fas fa-globe mr-2"></i>Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="text-gray-300 space-y-6">
        <p className="whitespace-pre-wrap">{project.details?.summary}</p>
        {project.details?.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
            {section.isOrdered ? (
              <ol className="list-decimal list-inside space-y-1">
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul className="list-disc list-inside space-y-1">
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
} 