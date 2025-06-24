export default function AboutSection() {
  return (
    <section className="relative">
      <div className="relative mb-12">
        <img
          src="/assets/About/cover.jpg"
          alt="Moosa Qaisar"
          className="w-full h-auto object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex flex-col justify-start items-start py-4 px-4 md:px-12 bg-gradient-to-r from-[color-mix(in_oklch,black_25%,transparent)] to-transparent">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white custom-outline">
            Moosa Qaisar
          </h1>
          <div className="flex flex-row space-x-2">
            <p className="text-xl md:text-2xl opacity-90 font-light text-orange-400 custom-outline">
              Student.
            </p>
            <p className="text-xl md:text-2xl opacity-90 font-light text-blue-400 custom-outline">
              Researcher.
            </p>
            <p className="text-xl md:text-2xl opacity-90 font-light text-white custom-outline">
              Builder.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="prose prose-adaptive prose-lg max-w-none">
          <p className="text-xl leading-relaxed">
            As a Computer Engineering student with a strong passion for
            Artificial Intelligence and Machine Learning, I am dedicated to
            building smart, end-to-end solutions. I have hands-on experience
            in developing and implementing machine learning models, with a focus
            on computer vision and Natural Language Processing.
          </p>
          <p className="text-xl leading-relaxed">
            I am driven by a desire to innovate and solve complex problems.
            My project experience includes developing a real-time face mask
            detector and a Devanagari character recognition system. I am always
            eager to learn and apply new technologies to create real-world
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}
