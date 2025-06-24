import uetLogo from "/assets/uet-logo.png";
import pgcLogo from "/assets/pgc-logo.png";

export default function EducationSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Education</h2>

      <div
        id="education-uet"
        className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] transition-all hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden relative mx-auto">
              <img
                src={uetLogo}
                alt="UET Taxila Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="px-2 py-1 text-xs rounded-full bg-[color-mix(in_oklch,var(--color-primary)_15%,transparent)]">
                3.36 GPA
              </span>
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[color-mix(in_oklch,var(--color-primary)_90%,currentColor)]">
              University of Engineering and Technology, Taxila
            </h3>
            <p className="text-lg font-semibold mt-1">
              Bachelor of Science in Computer Engineering
            </p>
          </div>
        </div>
      </div>

      <div
        id="education-pgc"
        className="p-6 rounded-xl border border-transparent hover:border hover:border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] transition-all hover:shadow-lg"
      >
        <div className="flex flex-col md:flex-row gap-6">
           <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden relative mx-auto">
              <img
                src={pgcLogo}
                alt="Punjab Group of Colleges Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="px-2 py-1 text-xs rounded-full bg-[color-mix(in_oklch,var(--color-primary)_15%,transparent)]">
                87%
              </span>
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[color-mix(in_oklch,var(--color-primary)_90%,currentColor)]">
              Punjab Group of Colleges
            </h3>
            <p className="text-lg font-semibold mt-1">
              F.Sc Pre Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
