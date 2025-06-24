export default function TechnicalExpertiseSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Technical Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left column - Primary skills */}
        <div className="col-span-2 p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] transition-all">
          <h3 className="text-xl font-semibold mb-4">Core Skills</h3>

          <div className="space-y-6">
            {/* Machine Learning */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Machine Learning & AI</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_15%,transparent)]">
                  Advanced
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "TensorFlow/Keras",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "OpenCV",
                  "RAG",
                  "LLMs",
                  "Computer Vision",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Development */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Software Development</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_15%,transparent)]">
                  Advanced
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "Linux", "GCP", "VS Code", "Docker", "SQL", "System Design"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hardware & Embedded Systems */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Hardware & Embedded Systems</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_15%,transparent)]">
                  Intermediate
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["FPGA", "Verilog", "Arduino", "Microcontrollers"].map(
                  (skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-[color-mix(in_oklch,var(--color-primary)_5%,transparent)]"
                  >
                    {skill}
                  </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Progress bars for languages */}
        <div className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)]">
          <h3 className="text-xl font-semibold mb-4">Languages</h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Python</span>
                <span className="text-xs">95%</span>
              </div>
              <div className="h-2 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
                <div
                  className="h-full rounded-full bg-[var(--color-primary)]"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">C/C++</span>
                <span className="text-xs">70%</span>
              </div>
              <div className="h-2 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
                <div
                  className="h-full rounded-full bg-[var(--color-primary)]"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Verilog</span>
                <span className="text-xs">60%</span>
              </div>
              <div className="h-2 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
                <div
                  className="h-full rounded-full bg-[var(--color-primary)]"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">JavaScript</span>
                <span className="text-xs">70%</span>
              </div>
              <div className="h-2 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
                <div
                  className="h-full rounded-full bg-[var(--color-primary)]"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">SQL</span>
                <span className="text-xs">70%</span>
              </div>
              <div className="h-2 rounded-full bg-[color-mix(in_oklch,var(--color-primary)_10%,transparent)]">
                <div
                  className="h-full rounded-full bg-[var(--color-primary)]"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
