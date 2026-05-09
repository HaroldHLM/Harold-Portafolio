export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 flex items-center ">
      <div className="max-w-4xl">
        <span className="text-sm uppercase tracking-[0.2em] text-(--dorado)">
          About Me
        </span>

        <h2 className="mt-4 text-5xl font-bold text-(--text)">
          Desarrollo experiencias web modernas y automatizaciones inteligentes.
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-(--muted)">
          Soy desarrollador de software enfocado en aplicaciones web modernas,
          arquitectura escalable e integración de inteligencia artificial.
          Disfruto crear productos rápidos, visualmente limpios y pensados para
          resolver problemas reales.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "AI"].map(
            (tech) => (
              <span
                key={tech}
                className="border border-(--border) px-4 py-2 text-sm text-(--text)"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
