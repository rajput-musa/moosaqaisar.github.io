interface PdfFile {
  name: string;
  label: string;
  lastUpdated: string;
  group: "transcript" | "other";
}
export default function AboutSection() {
  const pdfFiles: PdfFile[] = [
    {
      name: "Aidan_Andrews_Official_Transcript.pdf",
      label: "Official-Transcript",
      lastUpdated: "2024-12-25",
      group: "transcript",
    },
    {
      name: "Aidan_Andrews_Unofficial_Transcript.pdf",
      label: "Unofficial-Transcript",
      lastUpdated: "2025-01-06",
      group: "transcript",
    },
    {
      name: "Aidan_Andrews_Resume.pdf",
      label: "Resume",
      lastUpdated: "2025-01-06",
      group: "other",
    },
    {
      name: "cover-letter.pdf",
      label: "Cover Letter",
      lastUpdated: "2024-10-08",
      group: "other",
    },
  ];

  return (
    <section className="relative">
      <div className="space-y-6">
        <div className="prose prose-adaptive prose-lg max-w-none">
          <p className="text-xl leading-relaxed">
            AI/ML enthusiast with an engineering mindset, building smart, end-to-end solutions. Passionate about RAG, agents, LLMs & computer vision turning advanced models into real-world impact.
          </p>

          <h3 className="text-2xl font-bold mt-12 mb-4">Relevant Experience</h3>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              Developed cutting-edge Natural Language Processing (NLP) systems focusing on optimizing Retrieval-Augmented Generation (RAG) to improve large-scale information retrieval and intent classification.
            </li>
            <li>
              Developed a hybrid retrieval strategy combining sparse (BM25) and dense (FAISS) methods, followed by a cross-encoder reranking stage to significantly boost context relevance and accuracy.
            </li>
            <li>
              Applied complex similarity metrics (e.g., cosine similarity, Euclidean distance) and vector space models for efficient data processing in resource-constrained environments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
