import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url: string;
  logo?: string;
}

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <a
    href={cert.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-6 rounded-xl border border-transparent hover:border-blue-500/30 transition-all hover:shadow-lg group"
  >
    <div className="flex items-start gap-4">
      {/* Icon can be added here later if logos are provided */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
          {cert.title}
        </h3>
        <p className="text-md text-slate-400 mt-1">{cert.issuer}</p>
        <p className="text-sm text-slate-500 mt-2">
          Issued: {new Date(cert.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>
      </div>
      <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </div>
  </a>
);

export default function Certifications() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch("/certifications.json");
        if (!response.ok) {
          throw new Error("Failed to fetch certifications");
        }
        const data = await response.json();
        setCerts(data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <h1 className="text-4xl font-bold">Certifications</h1>
      <p className="text-lg text-slate-400">
        A collection of certifications I've earned to supplement my formal education and stay current with industry trends.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </motion.div>
  );
} 